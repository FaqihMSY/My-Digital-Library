# Rangkuman Materi IF3140 – Introduction

## 1. Pengenalan Database System

- **Database** adalah kumpulan data yang saling terkait disimpan dalam satu repositori
- **Keunggulan dibanding file system**:
  - Menghilangkan inkonsistensi, anomali data, ketergantungan data, dan ketergantungan struktural
  - Menyimpan struktur data, hubungan, dan jalur akses
- **Lingkungan Database**:
  - Hardware
  - Software
  - Pengguna
  - Prosedur (tata kelola)
  - Data

### Contoh Soal Latihan

1. **Soal**: Jelaskan mengapa database lebih unggul dibanding sistem file tradisional dalam mengelola data pegawai sebuah perusahaan.  
   **Jawaban**: Database menghilangkan inkonsistensi dan anomali data, serta menyediakan akses terstruktur yang efisien, tidak seperti sistem file yang rentan terhadap duplikat data.

2. **Soal**: Sebutkan dua komponen lingkungan database dan fungsinya.  
   **Jawaban**: Hardware mendukung penyimpanan fisik data, sedangkan prosedur memastikan tata kelola data berjalan baik.

3. **Soal**: Bagaimana database membantu dalam pengelolaan data pelanggan di toko online?  
   **Jawaban**: Database menyimpan data pelanggan secara terorganisir, mengurangi ketergantungan data, dan memudahkan akses serta pembaruan informasi.

---

## 2. Apa Itu DBMS?

- **DBMS** adalah perangkat lunak untuk menyimpan dan mengelola database
- **Keunggulan DBMS**:
  - Memberikan lingkungan yang nyaman dan efisien
  - Kemandirian data dan akses efisien
  - Mengurangi waktu pengembangan aplikasi
  - Menjamin integritas dan keamanan data
  - Administrasi data seragam
  - Akses bersamaan dan pemulihan dari kerusakan

### Contoh Soal Latihan

1. **Soal**: Apa peran utama DBMS dalam sistem perpustakaan?  
   **Jawaban**: DBMS menyimpan data buku dan peminjam, memastikan keamanan data, dan memungkinkan akses bersamaan.

2. **Soal**: Bagaimana DBMS membantu mengurangi waktu pengembangan aplikasi?  
   **Jawaban**: Dengan menyediakan lingkungan terstruktur, developer tidak perlu membangun sistem penyimpanan dari nol.

3. **Soal**: Mengapa integritas data penting dalam DBMS untuk bank?  
   **Jawaban**: Integritas data memastikan transaksi seperti transfer uang tetap akurat dan konsisten.

---

## 3. Struktur Sistem Keseluruhan

- Sistem database terbagi menjadi modul untuk menangani tugas masing-masing
- **Komponen utama**:
  - Storage manager
  - Query processor component
  - Transaction management component

### Contoh Soal Latihan

1. **Soal**: Apa fungsi utama struktur sistem keseluruhan dalam database?  
   **Jawaban**: Membagi tugas ke dalam modul seperti storage dan query untuk efisiensi.

2. **Soal**: Sebutkan satu komponen dari struktur sistem dan kegunaannya.  
   **Jawaban**: Storage manager mengelola penyimpanan dan pengambilan data.

3. **Soal**: Bagaimana query processor mendukung pengguna database?  
   **Jawaban**: Menginterpretasi perintah query untuk mengakses data dengan cepat.

---

## 4. Database Engine

- **Storage Manager**:
  - Antarmuka antara data tingkat rendah dan aplikasi
  - Tugas: Interaksi dengan file manager OS, penyimpanan/ambil/pembaruan data efisien
  - Komponen: Authorization/integrity manager, transaction manager, file manager, buffer manager
  - Struktur data: Data files (simpan database), data dictionary (metadata), indices (akses cepat)
- **Query Processor**:
  - Komponen: DDL interpreter, DML compiler, query evaluation engine
  - Proses: Parsing/terjemahan, optimasi, evaluasi
- **Transaction Management**:
  - Mengelola transaksi untuk menjaga konsistensi data
  - Mengatasi kegagalan sistem dan kontrol konkurensi

### Tabel Perbandingan

| Komponen             | Fungsi Utama                          | Contoh Tugas                  |
|-----------------------|---------------------------------------|-------------------------------|
| Storage Manager       | Kelola penyimpanan data               | Simpan dan ambil data         |
| Query Processor       | Proses dan optimasi query             | Terjemahkan perintah SQL      |
| Transaction Management| Jaga konsistensi transaksi            | Pulihkan data setelah crash   |

### Contoh Soal Latihan

1. **Soal**: Jelaskan peran storage manager dalam sistem e-commerce.  
   **Jawaban**: Menyimpan data produk dan pesanan, serta memastikan akses cepat via indices.

2. **Soal**: Apa yang dilakukan query processor saat pengguna menjalankan query?  
   **Jawaban**: Menerjemahkan query ke rencana evaluasi dan mengoptimalkan biaya eksekusi.

3. **Soal**: Bagaimana transaction management menjaga data bank?  
   **Jawaban**: Memastikan transfer uang konsisten meski ada kegagalan sistem.

---

## 5. Aplikasi dan Pengguna Database

- **Arsitektur**:
  - Two-tier: Aplikasi di klien, panggil fungsi server
  - Three-tier: Klien sebagai frontend, server aplikasi sebagai perantara
- **Database Administrator (DBA)**:
  - Kontrol pusat sistem
  - Tugas: Definisikan skema, atur penyimpanan, beri otorisasi, perawatan rutin

### Contoh Soal Latihan

1. **Soal**: Apa perbedaan arsitektur two-tier dan three-tier?  
   **Jawaban**: Two-tier langsung panggil server, three-tier gunakan server aplikasi sebagai perantara.

2. **Soal**: Sebutkan dua tugas DBA dalam sistem rumah sakit.  
   **Jawaban**: Definisikan skema data pasien dan beri otorisasi akses dokter.

3. **Soal**: Bagaimana three-tier membantu aplikasi online?  
   **Jawaban**: Memisahkan frontend dari database untuk skalabilitas lebih baik.

---

## Daftar Istilah Penting

- **Database**: Kumpulan data terorganisir dalam satu tempat
- **DBMS**: Perangkat lunak untuk mengelola database
- **Storage Manager**: Modul yang mengelola penyimpanan dan pengambilan data
- **Query Processor**: Komponen yang memproses dan mengoptimasi query
- **Transaction Management**: Sistem untuk menjaga konsistensi transaksi
- **Data Dictionary**: Tempat menyimpan metadata tentang struktur database
- **Indices**: Struktur untuk akses cepat ke data tertentu
- **DDL**: Bahasa definisi data untuk membuat skema
- **DML**: Bahasa manipulasi data untuk query dan pembaruan

## Glossarium

- **DBMS**: Database Management System
- **DDL**: Data Definition Language
- **DML**: Data Manipulation Language
