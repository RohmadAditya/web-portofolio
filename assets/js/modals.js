document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const siteLoader = document.getElementById('siteLoader');
    let loaderDismissed = false;

    const hideSiteLoader = () => {
        if (!siteLoader || loaderDismissed) {
            body.classList.remove('is-loading');
            return;
        }

        loaderDismissed = true;
        siteLoader.classList.add('is-hidden');
        body.classList.remove('is-loading');

        window.setTimeout(() => {
            siteLoader.remove();
        }, 500);
    };

    if (document.readyState === 'complete') {
        window.setTimeout(hideSiteLoader, 180);
    } else {
        window.addEventListener('load', () => {
            window.setTimeout(hideSiteLoader, 180);
        }, { once: true });
    }

    const mgSlides = [
        {
            src: 'assets/projects/mg-playstation/slide-01.jpg',
            full: 'assets/projects/mg-playstation/mg-01.png',
            thumb: 'assets/projects/mg-playstation/thumb-01.jpg',
            alt: 'Screenshot hero MG-Playstation',
            title: 'Hero Section',
            desc: 'Opening landing page section with a primary visual and availability CTA.'
        },
        {
            src: 'assets/projects/mg-playstation/slide-02.jpg',
            full: 'assets/projects/mg-playstation/mg-02.png',
            thumb: 'assets/projects/mg-playstation/thumb-02.jpg',
            alt: 'Screenshot MG-Playstation facilities',
            title: 'Facilities',
            desc: 'A concise summary of the core facilities that support the rental service offer.'
        },
        {
            src: 'assets/projects/mg-playstation/slide-03.jpg',
            full: 'assets/projects/mg-playstation/mg-03.png',
            thumb: 'assets/projects/mg-playstation/thumb-03.jpg',
            alt: 'Screenshot MG-Playstation pricing',
            title: 'Pricing Information',
            desc: 'Service and pricing presentation that makes options easy for customers to compare.'
        },
        {
            src: 'assets/projects/mg-playstation/slide-04.jpg',
            full: 'assets/projects/mg-playstation/mg-04.png',
            thumb: 'assets/projects/mg-playstation/thumb-04.jpg',
            alt: 'Screenshot MG-Playstation availability',
            title: 'Station Availability',
            desc: 'Visual availability status for PlayStation units and rental stations.'
        },
        {
            src: 'assets/projects/mg-playstation/slide-05.jpg',
            full: 'assets/projects/mg-playstation/mg-05.png',
            thumb: 'assets/projects/mg-playstation/thumb-05.jpg',
            alt: 'Screenshot game MG-Playstation',
            title: 'Top Games',
            desc: 'Featured game catalog designed to strengthen the appeal of the landing page.'
        },
        {
            src: 'assets/projects/mg-playstation/slide-06.jpg',
            full: 'assets/projects/mg-playstation/mg-06.png',
            thumb: 'assets/projects/mg-playstation/thumb-06.jpg',
            alt: 'Screenshot MG-Playstation contact',
            title: 'Contact and Location',
            desc: 'Address, contact, and map information that helps customers reach the business.'
        },
        {
            src: 'assets/projects/mg-playstation/slide-07.jpg',
            full: 'assets/projects/mg-playstation/mg-07.png',
            thumb: 'assets/projects/mg-playstation/thumb-07.jpg',
            alt: 'Screenshot Admin Panel MG-Playstation',
            title: 'Admin Panel',
            desc: 'Administration interface for managing rental data and transactions.'
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
                <a href="${slide.full}" class="modal-gallery-item" target="_blank" rel="noopener noreferrer" data-title="${slide.title}">
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
            <button type="button" class="project-thumb ${index === 0 ? 'is-active' : ''}" data-bs-target="#mgPlaystationCarousel" data-bs-slide-to="${index}" aria-label="View ${slide.title}">
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
                    <h6 class="fw-bold mb-2">Case Study</h6>
                    <p class="mb-3">This application supports PlayStation rental operations, from transaction records and customer management to financial reporting. It also includes an integrated landing page for promotion and online booking needs.</p>
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
                    <h6 class="fw-bold mb-2">Description</h6>
                    <p class="mb-3">A task and daily activity tracking application that helps users manage, schedule, and monitor progress more efficiently.</p>
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
                    <h6 class="fw-bold mb-2">Description</h6>
                    <p class="mb-3">A Point of Sales application designed to help stores and businesses manage sales transactions, inventory, and financial reports digitally.</p>
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
                    <h5 class="modal-title" id="filmModalLabel">Movie Finder</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h6 class="fw-bold mb-2">Description</h6>
                    <p class="mb-3">A web application for searching movie information, viewing details, and filtering by title or genre using data from an external API.</p>
                    <h6 class="fw-bold mb-2">Screenshot</h6>
                    <div class="text-center mb-3">
                        <img src="https://dummyimage.com/600x350/dfe7f2/304256&text=Movie+Finder" alt="Screenshot Movie Finder" class="img-fluid">
                    </div>
                    <h6 class="fw-bold mb-2">Tech Stack</h6>
                    <ul class="mb-0">
                        <li>React</li>
                        <li>CSS</li>
                        <li>Movie API (OMDb/TMDB)</li>
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
                    <h6 class="fw-bold mb-2">Description</h6>
                    <p class="mb-3">A simple Link Tree application that presents important links on one page, suitable for social profiles and online portfolios.</p>
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
                    <h6 class="fw-bold mb-2">Description</h6>
                    <p class="mb-3">A company profile website for PT Artalapan Strategi Logistik, a forwarding business, focused on a professional presentation and clear company information.</p>
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
                    <h6 class="fw-bold mb-2">Description</h6>
                    <p class="mb-3">A company profile website for Daemanindo Agencies, a logistics business in Dili, Timor-Leste, with a formal visual approach and easy-to-understand navigation.</p>
                    <h6 class="fw-bold mb-2">Tech Stack</h6>
                    <ul class="mb-0">
                        <li>WordPress</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', modalsMarkup);

    const carouselElement = document.getElementById('mgPlaystationCarousel');
    const carousel = carouselElement ? bootstrap.Carousel.getOrCreateInstance(carouselElement) : null;
    const thumbButtons = Array.from(document.querySelectorAll('.project-thumbs .project-thumb'));
    const mgModal = document.getElementById('mgPlaystationModal');

    const syncActiveThumb = (activeIndex) => {
        thumbButtons.forEach((button, index) => {
            button.classList.toggle('is-active', index === activeIndex);
        });
    };

    if (carouselElement) {
        carouselElement.addEventListener('slid.bs.carousel', (event) => {
            syncActiveThumb(event.to);
        });
    }

    if (mgModal && carousel) {
        mgModal.addEventListener('shown.bs.modal', () => {
            carousel.cycle();
        });

        mgModal.addEventListener('hide.bs.modal', () => {
            carousel.pause();
        });
    }

    syncActiveThumb(0);
});
