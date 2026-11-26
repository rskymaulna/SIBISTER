# Task Tracking — Website Publik & Dashboard Informasi Satpol PP Kabupaten Fakfak

Referensi spesifikasi: [`docs/requirements.md`](docs/requirements.md)  
Status saat ini: **Frontend Portal Publik Selesai (100%)** | **Backend & Panel Admin / CMS (Belum Dimulai)**

---

## A. Fondasi Proyek, Struktur & UI/UX Umum
- [x] Merapikan struktur folder (`pages/`, `assets/css/`, `assets/js/`, `assets/images/`, `assets/docs/perda/`, `docs/`, `admin/`)
- [x] Normalisasi penamaan file & aset ke format `kebab-case`
- [x] Mengganti seluruh ikon emoji dengan **Font Awesome 6.5.2**
- [x] Menyeragamkan Top Bar, Header (logo ganda + pencarian global), dan Navbar dropdown di semua halaman
- [x] Menjadikan logo & judul header sebagai tautan kembali ke Beranda (`index.html`)
- [x] Menambahkan *favicon* (ikon tab browser) menggunakan `assets/images/logos/logo-satpol-pp.png`
- [x] Menampilkan tanggal & jam **realtime Waktu Indonesia Timur (WIT / `Asia/Jayapura`)** (`assets/js/topbar-clock.js`)
- [x] Merapikan tampilan kartu statistik & banner **Unit Reaksi Cepat** di Beranda
- [x] Membuat halaman blog/detail berita & informasi terbaru (`pages/detail-berita.html`) beserta data terpusat (`assets/js/berita-data.js`)
- [x] Membuat data modular terpusat frontend (`assets/js/portal-data.js`) untuk seluruh 9 modul SRS

---

## B. Modul Portal Publik (Frontend — SRS Bagian 3A)
- [x] **Modul 1 — Profil & Dokumentasi Sebelum-Sesudah (Before vs After)** (`pages/profil.html`):
  - [x] Tab Sejarah, Visi & Misi, Struktur Organisasi, Tugas & Fungsi
  - [x] Modul Pembanding Data & Dokumentasi **Before vs After** fleksibel/modular (filter kategori dinamis, teks deskriptif, angka metrik, dan foto perbandingan)
- [x] **Modul 2 — Data Personel** (`pages/personel.html`):
  - [x] Ringkasan & grafik status kepegawaian (**ASN** & **P3K**) serta pembagian **Regu**
  - [x] Daftar personel publik (Nama, Status, Pangkat, Jabatan, Regu — tanpa NIK/alamat pribadi) dengan pencarian & filter
- [x] **Modul 3 — Penegakan Perda `[Prioritas]`** (`pages/informasi-perda.html`):
  - [x] Statistik & grafik penegakan Perda (berdasarkan status tindak lanjut)
  - [x] Tabel rincian pelanggaran (jenis pelanggaran, lokasi kejadian, bentuk & status tindak lanjut) dengan pencarian & filter
  - [x] Daftar Peraturan Daerah, Jadwal Sosialisasi, dan Mekanisme Penegakan
- [x] **Modul 4 — Patroli `[Prioritas]`** (`pages/patroli.html`):
  - [x] Statistik kegiatan patroli rutin & insidental
  - [x] Daftar jadwal pelaksanaan, rute/wilayah, personel/regu bertugas, dan hasil temuan/laporan ringkas dengan filter
- [x] **Modul 5 — Tibumtranmas & Data Rawan** (`pages/peta.html`):
  - [x] Peta interaktif Leaflet (Data Kerawanan, IPKKU, Kelembagaan)
  - [x] Tabel pemetaan **Data Rawan** & laporan gangguan Tibumtranmas yang terhubung langsung ke zoom marker peta
- [x] **Modul 6 — Pengaduan Masyarakat `[Prioritas]`** (`pages/pengaduan.html`):
  - [x] Statistik transparansi pengaduan (Total, Menunggu, Diproses, Selesai) + grafik
  - [x] Daftar status penyelesaian aduan (pencarian kode tiket & filter status)
  - [x] Formulir pengaduan online interaktif (tersimpan di `localStorage` + auto-generate kode tiket)
- [x] **Modul 7 — Satlinmas** (`pages/satlinmas.html`):
  - [x] Statistik jumlah anggota & sebaran Pos Linmas
  - [x] Tabel sebaran Pos Linmas per distrik (pencarian & filter) + dokumentasi kegiatan Satlinmas
- [x] **Modul 8 — PPNS** (`pages/ppns.html`):
  - [x] Statistik & progres penyidikan perkara pelanggaran Perda oleh PPNS dengan progress bar & filter status
- [x] **Modul 9 — Kinerja & Anggaran** (`pages/kinerja-anggaran.html`):
  - [x] Sub-modul Kinerja: IKU, Target, Realisasi, Persentase Pencapaian + grafik
  - [x] Sub-modul Anggaran: Pagu, Realisasi Penyerapan, Sisa Anggaran + grafik

---

## C. Halaman Pendukung Portal Publik (Frontend)
- [x] Halaman Beranda (`index.html`) — dengan menu cepat ke seluruh modul utama SRS
- [x] Halaman Berita & Kegiatan (`pages/berita.html`) dengan fitur pencarian + Detail Artikel (`pages/detail-berita.html`)
- [x] Halaman Pusat Layanan (`pages/layanan.html`)
- [x] Halaman Bidang Damkar (`pages/damkar.html`)
- [x] Halaman Informasi Layanan (`pages/informasi-layanan.html`)
- [x] Halaman Kontak Layanan (`pages/kontak.html`) dengan formulir pesan interaktif
- [x] Halaman Galeri Dokumentasi (`pages/galeri.html`) dengan filter kategori & lightbox modal

---

## D. Panel Admin / Backend / CMS (Tahap Selanjutnya — SRS Bagian 3B)
- [ ] Sistem Autentikasi & Keamanan Login Admin (enkripsi password & manajemen sesi)
- [ ] Perancangan Database & REST API untuk seluruh 9 modul + Berita + Damkar
- [ ] Manajemen Data Terpusat (CRUD) di folder `admin/` untuk seluruh modul
- [ ] Fitur Unggah Data Massal (*Bulk Upload* Excel/CSV) untuk Personel & Anggaran
- [ ] Fitur Unggah & Optimasi Gambar (foto Before-After, dokumentasi Patroli/Penegakan Perda)
- [ ] Log Aktivitas (*Audit Trail*) untuk melacak perubahan data oleh Admin
- [ ] Pengunggahan dokumen PDF Peraturan Daerah asli ke `assets/docs/perda/`
