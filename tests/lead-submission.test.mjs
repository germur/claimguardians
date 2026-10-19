import test from 'node:test';
import assert from 'node:assert/strict';
import { submitLead, trackLead } from '../apps/claimguardians-web/src/lib/lead-submission.ts';

test('encodes every field for the registered Netlify form', async t => {
  const original = globalThis.fetch;
  t.after(() => { globalThis.fetch = original; });
  let request;
  globalThis.fetch = async (url, options) => {
    request = { url, ...options };
    return new Response('Request received', { status: 200 });
  };
  await submitLead({ full_name: 'Test & Example', phone: '+1 202 555 0100', state: 'NC', damage_type: 'roof' });
  assert.equal(request.url, '/__forms.html');
  assert.equal(request.method, 'POST');
  assert.equal(request.headers['Content-Type'], 'application/x-www-form-urlencoded');
  const payload = new URLSearchParams(request.body);
  assert.equal(payload.get('form-name'), 'claim-review');
  assert.equal(payload.get('full_name'), 'Test & Example');
  assert.equal(payload.get('phone'), '+1 202 555 0100');
  assert.equal(payload.get('state'), 'NC');
});

test('rejects server failures, network failures and an unprocessed blueprint', async t => {
  const original = globalThis.fetch;
  t.after(() => { globalThis.fetch = original; });
  for (const response of [new Response('Unavailable', { status: 503 }), new Response('<body data-form-blueprint>')]) {
    globalThis.fetch = async () => response;
    await assert.rejects(submitLead({ phone: '2025550100' }));
  }
  globalThis.fetch = async () => { throw new TypeError('Network failure'); };
  await assert.rejects(submitLead({ phone: '2025550100' }));
});

test('honeypot never reports success or sends a request', async t => {
  const original = globalThis.fetch;
  t.after(() => { globalThis.fetch = original; });
  globalThis.fetch = async () => { assert.fail('A filled honeypot must not be sent'); };
  await assert.rejects(submitLead({ 'bot-field': 'spam' }));
});

test('conversion events exclude personal and claim data', t => {
  const original = globalThis.window;
  t.after(() => { globalThis.window = original; });
  const events = [];
  globalThis.window = { dataLayer: events };
  trackLead({ full_name: 'Private name', phone: 'Private phone', email: 'private@example.com', description: 'Private claim details', zip_code: '12345', lead_type: 'nc_general', preferred_language: 'es' });
  assert.deepEqual(events, [{ event: 'generate_lead', lead_type: 'nc_general', preferred_language: 'es' }]);
});
