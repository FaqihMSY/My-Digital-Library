# IF3140 – Sistem Basis Data: Query Processing

## Basic Steps in Query Processing

- **Parsing and translation**
  - Terjemahkan query ke bentuk internal, lalu ke relational algebra
  - Periksa sintaks dan verifikasi relasi
- **Optimization**
  - Pilih rencana evaluasi dengan biaya terendah berdasarkan statistik
  - Gunakan berbagai algoritma untuk operasi relational algebra
- **Evaluation**
  - Mesin eksekusi menjalankan rencana evaluasi dan kembalikan hasil

### Contoh Soal Latihan

1. **Studi Kasus**: Diberikan query `σ_salary<75000(π_salary(instructor))`, jelaskan langkah optimasi yang bisa dilakukan.  
   **Jawaban**: Ubah ke `π_salary(σ_salary<75000(instructor))` dan gunakan indeks pada salary untuk efisiensi.
2. **Studi Kasus**: Jika sebuah query dieksekusi tanpa optimasi, apa yang terjadi pada performa?  
   **Jawaban**: Performa menurun karena setiap kombinasi tuple diuji, meningkatkan biaya disk I/O.
3. **Studi Kasus**: Bagaimana cara memilih rencana evaluasi terbaik?  
   **Jawaban**: Berdasarkan estimasi biaya menggunakan statistik seperti jumlah tuple dan ukuran blok.

## Measures of Query Cost

- **Biaya** diukur sebagai total waktu untuk menjawab query
- **Faktor biaya** meliputi akses disk, CPU, dan komunikasi jaringan
- **Estimasi biaya** didominasi oleh akses disk
  - Jumlah seek × biaya seek rata-rata
  - Jumlah blok dibaca × biaya baca blok rata-rata
  - Jumlah blok ditulis × biaya tulis blok rata-rata
  - Biaya tulis lebih besar karena data dibaca ulang untuk verifikasi
- **Sederhananya**, gunakan jumlah transfer blok dan seek
  - Rumus: `b * tT + S * tS` (tT = waktu transfer blok, tS = waktu seek)
- **ABAikan** biaya CPU dan tulis output ke disk
- **Algoritma** bisa kurangi I/O disk dengan buffer tambahan
  - Jumlah memori bergantung pada query lain dan OS, hanya diketahui saat eksekusi
  - Gunakan estimasi terburuk dengan memori minimum
  - Data di buffer bisa hindari I/O, tapi sulit diestimasikan

### Contoh Soal Latihan

1. **Studi Kasus**: Jika sebuah query membutuhkan 100 blok dan 5 seek dengan tT = 1ms dan tS = 10ms, hitung biayanya.  
   **Jawaban**: `100 * 1 + 5 * 10 = 150ms`.
2. **Studi Kasus**: Mengapa biaya tulis blok lebih besar daripada baca?  
   **Jawaban**: Karena data dibaca ulang untuk memastikan tulis berhasil.
3. **Studi Kasus**: Bagaimana buffer tambahan memengaruhi biaya query?  
   **Jawaban**: Mengurangi I/O disk jika data sudah di buffer, tapi estimasi sulit.

## Selection Operation

- **File scan (A1 - linear search)**
  - Pindai setiap blok file dan uji semua record
  - Biaya: `br` blok transfer + 1 seek (br = jumlah blok relasi r)
  - Jika seleksi pada atribut kunci, hentikan saat record ditemukan: biaya ~ `br/2` + 1 seek
- **Tanpa ketergantungan** pada kondisi seleksi, urutan record, atau indeks
- **Catatan**: Pencarian biner tidak efektif kecuali ada indeks

### Tabel Perbandingan

| Metode            | Kondisi                | Biaya Estimasi           | Kelebihan                  |
|--------------------|------------------------|--------------------------|----------------------------|
| Linear Search (A1)| Semua kondisi          | `br + 1` seek            | Tidak perlu indeks         |
| Dengan Kunci      | Seleksi pada kunci     | `br/2 + 1` seek          | Hentikan saat cocok        |

### Contoh Soal Latihan

1. **Studi Kasus**: Sebuah relasi memiliki 50 blok, hitung biaya linear search jika seleksi pada kunci.  
   **Jawaban**: `50/2 + 1 = 26` blok transfer + 1 seek.
2. **Studi Kasus**: Mengapa pencarian biner tidak disarankan?  
   **Jawaban**: Data tidak tersimpan berurutan, membutuhkan lebih banyak seek daripada indeks.
3. **Studi Kasus**: Jika sebuah file tidak memiliki indeks, algoritma apa yang digunakan?  
   **Jawaban**: Linear search (A1).

## Sorting

- **Metode**:
  - Buat indeks untuk membaca relasi terurut, 1 blok akses per tuple
  - Gunakan quick-sort untuk relasi yang muat di memori
  - Gunakan external sort-merge untuk relasi besar
- **External Sort-Merge**
  - Buat run terurut dengan memori M blok
  - Gabungkan run dengan N-way merge (N < M)
  - Jika N ≥ M, butuh beberapa pass merge
- **Biaya**:
  - Transfer blok: `br (2 * [log(M/bb)-1 (br/M)] + 1)`
  - Seek: `2 [br/M] + [br/bb] (2 [log(M/bb)-1 (br/M)] - 1)` (bb = blok per run)

### Contoh Soal Latihan

1. **Studi Kasus**: Jika relasi 100 blok dengan memori 10 blok, hitung jumlah pass merge.  
   **Jawaban**: `[log(10/1)-1 (100/10)] = 2` pass.
2. **Studi Kasus**: Apa kelebihan external sort-merge?  
   **Jawaban**: Cocok untuk relasi besar yang tidak muat di memori.
3. **Studi Kasus**: Jika bb = 2 dan br = 50, hitung seek awal.  
   **Jawaban**: `2 [50/10] = 10` seek.

## Join Operation

- **Algoritma**:
  - Nested-loop join: Uji setiap pasangan tuple, mahal tanpa indeks
  - Block nested-loop join: Gabungkan blok, lebih efisien
  - Indexed nested-loop join: Gunakan indeks pada atribut join
  - Merge-join: Gabungkan relasi terurut
  - Hash-join: Partisi dengan fungsi hash
- **Biaya** (contoh: student 100 blok, takes 400 blok):
  - Nested-loop: `nr * bs + br` (misal 2,000,100 blok)
  - Block nested-loop: `br * bs + br` (40,100 blok)
  - Indexed nested-loop: `br + nr * c` (25,100 blok)
  - Merge-join: `br + bs` + biaya sort
  - Hash-join: `3(br + bs)` (1500 blok)

### Tabel Perbandingan

| Algoritma            | Kondisi               | Biaya Estimasi      | Kelebihan                  |
|-----------------------|-----------------------|---------------------|----------------------------|
| Nested-Loop          | Tanpa indeks          | `nr * bs + br`      | Fleksibel untuk kondisi    |
| Block Nested-Loop    | Dengan blok           | `br * bs + br`      | Efisien dengan memori      |
| Indexed Nested-Loop  | Ada indeks            | `br + nr * c`       | Cepat dengan indeks        |
| Merge-Join           | Relasi terurut        | `br + bs`           | Minim akses blok           |
| Hash-Join            | Equi-join             | `3(br + bs)`        | Efisien untuk partisi      |

### Contoh Soal Latihan

1. **Studi Kasus**: Hitung biaya nested-loop join untuk student (100 blok) dan takes (400 blok).  
   **Jawaban**: `5000 * 400 + 100 = 2,000,100` blok.
2. **Studi Kasus**: Kapan merge-join lebih baik daripada hash-join?  
   **Jawaban**: Jika relasi sudah terurut, hindari biaya sort.
3. **Studi Kasus**: Apa kelemahan hash-join?  
   **Jawaban**: Rentan overflow jika partisi tidak merata.

## Evaluation of Expressions

- **Materialization**
  - Eksekusi operasi satu per satu, simpan hasil sementara ke disk
  - Biaya tambah karena tulis/baca disk
- **Pipelining**
  - Proses operasi bersamaan, kirim tuple langsung ke operasi berikutnya
  - Lebih murah, tapi tidak cocok untuk sort atau hash-join
  - Tipe: demand-driven (lazy) atau producer-driven (eager)

### Contoh Soal Latihan

1. **Studi Kasus**: Bandingkan materialization dan pipelining untuk query sederhana.  
   **Jawaban**: Pipelining lebih cepat tanpa penyimpanan disk, materialization lebih lambat tapi selalu bisa digunakan.
2. **Studi Kasus**: Kapan pipelining tidak efektif?  
   **Jawaban**: Saat operasi seperti sort atau hash-join membutuhkan hasil lengkap.
3. **Studi Kasus**: Jelaskan demand-driven pipelining.  
   **Jawaban**: Operasi minta tuple dari anaknya saat dibutuhkan, simpan state untuk kelanjutan.

## Daftar Istilah Penting

- **Query Processing**: Proses mengubah query menjadi hasil menggunakan parsing, optimasi, dan evaluasi
- **Relational Algebra**: Bahasa matematis untuk manipulasi data relasional
- **Evaluation Plan**: Rencana terperinci untuk mengevaluasi ekspresi relational algebra
- **Query Optimization**: Pemilihan rencana evaluasi dengan biaya terendah
- **Disk I/O**: Input/output disk yang menjadi faktor utama biaya query
- **Seek**: Waktu untuk memindahkan head disk ke lokasi data
- **Block Transfer**: Waktu untuk membaca atau menulis satu blok data
- **Nested-Loop Join**: Algoritma join dengan pengulangan tuple
- **Merge-Join**: Algoritma join untuk relasi terurut
- **Hash-Join**: Algoritma join dengan partisi hash
- **Materialization**: Penyimpanan sementara hasil operasi ke disk
- **Pipelining**: Pengiriman tuple langsung ke operasi berikutnya

## Glossarium

- **tT**: Waktu transfer satu blok
- **tS**: Waktu untuk satu seek
- **br**: Jumlah blok relasi r
- **bs**: Jumlah blok relasi s
- **nr**: Jumlah record relasi r
