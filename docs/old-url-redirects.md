# Old URL redirects — valleystreamgaragedoors.com

Source: Wayback Machine CDX API, queried 2026-09-29:

- `https://web.archive.org/cdx/search/cdx?url=valleystreamgaragedoors.com/*&output=txt&fl=original&collapse=urlkey`
- `https://web.archive.org/cdx/search/cdx?url=www.valleystreamgaragedoors.com/*&output=txt&fl=original&collapse=urlkey`
- `https://web.archive.org/cdx/search/cdx?url=valleystreamgaragedoors.com&matchType=domain&output=txt&fl=original,timestamp,statuscode,mimetype&collapse=urlkey`

All three return the same 40 URLs. The archived 2010 homepage links only to `index.html`
(plus external sites), so the old site was a single page.

## Page URLs

| Old path | Status on new site | Action |
|---|---|---|
| `/` | exists (homepage) | none |
| `/index.html` | not a page | 301 → `/` (already in `netlify.toml`) |
| `/robots.txt` | exists (`app/robots.ts`) | none |
| `/favicon.ico` | exists (`app/favicon.ico`) | none |

No new redirects were needed: every old page URL either exists on the new site or is
already redirected. `/index.htm` → `/` is also already in `netlify.toml`.

## Dropped (assets, not pages)

36 old asset URLs were not redirected: `/images/style.css` and 35 images under `/images/`
(for example `/images/logo.jpg`, `/images/springs.jpg`, `/images/openers.jpg`,
`/images/repairs.jpg`, `/images/coupon-all-coupon.png`).

## Not checked

Google Search Console "Not found (404)" and a `site:` search were not available to the builder.
Check Search Console for any other old URLs, then add them to `netlify.toml` as
single-hop 301s to an existing page (URLs with trailing slashes, e.g. `/repair/`).
