// ---- EDITABLE DATA ----
// Point these at your own jpgs — put the files in an "assets" folder next to this script.
const profile = { name: "Sri Harsha Vardan", email: "hk.harshapshv@gmail.com.com", heroImage: "assets/hero.jpg" };

const projects = [
  { title: "Nova Banking App", category: "UI/UX Design", description: "Redesigning a mobile banking flow around clarity and trust.", image: "assets/projects/nova.jpg", liveLink: "#", caseStudyLink: "#" },
  { title: "Aster Brand System", category: "Brand Identity", description: "Full identity system for a wellness studio, from mark to packaging.", image: "assets/projects/aster.jpg", liveLink: "#", caseStudyLink: "#" },
  { title: "Fieldnotes Campaign", category: "Graphic Design", description: "Print and social campaign for a travel magazine.", image: "assets/projects/fieldnotes.jpg", liveLink: "#", caseStudyLink: "#" },
  { title: "TLB City Recap", category: "Video Production", description: "Highlight edit and motion titles for a city-wide event series.", image: "assets/projects/tlb.jpg", liveLink: "#", caseStudyLink: "#" }
];

const experience = [
  {
    year: "2025 — Present",
    company: "TLB City",
    role: "Video Production Manager & Visual Designer"
  },
  {
    year: "2025",
    company: "NextGen Defence Technologies Pvt Ltd",
    role: "UI/UX Designer & Brand Designer"
  }
];

// ---- RENDER ----
const heroEl = document.querySelector('.hero');
if (profile.heroImage) {
  heroEl.style.backgroundImage = `linear-gradient(180deg, rgba(10,10,10,.35), rgba(10,10,10,.9) 85%), url('${profile.heroImage}')`;
}

const workGrid = document.getElementById('work-grid');
projects.forEach(p => {
  const el = document.createElement('div');
  el.className = 'work-card';
  if (p.image) {
    el.style.backgroundImage = `linear-gradient(180deg, rgba(10,10,10,.15), rgba(10,10,10,.92) 75%), url('${p.image}')`;
  }
  el.innerHTML = `<div class="cat">${p.category}</div><h3>${p.title}</h3><p>${p.description}</p>
    <div class="links">${p.liveLink ? `<a href="${p.liveLink}">Live</a>` : ''}${p.caseStudyLink ? `<a href="${p.caseStudyLink}">Case Study</a>` : ''}</div>`;
  workGrid.appendChild(el);
});

const timeline = document.getElementById('timeline');
experience.forEach(e => {
  const el = document.createElement('div');
  el.className = 'timeline-item';
  el.innerHTML = `<span class="yr">${e.year}</span><h3>${e.company}</h3><span class="role">${e.role}</span>`;
  timeline.appendChild(el);
});

document.querySelectorAll('.service-row').forEach(row => {
  row.addEventListener('click', () => {
    const wasOpen = row.classList.contains('open');
    document.querySelectorAll('.service-row').forEach(r => r.classList.remove('open'));
    if (!wasOpen) row.classList.add('open');
  });
});

// ---- ANIMATION ----
try {
  gsap.registerPlugin(ScrollTrigger);
  gsap.set('.hero-title em', { yPercent: 110 });
  gsap.set('.hero-roles, .scroll-cue', { opacity: 0 });
  gsap.to('.hero-title em', { yPercent: 0, duration: 1.1, ease: 'power4.out', stagger: 0.12, delay: 0.2 });
  gsap.to('.hero-roles, .scroll-cue', { opacity: 1, duration: 1, delay: 0.9 });
  gsap.utils.toArray('#intro-text .hl').forEach(w => {
    gsap.fromTo(w, { opacity: 0.25 }, { opacity: 1, duration: 0.4,
      scrollTrigger: { trigger: w, start: 'top 80%', end: 'top 55%', scrub: true } });
  });
  gsap.utils.toArray('.work-card').forEach(card => {
    gsap.from(card, { opacity: 0, y: 40, duration: 0.8, scrollTrigger: { trigger: card, start: 'top 90%' } });
  });
} catch(e) { /* GSAP unavailable — content still fully usable without motion */ }
