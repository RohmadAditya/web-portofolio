document.addEventListener('DOMContentLoaded', () => {
    const STORAGE_KEY = 'ra-dev-language';
    const SUPPORTED_LANGUAGES = ['id', 'en'];

    const projectData = [
        {
            id: 'mgPlaystationModal',
            title: 'MG-Playstation',
            description: {
                id: 'Aplikasi yang mendukung operasional rental PlayStation, mulai dari pencatatan transaksi dan pelanggan hingga laporan keuangan. Proyek ini juga memiliki landing page terintegrasi untuk promosi dan kebutuhan pemesanan online.',
                en: 'An application that supports PlayStation rental operations, from transaction records and customer management to financial reporting. It also includes an integrated landing page for promotion and online booking.'
            },
            tags: ['Laravel 10', 'Filament Admin Panel', 'MySQL', 'Bootstrap 5'],
            gallery: [
                {
                    image: 'assets/projects/mg-playstation/slide-01.jpg',
                    full: 'assets/projects/mg-playstation/mg-01.png',
                    thumb: 'assets/projects/mg-playstation/thumb-01.jpg',
                    title: { id: 'Bagian Hero', en: 'Hero Section' },
                    description: { id: 'Pembuka landing page dengan visual utama dan CTA ketersediaan.', en: 'Landing page opener with a primary visual and availability CTA.' }
                },
                {
                    image: 'assets/projects/mg-playstation/slide-02.jpg',
                    full: 'assets/projects/mg-playstation/mg-02.png',
                    thumb: 'assets/projects/mg-playstation/thumb-02.jpg',
                    title: { id: 'Fasilitas', en: 'Facilities' },
                    description: { id: 'Ringkasan fasilitas utama yang mendukung layanan rental.', en: 'A concise summary of the facilities supporting the rental service.' }
                },
                {
                    image: 'assets/projects/mg-playstation/slide-03.jpg',
                    full: 'assets/projects/mg-playstation/mg-03.png',
                    thumb: 'assets/projects/mg-playstation/thumb-03.jpg',
                    title: { id: 'Informasi Harga', en: 'Pricing Information' },
                    description: { id: 'Penyajian paket dan harga yang mudah dibandingkan.', en: 'A clear presentation that makes pricing options easy to compare.' }
                },
                {
                    image: 'assets/projects/mg-playstation/slide-04.jpg',
                    full: 'assets/projects/mg-playstation/mg-04.png',
                    thumb: 'assets/projects/mg-playstation/thumb-04.jpg',
                    title: { id: 'Ketersediaan Station', en: 'Station Availability' },
                    description: { id: 'Status visual unit dan station PlayStation yang tersedia.', en: 'Visual availability status for PlayStation units and stations.' }
                },
                {
                    image: 'assets/projects/mg-playstation/slide-05.jpg',
                    full: 'assets/projects/mg-playstation/mg-05.png',
                    thumb: 'assets/projects/mg-playstation/thumb-05.jpg',
                    title: { id: 'Game Unggulan', en: 'Top Games' },
                    description: { id: 'Katalog game pilihan untuk memperkuat daya tarik landing page.', en: 'A featured game catalog that strengthens the landing page offer.' }
                },
                {
                    image: 'assets/projects/mg-playstation/slide-06.jpg',
                    full: 'assets/projects/mg-playstation/mg-06.png',
                    thumb: 'assets/projects/mg-playstation/thumb-06.jpg',
                    title: { id: 'Kontak dan Lokasi', en: 'Contact and Location' },
                    description: { id: 'Alamat, kontak, dan peta untuk membantu pelanggan.', en: 'Address, contact, and map information that helps customers.' }
                },
                {
                    image: 'assets/projects/mg-playstation/slide-07.jpg',
                    full: 'assets/projects/mg-playstation/mg-07.png',
                    thumb: 'assets/projects/mg-playstation/thumb-07.jpg',
                    title: { id: 'Panel Admin', en: 'Admin Panel' },
                    description: { id: 'Antarmuka administrasi untuk mengelola data rental dan transaksi.', en: 'An administration interface for rental data and transactions.' }
                }
            ]
        },
        {
            id: 'asllogistikModal',
            title: 'PT Artalapan Strategi Logistik',
            description: {
                id: 'Website company profile untuk PT Artalapan Strategi Logistik, sebuah bisnis forwarding, dengan fokus pada presentasi profesional dan informasi perusahaan yang jelas.',
                en: 'A company profile website for PT Artalapan Strategi Logistik, a forwarding business, focused on professional presentation and clear company information.'
            },
            tags: ['WordPress']
        },
        {
            id: 'daemanindoagenciesModal',
            title: 'Daemanindo Agencies',
            description: {
                id: 'Website company profile untuk bisnis logistik di Dili, Timor-Leste, dengan pendekatan visual formal dan navigasi yang mudah dipahami.',
                en: 'A company profile website for a logistics business in Dili, Timor-Leste, with a formal visual approach and easy-to-understand navigation.'
            },
            tags: ['WordPress']
        },
        {
            id: 'timelineTodoModal',
            title: 'Timeline-Todo',
            description: {
                id: 'Aplikasi pencatatan tugas dan aktivitas harian yang membantu pengguna mengatur jadwal, menentukan prioritas, dan memantau progres dengan lebih efisien.',
                en: 'A task and daily activity tracking application that helps users manage schedules, priorities, and progress more efficiently.'
            },
            tags: ['Laravel', 'Bootstrap 5', 'MySQL']
        },
        {
            id: 'posModal',
            title: 'Point of Sales',
            description: {
                id: 'Aplikasi kasir digital untuk membantu toko dan bisnis mengelola transaksi penjualan, inventaris, dan laporan keuangan.',
                en: 'A digital cashier application that helps stores and businesses manage sales transactions, inventory, and financial reports.'
            },
            tags: ['Laravel', 'Bootstrap 5', 'MySQL']
        },
        {
            id: 'filmModal',
            title: 'Movie Finder',
            description: {
                id: 'Aplikasi web untuk mencari informasi film, melihat detail, dan menyaring berdasarkan judul atau genre menggunakan data dari API eksternal.',
                en: 'A web application for searching movie information, viewing details, and filtering by title or genre using data from an external API.'
            },
            tags: ['React', 'CSS', 'Movie API']
        },
        {
            id: 'linktreeModal',
            title: 'Custom Link Tree',
            description: {
                id: 'Aplikasi link hub sederhana untuk menyajikan tautan penting dalam satu halaman, cocok untuk profil sosial dan portfolio online.',
                en: 'A simple link hub that presents important links on one page, suitable for social profiles and online portfolios.'
            },
            tags: ['HTML', 'CSS', 'Bootstrap 5']
        }
    ];

    const makeGallery = (project) => {
        if (!project.gallery) {
            return '';
        }

        const slides = project.gallery.map((slide, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <a href="${slide.full}" target="_blank" rel="noopener noreferrer"
                   aria-label="Buka gambar ukuran penuh" data-id-aria-label="Buka gambar ukuran penuh" data-en-aria-label="Open full-size image">
                    <img src="${slide.image}" alt="${slide.title.id}" data-id-alt="${slide.title.id}" data-en-alt="${slide.title.en}"
                         ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'}>
                </a>
                <div class="carousel-caption d-block">
                    <h6 data-id="${slide.title.id}" data-en="${slide.title.en}">${slide.title.id}</h6>
                    <p data-id="${slide.description.id}" data-en="${slide.description.en}">${slide.description.id}</p>
                </div>
            </div>
        `).join('');

        const indicators = project.gallery.map((_, index) => `
            <button type="button" data-bs-target="#mgPlaystationCarousel" data-bs-slide-to="${index}"
                    class="${index === 0 ? 'active' : ''}" ${index === 0 ? 'aria-current="true"' : ''}
                    aria-label="Slide ${index + 1}"></button>
        `).join('');

        const thumbs = project.gallery.map((slide, index) => `
            <button type="button" class="project-thumb ${index === 0 ? 'is-active' : ''}"
                    data-bs-target="#mgPlaystationCarousel" data-bs-slide-to="${index}"
                    aria-label="Lihat ${slide.title.id}" data-id-aria-label="Lihat ${slide.title.id}" data-en-aria-label="View ${slide.title.en}">
                <img src="${slide.thumb}" alt="" loading="lazy" decoding="async">
            </button>
        `).join('');

        return `
            <div class="modal-stack">
                <span class="modal-stack__label" data-id="Galeri proyek" data-en="Project gallery">Galeri proyek</span>
                <div id="mgPlaystationCarousel" class="carousel slide project-carousel" data-bs-ride="false">
                    <div class="carousel-indicators">${indicators}</div>
                    <div class="carousel-inner">${slides}</div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#mgPlaystationCarousel" data-bs-slide="prev"
                            aria-label="Sebelumnya" data-id-aria-label="Sebelumnya" data-en-aria-label="Previous">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#mgPlaystationCarousel" data-bs-slide="next"
                            aria-label="Berikutnya" data-id-aria-label="Berikutnya" data-en-aria-label="Next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                </div>
                <div class="project-thumbs">${thumbs}</div>
            </div>
        `;
    };

    const modalMarkup = projectData.map((project) => `
        <div class="modal fade" id="${project.id}" tabindex="-1" aria-labelledby="${project.id}Label" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="modal-title-wrap">
                            <span class="modal-eyebrow" data-id="Detail proyek" data-en="Project details">Detail proyek</span>
                            <h2 class="modal-title" id="${project.id}Label">${project.title}</h2>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Tutup"
                                data-id-aria-label="Tutup" data-en-aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p class="modal-description" data-id="${project.description.id}" data-en="${project.description.en}">
                            ${project.description.id}
                        </p>
                        ${makeGallery(project)}
                        <div class="modal-stack">
                            <span class="modal-stack__label" data-id="Teknologi" data-en="Technology">Teknologi</span>
                            <div class="tag-list">
                                ${project.tags.map((tag) => `<span>${tag}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    document.body.insertAdjacentHTML('beforeend', modalMarkup);

    const getSavedLanguage = () => {
        try {
            const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
            return SUPPORTED_LANGUAGES.includes(savedLanguage) ? savedLanguage : 'id';
        } catch {
            return 'id';
        }
    };

    const saveLanguage = (language) => {
        try {
            window.localStorage.setItem(STORAGE_KEY, language);
        } catch {
            // The selected language still works for this page view.
        }
    };

    const updateLanguage = (language, announce = false) => {
        if (!SUPPORTED_LANGUAGES.includes(language)) {
            language = 'id';
        }

        document.documentElement.lang = language;
        document.title = language === 'id'
            ? 'Rohmad Aditya | Fullstack Web Developer'
            : 'Rohmad Aditya | Fullstack Web Developer';

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = language === 'id'
                ? 'Portfolio Rohmad Aditya, Fullstack Web Developer yang membangun website, antarmuka, dan sistem digital.'
                : 'Portfolio of Rohmad Aditya, a Fullstack Web Developer building websites, interfaces, and digital systems.';
        }

        document.querySelectorAll(`[data-${language}]`).forEach((element) => {
            element.textContent = element.getAttribute(`data-${language}`);
        });

        document.querySelectorAll(`[data-${language}-html]`).forEach((element) => {
            element.innerHTML = element.getAttribute(`data-${language}-html`);
        });

        ['aria-label', 'alt', 'title'].forEach((attribute) => {
            document.querySelectorAll(`[data-${language}-${attribute}]`).forEach((element) => {
                element.setAttribute(attribute, element.getAttribute(`data-${language}-${attribute}`));
            });
        });

        document.querySelectorAll('.language-button').forEach((button) => {
            const isActive = button.dataset.language === language;
            button.classList.toggle('is-active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });

        saveLanguage(language);

        if (announce) {
            const status = document.getElementById('languageStatus');
            if (status) {
                status.textContent = language === 'id'
                    ? 'Bahasa diubah ke Bahasa Indonesia.'
                    : 'Language changed to English.';
            }
        }
    };

    document.querySelectorAll('.language-button').forEach((button) => {
        button.addEventListener('click', () => {
            updateLanguage(button.dataset.language, true);
        });
    });

    updateLanguage(getSavedLanguage());

    const navigationLinks = Array.from(document.querySelectorAll('.section-nav__link'));
    const sections = navigationLinks
        .map((link) => document.getElementById(link.dataset.section))
        .filter(Boolean);

    const setActiveSection = (sectionId) => {
        navigationLinks.forEach((link) => {
            const isActive = link.dataset.section === sectionId;
            link.classList.toggle('is-active', isActive);
            if (isActive) {
                link.setAttribute('aria-current', 'location');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    };

    if ('IntersectionObserver' in window) {
        const sectionObserver = new IntersectionObserver((entries) => {
            const visibleEntries = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

            if (visibleEntries[0]) {
                setActiveSection(visibleEntries[0].target.id);
            }
        }, {
            rootMargin: '-18% 0px -58% 0px',
            threshold: [0, 0.15, 0.4]
        });

        sections.forEach((section) => sectionObserver.observe(section));
    }

    navigationLinks.forEach((link) => {
        link.addEventListener('click', () => setActiveSection(link.dataset.section));
    });

    const supportsFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducesMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let pointerFrame = null;

    const updateSpotlight = (event) => {
        if (!supportsFinePointer.matches || reducesMotion.matches) {
            return;
        }

        if (pointerFrame) {
            window.cancelAnimationFrame(pointerFrame);
        }

        pointerFrame = window.requestAnimationFrame(() => {
            document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
        });
    };

    window.addEventListener('pointermove', updateSpotlight, { passive: true });

    const carouselElement = document.getElementById('mgPlaystationCarousel');
    const thumbButtons = Array.from(document.querySelectorAll('.project-thumbs .project-thumb'));

    if (carouselElement) {
        carouselElement.addEventListener('slid.bs.carousel', (event) => {
            thumbButtons.forEach((button, index) => {
                button.classList.toggle('is-active', index === event.to);
            });
        });
    }
});
