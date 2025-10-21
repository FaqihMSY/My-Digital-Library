# Rangkuman Materi IF3140 - Performance Tuning

## Overview

- **Definisi**: Optimasi penggunaan sumber daya untuk meningkatkan throughput dan meminimalkan kontensi, memungkinkan beban kerja maksimum diproses.
- **Tuning Levels**:
  - **Higher Level Database Design**: Skema fisik (indeks, view materialisasi, splitting horizontal), query, transaksi, dan skema logis.
  - **Database System Parameters**: Atur ukuran buffer untuk minimalkan I/O disk, atur interval checkpoint untuk batasi ukuran log.
  - **Hardware**: Tambah disk untuk percepat I/O, tambah memori untuk tingkatkan hit buffer, ganti ke prosesor lebih cepat.
- **Fokus Tuning**: Minimalkan I/O disk karena menjadi bottleneck utama.

| **Parameter**      | **HDD**       | **SSD**       |
|---------------------|---------------|---------------|
| Ukuran sektor/sel  | 512 B         | 2 B           |
| Ukuran blok/halaman| 4 KB          | 4 KB          |
| Waktu baca blok acak| 10 ms (5-20 ms akses, 0.1 ms transfer) | 0.1 ms |
| Waktu akses blok di memori | ~100 ns      | ~100 ns       |

### Contoh Soal Latihan

1. **Kasus**: Sebuah aplikasi web mengalami penundaan saat mengakses data. Apa yang bisa dilakukan untuk meningkatkan performa berdasarkan tuning level?
   - **Jawaban**: Periksa skema fisik (tambahkan indeks), optimalkan parameter sistem (tingkatkan ukuran buffer), atau tingkatkan hardware (tambahkan disk/memori).
2. **Kasus**: Database sering bottleneck di I/O disk. Bagaimana cara mengatasinya?
   - **Jawaban**: Gunakan SSD untuk waktu akses lebih cepat (0.1 ms vs 10 ms HDD) atau tambah memori untuk kurangi akses disk.
3. **Kasus**: Performa query menurun karena data besar. Apa solusi tuning yang tepat?
   - **Jawaban**: Tambahkan indeks pada kolom yang sering di-query atau gunakan splitting horizontal untuk bagi data.

## Index + Schema Tuning

- **Index**: Struktur data untuk percepat akses data, menggunakan search key dan pointer.
- **Index Tuning**: Pilih tipe indeks (clustered/hash/tree, dinamis/statis, padat/sparse) berdasarkan kebutuhan.
- **Schema Tuning**:
  - **Splitting**: Pisah tabel secara horizontal (berdasarkan baris) atau vertikal (berdasarkan kolom).
  - **Denormalization**: Tambah kolom redundan atau undo dekomposisi ke normal form lebih rendah.

| **Metode**         | **Keuntungan**              | **Kekurangan**            |
|---------------------|-----------------------------|---------------------------|
| Splitting Horizontal| Kurangi data yang diproses  | Kompleksitas aplikasi     |
| Denormalization    | Percepat query              | Risiko inkonsistensi data |

### Contoh Soal Latihan

1. **Kasus**: Tabel besar menyebabkan query lambat. Apa yang bisa dilakukan dengan indeks?
   - **Jawaban**: Buat indeks clustered pada kolom yang sering di-sort atau indeks hash untuk pencarian cepat.
2. **Kasus**: Data duplikat meningkatkan performa query. Teknik schema apa yang digunakan?
   - **Jawaban**: Denormalization dengan tambah kolom redundan atau gabung tabel.
3. **Kasus**: Aplikasi butuh akses data regional saja. Solusi schema apa yang cocok?
   - **Jawaban**: Gunakan splitting horizontal untuk pisah data berdasarkan wilayah.

## Query Tuning

- **Query Plan**: Gunakan EXPLAIN untuk lihat rencana eksekusi, ANALYZE untuk perbarui statistik.
- **Set Orientation**: Gabungkan query berulang dengan parameter berbeda untuk kurangi panggilan database.
- **Tips**: Tulis ulang subquery kompleks jadi join, gunakan hint optimizer jika perlu.

### Contoh Soal Latihan

1. **Kasus**: Query dengan subquery lambat. Bagaimana mengoptimalkannya?
   - **Jawaban**: Tulis ulang jadi join untuk percepat eksekusi.
2. **Kasus**: Statistik query sudah lama tidak diperbarui. Apa yang harus dilakukan?
   - **Jawaban**: Jalankan ANALYZE untuk perbarui statistik.
3. **Kasus**: Aplikasi sering panggil query serupa dengan nilai berbeda. Solusi apa yang tepat?
   - **Jawaban**: Gunakan set orientation dengan satu query untuk semua nilai.

## Transaction Tuning

- **Masalah Long Transaction**: Sebabkan kontensi lock dan panjang waktu pemulihan.
- **Solusi**:
  - Gunakan multi-version concurrency control (e.g., snapshot Oracle).
  - Gunakan cursor-stability untuk transaksi baca panjang.
  - Bagi transaksi besar jadi mini-batch untuk batasi update.

### Contoh Soal Latihan

1. **Kasus**: Transaksi baca besar bentrok dengan update. Apa solusi terbaik?
   - **Jawaban**: Gunakan multi-version concurrency control.
2. **Kasus**: Transaksi update memenuhi log. Bagaimana mengatasinya?
   - **Jawaban**: Pisah jadi mini-batch untuk kurangi beban log.
3. **Kasus**: Perlu hasil transaksi baca mendekati real-time. Teknik apa yang digunakan?
   - **Jawaban**: Gunakan cursor-stability meskipun hasilnya kira-kira.

## Hardware Tuning

- **Strategi**: Tambah disk untuk percepat I/O, tingkatkan memori untuk kurangi akses disk.
- **Five-Minute Rule**: Data diakses setiap 400 detik atau kurang layak disimpan di memori (berdasarkan harga 1987).
- **One-Minute Rule**: Data akses berurutan setiap 1 menit layak di memori.
- **RAID**:
  - **RAID 0**: Striping untuk percepat baca, tanpa toleransi fault.
  - **RAID 1**: Mirroring untuk toleransi fault, butuh disk lebih.
  - **RAID 5**: Parity untuk toleransi 1 kegagalan, efisien untuk baca banyak.
  - **RAID 10**: Kombinasi striping dan mirroring, cepat dan toleran fault.

| **RAID Level** | **I/O Baca** | **I/O Tulis** | **Toleransi Fault** |
|----------------|--------------|---------------|---------------------|
| RAID 0         | Cepat        | Cepat         | Tidak ada           |
| RAID 1         | Cepat        | Sedang (2w)   | Ada (mirroring)     |
| RAID 5         | Cepat        | Lambat (4w)   | Ada (1 kegagalan)   |
| RAID 10        | Cepat        | Sedang (2w)   | Ada (mirroring)     |

### Contoh Soal Latihan

1. **Kasus**: Sistem butuh kecepatan tinggi dan toleransi fault. RAID apa yang dipilih?
   - **Jawaban**: RAID 10 untuk kombinasi striping dan mirroring.
2. **Kasus**: Banyak operasi tulis, tapi anggaran terbatas. RAID apa yang cocok?
   - **Jawaban**: RAID 5 karena efisien dengan parity, meskipun tulis lambat.
3. **Kasus**: Data diakses setiap 300 detik. Apakah layak di memori?
   - **Jawaban**: Ya, berdasarkan five-minute rule (400 detik).

## Performance Benchmark

- **Definisi**: Kumpulan tugas untuk ukur performa sistem database.
- **Metrik**: Throughput (transaksi/detik), response time, availability.
- **TPC Benchmark**:
  - **TPC-C**: Standar OLTP untuk sistem inventori.
  - **TPC-H**: Ad hoc query dengan fokus agregasi.
  - **TPC-R**: Laporan dengan view dan indeks bebas.
- **Rumus Throughput Rata-rata**: Gunakan harmonic mean dari tps tiap transaksi.

### Contoh Soal Latihan

1. **Kasus**: Sistem punya throughput 99 tps (A) dan 1 tps (B) dengan campuran sama. Hitung throughput rata-rata.
   - **Jawaban**: Harmonic mean = 2 / (1/99 + 1/1) ≈ 1.98 tps.
2. **Kasus**: Perlu benchmark untuk query ad hoc. Gunakan yang mana?
   - **Jawaban**: TPC-H karena fokus pada query yang tidak diketahui sebelumnya.
3. **Kasus**: Sistem inventori butuh benchmark. Pilih yang tepat.
   - **Jawaban**: TPC-C sebagai standar OLTP.

## Daftar Istilah Penting

- **Throughput**: Jumlah transaksi yang diproses per detik.
- **Contention**: Persaingan sumber daya yang menyebabkan penundaan.
- **Workload**: Kumpulan query dan update yang menjadi fokus tuning.
- **Index**: Struktur data untuk percepat pencarian data.
- **Denormalization**: Proses tambah redundansi untuk tingkatkan performa.
- **RAID**: Teknik organisasi disk untuk kapasitas, kecepatan, dan reliabilitas.
- **Benchmark**: Uji performa sistem dengan serangkaian tugas.

## Glossarium

- **ER**: Entity-Relationship (desain basis data).
- **BCNF**: Boyce-Codd Normal Form (tingkat normalisasi).
- **OLTP**: Online Transaction Processing (proses transaksi online).
- **OLAP**: Online Analytical Processing (analisis data online).
- **TPC**: Transaction Processing Council (organisasi benchmark).
