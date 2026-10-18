import assert from 'node:assert/strict';
import { verifyPlan, buildMessages } from '../lib/core.js';
const ctx = { full: 'a/b', description: 'd', language: 'JS', readme: 'hi', paths: new Set(['src/app.js', 'package.json']), dirs: new Set(['src', 'docs']), promptPaths: ['package.json', 'src/app.js'] };
const v = verifyPlan({ steps: [{ title: 't', detail: 'Edit `src/ghost.js` and `src/app.js`', files: ['src/app.js', './package.json', 'nope/x.js'], new_files: ['docs/new.md', 'ghost-dir/y.md'] }] }, ctx);
console.log(JSON.stringify(v.steps[0].refs));
assert.deepEqual(v.missing.sort(), ['ghost-dir/y.md', 'nope/x.js', 'src/ghost.js']);
assert.equal(v.verified, 3); assert.equal(v.total, 6);
assert.ok(buildMessages(ctx, { number: 1, title: 'T', body: 'B' }, ['nope/x.js'])[1].content.includes('nope/x.js'));
console.log('OFFLINE OK');
