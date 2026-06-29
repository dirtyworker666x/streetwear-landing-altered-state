# ALTERED STATE · streetwear landing

Static brand landing (Saint Petersburg streetwear): catalog, glitch aesthetic, Telegram order deep links. No framework, no backend.

---

## Stack

| Layer | Tech |
|-------|------|
| Markup | Semantic HTML5, `lang="ru"` |
| Styles | CSS custom properties, animations, mobile-first |
| Scripts | Vanilla JS (IIFE) |
| SEO | `meta description`, semantic sections, lazy images |
| Deploy | Static (Netlify-ready), [`start.sh`](start.sh) for local preview |

## Implementation

- **Collections** — hero switch, flagship block, product grid
- **Glitch UI** — chromatic aberration, scanlines, grain, custom crosshair cursor
- **Lightbox** — print preview (double-click)
- **Filters** — collection categories
- **Checkout** — form → `t.me/...?text=...` ([`js/config.js`](js/config.js))
- **Motion** — Intersection Observer scroll reveal

## Structure

| Path | Role |
|------|------|
| `index.html` | Home: hero, catalog, about, order |
| `css/styles.css` | Layout & animations |
| `js/main.js` | Collections, UI, form, observers |
| `js/config.js` | Telegram username for orders |
| `assets/` | Posters, prints, lookbook |
| `scripts/generate-prints.py` | Print previews (Pillow, optional) |

## Preview locally

```bash
git clone https://github.com/dirtyworker666x/streetwear-landing-altered-state.git
cd streetwear-landing-altered-state
./start.sh
# or: python3 -m http.server 8080
```

Set Telegram in `js/config.js`:

```javascript
window.ALTERED_STATE_CONFIG = {
  telegram: "your_username_without_at",
};
```

## License

MIT — [LICENSE](LICENSE). ALTERED STATE visuals and brand — separate rights.

---

**Author’s production app:** [tgplay.fun](https://tgplay.fun) · [source](https://github.com/dirtyworker666x/tgplay-telegram-music-miniapp)
