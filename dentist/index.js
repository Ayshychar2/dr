// ==========================================
// MOCK DATABASE & DATA STORE
// ==========================================

const SPECIALTIES = [
  { id: 'gp', name: 'General Dentistry', icon: '🦷', desc: 'Routine checkups, fillings, and pain consultations' },
  { id: 'ortho', name: 'Orthodontics', icon: '😬', desc: 'Clear aligners, traditional braces, and smile alignment' },
  { id: 'endo', name: 'Endodontics', icon: '🔬', desc: 'Single-sitting root canals, root care, and post treatment' },
  { id: 'implant', name: 'Implantology', icon: '🔩', desc: 'Premium titanium dental implants and ceramic bridges' },
  { id: 'peds', name: 'Pediatric Dentistry', icon: '👶', desc: 'Child dental health, fluoride therapy, and cavity prevention' },
  { id: 'cosmetic', name: 'Cosmetic Dentistry', icon: '✨', desc: 'Teeth whitening, dental veneers, and smile makeovers' }
];

const DIAGNOSTIC_PACKAGES = [
  {
    id: 'pkg-basic',
    name: 'Kavita Dental Basic Care',
    originalPrice: 2499,
    price: 999,
    savings: '60%',
    testCount: 4,
    desc: 'Essential routine scaling & polish with visual clinic check.',
    inclusions: ['Complete Dental Examination', 'Teeth Scaling (Ultrasonic)', 'Teeth Polishing', 'Intraoral X-Ray (if needed)'],
    category: 'profile',
    badge: 'Popular',
    badgeClass: ''
  },
  {
    id: 'pkg-comprehensive',
    name: 'Kavita Smile Design Package',
    originalPrice: 7499,
    price: 2999,
    savings: '60%',
    testCount: 8,
    desc: 'Premium cosmetic smile evaluation, polishing & whitening.',
    inclusions: ['Comprehensive Smile Assessment', 'Premium Scaling & Polish', 'Zoom Teeth Whitening Session', 'Intraoral Scan & Mockup', 'Fluoride Treatment'],
    category: 'profile',
    badge: 'Best Seller',
    badgeClass: 'best-seller'
  },
  {
    id: 'pkg-senior',
    name: 'Kavita Dental Implant Profile',
    originalPrice: 34999,
    price: 14999,
    savings: '57%',
    testCount: 10,
    desc: 'Specialized diagnosis & planning for single-tooth dental implant.',
    inclusions: ['Clinical Consultation by Implantologist', '3D CBCT Dental Scan', 'Biocompatible Implant Checkup', 'Bone Density Evaluation', 'Post-Op Follow-up Care'],
    category: 'profile',
    badge: 'Comprehensive',
    badgeClass: 'comprehensive'
  }
];

const INDIVIDUAL_TESTS = [
  { id: 'test-cbc', name: 'Scaling & Polish', price: 799, desc: 'Removes plaque, tartar, and surface stains to refresh gums.', category: 'preventive' },
  { id: 'test-glucose', name: 'Dental Cavity Filling', price: 999, desc: 'Premium composite/tooth-colored fillings for active decay.', category: 'preventive' },
  { id: 'test-thyroid', name: 'Root Canal Treatment (RCT)', price: 2499, desc: 'Painless single-sitting root canal treatment.', category: 'restorative' },
  { id: 'test-lipid', name: 'Ceramic Crown / Cap', price: 3499, desc: 'High-strength metal-free Zirconia/ceramic protective crown.', category: 'restorative' },
  { id: 'test-urine', name: 'Dental Extraction (Tooth Removal)', price: 1499, desc: 'Comfortable & painless surgical tooth removal.', category: 'restorative' },
  { id: 'test-vitd', name: 'Teeth Whitening (Bleaching)', price: 4499, desc: 'In-office clinical teeth whitening for a bright smile.', category: 'cosmetic' },
  { id: 'test-lft', name: 'Premium Dental Implant', price: 17999, desc: 'Titanium root replacement post with abutment.', category: 'restorative' },
  { id: 'test-kft', name: 'Clear Aligners Consultation', price: 1999, desc: '3D scanning and custom transparent alignment planning.', category: 'cosmetic' }
];

const CONCERNS = {
  toothache: {
    title: 'Root Canal Treatment (RCT)',
    price: 2499,
    desc: 'Deep tooth decay or infections inside the tooth pulp require removal of infected tissue and sealing to relieve severe pain permanently. Safe, sterile, and single-sitting treatment under Dr. Kavita.',
    solution: 'Single-Sitting Painless RCT',
    badge: 'Restorative'
  },
  yellow: {
    title: 'Teeth Whitening (Bleaching)',
    price: 4499,
    desc: 'In-office clinical Zoom whitening session to remove coffee, food, tobacco, or age-related enamel stains. Whitens up to 8 shades in a single session with long-lasting aesthetic brilliance.',
    solution: 'Clinical Zoom Bleaching',
    badge: 'Cosmetic'
  },
  bleeding: {
    title: 'Scaling & Polish',
    price: 799,
    desc: 'Ultrasonic removal of hardened bacterial plaque, calculus, and tartar below the gumline to treat bleeding gums, gingivitis, bad breath, and surface discoloration.',
    solution: 'Deep Scaling & Gum Polish',
    badge: 'Preventive'
  },
  missing: {
    title: 'Premium Dental Implant',
    price: 17999,
    desc: 'Missing or broken teeth are restored permanently using high-grade biocompatible titanium posts that fuse with the jawbone, topped with a custom Zirconia ceramic crown.',
    solution: 'Titanium Dental Implant',
    badge: 'Implantology'
  }
};

const MOCK_REPORTS = [
  {
    id: 'rep-plaque',
    testName: 'Gum Plaque Index Checkup',
    date: 'June 08, 2026',
    parameters: [
      { name: 'Plaque Accumulation Index', value: 12, unit: '%', range: '< 15', status: 'Optimal', percent: 30, isNormal: true }
    ]
  },
  {
    id: 'rep-whitening',
    testName: 'Smile Shade Guide Report',
    date: 'May 14, 2026',
    parameters: [
      { name: 'Enamel shade (VITA Classical)', value: 2, unit: 'Shade B2', range: 'A1 - D4', status: 'Healthy', percent: 45, isNormal: true },
      { name: 'Gingival Recession Index', value: 1, unit: 'mm', range: '< 2', status: 'Minimal', percent: 50, isNormal: true }
    ]
  }
];

const MOCK_PRESCRIPTIONS = [
  {
    id: 'rx-2091',
    doctor: 'Dr. Kavita, DDS (Endodontist)',
    date: 'June 05, 2026',
    diagnosis: 'Localized Pulpitis & Mild Gum Inflammation',
    medicines: [
      { name: 'Tab. Amoxicillin 500mg (Antibiotic)', dosage: 'Thrice daily after meals', duration: '5 Days' },
      { name: 'Tab. Ketorol DT (Pain Relief)', dosage: 'Dissolve in water on acute pain', duration: '3 Days' },
      { name: 'Chlorhexidine Mouthwash 0.2%', dosage: 'Rinse twice daily after brushing', duration: '14 Days' }
    ],
    testsRecommended: ['Scaling & Polish', 'Root Canal Treatment (RCT)']
  }
];

const TESTIMONIALS = [
  {
    name: "Ayush Sharma",
    specialty: "Visited Noida Clinic for Root Canal",
    stars: 5,
    avatar: "AS",
    quote: "Dr. Kavita performed a single-sitting root canal treatment completely painlessly. I was terrified of dental chairs, but her comforting attitude and high-tech setup made it a breeze!"
  },
  {
    name: "Sunita Rao",
    specialty: "Smile Design & Whitening Customer",
    stars: 5,
    avatar: "SR",
    quote: "Highly recommend the Kavita Smile Design Package. The teeth whitening and scaling results are amazing. My smile is easily 3-4 shades brighter, and the cost was very reasonable."
  },
  {
    name: "Vikram Malhotra",
    specialty: "Orthodontic Aligner Patient",
    stars: 5,
    avatar: "VM",
    quote: "Very professional consultation for clear aligners. Dr. Kavita used a 3D intraoral scanner to show me the treatment roadmap before starting. Noida clinic is top-notch."
  }
];

// Active State Storage
let cart = [];
let bookings = [
  { id: 'DENT-9921', type: 'consultation', specialty: 'General Dentistry', visitType: 'Noida Clinic Visit', date: '2026-06-18', time: '11:00 AM - 12:00 PM', price: 500, status: 'Confirmed' },
  { id: 'LAB-4819', type: 'diagnostics', tests: ['Kavita Smile Design Package'], date: '2026-06-19', time: '09:00 AM - 11:00 AM', price: 2999, status: 'Scheduled' }
];

// ==========================================
// INITIALIZATION RUNNER
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  renderWellnessPackages();
  renderIndividualTests('all');
  renderTestimonials();
  setupHeroSlider();
  setupTestimonialSlider();
  setupEventListeners();
  renderConcernRecommendation('toothache');
  
  // Set date limits
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];
  
  const consultDateInput = document.getElementById('consult-date');
  if (consultDateInput) consultDateInput.min = tomorrowStr;
});

// Render package grids
function renderWellnessPackages() {
  const container = document.getElementById('packages-grid');
  if (!container) return;
  
  container.innerHTML = DIAGNOSTIC_PACKAGES.map(pkg => `
    <div class="package-card" id="${pkg.id}">
      <div class="package-badge-row">
        ${pkg.badge ? `<span class="package-pill-tag ${pkg.badgeClass || ''}">${pkg.badge}</span>` : ''}
        <span class="package-certified-tag">🦷 IDA Approved</span>
      </div>
      <div class="pkg-icon">🦷</div>
      <h3 class="pkg-title">${pkg.name}</h3>
      <p class="pkg-desc">${pkg.desc}</p>
      
      <ul class="pkg-inclusions">
        ${pkg.inclusions.map(inc => `
          <li>
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
            ${inc}
          </li>
        `).join('')}
        <li style="color: var(--primary); font-weight:600; font-size: 0.85rem; margin-top: 8px;">
          + includes comprehensive diagnostics
        </li>
      </ul>
      
      <div class="pkg-price-row">
        <div class="pkg-price-values">
          <span class="pkg-original-price">₹${pkg.originalPrice}</span>
          <span class="pkg-price-current">₹${pkg.price}</span>
          <span class="pkg-savings-badge">Save ${pkg.savings}</span>
        </div>
        <div class="pkg-bottom-row" style="margin-top: 6px;">
          <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 500;">IDA Approved Care</span>
          <button class="btn btn-primary add-pkg-cart-btn" data-id="${pkg.id}" style="padding: 8px 18px; font-size: 0.85rem;">Book Package</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Render individual tests list
function renderIndividualTests(category) {
  const container = document.getElementById('tests-grid');
  if (!container) return;
  
  let filtered = INDIVIDUAL_TESTS;
  if (category !== 'all') {
    filtered = INDIVIDUAL_TESTS.filter(t => t.category === category);
  }
  
  container.innerHTML = filtered.map(t => `
    <div class="test-list-item" id="${t.id}">
      <div class="tli-details">
        <span class="tli-name">${t.name}</span>
        <span class="tli-desc">${t.desc}</span>
      </div>
      <div class="tli-price-row">
        <span class="tli-price">₹${t.price}</span>
        <button class="btn btn-secondary add-test-cart-btn" data-id="${t.id}" style="padding: 6px 14px; font-size:0.8rem;">Book Test</button>
      </div>
    </div>
  `).join('');
}

// Render Testimonials List
function renderTestimonials() {
  const slider = document.getElementById('testimonials-slider');
  const dotsContainer = document.getElementById('slider-dots');
  if (!slider || !dotsContainer) return;

  slider.innerHTML = TESTIMONIALS.map((t, idx) => `
    <div class="testimonial-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
      <div class="stars">${'★'.repeat(t.stars)}</div>
      <p class="testimonial-quote">"${t.quote}"</p>
      <div class="testimonial-author">
        <div class="ta-avatar">${t.avatar}</div>
        <div class="ta-info">
          <h4>${t.name}</h4>
          <p>${t.specialty}</p>
        </div>
      </div>
    </div>
  `).join('');

  dotsContainer.innerHTML = TESTIMONIALS.map((_, idx) => `
    <button class="slider-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Go to slide ${idx+1}"></button>
  `).join('');
}

// ==========================================
// HERO SLIDER HANDLER
// ==========================================

function setupHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dotsContainer = document.getElementById('hero-dots');
  
  if (slides.length === 0 || !dotsContainer) return;

  dotsContainer.innerHTML = Array.from(slides).map((_, idx) => `
    <button class="hero-dot ${idx === 0 ? 'active' : ''}" data-slide="${idx}" aria-label="Slide ${idx+1}"></button>
  `).join('');

  let currentHeroSlide = 0;
  let heroInterval = setInterval(nextSlide, 7000);

  function showSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    
    currentHeroSlide = index;

    slides.forEach((slide, idx) => {
      if (idx === currentHeroSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    const dotsList = document.querySelectorAll('.hero-dot');
    dotsList.forEach((dot, idx) => {
      if (idx === currentHeroSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    showSlide(currentHeroSlide + 1);
  }

  function resetAutoplay() {
    clearInterval(heroInterval);
    heroInterval = setInterval(nextSlide, 7000);
  }

  dotsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('hero-dot')) {
      showSlide(parseInt(e.target.dataset.slide));
      resetAutoplay();
    }
  });

  document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('hero-book-clinic-trigger')) {
      document.getElementById('consult-specialty').value = 'General Dentistry';
      resetConsultStepper();
      document.getElementById('consult-modal').classList.add('active');
    }
    if (e.target.classList.contains('hero-book-video-trigger')) {
      document.getElementById('consult-specialty').value = 'General Dentistry';
      resetConsultStepper();
      
      const modal = document.getElementById('consult-modal');
      modal.querySelectorAll('[data-group="visit-type"]').forEach(c => {
        if (c.dataset.value === 'video') c.classList.add('active');
        else c.classList.remove('active');
      });
      consultData.visitType = 'video';
      
      document.getElementById('consult-modal').classList.add('active');
    }
  });
}

// ==========================================
// TESTIMONIAL SLIDER Carousel
// ==========================================

let currentTestimonialSlide = 0;
let testimonialInterval = null;

function setupTestimonialSlider() {
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  const dotsContainer = document.getElementById('slider-dots');

  if (!prevBtn || !nextBtn || !dotsContainer) return;

  const showSlide = (index) => {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dotsList = document.querySelectorAll('.slider-dot');
    
    if (index >= TESTIMONIALS.length) index = 0;
    if (index < 0) index = TESTIMONIALS.length - 1;
    
    currentTestimonialSlide = index;

    slides.forEach((slide, idx) => {
      if (idx === currentTestimonialSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    dotsList.forEach((dot, idx) => {
      if (idx === currentTestimonialSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  };

  const nextSlide = () => showSlide(currentTestimonialSlide + 1);
  const prevSlide = () => showSlide(currentTestimonialSlide - 1);

  testimonialInterval = setInterval(nextSlide, 6000);

  const resetAutoplay = () => {
    clearInterval(testimonialInterval);
    testimonialInterval = setInterval(nextSlide, 6000);
  };

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoplay();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoplay();
  });

  dotsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('slider-dot')) {
      showSlide(parseInt(e.target.dataset.index));
      resetAutoplay();
    }
  });
}

// ==========================================
// TOASTS
// ==========================================

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast-message ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✓' : 'ℹ'}</span>
    <p>${message}</p>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slide-in-right 0.3s ease reverse forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ==========================================
// CONCERNS FINDER RENDERING
// ==========================================

function renderConcernRecommendation(key) {
  const container = document.getElementById('concern-recommendation');
  if (!container) return;
  
  const item = CONCERNS[key];
  if (!item) return;
  
  container.innerHTML = `
    <span class="badge badge-accent" style="align-self: flex-start;">${item.badge} Solution</span>
    <h3 class="crp-title">Recommended Treatment</h3>
    <p class="crp-solution">${item.solution}</p>
    <p class="crp-details">${item.desc}</p>
    <div class="crp-price-row">
      <span class="crp-price-label">Estimated Treatment Price:</span>
      <span class="crp-price">₹${item.price}</span>
    </div>
    <button type="button" class="btn btn-primary crp-book-btn" data-treatment="${item.title}">Book This Treatment Slot</button>
  `;
}

// ==========================================
// EVENT LISTENERS
// ==========================================

function setupEventListeners() {
  // Sticky header scroll behavior
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Announcement Bar dismiss handler
  const abClose = document.getElementById('ab-close');
  const abBar = document.getElementById('announcement-bar');
  if (abClose && abBar) {
    abClose.addEventListener('click', () => {
      abBar.style.display = 'none';
    });
  }

  // Mobile Navigation Toggle with Icon Animation
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isActive = navMenu.classList.toggle('active');
      const iconSvg = mobileToggle.querySelector('svg');
      if (iconSvg) {
        if (isActive) {
          iconSvg.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>`;
        } else {
          iconSvg.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>`;
        }
      }
    });
    
    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const iconSvg = mobileToggle.querySelector('svg');
        if (iconSvg) {
          iconSvg.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>`;
        }
      });
    });
  }

  // Clinic consultation booking modal triggers
  const openConsultBtn = document.getElementById('consult-trigger-nav');
  const cardConsultBtn = document.getElementById('card-consult');
  const closeConsultBtn = document.getElementById('consult-close');
  const consultSuccessClose = document.getElementById('consult-success-close-btn');

  const openConsultationWizard = (preselectedSpecialty = '') => {
    if (preselectedSpecialty) {
      document.getElementById('consult-specialty').value = preselectedSpecialty;
    }
    resetConsultStepper();
    document.getElementById('consult-modal').classList.add('active');
  };

  const openConsultBtnMobile = document.getElementById('consult-trigger-mobile');

  if (openConsultBtn) openConsultBtn.addEventListener('click', () => openConsultationWizard());
  if (openConsultBtnMobile) openConsultBtnMobile.addEventListener('click', (e) => { e.preventDefault(); openConsultationWizard(); });
  if (cardConsultBtn) cardConsultBtn.addEventListener('click', () => openConsultationWizard());
  if (closeConsultBtn) closeConsultBtn.addEventListener('click', () => document.getElementById('consult-modal').classList.remove('active'));
  if (consultSuccessClose) consultSuccessClose.addEventListener('click', () => document.getElementById('consult-modal').classList.remove('active'));

  // Specialty grid items redirect to booking wizard
  const specialtyGrid = document.getElementById('specialty-grid');
  if (specialtyGrid) {
    specialtyGrid.addEventListener('click', (e) => {
      const item = e.target.closest('.specialty-item');
      if (item) {
        openConsultationWizard(item.dataset.specialty);
      }
    });
  }

  document.querySelectorAll('.btn-consult-trigger').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openConsultationWizard(el.textContent.trim());
    });
  });

  // Diagnostics Quick card links
  const cardDiagnostics = document.getElementById('card-diagnostics');
  if (cardDiagnostics) {
    cardDiagnostics.addEventListener('click', () => {
      document.getElementById('packages').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Individual test filter pills
  document.querySelectorAll('.it-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.it-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderIndividualTests(btn.dataset.category);
    });
  });

  // Delegated booking triggers for packages and tests
  document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-pkg-cart-btn')) {
      const pkgId = e.target.dataset.id;
      const pkg = DIAGNOSTIC_PACKAGES.find(p => p.id === pkgId);
      openDiagnosticsBooking(pkg);
    }
    if (e.target.classList.contains('add-test-cart-btn')) {
      const testId = e.target.dataset.id;
      const test = INDIVIDUAL_TESTS.find(t => t.id === testId);
      openDiagnosticsBooking(test);
    }
  });

  // Patient Portal actions
  const portalTrigger = document.getElementById('portal-trigger');
  const footerPortalBtn = document.getElementById('footer-portal-btn');
  const logoutPortalBtn = document.getElementById('portal-logout-btn');
  const heroPortalBtn = document.getElementById('hero-portal-trigger');
  
  const togglePortalModal = () => {
    document.getElementById('portal-modal').classList.toggle('active');
    renderPortalDashboard();
  };
  
  const portalTriggerMobile = document.getElementById('portal-trigger-mobile');

  if (portalTrigger) portalTrigger.addEventListener('click', togglePortalModal);
  if (portalTriggerMobile) portalTriggerMobile.addEventListener('click', (e) => { e.preventDefault(); togglePortalModal(); });
  if (footerPortalBtn) footerPortalBtn.addEventListener('click', (e) => { e.preventDefault(); togglePortalModal(); });
  if (logoutPortalBtn) logoutPortalBtn.addEventListener('click', togglePortalModal);
  if (heroPortalBtn) heroPortalBtn.addEventListener('click', togglePortalModal);

  // Patient Portal menu triggers
  document.querySelectorAll('.ps-menu-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.ps-menu-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const targetView = btn.dataset.target;
      document.querySelectorAll('.portal-view-pane').forEach(pane => {
        pane.classList.remove('active');
      });
      document.getElementById(targetView).classList.add('active');
    });
  });

  // Portal inner booking flows
  document.getElementById('portal-book-consult-btn').addEventListener('click', () => {
    document.getElementById('portal-modal').classList.remove('active');
    openConsultationWizard();
  });

  document.getElementById('portal-view-tests-btn').addEventListener('click', () => {
    document.getElementById('portal-modal').classList.remove('active');
    document.getElementById('packages').scrollIntoView({ behavior: 'smooth' });
  });

  // Prescription Upload events
  const uploadTriggerCard = document.getElementById('card-prescription');
  const uploadCloseBtn = document.getElementById('prescription-close-btn');
  const uploadCancelBtn = document.getElementById('prescription-cancel-btn');
  const uploadConfirmBtn = document.getElementById('prescription-confirm-btn');
  const dropZone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('file-input');

  if (uploadTriggerCard) {
    uploadTriggerCard.addEventListener('click', () => {
      document.getElementById('prescription-modal').classList.add('active');
      resetPrescriptionUpload();
    });
  }
  
  const closePrescriptionModal = () => {
    document.getElementById('prescription-modal').classList.remove('active');
  };
  
  if (uploadCloseBtn) uploadCloseBtn.addEventListener('click', closePrescriptionModal);
  if (uploadCancelBtn) uploadCancelBtn.addEventListener('click', closePrescriptionModal);

  if (dropZone) {
    dropZone.addEventListener('click', () => fileInput.click());
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.style.borderColor = 'var(--primary)';
      dropZone.style.backgroundColor = 'var(--primary-bg)';
    });
    dropZone.addEventListener('dragleave', () => {
      dropZone.style.borderColor = 'var(--border-color)';
      dropZone.style.backgroundColor = 'transparent';
    });
    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      if (files.length) handlePrescriptionFile(files[0]);
    });
    
    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length) handlePrescriptionFile(e.target.files[0]);
    });
  }

  if (uploadConfirmBtn) {
    uploadConfirmBtn.addEventListener('click', () => {
      const cbc = INDIVIDUAL_TESTS.find(t => t.id === 'test-cbc');
      closePrescriptionModal();
      
      if (cbc) {
        showToast('X-Ray analyzed! Preselected recommended procedure: Scaling & Polish.', 'success');
        openDiagnosticsBooking(cbc);
      } else {
        showToast('X-Ray analyzed successfully!', 'success');
      }
    });
  }

  // Concerns Finder Card Clicks (NEW)
  const concernCards = document.querySelectorAll('.concern-card');
  concernCards.forEach(card => {
    card.addEventListener('click', () => {
      concernCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      renderConcernRecommendation(card.dataset.concern);
    });
  });

  // Recommended Treatment Booking handler (NEW)
  document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('crp-book-btn')) {
      const treatmentName = e.target.dataset.treatment;
      const procedure = INDIVIDUAL_TESTS.find(t => t.name === treatmentName);
      if (procedure) {
        openDiagnosticsBooking(procedure);
      }
    }
  });

  // Smile Gallery Tab toggler (NEW)
  const galleryTabs = document.querySelectorAll('.gallery-tab-btn');
  galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      galleryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const paneId = `pane-${tab.dataset.pane}`;
      document.querySelectorAll('.gallery-transformation-pane').forEach(pane => {
        pane.classList.remove('active');
      });
      document.getElementById(paneId).classList.add('active');
    });
  });

  // Consultation scheduler multi-step stepper
  setupConsultFormStepper();

  // FAQ Accordions
  setupFaqAccordion();
}

// ==========================================
// DIAGNOSTIC BOOKING HELPERS
// ==========================================

function openDiagnosticsBooking(item) {
  consultData.visitType = 'diagnostics';
  consultData.specialty = 'General Dentistry'; // default
  
  // Select diagnostics card in modal
  const modal = document.getElementById('consult-modal');
  modal.querySelectorAll('[data-group="visit-type"]').forEach(c => {
    if (c.dataset.value === 'diagnostics') c.classList.add('active');
    else c.classList.remove('active');
  });
  
  // Fill test/package name
  const diagnosticsField = document.getElementById('diagnostics-field');
  const specialtyField = document.getElementById('specialty-field');
  const consultTest = document.getElementById('consult-test');
  
  if (diagnosticsField) diagnosticsField.style.display = 'block';
  if (specialtyField) specialtyField.style.display = 'none';
  if (consultTest) consultTest.value = item.name;
  
  // Update slot dropdown options
  updateSlotOptions('diagnostics');
  
  // Reset wizard steps
  consultStep = 1;
  goToStep(1);
  
  // Show modal
  modal.classList.add('active');
}

function updateSlotOptions(visitType) {
  const slotSelect = document.getElementById('consult-slot');
  if (!slotSelect) return;
  
  if (visitType === 'diagnostics') {
    slotSelect.innerHTML = `
      <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM (Morning slots)</option>
      <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM</option>
      <option value="03:00 PM - 05:00 PM">03:00 PM - 05:00 PM (Afternoon slots)</option>
    `;
  } else {
    slotSelect.innerHTML = `
      <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM (Morning slots)</option>
      <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
      <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM (Afternoon slots)</option>
      <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
      <option value="06:00 PM - 07:00 PM">06:00 PM - 07:00 PM (Evening slots)</option>
    `;
  }
}

// ==========================================
// CONSULTATIONS STEPPER FORM
// ==========================================

let consultStep = 1;
const consultData = {
  visitType: 'clinic',
  specialty: 'General Dentistry',
  date: '',
  slot: '',
  name: '',
  age: '',
  gender: 'Male',
  phone: ''
};

function setupConsultFormStepper() {
  const modal = document.getElementById('consult-modal');
  
  modal.querySelectorAll('[data-group="visit-type"]').forEach(card => {
    card.addEventListener('click', () => {
      modal.querySelectorAll('[data-group="visit-type"]').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      consultData.visitType = card.dataset.value;
      
      const diagnosticsField = document.getElementById('diagnostics-field');
      const specialtyField = document.getElementById('specialty-field');
      
      if (consultData.visitType === 'diagnostics') {
        if (diagnosticsField) diagnosticsField.style.display = 'block';
        if (specialtyField) specialtyField.style.display = 'none';
        
        // If consult-test is empty, prefill with Smile Design Package
        const consultTest = document.getElementById('consult-test');
        if (consultTest && !consultTest.value) {
          consultTest.value = 'Kavita Smile Design Package';
        }
      } else {
        if (diagnosticsField) diagnosticsField.style.display = 'none';
        if (specialtyField) specialtyField.style.display = 'block';
      }
      
      updateSlotOptions(consultData.visitType);
    });
  });

  modal.querySelectorAll('.next-step-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (validateStep(consultStep)) {
        goToStep(consultStep + 1);
      }
    });
  });

  modal.querySelectorAll('.prev-step-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      goToStep(consultStep - 1);
    });
  });
}

function validateStep(step) {
  if (step === 1) {
    if (consultData.visitType === 'diagnostics') {
      consultData.specialty = document.getElementById('consult-test').value || 'Kavita Smile Design Package';
    } else {
      consultData.specialty = document.getElementById('consult-specialty').value;
    }
    return true;
  }
  if (step === 2) {
    const date = document.getElementById('consult-date').value;
    const slot = document.getElementById('consult-slot').value;
    if (!date) {
      showToast('Please select a slot date!', 'info');
      return false;
    }
    consultData.date = date;
    consultData.slot = slot;
    return true;
  }
  if (step === 3) {
    const name = document.getElementById('patient-name').value.trim();
    const age = document.getElementById('patient-age').value;
    const phone = document.getElementById('patient-phone').value.trim();
    const gender = document.getElementById('patient-gender').value;

    if (!name || !age || !phone) {
      showToast('Please fill out all patient information!', 'info');
      return false;
    }
    consultData.name = name;
    consultData.age = age;
    consultData.phone = phone;
    consultData.gender = gender;
    
    processConsultBooking();
    return true;
  }
  return true;
}

function goToStep(stepNumber) {
  consultStep = stepNumber;
  
  document.querySelectorAll('.step-pane').forEach((pane, idx) => {
    if (idx + 1 === stepNumber) {
      pane.classList.add('active');
    } else {
      pane.classList.remove('active');
    }
  });

  document.querySelectorAll('.step-node').forEach((node, idx) => {
    if (idx + 1 <= stepNumber) {
      node.classList.add('active');
    } else {
      node.classList.remove('active');
    }
  });
}

function resetConsultStepper() {
  consultStep = 1;
  goToStep(1);
  document.getElementById('consult-form').reset();
  
  const modal = document.getElementById('consult-modal');
  modal.querySelectorAll('[data-group="visit-type"]').forEach((c, idx) => {
    if (idx === 0) c.classList.add('active');
    else c.classList.remove('active');
  });
  consultData.visitType = 'clinic';
  
  const diagnosticsField = document.getElementById('diagnostics-field');
  const specialtyField = document.getElementById('specialty-field');
  if (diagnosticsField) diagnosticsField.style.display = 'none';
  if (specialtyField) specialtyField.style.display = 'block';
  
  updateSlotOptions('clinic');
  
  const dateInput = document.getElementById('consult-date');
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  dateInput.value = tomorrow.toISOString().split('T')[0];
}

function processConsultBooking() {
  const bookingId = (consultData.visitType === 'diagnostics' ? 'DENT-' : 'VAIB-') + Math.floor(1000 + Math.random() * 9000);
  
  let bookingPrice = 500;
  let displayType = 'Noida Clinic Visit';
  
  if (consultData.visitType === 'video') {
    displayType = 'Video Consultation';
  } else if (consultData.visitType === 'diagnostics') {
    displayType = 'Dental Procedure Visit';
    
    // Find price of package or test
    const pkg = DIAGNOSTIC_PACKAGES.find(p => p.name === consultData.specialty);
    const test = INDIVIDUAL_TESTS.find(t => t.name === consultData.specialty);
    bookingPrice = pkg ? pkg.price : (test ? test.price : 799);
  }
  
  const newBooking = {
    id: bookingId,
    type: consultData.visitType === 'diagnostics' ? 'diagnostics' : 'consultation',
    specialty: consultData.specialty,
    tests: consultData.visitType === 'diagnostics' ? [consultData.specialty] : [],
    visitType: displayType,
    date: consultData.date,
    time: consultData.slot,
    price: bookingPrice,
    status: consultData.visitType === 'diagnostics' ? 'Scheduled' : 'Confirmed'
  };
  
  bookings.push(newBooking);
  
  document.getElementById('confirm-id').textContent = bookingId;
  
  const specialtyLabel = document.getElementById('confirm-specialty').previousElementSibling;
  if (specialtyLabel) {
    specialtyLabel.textContent = consultData.visitType === 'diagnostics' ? 'Selected Procedure:' : 'Department:';
  }
  document.getElementById('confirm-specialty').textContent = consultData.specialty;
  document.getElementById('confirm-type').textContent = displayType;
  document.getElementById('confirm-slot').textContent = `${consultData.date} at ${consultData.slot}`;
  
  const feeLabel = document.getElementById('confirm-fee-label');
  const feeValue = document.getElementById('confirm-fee');
  if (feeLabel && feeValue) {
    feeLabel.textContent = consultData.visitType === 'diagnostics' ? 'Procedure Fee:' : 'Consultation Fee:';
    feeValue.textContent = `₹${bookingPrice}`;
  }
  
  showToast(`${displayType} booking confirmed! Booking ID: ${bookingId}`, 'success');
}

// ==========================================
// PATIENT PORTAL DRAWER
// ==========================================

function renderPortalDashboard() {
  renderPortalBookings();
  renderPortalReports();
  renderPortalPrescriptions();
}

function renderPortalBookings() {
  const container = document.getElementById('portal-bookings-container');
  if (!container) return;
  
  if (bookings.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted); font-size:0.9rem;">No active appointments or dental procedures scheduled.</p>`;
    return;
  }
  
  container.innerHTML = bookings.map(b => {
    if (b.type === 'consultation') {
      return `
        <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 20px; margin-bottom: 16px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <span class="badge badge-primary">🏥 Noida Clinic Slot</span>
            <strong style="font-size:0.9rem; color:var(--primary);">${b.status}</strong>
          </div>
          <h4 style="font-size:1.1rem; margin-bottom:4px;">${b.specialty}</h4>
          <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">${b.visitType} | ID: ${b.id}</p>
          <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-color); padding-top:14px; font-size:0.85rem;">
            <span>📅 ${b.date} | ⏰ ${b.time}</span>
            <button class="btn btn-secondary" onclick="cancelBooking('${b.id}')" style="padding:4px 12px; font-size:0.75rem; color:var(--accent); border-color:var(--border-color);">Cancel Visit</button>
          </div>
        </div>
      `;
    } else {
      return `
        <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 20px; margin-bottom: 16px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <span class="badge badge-secondary">🦷 Clinic Procedure</span>
            <strong style="font-size:0.9rem; color:var(--primary);">${b.status}</strong>
          </div>
          <h4 style="font-size:1.1rem; margin-bottom:4px;">${b.tests.join(', ')}</h4>
          <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">Clinic Procedure Visit | ID: ${b.id}</p>
          <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-color); padding-top:14px; font-size:0.85rem;">
            <span>📅 ${b.date} | ⏰ ${b.time}</span>
            <button class="btn btn-secondary" onclick="cancelBooking('${b.id}')" style="padding:4px 12px; font-size:0.75rem; color:var(--accent); border-color:var(--border-color);">Cancel Visit</button>
          </div>
        </div>
      `;
    }
  }).join('');
}

function cancelBooking(id) {
  bookings = bookings.filter(b => b.id !== id);
  renderPortalBookings();
  showToast('Appointment successfully cancelled.', 'info');
}
window.cancelBooking = cancelBooking;

function renderPortalReports() {
  const container = document.getElementById('portal-reports-container');
  if (!container) return;
  
  container.innerHTML = MOCK_REPORTS.map(rep => `
    <div class="report-item-card" id="${rep.id}">
      <div class="ri-meta">
        <div>
          <span class="ri-name">${rep.testName}</span>
          <p class="ri-date">Collected on: ${rep.date}</p>
        </div>
        <button class="btn btn-secondary" onclick="showToast('Downloading smart report PDF...', 'info')" style="padding: 6px 12px; font-size:0.8rem;">
          📥 PDF Smart Report
        </button>
      </div>
      
      <div class="smart-report-data">
        <div class="srd-row srd-header">
          <span>Biomarker Analyzed</span>
          <span>Result Value</span>
          <span>Reference Range</span>
          <span style="text-align:right;">Status</span>
        </div>
        ${rep.parameters.map(param => `
          <div class="srd-row" style="margin-top:12px;">
            <span style="font-weight:600;">${param.name}</span>
            <strong style="color: ${param.isNormal ? 'var(--primary)' : 'var(--accent)'}; font-size: 1.05rem;">${param.value} ${param.unit}</strong>
            <span style="color: var(--text-muted);">${param.range} ${param.unit}</span>
            <span style="text-align:right; font-weight:700; color: ${param.isNormal ? 'var(--primary)' : 'var(--accent)'};">${param.status}</span>
          </div>
          <!-- Smart Scale Bar -->
          <div style="margin-top: 8px;">
            <div class="srd-scale-bar">
              <div class="scale-marker ${param.isNormal ? 'scale-normal' : 'scale-high'}" style="left: ${param.percent}%;"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderPortalPrescriptions() {
  const container = document.getElementById('portal-prescriptions-container');
  if (!container) return;
  
  container.innerHTML = MOCK_PRESCRIPTIONS.map(rx => `
    <div class="report-item-card" id="${rx.id}">
      <div class="ri-meta">
        <div>
          <span class="ri-name">Rx prescription - ${rx.doctor}</span>
          <p class="ri-date">Consult Date: ${rx.date}</p>
        </div>
        <button class="btn btn-secondary" onclick="showToast('Downloading prescription PDF...', 'info')" style="padding: 6px 12px; font-size:0.8rem;">
          📥 Download
        </button>
      </div>
      
      <div style="margin-top: 10px;">
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;"><strong>Clinical Diagnosis:</strong> ${rx.diagnosis}</p>
        <h4 style="font-size:0.9rem; margin-bottom:8px; border-bottom:1px solid var(--border-color); padding-bottom:4px;">Prescribed Medication</h4>
        <ul style="list-style:none; display:flex; flex-direction:column; gap:8px;">
          ${rx.medicines.map(med => `
            <li style="font-size:0.85rem; display:flex; justify-content:space-between;">
              <span>💊 <strong>${med.name}</strong> - ${med.dosage}</span>
              <span style="color:var(--text-muted);">${med.duration}</span>
            </li>
          `).join('')}
        </ul>
        
        <div style="margin-top:16px; background-color:var(--primary-bg); padding:10px 14px; border-radius:var(--radius-sm); display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:0.8rem; font-weight:600; color:var(--primary);">Recommended Diagnostics:</span>
          <span style="font-size:0.8rem; font-weight:600; color:var(--secondary);">${rx.testsRecommended.join(', ')}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ==========================================
// FAQ ACCORDIONS
// ==========================================

function setupFaqAccordion() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// ==========================================
// X-RAY PARSER
// ==========================================

let uploadedFile = null;

function handlePrescriptionFile(file) {
  uploadedFile = file;
  const dropZone = document.getElementById('drop-zone');
  
  dropZone.innerHTML = `
    <span style="font-size: 3rem; display: block; margin-bottom: 12px; color: var(--primary);">📄</span>
    <p style="font-weight: 600; margin-bottom: 6px; color: var(--text-main);">${file.name}</p>
    <p style="font-size:0.75rem; color: var(--text-muted);">${(file.size / (1024 * 1024)).toFixed(2)} MB - Scanned Document</p>
  `;
  
  document.getElementById('upload-status-box').style.display = 'block';
  const progress = document.getElementById('upload-progress-bar');
  progress.style.width = '0%';
  
  setTimeout(() => {
    progress.style.width = '100%';
    setTimeout(() => {
      document.getElementById('prescription-confirm-btn').disabled = false;
      showToast('X-Ray analysed successfully! Click Proceed to load recommendations.', 'success');
    }, 2000);
  }, 100);
}

function resetPrescriptionUpload() {
  uploadedFile = null;
  const dropZone = document.getElementById('drop-zone');
  dropZone.style.borderColor = 'var(--border-color)';
  dropZone.style.backgroundColor = 'transparent';
  dropZone.innerHTML = `
    <span style="font-size: 3rem; display: block; margin-bottom: 12px;">💀</span>
    <p style="font-weight: 600; margin-bottom: 6px;">Drag and drop X-Ray file here, or click to upload</p>
    <p style="font-size:0.75rem; color: var(--text-muted);">Supports JPG, PNG, PDF up to 8MB</p>
    <input type="file" id="file-input" style="display:none;">
  `;
  document.getElementById('upload-status-box').style.display = 'none';
  document.getElementById('prescription-confirm-btn').disabled = true;
  
  const fileInput = document.getElementById('file-input');
  dropZone.onclick = () => fileInput.click();
  fileInput.onchange = (e) => {
    if (e.target.files.length) handlePrescriptionFile(e.target.files[0]);
  };
}
