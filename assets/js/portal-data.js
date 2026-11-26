window.SATPOL_DATA = {
    beforeAfter: [
        {
            id: 'ba-01',
            kategori: 'Penertiban Lapangan',
            judul: 'Penataan Kawasan Trotoar Jalan Dr. Salasa',
            tanggal: 'Mei 2026',
            lokasi: 'Jalan Dr. Salasa, Fakfak Tengah',
            sebelum: {
                judul: 'Sebelum Penertiban',
                deskripsi: 'Sebagian badan jalan dan trotoar dipadati lapak tidak beraturan sehingga menyempitkan jalur pejalan kaki dan memicu kemacetan pagi hari.',
                foto: '../assets/images/berita/penertiban-lapak-pkl.jpeg',
                metrik: [
                    { label: 'Lapak di Trotoar', nilai: '34 Unit' },
                    { label: 'Lebar Akses Pejalan Kaki', nilai: '0,6 m' }
                ]
            },
            sesudah: {
                judul: 'Sesudah Penertiban',
                deskripsi: 'Pedagang direlokasi ke zona pasar yang telah ditetapkan secara persuasif. Trotoar kembali bersih, tertata, dan aman dilalui masyarakat.',
                foto: '../assets/images/berita/himbauan-arahan-penertiban.jpeg',
                metrik: [
                    { label: 'Lapak di Trotoar', nilai: '0 Unit' },
                    { label: 'Lebar Akses Pejalan Kaki', nilai: '2,2 m' }
                ]
            }
        },
        {
            id: 'ba-02',
            kategori: 'Penanganan Lapangan',
            judul: 'Pemulihan Jalur Pipa Distribusi Air Bersih',
            tanggal: 'September 2026',
            lokasi: 'Kampung Air Besar, Fakfak',
            sebelum: {
                judul: 'Sebelum Penanganan',
                deskripsi: 'Jaringan pipa penyalur mengalami kebocoran dan sambungan ilegal sehingga pasokan air bersih ke permukiman warga terganggu.',
                foto: '../assets/images/berita/penertiban-air-ilegal-tirta-pala.jpeg',
                metrik: [
                    { label: 'Titik Kebocoran/Ilegal', nilai: '7 Titik' },
                    { label: 'Distribusi Air', nilai: '45%' }
                ]
            },
            sesudah: {
                judul: 'Sesudah Penanganan',
                deskripsi: 'Satpol PP bersama tim teknis menertibkan pengambilan air ilegal dan membenahi jalur pipa utama sepanjang 2,5 km menuju permukiman.',
                foto: '../assets/images/berita/penanganan-krisis-air.jpeg',
                metrik: [
                    { label: 'Titik Kebocoran/Ilegal', nilai: '0 Titik' },
                    { label: 'Distribusi Air', nilai: '95%' }
                ]
            }
        },
        {
            id: 'ba-03',
            kategori: 'Kinerja Operasional',
            judul: 'Transformasi Sistem Pelaporan & Respon Aduan',
            tanggal: '2025 - 2026',
            lokasi: 'Kantor Satpol PP Kabupaten Fakfak',
            sebelum: {
                judul: 'Sebelum Digitalisasi (2025)',
                deskripsi: 'Pencatatan aduan masyarakat dilakukan secara manual di buku piket sehingga pelacakan progres penanganan memerlukan waktu lebih lama.',
                foto: '../assets/images/profil/peta-lokasi-kantor.jpeg',
                metrik: [
                    { label: 'Rata-rata Respon', nilai: '48 Jam' },
                    { label: 'Transparansi Publik', nilai: 'Manual' }
                ]
            },
            sesudah: {
                judul: 'Sesudah SIBISTER (2026)',
                deskripsi: 'Aduan tercatat terstruktur melalui portal publik dengan kode tiket, status penanganan transparan, dan koordinasi cepat antar regu.',
                foto: '../assets/images/berita/serah-terima-trantibum.jpeg',
                metrik: [
                    { label: 'Rata-rata Respon', nilai: '< 6 Jam' },
                    { label: 'Transparansi Publik', nilai: 'Realtime' }
                ]
            }
        }
    ],

    personel: [
        { nama: 'Anggelina Sirfefa, S.S.T.P., M.Si.', status: 'ASN', pangkat: 'Pembina Utama Muda (IV/c)', jabatan: 'Kepala Satpol PP', regu: 'Pimpinan' },
        { nama: 'Yusuf Rumagesan, S.Sos.', status: 'ASN', pangkat: 'Pembina (IV/a)', jabatan: 'Sekretaris Dinas', regu: 'Sekretariat' },
        { nama: 'Hendra Patiran, S.H.', status: 'ASN', pangkat: 'Penata Tk. I (III/d)', jabatan: 'Kasi Penegakan Perda', regu: 'Bidang Gakda' },
        { nama: 'Marius Hindom, S.IP.', status: 'ASN', pangkat: 'Penata Tk. I (III/d)', jabatan: 'Kasi Ketertiban Umum', regu: 'Regu I (Kota)' },
        { nama: 'Siti Rahma Bauw, S.E.', status: 'ASN', pangkat: 'Penata (III/c)', jabatan: 'Kasi Perlindungan Masyarakat', regu: 'Bidang Linmas' },
        { nama: 'Abdul Karim Hegemur', status: 'ASN', pangkat: 'Penata Muda Tk. I (III/b)', jabatan: 'Komandan Regu Patroli', regu: 'Regu I (Kota)' },
        { nama: 'Petrus Iba', status: 'ASN', pangkat: 'Penata Muda (III/a)', jabatan: 'Komandan Regu Patroli', regu: 'Regu II (Pasar & Pelabuhan)' },
        { nama: 'Muhammad Iqbal Kabes', status: 'P3K', pangkat: 'Golongan VII', jabatan: 'Anggota Patroli Trantibum', regu: 'Regu I (Kota)' },
        { nama: 'Yohanes Kambu', status: 'P3K', pangkat: 'Golongan VII', jabatan: 'Anggota Patroli Trantibum', regu: 'Regu II (Pasar & Pelabuhan)' },
        { nama: 'Nurhayati Woretma', status: 'P3K', pangkat: 'Golongan VII', jabatan: 'Petugas Layanan Pengaduan', regu: 'Unit Reaksi Cepat' },
        { nama: 'Rizaldy Namudat', status: 'P3K', pangkat: 'Golongan VII', jabatan: 'Anggota Unit Reaksi Cepat', regu: 'Unit Reaksi Cepat' },
        { nama: 'Aloysius Tuturop', status: 'ASN', pangkat: 'Pengatur Tk. I (II/d)', jabatan: 'Anggota Pengamanan Objek Vital', regu: 'Regu III (Pengamanan)' },
        { nama: 'Fadilah Uswanas', status: 'P3K', pangkat: 'Golongan VII', jabatan: 'Staf Administrasi Operasi', regu: 'Sekretariat' },
        { nama: 'Daud Weripang', status: 'P3K', pangkat: 'Golongan VII', jabatan: 'Anggota Pengamanan Wilayah', regu: 'Regu III (Pengamanan)' },
        { nama: 'Rony Rumbobiar', status: 'ASN', pangkat: 'Penata Muda (III/a)', jabatan: 'Penyidik Pegawai Negeri Sipil', regu: 'Bidang Gakda' },
        { nama: 'Bastian Temongmere', status: 'P3K', pangkat: 'Golongan VII', jabatan: 'Anggota Unit Reaksi Cepat', regu: 'Unit Reaksi Cepat' }
    ],

    personelRingkasan: {
        total: 272,
        asn: 118,
        p3k: 154,
        regu: 6
    },

    penegakanPerda: [
        { tanggal: '24 Mei 2026', perda: 'Perda No. 01/2022', jenis: 'Pelanggaran PKL / Trotoar', lokasi: 'Jl. Dr. Salasa, Fakfak Tengah', tindakLanjut: 'Penertiban & Relokasi Persuasif', status: 'Selesai' },
        { tanggal: '19 Mei 2026', perda: 'Perda No. 05/2022', jenis: 'Pembuangan Sampah Liar', lokasi: 'Pasar Thumburuni, Fakfak', tindakLanjut: 'Teguran Tertulis & Pembinaan', status: 'Selesai' },
        { tanggal: '15 Mei 2026', perda: 'Perda No. 03/2023', jenis: 'Usaha Tanpa Izin Operasional', lokasi: 'Distrik Fakfak Barat', tindakLanjut: 'Pemanggilan & Pemeriksaan PPNS', status: 'Diproses' },
        { tanggal: '11 Mei 2026', perda: 'Perda No. 08/2023', jenis: 'Bangunan Melanggar Garis Sempadan', lokasi: 'Jl. Izak Telussa, Wagom', tindakLanjut: 'Surat Peringatan II', status: 'Peringatan' },
        { tanggal: '06 Mei 2026', perda: 'Perda No. 01/2022', jenis: 'Pengambilan Air Ilegal', lokasi: 'Kampung Air Besar', tindakLanjut: 'Penghentian & Pembongkaran Pipa', status: 'Selesai' },
        { tanggal: '02 Mei 2026', perda: 'Perda No. 01/2022', jenis: 'Reklame / Spanduk Kedaluwarsa', lokasi: 'Bundaran Satu Tungku Tiga Batu', tindakLanjut: 'Pencopotan & Penertiban', status: 'Selesai' },
        { tanggal: '27 Apr 2026', perda: 'Perda No. 03/2023', jenis: 'Peredaran Minuman Beralkohol Ilegal', lokasi: 'Kawasan Pelabuhan Fakfak', tindakLanjut: 'Penyitaan Barang Bukti & BAP', status: 'Diproses' },
        { tanggal: '20 Apr 2026', perda: 'Perda No. 01/2022', jenis: 'Gangguan Ketertiban Malam Hari', lokasi: 'Kelurahan Fakfak Selatan', tindakLanjut: 'Pembinaan di Tempat', status: 'Selesai' }
    ],

    patroli: [
        { tanggal: '26 Nov 2026', waktu: '08:00 - 12:00 WIT', jenis: 'Rutin', rute: 'Jl. Dr. Salasa – Pasar Thumburuni – Pelabuhan', regu: 'Regu I (Kota)', personel: 14, temuan: '3 lapak melewati garis batas trotoar, diberikan himbauan persuasif dan langsung dirapikan.', status: 'Selesai' },
        { tanggal: '26 Nov 2026', waktu: '20:00 - 23:30 WIT', jenis: 'Rutin', rute: 'Pusat Kota – Wagom – Taman Satu Tungku Tiga Batu', regu: 'Regu II (Malam)', personel: 12, temuan: 'Situasi kondusif, dilakukan dialog kamtibmas bersama warga dan petugas jaga malam.', status: 'Dijadwalkan' },
        { tanggal: '25 Nov 2026', waktu: '14:00 - 17:00 WIT', jenis: 'Insidental', rute: 'Kampung Air Besar – Jalur Pipa Tirta Pala', regu: 'Unit Reaksi Cepat', personel: 10, temuan: 'Pengecekan pascapenertiban sambungan air ilegal; tidak ditemukan pelanggaran baru.', status: 'Selesai' },
        { tanggal: '24 Nov 2026', waktu: '09:00 - 13:00 WIT', jenis: 'Rutin', rute: 'Distrik Fakfak Utara – Area Perkantoran Pemda', regu: 'Regu III (Pengamanan)', personel: 12, temuan: 'Pengawasan disiplin fasilitas umum dan penertiban parkir liar di bahu jalan.', status: 'Selesai' },
        { tanggal: '22 Nov 2026', waktu: '21:00 - 01:00 WIT', jenis: 'Insidental', rute: 'Gabungan TNI/Polri — Fakfak Tengah & Selatan', regu: 'Tim Gabungan', personel: 22, temuan: 'Patroli cipta kondisi akhir pekan; 1 kelompok remaja dibubarkan secara humanis.', status: 'Selesai' },
        { tanggal: '20 Nov 2026', waktu: '08:30 - 12:00 WIT', jenis: 'Rutin', rute: 'Distrik Pariwari – Pasar Dulanpokpok', regu: 'Regu II (Pasar & Pelabuhan)', personel: 11, temuan: 'Penataan akses pintu masuk pasar dan edukasi kebersihan kepada pedagang.', status: 'Selesai' }
    ],

    pengaduanDefault: [
        { kode: 'ADU-2026-008', tanggal: '25 Nov 2026', kategori: 'Ketertiban Umum', lokasi: 'Jl. Dr. Salasa', ringkasan: 'Lapak pedagang menutup sebagian jalur pejalan kaki di depan pertokoan.', status: 'Diproses' },
        { kode: 'ADU-2026-007', tanggal: '23 Nov 2026', kategori: 'Kebisingan / Keramaian', lokasi: 'Kelurahan Wagom', ringkasan: 'Laporan kebisingan musik hingga larut malam di area permukiman warga.', status: 'Selesai' },
        { kode: 'ADU-2026-006', tanggal: '21 Nov 2026', kategori: 'Bangunan & Reklame', lokasi: 'Simpang Tiga Kota', ringkasan: 'Baliho rusak dan miring berpotensi membahayakan pengendara.', status: 'Selesai' },
        { kode: 'ADU-2026-005', tanggal: '19 Nov 2026', kategori: 'Lingkungan & Sampah', lokasi: 'Pasar Thumburuni', ringkasan: 'Penumpukan sampah di luar jam angkut pada sudut pasar.', status: 'Selesai' },
        { kode: 'ADU-2026-004', tanggal: '18 Nov 2026', kategori: 'Ketertiban Umum', lokasi: 'Pelabuhan Fakfak', ringkasan: 'Parkir kendaraan bermotor menghalangi akses keluar masuk barang.', status: 'Menunggu' },
        { kode: 'ADU-2026-003', tanggal: '15 Nov 2026', kategori: 'Pelanggaran Perda', lokasi: 'Distrik Fakfak Barat', ringkasan: 'Aktivitas usaha belum melengkapi izin operasional setempat.', status: 'Diproses' },
        { kode: 'ADU-2026-002', tanggal: '12 Nov 2026', kategori: 'Ketertiban Umum', lokasi: 'Kampung Air Besar', ringkasan: 'Dugaan penyadapan pipa air bersih secara ilegal.', status: 'Selesai' },
        { kode: 'ADU-2026-001', tanggal: '09 Nov 2026', kategori: 'Bangunan & Reklame', lokasi: 'Jl. Yos Sudarso', ringkasan: 'Spanduk promosi kedaluwarsa terpasang di tiang listrik.', status: 'Selesai' }
    ],

    tibumtranmasRawan: [
        { nama: 'Kawasan Pasar Thumburuni', distrik: 'Fakfak', jenis: 'Kepadatan PKL & Parkir Liar', tingkat: 'Tinggi', status: 'Patroli Harian', lat: -2.9265, lng: 132.2975 },
        { nama: 'Koridor Jl. Dr. Salasa', distrik: 'Fakfak Tengah', jenis: 'Penggunaan Trotoar & Kemacetan', tingkat: 'Sedang', status: 'Pemantauan Rutin', lat: -2.9220, lng: 132.3010 },
        { nama: 'Area Pelabuhan Fakfak', distrik: 'Fakfak', jenis: 'Ketertiban Bongkar Muat & Malam Hari', tingkat: 'Tinggi', status: 'Patroli Gabungan', lat: -2.9315, lng: 132.2950 },
        { nama: 'Simpang Wagom & Taman Kota', distrik: 'Pariwari', jenis: 'Keramaian Malam & Reklame Liar', tingkat: 'Sedang', status: 'Patroli Malam', lat: -2.9140, lng: 132.2860 },
        { nama: 'Jalur Pipa Kampung Air Besar', distrik: 'Fakfak Timur', jenis: 'Pengambilan Air Ilegal', tingkat: 'Rendah', status: 'Terkendali', lat: -2.9190, lng: 132.3180 }
    ],

    satlinmas: {
        ringkasan: { anggota: 486, posLinmas: 42, distrik: 17, kegiatan: 19 },
        pos: [
            { namaPos: 'Pos Linmas Kelurahan Fakfak Selatan', distrik: 'Fakfak', anggota: 42, kondisi: 'Aktif & Siaga', penanggungJawab: 'Komandan Regu Linmas I' },
            { namaPos: 'Pos Linmas Kelurahan Fakfak Utara', distrik: 'Fakfak', anggota: 38, kondisi: 'Aktif & Siaga', penanggungJawab: 'Komandan Regu Linmas II' },
            { namaPos: 'Pos Linmas Kelurahan Wagom', distrik: 'Pariwari', anggota: 45, kondisi: 'Aktif & Siaga', penanggungJawab: 'Komandan Regu Linmas III' },
            { namaPos: 'Pos Linmas Dulanpokpok', distrik: 'Pariwari', anggota: 34, kondisi: 'Aktif & Siaga', penanggungJawab: 'Komandan Regu Linmas IV' },
            { namaPos: 'Pos Linmas Kokas Kota', distrik: 'Kokas', anggota: 36, kondisi: 'Aktif & Siaga', penanggungJawab: 'Komandan Regu Linmas V' },
            { namaPos: 'Pos Linmas Bomberay SP2', distrik: 'Bomberay', anggota: 32, kondisi: 'Aktif & Siaga', penanggungJawab: 'Komandan Regu Linmas VI' },
            { namaPos: 'Pos Linmas Karas', distrik: 'Karas', anggota: 28, kondisi: 'Perlu Penguatan', penanggungJawab: 'Komandan Regu Linmas VII' },
            { namaPos: 'Pos Linmas Fakfak Tengah', distrik: 'Fakfak Tengah', anggota: 40, kondisi: 'Aktif & Siaga', penanggungJawab: 'Komandan Regu Linmas VIII' }
        ],
        kegiatan: [
            { judul: 'Pembinaan Kesiapsiagaan Bencana & Pengamanan Lingkungan', tanggal: '14 Okt 2026', lokasi: 'Distrik Pariwari', peserta: '65 Anggota Satlinmas', gambar: '../assets/images/damkar/edukasi-armada-damkar-sp2-bomberay.jpeg' },
            { judul: 'Apel Gabungan Pengamanan Hari Besar Daerah', tanggal: '28 Sep 2026', lokasi: 'Lapangan Pemda Fakfak', peserta: '120 Anggota Satlinmas', gambar: '../assets/images/berita/serah-terima-trantibum.jpeg' },
            { judul: 'Sinergi Patroli Kampung Bersama Babinsa & Bhabinkamtibmas', tanggal: '10 Sep 2026', lokasi: 'Distrik Kokas', peserta: '36 Anggota Satlinmas', gambar: '../assets/images/berita/himbauan-arahan-penertiban.jpeg' }
        ]
    },

    ppns: [
        { nomor: 'LP-PPNS/01/2026', perkara: 'Usaha Perdagangan Tanpa Izin Daerah', perda: 'Perda No. 03/2023', lokasi: 'Distrik Fakfak Barat', penyidik: 'Rony Rumbobiar (PPNS)', tahap: 'Pemeriksaan Saksi & BAP', progres: 65, status: 'Penyidikan' },
        { nomor: 'LP-PPNS/02/2026', perkara: 'Pengambilan Air Bersih Ilegal Skala Komersial', perda: 'Perda No. 01/2022', lokasi: 'Kampung Air Besar', penyidik: 'Hendra Patiran, S.H.', tahap: 'Selesai / Putusan Sanksi Administratif', progres: 100, status: 'Selesai' },
        { nomor: 'LP-PPNS/03/2026', perkara: 'Pelanggaran Garis Sempadan Bangunan', perda: 'Perda No. 08/2023', lokasi: 'Jl. Izak Telussa, Wagom', penyidik: 'Rony Rumbobiar (PPNS)', tahap: 'Pengawasan & Verifikasi Lapangan', progres: 35, status: 'Pengawasan' },
        { nomor: 'LP-PPNS/04/2026', perkara: 'Peredaran Minuman Beralkohol Tanpa Izin', perda: 'Perda No. 03/2023', lokasi: 'Kawasan Pelabuhan Fakfak', penyidik: 'Tim PPNS & Korwas Polri', tahap: 'Pemberkasan Sidang Tipiring', progres: 85, status: 'Penyidikan' },
        { nomor: 'LP-PPNS/05/2026', perkara: 'Pembuangan Limbah Usaha ke Saluran Umum', perda: 'Perda No. 05/2022', lokasi: 'Fakfak Tengah', penyidik: 'Hendra Patiran, S.H.', tahap: 'Selesai / Pembinaan & Pemulihan', progres: 100, status: 'Selesai' }
    ],

    kinerja: [
        { iku: 'Persentase Penegakan Peraturan Daerah yang Ditindaklanjuti', satuan: '%', target: 90, realisasi: 86 },
        { iku: 'Persentase Gangguan Trantibum yang Diselesaikan', satuan: '%', target: 92, realisasi: 94 },
        { iku: 'Persentase Penyelesaian Pengaduan Masyarakat', satuan: '%', target: 95, realisasi: 89 },
        { iku: 'Cakupan Patroli Wilayah Rawan Ketertiban', satuan: '%', target: 85, realisasi: 88 },
        { iku: 'Tingkat Kesiapsiagaan Anggota Satlinmas di Distrik', satuan: '%', target: 80, realisasi: 82 },
        { iku: 'Indeks Kepuasan Masyarakat terhadap Layanan Satpol PP', satuan: 'Poin', target: 85, realisasi: 87 }
    ],

    anggaran: [
        { program: 'Program Peningkatan Ketenteraman dan Ketertiban Umum', pagu: 2450000000, realisasi: 2082500000 },
        { program: 'Program Penegakan Peraturan Daerah dan Perkada', pagu: 1350000000, realisasi: 1120500000 },
        { program: 'Program Pembinaan & Pemberdayaan Satlinmas', pagu: 980000000, realisasi: 793800000 },
        { program: 'Program Pencegahan & Penanggulangan Kebakaran (Damkar)', pagu: 1850000000, realisasi: 1554000000 },
        { program: 'Program Penunjang Urusan Pemerintahan Daerah (Operasional)', pagu: 1620000000, realisasi: 1425600000 }
    ],

    galeri: [
        { judul: 'Penertiban PKL di Jalan Dr. Salasa', kategori: 'Penertiban', tanggal: '24 Mei 2026', gambar: '../assets/images/berita/penertiban-lapak-pkl.jpeg' },
        { judul: 'Himbauan & Arahan Penertiban Lapangan', kategori: 'Penertiban', tanggal: '26 Mei 2025', gambar: '../assets/images/berita/himbauan-arahan-penertiban.jpeg' },
        { judul: 'Penertiban Pengambilan Air Ilegal Tirta Pala', kategori: 'Penertiban', tanggal: '06 Mei 2026', gambar: '../assets/images/berita/penertiban-air-ilegal-tirta-pala.jpeg' },
        { judul: 'Serah Terima Tugas Anggota Trantibum', kategori: 'Kegiatan', tanggal: '08 September 2026', gambar: '../assets/images/berita/serah-terima-trantibum.jpeg' },
        { judul: 'Dukungan Penanganan Krisis Air Bersih', kategori: 'Kegiatan', tanggal: '05 September 2026', gambar: '../assets/images/berita/penanganan-krisis-air.jpeg' },
        { judul: 'Edukasi & Pengenalan Armada Damkar SP2 Bomberay', kategori: 'Damkar', tanggal: '16 Mei 2025', gambar: '../assets/images/damkar/edukasi-armada-damkar-sp2-bomberay.jpeg' },
        { judul: 'Monumen Satu Tungku Tiga Batu Kabupaten Fakfak', kategori: 'Profil', tanggal: '2026', gambar: '../assets/images/hero/satu-tungku-tiga-batu.jpg' },
        { judul: 'Bagan Struktur Organisasi Satpol PP Fakfak', kategori: 'Profil', tanggal: '2026', gambar: '../assets/images/profil/struktur-organisasi.jpeg' }
    ]
};
