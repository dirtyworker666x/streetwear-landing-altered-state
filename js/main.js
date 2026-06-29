(function () {
  const COLLECTIONS = {
    "altered-state-lookbook": {
      product: "ALTERED STATE — LOGO 05",
      bg: "assets/altered-state-lookbook.png",
      line1: "ALTERED",
      line2: "STATE",
      eyebrow: "SAINT-PETERSBURG / 2026",
      tagline: "Reality is optional.",
      desc: "LOGO 05 — acid wash oversize, Focus Symbol на груди, glitch face на спине. 240 GSM, DTG, малый тираж.",
      stat1: "240",
      stat1Label: "GSM cotton",
      stat2: "DTG",
      stat2Label: "high saturation",
      stat3: "OS",
      stat3Label: "oversize fit",
    },
    "altered-state": {
      product: "ALTERED STATE — LOGO 05",
      bg: "assets/altered-state-poster.png",
      line1: "ALTERED",
      line2: "STATE",
      eyebrow: "SAINT-PETERSBURG / 2026",
      tagline: "Reality is optional.",
      desc: "Oversize streetwear с принтами, которые не просят разрешения. Acid wash, плотный хлопок 240 GSM — артефакт из другой реальности.",
      stat1: "240",
      stat1Label: "GSM cotton",
      stat2: "DTG",
      stat2Label: "high saturation",
      stat3: "OS",
      stat3Label: "oversize fit",
    },
    "absurd-bubble": {
      product: "АБСУРД — Bubble",
      bg: "assets/absurd-bubble.png",
      line1: "АБСУРД",
      line2: "BUBBLE",
      eyebrow: "COLLAB DROP / STREET",
      tagline: "Абсурд как стиль жизни.",
      desc: "Bubble-graffiti на чёрном хлопке. Мягкие формы, жёсткий смысл — принт для тех, кто не воспринимает реальность всерьёз.",
      stat1: "100%",
      stat1Label: "cotton",
      stat2: "OS",
      stat2Label: "fit",
      stat3: "3.5K",
      stat3Label: "from ₽",
    },
    "absurd-metal": {
      product: "АБСУРД — Metal",
      bg: "assets/absurd-metal.png",
      line1: "АБСУРД",
      line2: "METAL",
      eyebrow: "DEATHCORE EDITION",
      tagline: "Шипы на каждой букве.",
      desc: "Metalcore-типографика с фиолетовым контуром. Для концертов, питерских подворотней и громкой музыки.",
      stat1: "100%",
      stat1Label: "cotton",
      stat2: "DTG",
      stat2Label: "purple glow",
      stat3: "3.7K",
      stat3Label: "from ₽",
    },
    "last-tram": {
      product: "ПОСЛЕДНИЙ ТРАМВАЙ",
      bg: "assets/last-tram.png",
      line1: "ПОСЛЕДНИЙ",
      line2: "ТРАМВАЙ",
      eyebrow: "LIMITED / INDUSTRIAL",
      tagline: "Маршрут: вечность.",
      desc: "Трамвай с красными фарами в граффити-тумане. Завод: распад север. Пост-индустриальный Питер в одном принте.",
      stat1: "20",
      stat1Label: "pcs limited",
      stat2: "RED",
      stat2Label: "accent",
      stat3: "3.9K",
      stat3Label: "from ₽",
    },
    antisex: {
      product: "антисекс",
      bg: "assets/antisex.png",
      line1: "АНТИ",
      line2: "СЕКС",
      eyebrow: "SILKSCREEN / 20 PCS",
      tagline: "Провокация в gothic type.",
      desc: "Шелкография 2+0, белый по чёрному. Gothic blackletter — жёсткий, узнаваемый, без компромиссов.",
      stat1: "297",
      stat1Label: "mm print",
      stat2: "2+0",
      stat2Label: "silkscreen",
      stat3: "3.0K",
      stat3Label: "from ₽",
    },
    "uv-horror": {
      product: "ULTRAVIOLENCE — Horror Icons",
      bg: "assets/ultraviolence-horror.png",
      line1: "ULTRA",
      line2: "VIOLENCE",
      eyebrow: "FROM SAINT-P.",
      tagline: "Horror icons trio.",
      desc: "Майкл, Джейсон, Leatherface — чёрно-белый культ хоррора. Коллаб-линейка ULTRAVIOLENCE из Петербурга.",
      stat1: "100%",
      stat1Label: "cotton",
      stat2: "BW",
      stat2Label: "print",
      stat3: "3.5K",
      stat3Label: "from ₽",
    },
    "uv-skull": {
      product: "ULTRAVIOLENCE — Skull",
      bg: "assets/ultraviolence-skull.png",
      line1: "ULTRA",
      line2: "VIOLENCE",
      eyebrow: "#ERROR404",
      tagline: "Skull & hardware.",
      desc: "Череп, оружие, кастеты — агрессивный ч/б принт. Для тех, кто носит ультранасилие как эстетику, не как угрозу.",
      stat1: "100%",
      stat1Label: "cotton",
      stat2: "BW",
      stat2Label: "high contrast",
      stat3: "3.5K",
      stat3Label: "from ₽",
    },
    "uv-collage": {
      product: "ULTRAVIOLENCE — Collage",
      bg: "assets/ultraviolence-collage.png",
      line1: "ULTRA",
      line2: "VIOLENCE",
      eyebrow: "STREET TOOLS",
      tagline: "Chain link & spray.",
      desc: "Коллаж из уличных инструментов за забором. Гранж, спрей, нож — визуальный манифест андеграунда.",
      stat1: "100%",
      stat1Label: "cotton",
      stat2: "COLLAGE",
      stat2Label: "print",
      stat3: "3.3K",
      stat3Label: "from ₽",
    },
    "trust-no-one": {
      product: "TRUST NO ONE",
      bg: "assets/trust-no-one.png",
      line1: "TRUST",
      line2: "NO ONE",
      eyebrow: "SURVEILLANCE MOOD",
      tagline: "Everybody watches you.",
      desc: "Тёмный переулок, drip-граффити, паранойя. Nobody sees you — принт про слежку и невидимость в городе.",
      stat1: "100%",
      stat1Label: "cotton",
      stat2: "BW",
      stat2Label: "photo print",
      stat3: "3.8K",
      stat3Label: "from ₽",
    },
    bezdelnik: {
      product: "БЕЗДЕЛЬНИК",
      bg: "assets/bezdelnik.png",
      line1: "БЕЗ",
      line2: "ДЕЛЬНИК",
      eyebrow: "MEME DROP",
      tagline: "Ирония в цвете.",
      desc: "Ироничный мем-дроп с радужной типографикой. Не для всех — для своих. Лимитированный тираж.",
      stat1: "100%",
      stat1Label: "cotton",
      stat2: "MEME",
      stat2Label: "edition",
      stat3: "2.8K",
      stat3Label: "from ₽",
    },
  };

  const cfg = window.ALTERED_STATE_CONFIG || {};
  const cursor = document.getElementById("cursor");
  const header = document.querySelector(".header");
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");
  const productInput = document.getElementById("productInput");
  const orderSelected = document.getElementById("orderSelected");
  const orderForm = document.getElementById("orderForm");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const telegramFormNote = document.getElementById("telegramFormNote");

  const heroBg = document.getElementById("heroBg");
  const heroPoster = document.getElementById("heroPoster");
  const heroGlitchA = document.getElementById("heroGlitchA");
  const heroGlitchB = document.getElementById("heroGlitchB");
  const heroContent = document.getElementById("heroContent");
  const heroEyebrow = document.getElementById("heroEyebrow");
  const heroTitleSolid = document.getElementById("heroTitleSolid");
  const heroTitleOutline = document.getElementById("heroTitleOutline");
  const heroTagline = document.getElementById("heroTagline");
  const heroDesc = document.getElementById("heroDesc");
  const heroStat1 = document.getElementById("heroStat1");
  const heroStat1Label = document.getElementById("heroStat1Label");
  const heroStat2 = document.getElementById("heroStat2");
  const heroStat2Label = document.getElementById("heroStat2Label");
  const heroStat3 = document.getElementById("heroStat3");
  const heroStat3Label = document.getElementById("heroStat3Label");
  const heroFrame = document.getElementById("heroFrame");
  const heroTitle = document.querySelector(".hero-title");

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let activeCollectionId = "altered-state";
  let heroTransitioning = false;

  function getTelegramUsername() {
    return (cfg.telegram || "").trim().replace(/^@/, "");
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  if (cursor && window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    document.addEventListener("mousedown", () => cursor.classList.add("is-clicking"));
    document.addEventListener("mouseup", () => cursor.classList.remove("is-clicking"));

    function animateCursor() {
      cursorX = lerp(cursorX, mouseX, 0.18);
      cursorY = lerp(cursorY, mouseY, 0.18);
      const scale = cursor.dataset.hover === "1" ? 1.4 : 1;
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(${scale})`;
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    document.querySelectorAll("a, button, .card, input, select").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.dataset.hover = "1";
        cursor.style.color = "#fff";
      });
      el.addEventListener("mouseleave", () => {
        cursor.dataset.hover = "0";
        cursor.style.color = "";
      });
    });
  }

  function selectProduct(name, scrollToOrder = true) {
    if (productInput) productInput.value = name;
    if (orderSelected) {
      orderSelected.innerHTML = `Выбрано: <strong>${name}</strong>`;
    }
    if (scrollToOrder) {
      document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
    }
  }

  const FLAGSHIP_META = {
    "altered-state-lookbook": {
      flagshipBadge: "LOGO 05",
      price: "от 4 990 ₽",
      flagshipImg: "assets/altered-state-lookbook.png",
      flagshipDesc:
        "Символ фокуса и контроля реальности. Минимализм на груди, взрыв на спине — как интерфейс системы наблюдения, которая смотрит на тебя в ответ.",
      specs: [
        ["Ткань", "100% heavy cotton, 240 GSM"],
        ["Крой", "Oversize, garment dye / acid wash"],
        ["Принт", "DTG, глубокая насыщенность"],
        ["Грудь", "Focus Symbol — прицел / курсор"],
        ["Спина", "ALTERED STATE + glitch face"],
      ],
    },
    "altered-state": {
      flagshipBadge: "POSTER",
      price: "от 4 990 ₽",
      flagshipImg: "assets/altered-state-poster.png",
      flagshipDesc:
        "Постер-эдишн: glitch face и типографика ALTERED STATE. Для тех, кто хочет носить постер, а не очередной логотип.",
      specs: [
        ["Ткань", "100% heavy cotton"],
        ["Крой", "Oversize"],
        ["Принт", "DTG, фиолетовый акцент"],
        ["Стиль", "Surveillance / glitch aesthetic"],
        ["Линейка", "ALTERED STATE — флагман"],
      ],
    },
    "absurd-bubble": {
      flagshipBadge: "BUBBLE",
      price: "от 3 490 ₽",
      flagshipDesc:
        "Мягкие bubble-формы, жёсткий смысл. Белый принт на чёрном — классика, которая не стареет.",
      specs: [
        ["Ткань", "100% хлопок"],
        ["Крой", "Oversize / street"],
        ["Принт", "Bubble-graffiti"],
        ["Цвет", "Белый по чёрному"],
        ["Линейка", "АБСУРД"],
      ],
    },
    "absurd-metal": {
      flagshipBadge: "METAL",
      price: "от 3 690 ₽",
      flagshipDesc:
        "Deathcore-типографика с фиолетовым контуром. Громкая музыка, питерские подворотни, нулевая скука.",
      specs: [
        ["Ткань", "100% хлопок"],
        ["Крой", "Oversize"],
        ["Принт", "Metal / purple outline"],
        ["Вайб", "Концерты и ночной город"],
        ["Линейка", "АБСУРД"],
      ],
    },
    "last-tram": {
      flagshipBadge: "LIMITED",
      price: "от 3 990 ₽",
      flagshipDesc:
        "Трамвай с красными фарами и граффити-туман. Индустриальный Питер, маршрут в никуда — в лучшем смысле.",
      specs: [
        ["Ткань", "100% хлопок"],
        ["Принт", "Full graphic / красный акцент"],
        ["Тираж", "Ограниченный"],
        ["Тема", "Пост-индустрия / ретро"],
        ["Название", "ПОСЛЕДНИЙ ТРАМВАЙ"],
      ],
    },
    antisex: {
      flagshipBadge: "SILKSCREEN",
      price: "от 2 990 ₽",
      flagshipDesc:
        "Шелкография 2+0, gothic blackletter. Провокация без лишних слов — только типографика.",
      specs: [
        ["Нанесение", "Шелкография 2+0"],
        ["Размер", "297×70 мм (реф.)"],
        ["Цвет", "Белый по чёрному"],
        ["Стиль", "Gothic / blackletter"],
        ["Линейка", "антисекс"],
      ],
    },
    "uv-horror": {
      flagshipBadge: "ICONS",
      price: "от 3 490 ₽",
      flagshipDesc:
        "Три иконы хоррора в ч/б — коллаб-нарратив ULTRAVIOLENCE. FROM SAINT-P.",
      specs: [
        ["Ткань", "100% хлопок"],
        ["Принт", "BW / horror portraits"],
        ["Стиль", "Streetwear / cult"],
        ["Город", "Saint-Petersburg"],
        ["Линейка", "ULTRAVIOLENCE"],
      ],
    },
    "uv-skull": {
      flagshipBadge: "#ERROR404",
      price: "от 3 490 ₽",
      flagshipDesc: "Череп, железо, ультранасилие как визуальный язык — без компромиссов.",
      specs: [
        ["Ткань", "100% хлопок"],
        ["Принт", "Skull & hardware, BW"],
        ["Стиль", "Hard street"],
        ["Тег", "#ERROR404"],
        ["Линейка", "ULTRAVIOLENCE"],
      ],
    },
    "uv-collage": {
      flagshipBadge: "COLLAGE",
      price: "от 3 290 ₽",
      flagshipDesc: "Забор, инструменты, спрей. Коллаж для тех, кто живёт улицей.",
      specs: [
        ["Ткань", "100% хлопок"],
        ["Принт", "Street collage / chain link"],
        ["Стиль", "Grunge / underground"],
        ["Линейка", "ULTRAVIOLENCE"],
        ["Тираж", "Малый"],
      ],
    },
    "trust-no-one": {
      flagshipBadge: "ALLEY",
      price: "от 3 790 ₽",
      flagshipDesc:
        "Everybody watches you, nobody sees you — переулок, drip-граффити, паранойя большого города.",
      specs: [
        ["Ткань", "100% хлопок"],
        ["Принт", "Photo / graffiti type"],
        ["Настроение", "Surveillance noir"],
        ["Слоган", "TRUST NO ONE"],
        ["Линейка", "ALTERED STATE mood"],
      ],
    },
    bezdelnik: {
      flagshipBadge: "MEME",
      price: "от 2 790 ₽",
      flagshipDesc: "Ироничный мем-дроп: цветная типографика и отношение к делу без лишней серьёзности.",
      specs: [
        ["Ткань", "100% хлопок"],
        ["Принт", "Многоцветный логотип"],
        ["Стиль", "Ирония / мем"],
        ["Тираж", "Лимит"],
        ["Название", "БЕЗДЕЛЬНИК"],
      ],
    },
  };

  function getFlagshipPayload(id) {
    const base = COLLECTIONS[id];
    const meta = FLAGSHIP_META[id];
    if (!base || !meta) return null;
    return {
      ...base,
      ...meta,
      flagshipImg: meta.flagshipImg || base.bg,
      flagshipDesc: meta.flagshipDesc || base.desc,
    };
  }

  function updateFlagship(id) {
    const payload = getFlagshipPayload(id);
    const block = document.querySelector(".flagship");
    if (!payload || !block) return;

    block.classList.add("flagship--updating");
    const img = block.querySelector(".flagship-visual img");
    const badge = block.querySelector(".flagship-badge");
    const nameSolid = block.querySelector(".product-name > span:first-child");
    const nameOutline = block.querySelector(".product-name .outline");
    const priceEl = block.querySelector(".product-price");
    const specsUl = block.querySelector(".specs");
    const copyEl = block.querySelector(".product-copy");
    const btn = block.querySelector(".btn.btn-primary");

    if (img) {
      img.src = payload.flagshipImg;
      img.alt = payload.product;
    }
    if (badge) {
      badge.textContent = payload.flagshipBadge || "";
      badge.hidden = !payload.flagshipBadge;
    }
    if (nameSolid) nameSolid.textContent = payload.line1;
    if (nameOutline) {
      nameOutline.textContent = payload.line2 || "";
      nameOutline.style.display = payload.line2 ? "" : "none";
    }
    if (priceEl) priceEl.textContent = payload.price || "";
    if (specsUl && payload.specs) {
      specsUl.innerHTML = payload.specs
        .map(([k, v]) => `<li><span>${k}</span><strong>${v}</strong></li>`)
        .join("");
    }
    if (copyEl) copyEl.textContent = payload.flagshipDesc;
    if (btn) {
      btn.dataset.product = payload.product;
      btn.textContent = "Заказать эту модель";
    }
    block.dataset.collection = id;
    block.dataset.product = payload.product;

    requestAnimationFrame(() => {
      block.classList.remove("flagship--updating");
    });
  }

  function preloadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = reject;
      img.src = src;
    });
  }

  function setHeroText(el, text, dataAttr) {
    if (!el) return;
    el.textContent = text;
    if (dataAttr) el.setAttribute("data-text", text);
  }

  function applyHeroCollection(data) {
    setHeroText(heroEyebrow, data.eyebrow, true);
    setHeroText(heroTitleSolid, data.line1, true);
    setHeroText(heroTitleOutline, data.line2, true);
    setHeroText(heroTagline, data.tagline);
    if (heroDesc) heroDesc.textContent = data.desc;
    if (heroStat1) heroStat1.textContent = data.stat1;
    if (heroStat1Label) heroStat1Label.textContent = data.stat1Label;
    if (heroStat2) heroStat2.textContent = data.stat2;
    if (heroStat2Label) heroStat2Label.textContent = data.stat2Label;
    if (heroStat3) heroStat3.textContent = data.stat3;
    if (heroStat3Label) heroStat3Label.textContent = data.stat3Label;

    if (heroTitleOutline) {
      heroTitleOutline.style.display = data.line2 ? "" : "none";
    }
  }

  function getBrandCard(id) {
    return document.querySelector(`#productGrid .card--hero[data-collection="${id}"]`);
  }

  /** Задник = фото с карточки этого бренда */
  function getBrandBackdrop(id) {
    const card = getBrandCard(id);
    const img = card?.querySelector(".card-img img, .flagship-visual img");
    if (img) {
      const src = img.currentSrc || img.getAttribute("src") || img.src;
      if (src) return src;
    }
    return COLLECTIONS[id]?.bg || "";
  }

  function getBrandFocus(id) {
    return getBrandCard(id)?.dataset.bgFocus || "center center";
  }

  function syncCollectionBackdrops() {
    document.querySelectorAll(".card--hero[data-collection]").forEach((card) => {
      if (card.classList.contains("flagship")) return;
      const id = card.dataset.collection;
      if (!id) return;
      const img = card.querySelector(".card-img img, .flagship-visual img");
      const src = img?.getAttribute("src");
      if (!src) return;
      if (COLLECTIONS[id]) {
        COLLECTIONS[id].bg = src;
      }
    });
  }

  function setHeroBackground(src, id) {
    const focus = getBrandFocus(id);
    [heroPoster, heroGlitchA, heroGlitchB].forEach((el) => {
      if (!el) return;
      el.src = src;
      el.style.objectPosition = focus;
    });
    if (heroBg) {
      heroBg.dataset.brand = id;
      heroBg.classList.toggle(
        "hero-bg--glitch",
        id === "altered-state" || id === "altered-state-lookbook"
      );
    }
  }

  function isGlitchBrand(id) {
    return id === "altered-state" || id === "altered-state-lookbook";
  }

  function triggerGlitchBurst(ms = 220) {
    const heroGlitch = document.getElementById("heroGlitch");
    heroGlitch?.classList.add("is-active");
    heroBg?.classList.add("is-chroma");
    setTimeout(() => {
      heroGlitch?.classList.remove("is-active");
      heroBg?.classList.remove("is-chroma");
    }, ms);
  }

  function triggerTargetLock() {
    heroFrame?.classList.add("is-locked");
    setTimeout(() => heroFrame?.classList.remove("is-locked"), 1400);
  }

  function triggerTitleGlitch() {
    heroTitle?.classList.add("is-title-glitch");
    setTimeout(() => heroTitle?.classList.remove("is-title-glitch"), 400);
  }

  async function switchCollection(id, options = {}) {
    const { scrollToTop = true, scrollToOrder = false } = options;
    const data = COLLECTIONS[id];
    const backdrop = getBrandBackdrop(id);

    if (!data || !backdrop || heroTransitioning || id === activeCollectionId) {
      if (data && id === activeCollectionId && scrollToTop) {
        document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    heroTransitioning = true;
    activeCollectionId = id;
    data.bg = backdrop;

    document.querySelectorAll(".card--hero").forEach((card) => {
      card.classList.toggle("is-active", card.dataset.collection === id);
    });

    heroBg?.classList.add("is-fading");
    heroContent?.classList.add("is-updating");

    try {
      await preloadImage(backdrop);
    } catch {
      /* use image anyway */
    }

    await new Promise((r) => setTimeout(r, 120));

    setHeroBackground(backdrop, id);
    applyHeroCollection(data);
    updateFlagship(id);
    selectProduct(data.product, scrollToOrder);

    heroBg?.classList.remove("is-fading");
    heroContent?.classList.remove("is-updating");

    triggerGlitchBurst(isGlitchBrand(id) ? 320 : 180);
    triggerTargetLock();
    triggerTitleGlitch();

    heroTransitioning = false;

    if (scrollToTop) {
      document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
    }
  }

  window.addEventListener("scroll", () => {
    header?.classList.toggle("scrolled", window.scrollY > 40);
  });

  menuBtn?.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelectorAll(".card--hero").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".card-btn") || e.target.closest(".flagship .btn")) return;
      if (card.classList.contains("flagship")) {
        document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
        return;
      }
      const id = card.dataset.collection;
      if (id) switchCollection(id, { scrollToTop: true, scrollToOrder: false });
    });
  });

  document.querySelectorAll(".card-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const card = btn.closest(".card");
      const id = card?.dataset.collection;
      if (id) {
        switchCollection(id, { scrollToTop: false, scrollToOrder: true });
      } else {
        selectProduct(
          card?.dataset.product || card?.querySelector("h3")?.textContent || "ALTERED STATE",
          true
        );
      }
    });
  });

  document.querySelector(".flagship .btn.btn-primary")?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const block = document.querySelector(".flagship");
    const fid = block?.dataset.collection;
    const name = (fid && COLLECTIONS[fid]?.product) || block?.dataset.product;
    if (name) selectProduct(name, true);
  });

  orderForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const product = productInput?.value || "ALTERED STATE";
    const size = document.getElementById("sizeInput")?.value;
    const city = document.getElementById("cityInput")?.value;
    const telegram = getTelegramUsername();

    if (!size) {
      document.getElementById("sizeInput")?.focus();
      return;
    }

    const message =
      `Привет! Хочу заказать:\n\n` +
      `Модель: ${product}\n` +
      `Размер: ${size}\n` +
      `Город: ${city || "—"}\n\n` +
      `Сайт: ALTERED STATE`;

    const text = encodeURIComponent(message);

    if (!telegram) {
      if (telegramFormNote) {
        telegramFormNote.innerHTML =
          '⚠ Укажи свой Telegram в <strong>js/config.js</strong> (поле <code>telegram</code>), без @. ' +
          "Сейчас откроется выбор чата в Telegram.";
        telegramFormNote.classList.add("form-note--warn");
      }
      window.open(`https://t.me/share/url?text=${text}`, "_blank");
      return;
    }

    window.open(`https://t.me/${telegram}?text=${text}`, "_blank");
  });

  if (telegramFormNote) {
    const telegram = getTelegramUsername();
    if (telegram) {
      telegramFormNote.innerHTML = `Заказы принимаются в Telegram: <strong>@${telegram}</strong>`;
    }
  }

  document.querySelectorAll(".filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      document.querySelectorAll(".card").forEach((card) => {
        const cat = card.dataset.category;
        const show = filter === "all" || cat === filter;
        card.classList.toggle("hidden", !show);
      });
    });
  });

  document.querySelectorAll(".card-img img").forEach((img) => {
    img.addEventListener("dblclick", (e) => {
      e.stopPropagation();
      const card = img.closest(".card");
      lightboxImg.src = img.src;
      lightboxCaption.textContent =
        (card?.querySelector("h3")?.textContent || "") +
        " — " +
        (card?.querySelector("p")?.textContent || "");
      lightbox.showModal();
    });
  });

  document.querySelector(".lightbox-close")?.addEventListener("click", () => {
    lightbox.close();
  });

  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.close();
  });

  const revealEls = document.querySelectorAll(
    ".section-head, .flagship, .card, .about-grid, .order-panel"
  );
  revealEls.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach((el) => observer.observe(el));

  const radarObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("in-radar", entry.isIntersecting);
      });
    },
    { threshold: 0.45, rootMargin: "-5% 0px" }
  );

  document.querySelectorAll("#productGrid .card--hero").forEach((card) => {
    radarObserver.observe(card);
  });

  syncCollectionBackdrops();
  setHeroBackground(getBrandBackdrop("altered-state"), "altered-state");
  updateFlagship("altered-state");

  const heroGlitch = document.getElementById("heroGlitch");

  setInterval(() => {
    if (heroTransitioning) return;

    if (isGlitchBrand(activeCollectionId)) {
      if (Math.random() > 0.78) triggerGlitchBurst(140 + Math.random() * 120);
      if (Math.random() > 0.94) triggerTitleGlitch();
    } else if (Math.random() > 0.92) {
      triggerGlitchBurst(100);
      heroBg?.classList.add("is-chroma");
      setTimeout(() => heroBg?.classList.remove("is-chroma"), 160);
    }
  }, 900);

  setInterval(() => {
    if (!heroTransitioning && Math.random() > 0.6) triggerTitleGlitch();
  }, 9000);
})();

