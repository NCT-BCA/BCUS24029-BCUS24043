/**
 * BCA Department - National College, Trichy
 * Main JavaScript File
 * Features: SPA Navigation, GSAP Animations, Carousel, Accordions
 */

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// ============================================
// DOM Elements
// ============================================
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
const pages = document.querySelectorAll('.page');
const registerBtn = document.getElementById('registerBtn');
const registerModal = document.getElementById('registerModal');
const modalClose = document.getElementById('modalClose');
const modalGotIt = document.getElementById('modalGotIt');
const modalNotify = document.getElementById('modalNotify');
const facultyProfileModal = document.getElementById('facultyProfileModal');
const facultyProfileClose = document.getElementById('facultyProfileClose');
const facultyProfileBackdrop = document.querySelector('.faculty-profile-backdrop');
const facultyProfileImage = document.getElementById('facultyProfileImage');
const facultyProfileName = document.getElementById('facultyProfileName');
const facultyProfileDesignation = document.getElementById('facultyProfileDesignation');
const facultyProfileQualification = document.getElementById('facultyProfileQualification');
const facultyProfileSpecialization = document.getElementById('facultyProfileSpecialization');
const facultyProfileBio = document.getElementById('facultyProfileBio');

// Gallery elements
const gallerySlider = document.getElementById('gallerySlider');
const galleryDots = document.getElementById('galleryDots');
const prevSlideBtn = document.getElementById('prevSlide');
const nextSlideBtn = document.getElementById('nextSlide');
const galleryGrid = document.getElementById('galleryGrid');

// ============================================
// Data
// ============================================
// Slideshow images (do not change unless you want to update the slideshow).
const galleryImages = [
  { url: 'image1.jpeg', alt: 'Gallery image 1' },
  { url: 'image2.jpeg', alt: 'Gallery image 2' },
  { url: 'image3.jpeg', alt: 'Gallery image 3' },
  { url: 'image4.jpeg', alt: 'Gallery image 4' },
  { url: 'image5.jpeg', alt: 'Gallery image 5' },
  { url: 'image6.jpeg', alt: 'Gallery image 6' }
];

// Separate gallery section images: add, remove, or update images here for the gallery cards below the slideshow.
const gallerySectionImages = [
  { url: 'image1.jpeg', alt: 'Gallery section image 1' },
  { url: 'image2.jpeg', alt: 'Gallery section image 2' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/IMG-20260306-WA0014.jpg.jpeg', alt: 'IBM 1' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/IMG_20260222_164104.jpg.jpeg', alt: 'IBM 2' },
  { url: 'image3.jpeg', alt: 'Gallery section image 3' },
  { url: 'image4.jpeg', alt: 'Gallery section image 4' },
  { url: 'image5.jpeg', alt: 'Gallery section image 5' },
  { url: 'image6.jpeg', alt: 'Gallery section image 6' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/1%20Lab1.jpeg', alt: 'Gallery section image 7' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/1%20Lab2.jpeg', alt: 'Gallery section image 8' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/1694499007078.jpg', alt: 'Gallery section image 9' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/1694499007277.jpg', alt: 'Gallery section image 10' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/1694499007307.jpg', alt: 'Gallery section image 11' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/1694499007442.jpg', alt: 'Gallery section image 12' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/2%20Lab1.jpeg', alt: 'Gallery section image 13' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/20240110_094838.jpg', alt: 'Gallery section image 14' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/Geotagged%20Photo%202.jpeg', alt: 'Gallery section image 15' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/IMG-20230719-WA0014.jpg', alt: 'Gallery section image 16' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/IMG-20230719-WA0016.jpg', alt: 'Gallery section image 17' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/IMG-20230719-WA0024.jpg', alt: 'Gallery section image 18' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/IMG-20230828-WA0016.jpg', alt: 'Gallery section image 19' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/IMG-20230828-WA0017.jpg', alt: 'Gallery section image 20' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/IMG-20230828-WA0018.jpg', alt: 'Gallery section image 21' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/IMG-20230828-WA0020.jpg', alt: 'Gallery section image 22' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/IMG-20240110-WA0018.jpg', alt: 'Gallery section image 23' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/IMG-20240320-WA0005.jpg', alt: 'Gallery section image 24' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/New%20Article.jpeg', alt: 'Gallery section image 25' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/Photo%202.jpeg', alt: 'Gallery section image 26' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/photo3.jpeg', alt: 'Gallery section image 27' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/photo4.jpeg', alt: 'Gallery section image 28' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/photo5.jpeg', alt: 'Gallery section image 29' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/Professonal%20Photo%2010.jpeg', alt: 'Gallery section image 30' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/Professonal%20Photo%2011.jpeg', alt: 'Gallery section image 31' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/Professonal%20Photo%2013.jpeg', alt: 'Gallery section image 32' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/Professonal%20Photo%2015.jpeg', alt: 'Gallery section image 33' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/Professonal%20Photo%203.jpeg', alt: 'Gallery section image 34' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/Professonal%20Photo%205.jpeg', alt: 'Gallery section image 35' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/Professonal%20Photo%206.jpeg', alt: 'Gallery section image 36' },
  { url: 'https://nct-bca.neocities.org/BCA%20images/Professonal%20Photo%207.jpeg', alt: 'Gallery section image 37' },
];

const facultyData = [
  { name: 'Dr. M. ANUSHA', designation: 'Head of Department', qualification: 'M.Sc., M.Phil.,M.Tech., Ph.D.,', specialization: 'Artificial Intelligence', image: 'https://www.nct.ac.in/images/staff/computer_application/anusha.png', profile: 'http://nct.ac.in/assets/images/bca/cv/1.%20Anusha.pdf', achievements: 'https://scholar.google.com/citations?user=XEMWO8EAAAAJ&hl=en' },
  { name: 'Dr. G. SRINAGANYA', designation: 'Associate Professor', qualification: 'MCA., M.Phil., Ph.D.,', specialization: 'Machine Learning', image: 'https://www.nct.ac.in/images/staff/computer_application/srinaganya.png', profile: 'https://www.nct.ac.in/assets/images/bca/cv/2.%20Dr%20G%20Srinaganya.pdf', achievements: 'https://scholar.google.com/citations?pli=1&user=DeRH35QAAAAJ' },
  { name: 'Ms. S. Revathi', designation: 'Associate Professor', qualification: 'M.Sc., M.Phil,', specialization: 'Cloud Architecture', image: 'https://www.nct.ac.in/images/staff/computer_application/revathi.png', profile: 'https://www.nct.ac.in/assets/images/bca/cv/4.%20S.Revathi-Biodata.pdf', achievements: '' },
  { name: 'Ms. B. Nagajothi', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil,', specialization: 'Database Systems', image: 'https://www.nct.ac.in/images/staff/computer_application/naga_jothi.png', profile: 'https://www.nct.ac.in/assets/images/bca/cv/5.%20Nagajothi-Staff%20Biodata.pdf', achievements: '' },
  { name: 'Ms. A. Aasmi Sabana', designation: 'Assistant Professor', qualification: 'M.Sc.,', specialization: 'Information Security', image: 'https://www.nct.ac.in/images/aaa/as.png', profile: 'https://www.nct.ac.in/assets/images/bca/cv/9..%20AASMI%20SABANA.pdf', achievements: '' },
  { name: 'Ms. S. Ruby', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil.,', specialization: 'Information Security', image: 'https://www.nct.ac.in/images/aaa/ruby.png', profile: 'https://www.nct.ac.in/assets/images/bca/cv/9..%20AASMI%20SABANA.pdf', achievements: '' },
];

// ============================================
// State
// ============================================
let currentSlide = 0;
let slideInterval = null;
let activePage = 'about';

// ============================================
// Initialization
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  if (navbar) initNavbar();
  if (navLinks.length) initNavigation();
  if (mobileMenuBtn && mobileMenu) initMobileMenu();
  if (registerBtn && registerModal && modalClose && modalGotIt && modalNotify) initModal();
  if (facultyProfileModal) initFacultyProfileModal();
  if (gallerySlider && galleryDots && prevSlideBtn && nextSlideBtn) initGallery();
  if (galleryGrid) renderGallerySection();
  if (document.getElementById('facultyGrid')) initFacultyGrid();
  initAnimations();
  if (document.querySelectorAll('.counter-value').length) initCounters();
});

// ============================================
// Navbar Scroll Effect
// ============================================
function initNavbar() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ============================================
// SPA Navigation
// ============================================
function initNavigation() {
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      const targetHref = link.getAttribute('href');
      if (targetHref && targetHref !== '#') {
        return;
      }

      event.preventDefault();
      const page = link.dataset.page;
      navigateTo(page);
    });
  });
}

function navigateTo(page) {
  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });

  const currentPage = document.querySelector('.page.active');
  const nextPage = document.getElementById(`${page}Page`);

  if (currentPage && nextPage && currentPage !== nextPage) {
    gsap.to(currentPage, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        currentPage.classList.remove('active');
        nextPage.classList.add('active');
        gsap.fromTo(nextPage, 
          { opacity: 0 },
          { opacity: 1, duration: 0.5 }
        );
        
        if (page === 'about') {
          initAboutAnimations();
        } else if (page === 'gallery') {
          initGalleryAnimations();
        } else if (page === 'faculty') {
          initFacultyAnimations();
        }
      }
    });
  }

  mobileMenu.classList.remove('open');
  mobileMenuBtn.querySelector('.menu-icon').classList.remove('hidden');
  mobileMenuBtn.querySelector('.close-icon').classList.add('hidden');

  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  activePage = page;
}

// ============================================
// Mobile Menu
// ============================================
function initMobileMenu() {
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    mobileMenuBtn.querySelector('.menu-icon').classList.toggle('hidden', isOpen);
    mobileMenuBtn.querySelector('.close-icon').classList.toggle('hidden', !isOpen);
  });
}

// ============================================
// Register Modal
// ============================================
function initModal() {
  registerBtn.addEventListener('click', openModal);
  modalClose.addEventListener('click', closeModal);
  modalGotIt.addEventListener('click', closeModal);
  modalNotify.addEventListener('click', closeModal);

  const backdrop = registerModal.querySelector('.modal-backdrop');
  if (backdrop) backdrop.addEventListener('click', closeModal);
}

function openModal() {
  registerModal.classList.remove('hidden');
  requestAnimationFrame(() => {
    registerModal.classList.add('open');
  });
}

function closeModal() {
  registerModal.classList.remove('open');
  setTimeout(() => {
    registerModal.classList.add('hidden');
  }, 300);
}

// ============================================
// Gallery Carousel
// ============================================
function initGallery() {
  if (!gallerySlider || !galleryDots || !prevSlideBtn || !nextSlideBtn) return;

  gallerySlider.innerHTML = '';
  galleryDots.innerHTML = '';

  galleryImages.forEach((image, index) => {
    const slide = document.createElement('div');
    slide.className = 'gallery-slide';
    slide.innerHTML = `<img src="${image.url}" alt="${image.alt || `Gallery image ${index + 1}`}" loading="lazy">`;
    gallerySlider.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = `gallery-dot ${index === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goToSlide(index));
    galleryDots.appendChild(dot);
  });

  prevSlideBtn.addEventListener('click', () => {
    goToSlide(currentSlide - 1);
  });

  nextSlideBtn.addEventListener('click', () => {
    goToSlide(currentSlide + 1);
  });

  goToSlide(0);
  startSlideshow();
}

function goToSlide(index) {
  if (index < 0) index = galleryImages.length - 1;
  if (index >= galleryImages.length) index = 0;

  gsap.to(gallerySlider, {
    x: -index * 100 + '%',
    duration: 0.6,
    ease: 'power3.out'
  });

  document.querySelectorAll('.gallery-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

  currentSlide = index;
  startSlideshow();
}

function startSlideshow() {
  if (slideInterval) clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    if (activePage === 'gallery') {
      goToSlide(currentSlide + 1);
    }
  }, 5000);
}

function renderGallerySection() {
  if (!galleryGrid) return;

  galleryGrid.innerHTML = '';

  gallerySectionImages.forEach((image, index) => {
    const card = document.createElement('div');
    card.className = 'celebration-card';
    card.innerHTML = `
      <img src="${image.url}" alt="${image.alt || `Gallery section image ${index + 1}`}" loading="lazy">
    `;
    galleryGrid.appendChild(card);
  });
}

// ============================================
// Faculty Grid
// ============================================
function initFacultyGrid() {
  const facultyGrid = document.getElementById('facultyGrid');
  if (!facultyGrid) return;

  facultyGrid.innerHTML = '';
  
  facultyData.forEach((faculty, index) => {
    const card = document.createElement('div');
    card.className = 'faculty-card faculty-member card-glass';
    card.innerHTML = `
      <div class="faculty-avatar">
        <img src="${faculty.image}" alt="${faculty.name}">
        <span class="faculty-designation">${faculty.designation}</span>
      </div>
      <h3>${faculty.name}</h3>
      <div class="faculty-info">
        <div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
          </svg>
          <span>${faculty.qualification}</span>
        </div>
        <div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"></polyline>
          </svg>
          <span>${faculty.specialization}</span>
        </div>
      </div>
      <div class="faculty-buttons">
        <button class="btn-faculty-primary" data-faculty-index="${index}">View Profile</button>
        <button class="btn-faculty-secondary" data-achievements="${faculty.achievements}">Achievements</button>
      </div>
    `;
    facultyGrid.appendChild(card);
  });
  
  document.querySelectorAll('.btn-faculty-primary').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = Number(btn.dataset.facultyIndex);
      const faculty = facultyData[index];
      if (faculty) {
        openFacultyProfile(faculty);
      }
    });
  });
  
  document.querySelectorAll('.btn-faculty-secondary').forEach(btn => {
    btn.addEventListener('click', () => {
      const url = btn.dataset.achievements;
      if (!url) alert('No Document is there');
      else window.open(url, '_blank');
    });
  });
}

function initFacultyProfileModal() {
  if (!facultyProfileModal) return;

  facultyProfileClose.addEventListener('click', closeFacultyProfile);
  facultyProfileBackdrop.addEventListener('click', closeFacultyProfile);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !facultyProfileModal.classList.contains('hidden')) {
      closeFacultyProfile();
    }
  });
}

function openFacultyProfile(faculty) {
  if (!facultyProfileModal) return;

  facultyProfileImage.src = faculty.image;
  facultyProfileImage.alt = `${faculty.name} profile`;
  facultyProfileName.textContent = faculty.name;
  facultyProfileDesignation.textContent = faculty.designation;
  facultyProfileQualification.textContent = faculty.qualification;
  facultyProfileSpecialization.textContent = faculty.specialization;
  facultyProfileBio.textContent = faculty.bio || 'A dedicated faculty member committed to inspiring students through quality teaching and practical learning.';

  document.body.style.overflow = 'hidden';
  facultyProfileModal.classList.remove('hidden');
  facultyProfileModal.setAttribute('aria-hidden', 'false');

  requestAnimationFrame(() => {
    facultyProfileModal.classList.add('open');
  });
}

function closeFacultyProfile() {
  if (!facultyProfileModal) return;

  facultyProfileModal.classList.remove('open');
  facultyProfileModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  setTimeout(() => {
    facultyProfileModal.classList.add('hidden');
  }, 250);
}

// ============================================
// Animated Counters
// ============================================
function initCounters() {
  const counters = document.querySelectorAll('.counter-value');
  
  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        animateCounter(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
  const end = parseInt(element.dataset.end);
  const prefix = element.dataset.prefix || '';
  const suffix = element.dataset.suffix || '';
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(end * easeProgress);
    
    element.textContent = prefix + current.toLocaleString() + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = prefix + end.toLocaleString() + suffix;
    }
  }

  requestAnimationFrame(update);
}

// ============================================
// GSAP Animations
// ============================================
function initAnimations() {
  if (document.querySelector('.hero-title') || document.querySelector('.hero-subtitle') || document.querySelector('.course-section')) {
    initAboutAnimations();
  }

  if (document.querySelector('.gallery-header')) {
    initGalleryAnimations();
  }

  if (document.querySelector('.faculty-header')) {
    initFacultyAnimations();
  }
}

function initAboutAnimations() {
  gsap.fromTo('.hero-title', 
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
  );

  gsap.fromTo('.hero-subtitle',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
  );

  gsap.fromTo('.hero-stat',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, delay: 0.5, ease: 'power3.out' }
  );

  gsap.fromTo('.course-card',
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.course-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );

  gsap.fromTo('.vision-card',
    { opacity: 0, x: -60 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.vision-section',
        start: 'top 75%'
      }
    }
  );

  gsap.fromTo('.mission-card',
    { opacity: 0, x: 60 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.vision-section',
        start: 'top 75%'
      }
    }
  );

  gsap.fromTo('.project-item',
    { opacity: 0, y: 50, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top 75%'
      }
    }
  );

  gsap.fromTo('.approval-card',
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.syllabus-approval-section',
        start: 'top 75%'
      }
    }
  );
}

function initGalleryAnimations() {
  gsap.fromTo('.gallery-header',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
  );

  gsap.fromTo('.gallery-container',
    { opacity: 0, scale: 0.95 },
    { opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
  );
}

function initFacultyAnimations() {
  gsap.fromTo('.faculty-header',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
  );

  gsap.fromTo('.faculty-member',
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.3,
      ease: 'power3.out'
    }
  );
}
