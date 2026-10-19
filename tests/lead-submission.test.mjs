import test from 'node:test';
import assert from 'node:assert/strict';
import { classifyReferrer, getTechnicalSource } from '../apps/claimguardians-web/src/lib/analytics.ts';
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

test('conversion waits for dispatch and excludes personal and claim data', async t => {
  const original = globalThis.window;
  t.after(() => { globalThis.window = original; });
  const events = [];
  globalThis.window = { gtag: (...args) => { events.push(args); } };
  let finished = false;
  const pending = trackLead({ full_name: 'Private name', phone: 'Private phone', email: 'private@example.com', description: 'Private claim details', zip_code: '12345', lead_type: 'nc_general', preferred_language: 'es' }).then(() => { finished = true; });
  await Promise.resolve();
  assert.equal(finished, false);
  const params = events[0][2];
  assert.equal(params.event_timeout, 2000);
  params.event_callback();
  await pending;
  assert.equal(finished, true);
  delete params.event_callback;
  delete params.event_timeout;
  assert.deepEqual(events, [['event', 'generate_lead', { lead_type: 'nc_general', preferred_language: 'es', technical_source: 'unavailable', declared_source: 'not_provided' }]]);
});


test('referrer classification excludes raw paths, queries and lookalike domains', () => {
  assert.equal(classifyReferrer('https://chatgpt.com/c/example?prompt=private', 'allclaimguardians.com'), 'chatgpt');
  assert.equal(classifyReferrer('https://chatgpt.com.evil.example/', 'allclaimguardians.com'), 'other_referral');
  assert.equal(classifyReferrer('https://gemini.google.com/app', 'allclaimguardians.com'), 'gemini');
  assert.equal(classifyReferrer('https://allclaimguardians.com/resources/', 'allclaimguardians.com'), 'internal');
  assert.equal(classifyReferrer('', 'allclaimguardians.com'), 'direct_or_unavailable');
});

test('technical source survives internal navigation without storing raw referrer', t => {
  const original = { document: globalThis.document, location: globalThis.location, sessionStorage: globalThis.sessionStorage };
  t.after(() => Object.assign(globalThis, original));
  const store = new Map();
  globalThis.document = { referrer: 'https://perplexity.ai/search/example?question=private' };
  globalThis.location = { hostname: 'allclaimguardians.com' };
  globalThis.sessionStorage = { getItem: key => store.get(key), setItem: (key, value) => store.set(key, value) };
  assert.equal(getTechnicalSource(), 'perplexity');
  globalThis.document.referrer = 'https://allclaimguardians.com/resources/';
  assert.equal(getTechnicalSource(), 'perplexity');
  assert.deepEqual([...store.values()], ['perplexity']);
});

test('analytics errors cannot turn an accepted lead into a failed submission', async t => {
  const original = globalThis.window;
  t.after(() => { globalThis.window = original; });
  globalThis.window = { gtag: () => { throw new Error('Analytics blocked'); } };
  await assert.doesNotReject(() => trackLead({ lead_type: 'contact', discovery_source: 'private@example.com' }));
});
