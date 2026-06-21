# Requirements Document

## Introduction

Revamp website portfolio satu halaman milik Rohmad Aditya, seorang Full Stack Web Developer dengan 2 tahun pengalaman di software house. Website dibangun di atas stack yang sudah ada (HTML, Bootstrap 5, CSS kustom, vanilla JS, Bootstrap Icons, Google Fonts Manrope) dan tidak berpindah framework.

Tujuan utama revamp adalah mengubah website dari sekadar daftar proyek menjadi media personal branding yang kuat: meyakinkan klien potensial (UMKM/bisnis), menarik perekrut, dan membuka peluang kolaborasi dengan rekan developer. CTA utama tetap kontak via WhatsApp. Persepsi yang ingin dibangun adalah sosok problem solver bisnis berbasis teknologi, engineer yang sistematis, profesional yang komunikatif, dan developer yang menghasilkan solusi sederhana namun berdampak nyata.

---

## Glossary

- **Website**: Halaman portfolio satu halaman (single page) milik Rohmad Aditya.
- **Pengunjung**: Siapa pun yang membuka website, mencakup klien potensial, perekrut, dan rekan developer.
- **Klien_Potensial**: Pemilik bisnis atau UMKM yang mencari developer untuk membangun solusi digital.
- **Perekrut**: HRD atau hiring manager yang mengevaluasi profil teknis Rohmad.
- **Rekan_Developer**: Developer lain yang mencari peluang kolaborasi.
- **Dark_Mode**: Tema tampilan gelap yang dapat diaktifkan oleh pengunjung.
- **Light_Mode**: Tema tampilan terang (default saat ini).
- **Toggle_Tema**: Tombol interaktif untuk berpindah antara Dark_Mode dan Light_Mode.
- **Modal_Studi_Kasus**: Jendela overlay yang menampilkan detail lengkap sebuah proyek.
- **Kartu_Proyek**: Elemen kartu dalam seksi Portofolio yang merangkum satu proyek.
- **Seksi**: Bagian utama halaman (Hero, Tentang, Keahlian, Portofolio, Kontak).
- **Navbar**: Navigasi tetap di bagian atas halaman.
- **Timeline_Pengalaman**: Komponen visual yang menampilkan riwayat perjalanan karir secara kronologis.
- **CV**: Dokumen Curriculum Vitae dalam format PDF yang dapat diunduh oleh pengunjung.
- **CTA**: Call-to-action, ajakan tindakan yang diarahkan ke kontak WhatsApp.
- **Sistem**: Keseluruhan website portfolio Rohmad Aditya beserta fungsionalitas JavaScript-nya.

---

## Requirements

### Persyaratan 1: Dark Mode dan Light Mode

**User Story:** Sebagai pengunjung, saya ingin dapat berpindah antara tema terang dan gelap, agar tampilan website nyaman di berbagai kondisi pencahayaan dan preferensi saya.

#### Kriteria Penerimaan

1. THE Sistem SHALL menyediakan Toggle_Tema yang dapat diakses dari Navbar pada setiap breakpoint (desktop dan mobile).
2. WHEN Pengunjung mengaktifkan Toggle_Tema, THE Sistem SHALL menerapkan Dark_Mode ke seluruh elemen halaman dalam waktu kurang dari 300ms.
3. WHEN Pengunjung menonaktifkan Toggle_Tema, THE Sistem SHALL kembali ke Light_Mode ke seluruh elemen halaman dalam waktu kurang dari 300ms.
4. THE Sistem SHALL menyimpan preferensi tema Pengunjung di `localStorage` sehingga preferensi tersebut tetap berlaku saat halaman dibuka kembali.
5. WHEN halaman pertama kali dimuat dan tidak ada preferensi tersimpan di `localStorage`, THE Sistem SHALL mendeteksi preferensi sistem operasi Pengunjung melalui `prefers-color-scheme` dan menerapkan tema yang sesuai; jika tidak terdeteksi, tema Light_Mode SHALL diterapkan sebagai default.
6. THE Dark_Mode SHALL menggunakan kombinasi warna teks dan latar belakang yang memenuhi rasio kontras minimum 4.5:1 sesuai standar WCAG 2.1 Level AA, yang dapat diverifikasi menggunakan alat kontras standar.
7. THE Sistem SHALL menampilkan ikon `bi-sun` pada Toggle_Tema saat Dark_Mode aktif dan ikon `bi-moon` saat Light_Mode aktif, sehingga ikon selalu menunjukkan aksi yang akan dilakukan.
8. WHEN Dark_Mode aktif, THE Sistem SHALL menerapkan palet warna gelap secara konsisten pada semua komponen: Navbar, hero-panel, content-card, project-card, skill-card, contact-card, metric-card, modal-content, dan footer.

---

### Persyaratan 2: Seksi Hero yang Memperkuat Personal Brand

**User Story:** Sebagai Klien_Potensial atau Perekrut, saya ingin langsung memahami siapa Rohmad dan nilai apa yang ia tawarkan dalam hitungan detik, agar saya dapat memutuskan apakah layak melanjutkan penelusuran.

#### Kriteria Penerimaan

1. THE Sistem SHALL menampilkan headline utama pada seksi Hero yang secara eksplisit menyebut role (Full Stack Developer) dan domain (solusi digital untuk bisnis), dan headline tersebut harus terlihat tanpa perlu menggulir halaman di semua breakpoint.
2. THE Sistem SHALL menampilkan sub-headline atau deskripsi singkat yang menyebutkan pengalaman 2 tahun di software house dengan proyek nyata, dengan panjang teks tidak melebihi 160 karakter.
3. THE Sistem SHALL menyediakan tombol CTA primer yang mengarahkan Pengunjung langsung ke WhatsApp Rohmad (`https://wa.me/6289531656442`) di tab baru dengan atribut `rel="noopener noreferrer"`.
4. THE Sistem SHALL menyediakan tombol CTA sekunder yang menggulir halaman ke seksi Portofolio pada halaman yang sama menggunakan smooth scroll, tanpa membuka tab baru.
5. THE Sistem SHALL menampilkan jumlah total proyek yang ditampilkan di seksi Portofolio sebagai indikator sosial proof pada seksi Hero, dengan angka yang konsisten dengan jumlah Kartu_Proyek yang dirender.
6. WHEN halaman dimuat di perangkat dengan lebar layar kurang dari 768px, THE Sistem SHALL menampilkan semua teks, tombol CTA, dan indikator sosial proof di seksi Hero tanpa horizontal overflow dan tanpa elemen yang terpotong.

---

### Persyaratan 3: Seksi Tentang dengan Cerita Personal yang Kuat

**User Story:** Sebagai Perekrut atau Rekan_Developer, saya ingin mengetahui latar belakang dan motivasi Rohmad, agar saya mendapat gambaran nyata tentang karakter dan cara kerjanya.

#### Kriteria Penerimaan

1. THE Sistem SHALL menampilkan narasi personal pada seksi Tentang yang mencakup tiga tonggak karir secara eksplisit: (a) lulus SMK, (b) memulai karir sebagai junior web developer di software house, (c) posisi dan pengalaman saat ini.
2. THE Sistem SHALL menampilkan secara eksplisit sebagai daftar tiga nilai kerja Rohmad: (a) komunikatif dan bertanggung jawab terhadap hasil, (b) berpikir sistematis dan berorientasi kualitas produk, (c) menghasilkan solusi yang sederhana, efisien, dan berdampak nyata.
3. THE Sistem SHALL menampilkan daftar tiga layanan yang tersedia di seksi Tentang: Website Company Profile, Aplikasi Internal, dan Prototype Produk Digital.
4. THE Sistem SHALL menyediakan tombol unduh CV di seksi Tentang yang ketika diklik akan mengunduh file PDF CV Rohmad ke perangkat Pengunjung.
5. WHEN Pengunjung mengklik tombol unduh CV, THE Sistem SHALL memulai unduhan file PDF secara langsung tanpa membuka tab baru.

---

### Persyaratan 4: Timeline Pengalaman Kerja

**User Story:** Sebagai Perekrut, saya ingin melihat riwayat karir Rohmad secara kronologis, agar saya dapat mengevaluasi progres dan relevansi pengalamannya secara cepat.

#### Kriteria Penerimaan

1. THE Sistem SHALL menampilkan Timeline_Pengalaman dalam seksi tersendiri dengan heading yang berbeda dari seksi Portofolio, memuat minimal satu entri dengan entri terbaru ditampilkan paling atas.
2. THE Timeline_Pengalaman SHALL menampilkan setiap entri dengan empat informasi: nama posisi, nama perusahaan/institusi, rentang tahun (format: YYYY–YYYY atau YYYY–sekarang), dan deskripsi peran atau pencapaian dengan panjang maksimum 150 karakter.
3. THE Sistem SHALL menempatkan Timeline_Pengalaman dalam container HTML yang terpisah dari container seksi Portofolio, sehingga tidak ada elemen keduanya yang berada dalam parent yang sama.
4. WHEN halaman dimuat di perangkat dengan lebar layar kurang dari 768px, THE Timeline_Pengalaman SHALL menampilkan setiap entri dalam tata letak satu kolom dengan lebar penuh container.

---

### Persyaratan 5: Seksi Keahlian Tanpa Progress Bar

**User Story:** Sebagai Perekrut atau Klien_Potensial, saya ingin mengetahui teknologi yang dikuasai Rohmad tanpa melihat angka persentase kemampuan yang subjektif, agar saya mendapat gambaran yang jujur dan relevan.

#### Kriteria Penerimaan

1. THE Sistem SHALL menampilkan daftar teknologi yang dikuasai Rohmad dalam bentuk tag atau kartu; seksi Keahlian SHALL tidak mengandung elemen `<progress>`, input range, atau elemen dengan teks persentase kemampuan.
2. THE Sistem SHALL mengelompokkan teknologi ke dalam minimal tiga kategori dengan label yang terlihat: Frontend Development, Backend Development, dan Implementation Tools.
3. THE Sistem SHALL menampilkan teknologi berikut sesuai kategorinya: Laravel, Filament, ASP.NET, MySQL (Backend); HTML, CSS, Bootstrap, React (Frontend); Git, Docker, WordPress (Tools).

---

### Persyaratan 6: Seksi Portofolio dengan Studi Kasus Lengkap

**User Story:** Sebagai Klien_Potensial atau Perekrut, saya ingin melihat detail proyek beserta konteks bisnis dan teknisnya, agar saya dapat menilai kemampuan Rohmad secara nyata.

#### Kriteria Penerimaan

1. THE Sistem SHALL menampilkan semua 9 proyek (5 prototype + 4 company profile) pada seksi Portofolio sebagai Kartu_Proyek yang terlihat tanpa interaksi tambahan.
2. THE Sistem SHALL memisahkan proyek menjadi dua kelompok dengan heading yang berbeda: "Proyek Prototype" (5 kartu) dan "Proyek Perusahaan" (4 kartu).
3. WHEN Pengunjung mengklik tombol "Detail" pada Kartu_Proyek yang memiliki Modal_Studi_Kasus, THE Sistem SHALL membuka Modal_Studi_Kasus proyek yang bersangkutan.
4. WHEN Modal_Studi_Kasus untuk proyek MG-Playstation dibuka, THE Sistem SHALL menampilkan: deskripsi studi kasus, carousel dengan minimal 7 slide screenshot, thumbnail navigator, lightbox yang dapat dibuka dari carousel, dan daftar tech stack.
5. WHEN Modal_Studi_Kasus untuk proyek Timeline-Todo, Point of Sales, Web Pencari Film, atau Custom Link Tree dibuka, THE Sistem SHALL menampilkan minimal: deskripsi proyek, satu gambar screenshot yang bukan berasal dari layanan dummy eksternal, tautan GitHub jika nilai `href` bukan `"#"` dan bukan string kosong, dan daftar tech stack.
6. WHEN Modal_Studi_Kasus untuk proyek PT Artalapan Strategi Logistik atau Daemanindo Agencies dibuka, THE Sistem SHALL menampilkan minimal: deskripsi konteks bisnis, daftar tech stack, dan tautan live site yang dapat diklik.
7. WHEN Kartu_Proyek untuk PT Popeye Trans Logistik atau PT Synergy Perkasa Group dirender, THE Sistem SHALL menampilkan tombol "Demo" yang membuka URL live site di tab baru; proyek ini tidak memerlukan tombol "Detail".
8. WHEN Kartu_Proyek memiliki tautan live site, THE Sistem SHALL menampilkan tombol "Demo" yang membuka URL tersebut di tab baru dengan atribut `rel="noopener noreferrer"`.
9. WHEN Kartu_Proyek memiliki tautan GitHub dengan nilai `href` yang bukan `"#"` dan bukan string kosong, THE Sistem SHALL menampilkan tombol "GitHub" yang membuka repositori di tab baru dengan atribut `rel="noopener noreferrer"`.
10. IF Modal_Studi_Kasus ditutup setelah sebelumnya dibuka, THE Sistem SHALL menghentikan autoplay carousel (jika aktif) dan menutup lightbox (jika terbuka) sehingga tidak ada animasi atau overlay yang tersisa setelah modal hilang.
11. WHEN Pengunjung membuka lightbox di dalam Modal_Studi_Kasus, THE Sistem SHALL memungkinkan navigasi antar gambar menggunakan tombol panah pada layar maupun tombol keyboard ArrowLeft dan ArrowRight.

---

### Persyaratan 7: Seksi Kontak dan CTA WhatsApp

**User Story:** Sebagai Klien_Potensial yang tertarik bekerja sama, saya ingin menemukan cara mudah untuk menghubungi Rohmad, agar saya dapat langsung memulai percakapan.

#### Kriteria Penerimaan

1. THE Sistem SHALL menyediakan seksi Kontak dengan anchor ID unik sehingga tautan navigasi di Navbar dan tombol CTA di seksi Hero dapat menggulir halaman langsung ke seksi ini.
2. THE Sistem SHALL menampilkan tombol atau tautan CTA utama yang mengarah ke `https://wa.me/6289531656442` di tab baru dengan atribut `rel="noopener noreferrer"`.
3. THE Sistem SHALL menampilkan tautan ke profil Instagram Rohmad yang membuka URL profil Instagram yang telah dikonfigurasi di tab baru dengan atribut `rel="noopener noreferrer"`.
4. THE Sistem SHALL menampilkan ringkasan profil pada seksi Kontak yang mencakup: role (Full Stack Web Developer), fokus layanan (website bisnis, aplikasi internal, prototype digital), dan WhatsApp sebagai saluran kontak utama yang dapat langsung diklik.
5. WHEN Pengunjung mengklik tautan navigasi "Kontak" di Navbar, THE Sistem SHALL menggulir halaman ke seksi Kontak menggunakan smooth scroll tanpa memuat ulang halaman.

---

### Persyaratan 8: Navigasi dan Aksesibilitas

**User Story:** Sebagai Pengunjung, saya ingin dapat berpindah antar seksi dengan mudah dan menggunakan website tanpa hambatan, agar pengalaman menelusuri portfolio terasa lancar.

#### Kriteria Penerimaan

1. WHILE Pengunjung menggulir halaman ke posisi mana pun, THE Navbar SHALL tetap terlihat di bagian atas viewport (posisi fixed-top).
2. WHEN Pengunjung mengklik tautan navigasi di Navbar, THE Sistem SHALL menggulir halaman ke seksi yang dituju dengan efek smooth scroll.
3. WHEN halaman dimuat di perangkat dengan lebar layar kurang dari 992px, THE Navbar SHALL menyembunyikan tautan navigasi di balik tombol hamburger yang dapat diklik untuk membuka atau menutup menu.
4. THE Sistem SHALL menggunakan atribut `aria-label` yang deskriptif pada semua tombol interaktif yang tidak memiliki teks label yang terlihat, termasuk tombol close modal, tombol carousel, dan Toggle_Tema.
5. THE Sistem SHALL memastikan semua gambar yang menyampaikan informasi memiliki atribut `alt` yang mendeskripsikan konten gambar tersebut; gambar dekoratif SHALL memiliki `alt=""`.
6. THE Sistem SHALL memastikan semua elemen interaktif dapat difokus menggunakan Tab dan memiliki indikator fokus yang terlihat (outline atau ring) yang kontras dengan latar belakang sekitarnya; elemen yang difokus dapat diaktifkan dengan Enter atau Space, dan modal dapat ditutup dengan Escape.
7. WHEN Modal_Studi_Kasus dibuka, THE Sistem SHALL menjebak fokus keyboard di dalam modal dengan perilaku siklus: Tab dari elemen terakhir kembali ke elemen pertama, dan Shift+Tab dari elemen pertama kembali ke elemen terakhir.
8. WHEN Pengunjung menekan tombol Escape WHILE Modal_Studi_Kasus terbuka, THE Sistem SHALL menutup modal dan mengembalikan fokus keyboard ke tombol "Detail" yang membuka modal tersebut.

---

### Persyaratan 9: Performa dan Responsivitas

**User Story:** Sebagai Pengunjung yang mengakses portfolio dari berbagai perangkat dan koneksi internet, saya ingin website dimuat dengan cepat dan tampil dengan benar, agar pengalaman penelusuran tidak terganggu.

#### Kriteria Penerimaan

1. WHEN halaman dimuat, THE Sistem SHALL menerapkan `loading="lazy"` dan `decoding="async"` pada semua gambar yang berada di luar 100vh pertama dari bagian atas dokumen.
2. THE Sistem SHALL menampilkan layout yang dapat diverifikasi pada lebar layar 320px, 768px, dan 1280px dengan tiga kondisi: tidak ada horizontal scrollbar, tidak ada elemen yang terpotong atau saling tumpang tindih, dan semua teks dapat dibaca.
3. THE Sistem SHALL mempertahankan stack teknologi yang ada (Bootstrap 5, vanilla JS, CSS kustom) tanpa menambahkan dependensi JavaScript eksternal baru yang dimuat melalui `<script src>` atau CDN tambahan.
4. WHEN halaman dimuat, THE Sistem SHALL menampilkan seluruh halaman dengan Cumulative Layout Shift (CLS) kurang dari 0.1 yang dapat diukur menggunakan Lighthouse atau Web Vitals.
5. THE Sistem SHALL mendefinisikan semua nilai warna dan radius sebagai CSS custom properties pada selector `:root`; pergantian tema SHALL hanya memerlukan perubahan nilai pada blok `:root` tersebut tanpa mengubah properti CSS di selector lain.
6. WHEN Pengunjung mengaktifkan atau menonaktifkan Toggle_Tema, THE Sistem SHALL menerapkan perubahan warna dan radius ke seluruh komponen halaman tanpa memuat ulang halaman.

---

### Persyaratan 10: Gaya Visual Minimalis Tanpa Elemen Generik

**User Story:** Sebagai Pengunjung, saya ingin melihat tampilan yang bersih, modern, dan mencerminkan identitas profesional Rohmad, agar website terasa autentik dan tidak seperti template generik.

#### Kriteria Penerimaan

1. THE Sistem SHALL mempertahankan tipografi Manrope (Google Fonts) sebagai satu-satunya font yang digunakan di seluruh halaman; tidak ada deklarasi `font-family` yang merujuk ke font lain.
2. THE Sistem SHALL tidak mengandung: (a) lebih dari satu efek CSS transition atau animation yang berjalan bersamaan pada satu elemen saat interaksi yang sama, (b) efek pengetikan karakter per karakter (character-by-character typing) pada teks mana pun, (c) elemen `<progress>` atau indikator persentase untuk menunjukkan level keahlian.
3. THE Sistem SHALL mendefinisikan warna primer dalam satu variabel CSS custom property (misal `--primary`) pada `:root`; mengubah nilai variabel tersebut SHALL mengubah warna primer di seluruh halaman tanpa perlu mengubah selector lain.
4. IF proyek memiliki aset screenshot tersedia di direktori lokal, THE Sistem SHALL menampilkan screenshot tersebut pada Modal_Studi_Kasus proyek itu; gambar SHALL direferensikan dengan path lokal, bukan URL dari layanan gambar eksternal seperti dummyimage.com atau placehold.co.
5. WHERE screenshot proyek belum tersedia, THE Sistem SHALL menampilkan placeholder menggunakan elemen HTML dengan `background-color: var(--surface-alt)`, `border: 1px solid var(--line)`, dan `border-radius: var(--radius-md)`, bukan gambar dari layanan dummy eksternal.
6. THE Sistem SHALL menggunakan Bootstrap Icons (kelas `bi-*`) sebagai satu-satunya library ikon di seluruh halaman, termasuk ikon yang diinjeksi secara dinamis oleh JavaScript.
