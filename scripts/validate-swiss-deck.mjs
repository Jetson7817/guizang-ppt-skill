#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const file = process.argv[2];
if (!file) {
  console.error('Usage: validate-swiss-deck.mjs <deck.html>');
  process.exit(1);
}

const html = readFileSync(file, 'utf-8');
let errors = 0;

function check(msg, condition) {
  if (!condition) {
    console.error(`❌ ${msg}`);
    errors++;
  } else {
    console.log(`✅ ${msg}`);
  }
}

// 1. No border-radius
check('No border-radius found', !/border-radius\s*:\s*[^0]/.test(html));

// 2. Only one accent color family (IKB/Lemon/Lime/Orange)
const accentMatches = [
  /#002FA7/.test(html),      // IKB
  /#FDE047/.test(html),      // Lemon Yellow
  /#65A30D/.test(html),      // Lime
  /#FF5F1F/.test(html),      // Safety Orange
].filter(Boolean).length;
check('Only one accent color family used', accentMatches === 1);

// 3. Swiss fonts present
check('Inter or Helvetica font found', /Inter|Helvetica/.test(html));
check('Noto Sans SC found', /Noto Sans SC/.test(html));

// 4. No serif fonts in body
check('No serif font in body text', !/font-family[^;]*serif/.test(html));

// 5. 8px grid alignment (margin/padding multiples of 8)
const spacingVals = [...html.matchAll(/(?:margin|padding)\s*:\s*(\d+)px/g)];
const allMult8 = spacingVals.every(([, v]) => parseInt(v) % 8 === 0);
check('Spacing values are multiples of 8px', allMult8);

// 6. Hairlines present (at least one 1px border)
check('Hairline borders present', /1px\s+solid/.test(html));

// 7. Weight contrast between headings
const h1w = html.match(/h1\s*{[^}]*font-weight\s*:\s*(\d+)/)?.[1];
const h2w = html.match(/h2\s*{[^}]*font-weight\s*:\s*(\d+)/)?.[1];
if (h1w && h2w) {
  check(`Weight contrast: H1(${h1w}) - H2(${h2w}) >= 200`, parseInt(h1w) - parseInt(h2w) >= 200);
} else {
  check('Heading weights defined', false);
}

// 8. Background is Paper (#F6F6F6) not pure white
check('Paper background (#F6F6F6) used', /#F6F6F6/.test(html));
check('No pure white (#FFFFFF) background', !/#FFFFFF|#ffffff|white\s*;/.test(html));

// Summary
console.log(`\n${errors === 0 ? '✅ All checks passed!' : `❌ ${errors} error(s) found`}`);
process.exit(errors > 0 ? 1 : 0);
