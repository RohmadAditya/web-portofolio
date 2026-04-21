document.addEventListener('DOMContentLoaded', () => {
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
                    <div class="row mb-3">
                        <div class="col-md-6 mb-3 mb-md-0">
                            <img src="https://raw.githubusercontent.com/RohmadAditya/mg-playstation/main/public/screenshots/dashboard.png" alt="Dashboard MG-Playstation" class="img-fluid">
                        </div>
                        <div class="col-md-6">
                            <img src="https://raw.githubusercontent.com/RohmadAditya/mg-playstation/main/public/screenshots/landing.png" alt="Landing Page MG-Playstation" class="img-fluid">
                        </div>
                    </div>
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
});
