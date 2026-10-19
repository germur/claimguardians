import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, access, stat } from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'parse5';

// Run after npm run build. Inspect generated HTML, not source templates.
const root = 'apps/claimguardians-web/dist';
const origin = 'https://allclaimguardians.com';
const nodes = n => [n, ...(n.childNodes || []).flatMap(nodes)];
const attr = (n, key) => n.attrs?.find(a => a.name === key)?.value;
const text = n => n.nodeName === '#text' ? n.value : (n.childNodes || []).map(text).join(' ');
const clean = s => s.replace(/\s+/g, ' ').trim();
const pages = new Map();
for (const f of (await readdir(root, { recursive: true })).filter(f => f.endsWith('.html'))) {
  const url = '/' + f.replaceAll('\\', '/').replace(/index.html$/, '');
  const html = await readFile(path.join(root, f), 'utf8');
  const all = nodes(parse(html));
  const schemas = all.filter(n => n.tagName === 'script' && attr(n, 'type') === 'application/ld+json')
    .flatMap(n => { const s = JSON.parse(text(n)); return s['@graph'] || [s]; });
  pages.set(url, { all, schemas, html, noindex: all.some(n => n.tagName === 'meta' && attr(n, 'name') === 'robots' && attr(n, 'content')?.includes('noindex')) });
}
const indexable = [...pages].filter(([, p]) => !p.noindex);

test('sitemap lists exactly the indexable canonical pages', async () => {
  const xml = await readFile(path.join(root, 'sitemap-0.xml'), 'utf8');
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  assert.equal(new Set(urls).size, urls.length);
  assert.deepEqual(urls.toSorted(), indexable.map(([url]) => origin + url).toSorted());
  for (const [url, p] of indexable) {
    const canonicals = p.all.filter(n => n.tagName === 'link' && attr(n, 'rel') === 'canonical');
    assert.equal(canonicals.length, 1, url);
    assert.equal(attr(canonicals[0], 'href'), origin + url);
  }
});

test('internal links and fragments resolve, and every indexable page is reachable from home', async () => {
  const graph = new Map();
  for (const [url, p] of pages) {
    graph.set(url, []);
    for (const a of p.all.filter(n => n.tagName === 'a' && attr(n, 'href'))) {
      const target = new URL(attr(a, 'href'), origin + url);
      if (target.origin !== origin) continue;
      const destination = pages.get(target.pathname);
      if (!destination) {
        const entry = await stat(path.join(root, decodeURIComponent(target.pathname)));
        assert.ok(entry.isFile(), url + ': link requires a redirect: ' + target.pathname);
        continue;
      }
      graph.get(url).push(target.pathname);
      if (target.hash) assert.ok(destination.all.some(n => attr(n, 'id') === decodeURIComponent(target.hash.slice(1))), url + ': ' + target.href);
    }
  }
  const reached = new Set(['/']);
  for (const url of reached) for (const next of graph.get(url) || []) reached.add(next);
  for (const [url] of indexable) assert.ok(reached.has(url), 'Orphan page: ' + url);
});

test('structured data keeps one company identity, valid service providers and visible FAQ content', () => {
  for (const [url, p] of pages) {
    if (url === '/__forms.html') continue;
    const companies = p.schemas.filter(s => s['@type'] === 'LocalBusiness');
    assert.equal(companies.length, 1, url);
    assert.equal(companies[0]['@id'], origin + '/#organization');
    assert.equal(companies[0].email, 'home@allclaimguardians.com');
    assert.equal(companies[0].address.addressLocality, 'Weston');
    const visible = clean(text(parse(p.html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ''))));
    for (const s of p.schemas) {
      if (s['@type'] === 'Service') assert.equal(s.provider['@id'], origin + '/#organization', url);
      if (s['@type'] === 'FAQPage') for (const q of s.mainEntity) {
        assert.ok(visible.includes(clean(q.name)), url + ': hidden question');
        assert.ok(visible.includes(clean(q.acceptedAnswer.text)), url + ': different answer');
      }
      if (s['@type'] === 'BreadcrumbList') s.itemListElement.forEach((item, i) => {
        assert.equal(item.position, i + 1, url);
        if (item.item) assert.ok(pages.has(new URL(item.item).pathname), url + ': breadcrumb target');
      });
    }
  }
});

test('robots permits public content and utility pages carry noindex', async () => {
  const robots = await readFile(path.join(root, 'robots.txt'), 'utf8');
  assert.match(robots, /User-agent: \*\s+Allow: \//);
  assert.match(robots, /Sitemap: https:\/\/allclaimguardians.com\/sitemap-index.xml/);
  assert.doesNotMatch(robots, /^Disallow:\s*\/\s*$/m);
  for (const url of ['/404.html', '/__forms.html', '/free-claim-review/thank-you/']) assert.ok(pages.get(url).noindex, url);
});

test('redirects cover index aliases and sitemap without loops or nonexistent targets', async () => {
  const rules = (await readFile(path.join(root, '_redirects'), 'utf8')).split(/\r?\n/).filter(l => l.trim() && !l.startsWith('#')).map(l => l.trim().split(/\s+/));
  const sources = new Set();
  for (const [from, to, status] of rules) {
    assert.ok(!sources.has(from), 'Duplicate redirect: ' + from); sources.add(from);
    assert.notEqual(from, to); assert.equal(status.replace('!', ''), '301');
    if (!pages.has(to)) await access(path.join(root, to));
    assert.ok(!rules.some(([source]) => source === to), 'Redirect chain: ' + from);
  }
  for (const [url] of pages) if (url.endsWith('/')) assert.ok(sources.has(url + 'index.html'), url);
});
