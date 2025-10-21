# Rangkuman Materi Database Security (IF3140 - Sistem Basis Data)

## Database Security and Authorization
- **Memahami isu-isu keamanan database** seperti legal, etika, kebijakan, dan sistem.
- **Ancaman utama** meliputi kehilangan integritas, ketersediaan, dan kerahasiaan data.
- **Jenis kontrol keamanan** mencakup access control, inference control, flow control, dan enkripsi.
- **Mekanisme keamanan** terdiri dari discretionary (fleksibel, memberikan hak akses spesifik) dan mandatory (berbasis klasifikasi tingkat keamanan).
- **Peran DBA** sebagai otoritas utama yang mengelola keamanan, termasuk membuat akun dan menetapkan hak akses.

### Seluruh Tabel Perbandingan
| Aspek                | Discretionary Security         | Mandatory Security            |
|-----------------------|--------------------------------|--------------------------------|
| **Karakteristik**    | Memberikan hak akses fleksibel | Mengklasifikasi data dan user berdasarkan tingkat keamanan |
| **Keunggulan**       | Cocok untuk berbagai aplikasi | Mencegah aliran informasi ilegal |
| **Kelemahan**        | Rentan terhadap serangan seperti Trojan horse | Terlalu kaku, hanya cocok untuk lingkungan terbatas |

### Contoh Soal Latihan
1. **Soal**: Seorang DBA ingin memberikan hak baca pada tabel "employee" kepada user "U1". Tulis perintah SQL yang tepat.  
   **Jawaban**: `GRANT SELECT ON employee TO U1;`

2. **Soal**: Jika user "U2" memiliki hak baca dan tulis pada tabel "sales", tetapi DBA mencurigai pelanggaran, apa yang harus dilakukan untuk memeriksanya?  
   **Jawaban**: Lakukan database audit dengan meninjau audit trail untuk operasi yang dilakukan "U2".

3. **Soal**: Dalam sistem dengan klasifikasi TS > S > C > U, apakah user dengan clearance S bisa membaca data berlevel TS?  
   **Jawaban**: Tidak, berdasarkan simple security property, class(S) harus ≥ class(TS).

---

## Access Control
- **Discretionary Access Control (DAC)** menggunakan pemberian dan pencabutan hak akses (privileges) seperti SELECT, INSERT, UPDATE, DELETE.
- **Mandatory Access Control (MAC)** berdasarkan klasifikasi keamanan (TS, S, C, U) dengan aturan simple security (baca jika level user ≥ level data) dan star property (tulis jika level user ≤ level data).
- **Role-Based Access Control (RBAC)** menghubungkan hak akses dengan peran, mendukung hierarki peran dan batasan waktu.

### Seluruh Tabel Perbandingan
| Aspek                | DAC                        | MAC                        | RBAC                       |
|-----------------------|----------------------------|----------------------------|----------------------------|
| **Pendekatan**       | Hak akses spesifik         | Klasifikasi tingkat        | Berdasarkan peran          |
| **Keunggulan**       | Fleksibel                  | Perlindungan tinggi        | Efisien untuk organisasi besar |
| **Kelemahan**        | Rentan serangan            | Terlalu kaku               | Kompleksitas manajemen     |

### Contoh Soal Latihan
1. **Soal**: Buat perintah SQL untuk mencabut hak SELECT dari user "U3" pada tabel "customer".  
   **Jawaban**: `REVOKE SELECT ON customer FROM U3;`

2. **Soal**: Seorang user dengan clearance C ingin menulis data ke objek berlevel S. Apakah ini diperbolehkan?  
   **Jawaban**: Tidak, karena berdasarkan star property, class(user) harus ≤ class(objek).

3. **Soal**: Buat peran "manager" dan berikan hak SELECT pada tabel "sales" menggunakan RBAC.  
   **Jawaban**: `CREATE ROLE manager; GRANT SELECT ON sales TO manager;`

---

## Introduction to Statistical Database Security
- **Tujuan utama** menghasilkan statistik dari populasi tanpa mengungkap data individu.
- **Kueri statistik** mencakup COUNT, SUM, MIN, MAX, AVERAGE, dan STANDARD DEVIATION.
- **Tantangan** mencegah inferensi data individu dari kueri berulang, terutama pada populasi kecil.

### Contoh Soal Latihan
1. **Soal**: Sebuah statistik database hanya mengizinkan kueri agregat. Apakah kueri "SELECT salary FROM employees WHERE id = 1" diperbolehkan?  
   **Jawaban**: Tidak, karena mengakses data individu, bukan agregat.

2. **Soal**: Bagaimana cara mencegah inferensi data pada populasi dengan 2 orang?  
   **Jawaban**: Batasi kueri atau gunakan inference control untuk melarang pengambilan data individu.

3. **Soal**: Hitung rata-rata gaji dari 10 karyawan menggunakan kueri statistik.  
   **Jawaban**: `SELECT AVG(salary) FROM employees WHERE condition_for_10_people;`

---

## Introduction to Flow Control
- **Tujuan** mengatur aliran informasi agar tidak sampai ke user tidak berwenang.
- **Kebijakan aliran** membagi informasi menjadi confidential (C) dan nonconfidential (N), hanya mengizinkan aliran kecuali dari C ke N.
- **Saluran rahasia (covert channels)** seperti storage dan timing channels dapat membocorkan informasi.

### Contoh Soal Latihan
1. **Soal**: Jika data confidential (C) mengalir ke data nonconfidential (N), apa yang terjadi?  
   **Jawaban**: Melanggar kebijakan flow control, informasi bocor.

2. **Soal**: Jelaskan bagaimana timing channel bisa digunakan untuk kebocoran data.  
   **Jawaban**: Informasi dikirim melalui waktu eksekusi proses yang dapat diamati.

3. **Soal**: Bagaimana mencegah covert channel dalam aplikasi?  
   **Jawaban**: Hindari akses programmer ke data sensitif setelah aplikasi beroperasi.

---

## Encryption and Public Key Infrastructures
- **Tujuan** melindungi data saat transmisi dengan enkripsi.
- **Jenis enkripsi** meliputi symmetric-key (satu kunci) dan public-key (kunci publik dan privat).
- **Standar** seperti DES, AES, dan RSA digunakan, dengan tambahan salt bits untuk keamanan lebih.

### Contoh Soal Latihan
1. **Soal**: Apa perbedaan utama antara symmetric-key dan public-key encryption?  
   **Jawaban**: Symmetric-key menggunakan satu kunci, public-key menggunakan kunci publik untuk enkripsi dan kunci privat untuk dekripsi.

2. **Soal**: Bagaimana salt bits membantu keamanan enkripsi?  
   **Jawaban**: Menambahkan bit acak membuat setiap enkripsi berbeda, mencegah serangan kamus.

3. **Soal**: Jika data dienkripsi dengan AES, apa yang dibutuhkan untuk dekripsi?  
   **Jawaban**: Kunci enkripsi yang sama (symmetric-key).

---

## Application Security
- **Ancaman utama** meliputi SQL injection, cross-site scripting (XSS), dan kebocoran password.
- **Solusi** menggunakan prepared statement, autentikasi dua faktor, dan digital certificate.
- **Audit trail** penting untuk melacak akses dan perubahan data.

### Contoh Soal Latihan
1. **Soal**: Bagaimana mencegah SQL injection pada kueri "SELECT * FROM user WHERE name = ' + name + '"?  
   **Jawaban**: Gunakan prepared statement seperti "SELECT * FROM user WHERE name = ?".

2. **Soal**: Apa yang terjadi jika HTML tag dimasukkan dalam input user?  
   **Jawaban**: Bisa menyebabkan XSS, strip tag menggunakan fungsi keamanan.

3. **Soal**: Jelaskan cara kerja autentikasi dua faktor.  
   **Jawaban**: Kombinasi password dan kode sekali pakai (misal via SMS atau device).

---

## Daftar Istilah Penting
- **Database Security**: Perlindungan data dalam sistem database dari akses tidak sah.
- **Authorization**: Proses memberikan hak akses kepada user atau peran.
- **Discretionary Access Control (DAC)**: Mekanisme keamanan berdasarkan pemberian hak akses fleksibel.
- **Mandatory Access Control (MAC)**: Mekanisme keamanan berdasarkan klasifikasi tingkat keamanan.
- **Role-Based Access Control (RBAC)**: Pengaturan akses berdasarkan peran dalam organisasi.
- **Audit Trail**: Catatan operasi database untuk keperluan keamanan.
- **Encryption**: Proses mengkodekan data untuk perlindungan.
- **SQL Injection**: Serangan dengan memasukkan kode SQL berbahaya ke input.
- **Cross-Site Scripting (XSS)**: Serangan dengan menyisipkan kode HTML/script di halaman web.
- **Covert Channel**: Saluran rahasia yang membocorkan informasi secara tidak sah.

### Glossarium
- **TS**: Top Secret (Tingkat keamanan tertinggi).
- **S**: Secret.
- **C**: Confidential.
- **U**: Unclassified (Tingkat keamanan terendah).
- **DES**: Data Encryption Standard.
- **AES**: Advanced Encryption Standard.
- **RSA**: Algoritma enkripsi public-key berdasarkan faktor prime.