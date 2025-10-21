**LATIHAN SOAL UJIAN TENGAH SEMESTER IF3140 - SISTEM BASIS DATA**

**Petunjuk:**
* Perhatikan skema basis data `dvdrental` yang telah diberikan.
* Jawablah setiap pertanyaan dengan jelas, dan berikan justifikasi untuk setiap keputusan desain atau strategi yang Anda usulkan.

---

### **Soal 1: Performance Tuning & Indexing Strategy**

Perusahaan rental DVD "Gemini Films" ingin meningkatkan performa sistem basis datanya seiring dengan pertumbuhan jumlah pelanggan dan inventaris film. Analisis menunjukkan beberapa *bottleneck* pada operasi-operasi berikut:

* **Operasi 1 (Sering):** Mencari pelanggan berdasarkan alamat email mereka. Operasi ini sangat sering dilakukan oleh staf di meja depan dan terasa lambat.
* **Operasi 2 (Sering):** Menampilkan riwayat peminjaman seorang pelanggan, diurutkan dari tanggal peminjaman yang paling baru. Halaman profil pelanggan di aplikasi web memuat data ini.
* **Operasi 3 (Cukup Sering):** Staf menjalankan query untuk mencari semua film dalam kategori "Horror" atau "Sci-Fi" yang memiliki rating "R".
* **Operasi 4 (Jarang):** Melakukan *update* massal pada kolom `last_update` di hampir semua tabel untuk keperluan audit.

**Asumsi Statistik:**
* Tabel `customer`: 60,000 baris
* Tabel `rental`: 2,000,000 baris
* Tabel `film`: 15,000 baris
* Tabel `film_category`: 15,000 baris

**Pertanyaan:**

a.  **Definisi Indeks:** Berdasarkan skenario dan statistik di atas, definisikan indeks-indeks yang paling tepat untuk mengoptimalkan performa sistem. Untuk setiap indeks yang Anda usulkan:
    * Sebutkan tabel dan kolomnya.
    * Jelaskan jenis indeks yang akan digunakan (contoh: B-Tree, Hash) dan berikan alasan mengapa jenis tersebut cocok.
    * Jelaskan operasi (1, 2, 3, atau 4) mana yang dioptimalkan oleh indeks tersebut dan bagaimana indeks itu mempercepat query.

b.  **Trade-off Indeks:** Jelaskan potensi dampak negatif (kerugian) dari penambahan indeks yang Anda usulkan pada bagian (a) terhadap performa sistem secara keseluruhan, terutama terkait dengan **Operasi 4**.

c.  **Schema Tuning:** Manajemen ingin memberikan diskon kepada pelanggan "setia" yang telah meminjam lebih dari 50 film. Tim developer mengusulkan dua cara untuk mengimplementasikannya:
    1.  Menambahkan kolom baru `jumlah_peminjaman` pada tabel `customer` dan meng-updatenya setiap kali pelanggan melakukan peminjaman.
    2.  Menjalankan query `COUNT(*)` pada tabel `rental` setiap kali data pelanggan diakses untuk memeriksa kelayakan diskon.

    Bandingkan kedua pendekatan tersebut dari sudut pandang **konsistensi data** dan **beban kerja query (query workload)**. Pendekatan mana yang akan Anda rekomendasikan dan mengapa?

---

### **Soal 2: Transactions and Database Security**

Bayangkan dua skenario transaksi yang terjadi secara bersamaan di "Gemini Films".

* **Transaksi 1 (T1):** Seorang staf (staff_id = 1) membantu pelanggan (customer_id = 123) untuk menyewa sebuah film (inventory_id = 456). Proses ini melibatkan:
    1.  Memasukkan data baru ke tabel `rental`.
    2.  Memasukkan data pembayaran terkait ke tabel `payment`.

* **Transaksi 2 (T2):** Sebuah proses sistem otomatis sedang menghitung total pendapatan dari semua pembayaran yang tercatat pada hari itu untuk membuat laporan keuangan sementara. Proses ini melibatkan:
    1.  Membaca semua baris pada tabel `payment` dan menjumlahkan kolom `amount`.

**Skenario Eksekusi:**
Anggaplah urutan eksekusi (schedule) dari kedua transaksi tersebut adalah sebagai berikut:

`T2: START`
`T2: READ_SUM(payment.amount)` -> Menghitung total awal
`T1: START`
`T1: INSERT INTO rental(...)`
`T1: COMMIT` -> Transaksi T1 selesai, tetapi pembayaran belum masuk
`T2: READ_SUM(payment.amount)` -> Menghitung total lagi untuk verifikasi
`T2: COMMIT`
`T1: INSERT INTO payment(...)` -> **Terjadi Error Sistem, pembayaran T1 baru masuk setelah T2 selesai**

**Pertanyaan:**

a.  **Analisis Fenomena Transaksi:** Jelaskan anomali atau masalah integritas data apa yang terjadi akibat urutan eksekusi di atas. Kaitkan penjelasan Anda dengan properti **Atomicity, Consistency, Isolation, Durability (ACID)**. Properti manakah yang paling jelas dilanggar dalam skenario ini?

b.  **Peran Security dalam Transaksi:** Perusahaan baru saja mempekerjakan seorang analis keuangan. Analis ini memerlukan akses *read-only* ke tabel `payment` dan `rental` untuk tujuan audit dan pelaporan. Namun, ia sama sekali tidak boleh melihat informasi pribadi pelanggan di tabel `customer` kecuali nama depan dan nama belakang. Tuliskan perintah-perintah SQL yang diperlukan untuk:
    1.  Membuat sebuah `ROLE` baru bernama `finance_analyst`.
    2.  Membuat sebuah `VIEW` yang hanya menampilkan `customer_id`, `first_name`, dan `last_name` dari tabel `customer`.
    3.  Memberikan hak akses (`privileges`) yang sesuai kepada `role` `finance_analyst` berdasarkan `VIEW` tersebut dan tabel lainnya.

c.  **Konflik Operasi:** Bayangkan jika **Transaksi 2 (T2)** diubah menjadi sebuah transaksi yang mengupdate (bukan hanya membaca) data, misalnya memberikan bonus 5% kepada semua staf dengan melakukan `UPDATE staff SET salary = salary * 1.05`. Jelaskan mengapa transaksi update gaji ini akan berpotensi mengalami konflik dengan transaksi T1 jika T1 juga perlu membaca data staf (misalnya, untuk mencatat `staff_id` yang memproses rental). Fenomena apa yang bisa terjadi (contoh: *dirty read*, *unrepeatable read*)?

---

### **Soal 3: Analisis Query Lanjutan dan Struktur Penyimpanan Internal**
Tim Business Intelligence (BI) "Gemini Films" menjalankan sebuah query analitik yang sangat berat untuk mengidentifikasi aktor paling "menguntungkan". Query ini bertujuan mencari 10 aktor teratas yang film-filmnya paling banyak disewa oleh pelanggan premium (pelanggan yang telah menghabiskan lebih dari $200). Query ini berjalan sangat lambat, bahkan sering menyebabkan timeout.

**Query yang Bermasalah:**

```sql
SELECT a.actor_id, a.first_name, a.last_name, COUNT(r.rental_id) AS total_rentals
FROM actor a
JOIN film_actor fa ON a.actor_id = fa.actor_id
JOIN film f ON fa.film_id = f.film_id
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.customer_id IN (
    SELECT customer_id
    FROM payment
    GROUP BY customer_id
    HAVING SUM(amount) > 200
)
GROUP BY a.actor_id, a.first_name, a.last_name
ORDER BY total_rentals DESC
LIMIT 10;
```

**Asumsi:**

*   PostgreSQL adalah DBMS yang digunakan.
*   Metode JOIN default yang dipilih oleh optimizer untuk query ini adalah Nested Loop Join untuk beberapa langkah awal.
*   Tabel `payment` sangat besar (jutaan baris) dan tidak memiliki indeks pada `customer_id`.
*   Tabel `rental` juga sangat besar.

**Pertanyaan:**

a.  **Analisis Query Execution Plan:** Jelaskan mengapa query di atas sangat tidak efisien. Uraikan setidaknya tiga bottleneck utama dalam rencana eksekusi (query plan) yang kemungkinan besar akan dibuat oleh database untuk query ini. Fokus pada subquery, operasi JOIN, dan pengurutan (ORDER BY).

b.  **Optimasi Query dan Indeks:**
    1.  Tulis ulang query di atas menggunakan pendekatan yang lebih efisien (misalnya, menggunakan JOIN alih-alih subquery IN dan/atau Common Table Expressions (CTE)).
    2.  Rekomendasikan satu atau lebih indeks komposit (composite index) atau covering index yang secara spesifik dapat mempercepat versi query Anda yang telah dioptimalkan. Jelaskan bagaimana setiap indeks yang Anda usulkan membantu optimizer memilih strategi JOIN yang lebih baik (misalnya, Merge Join atau Hash Join) dan menghindari full table scan.

c.  **Struktur File dan Penyimpanan:** Misalkan tabel `inventory` diorganisir sebagai Heap File. Jelaskan bagaimana struktur penyimpanan ini memengaruhi performa JOIN antara `film` dan `inventory`. Apakah mengubahnya menjadi Clustered Index (atau Index-Organized Table) pada kolom `film_id` akan memberikan keuntungan signifikan untuk query ini? Berikan justifikasi jawaban Anda dengan mempertimbangkan trade-off antara kecepatan baca (untuk query ini) dan biaya operasi tulis (INSERT/UPDATE/DELETE).

---

### **Soal 4: Transaksi Kompleks dan Kontrol Konkurensi Tingkat Lanjut**
"Gemini Films" meluncurkan fitur baru: "Paket Tontonan Keluarga". Seorang pelanggan dapat menyewa hingga 5 film sekaligus dalam satu transaksi tunggal dengan harga diskon. Implementasi fitur ini di backend melibatkan serangkaian operasi dalam satu transaksi besar.

**Transaksi T_SewaPaket:**

```
START TRANSACTION;

1. SELECT stock_tersedia FROM inventaris_film WHERE film_id IN (F1, F2, F3, F4, F5); (Memeriksa ketersediaan untuk 5 film)
2. Pause selama beberapa milidetik untuk validasi di sisi aplikasi.
3. UPDATE inventaris_film SET stock_tersedia = stock_tersedia - 1 WHERE film_id IN (F1, F2, F3, F4, F5); (Mengurangi stok)
4. INSERT INTO rental (..., customer_id, ...); (Mencatat 5 baris baru di tabel rental)
5. INSERT INTO payment (..., amount, ...); (Mencatat 1 baris pembayaran paket)

COMMIT;
```

**Skenario Masalah:** Dua pelanggan (Pelanggan A dan Pelanggan B) mencoba menyewa paket yang berisi beberapa film yang sama (misalnya, film F3 dan F4) pada waktu yang hampir bersamaan. Stok untuk F3 dan F4 saat itu hanya tersisa 1.

**Pertanyaan:**

a.  **Analisis Fenomena Anomali:** Jika DBMS menggunakan level isolasi READ COMMITTED, jelaskan skenario eksekusi interleaving (selang-seling) antara transaksi Pelanggan A (T_A) dan Pelanggan B (T_B) yang dapat menyebabkan anomali Lost Update, di mana kedua transaksi berhasil melewati langkah ke-2, tetapi pada akhirnya stok menjadi negatif atau data menjadi tidak konsisten.

b.  **Perbandingan Level Isolasi:**
    *   Bandingkan bagaimana level isolasi REPEATABLE READ dan SERIALIZABLE akan menangani skenario di atas.
    *   Apakah REPEATABLE READ cukup untuk mencegah Lost Update dalam kasus ini? Jelaskan mengapa atau mengapa tidak, dengan menyinggung konsep read lock dan write lock.
    *   Anomali apa lagi yang mungkin masih bisa terjadi di level REPEATABLE READ yang relevan dengan skenario ini (hint: phantom read)? Jelaskan bagaimana anomali tersebut bisa muncul.
    *   Bagaimana SERIALIZABLE menjamin tidak akan ada anomali sama sekali? Apa trade-off performa utama dari penggunaan level isolasi tertinggi ini?

c.  **Solusi Alternatif (Pessimistic Locking):** Selain mengandalkan level isolasi, seorang developer senior menyarankan untuk menggunakan pessimistic locking secara eksplisit. Tuliskan ulang langkah ke-2 dari transaksi T_SewaPaket menggunakan perintah SQL `SELECT ... FOR UPDATE`. Jelaskan bagaimana mekanisme ini secara fundamental mengubah cara transaksi berinteraksi dan secara efektif mencegah race condition pada stok barang.

---

### **Soal 5: Desain Keamanan Multi-Lapis dan Kebijakan Akses Dinamis**
"Gemini Films" berkembang dan kini memiliki cabang di beberapa negara. Perusahaan memerlukan sistem keamanan basis data yang canggih untuk mematuhi peraturan privasi data yang berbeda-beda di setiap negara (seperti GDPR).

**Kebijakan Keamanan:**

1.  **Staf Biasa (staff_role):**
    *   Hanya boleh melihat dan mengelola data pelanggan (customer) dan rental (rental) yang berasal dari toko (store) tempat mereka bekerja.
    *   Tidak boleh melihat kolom `email` dan `address_id` dari pelanggan yang tidak berasal dari negaranya.
2.  **Manajer Toko (manager_role):**
    *   Memiliki semua hak akses Staf Biasa.
    *   Dapat melihat informasi pembayaran (payment) untuk semua pelanggan di toko yang ia kelola.
    *   Dapat memberikan diskon dengan memanggil fungsi `apply_discount(rental_id, discount_percentage)`.
3.  **Auditor Eksternal (auditor_role):**
    *   Memerlukan akses baca (read-only) ke semua data di tabel `payment` dan `rental` untuk tujuan audit.
    *   Akses ini harus dicatat (di-log) setiap kali dilakukan.
    *   Untuk menjaga anonimitas, auditor hanya boleh melihat 4 digit terakhir dari `customer_id` dan `staff_id`.

**Pertanyaan:**

a.  **Implementasi Row-Level Security (RLS):** Untuk mengimplementasikan kebijakan nomor 1, jelaskan bagaimana Anda akan menggunakan fitur Row-Level Security (RLS) pada tabel `customer` dan `rental`. Buatlah contoh policy SQL (pseudo-code atau sintaks PostgreSQL) untuk tabel `customer` yang membatasi akses staf hanya ke pelanggan dari toko mereka. Asumsikan ada cara untuk mendapatkan `store_id` staf yang sedang login (misalnya, melalui `current_user` atau variabel sesi).

b.  **Desain View dan Hak Akses Prosedural:**
    1.  Bagaimana Anda akan mendesain sebuah VIEW (`v_customer_secure`) untuk memenuhi kebijakan nomor 1 dan 3 sekaligus (menyembunyikan email/alamat untuk staf luar negeri dan menyamarkan ID untuk auditor)?
    2.  Untuk kebijakan nomor 2, mengapa memberikan hak EXECUTE pada sebuah stored procedure (`apply_discount`) lebih aman daripada memberikan hak UPDATE langsung pada tabel `payment` kepada `manager_role`? Jelaskan dari perspektif principle of least privilege.

c.  **Auditing dengan Trigger:** Rancang sebuah TRIGGER dan tabel log (`audit_log`) untuk mencatat semua akses baca oleh `auditor_role` ke tabel `payment` (kebijakan nomor 3). Tabel `audit_log` setidaknya harus mencatat siapa yang mengakses, tabel apa yang diakses, dan kapan waktu aksesnya. Tuliskan DDL untuk tabel `audit_log` dan kode (pseudo-code) untuk trigger function yang akan dijalankan setiap kali ada SELECT pada tabel `payment` oleh seorang auditor.

---

### **Soal 6: Skenario Bencana dan Strategi Recovery**
Sebuah insiden terjadi di pusat data "Gemini Films": sebuah lonjakan listrik merusak sebagian blok disk tempat file-file data (data files) dan file log transaksi (transaction log / WAL) disimpan. Kejadian ini terjadi pada pukul 14:02. Checkpoint terakhir yang berhasil diselesaikan oleh sistem terjadi pada pukul 14:00.

**Kondisi Saat Bencana:**

*   **Backup Penuh (Full Backup)** terakhir diambil pada pukul 00:00 (tengah malam).
*   **T1 (Committed):** Transaksi penyewaan film oleh customer A, COMMIT terjadi pukul 14:01. Data perubahannya sudah ditulis ke WAL di disk, tetapi belum tentu sudah ditulis dari buffer cache ke file data di disk.
*   **T2 (Committed):** Transaksi pembayaran oleh customer B, COMMIT terjadi pukul 14:01:30. Data perubahannya sudah ditulis ke WAL, namun DB writer belum sempat menyalin dirty pages-nya ke disk.
*   **T3 (In-flight/Active):** Transaksi update data customer C sedang berjalan dan belum COMMIT saat sistem crash. Beberapa perubahannya mungkin sudah masuk ke buffer cache dan bahkan ke WAL.
*   **T4 (Aborted):** Transaksi yang gagal karena violation constraint dan sudah di-ROLLBACK pada pukul 13:59.

**Pertanyaan:**

a.  **Analisis Fase Recovery (ARIES):** Jelaskan langkah-langkah yang akan diambil oleh Database Management System (DBMS) untuk memulihkan basis data ke keadaan konsisten terakhir menggunakan algoritma ARIES (atau model log-based recovery serupa). Uraikan tiga fase utama:
    1.  **Analysis Phase:** Apa yang diidentifikasi oleh sistem saat memindai log dari checkpoint terakhir hingga akhir log? Transaksi mana (T1, T2, T3, T4) yang akan masuk ke dalam dirty page table dan active transaction table?
    2.  **Redo Phase:** Operasi dari transaksi mana yang akan di-redo (diterapkan kembali)? Jelaskan mengapa, bahkan untuk transaksi yang nantinya akan di-undo.
    3.  **Undo Phase:** Operasi dari transaksi mana yang akan di-undo (dibatalkan)? Jelaskan bagaimana sistem membatalkan perubahan ini menggunakan log.

b.  **Prinsip Write-Ahead Logging (WAL):** Mengapa prinsip Write-Ahead Logging (WAL) sangat krusial untuk keberhasilan proses recovery ini? Jelaskan apa yang akan terjadi jika T1 melakukan COMMIT dan perubahannya langsung ditulis ke file data di disk sebelum record log-nya dijamin sudah ada di disk.

c.  **Point-in-Time Recovery (PITR):** Dua jam setelah basis data berhasil dipulihkan (kembali online), seorang manajer menyadari bahwa seorang staf melakukan kesalahan fatal dengan menghapus data semua pelanggan dari Kanada pada pukul 13:55 (sebelum crash). Untungnya, perusahaan menggunakan log archiving. Jelaskan secara konseptual bagaimana seorang DBA dapat menggunakan full backup (pukul 00:00) dan arsip WAL untuk memulihkan basis data ke keadaan tepat sebelum insiden penghapusan terjadi (misalnya, ke pukul 13:54), tanpa kehilangan transaksi sah seperti T4 yang sudah di-rollback. Apa tantangan utama dalam melakukan PITR?