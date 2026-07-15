// Stamps every <lastmod> in sitemap.xml with today's UTC date at build/deploy time.
// Runs via vercel.json's buildCommand — no per-page change tracking, just an honest
// "this deploy is current as of" signal instead of a hand-edited date that goes stale.
const fs = require("fs");
const path = require("path");

const SITEMAP = path.join(__dirname, "..", "sitemap.xml");
const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD, UTC

let xml = fs.readFileSync(SITEMAP, "utf8");
const before = (xml.match(/<lastmod>[^<]*<\/lastmod>/g) || []).length;
xml = xml.replace(/<lastmod>[^<]*<\/lastmod>/g, `<lastmod>${today}</lastmod>`);
fs.writeFileSync(SITEMAP, xml);

console.log(`sitemap.xml: stamped ${before} <lastmod> entries with ${today}`);
