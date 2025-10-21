# Rangkuman Materi IF3140 - Sistem Basis Data: Indexing

**Waktu Belajar: 10 menit untuk materi, 10 menit untuk contoh soal**

## 1. Pengenalan Index

- **Index** digunakan untuk mempercepat akses ke data yang diinginkan
- **Contoh**: katalog penulis di perpustakaan
- **Search Key**: atribut atau kumpulan atribut untuk mencari record di file
- **Index file**: berisi entri index berbentuk `search-key | pointer`
- **Jenis indeks dasar**:
  - **Ordered indices**: kunci pencarian disimpan dalam urutan terurut
  - **Hash indices**: kunci pencarian didistribusikan merata ke "bucket" menggunakan fungsi hash

### Tabel Perbandingan

| Jenis Indeks       | Karakteristik                          |
|---------------------|----------------------------------------|
| Ordered Indices    | Kunci disimpan terurut                 |
| Hash Indices       | Kunci didistribusikan ke bucket via hash |

### Contoh Soal Latihan

1. **Kasus**: Sebuah perpustakaan ingin mencari buku berdasarkan nama penulis. Jenis indeks apa yang paling cocok dan mengapa?
   - **Jawaban**: Ordered indices, karena kunci (nama penulis) dapat disimpan terurut untuk pencarian cepat.
2. **Kasus**: Sistem database memiliki 1000 record dan ingin akses cepat berdasarkan ID unik. Apa yang perlu dibuat?
   - **Jawaban**: Index dengan search key pada ID, idealnya primary index untuk urutan sekuensial.
3. **Kasus**: Database memiliki atribut "status" (aktif/tidak aktif) untuk 5000 record. Bagaimana cara efisien mencari record "aktif"?
   - **Jawaban**: Gunakan hash index dengan fungsi hash pada nilai "aktif" untuk distribusi cepat.

## 2. Fungsi dan Evaluasi Index

- **Fungsi index**: mendukung akses efisien ke data, mempermudah pencarian, pengurutan, operasi join, dll., tanpa memindai seluruh baris tabel
- **Index file**: biasanya jauh lebih kecil dari file asli
- **Metrik evaluasi**:
  - **Access types**: mendukung pencarian berdasarkan nilai atribut tertentu atau rentang nilai
  - **Access time**: waktu akses data
  - **Insertion time**: waktu menambahkan data
  - **Deletion time**: waktu menghapus data
  - **Space overhead**: ruang tambahan yang digunakan

### Contoh Soal Latihan

1. **Kasus**: Database perlu mencari semua karyawan dengan gaji antara 5000-10000. Metrik evaluasi apa yang paling relevan?
   - **Jawaban**: Access types, karena mendukung pencarian berdasarkan rentang nilai.
2. **Kasus**: Setelah menambah 200 record baru, performa indeks menurun. Metrik apa yang perlu diperiksa?
   - **Jawaban**: Insertion time dan space overhead untuk mengevaluasi efisiensi.
3. **Kasus**: Sistem ingin menghapus 50 record lama. Apa yang harus diperhatikan?
   - **Jawaban**: Deletion time untuk memastikan proses cepat.

## 3. Metode Index

- **Metode yang dibahas**:
  - **Ordered indices** (index-sequential file)
  - **B+-tree indices**
  - **Hash indices**
  - **Bitmap indices**

### Tabel Perbandingan

| Metode            | Kelebihan                        | Kekurangan                      |
|-------------------|----------------------------------|---------------------------------|
| Ordered Indices   | Pencarian terurut                | Performa turun saat file besar  |
| B+-tree           | Otomatis reorganisasi            | Overhead penyisipan/hapusan     |
| Hash Indices      | Pencarian kesetaraan cepat       | Kurang efisien untuk rentang    |
| Bitmap Indices    | Efisien untuk multi-atribut      | Kurang efektif untuk satu atribut |

### Contoh Soal Latihan

1. **Kasus**: Database memiliki 10.000 record dengan pencarian berdasarkan rentang nilai. Metode apa yang terbaik?
   - **Jawaban**: B+-tree, karena efisien untuk query rentang.
2. **Kasus**: Sistem perlu mencari data berdasarkan ID unik dengan distribusi merata. Apa yang digunakan?
   - **Jawaban**: Hash indices untuk akses cepat kesetaraan.
3. **Kasus**: Atribut "jenis kelamin" digunakan untuk filter data. Metode apa yang cocok?
   - **Jawaban**: Bitmap indices, karena atribut memiliki sedikit nilai berbeda.

## 4. Ordered Indices

- **Ciri**: entri index disimpan terurut berdasarkan nilai kunci pencarian
- **Primary index**: kunci menentukan urutan sekuensial file (juga disebut clustering index)
  - Hanya satu clustered index per tabel
  - Kunci biasanya primary key, tapi tidak selalu
- **Secondary index**: kunci menentukan urutan berbeda dari file asli (non-clustering index)
- **Index-sequential file**: file sekuensial terurut dengan primary index
- **Dense index**: setiap kunci pencarian ada di record index (pencarian via binary search, kompleksitas log₂ n)
- **Sparse index**: hanya beberapa kunci ada di record index
  - Efisien ruang dan pemeliharaan
  - Lebih lambat untuk pencarian, tapi baik dengan entri per blok

### Tabel Perbandingan

| Jenis              | Dense Index                | Sparse Index               |
|---------------------|----------------------------|----------------------------|
| Cakupan Kunci      | Semua kunci ada            | Hanya beberapa kunci       |
| Kecepatan Pencarian| Cepat (binary search)      | Lambat (sekuensial)        |
| Ruang              | Lebih besar                | Lebih kecil                |

### Contoh Soal Latihan

1. **Kasus**: Tabel memiliki 1000 record terurut berdasarkan ID. Haruskah menggunakan dense atau sparse index?
   - **Jawaban**: Sparse index, untuk efisiensi ruang dengan record terurut.
2. **Kasus**: Sistem perlu indeks pada nama departemen yang tidak terurut. Apa jenisnya?
   - **Jawaban**: Secondary index, karena urutan berbeda dari file asli.
3. **Kasus**: Database hanya boleh punya satu indeks terurut. Apa itu?
   - **Jawaban**: Primary index (clustering index).

## 5. B+-Tree Index

- **Kelebihan**: reorganisasi otomatis dengan perubahan lokal saat penyisipan/hapusan
- **Kekurangan**: overhead penyisipan, hapusan, dan ruang
- **Ciri**:
  - Semua jalur dari root ke leaf sama panjang
  - Node non-root memiliki antara ⌈n/2⌉ dan n anak
  - Leaf memiliki antara ⌈(n-1)/2⌉ dan n-1 nilai
- **Pencarian**: tinggi pohon ≤ ⌈log⌈n/2⌉(K)⌉, efisien untuk query rentang
- **Penanganan**: penyisipan dan hapusan dengan split/merge

### Contoh Soal Latihan

1. **Kasus**: Database dengan 1 juta record menggunakan B+-tree (n=100). Berapa maksimum node yang diakses?
   - **Jawaban**: 4 node (log₅₀(1.000.000)).
2. **Kasus**: Setelah hapus data, leaf menjadi underfull. Apa yang terjadi?
   - **Jawaban**: Leaf akan merge dengan sibling.
3. **Kasus**: Tambah data baru menyebabkan overflow. Bagaimana solusinya?
   - **Jawaban**: Lakukan split pada node.

## 6. Hash Index

- **Ciri**: gunakan fungsi hash h(ki) untuk memetakan kunci ke bucket
- **Bucket**: unit penyimpanan (biasanya satu blok) berisi kunci dan pointer
- **Kelebihan**: pencarian kesetaraan sangat cepat
- **Kekurangan**: tidak efisien untuk query rentang, bisa overflow (di-handle dengan chaining)
- **Fungsi hash ideal**: seragam dan acak untuk minimalkan overflow
- **Jenis**:
  - **Static hashing**: jumlah bucket tetap
  - **Dynamic hashing**: bucket bisa ditambah

### Contoh Soal Latihan

1. **Kasus**: Sistem ingin cari record berdasarkan ID unik. Metode apa yang cocok?
   - **Jawaban**: Hash index, untuk pencarian kesetaraan cepat.
2. **Kasus**: Hash menghasilkan overflow. Bagaimana menanganinya?
   - **Jawaban**: Gunakan overflow chaining dengan linked list.
3. **Kasus**: Data bertambah 50%, hashing statis tidak cukup. Solusinya?
   - **Jawaban**: Gunakan dynamic hashing untuk tambah bucket.

## 7. Bitmap Indices

- **Ciri**: dirancang untuk query multi-atribut dengan nilai atribut sedikit (misal: gender, status)
- **Kegunaan**: efisien untuk kombinasi atribut, kurang untuk satu atribut
- **Operasi**: gunakan AND, OR, NOT pada bitmap
- **Contoh**: query "laki-laki dengan income L1" pakai 10010 AND 10100 = 10000

### Contoh Soal Latihan

1. **Kasus**: Tabel memiliki atribut "status" (aktif/tidak) untuk 1000 record. Bagaimana cari "aktif"?
   - **Jawaban**: Gunakan bitmap index, operasikan bitmap "aktif".
2. **Kasus**: Query gabungkan "laki-laki" dan "income >50000". Metode apa?
   - **Jawaban**: Bitmap indices dengan operasi AND.
3. **Kasus**: Hitung record "perempuan" dari bitmap 01001. Berapa?
   - **Jawaban**: 1 record (berdasarkan bit "1").

## 8. Definisi Index di SQL

- **Buat index**: `create index <nama> on <relasi>(<atribut>)` (contoh: `create index b-index on branch(branch_name)`)
- **Buat unique index**: pakai `create unique index` untuk kunci kandidat
- **Hapus index**: `drop index <nama>`
- **Catatan**: sebagian besar DBMS mendukung spesifikasi tipe dan clustering

### Contoh Soal Latihan

1. **Kasus**: Buat index untuk tabel "student" berdasarkan "student_id". Tulis SQL-nya.
   - **Jawaban**: `create index s-index on student(student_id)`.
2. **Kasus**: Hapus index "s-index". Tulis SQL-nya.
   - **Jawaban**: `drop index s-index`.
3. **Kasus**: Pastikan "email" unik di tabel "user". Tulis SQL-nya.
   - **Jawaban**: `create unique index u-index on user(email)`.

## Daftar Istilah Penting

- **Index**: Struktur data untuk akses cepat ke data dalam database.
- **Search Key**: Atribut atau kumpulan atribut untuk mencari record.
- **Primary Index**: Indeks yang menentukan urutan sekuensial file (clustering index).
- **Secondary Index**: Indeks dengan urutan berbeda dari file asli (non-clustering index).
- **Dense Index**: Indeks di mana semua kunci pencarian ada di record.
- **Sparse Index**: Indeks dengan hanya beberapa kunci pencarian.
- **B+-Tree**: Pohon berbasis indeks dengan reorganisasi otomatis.
- **Hash Index**: Indeks yang menggunakan fungsi hash untuk distribusi data.
- **Bitmap Indices**: Indeks berbasis bitmap untuk query multi-atribut.
- **Index-Sequential File**: File terurut dengan primary index.

## Glossarium

- **ID**: Identifikasi
- **DBMS**: Database Management System
