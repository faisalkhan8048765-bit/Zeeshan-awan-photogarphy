/**
 * ============================================================================
 * ZM Studio Photography & Videography
 * Main JavaScript Application
 * ============================================================================
 */

/* ----------------------------------------------------------------------------
   1. EDITABLE STUDIO CONFIGURATION
   (ZM Studio can easily change personal details, phone numbers, and maps here)
   ---------------------------------------------------------------------------- */
const siteConfig = {
    ownerName: "ZM Studio",
    phoneDisplay: "03449170933",
    phoneTel: "+923449170933",
    whatsappNumber: "923449170933", // International format without leading zero or plus
    address: "Multan Road, Near Polytechnic College",
    studioHours: "Monday – Sunday: 10:00 AM – 10:00 PM (Events 24/7)"
};

/* ----------------------------------------------------------------------------
   2. CURATED PORTFOLIO SHOWCASE DATA
   (High-resolution sample photography and videography works across all 5 categories)
   ---------------------------------------------------------------------------- */
const portfolioItems = [
    {
        id: 1,
        title: "Royal Barat Ceremony",
        category: "wedding",
        categoryLabel: "Wedding Shoot",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
        description: "Capturing the emotion, royal attire, and unforgettable entrance at a grand Barat celebration."
    },
    {
        id: 2,
        title: "Bride & Groom Sunset Portrait",
        category: "wedding",
        categoryLabel: "Wedding Shoot",
        image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
        description: "Intimate golden-hour bridal couple portraits highlighting delicate jewelry and intricate embroidery."
    },
    {
        id: 3,
        title: "Cinematic 4K Rig & Production",
        category: "videography",
        categoryLabel: "Videography",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=85",
        description: "High-end cinema cameras, stabilizers, and prime lenses used for professional film-quality storytelling."
    },
    {
        id: 4,
        title: "Vibrant Mehndi Celebration",
        category: "events",
        categoryLabel: "Events & Parties",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=85",
        description: "Joyful traditional dance performances, vibrant colors, and candid guest laughter captured live."
    },
    {
        id: 5,
        title: "Studio Fashion & Personal Portrait",
        category: "portrait",
        categoryLabel: "Portrait Shoot",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
        description: "Artistic studio lighting accentuating facial features and authentic personal expression."
    },
    {
        id: 6,
        title: "Scenic Golden Hour Landscape Shoot",
        category: "outdoor",
        categoryLabel: "Outdoor Shoot",
        image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=85",
        description: "Stunning outdoor compositions using natural sun flare and natural botanical surroundings."
    },
    {
        id: 7,
        title: "Walima Stage Elegance",
        category: "wedding",
        categoryLabel: "Wedding Shoot",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
        description: "Grand reception hall decor, warm stage illumination, and couple centerpiece photography."
    },
    {
        id: 8,
        title: "Dynamic Gimbal & Event Videography",
        category: "videography",
        categoryLabel: "Videography",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=85",
        description: "Fluid camera movements capturing grand hall arrivals and bride & groom slow-motion cinematic walks."
    },
    {
        id: 9,
        title: "Milestone Birthday & Party Bash",
        category: "events",
        categoryLabel: "Events & Parties",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",
        description: "High-energy event atmosphere, cake cutting moments, and memorable family group portraits."
    },
    {
        id: 10,
        title: "Executive & Modeling Headshot",
        category: "portrait",
        categoryLabel: "Portrait Shoot",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85",
        description: "Clean, authoritative, and charismatic headshot photography for portfolios and corporate branding."
    },
    {
        id: 11,
        title: "Romantic Outdoor Pre-Wedding Shoot",
        category: "outdoor",
        categoryLabel: "Outdoor Shoot",
        image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85",
        description: "Romantic outdoor couple photography capturing serene natural moments in scenic park gardens."
    },
    {
        id: 12,
        title: "Creative Lens Framing & Details",
        category: "wedding",
        categoryLabel: "Wedding Shoot",
        image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85",
        description: "Macro focus on wedding rings, heirloom jewelry, and delicate bridal henna artistry."
    }
];

/* ----------------------------------------------------------------------------
   3. DOM ELEMENTS & STATE
   ---------------------------------------------------------------------------- */
let currentFilteredList = [...portfolioItems];
let currentLightboxIndex = 0;

const portfolioGrid = document.getElementById('portfolio-grid');
const filterButtons = document.querySelectorAll('.portfolio-filter-btn');

// Lightbox elements
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
const lightboxCategory = document.getElementById('lightbox-category');
const lightboxCounter = document.getElementById('lightbox-counter');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDescription = document.getElementById('lightbox-description');
const lightboxBookBtn = document.getElementById('lightbox-book-btn');

// Booking Form elements
const bookingForm = document.getElementById('booking-form');
const inputName = document.getElementById('client-name');
const inputPhone = document.getElementById('client-phone');
const selectService = document.getElementById('shoot-service');
const inputDate = document.getElementById('event-date');
const inputLocation = document.getElementById('event-location');
const inputMessage = document.getElementById('client-message');
const whatsappPreviewBox = document.getElementById('whatsapp-preview-box');

// Mobile Nav
const mobileToggleBtn = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const mainHeader = document.getElementById('main-header');

/* ----------------------------------------------------------------------------
   4. INITIALIZATION ON DOM READY
   ---------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Set current year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Set min date for booking to today
    if (inputDate) {
        const today = new Date().toISOString().split('T')[0];
        inputDate.setAttribute('min', today);
    }

    // 3. Render initial portfolio grid
    renderPortfolio('all');

    // 4. Attach filter tab listeners
    setupPortfolioFilters();

    // 5. Attach lightbox controls
    setupLightbox();

    // 6. Setup mobile navigation
    setupMobileNav();

    // 7. Setup header scroll effect
    setupScrollEffects();

    // 8. Setup live WhatsApp message preview
    setupLiveBookingPreview();
});

/* ----------------------------------------------------------------------------
   5. PORTFOLIO RENDERING & FILTERING
   ---------------------------------------------------------------------------- */
function setupPortfolioFilters() {
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterCategory = btn.getAttribute('data-filter');
            renderPortfolio(filterCategory);
        });
    });
}

function renderPortfolio(category = 'all') {
    if (!portfolioGrid) return;

    if (category === 'all') {
        currentFilteredList = [...portfolioItems];
    } else {
        currentFilteredList = portfolioItems.filter(item => item.category === category);
    }

    portfolioGrid.innerHTML = '';

    currentFilteredList.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'portfolio-item group';
        card.setAttribute('data-id', item.id);
        card.setAttribute('data-index', index);

        card.innerHTML = `
            <div class="relative overflow-hidden w-full h-[320px] bg-dark-secondary">
                <img 
                    src="${item.image}" 
                    alt="${item.title}" 
                    loading="lazy" 
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                <div class="portfolio-overlay">
                    <div class="flex items-center justify-between mb-2">
                        <span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-gold-500/20 text-gold-300 border border-gold-500/40 backdrop-blur-md">
                            ${item.categoryLabel}
                        </span>
                        <div class="w-8 h-8 rounded-full bg-black/60 border border-white/20 text-gold-400 flex items-center justify-center text-xs group-hover:bg-gold-500 group-hover:text-black group-hover:border-gold-500 transition-all">
                            <i class="fa-solid fa-expand"></i>
                        </div>
                    </div>
                    <h3 class="font-cinzel text-base font-bold text-white group-hover:text-gold-200 transition-colors">
                        ${item.title}
                    </h3>
                    <p class="text-[11px] text-slate-300 line-clamp-2 mt-1">
                        ${item.description}
                    </p>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            openLightbox(index);
        });

        portfolioGrid.appendChild(card);
    });
}

/* ----------------------------------------------------------------------------
   6. LIGHTBOX MODAL FUNCTIONALITY
   ---------------------------------------------------------------------------- */
function setupLightbox() {
    if (!lightboxModal) return;

    // Close button
    lightboxClose.addEventListener('click', closeLightbox);

    // Prev / Next buttons
    lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(-1);
    });

    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(1);
    });

    // Close on background click
    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal || e.target.id === 'lightbox-media-container') {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightboxModal.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });

    // Book shoot from lightbox
    if (lightboxBookBtn) {
        lightboxBookBtn.addEventListener('click', () => {
            const currentItem = currentFilteredList[currentLightboxIndex];
            closeLightbox();
            if (currentItem) {
                selectServiceAndScroll(currentItem.categoryLabel);
            }
        });
    }
}

function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxContent();
    lightboxModal.classList.remove('hidden');
    // Force reflow
    void lightboxModal.offsetWidth;
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightboxModal.classList.remove('active');
    setTimeout(() => {
        lightboxModal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

function navigateLightbox(direction) {
    if (currentFilteredList.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex + direction + currentFilteredList.length) % currentFilteredList.length;
    updateLightboxContent();
}

function updateLightboxContent() {
    const item = currentFilteredList[currentLightboxIndex];
    if (!item) return;

    lightboxImg.src = item.image;
    lightboxImg.alt = item.title;
    lightboxCategory.textContent = item.categoryLabel;
    lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${currentFilteredList.length}`;
    lightboxTitle.textContent = item.title;
    lightboxDescription.textContent = item.description;
}

/* ----------------------------------------------------------------------------
   7. SERVICE CARD BOOKING BUTTON HELPER
   (Pre-selects service in dropdown & smooth scrolls to booking form)
   ---------------------------------------------------------------------------- */
window.selectServiceAndScroll = function(serviceName) {
    const bookingSection = document.getElementById('booking');
    if (selectService) {
        // Find best match in select options
        let matched = false;
        for (let i = 0; i < selectService.options.length; i++) {
            const optVal = selectService.options[i].value;
            if (optVal.toLowerCase().includes(serviceName.toLowerCase()) || 
                serviceName.toLowerCase().includes(optVal.toLowerCase())) {
                selectService.selectedIndex = i;
                matched = true;
                break;
            }
        }
        if (!matched) {
            selectService.value = serviceName;
        }

        // Trigger input event to update WhatsApp preview
        selectService.dispatchEvent(new Event('change'));
    }

    if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
};

/* ----------------------------------------------------------------------------
   8. REAL-TIME WHATSAPP MESSAGE PREVIEW & SUBMISSION
   ---------------------------------------------------------------------------- */
function buildWhatsAppMessage() {
    const name = inputName?.value.trim() || "[Your Name]";
    const phone = inputPhone?.value.trim() || "[Your Phone Number]";
    const service = selectService?.value || "[Select Service]";
    const date = inputDate?.value || "[Select Event Date]";
    const location = inputLocation?.value.trim() || "[Shoot Location / City]";
    const message = inputMessage?.value.trim() || "No additional notes provided.";

    const text = 
`🌟 *NEW SHOOT BOOKING REQUEST* 🌟
----------------------------------
👤 *Client Name:* ${name}
📞 *Contact Number:* ${phone}
📸 *Service Requested:* ${service}
📅 *Event Date:* ${date}
📍 *Shoot Location:* ${location}
💬 *Message/Notes:* ${message}
----------------------------------
*Studio:* ZM Studio Photography & Videography
*Location:* Multan Road, Near Polytechnic College
*Official Contact:* 03449170933`;

    return text;
}

function setupLiveBookingPreview() {
    const inputs = [inputName, inputPhone, selectService, inputDate, inputLocation, inputMessage];

    const updatePreview = () => {
        if (!whatsappPreviewBox) return;
        const msg = buildWhatsAppMessage();
        whatsappPreviewBox.innerHTML = msg.replace(/\n/g, '<br>');
    };

    inputs.forEach(input => {
        if (input) {
            input.addEventListener('input', updatePreview);
            input.addEventListener('change', updatePreview);
        }
    });

    updatePreview();
}

window.handleBookingSubmit = function(event) {
    event.preventDefault();

    const name = inputName.value.trim();
    const phone = inputPhone.value.trim();
    const service = selectService.value;
    const date = inputDate.value;
    const location = inputLocation.value.trim();

    if (!name || !phone || !service || !date || !location) {
        alert("Please fill in all required fields (Name, Phone, Service, Date, and Location).");
        return;
    }

    const message = buildWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;

    // Show visual confirmation notification
    showNotification("Opening WhatsApp with your booking details...", "success");

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
};

/* ----------------------------------------------------------------------------
   9. QUICK CONTACT FORM (BOTTOM SECTION)
   ---------------------------------------------------------------------------- */
window.handleQuickContact = function(event) {
    event.preventDefault();

    const qcName = document.getElementById('qc-name')?.value.trim();
    const qcPhone = document.getElementById('qc-phone')?.value.trim();
    const qcMessage = document.getElementById('qc-message')?.value.trim();

    if (!qcName || !qcPhone || !qcMessage) {
        alert("Please fill in your name, phone number, and message.");
        return;
    }

    const text = 
`📩 *DIRECT INQUIRY FOR ZM Studio* 📩
---------------------------------------
👤 *Name:* ${qcName}
📞 *Phone:* ${qcPhone}
💬 *Question:* ${qcMessage}
---------------------------------------
Sent via ZM Studio Photography Website`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;

    showNotification("Connecting to ZM Studio on WhatsApp...", "success");
    window.open(whatsappUrl, '_blank');
};

/* ----------------------------------------------------------------------------
   10. MOBILE MENU & HEADER SCROLL
   ---------------------------------------------------------------------------- */
function setupMobileNav() {
    if (!mobileToggleBtn || !mobileMenu) return;

    mobileToggleBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('hidden');
        if (isOpen) {
            mobileMenu.classList.remove('hidden');
            mobileToggleBtn.classList.add('open');
        } else {
            mobileMenu.classList.add('hidden');
            mobileToggleBtn.classList.remove('open');
        }
    });

    // Close menu when clicking any mobile link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileToggleBtn.classList.remove('open');
        });
    });
}

function setupScrollEffects() {
    // Header shadow on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader?.classList.add('scrolled');
        } else {
            mainHeader?.classList.remove('scrolled');
        }

        // Active link highlighting based on section scroll
        highlightActiveNavLink();
    });
}

function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

/* ----------------------------------------------------------------------------
   11. TOAST NOTIFICATION UTILITY
   ---------------------------------------------------------------------------- */
function showNotification(text, type = "info") {
    // Remove existing notification if any
    const existing = document.getElementById('studio-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'studio-toast';
    toast.className = `fixed top-6 right-6 z-50 px-5 py-3 rounded-xl border backdrop-blur-md shadow-2xl flex items-center gap-3 text-xs font-semibold tracking-wide transition-all duration-300 transform translate-y-0 ${
        type === 'success' 
            ? 'bg-emerald-950/90 text-emerald-200 border-emerald-500/50' 
            : 'bg-gold-950/90 text-gold-200 border-gold-500/50'
    }`;

    toast.innerHTML = `
        <i class="fa-solid fa-circle-check text-emerald-400 text-sm"></i>
        <span>${text}</span>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-10px)';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}
