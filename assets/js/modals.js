document.addEventListener('DOMContentLoaded', () => {
    const mgSlides = [
        {
            src: 'assets/projects/mg-playstation/slide-01.jpg',
            full: 'assets/projects/mg-playstation/mg-01.png',
            thumb: 'assets/projects/mg-playstation/thumb-01.jpg',
            alt: 'Screenshot hero MG-Playstation',
            title: 'Hero Section',
            desc: 'Tampilan pembuka landing page dengan visual utama dan CTA ketersediaan.'
        },
        {
            src: 'assets/projects/mg-playstation/slide-02.jpg',
            full: 'assets/projects/mg-playstation/mg-02.png',
            thumb: 'assets/projects/mg-playstation/thumb-02.jpg',
            alt: 'Screenshot fasilitas MG-Playstation',
            title: 'Fasilitas',
            desc: 'Ringkasan fasilitas utama yang menjadi nilai jual layanan rental.'
        },
        {
            src: 'assets/projects/mg-playstation/slide-03.jpg',
            full: 'assets/projects/mg-playstation/mg-03.png',
            thumb: 'assets/projects/mg-playstation/thumb-03.jpg',
            alt: 'Screenshot harga MG-Playstation',
            title: 'Informasi Harga',
            desc: 'Penyajian layanan dan pricing agar pelanggan mudah membandingkan opsi.'
        },
        {
            src: 'assets/projects/mg-playstation/slide-04.jpg',
            full: 'assets/projects/mg-playstation/mg-04.png',
            thumb: 'assets/projects/mg-playstation/thumb-04.jpg',
            alt: 'Screenshot ketersediaan MG-Playstation',
            title: 'Ketersediaan Meja',
            desc: 'Status unit dan meja PlayStation yang tersedia secara visual.'
        },
        {
            src: 'assets/projects/mg-playstation/slide-05.jpg',
            full: 'assets/projects/mg-playstation/mg-05.png',
            thumb: 'assets/projects/mg-playstation/thumb-05.jpg',
            alt: 'Screenshot game MG-Playstation',
            title: 'Top Games',
            desc: 'Katalog game unggulan untuk memperkuat daya tarik landing page.'
        },
        {
            src: 'assets/projects/mg-playstation/slide-06.jpg',
            full: 'assets/projects/mg-playstation/mg-06.png',
            thumb: 'assets/projects/mg-playstation/thumb-06.jpg',
            alt: 'Screenshot kontak MG-Playstation',
            title: 'Kontak dan Lokasi',
            desc: 'Informasi alamat, kontak, dan peta untuk memudahkan pelanggan.'
        },
        {
            src: 'assets/projects/mg-playstation/slide-07.jpg',
            full: 'assets/projects/mg-playstation/mg-07.png',
            thumb: 'assets/projects/mg-playstation/thumb-07.jpg',
            alt: 'Screenshot Admin Panel MG-Playstation',
            title: 'Admin Panel',
            desc: 'Antarmuka administrasi untuk mengelola data dan transaksi rental.'
        }
    ];

    const mgIndicators = mgSlides
        .map((_, index) => `
            <button type="button" data-bs-target="#mgPlaystationCarousel" data-bs-slide-to="${index}"
                class="${index === 0 ? 'active' : ''}" ${index === 0 ? 'aria-current="true"' : ''}
                aria-label="Slide ${index + 1}"></button>`)
        .join('');

    const mgItems = mgSlides
        .map((slide, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <a href="${slide.full}" class="modal-gallery-item" data-lightbox="mg-playstation" data-index="${index}" data-title="${slide.title}">
                    <img src="${slide.src}" alt="${slide.alt}" class="img-fluid" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'}>
                </a>
                <div class="carousel-caption d-block">
                    <h6 class="fw-bold">${slide.title}</h6>
                    <p class="mb-0">${slide.desc}</p>
                </div>
            </div>`)
        .join('');

    const mgThumbs = mgSlides
        .map((slide, index) => `
            <button type="button" class="project-thumb ${index === 0 ? 'is-active' : ''}" data-bs-target="#mgPlaystationCarousel" data-bs-slide-to="${index}" aria-label="Lihat ${slide.title}">
                <img src="${slide.thumb}" alt="${slide.alt}" loading="lazy" decoding="async">
            </button>`)
        .join('');

    const modalsMarkup = `
    <div class="modal fade" id="mgPlaystationModal" tabindex="-1" aria-labelledby="mgPlaystationModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="mgPlaystationModalLabel">MG-Playstation</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h6 class="fw-bold mb-2">Studi Kasus</h6>
                    <p class="mb-3">Aplikasi ini dirancang untuk mendukung pengelolaan rental PlayStation, mulai dari pencatatan transaksi, manajemen pelanggan, hingga laporan keuangan. Sistem juga dilengkapi landing page terintegrasi untuk kebutuhan promosi dan pemesanan online.</p>
                    <h6 class="fw-bold mb-2">Screenshot</h6>
                    <div id="mgPlaystationCarousel" class="carousel slide project-carousel mb-3" data-bs-ride="false" data-bs-interval="4000" data-bs-pause="hover">
                        <div class="carousel-indicators">
                            ${mgIndicators}
                        </div>
                        <div class="carousel-inner">
                            ${mgItems}
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#mgPlaystationCarousel" data-bs-slide="prev" aria-label="Previous slide">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#mgPlaystationCarousel" data-bs-slide="next" aria-label="Next slide">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        </button>
                    </div>
                    <div class="project-thumbs mb-3">${mgThumbs}</div>
                    <h6 class="fw-bold mb-2">Tech Stack</h6>
                    <ul class="mb-0">
                        <li>Laravel 10</li>
                        <li>Filament Admin Panel</li>
                        <li>MySQL</li>
                        <li>Bootstrap 5</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="timelineTodoModal" tabindex="-1" aria-labelledby="timelineTodoModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="timelineTodoModalLabel">Timeline-Todo</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h6 class="fw-bold mb-2">Deskripsi</h6>
                    <p class="mb-3">Aplikasi pencatatan tugas dan kegiatan harian yang membantu pengguna mengelola, menjadwalkan, dan memantau progres aktivitas dengan lebih efisien.</p>
                    <h6 class="fw-bold mb-2">Screenshot</h6>
                    <div class="text-center mb-3">
                        <img src="https://dummyimage.com/600x350/dfe7f2/304256&text=Timeline-Todo" alt="Screenshot Timeline-Todo" class="img-fluid">
                    </div>
                    <h6 class="fw-bold mb-2">Tech Stack</h6>
                    <ul class="mb-0">
                        <li>Laravel</li>
                        <li>Bootstrap 5</li>
                        <li>MySQL</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="posModal" tabindex="-1" aria-labelledby="posModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="posModalLabel">Point of Sales</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h6 class="fw-bold mb-2">Deskripsi</h6>
                    <p class="mb-3">Aplikasi Point of Sales yang dirancang untuk membantu toko atau bisnis mengelola transaksi penjualan, stok barang, dan laporan keuangan secara digital.</p>
                    <h6 class="fw-bold mb-2">Screenshot</h6>
                    <div class="text-center mb-3">
                        <img src="https://dummyimage.com/600x350/dfe7f2/304256&text=Point+of+Sales" alt="Screenshot POS" class="img-fluid">
                    </div>
                    <h6 class="fw-bold mb-2">Tech Stack</h6>
                    <ul class="mb-0">
                        <li>Laravel</li>
                        <li>Bootstrap 5</li>
                        <li>MySQL</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="filmModal" tabindex="-1" aria-labelledby="filmModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="filmModalLabel">Web Pencari Film</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h6 class="fw-bold mb-2">Deskripsi</h6>
                    <p class="mb-3">Aplikasi web untuk mencari informasi film, menampilkan detail, serta menyediakan fitur pencarian berdasarkan judul atau genre dengan memanfaatkan data dari API eksternal.</p>
                    <h6 class="fw-bold mb-2">Screenshot</h6>
                    <div class="text-center mb-3">
                        <img src="https://dummyimage.com/600x350/dfe7f2/304256&text=Web+Pencari+Film" alt="Screenshot Web Pencari Film" class="img-fluid">
                    </div>
                    <h6 class="fw-bold mb-2">Tech Stack</h6>
                    <ul class="mb-0">
                        <li>React</li>
                        <li>CSS</li>
                        <li>API Film (OMDb/TMDB)</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="linktreeModal" tabindex="-1" aria-labelledby="linktreeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="linktreeModalLabel">Custom Link Tree</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h6 class="fw-bold mb-2">Deskripsi</h6>
                    <p class="mb-3">Aplikasi Link Tree sederhana yang menampilkan berbagai tautan penting dalam satu halaman, cocok untuk profil media sosial maupun portofolio online.</p>
                    <h6 class="fw-bold mb-2">Screenshot</h6>
                    <div class="text-center mb-3">
                        <img src="https://dummyimage.com/600x350/dfe7f2/304256&text=Custom+Link+Tree" alt="Screenshot Custom Link Tree" class="img-fluid">
                    </div>
                    <h6 class="fw-bold mb-2">Tech Stack</h6>
                    <ul class="mb-0">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap 5</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="asllogistikModal" tabindex="-1" aria-labelledby="asllogistikModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="asllogistikModalLabel">PT Artalapan Strategi Logistik</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h6 class="fw-bold mb-2">Deskripsi</h6>
                    <p class="mb-3">Website company profile untuk PT Artalapan Strategi Logistik yang bergerak di bidang forwarding, dengan fokus pada tampilan profesional dan penyajian informasi perusahaan yang jelas.</p>
                    <h6 class="fw-bold mb-2">Tech Stack</h6>
                    <ul class="mb-0">
                        <li>WordPress</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="daemanindoagenciesModal" tabindex="-1" aria-labelledby="daemanindoagenciesModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="daemanindoagenciesModalLabel">Daemanindo Agencies</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h6 class="fw-bold mb-2">Deskripsi</h6>
                    <p class="mb-3">Website company profile untuk Daemanindo Agencies yang bergerak di bidang logistik di wilayah Dili, Timor Leste, dengan pendekatan visual yang formal dan navigasi yang mudah dipahami.</p>
                    <h6 class="fw-bold mb-2">Tech Stack</h6>
                    <ul class="mb-0">
                        <li>WordPress</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', modalsMarkup);

    const lightboxMarkup = `
    <div class="lightbox-overlay" id="imageLightbox" aria-hidden="true">
        <div class="lightbox-dialog">
            <button type="button" class="lightbox-nav lightbox-prev" aria-label="Previous image">&#8249;</button>
            <button type="button" class="lightbox-nav lightbox-next" aria-label="Next image">&#8250;</button>
            <button type="button" class="lightbox-close" aria-label="Close preview">&times;</button>
            <img src="" alt="" class="lightbox-image">
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', lightboxMarkup);

    const lightbox = document.getElementById('imageLightbox');
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    const lightboxNext = lightbox.querySelector('.lightbox-next');
    const carouselElement = document.getElementById('mgPlaystationCarousel');
    const carousel = bootstrap.Carousel.getOrCreateInstance(carouselElement);
    const thumbButtons = Array.from(document.querySelectorAll('.project-thumb'));
    const mgModal = document.getElementById('mgPlaystationModal');
    let currentLightboxIndex = 0;

    const syncActiveThumb = (activeIndex) => {
        thumbButtons.forEach((button, index) => {
            button.classList.toggle('is-active', index === activeIndex);
        });
    };

    const openLightboxAt = (index) => {
        const slide = mgSlides[index];
        if (!slide) {
            return;
        }

        currentLightboxIndex = index;
        lightboxImage.src = slide.full;
        lightboxImage.alt = slide.alt;
        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');
    };

    const closeLightbox = () => {
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
        lightboxImage.src = '';
        lightboxImage.alt = '';
    };

    const showAdjacentLightboxImage = (direction) => {
        const total = mgSlides.length;
        currentLightboxIndex = (currentLightboxIndex + direction + total) % total;
        openLightboxAt(currentLightboxIndex);
    };

    carouselElement.addEventListener('slid.bs.carousel', (event) => {
        syncActiveThumb(event.to);
    });

    document.addEventListener('click', (event) => {
        const trigger = event.target.closest('[data-lightbox]');
        if (trigger) {
            event.preventDefault();
            const currentIndex = Number(trigger.getAttribute('data-index'));
            openLightboxAt(currentIndex >= 0 ? currentIndex : 0);
            return;
        }

        if (event.target === lightbox || event.target === lightboxClose) {
            closeLightbox();
            return;
        }

        if (event.target === lightboxPrev) {
            showAdjacentLightboxImage(-1);
            return;
        }

        if (event.target === lightboxNext) {
            showAdjacentLightboxImage(1);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (!lightbox.classList.contains('is-open')) {
            return;
        }

        if (event.key === 'Escape') {
            closeLightbox();
        }

        if (event.key === 'ArrowLeft') {
            showAdjacentLightboxImage(-1);
        }

        if (event.key === 'ArrowRight') {
            showAdjacentLightboxImage(1);
        }
    });

    mgModal.addEventListener('shown.bs.modal', () => {
        carousel.cycle();
    });

    mgModal.addEventListener('hide.bs.modal', () => {
        carousel.pause();
        closeLightbox();
    });

    syncActiveThumb(0);
});
