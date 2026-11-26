# Website Publik & Dashboard Informasi Satpol PP Kabupaten Fakfak

Portal informasi publik dan persiapan sistem dashboard Satuan Polisi Pamong Praja (Satpol PP) Kabupaten Fakfak. Spesifikasi lengkap sistem tersedia di [`docs/requirements.md`](docs/requirements.md).

## Struktur Direktori

```text
satpol-pp-fakfak/
├── index.html                                  # Halaman Utama (Beranda)
├── README.md                                   # Dokumentasi struktur proyek
├── docs/
│   └── requirements.md                         # Dokumen Kebutuhan Sistem (SRS)
├── pages/                                      # Halaman Portal Publik (kebab-case)
│   ├── profil.html                             # Modul 1: Profil & Dokumentasi Before-After
│   ├── berita.html                             # Berita & Kegiatan
│   ├── layanan.html                            # Pusat Layanan Publik
│   ├── informasi-perda.html                    # Modul 3: Informasi & Penegakan Perda
│   ├── patroli.html                            # Modul 4: Jadwal & Laporan Patroli (placeholder)
│   ├── peta.html                               # Modul 5: Peta Tibumtranmas & Data Rawan
│   ├── pengaduan.html                          # Modul 6: Pengaduan Masyarakat (placeholder)
│   ├── damkar.html                             # Bidang Damkar & Penyelamatan
│   ├── informasi-layanan.html                  # Informasi Layanan (placeholder)
│   ├── kontak.html                             # Kontak Layanan (placeholder)
│   └── galeri.html                             # Galeri Dokumentasi (placeholder)
├── admin/                                      # Direktori Panel Admin / CMS (sesuai SRS Bagian B)
└── assets/                                     # Seluruh aset statis
    ├── css/
    │   └── style.css                           # Stylesheet utama
    ├── js/                                     # Script modular (siap pengembangan)
    ├── docs/
    │   └── perda/                              # Dokumen PDF Peraturan Daerah
    └── images/
        ├── logos/                              # Logo Pemkab Fakfak & Satpol PP
        ├── hero/                               # Gambar latar hero section
        ├── profil/                             # Bagan struktur, peta kantor, & folder before-after/
        ├── berita/                             # Foto dokumentasi berita & kegiatan lapangan
        └── damkar/                             # Foto dokumentasi kegiatan Damkar
```

## Konvensi Penamaan
- Seluruh file halaman dan aset menggunakan format **lowercase `kebab-case`** (tanpa spasi, tanpa karakter ganda).
- Entry point utama (`index.html`) tetap berada di root agar dapat langsung dibuka atau di-deploy pada static hosting.
