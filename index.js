// ==========================================
// MOCK DATABASE & DATA STORE
// ==========================================

const SPECIALTIES = [
  { id: 'gp', name: 'General Physician', icon: '🩺', desc: 'Primary care & common health consultations' },
  { id: 'cardio', name: 'Cardiology', icon: '❤️', desc: 'Heart health, chest pain, and blood pressure' },
  { id: 'peds', name: 'Pediatrics', icon: '👶', desc: 'Infant, child, and adolescent healthcare' },
  { id: 'derm', name: 'Dermatology', icon: '🧴', desc: 'Skin, hair, nails, and allergy treatments' },
  { id: 'gyn', name: 'Gynecology', icon: '🤰', desc: 'Women\'s health, pregnancy, and wellness checks' },
  { id: 'ortho', name: 'Orthopedics', icon: '🦴', desc: 'Bone, joint, muscle pain, and sports injuries' }
];

const DIAGNOSTIC_PACKAGES = [
  {
    id: 'pkg-basic',
    name: 'Swasthfit Basic Health Checkup',
    originalPrice: 2499,
    price: 999,
    savings: '60%',
    testCount: 31,
    desc: 'Covers essential parameters for vital organs screening.',
    inclusions: ['Complete Blood Count (CBC)', 'Fasting Blood Glucose', 'Urine Routine Analysis', 'Serum Cholesterol'],
    category: 'profile',
    badge: 'Popular',
    badgeClass: ''
  },
  {
    id: 'pkg-comprehensive',
    name: 'Swasthfit Complete Care Package',
    originalPrice: 4999,
    price: 1999,
    savings: '60%',
    testCount: 68,
    desc: 'Full body health scan monitoring major clinical functions.',
    inclusions: ['CBC (24 Parameters)', 'Lipid Profile (Heart)', 'Liver Function Test (11 Parameters)', 'Kidney Function Test (9 Parameters)', 'Thyroid Profile (T3, T4, TSH)'],
    category: 'profile',
    badge: 'Best Seller',
    badgeClass: 'best-seller'
  },
  {
    id: 'pkg-senior',
    name: 'Swasthfit Senior Citizen Profile',
    originalPrice: 6999,
    price: 2999,
    savings: '57%',
    testCount: 75,
    desc: 'Specially customized for elderly screening, includes vitamins.',
    inclusions: ['Complete Blood Count (CBC)', 'HbA1c & Fasting Glucose', 'Lipid Profile', 'Kidney & Liver panels', 'Vitamin D3 & B12 Levels', 'Calcium & Bone Health indicators'],
    category: 'profile',
    badge: 'Comprehensive',
    badgeClass: 'comprehensive'
  }
];

const INDIVIDUAL_TESTS = [
  { id: 'test-cbc', name: 'Complete Blood Count (CBC)', price: 299, desc: 'Evaluates overall health and detects wide range of disorders.', category: 'blood' },
  { id: 'test-glucose', name: 'Blood Glucose Fasting', price: 99, desc: 'Measures sugar level in blood after overnight fasting.', category: 'blood' },
  { id: 'test-thyroid', name: 'Thyroid Profile (T3, T4, TSH)', price: 499, desc: 'Assesses thyroid gland function and metabolic health.', category: 'profile' },
  { id: 'test-lipid', name: 'Lipid Profile', price: 450, desc: 'Measures cholesterol levels to evaluate cardiovascular risk.', category: 'profile' },
  { id: 'test-urine', name: 'Urine Routine & Microscopy', price: 199, desc: 'Checks for kidney health, urinary tract infections (UTI).', category: 'urine' },
  { id: 'test-vitd', name: 'Vitamin D (25-Hydroxy)', price: 999, desc: 'Measures Vitamin D concentration for bone & immunity health.', category: 'blood' },
  { id: 'test-lft', name: 'Liver Function Test (LFT)', price: 599, desc: 'Detects inflammation, infections, or diseases of the liver.', category: 'profile' },
  { id: 'test-kft', name: 'Kidney Function Test (KFT)', price: 599, desc: 'Assesses filtration function and waste elimination of kidneys.', category: 'profile' }
];

const MOCK_REPORTS = [
  {
    id: 'rep-sugar',
    testName: 'Fasting Blood Sugar',
    date: 'June 08, 2026',
    parameters: [
      { name: 'Blood Glucose (Fasting)', value: 94, unit: 'mg/dL', range: '70 - 100', status: 'Normal', percent: 60, isNormal: true }
    ]
  },
  {
    id: 'rep-lipid',
    testName: 'Lipid Profile',
    date: 'May 14, 2026',
    parameters: [
      { name: 'Total Cholesterol', value: 185, unit: 'mg/dL', range: '< 200', status: 'Normal', percent: 50, isNormal: true },
      { name: 'Triglycerides', value: 165, unit: 'mg/dL', range: '< 150', status: 'High', percent: 75, isNormal: false },
      { name: 'HDL Cholesterol (Good)', value: 48, unit: 'mg/dL', range: '> 40', status: 'Normal', percent: 65, isNormal: true }
    ]
  },
  {
    id: 'rep-thyroid',
    testName: 'Thyroid Panel (TSH)',
    date: 'April 22, 2026',
    parameters: [
      { name: 'Thyroid Stimulating Hormone (TSH)', value: 2.4, unit: 'µIU/mL', range: '0.4 - 4.5', status: 'Normal', percent: 45, isNormal: true }
    ]
  }
];

const MOCK_PRESCRIPTIONS = [
  {
    id: 'rx-2091',
    doctor: 'Dr. Vaibhav, MD',
    date: 'June 05, 2026',
    diagnosis: 'Mild Fatigue & Routine Examination',
    medicines: [
      { name: 'Tab. Neurobion Forte (Multivitamin)', dosage: 'Once daily after breakfast', duration: '30 Days' },
      { name: 'Cap. Calcirol 60K (Vitamin D3)', dosage: 'Once weekly with milk', duration: '4 Weeks' }
    ],
    testsRecommended: ['Complete Blood Count (CBC)', 'Vitamin D (25-Hydroxy)']
  }
];

const TESTIMONIALS = [
  {
    name: "Ayush Sharma",
    specialty: "Visited Noida Clinic for Hypertension",
    stars: 5,
    avatar: "AS",
    quote: "Dr. Vaibhav explained my high blood pressure reasons very logically and put me on a highly effective, minimal dosage treatment plan. He is extremely reassuring and experienced."
  },
  {
    name: "Sunita Rao",
    specialty: "Home Sample Diagnostics Customer",
    stars: 5,
    avatar: "SR",
    quote: "Exceptional home lab service. The phlebotomist arrived exactly at 7:30 AM, collected blood samples completely painlessly, and reports were ready to download in my portal by 2:00 PM!"
  },
  {
    name: "Vikram Malhotra",
    specialty: "Telehealth Consultation Patient",
    stars: 5,
    avatar: "VM",
    quote: "I was skeptical about consulting online, but Dr. Vaibhav spent 20 minutes listening patiently to my thyroid concerns and guiding me. The Noida clinic staff also coordinated follow-ups beautifully."
  }
];

// Active State Storage
let cart = [];
let bookings = [
  { id: 'VAIB-9921', type: 'consultation', specialty: 'General Physician', visitType: 'Noida Clinic Visit', date: '2026-06-18', time: '11:00 AM - 12:00 PM', price: 500, status: 'Confirmed' },
  { id: 'LAB-4819', type: 'diagnostics', tests: ['Swasthfit Complete Care Package'], date: '2026-06-19', time: '08:00 AM', price: 1999, status: 'Phlebotomist Assigned' }
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
  updateCartBadge();
  
  // Set date limits
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];
  
  const consultDateInput = document.getElementById('consult-date');
  if (consultDateInput) consultDateInput.min = tomorrowStr;
  
  const cartDateInput = document.getElementById('cart-date');
  if (cartDateInput) cartDateInput.min = tomorrowStr;
});

// Render package grids with improved pricing indicators
function renderWellnessPackages() {
  const container = document.getElementById('packages-grid');
  if (!container) return;
  
  container.innerHTML = DIAGNOSTIC_PACKAGES.map(pkg => `
    <div class="package-card" id="${pkg.id}">
      <div class="package-badge-row">
        ${pkg.badge ? `<span class="package-pill-tag ${pkg.badgeClass || ''}">${pkg.badge}</span>` : ''}
        <span class="package-certified-tag">🔬 NABL Certified</span>
      </div>
      <div class="pkg-icon">🧬</div>
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
          + ${pkg.testCount - pkg.inclusions.length} more vital parameters
        </li>
      </ul>
      
      <div class="pkg-price-row">
        <div class="pkg-price-values">
          <span class="pkg-original-price">₹${pkg.originalPrice}</span>
          <span class="pkg-price-current">₹${pkg.price}</span>
          <span class="pkg-savings-badge">Save ${pkg.savings}</span>
        </div>
        <div class="pkg-bottom-row" style="margin-top: 6px;">
          <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 500;">Free Home Sample Visit</span>
          <button class="btn btn-primary add-pkg-cart-btn" data-id="${pkg.id}" style="padding: 8px 18px; font-size: 0.85rem;">Add to Cart</button>
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
        <button class="btn btn-secondary add-test-cart-btn" data-id="${t.id}" style="padding: 6px 14px; font-size:0.8rem;">+ Add</button>
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

  // Render Hero slider dots dynamically
  dotsContainer.innerHTML = Array.from(slides).map((_, idx) => `
    <button class="hero-dot ${idx === 0 ? 'active' : ''}" data-slide="${idx}" aria-label="Slide ${idx+1}"></button>
  `).join('');

  let currentHeroSlide = 0;
  let heroInterval = setInterval(nextSlide, 7000); // Auto-advance every 7 seconds

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

  // Noida Clinic Slide book triggers
  document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('hero-book-clinic-trigger')) {
      document.getElementById('consult-specialty').value = 'General Physician';
      resetConsultStepper();
      document.getElementById('consult-modal').classList.add('active');
    }
    if (e.target.classList.contains('hero-book-video-trigger')) {
      document.getElementById('consult-specialty').value = 'General Physician';
      resetConsultStepper();
      
      // Select video option card in Step 1
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
// TOASTS & BADGES
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

function updateCartBadge() {
  const badge = document.getElementById('cart-count');
  const titleCount = document.getElementById('cart-title-count');
  
  if (badge) badge.textContent = cart.length;
  if (titleCount) titleCount.textContent = `${cart.length} items`;
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

  // Dark / Light Theme
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      showToast('Theme switched successfully!', 'info');
    });
  }

  // Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
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

  if (openConsultBtn) openConsultBtn.addEventListener('click', () => openConsultationWizard());
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

  // Cart Drawer show/hide
  const cartTrigger = document.getElementById('cart-trigger');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartOverlay = document.getElementById('cart-overlay');
  
  const toggleCart = () => {
    document.getElementById('cart-drawer').classList.toggle('active');
    document.getElementById('cart-overlay').classList.toggle('active');
    renderCart();
  };
  
  if (cartTrigger) cartTrigger.addEventListener('click', toggleCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', toggleCart);
  if (cartOverlay) cartOverlay.addEventListener('click', toggleCart);

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

  // Delegated additions to cart
  document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-pkg-cart-btn')) {
      const pkgId = e.target.dataset.id;
      const pkg = DIAGNOSTIC_PACKAGES.find(p => p.id === pkgId);
      addItemToCart(pkg);
    }
    if (e.target.classList.contains('add-test-cart-btn')) {
      const testId = e.target.dataset.id;
      const test = INDIVIDUAL_TESTS.find(t => t.id === testId);
      addItemToCart(test);
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
  
  if (portalTrigger) portalTrigger.addEventListener('click', togglePortalModal);
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
      const vitd = INDIVIDUAL_TESTS.find(t => t.id === 'test-vitd');
      if (cbc) addItemToCart(cbc);
      if (vitd) addItemToCart(vitd);
      
      closePrescriptionModal();
      showToast('Prescription analysed! Recommended tests (CBC, Vitamin D) added to cart.', 'success');
      toggleCart();
    });
  }

  // Consultation scheduler multi-step stepper
  setupConsultFormStepper();

  // Search input autocomplete dropdown
  setupAutocompleteSearch();

  // FAQ Accordions
  setupFaqAccordion();
}

// ==========================================
// SEARCH & AUTOCOMPLETE DROP
// ==========================================

function setupAutocompleteSearch() {
  const input = document.getElementById('search-input');
  const dropdown = document.getElementById('search-dropdown');
  const searchBtn = document.getElementById('search-btn');

  if (!input || !dropdown) return;

  const performSearch = () => {
    const query = input.value.trim().toLowerCase();
    if (!query) {
      dropdown.style.display = 'none';
      return;
    }

    const pkgResults = DIAGNOSTIC_PACKAGES.filter(p => p.name.toLowerCase().includes(query) || p.inclusions.some(inc => inc.toLowerCase().includes(query)));
    const testResults = INDIVIDUAL_TESTS.filter(t => t.name.toLowerCase().includes(query) || t.desc.toLowerCase().includes(query));
    const specResults = SPECIALTIES.filter(s => s.name.toLowerCase().includes(query));

    if (pkgResults.length === 0 && testResults.length === 0 && specResults.length === 0) {
      dropdown.innerHTML = `<div style="padding: 16px 20px; font-size: 0.95rem; color: var(--text-muted);">No matching clinical items found for "${input.value}"</div>`;
      dropdown.style.display = 'block';
      return;
    }

    let html = '';
    
    if (specResults.length > 0) {
      html += `<div style="padding: 8px 20px 4px 20px; font-size: 0.75rem; font-weight:700; color: var(--primary); text-transform:uppercase;">Clinic Specialties</div>`;
      specResults.forEach(s => {
        html += `
          <div class="search-result-item" data-type="specialty" data-name="${s.name}">
            <span class="result-name">${s.icon} ${s.name}</span>
            <span class="result-type">Book Slot</span>
          </div>
        `;
      });
    }

    if (pkgResults.length > 0) {
      html += `<div style="padding: 8px 20px 4px 20px; font-size: 0.75rem; font-weight:700; color: var(--primary); text-transform:uppercase;">Wellness Packages</div>`;
      pkgResults.forEach(p => {
        html += `
          <div class="search-result-item" data-type="package" data-id="${p.id}">
            <span class="result-name">🧬 ${p.name} (₹${p.price})</span>
            <span class="result-type">Add to Cart</span>
          </div>
        `;
      });
    }

    if (testResults.length > 0) {
      html += `<div style="padding: 8px 20px 4px 20px; font-size: 0.75rem; font-weight:700; color: var(--primary); text-transform:uppercase;">Individual Tests</div>`;
      testResults.forEach(t => {
        html += `
          <div class="search-result-item" data-type="test" data-id="${t.id}">
            <span class="result-name">🧪 ${t.name} (₹${t.price})</span>
            <span class="result-type">Add to Cart</span>
          </div>
        `;
      });
    }

    dropdown.innerHTML = html;
    dropdown.style.display = 'block';
  };

  input.addEventListener('input', performSearch);
  input.addEventListener('focus', performSearch);
  if (searchBtn) searchBtn.addEventListener('click', performSearch);

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-wrapper')) {
      dropdown.style.display = 'none';
    }
  });

  dropdown.addEventListener('click', (e) => {
    const item = e.target.closest('.search-result-item');
    if (!item) return;

    const type = item.dataset.type;
    if (type === 'specialty') {
      const name = item.dataset.name;
      dropdown.style.display = 'none';
      input.value = '';
      document.getElementById('consult-specialty').value = name;
      document.getElementById('consult-modal').classList.add('active');
    } else if (type === 'package') {
      const id = item.dataset.id;
      const pkg = DIAGNOSTIC_PACKAGES.find(p => p.id === id);
      addItemToCart(pkg);
      dropdown.style.display = 'none';
      input.value = '';
    } else if (type === 'test') {
      const id = item.dataset.id;
      const test = INDIVIDUAL_TESTS.find(t => t.id === id);
      addItemToCart(test);
      dropdown.style.display = 'none';
      input.value = '';
    }
  });

  document.querySelectorAll('.tag-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      input.value = btn.dataset.search;
      performSearch();
    });
  });
}

// ==========================================
// CART CALCULATORS
// ==========================================

function addItemToCart(item) {
  const exists = cart.some(cartItem => cartItem.id === item.id);
  if (exists) {
    showToast(`"${item.name}" is already in your diagnostics cart!`, 'info');
    return;
  }
  
  cart.push(item);
  updateCartBadge();
  showToast(`"${item.name}" added to diagnostics cart!`, 'success');
}

function removeItemFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartBadge();
  renderCart();
  showToast('Item removed from cart.', 'info');
}

function renderCart() {
  const list = document.getElementById('cart-items-list');
  const checkoutFooter = document.getElementById('cart-has-items-box');
  
  if (cart.length === 0) {
    list.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); margin-top: 40px;" id="empty-cart-msg">
        <span style="font-size: 3rem; display: block; margin-bottom: 12px;">🛒</span>
        Your cart is empty. Search and add diagnostic tests or packages.
      </div>
    `;
    checkoutFooter.style.display = 'none';
    return;
  }
  
  checkoutFooter.style.display = 'block';
  
  list.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="ci-info">
        <h4>${item.name}</h4>
        <span>${item.testCount ? `${item.testCount} parameters` : 'Individual lab analysis'}</span>
      </div>
      <div class="ci-actions">
        <strong style="font-size: 1rem; color:var(--text-main);">₹${item.price}</strong>
        <button class="ci-remove-btn" onclick="removeItemFromCart('${item.id}')" aria-label="Remove item">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
        </button>
      </div>
    </div>
  `).join('');
  
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById('cart-subtotal').textContent = `₹${subtotal}`;
  document.getElementById('cart-total').textContent = `₹${subtotal}`;
  
  const dateInput = document.getElementById('cart-date');
  if (dateInput && !dateInput.value) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split('T')[0];
  }
  
  const checkoutBtn = document.getElementById('cart-checkout-btn');
  checkoutBtn.onclick = () => {
    const address = document.getElementById('cart-address').value.trim();
    const collectionType = document.getElementById('cart-collection-type').value;
    const date = dateInput.value;
    const time = document.getElementById('cart-time').value;
    
    if (collectionType === 'home' && !address) {
      showToast('Please enter your sample collection address!', 'info');
      return;
    }
    
    const bookingId = `LAB-${Math.floor(1000 + Math.random() * 9000)}`;
    const testNames = cart.map(item => item.name);
    const totalPrice = subtotal;
    
    const newBooking = {
      id: bookingId,
      type: 'diagnostics',
      tests: testNames,
      date: date,
      time: time,
      price: totalPrice,
      status: collectionType === 'home' ? 'Phlebotomist Assigned' : 'Walk-in Pending'
    };
    
    bookings.push(newBooking);
    cart = [];
    updateCartBadge();
    
    document.getElementById('cart-drawer').classList.remove('active');
    document.getElementById('cart-overlay').classList.remove('active');
    
    showToast(`Order Placed! Check details under your Patient Portal. Booking ID: ${bookingId}`, 'success');
    
    setTimeout(() => {
      document.getElementById('portal-modal').classList.add('active');
      document.querySelectorAll('.ps-menu-btn').forEach(b => b.classList.remove('active'));
      document.querySelector('[data-target="portal-bookings"]').classList.add('active');
      document.querySelectorAll('.portal-view-pane').forEach(p => p.classList.remove('active'));
      document.getElementById('portal-bookings').classList.add('active');
      renderPortalDashboard();
    }, 1000);
  };
}

window.removeItemFromCart = removeItemFromCart;

// ==========================================
// CONSULTATIONS STEPPER FORM
// ==========================================

let consultStep = 1;
const consultData = {
  visitType: 'clinic',
  specialty: 'General Physician',
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
    consultData.specialty = document.getElementById('consult-specialty').value;
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
  
  const dateInput = document.getElementById('consult-date');
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  dateInput.value = tomorrow.toISOString().split('T')[0];
}

function processConsultBooking() {
  const bookingId = `VAIB-${Math.floor(1000 + Math.random() * 9000)}`;
  
  const newBooking = {
    id: bookingId,
    type: 'consultation',
    specialty: consultData.specialty,
    visitType: consultData.visitType === 'clinic' ? 'Noida Clinic Visit' : 'Video Consultation',
    date: consultData.date,
    time: consultData.slot,
    price: 500,
    status: 'Confirmed'
  };
  
  bookings.push(newBooking);
  
  document.getElementById('confirm-id').textContent = bookingId;
  document.getElementById('confirm-specialty').textContent = consultData.specialty;
  document.getElementById('confirm-type').textContent = consultData.visitType === 'clinic' ? 'Noida Clinic Visit' : 'Video Consultation';
  document.getElementById('confirm-slot').textContent = `${consultData.date} at ${consultData.slot}`;
  
  showToast(`Clinic consult slot confirmed! Booking ID: ${bookingId}`, 'success');
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
    container.innerHTML = `<p style="color:var(--text-muted); font-size:0.9rem;">No active appointments or lab tests scheduled.</p>`;
    return;
  }
  
  container.innerHTML = bookings.map(b => {
    if (b.type === 'consultation') {
      return `
        <div style="border: 1.5px solid var(--border-color); border-radius: var(--radius-md); padding: 20px; margin-bottom: 16px;">
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
        <div style="border: 1.5px solid var(--border-color); border-radius: var(--radius-md); padding: 20px; margin-bottom: 16px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <span class="badge badge-secondary">🧬 Lab Collection</span>
            <strong style="font-size:0.9rem; color:var(--primary);">${b.status}</strong>
          </div>
          <h4 style="font-size:1.1rem; margin-bottom:4px;">${b.tests.join(', ')}</h4>
          <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">Home Sample Visit | ID: ${b.id}</p>
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
// PRESCRIPTION PARSER
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
      showToast('Prescription analysed successfully! Click Proceed to load recommendations.', 'success');
    }, 2000);
  }, 100);
}

function resetPrescriptionUpload() {
  uploadedFile = null;
  const dropZone = document.getElementById('drop-zone');
  dropZone.style.borderColor = 'var(--border-color)';
  dropZone.style.backgroundColor = 'transparent';
  dropZone.innerHTML = `
    <span style="font-size: 3rem; display: block; margin-bottom: 12px;">📁</span>
    <p style="font-weight: 600; margin-bottom: 6px;">Drag and drop file here, or click to upload</p>
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
