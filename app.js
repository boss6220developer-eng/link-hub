/**
 * ============================================================================
 * PERSONAL LINK HUB - TRUE APPLE LINKTREE EDITION (ENGINE)
 * ============================================================================
 * Ushbu tizim haqiqiy Linktree tuzilishi, Apple Industrial minimalizmi
 * (sof oq fon, chuqur qora va Apple ko'k tugmalar), agressiv marketing
 * kopiraytingi hamda Matter.js Antigravitatsiya fizikasini o'zida birlashtiradi.
 */

// ============================================================================
// 1. PROFIL VA HAVOLALAR (YUQORI KONVERSIYALI AGRESSIV MARKETING MA'LUMOTLARI)
// ============================================================================
const PROFILE_DATA = {
  name: "Aslxo'ja Ag'zamxonov",
  username: "@aslxo'jaB",
  verified: true,
  title: "Principal Fullstack & Creative UI Engineer",
  tagline: "Zerikarli veb-saytlar davri tugadi. Biznesingizga real daromad keltiruvchi, raqobatchilarni ortda qoldiruvchi va mijozlarni hayratga soluvchi raqamli tizimlar yarataman.",
  avatar: "https://img.magnific.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?semt=ais_hybrid&w=740&q=80",
  
  // Status (Agressiv shoshilinchlik)
  status: {
    badgeText: "🔥 HOZIR BAND: SHOSHILING — OY OXIRIGACHA ATIGI 2 TA BUYURTMA UCHUN JOY QOLDI",
    availableFor: "Faqat yirik va yuqori daromadli loyihalar uchun ochiq"
  },

  // Ijtimoiy Isbot (Social Proof Ko'rsatkichlari)
  stats: [
    { label: "Muvaffaqiyatli Loyiha", value: "65+" },
    { label: "Mijozlar Natijasi", value: "99.8%" },
    { label: "IT Hamjamiyat", value: "25k+" }
  ],

  // Haqiqiy Linktree Kartalari
  links: [
    {
      id: "consulting",
      title: "1-on-1 Strategik VIP Konsultatsiya 💎",
      description: "Loyihangizdagi har qanday arxitektura, kod yoki masshtablash muammosini 1 soatda uzil-kesil hal qilamiz. Natijaga 100% kafolat.",
      url: "https://t.me/example_booking",
      icon: "zap",
      iconBg: "bg-[#0071e3] text-white shadow-md shadow-blue-500/25",
      badge: "VIP XIZMAT",
      badgeClass: "bg-black text-white",
      highlight: true
    },
    {
      id: "telegram",
      title: "Yopiq Telegram Kanal 🔥",
      description: "Pullik kurslarda ham aytilmaydigan sof dasturlash, IT-biznes va pul ishlash sirlari. 15,000+ top dasturchilar safida bo'ling.",
      url: "https://t.me/example",
      icon: "send",
      iconBg: "bg-black text-white shadow-md shadow-black/15",
      badge: "ENG KO'P O'QILGAN",
      badgeClass: "bg-blue-50 text-[#0071e3] border border-blue-200/80 font-bold"
    },
    {
      id: "portfolio",
      title: "Yirtqich Portfolio & Real Keyslar 🚀",
      description: "Raqobatchilarni changda qoldirgan va yuz minglab foydalanuvchilarga xizmat ko'rsatayotgan eng yirik ishlarim. Ko'ring va darajaga baho bering.",
      url: "https://example.com",
      icon: "globe",
      iconBg: "bg-black text-white shadow-md shadow-black/15",
      badge: "TOP ISHLAR",
      badgeClass: "bg-[#0071e3] text-white font-bold"
    },
    {
      id: "github",
      title: "GitHub: Haqiqiy Pro Arxitektura 💻",
      description: "Havaskorona shablonlar emas, yirik tizimlar uchun yozilgan 'Production-Ready' ochiq kodlar va modullar. Oling va hoziroq qo'llang.",
      url: "https://github.com/example",
      icon: "github",
      iconBg: "bg-black text-white shadow-md shadow-black/15",
      badge: "OCHIQ KOD",
      badgeClass: "bg-slate-100 text-slate-800 border border-slate-200 font-bold"
    },
    {
      id: "linkedin",
      title: "LinkedIn: Katta Biznes & Hamkorlik 💼",
      description: "Jamoangizga tajribali yetakchi (Tech Lead) kerakmi yoki yirik B2B loyiha ustida ishlayapsizmi? Rasmiy shartnoma asosida hamkorlik.",
      url: "https://linkedin.com/in/example",
      icon: "linkedin",
      iconBg: "bg-[#0071e3] text-white shadow-md shadow-blue-500/25",
      badge: "B2B PARTNER",
      badgeClass: "bg-blue-50 text-[#0071e3] border border-blue-200/80 font-bold"
    },
    {
      id: "youtube",
      title: "YouTube: Amaliy Masterklasslar 🎬",
      description: "Befoyda nazariyalarsiz, to'g'ridan-to'g'ri amaliyot va yirtqich kodlash san'ati. Ko'ring, o'rganing va daromadingizni oshiring.",
      url: "https://youtube.com/@example",
      icon: "youtube",
      iconBg: "bg-black text-white shadow-md shadow-black/15",
      badge: "BEPUL KURS",
      badgeClass: "bg-slate-100 text-slate-800 border border-slate-200 font-bold"
    }
  ],

  // Qora va Ko'k To'g'ridan-to'g'ri Aloqa Tugmalari
  directContacts: [
    { 
      name: "Telegram Direct", 
      url: "https://t.me/example_direct", 
      icon: "message-circle", 
      label: "Telegram orqali to'g'ridan-to'g'ri yozish",
      style: "bg-black text-white hover:bg-[#1d1d1f] shadow-lg shadow-black/10"
    },
    { 
      name: "Email Direct", 
      url: "mailto:contact@example.com", 
      icon: "mail", 
      label: "Rasmiy taklif yuborish (Email)",
      style: "bg-[#0071e3] text-white hover:bg-[#0077ed] shadow-lg shadow-blue-500/20"
    }
  ]
};

// ============================================================================
// 2. APPLE HAPTIC UI & TOVUSH EFFEKTLARI (WEB AUDIO API)
// ============================================================================
class AppleSoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  playTap(freq = 800, duration = 0.03) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === "suspended") this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {}
  }

  playWhoosh() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === "suspended") this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(240, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(950, this.ctx.currentTime + 0.22);

      gain.gain.setValueAtTime(0.02, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.1, this.ctx.currentTime + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
    } catch (e) {}
  }

  playReset() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === "suspended") this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.18);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.18);
    } catch (e) {}
  }
}

const sfx = new AppleSoundEngine();

// Ovoz tugmasi
const soundToggleBtn = document.getElementById("sound-toggle-btn");
const soundIcon = document.getElementById("sound-icon");

if (soundToggleBtn) {
  soundToggleBtn.addEventListener("click", () => {
    sfx.enabled = !sfx.enabled;
    if (sfx.enabled) {
      sfx.playTap(900, 0.04);
      soundIcon.setAttribute("data-lucide", "volume-2");
      showToast("Ovoz effektlari yoqildi 🔊");
    } else {
      soundIcon.setAttribute("data-lucide", "volume-x");
      showToast("Ovoz effektlari o'chirildi 🔇");
    }
    if (window.lucide) lucide.createIcons();
  });
}

// Spotlight Kursor Nuri
window.addEventListener("pointermove", (e) => {
  const x = `${(e.clientX / window.innerWidth) * 100}%`;
  const y = `${(e.clientY / window.innerHeight) * 100}%`;
  document.documentElement.style.setProperty("--mouse-x", x);
  document.documentElement.style.setProperty("--mouse-y", y);
});

// ============================================================================
// 3. ELEMENTLARNI RENDER QILISH
// ============================================================================
function renderProfile() {
  // Profil rasmi va matnlari
  const avatarEl = document.getElementById("profile-avatar");
  if (avatarEl) {
    avatarEl.src = PROFILE_DATA.avatar;
    avatarEl.alt = PROFILE_DATA.name;
  }
  
  document.getElementById("profile-name").textContent = PROFILE_DATA.name;
  document.getElementById("profile-username").textContent = PROFILE_DATA.username;
  document.getElementById("profile-title").textContent = PROFILE_DATA.title;
  document.getElementById("profile-bio").textContent = PROFILE_DATA.tagline;

  // Status badge
  const statusBadge = document.getElementById("status-badge-text");
  if (statusBadge) {
    statusBadge.textContent = PROFILE_DATA.status.badgeText;
  }

  // Statistikani render qilish (Social Proof)
  const statsContainer = document.getElementById("stats-container");
  if (statsContainer) {
    statsContainer.innerHTML = "";
    PROFILE_DATA.stats.forEach(stat => {
      const statCard = document.createElement("div");
      statCard.className = "flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-white border border-black/[0.06] shadow-sm text-center";
      statCard.innerHTML = `
        <span class="text-lg sm:text-xl font-extrabold text-black tracking-tight">
          ${stat.value}
        </span>
        <span class="text-[11px] sm:text-xs text-[#86868b] font-medium mt-0.5">
          ${stat.label}
        </span>
      `;
      statsContainer.appendChild(statCard);
    });
  }

  // Havolalar ro'yxatini render qilish
  const linksContainer = document.getElementById("links-container");
  if (!linksContainer) return;
  linksContainer.innerHTML = "";

  PROFILE_DATA.links.forEach((link, index) => {
    const card = document.createElement("a");
    card.href = link.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.setAttribute("data-physics-id", `link-${index}`);

    const isFeatured = link.highlight;
    const cardBaseStyle = isFeatured ? "apple-card-featured" : "apple-card";

    card.className = `${cardBaseStyle} physics-item group relative flex items-start sm:items-center justify-between p-4.5 sm:p-5 rounded-3xl w-full text-left cursor-pointer`;

    const badgeHtml = link.badge 
      ? `<span class="text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider shrink-0 ${link.badgeClass}">${link.badge}</span>` 
      : "";

    card.innerHTML = `
      <div class="flex items-start sm:items-center space-x-4 min-w-0 pr-3">
        <!-- Ikonka -->
        <div class="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center shrink-0 ${link.iconBg} transition-all duration-300 group-hover:scale-105">
          <i data-lucide="${link.icon}" class="w-5 h-5 sm:w-6 sm:h-6"></i>
        </div>

        <!-- Matnlar -->
        <div class="min-w-0 flex-1">
          <div class="flex items-center flex-wrap gap-1.5 sm:gap-2">
            <h3 class="font-extrabold text-black text-sm sm:text-base group-hover:text-[#0071e3] transition-colors tracking-tight">
              ${link.title}
            </h3>
            ${badgeHtml}
          </div>
          <p class="text-xs text-[#86868b] mt-1 leading-relaxed line-clamp-2 font-normal">
            ${link.description}
          </p>
        </div>
      </div>
      
      <!-- Strelka nishoni -->
      <div class="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-[#0071e3] transition-all shrink-0 mt-1 sm:mt-0 bg-slate-100">
        <i data-lucide="arrow-up-right" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
      </div>
    `;

    card.addEventListener("mouseenter", () => sfx.playTap(950, 0.02));
    card.addEventListener("click", () => sfx.playTap(1200, 0.04));

    linksContainer.appendChild(card);
  });

  // To'g'ridan-to'g'ri aloqa tugmalari
  const directContainer = document.getElementById("direct-contacts-container");
  if (directContainer) {
    directContainer.innerHTML = "";
    PROFILE_DATA.directContacts.forEach(item => {
      const btn = document.createElement("a");
      btn.href = item.url;
      btn.target = "_blank";
      btn.rel = "noopener noreferrer";
      btn.className = `flex-1 flex items-center justify-center space-x-2 py-3.5 px-5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${item.style}`;
      btn.innerHTML = `
        <i data-lucide="${item.icon}" class="w-4 h-4"></i>
        <span>${item.label}</span>
      `;
      btn.addEventListener("mouseenter", () => sfx.playTap(850, 0.02));
      btn.addEventListener("click", () => sfx.playTap(1100, 0.04));
      directContainer.appendChild(btn);
    });
  }

  if (window.lucide) {
    lucide.createIcons();
  }
}

// ============================================================================
// 4. TOAST XABARNOMALARI
// ============================================================================
const copyLinkBtn = document.getElementById("copy-link-btn");
const toast = document.getElementById("toast");
let toastTimeout = null;

function showToast(message) {
  const toastText = document.getElementById("toast-text");
  if (toastText) toastText.textContent = message;

  if (toast) {
    toast.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 3200);
  }
}

async function copyPageLink() {
  sfx.playTap(1100, 0.05);
  try {
    await navigator.clipboard.writeText(window.location.href);
    showToast("🚀 Havola buferga nusxalandi! Buni jamoangizga yuboring!");
  } catch (err) {
    const input = document.createElement("input");
    input.value = window.location.href;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    showToast("🚀 Havola nusxalandi! Buni jamoangizga yuboring!");
  }
}

if (copyLinkBtn) copyLinkBtn.addEventListener("click", copyPageLink);

// ============================================================================
// 5. SHARE & QR CODE MODAL OYNASI
// ============================================================================
const shareBtn = document.getElementById("share-btn");
const shareModal = document.getElementById("share-modal");
const closeShareModalBtn = document.getElementById("close-share-modal");
const qrCodeImage = document.getElementById("qr-code-img");

function openShareModal() {
  sfx.playTap(850, 0.04);
  if (qrCodeImage) {
    const currentUrl = encodeURIComponent(window.location.href);
    qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${currentUrl}&margin=8`;
  }
  if (shareModal) {
    shareModal.classList.remove("hidden");
    shareModal.classList.add("flex");
  }
}

function closeShareModal() {
  sfx.playTap(600, 0.03);
  if (shareModal) {
    shareModal.classList.add("hidden");
    shareModal.classList.remove("flex");
  }
}

if (shareBtn) shareBtn.addEventListener("click", () => {
  if (navigator.share) {
    navigator.share({
      title: PROFILE_DATA.name + " | Apple Link Hub",
      text: PROFILE_DATA.tagline,
      url: window.location.href
    }).catch(() => openShareModal());
  } else {
    openShareModal();
  }
});

if (closeShareModalBtn) closeShareModalBtn.addEventListener("click", closeShareModal);

if (shareModal) {
  shareModal.addEventListener("click", (e) => {
    if (e.target === shareModal) closeShareModal();
  });
}

// ============================================================================
// 6. MATTER.JS - ANTIGRAVITY ENGINE (APPLE LINKTREE EDITION)
// ============================================================================
const {
  Engine,
  Bodies,
  Body,
  Composite,
  Mouse,
  MouseConstraint,
  Events
} = Matter;

let engine = null;
let animFrameId = null;
let isAntigravityActive = false;
let physicsBodies = [];
let walls = [];
let savedPositions = [];
let currentGravityMode = "antigravity";

const antigravityToggleBtn = document.getElementById("antigravity-toggle-btn");
const physicsControlHud = document.getElementById("physics-hud");
const resetGravityBtn = document.getElementById("reset-gravity-btn");
const toggleGravityModeBtn = document.getElementById("toggle-gravity-mode-btn");
const chaosBoostBtn = document.getElementById("chaos-boost-btn");
const physicsCanvas = document.getElementById("physics-canvas");
const mainContainer = document.getElementById("main-container");

function getPhysicsTargetElements() {
  const elements = [];
  
  // 1. Profil kartasi
  const profileCard = document.getElementById("profile-card");
  if (profileCard) elements.push(profileCard);

  // 2. Statistika qutisi
  const statsContainer = document.getElementById("stats-container");
  if (statsContainer) elements.push(statsContainer);

  // 3. Antigravitatsiya tugmasi
  const heroBtnWrap = document.getElementById("antigravity-btn-wrapper");
  if (heroBtnWrap) elements.push(heroBtnWrap);

  // 4. Barcha havola kartalari
  const linkCards = document.querySelectorAll(".apple-card, .apple-card-featured");
  linkCards.forEach(el => elements.push(el));

  // 5. Aloqa tugmalari
  const directContacts = document.getElementById("direct-contacts-container");
  if (directContacts) elements.push(directContacts);

  return elements;
}

function startAntigravity() {
  if (isAntigravityActive) return;
  isAntigravityActive = true;

  sfx.playWhoosh();

  const targets = getPhysicsTargetElements();
  if (!targets.length) return;

  window.scrollTo({ top: 0, behavior: "instant" });
  document.body.style.overflow = "hidden";
  mainContainer.style.minHeight = `${mainContainer.offsetHeight}px`;

  savedPositions = targets.map(el => {
    const rect = el.getBoundingClientRect();
    return {
      el,
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height
    };
  });

  engine = Engine.create({
    gravity: { x: 0, y: -0.065, scale: 0.001 },
    enableSleeping: false
  });

  createBoundaries();

  physicsBodies = [];
  savedPositions.forEach((pos) => {
    const el = pos.el;

    el.style.width = `${pos.width}px`;
    el.style.height = `${pos.height}px`;
    el.style.position = "fixed";
    el.style.left = "0px";
    el.style.top = "0px";
    el.style.margin = "0";
    el.style.zIndex = "40";
    el.style.transform = `translate3d(${pos.left}px, ${pos.top}px, 0px) rotate(0rad)`;
    el.classList.add("physics-active");

    const bodyCenterX = pos.left + pos.width / 2;
    const bodyCenterY = pos.top + pos.height / 2;

    const body = Bodies.rectangle(bodyCenterX, bodyCenterY, pos.width, pos.height, {
      restitution: 0.88,
      friction: 0.05,
      frictionAir: 0.018,
      density: 0.001
    });

    const initialVx = (Math.random() - 0.5) * 8;
    const initialVy = -(Math.random() * 5 + 3.5);
    Body.setVelocity(body, { x: initialVx, y: initialVy });
    Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.06);

    body.domElement = el;
    body.width = pos.width;
    body.height = pos.height;

    physicsBodies.push(body);
    Composite.add(engine.world, body);
  });

  setupMouseInteraction();
  runPhysicsLoop();

  physicsControlHud.classList.remove("hidden");
  setTimeout(() => {
    physicsControlHud.classList.remove("translate-y-28", "opacity-0");
  }, 50);

  showToast("💥 GRAVITATSIYA YO'Q QILINDI! Kartalarni otib o'ynang!");
}

function createBoundaries() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const thickness = 100;

  walls = [
    Bodies.rectangle(w / 2, -thickness / 2, w * 2, thickness, { isStatic: true }),
    Bodies.rectangle(w / 2, h + thickness / 2, w * 2, thickness, { isStatic: true }),
    Bodies.rectangle(-thickness / 2, h / 2, thickness, h * 2, { isStatic: true }),
    Bodies.rectangle(w + thickness / 2, h / 2, thickness, h * 2, { isStatic: true })
  ];

  Composite.add(engine.world, walls);
}

let mouseConstraint = null;

function setupMouseInteraction() {
  physicsCanvas.width = window.innerWidth;
  physicsCanvas.height = window.innerHeight;
  physicsCanvas.classList.remove("hidden", "pointer-events-none");
  physicsCanvas.classList.add("pointer-events-auto");

  const mouse = Mouse.create(physicsCanvas);
  mouse.pixelRatio = 1;

  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.28,
      damping: 0.08,
      render: { visible: false }
    }
  });

  Composite.add(engine.world, mouseConstraint);

  Events.on(mouseConstraint, "startdrag", (evt) => {
    sfx.playTap(1200, 0.03);
    document.body.style.cursor = "grabbing";
    physicsCanvas.style.cursor = "grabbing";
    if (evt.body && evt.body.domElement) {
      evt.body.domElement.style.zIndex = "45";
    }
  });

  Events.on(mouseConstraint, "enddrag", (evt) => {
    sfx.playTap(600, 0.04);
    document.body.style.cursor = "default";
    physicsCanvas.style.cursor = "grab";
    if (evt.body && evt.body.domElement) {
      evt.body.domElement.style.zIndex = "40";
    }
  });

  physicsCanvas.style.cursor = "grab";
}

function runPhysicsLoop() {
  function step() {
    if (!isAntigravityActive) return;

    Engine.update(engine, 1000 / 60);

    for (let i = 0; i < physicsBodies.length; i++) {
      const b = physicsBodies[i];
      const el = b.domElement;
      if (el) {
        const left = b.position.x - b.width / 2;
        const top = b.position.y - b.height / 2;
        el.style.transform = `translate3d(${left}px, ${top}px, 0px) rotate(${b.angle}rad)`;
      }
    }

    animFrameId = requestAnimationFrame(step);
  }

  animFrameId = requestAnimationFrame(step);
}

function resetGravity() {
  if (!isAntigravityActive) return;

  sfx.playReset();

  if (animFrameId) {
    cancelAnimationFrame(animFrameId);
    animFrameId = null;
  }

  physicsCanvas.classList.add("hidden", "pointer-events-none");
  physicsCanvas.classList.remove("pointer-events-auto");
  document.body.style.cursor = "default";
  document.body.style.overflow = "";

  physicsControlHud.classList.add("translate-y-28", "opacity-0");
  setTimeout(() => {
    physicsControlHud.classList.add("hidden");
  }, 300);

  savedPositions.forEach(pos => {
    const el = pos.el;
    el.classList.add("physics-resetting");
    el.style.transform = `translate3d(${pos.left}px, ${pos.top}px, 0px) rotate(0rad)`;
  });

  setTimeout(() => {
    savedPositions.forEach(pos => {
      const el = pos.el;
      el.removeAttribute("style");
      el.classList.remove("physics-active", "physics-resetting");
    });

    mainContainer.style.minHeight = "";

    if (engine) {
      Composite.clear(engine.world, false);
      Engine.clear(engine);
      engine = null;
    }

    physicsBodies = [];
    walls = [];
    mouseConstraint = null;
    isAntigravityActive = false;
    currentGravityMode = "antigravity";
    updateGravityModeButtonText();

    showToast("✨ Mukammal tartib tiklandi!");
  }, 700);
}

function toggleGravityMode() {
  if (!engine) return;

  sfx.playTap(900, 0.04);

  if (currentGravityMode === "antigravity") {
    currentGravityMode = "zero";
    engine.gravity.y = 0;
    engine.gravity.x = 0;
    showToast("🌌 Mutlaq Vaznsizlik (Zero-G) rejimi!");
  } else if (currentGravityMode === "zero") {
    currentGravityMode = "earth";
    engine.gravity.y = 0.9;
    engine.gravity.x = 0;
    showToast("🌍 Yer tortishishi (Normal Gravity)!");
  } else {
    currentGravityMode = "antigravity";
    engine.gravity.y = -0.065;
    engine.gravity.x = 0;
    showToast("🚀 Antigravitatsiya (Yuqoriga suzish)!");
  }

  updateGravityModeButtonText();
}

function updateGravityModeButtonText() {
  const modeText = document.getElementById("gravity-mode-label");
  const modeIcon = document.getElementById("gravity-mode-icon");
  if (!modeText || !modeIcon) return;

  if (currentGravityMode === "antigravity") {
    modeText.textContent = "Antigravitatsiya";
    modeIcon.setAttribute("data-lucide", "rocket");
  } else if (currentGravityMode === "zero") {
    modeText.textContent = "Vaznsizlik";
    modeIcon.setAttribute("data-lucide", "sparkles");
  } else {
    modeText.textContent = "Yer Gravitatsiyasi";
    modeIcon.setAttribute("data-lucide", "arrow-down");
  }
  if (window.lucide) lucide.createIcons();
}

function triggerChaosBoost() {
  if (!physicsBodies.length) return;

  sfx.playWhoosh();

  physicsBodies.forEach(body => {
    const forceX = (Math.random() - 0.5) * 0.07;
    const forceY = -(Math.random() * 0.08 + 0.03);
    Body.applyForce(body, body.position, { x: forceX, y: forceY });
    Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.25);
  });

  showToast("💥 KOSMIK XAOS PORTLASHI!");
}

window.addEventListener("resize", () => {
  if (!isAntigravityActive || !engine) return;

  physicsCanvas.width = window.innerWidth;
  physicsCanvas.height = window.innerHeight;

  if (walls.length) {
    Composite.remove(engine.world, walls);
    createBoundaries();
  }
});

// Hodisalarni ulash
if (antigravityToggleBtn) antigravityToggleBtn.addEventListener("click", startAntigravity);
if (resetGravityBtn) resetGravityBtn.addEventListener("click", resetGravity);
if (toggleGravityModeBtn) toggleGravityModeBtn.addEventListener("click", toggleGravityMode);
if (chaosBoostBtn) chaosBoostBtn.addEventListener("click", triggerChaosBoost);

// ============================================================================
// 7. DASTURNI BOSHLASH
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
});
