// Writes dist/_headers, which Cloudflare's static assets apply to every response.
// Runs after `astro build`: the CSP allows each inline script by its hash, and
// those only exist once the pages are built.
import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname;

const htmlFiles = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) return htmlFiles(path);
      return entry.name.endsWith(".html") ? [path] : [];
    }),
  );
  return nested.flat();
};

const hashes = new Set();
for (const file of await htmlFiles(DIST)) {
  const html = await readFile(file, "utf8");
  for (const [, attrs, body] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
    if (/\bsrc=/.test(attrs) || !body) continue;
    hashes.add(`'sha256-${createHash("sha256").update(body).digest("base64")}'`);
  }
}

// style-src keeps 'unsafe-inline': the markup uses style="" attributes, which a
// hash list would block.
const csp = [
  "default-src 'self'",
  `script-src 'self' ${[...hashes].sort().join(" ")}`.trim(),
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const headers = {
  "Content-Security-Policy": csp,
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains",
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy":
    "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
};

const body = ["/*", ...Object.entries(headers).map(([name, value]) => `  ${name}: ${value}`)].join("\n");
await writeFile(join(DIST, "_headers"), `${body}\n`);
console.log(`_headers written (${hashes.size} inline script hashes)`);
