# IF3140 – Sistem Basis Data: Schema and Index Tuning

## Higher-Level Database Design Tuning

- **Tujuan utama**: Memahami dan menyempurnakan skema konseptual serta eksternal setelah desain ER dan definisi views.
- **Langkah berikutnya**: Memilih indeks dan menyempurnakan skema untuk mencapai tujuan performa.
- **Pemahaman workload**:
  - Identifikasi query dan update terpenting serta frekuensinya.
  - Tentukan performa yang diinginkan untuk query dan update tersebut.

### Contoh Soal Latihan

1. **Soal**: Sebuah perusahaan memiliki tabel "Employee" dengan kolom besar (nama, alamat, gaji, status). Bagaimana cara tuning skema untuk meningkatkan performa query yang hanya membutuhkan nama dan gaji?  
   **Jawaban**: Gunakan **vertical splitting** dengan memisahkan kolom nama dan gaji ke tabel terpisah untuk mengurangi data yang dibaca.

2. **Soal**: Jika sebuah tabel "Sales" berisi data historis dan terkini, bagaimana cara meningkatkan akses ke data terkini?  
   **Jawaban**: Terapkan **horizontal splitting** dengan memisahkan data terkini ke tabel "Active_Sales" dan data historis ke "Inactive_Sales".

3. **Soal**: Perusahaan ingin mengurangi kebutuhan join pada tabel "Order" dan "Customer". Apa solusi yang bisa digunakan?  
   **Jawaban**: Lakukan **denormalization** dengan menambahkan kolom kunci seperti "customer_name" dari tabel "Customer" ke tabel "Order".

---

## Understanding the Workload

- **Untuk setiap query**:
  - Relasi mana yang diakses?
  - Atribut mana yang diambil?
  - Atribut mana yang digunakan dalam kondisi seleksi/join? Seberapa selektif kondisi tersebut?
- **Untuk setiap update**:
  - Atribut mana yang terlibat dalam kondisi seleksi/join? Seberapa selektif?
  - Jenis update (INSERT/DELETE/UPDATE) dan atribut yang terpengaruh.

### Contoh Soal Latihan

1. **Soal**: Sebuah query mengakses tabel "Product" dan "Order" untuk filter berdasarkan tanggal. Apa yang perlu dianalisis dari workload?  
   **Jawaban**: Analisis relasi yang diakses (Product, Order), atribut yang difilter (tanggal), dan seberapa selektif kondisi tanggal.

2. **Soal**: Update pada tabel "Employee" mengubah gaji berdasarkan departemen. Apa yang harus diperhatikan?  
   **Jawaban**: Perhatikan atribut seleksi (departemen), jenis update (UPDATE), dan atribut yang terpengaruh (gaji).

3. **Soal**: Bagaimana menentukan performa yang diinginkan untuk query mingguan?  
   **Jawaban**: Tentukan waktu respons maksimum berdasarkan kebutuhan bisnis, misalnya < 2 detik.

---

## Decisions to Make

- **Indeks yang dibuat**:
  - Relasi mana yang perlu indeks? Field apa yang jadi kunci pencarian? Butuh beberapa indeks?
- **Jenis indeks**: Clustered/non-clustered? Hash/B+-tree/Bitmap?
- **Perubahan skema logis**:
  - Pertimbangkan skema ternormalisasi alternatif (BCNF, dll.).
  - Pertimbangkan denormalisasi atau partisi horizontal.

### Seluruh Tabel Perbandingan

| **Aspek**          | **Clustered Index**         | **Non-Clustered Index**    |
|---------------------|-----------------------------|----------------------------|
| Penempatan Fisik   | Menentukan urutan fisik data| Terpisah dari data         |
| Jumlah per Tabel   | Maksimal 1                  | Maksimal 249               |
| Kegunaan Utama     | ORDER BY, GROUP BY, WHERE   | Pencarian tunggal/range    |

### Contoh Soal Latihan

1. **Soal**: Sebuah tabel "Student" sering diurutkan berdasarkan NIM. Indeks apa yang cocok?  
   **Jawaban**: Gunakan **clustered index** pada kolom NIM.

2. **Soal**: Tabel "Transaction" perlu pencarian cepat berdasarkan ID. Jenis indeks apa yang digunakan?  
   **Jawaban**: Gunakan **non-clustered index** pada kolom ID.

3. **Soal**: Haruskah skema "Order" didenormalisasi jika join sering lambat?  
   **Jawaban**: Ya, pertimbangkan **denormalization** dengan menambahkan kolom kunci dari tabel terkait.

---

## Schema Tuning

- **Panduan skema logis**: Berdasarkan workload, bukan hanya isu redundansi.
- **Metode tuning**:
  - **Horizontal splitting**: Pisahkan baris berdasarkan nilai kolom (misal: data aktif/inaktif).
  - **Vertical splitting**: Pisahkan kolom yang sering/ jarang diakses.
  - **Denormalization**: Tambah kolom redundan, atribut turunan, atau gabungkan tabel.

### Seluruh Tabel Perbandingan

| **Metode**          | **Horizontal Splitting**       | **Vertical Splitting**        | **Denormalization**          |
|----------------------|--------------------------------|--------------------------------|-----------------------------|
| Fokus               | Baris berdasarkan nilai        | Kolom berdasarkan frekuensi   | Redundansi untuk performa   |
| Contoh Penggunaan   | Aktif vs Inaktif data          | Nama vs Alamat panjang        | Tambah kolom turunan        |
| Dampak              | Kurangi ukuran tabel           | Kurangi halaman dibaca        | Kurangi join                |

### Contoh Soal Latihan

1. **Soal**: Tabel "Customer" besar dengan data lama. Bagaimana meningkatkan akses data baru?  
   **Jawaban**: Gunakan **horizontal splitting** untuk memisahkan data baru dan lama.

2. **Soal**: Tabel "Product" punya kolom deskripsi panjang yang jarang dibaca. Solusinya?  
   **Jawaban**: Terapkan **vertical splitting** dengan memisahkan deskripsi ke tabel terpisah.

3. **Soal**: Query sering join "Sales" dan "Product". Bagaimana mempercepat?  
   **Jawaban**: Lakukan **denormalization** dengan menambahkan kolom kunci "product_name" ke "Sales".

---

## Index Tuning

- **Indeks utama (clustered)**: Tentukan urutan fisik data, wajib untuk setiap tabel, cocok untuk ORDER BY, GROUP BY, WHERE.
- **Indeks sekunder (non-clustered)**: Berguna untuk pencarian tunggal/range, terpisah dari data.
- **Pemilihan indeks**:
  - B+-tree untuk data dengan ulangan nilai rendah.
  - Hash untuk pencarian kesetaraan cepat.
  - Bitmap untuk data warehouse dengan ulangan nilai tinggi.

### Seluruh Tabel Perbandingan

| **Jenis Indeks**    | **B+-tree**                  | **Hash**                    | **Bitmap**                 |
|----------------------|------------------------------|-----------------------------|----------------------------|
| Kegunaan Utama      | Akses cepat semua baris      | Pencarian kesetaraan        | Data dengan ulangan tinggi |
| Contoh Penggunaan   | WHERE dengan rentang         | WHERE = 'nilai'             | Sex (male/female)          |
| Karakteristik       | Default DBMS                 | Cepat untuk kesetaraan      | Efisien untuk filter banyak|

### Contoh Soal Latihan

1. **Soal**: Tabel "Employee" sering difilter berdasarkan gaji. Indeks apa yang cocok?  
   **Jawaban**: Gunakan **B+-tree index** pada kolom gaji.

2. **Soal**: Pencarian berdasarkan ID unik di tabel "User" lambat. Solusinya?  
   **Jawaban**: Terapkan **hash index** pada kolom ID.

3. **Soal**: Tabel "Category" punya kolom status (aktif/tidak) dengan filter banyak. Indeks apa?  
   **Jawaban**: Gunakan **bitmap index** pada kolom status.

---

## Daftar Istilah Penting

- **Schema Tuning**: Proses menyempurnakan desain skema untuk meningkatkan performa database.
- **Horizontal Splitting**: Memisahkan baris tabel berdasarkan nilai kolom tertentu.
- **Vertical Splitting**: Memisahkan kolom tabel berdasarkan frekuensi akses.
- **Denormalization**: Menambahkan redundansi (kolom atau tabel) untuk mempercepat query.
- **Clustered Index**: Indeks yang menentukan urutan fisik data dalam tabel.
- **Non-Clustered Index**: Indeks terpisah yang mempercepat pencarian tanpa mengubah urutan data.
- **B+-tree Index**: Jenis indeks default untuk akses cepat pada rentang data.
- **Hash Index**: Indeks untuk pencarian cepat berdasarkan kesetaraan.
- **Bitmap Index**: Indeks efisien untuk data dengan ulangan nilai tinggi.
- **Workload**: Kumpulan query dan update yang mencerminkan penggunaan database.
- **Materialized View**: Tampilan data yang disimpan fisik untuk mempercepat query agregat.

### Glossarium

- **ER**: Entity-Relationship (desain basis data).
- **BCNF**: Boyce-Codd Normal Form (bentuk normal data).
- **3NF**: Third Normal Form (bentuk normal data).
- **DBMS**: Database Management System (sistem manajemen basis data).
- **OLTP**: Online Transaction Processing (pengolahan transaksi online).
- **DSS**: Decision Support System (sistem pendukung keputusan).
