# Dokumen Kebutuhan Sistem (Software Requirements Specification)

**Proyek:** Website Publik & Dashboard Informasi Satpol PP Kabupaten Fakfak
**Klien:** Satuan Polisi Pamong Praja (Satpol PP) Kabupaten Fakfak
**Status Dokumen:** Draft v1.2 (Updated)

---

## 1. Gambaran Umum Proyek
Website ini bertujuan sebagai portal informasi publik yang transparan, informatif, dan interaktif bagi masyarakat Kabupaten Fakfak terkait kinerja, kegiatan operasional, serta layanan pengaduan Satpol PP. Sistem ini terdiri dari dua bagian utama:
1. **Portal Publik (Frontend):** Menampilkan dashboard statistik, informasi operasional, profil instansi, dan layanan pengaduan masyarakat.
2. **Panel Admin (Backend/CMS):** Sistem manajemen konten bagi petugas admin Satpol PP untuk mengunggah, memperbarui, dan mengelola seluruh data yang ditampilkan di portal publik.

---

## 2. Peran Pengguna (User Roles)
1. **Masyarakat Umum (Public Visitor):**
   * Dapat melihat seluruh informasi dashboard, grafik, dan data operasional publik tanpa perlu login.
   * Dapat mengirimkan laporan/pengaduan masyarakat (jika fitur form pengaduan publik diaktifkan).
2. **Administrator (Admin Satpol PP):**
   * Memiliki akses penuh (login terautentikasi) ke Dashboard Admin.
   * Dapat melakukan operasi CRUD (*Create, Read, Update, Delete*) serta unggah dokumen/excel pada seluruh modul data.
   * Mengelola pembaruan status data dan galeri dokumentasi secara fleksibel.

---

## 3. Kebutuhan Fungsional (Functional Requirements)

### A. Portal Publik (Tampilan Dashboard & Informasi)
*(Catatan: Item dengan tanda `[Prioritas / ✔]` merupakan fokus utama berdasarkan catatan klien)*

#### 1. Menu Profil & Dokumentasi Sebelum-Sesudah (Fleksibel/Modular)
* Menampilkan profil instansi Satpol PP Kabupaten Fakfak (Visi, Misi, Struktur Organisasi).
* **Fitur Pembanding Data & Dokumentasi (Before vs After):** Menampilkan perbandingan kondisi/data **Sebelum** dan **Sesudah** pembaruan/kegiatan (terintegrasi di dalam menu Profil).
* **Kebutuhan Arsitektur Fleksibel:** Modul ini dirancang secara generik/modular (mendukung input teks deskriptif, angka statistik, maupun unggahan foto perbandingan dengan kategori/label yang dinamis). Hal ini memastikan sistem sangat mudah dimodifikasi atau diperluas di masa depan tanpa perlu merombak struktur database, baik nantinya digunakan untuk dokumentasi fasilitas kantor, penertiban lapangan, maupun perbandingan data kinerja lainnya.

#### 2. Modul Data Personel
* Menampilkan ringkasan dan daftar data kepegawaian:
  * Status Kepegawaian: **ASN** (Aparatur Sipil Negara) dan **P3K** (Pegawai Pemerintah dengan Perjanjian Kerja).
  * Pangkat dan Jabatan.
  * Pembagian Regu operasional.

#### 3. Modul Penegakan Perda `[Prioritas / ✔]`
* Menampilkan statistik dan rincian penegakan Peraturan Daerah (Perda):
  * Jenis pelanggaran yang ditemukan.
  * Lokasi kejadian pelanggaran.
  * Status dan bentuk tindak lanjut yang dilakukan.

#### 4. Modul Patroli `[Prioritas / ✔]`
* Menampilkan informasi kegiatan patroli rutin maupun insidental:
  * Jadwal pelaksanaan patroli.
  * Rute atau wilayah patroli.
  * Personel/regu yang bertugas.
  * Hasil temuan atau laporan ringkas patroli.

#### 5. Modul Tibumtranmas (Ketertiban Umum & Ketentraman Masyarakat)
* Menampilkan laporan terkait gangguan ketertiban umum dan ketentraman masyarakat.
* Menampilkan pemetaan atau daftar **Data Rawan** (area rawan gangguan ketertiban di wilayah Fakfak).

#### 6. Modul Pengaduan Masyarakat `[Prioritas / ✔]`
* Menampilkan statistik transparansi pengaduan:
  * Total jumlah aduan yang masuk.
  * Status penyelesaian aduan (Menunggu, Diproses, Selesai).
* *(Opsional)* Formulir pengaduan online bagi masyarakat.

#### 7. Modul Satlinmas (Satuan Perlindungan Masyarakat)
* Menampilkan data kekuatan dan aktivitas Satlinmas:
  * Jumlah anggota Satlinmas.
  * Data sebaran Pos Linmas.
  * Dokumentasi dan laporan kegiatan Satlinmas.

#### 8. Modul PPNS (Penyidik Pegawai Negeri Sipil)
* Menampilkan informasi terkait kegiatan pengawasan dan progres penyidikan perkara pelanggaran Perda oleh PPNS.

#### 9. Modul Kinerja & Anggaran (Transparansi Publik)
* **Sub-modul Kinerja:** Menampilkan Indikator Kinerja Utama (IKU), Target kinerja, Realisasi capaian, dan Persentase pencapaian.
* **Sub-modul Anggaran:** Menampilkan Pagu anggaran, Realisasi penyerapan anggaran, dan Sisa anggaran.

---

### B. Panel Admin (Manajemen Data & Unggah Konten)
Untuk mendukung tampilan data di atas, Admin membutuhkan fitur-fitur berikut:

1. **Sistem Autentikasi & Keamanan:**
   * Halaman Login khusus Admin dengan enkripsi password dan manajemen sesi.
2. **Manajemen Data Terpusat (CRUD):**
   * Formulir input data terstruktur untuk ke-9 modul di atas (Personel, Penegakan Perda, Patroli, Tibumtranmas, Pengaduan, Satlinmas, PPNS, Kinerja, Anggaran, serta Profil Before-After).
3. **Fitur Unggah Data Massal (Bulk Upload) & Lampiran:**
   * Kemampuan mengunggah data dalam format Excel/CSV (misalnya untuk data personel atau data anggaran yang banyak).
   * Kemampuan mengunggah foto dokumentasi (khususnya untuk foto *Sebelum* dan *Sesudah* pada menu Profil, serta bukti kegiatan Patroli/Penegakan Perda).
4. **Log Aktivitas (Audit Trail):**
   * Mencatat siapa admin yang mengunggah atau mengubah data beserta waktu pembaruannya.

---

## 4. Kebutuhan Non-Fungsional & Arsitektur Sistem
* **Arsitektur Modular & Skalabel (Maintainability):** Kode program dan skema database harus dibangun dengan pendekatan modular (misalnya pemisahan komponen UI dan penggunaan struktur data dinamis/JSON untuk atribut yang berpotensi berubah) agar mudah dimodifikasi dan dikembangkan di masa depan seiring bertambahnya kejelasan kebutuhan klien.
* **Responsif (Mobile-Friendly):** Tampilan website publik dan dashboard harus nyaman diakses melalui smartphone maupun komputer desktop.
* **Visualisasi Data:** Data statistik (seperti Pengaduan, Kinerja, Anggaran, dan Penegakan Perda) disajikan dalam bentuk grafik/diagram yang mudah dipahami masyarakat awam.
* **Keamanan Data:** Data sensitif personel (seperti NIK atau alamat pribadi) harus disaring agar hanya informasi publik (Nama, Status ASN/P3K, Pangkat, Jabatan, Regu) yang tampil di halaman depan.
* **Performa:** Waktu muat halaman maksimal 3 detik dengan optimasi ukuran gambar yang diunggah oleh Admin.