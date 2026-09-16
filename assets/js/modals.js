document.addEventListener('DOMContentLoaded', () => {
    const STORAGE_KEY = 'ra-dev-language';
    const SUPPORTED_LANGUAGES = ['id', 'en'];

    const projectData = [
        {
            id: 'lilyBouquetModal',
            title: 'Lily Bouquet — Landing Page & Admin Dashboard',
            description: {
                id: 'Saya membangun landing page Lily Bouquet beserta dashboard admin operasional. Admin dapat mengelola konten yang tampil di landing page sekaligus memantau penjualan dan laporan dalam satu sistem.',
                en: 'I built the Lily Bouquet landing page and operational admin dashboard. Admins can manage the landing page content while tracking sales and reports in one system.'
            },
            website: 'https://lily-bouquet.com/'
        },
        {
            id: 'moneyFinModal',
            title: 'MoneyFin — SaaS',
            description: {
                id: 'MoneyFin adalah platform SaaS production untuk pengelolaan keuangan secara terpusat melalui alur pencatatan dan pemantauan yang praktis.',
                en: 'MoneyFin is a production SaaS platform for centralized financial management through practical recording and monitoring workflows.'
            },
            website: 'https://moneyfin.rohmadaditya.my.id/'
        },
        {
            id: 'mgPlaystationModal',
            title: 'MG-Playstation',
            description: {
                id: 'Proyek konsep MG-Playstation mengeksplorasi alur rental secara end-to-end, mulai dari landing page dan pemesanan hingga pengelolaan pelanggan, transaksi, ketersediaan unit, dan laporan keuangan dalam satu sistem.',
                en: 'The MG-Playstation concept project explores an end-to-end rental workflow, from its landing page and booking flow to customer management, transactions, unit availability, and financial reporting in one system.'
            },
            gallery: [
                {
                    image: 'assets/projects/mg-playstation/slide-01.jpg',
                    full: 'assets/projects/mg-playstation/mg-01.png',
                    thumb: 'assets/projects/mg-playstation/thumb-01.jpg',
                    title: { id: 'Penawaran Utama', en: 'Primary Offer' },
                    description: { id: 'Bagian pembuka menyampaikan layanan rental dengan cepat dan mengarahkan pelanggan untuk memeriksa ketersediaan.', en: 'The opening section communicates the rental offer quickly and guides customers toward checking availability.' }
                },
                {
                    image: 'assets/projects/mg-playstation/slide-02.jpg',
                    full: 'assets/projects/mg-playstation/mg-02.png',
                    thumb: 'assets/projects/mg-playstation/thumb-02.jpg',
                    title: { id: 'Fasilitas', en: 'Facilities' },
                    description: { id: 'Informasi fasilitas disusun ringkas agar pelanggan mudah memahami pengalaman rental yang ditawarkan.', en: 'Facility information is organized clearly so customers can understand the rental experience at a glance.' }
                },
                {
                    image: 'assets/projects/mg-playstation/slide-03.jpg',
                    full: 'assets/projects/mg-playstation/mg-03.png',
                    thumb: 'assets/projects/mg-playstation/thumb-03.jpg',
                    title: { id: 'Informasi Harga', en: 'Pricing Information' },
                    description: { id: 'Paket dan harga dibuat mudah dipindai sehingga pelanggan dapat membandingkan pilihan tanpa kebingungan.', en: 'Packages and pricing are easy to scan, helping customers compare their options without unnecessary friction.' }
                },
                {
                    image: 'assets/projects/mg-playstation/slide-04.jpg',
                    full: 'assets/projects/mg-playstation/mg-04.png',
                    thumb: 'assets/projects/mg-playstation/thumb-04.jpg',
                    title: { id: 'Ketersediaan Unit', en: 'Unit Availability' },
                    description: { id: 'Status unit ditampilkan secara visual agar pelanggan dapat mengetahui pilihan yang tersedia sebelum memesan.', en: 'Visual unit statuses let customers see what is available before making a booking.' }
                },
                {
                    image: 'assets/projects/mg-playstation/slide-05.jpg',
                    full: 'assets/projects/mg-playstation/mg-05.png',
                    thumb: 'assets/projects/mg-playstation/thumb-05.jpg',
                    title: { id: 'Katalog Game', en: 'Game Catalog' },
                    description: { id: 'Game unggulan ditampilkan untuk memperjelas pilihan hiburan sekaligus memperkuat daya tarik layanan.', en: 'Featured games make the entertainment options clearer and strengthen the overall service offer.' }
                },
                {
                    image: 'assets/projects/mg-playstation/slide-06.jpg',
                    full: 'assets/projects/mg-playstation/mg-06.png',
                    thumb: 'assets/projects/mg-playstation/thumb-06.jpg',
                    title: { id: 'Kontak dan Lokasi', en: 'Contact and Location' },
                    description: { id: 'Alamat, kontak, dan peta ditempatkan dalam satu bagian untuk memudahkan pelanggan menghubungi atau mengunjungi lokasi.', en: 'Address, contact details, and a map are grouped together to make reaching or visiting the business easier.' }
                },
                {
                    image: 'assets/projects/mg-playstation/slide-07.jpg',
                    full: 'assets/projects/mg-playstation/mg-07.png',
                    thumb: 'assets/projects/mg-playstation/thumb-07.jpg',
                    title: { id: 'Panel Admin', en: 'Admin Panel' },
                    description: { id: 'Panel admin memusatkan pengelolaan pelanggan, unit, transaksi, dan laporan agar operasional lebih teratur.', en: 'The admin panel centralizes customers, units, transactions, and reports to keep daily operations organized.' }
                }
            ]
        },
        {
            id: 'mpkuDashboardModal',
            title: 'MPKU Dashboard — Hospital Audit & Monitoring',
            description: {
                id: 'Saya mengembangkan dashboard untuk memusatkan hasil audit dan management letter rumah sakit. Platform ini membantu pimpinan dan anggota dewan memantau indikator kinerja, rekomendasi manajemen, dan progres organisasi secara transparan sehingga pelaporan dan pengambilan keputusan strategis menjadi lebih efektif.',
                en: 'I developed a dashboard that centralizes hospital audit results and management letters. It helps leadership and board members monitor performance indicators, management recommendations, and organizational progress transparently, making reporting and strategic decision-making more effective.'
            },
        },
        {
            id: 'aslErpModal',
            title: 'PT Artalapan Strategi Logistik — ERP System',
            description: {
                id: 'Saya berkontribusi dalam pengembangan ERP khusus freight forwarding yang mengintegrasikan quotation, pelaksanaan job, invoicing, dan operasional gudang. Sistem terpusat ini mengurangi pekerjaan manual, meningkatkan visibilitas data, dan memperkuat koordinasi tim operasional, gudang, serta keuangan.',
                en: 'I contributed to a custom freight-forwarding ERP integrating quotations, job execution, invoicing, and warehouse operations. This centralized system reduces manual work, improves data visibility, and strengthens coordination across operations, warehouse, and finance teams.'
            },
        },
        {
            id: 'mitraDjayaModal',
            title: 'PT Mitra Djaya Trans — Company Profile',
            description: {
                id: 'Saya membangun website company profile untuk PT Mitra Djaya Trans, perusahaan jasa angkutan dan logistik di Gresik yang melayani transportasi darat, laut, dan udara. Website menyajikan solusi pengiriman perusahaan secara profesional, jelas, dan mudah diakses.',
                en: 'I built a company profile website for PT Mitra Djaya Trans, a Gresik-based logistics provider serving land, sea, and air transportation needs. The website presents its shipping solutions professionally, clearly, and accessibly.'
            },
            website: 'https://mitradjayatrans.com/'
        },
        {
            id: 'smtCatalogModal',
            title: 'PT Surya Medika Timur — e-Catalog',
            description: {
                id: 'Saya mengembangkan e-Catalog yang memusatkan penawaran produk dari vendor dalam ekosistem pengadaan Surya Medika Timur. Platform ini membantu tim pengadaan rumah sakit mengevaluasi dan membandingkan produk serta harga dengan lebih transparan untuk memperoleh nilai pembelian terbaik.',
                en: 'I developed an e-Catalog that centralizes vendor product offers within the Surya Medika Timur procurement ecosystem. It enables hospital procurement teams to evaluate and compare products and pricing transparently to identify the best purchasing value.'
            },
        },
        {
            id: 'sitiKhodijahHisModal',
            title: 'RS Siti Khodijah Sepanjang — Hospital Information System',
            description: {
                id: 'Saya berkontribusi dalam pengembangan ulang Hospital Information System dari awal untuk memodernisasi operasional rumah sakit. Sistem terintegrasi ini mendukung layanan pasien, rekam medis, farmasi, billing, dan alur administrasi sekaligus meningkatkan skalabilitas, keandalan, dan kemudahan pemeliharaan.',
                en: 'I contributed to rebuilding the Hospital Information System from the ground up to modernize hospital operations. The integrated platform supports patient services, medical records, pharmacy, billing, and administrative workflows while improving scalability, reliability, and maintainability.'
            },
        },
        {
            id: 'smtQuotationModal',
            title: 'PT Surya Medika Timur — Form Penawaran',
            description: {
                id: 'Saya merancang dan mengimplementasikan modul pengajuan penawaran vendor tanpa login melalui token akses unik, beserta sistem pemeringkatan berdasarkan kategori obat dan jenis produk. Fitur ini mempercepat pengumpulan, perbandingan, dan evaluasi penawaran untuk keputusan pengadaan berbasis data.',
                en: 'I designed and implemented a login-free vendor quotation module using unique access tokens, together with a ranking system based on drug categories and product types. The features accelerate quotation collection, comparison, and evaluation for data-driven procurement decisions.'
            },
        },
        {
            id: 'asllogistikModal',
            title: 'PT Artalapan Strategi Logistik',
            description: {
                id: 'Saya menangani perencanaan struktur, tampilan, dan implementasi website PT Artalapan Strategi Logistik secara end-to-end. Website ini dirancang untuk memperkuat citra profesional perusahaan forwarding serta menyajikan profil, layanan, dan informasi penting dengan alur yang mudah dipahami.',
                en: 'I handled the structure, visual direction, and implementation of the PT Artalapan Strategi Logistik website end-to-end. The site presents the forwarding company professionally while making its profile, services, and essential information easy to understand.'
            },
            website: 'https://asllogistik.com/'
        },
        {
            id: 'daemanindoagenciesModal',
            title: 'Daemanindo Agencies',
            description: {
                id: 'Saya merancang dan membangun website Daemanindo Agencies secara end-to-end untuk menghadirkan profil digital yang sesuai dengan karakter perusahaan logistik. Struktur konten dan navigasinya dibuat ringkas agar calon pelanggan mudah mengenal perusahaan serta layanan yang tersedia.',
                en: 'I designed and built the Daemanindo Agencies website end-to-end to create a digital presence suited to a logistics company. Its concise content structure and navigation help prospective customers understand the company and its services.'
            },
            website: 'https://daemanindoagencies.com/'
        },
        {
            id: 'restoBuAisModal',
            title: 'Resto Bu Ais — POS System',
            description: {
                id: 'Sebagai Full Stack Developer, saya mengembangkan aplikasi Point of Sale berbasis web untuk pengelolaan pesanan, pemrosesan transaksi, administrasi menu, dan laporan penjualan. Sistem ini menyederhanakan alur kerja harian, meningkatkan akurasi transaksi, dan menyajikan insight bisnis melalui dashboard.',
                en: 'As the Full Stack Developer, I built a web-based Point of Sale application for order management, transaction processing, menu administration, and sales reporting. It streamlines daily workflows, improves transaction accuracy, and provides business insights through a dashboard.'
            },
        },
        {
            id: 'synergyTangguhModal',
            title: 'PT Synergy Tangguh Perkasa — Company Profile',
            description: {
                id: 'Saya mengembangkan website company profile untuk PT Synergy Tangguh Perkasa, penyedia pengadaan barang dan jasa bagi perusahaan, proyek, serta institusi. Penyajian konten menekankan profesionalisme, ketepatan spesifikasi, efisiensi biaya, dan kepastian pengiriman.',
                en: 'I developed a company profile website for PT Synergy Tangguh Perkasa, a procurement provider serving companies, projects, and institutions. Its content emphasizes professionalism, specification accuracy, cost efficiency, and delivery certainty.'
            },
            website: 'https://synergiperkasagroup.com/'
        },
        {
            id: 'popeyeProfileModal',
            title: 'PT Popeye Trans Logistik — Company Profile',
            description: {
                id: 'Saya membangun website company profile untuk PT Popeye Trans Logistik guna menyajikan layanan kargo, transportasi, pindahan, logistik, distribusi, general supplier, serta ekspor-impor secara terstruktur dan profesional.',
                en: 'I built the PT Popeye Trans Logistik company profile website to present its cargo, transportation, relocation, logistics, distribution, general supplier, and export-import services in a structured and professional way.'
            },
            website: 'https://popeye-logistik.com/'
        },
        {
            id: 'popeyeErpModal',
            title: 'PT Popeye Trans Logistik — ERP System',
            description: {
                id: 'Saya berkontribusi dalam pengembangan ERP yang memusatkan proses operasional dan transaksi perusahaan transportasi serta logistik. Arsitektur fleksibelnya memungkinkan tata letak invoice, struktur dokumen, dan format ekspor disesuaikan secara dinamis dengan standar bisnis setiap pelanggan.',
                en: 'I contributed to an ERP that centralizes operational and transactional processes for a transportation and logistics company. Its flexible architecture allows invoice layouts, document structures, and export formats to be dynamically tailored to each customer’s business standards.'
            },
        },
        {
            id: 'surabayaMandiriModal',
            title: 'PT Surabaya Mandiri Logistik — Company Profile',
            description: {
                id: 'Website company profile PT Surabaya Mandiri Logistik menyajikan layanan pemasokan material bangunan, transportasi, dan pergudangan dalam satu profil perusahaan yang mudah dijelajahi.',
                en: 'The PT Surabaya Mandiri Logistik company profile website presents building materials supply, transportation, and warehousing services in an easy-to-navigate company profile.'
            },
            website: 'https://surabayamandirilogistik.com/'
        },
        {
            id: 'timelineTodoModal',
            title: 'Timeline-Todo',
            description: {
                id: 'Proyek konsep untuk mengeksplorasi alur aplikasi produktivitas berbasis Laravel. Fokusnya adalah menyusun tugas dan jadwal, menentukan prioritas, serta menampilkan progres harian dalam antarmuka yang mudah dipahami.',
                en: 'A concept project exploring a Laravel-based productivity workflow. It focuses on organizing tasks and schedules, setting priorities, and presenting daily progress through an approachable interface.'
            },
        },
        {
            id: 'posModal',
            title: 'Point of Sales',
            description: {
                id: 'Proyek konsep untuk mempelajari kebutuhan utama sistem kasir digital. Alurnya mencakup transaksi penjualan, pengelolaan stok, dan laporan keuangan agar data operasional dapat dikelola dalam satu aplikasi.',
                en: 'A concept project exploring the core requirements of a digital point-of-sale system, including sales transactions, inventory management, and financial reporting in one application.'
            },
        },
        {
            id: 'filmModal',
            title: 'Movie Finder',
            description: {
                id: 'Proyek eksplorasi React dan integrasi API eksternal. Pengguna dapat mencari film, membuka detail, dan menjelajahi konten berdasarkan judul atau genre melalui alur yang sederhana dan responsif.',
                en: 'An exploration of React and third-party API integration. Users can search for movies, view details, and browse by title or genre through a simple, responsive experience.'
            },
        },
        {
            id: 'linktreeModal',
            title: 'Custom Link Tree',
            description: {
                id: 'Proyek konsep untuk mengeksplorasi penyajian informasi personal secara ringkas. Halaman ini menggabungkan profil sosial, portfolio, dan tautan penting dalam satu tampilan yang mudah dibuka dari perangkat mobile.',
                en: 'A concept project exploring a concise way to present personal information. It brings social profiles, portfolio work, and important links into a single mobile-friendly page.'
            },
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
                <span class="modal-stack__label" data-id="Tampilan solusi" data-en="Solution gallery">Tampilan solusi</span>
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

    const modalMarkup = projectData.map((project) => {
        const card = document.querySelector(`[data-bs-target="#${project.id}"]`);
        const badges = card?.querySelector('.tag-list')?.innerHTML || '';

        return `
            <div class="modal fade" id="${project.id}" tabindex="-1" aria-labelledby="${project.id}Label" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="modal-title-wrap">
                            <span class="modal-eyebrow" data-id="Ringkasan proyek" data-en="Project overview">Ringkasan proyek</span>
                            <h2 class="modal-title" id="${project.id}Label">${project.title}</h2>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Tutup"
                                data-id-aria-label="Tutup" data-en-aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p class="modal-description" data-id="${project.description.id}" data-en="${project.description.en}">
                            ${project.description.id}
                        </p>
                        ${project.website ? `<a class="secondary-action modal-website-link" href="${project.website}" target="_blank" rel="noopener noreferrer">
                            <span data-id="Kunjungi website" data-en="Visit website">Kunjungi website</span>
                            <i class="bi bi-box-arrow-up-right" aria-hidden="true"></i>
                        </a>` : ''}
                        ${makeGallery(project)}
                        <div class="modal-stack">
                            <span class="modal-stack__label" data-id="Detail proyek" data-en="Project details">Detail proyek</span>
                            <div class="tag-list">${badges}</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        `;
    }).join('');

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
        const isProjectArchive = document.body.dataset.page === 'projects';
        document.title = isProjectArchive
            ? (language === 'id' ? 'Semua Proyek | Rohmad Aditya' : 'All Projects | Rohmad Aditya')
            : 'Rohmad Aditya | Fullstack Laravel Developer';

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = isProjectArchive
                ? (language === 'id'
                    ? 'Semua proyek Rohmad Aditya: website klien, produk SaaS, dan proyek konsep.'
                    : 'All projects by Rohmad Aditya: client websites, SaaS products, and concept projects.')
                : (language === 'id'
                    ? 'Portfolio Rohmad Aditya, Fullstack Laravel Developer untuk website perusahaan dan sistem web yang profesional serta siap digunakan.'
                    : 'Portfolio of Rohmad Aditya, a Fullstack Laravel Developer building professional company websites and ready-to-use web systems.');
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

    const updateActiveSection = () => {
        // Use a stable point in the viewport so long sections (especially
        // Projects) remain active while the user scrolls through their content.
        const marker = window.innerHeight * 0.3;
        const isAtPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
        const currentSection = isAtPageEnd
            ? sections.at(-1)
            : sections
                .filter((section) => section.getBoundingClientRect().top <= marker)
                .at(-1) || sections[0];

        if (currentSection) {
            setActiveSection(currentSection.id);
        }
    };

    let activeSectionFrame = null;
    const scheduleActiveSectionUpdate = () => {
        if (activeSectionFrame) {
            return;
        }

        activeSectionFrame = window.requestAnimationFrame(() => {
            activeSectionFrame = null;
            updateActiveSection();
        });
    };

    window.addEventListener('scroll', scheduleActiveSectionUpdate, { passive: true });
    window.addEventListener('resize', scheduleActiveSectionUpdate);
    updateActiveSection();

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
