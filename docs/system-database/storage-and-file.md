# Rangkuman Materi IF3140 – Storage and File Structure

## 1. Klasifikasi Media Penyimpanan Fisik

- **Jenis penyimpanan:**
  - Penyimpanan volatil: hilang saat listrik mati
  - Penyimpanan non-volatil: data tetap meski listrik mati, termasuk penyimpanan sekunder, tersier, dan memori utama dengan cadangan baterai
- **Faktor pemilihan media penyimpanan:**
  - Kecepatan akses data
  - Biaya per unit data
  - Reliabilitas

### Seluruh Tabel Perbandingan

| Kriteria            | Volatil             | Non-Volatil          |
|---------------------|---------------------|----------------------|
| Ketahanan Data      | Hilang saat mati    | Tetap saat mati      |
| Contoh              | Cache, memori utama | Disk, tape           |
| Penggunaan          | Sementara           | Jangka panjang       |

### Contoh Soal Latihan

1. **Studi Kasus:** Sebuah perusahaan memilih penyimpanan untuk data sensitif yang harus tetap aman meski listrik padam. Media apa yang paling sesuai dan mengapa?  
   **Jawaban:** Penyimpanan non-volatil, karena data tetap meski listrik mati, cocok untuk data sensitif.

2. **Studi Kasus:** Jika biaya menjadi prioritas utama, media penyimpanan apa yang sebaiknya dipilih?  
   **Jawaban:** Penyimpanan tersier seperti tape, karena biaya per unit datanya lebih murah.

3. **Studi Kasus:** Sebuah aplikasi membutuhkan akses data sangat cepat. Media apa yang tepat?  
   **Jawaban:** Penyimpanan volatil seperti cache, karena kecepatan aksesnya tinggi.

---

## 2. Mekanisme Disk Magnetik

- **Struktur disk:**
  - Permukaan piringan dibagi menjadi trek melingkar
  - Setiap trek dibagi menjadi sektor (unit terkecil data yang bisa dibaca/tulis)
- **Komponen penting:**
  - Kepala baca-tulis (read-write head)
  - Perakitan kepala-disk
  - Silinder i: trek ke-i dari semua piringan

### Contoh Soal Latihan

1. **Studi Kasus:** Jika sebuah disk memiliki 10 piringan dan kepala berada di trek ke-5, berapa jumlah silinder yang terlibat?  
   **Jawaban:** 1 silinder, karena silinder mencakup trek ke-i dari semua piringan.

2. **Studi Kasus:** Sektor pada disk rusak. Bagaimana sistem menanganinya?  
   **Jawaban:** Disk controller melakukan remapping sektor rusak ke area cadangan.

3. **Studi Kasus:** Data disimpan di sektor tertentu. Apa unit terkecil yang bisa diakses?  
   **Jawaban:** Sektor, karena itu unit terkecil untuk baca/tulis.

---

## 3. Sub Sistem Disk

- **Fungsi disk controller:**
  - Menghubungkan sistem komputer dengan hardware disk
  - Menerima perintah tingkat tinggi untuk baca/tulis sektor
  - Menggerakkan lengan disk dan membaca/menulis data
  - Menghitung checksum untuk verifikasi data
  - Meremapping sektor rusak
- **Koneksi:** Banyak disk terhubung ke sistem melalui disk controller

### Contoh Soal Latihan

1. **Studi Kasus:** Data yang dibaca ternyata korup. Apa yang dilakukan disk controller?  
   **Jawaban:** Memverifikasi dengan checksum dan meremapping sektor jika rusak.

2. **Studi Kasus:** Sebuah server memiliki 5 disk. Bagaimana disk dikendalikan?  
   **Jawaban:** Melalui disk controller yang menghubungkan semua disk ke sistem.

3. **Studi Kasus:** Perintah untuk menulis data diterima. Apa langkah awal?  
   **Jawaban:** Disk controller menggerakkan lengan ke trek yang tepat.

---

## 4. Ukuran Kinerja Disk

- **Waktu akses:** Waktu dari perintah hingga transfer data dimulai
  - **Seek time:** Waktu memindahkan lengan ke trek yang benar
  - **Rotational latency:** Waktu sektor muncul di bawah kepala
- **Data-transfer rate:** Kecepatan ambil/simpan data
- **Mean time to failure (MTTF):** Rata-rata waktu disk berjalan tanpa gagal
  - Biasanya 3-5 tahun, menurun seiring usia disk

### Seluruh Tabel Perbandingan

| Parameter           | Penjelasan                          | Contoh Nilai         |
|---------------------|-------------------------------------|----------------------|
| Seek Time           | Waktu geser lengan                  | 4-10 milidetik       |
| Rotational Latency  | Waktu putar sektor                  | 4-11 milidetik       |
| Data-Transfer Rate  | Kecepatan transfer data             | 25-200 MB/detik      |
| MTTF                | Waktu rata-rata tanpa gagal         | 3-5 tahun            |

### Contoh Soal Latihan

1. **Studi Kasus:** Disk memiliki seek time 6 ms dan rotational latency 5 ms. Berapa waktu akses minimum?  
   **Jawaban:** 11 ms (6 ms + 5 ms).

2. **Studi Kasus:** Disk tua menunjukkan penurunan kinerja. Apa yang mungkin terjadi?  
   **Jawaban:** MTTF menurun karena usia disk meningkat.

3. **Studi Kasus:** Data transfer rate 100 MB/detik digunakan. Berapa waktu untuk transfer 1 GB?  
   **Jawaban:** 10 detik (1000 MB / 100 MB/detik).

---

## 5. Akses Blok Disk

- **Blok:** Unit penyimpanan dan transfer data, berupa urutan sektor
  - Ukuran: 512 byte hingga beberapa kilobyte
  - Blok kecil: lebih banyak transfer, ruang terbuang
  - Blok besar: ruang terbuang lebih sedikit
  - Ukuran tipikal: 4-16 kilobyte
- **Akses:** Jauh lebih lambat daripada memori utama
- **Optimasi:** Minimalkan transfer blok dengan menyimpan blok di memori utama

### Contoh Soal Latihan

1. **Studi Kasus:** Blok berukuran 4 KB digunakan. Berapa data yang bisa disimpan jika sektor 512 byte?  
   **Jawaban:** 8 sektor (4000 / 512).

2. **Studi Kasus:** Akses disk 1000 kali lebih lambat dari memori. Bagaimana mengoptimalkan?  
   **Jawaban:** Simpan blok di memori utama untuk kurangi akses disk.

3. **Studi Kasus:** Blok 16 KB separuh terisi. Berapa ruang terbuang?  
   **Jawaban:** 8 KB.

---

## 6. Organisasi File

- **Dasar:**
  - Database disimpan sebagai kumpulan file
  - Setiap file berisi urutan record
  - Record berisi urutan field
- **Blocking:**
  - Record lebih kecil dari blok
  - Bfr (blocking factor) = [B/R] (B: ukuran blok, R: ukuran record)
  - Bisa spanned (melintasi blok) atau unspanned (tidak melintasi)

### Seluruh Tabel Perbandingan

| Jenis Blocking       | Kelebihan                  | Kekurangan               |
|----------------------|----------------------------|--------------------------|
| Unspanned            | Sederhana, tidak melintasi | Ruang terbuang jika tidak penuh |
| Spanned              | Efisien ruang              | Kompleks untuk akses     |

### Contoh Soal Latihan

1. **Studi Kasus:** Blok 4 KB, record 1 KB. Berapa Bfr untuk unspanned?  
   **Jawaban:** 4 (4000 / 1000).

2. **Studi Kasus:** File memiliki 10 record 500 byte, blok 2 KB. Apakah spanned diperlukan?  
   **Jawaban:** Ya, karena 500 byte x 10 = 5000 byte > 2 KB.

3. **Studi Kasus:** Data disimpan dalam file. Apa unit dasarnya?  
   **Jawaban:** Record, yang berisi field.

---

## 7. Organisasi Record dalam File

- **Jenis organisasi:**
  - **Heap:** Record ditempatkan sembarang di ruang kosong
  - **Sequential:** Record diurutkan berdasarkan kunci pencarian
  - **Multitable clustering:** Beberapa relasi disimpan dalam satu file
  - **B+-tree:** Penyimpanan terurut meski ada insert/delete
  - **Hashing:** Fungsi hash menentukan blok penyimpanan

### Seluruh Tabel Perbandingan

| Jenis Organisasi    | Kelebihan                  | Kekurangan               |
|---------------------|----------------------------|--------------------------|
| Heap                | Efisien untuk bulk loading | Lambat untuk pencarian   |
| Sequential          | Bagus untuk proses berurutan | Perlu reorganisasi       |
| Multitable          | Minimalkan I/O             | Kurang efisien untuk satu relasi |

### Contoh Soal Latihan

1. **Studi Kasus:** Data sering ditambahkan dalam jumlah besar. Organisasi apa yang cocok?  
   **Jawaban:** Heap, karena efisien untuk bulk loading.

2. **Studi Kasus:** File perlu diurutkan berdasarkan ID. Apa yang digunakan?  
   **Jawaban:** Sequential, untuk penyimpanan terurut.

3. **Studi Kasus:** Dua tabel terkait disimpan bersama. Organisasi apa yang tepat?  
   **Jawaban:** Multitable clustering, untuk minimalkan I/O.

---

## 8. Penyimpanan Data Dictionary

- **Isi data dictionary:**
  - Informasi relasi (nama, tipe atribut, panjang)
  - Definisi view dan batasan integritas
  - Data statistik (jumlah tuple)
  - Informasi fisik (lokasi, indeks)

### Contoh Soal Latihan

1. **Studi Kasus:** Sistem membutuhkan metadata relasi. Di mana disimpan?  
   **Jawaban:** Data dictionary.

2. **Studi Kasus:** Jumlah tuple diperlukan untuk optimasi. Sumbernya apa?  
   **Jawaban:** Data dictionary.

3. **Studi Kasus:** Lokasi fisik file hilang. Bagaimana menemukannya?  
   **Jawaban:** Cek data dictionary.

---

## Daftar Istilah Penting

- **Volatile Storage:** Penyimpanan yang hilang saat listrik mati, seperti cache.
- **Non-Volatile Storage:** Penyimpanan yang data tetap meski listrik mati, seperti disk.
- **Seek Time:** Waktu untuk memindahkan lengan disk ke trek yang benar.
- **Rotational Latency:** Waktu sektor muncul di bawah kepala baca.
- **MTTF:** Rata-rata waktu disk berjalan tanpa gagal.
- **Blok:** Unit penyimpanan dan transfer data di disk.
- **Record:** Urutan field yang membentuk data dalam file.
- **Blocking Factor (Bfr):** Jumlah record dalam satu blok.
- **Disk Controller:** Perangkat yang menghubungkan disk ke sistem komputer.
- **Cylinder:** Kumpulan trek ke-i dari semua piringan disk.

## Glossarium

- **MTTF:** Mean Time To Failure
