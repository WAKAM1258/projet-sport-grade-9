/* ─────────────────────────────────────────
   SPORT PORTFOLIO — script.js
   ───────────────────────────────────────── */

/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ── Burger menu ── */
const burgerBtn = document.getElementById('burgerBtn');
const navLinks  = document.querySelector('.nav-links');
burgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      const id = entry.target.id;
      const active = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => observer.observe(s));

/* ── Reveal on scroll ── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.info-card, .highlight-card, .method-item, .learn-card, .bilan-item, .intro-card, .score-card, .detail-text, .detail-visual'
).forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(i % 4) * 0.1}s`;
  revealObserver.observe(el);
});

/* ── Score ring animation ── */
const scoreCircle = document.getElementById('scoreCircle');
function animateScore(value) {
  if (!scoreCircle) return;
  scoreCircle.style.setProperty('--score', value);
  // On ne modifie pas le textContent ici pour garder le "B+"
}
const bilanSection = document.getElementById('bilan');
const bilanObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    const raw = document.getElementById('scoreBig').dataset.score;
    const score = parseFloat(raw) || 0;
    setTimeout(() => animateScore(score), 300);
    bilanObserver.disconnect();
  }
}, { threshold: 0.4 });
if (bilanSection) bilanObserver.observe(bilanSection);

/* ── Footer year ── */
const yearEl = document.getElementById('footerYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ─────────────────────────────────────────
   DATA — Modifie ces valeurs avec tes réponses !
   Elles sont remplies depuis questions.md
────────────────────────────────────────── */
const portfolioData = {

  /* ── INTRO ── */
  introDesc:   "Ce portfolio retrace mon aventure sportive au Maroc. J'ai passé des journées entières à dompter les vagues à Tafraout et à explorer les skateparks en trottinette. C'est l'histoire d'un apprentissage intensif, entre discipline et pur plaisir de la glisse.",
  metaSchool:  "Spiral Clonlara School Grade 9",
  metaPeriod:  "1er Semestre 2026",
  metaClass:   "Grade 9",

  /* ── SURF ── */
  surfDuration: "3 semaines (4 à 6h/jour)",
  surfLevel:   "Intermédiaire",
  surfPlace:   "Tafraout, Maroc",
  surfBoard:   "Egg (location) pour la stabilité, puis Fish 6'1 pour les sensations.",
  surfTech:    "Équilibre, virages (va-et-vient), prise de vagues au large et vagues vertes.",
  surfProud:   "Mes deux derniers jours avec la planche Fish, des sensations incroyables !",

  /* ── TROTTINETTE ── */
  trotLevel:   "Débutant (mais motivé !)",
  trotPlace:   "Skateparks avec des amis",
  trotScoot:   "Trottinette de figure en acier",
  trotTricks:  "Sauts d'obstacles, pentes raides, slides sur barrières.",
  trotProud:   "Mon grand saut sur la rampe, une immense fierté !",

  /* ── MÉTHODES ── */
  methodTrain: "Entraînement fun et motivant avec mes amis.",
  methodFreq:  "Surf : 4 à 6h/j (3 sem.) | Trot : 3h/j (4 sem.)",
  methodVideo: "Visionnage de vidéos de surf pour corriger mes postures.",
  methodGoal:  "Maîtriser la planche Fish (défi relevé à moitié !).",

  /* ── APPRENTISSAGES ── */
  learnSelf:   "J'ai découvert une grande discipline personnelle et gagné en confiance.",
  learnDiff:   "L'accident en trottinette : bras en écharpe et radio à l'hôpital (Heureusement, rien de cassé !).",
  learnTech:   "Découverte totale de la trottinette freestyle et perfectionnement en surf.",
  learnPhys:   "Grosse progression cardio. Importance cruciale de l'échauffement et de la nutrition.",

  /* ── BILAN ── */
  scoreVal:    8.5,                // B+ correspond à environ 8.5/10
  bilanImprove:"Surfer des vagues plus grosses et devenir un pro de la Fish.",
  bilanContinue:"Oui, dès que possible ! Même en solo, la passion est là.",
  bilanMessage:"Lance-toi sans hésiter, c'est bon pour la santé et la fierté personnelle !",
};

/* ── Injection automatique des données ── */
function setText(id, value) {
  const el = document.getElementById(id);
  if (el && value && value !== "À définir") el.textContent = value;
}

// Mise à jour du titre Hero retirée selon tes instructions

setText('introDesc',     portfolioData.introDesc);
setText('metaSchool',    portfolioData.metaSchool);
setText('metaPeriod',    portfolioData.metaPeriod);
setText('metaClass',     portfolioData.metaClass);

// Surf level
const surfLevelEl = document.getElementById('surfLevel');
if (surfLevelEl) {
  surfLevelEl.innerHTML = `Niveau <strong>${portfolioData.surfLevel}</strong> — ${portfolioData.surfDuration}`;
}
setText('surfPlace',     portfolioData.surfPlace);
// setText('surfBoard',     portfolioData.surfBoard);
// setText('surfTech',      portfolioData.surfTech);
setText('surfProud',     portfolioData.surfProud);

setText('trotLevel',     portfolioData.trotLevel);
setText('trotPlace',     portfolioData.trotPlace);
setText('trotScoot',     portfolioData.trotScoot);
setText('trotTricks',    portfolioData.trotTricks);
setText('trotProud',     portfolioData.trotProud);

setText('methodTrain',   portfolioData.methodTrain);
setText('methodFreq',    portfolioData.methodFreq);
setText('methodVideo',   portfolioData.methodVideo);
setText('methodGoal',    portfolioData.methodGoal);

setText('learnSelf',     portfolioData.learnSelf);
setText('learnDiff',     portfolioData.learnDiff);
setText('learnTech',     portfolioData.learnTech);
// setText('learnPhys',     portfolioData.learnPhys);

// Score ring
const scoreEl = document.getElementById('scoreBig');
if (scoreEl) {
  scoreEl.dataset.score = portfolioData.scoreVal;
  scoreEl.textContent = "B+"; // On affiche la note US
}
const scoreNum = document.querySelector('.score-num');
if (scoreNum) scoreNum.textContent = "B+";
const scoreDenom = document.querySelector('.score-denom');
if (scoreDenom) scoreDenom.style.display = 'none'; // Pas besoin du /10 si c'est B+

setText('bilanImprove',  portfolioData.bilanImprove);
setText('bilanContinue', portfolioData.bilanContinue);
setText('bilanMessage',  portfolioData.bilanMessage);
