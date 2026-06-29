#!/usr/bin/env python3
"""Генерирует assets/prints/*.jpg — принт на чёрном фоне для карточек."""
from PIL import Image, ImageEnhance
import os

ROOT = os.path.join(os.path.dirname(__file__), "..")
OUT = os.path.join(ROOT, "assets", "prints")
ASSETS = os.path.join(ROOT, "assets")

ITEMS = {
    "altered-state": ("altered-state-poster.png", "full"),
    "absurd-bubble": ("absurd-bubble.png", "shirt"),
    "absurd-metal": ("absurd-metal.png", "shirt"),
    "last-tram": ("last-tram.png", "full"),
    "antisex": ("antisex.png", "mockup"),
    "uv-horror": ("ultraviolence-horror.png", "full"),
    "uv-skull": ("ultraviolence-skull.png", "full"),
    "uv-collage": ("ultraviolence-collage.png", "full"),
    "trust-no-one": ("trust-no-one.png", "full"),
    "bezdelnik": ("bezdelnik.png", "shirt"),
}

SIZE = 800


def to_print_on_black(im, mode):
    im = im.convert("RGBA")
    w, h = im.size
    if mode == "shirt":
        im = im.crop((int(w * 0.1), int(h * 0.16), int(w * 0.9), int(h * 0.58)))
    elif mode == "mockup":
        im = im.crop((int(w * 0.26), int(h * 0.2), int(w * 0.74), int(h * 0.5)))
    im = ImageEnhance.Contrast(im).enhance(1.4)
    im = ImageEnhance.Sharpness(im).enhance(1.25)
    px = im.load()
    nw, nh = im.size
    for y in range(nh):
        for x in range(nw):
            r, g, b, a = px[x, y]
            if a < 20:
                px[x, y] = (0, 0, 0, 0)
                continue
            L = 0.299 * r + 0.587 * g + 0.114 * b
            if L > 195:
                t = min(1.0, (L - 195) / 60)
                px[x, y] = (int(r * (1 - t)), int(g * (1 - t)), int(b * (1 - t)), a)
            elif L > 100:
                t = (L - 100) / 95 * 0.65
                px[x, y] = (int(r * (1 - t)), int(g * (1 - t)), int(b * (1 - t)), a)
    im.thumbnail((SIZE, SIZE), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 255))
    canvas.paste(im, ((SIZE - im.width) // 2, (SIZE - im.height) // 2), im)
    return canvas.convert("RGB")


def main():
    os.makedirs(OUT, exist_ok=True)
    for slug, (fname, mode) in ITEMS.items():
        path = os.path.join(ASSETS, fname)
        out = os.path.join(OUT, f"{slug}.jpg")
        to_print_on_black(Image.open(path), mode).save(out, "JPEG", quality=90)
        print("ok", slug)


if __name__ == "__main__":
    main()
