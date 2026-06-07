# Pelican General Construction — Logo Suite

Brand assets generated from the circular badge logo. Everything here is web/digital grade.

> **Source note:** This suite was built from a 358px raster of the badge. It is sharp for
> all screen use (website, favicons, social, email, slide decks). For large-format print
> (signage, vehicle wraps, banners) commission a vector (SVG/AI) redraw — a 358px raster
> will not hold up enlarged. The badge is purely typographic/geometric, so a faithful
> vector rebuild is straightforward when needed.

---

## Colors

| Role          | Hex       | Use                                              |
|---------------|-----------|--------------------------------------------------|
| Forest green  | `#2B4031` | Primary. Ring, "P", outlines. Headlines, accents.|
| Cream         | `#F4EFE3` | Field / reverse color. Backgrounds, knockouts.   |
| Near-black    | `#0A0F0A` | One-color print, fine outlines.                  |

The badge green (`#2B4031`) is deeper than the site's interactive accent (`#456650`,
"moss"). The site keeps moss for links/buttons/eyebrows and uses forest as the brand
anchor (the logo itself). `--forest: #2B4031` is defined as a token in the site CSS.

---

## File guide

### `badge/` — primary mark (full color, transparent)
`pelican-badge-512 / 256 / 128 / 64.png` — the complete badge. Use wherever there's room
to read the full ring text. This is the default logo.

### `icon/` — submark / "P" medallion (transparent)
`pelican-icon-256 / 128 / 64 / 32.png` — the inner "P" only. Use where the full ring text
would be illegible: favicons, app tiles, social avatars, small UI.

### `mono/` — one-color versions (transparent)
- `pelican-badge-white-*` — cream/white knockout. **Dark backgrounds only** (dark nav, footer, photos).
- `pelican-badge-green-*` — single forest green. Light backgrounds, one-color contexts.
- `pelican-badge-black-*` — single near-black. Faxes, stamps, single-color print, engraving.

### `social/`
- `pelican-avatar-512.png` — square, badge on cream. Facebook / Instagram / Google profile photo.
- `pelican-og-1200x630.png` — link-share preview image (Open Graph / Twitter card).

### `../assets/` — favicons (live on the site)
`favicon-16/32/48/192/512`, `apple-touch-icon` (180, cream tile), `favicon.ico` (32px).
These currently use the **full badge**, regenerated from the native source. At 16–32px the
ring text isn't legible (expected for any detailed badge); if you ever want razor-sharp
tiny favicons, regenerate them from `icon/` (the "P" medallion) instead.

### `contact-sheet.png`
One-image overview of the whole suite. For quick review / sharing.

### `_source/`
Working files: original screenshot + cleaned transparent masters. Keep for regeneration;
not for direct use.

---

## Usage rules

- **Minimum size, full badge:** ~64px. Below that, switch to the medallion.
- **Clear space:** keep padding around the badge equal to ~10% of its diameter. Don't crowd it.
- **Don't** stretch, recolor outside the palette, add effects/shadows, or place the
  full-color badge on a busy photo (use the white knockout on a dark scrim instead).
- **Backgrounds:** full-color badge on light/cream. White knockout on dark/green/photo.
- **Nav lockup:** on the website, pair the badge with live "PELICAN GENERAL CONSTRUCTION"
  text set in Oswald (the site font) via HTML/CSS — sharper and perfectly matched vs. a
  baked image. A standalone lockup PNG for email/letterhead can be produced on request.
