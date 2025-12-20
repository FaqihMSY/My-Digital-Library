# Latihan Soal: Performance Engineering

## Bagian 1: Konsep Fundamental

**1. Manakah dari pernyataan berikut yang merupakan tujuan utama dari Performance Engineering dalam konteks pengembangan sistem?**

- A. Meningkatkan pendapatan dengan memastikan sistem bekerja optimal.
- B. Menjamin kode bebas dari bug logika bisnis (Functional Errors).
- C. Mengoptimalkan penyediaan (provisioning) dan pemanfaatan infrastruktur.
- D. Menghindari kegagalan sistem yang mengharuskan pembuangan usaha pengembangan (scrapping development effort).
- E. Membuat antarmuka pengguna (UI) menjadi lebih artistik dan modern.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D**

**Penjelasan:** Opsi B adalah ranah Functional Testing/Software Engineering, bukan fokus utama Performance Engineering. Opsi E berkaitan dengan UX/UI Design. Dokumen secara spesifik menyebutkan peningkatan revenue, optimalisasi infrastruktur, dan menghindari kegagalan total sebagai objektif.
:::

---

**2. Dalam Performance Engineering, performa dikategorikan ke dalam tiga pilar utama. Manakah di antara berikut ini yang termasuk dalam kategori tersebut?**

- A. Speed (Kecepatan)
- B. Security (Keamanan)
- C. Scalability (Skalabilitas)
- D. Stability (Stabilitas)
- E. Sustainability (Keberlanjutan Kode)

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D**

**Penjelasan:** Dokumen mendefinisikan "3 S" dalam kategori performa: Speed, Scalability, Stability. Security dan Sustainability adalah aspek kualitas perangkat lunak lainnya, namun bukan kategori utama dalam definisi Performance Engineering di dokumen ini.
:::

---

**3. Berdasarkan hukum dasar performa (Utilization Law dan Little's Law), manakah formula atau pernyataan yang BENAR?**

- A. $U = T \times S$ (Utilization = Throughput $\times$ Service Time).
- B. Utilitas server tunggal ($U$) boleh melebihi 1 ($U > 1$) dalam kondisi stabil.
- C. $q = T \times R$ (Queue Length = Throughput $\times$ Response Time).
- D. $R = T / q$ (Response Time = Throughput / Queue Length).
- E. Hukum Little mengaitkan rata-rata panjang antrian, throughput, dan waktu respons.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, E**

**Penjelasan:** Opsi B salah karena utilitas ($U$) harus $< 1$ untuk server tunggal agar tidak jenuh total. Opsi D salah secara matematis berdasarkan turunan hukum Little ($R = q / T$).
:::

---

**4. Agar sebuah metrik performa dapat diandalkan dalam analisis teknik, properti apa saja yang harus dimilikinya?**

- A. Linearity (Linearitas).
- B. Subjectivity (Subjektivitas).
- C. Repeatability (Dapat diulang dengan hasil serupa).
- D. Consistency (Konsistensi).
- E. Complexity (Kompleksitas perhitungan).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D**

**Penjelasan:** Metrik harus objektif, bukan subjektif (Opsi B salah). Metrik juga harus mudah diukur (Ease of Measurement), bukan kompleks (Opsi E salah). Properti yang valid meliputi reliabilitas, konsistensi, dan independensi.
:::

---

**5. Dalam konteks Performance Engineering untuk Web App, manakah praktik manajemen database yang DISARANKAN untuk menjaga performa?**

- A. Menggunakan `SELECT *` untuk memastikan semua data terambil agar fleksibel di sisi aplikasi.
- B. Memisahkan proses Business Intelligence/Analytics dari pemrosesan transaksi utama.
- C. Menghindari penggunaan `SORT BY` dan `GROUP BY` jika tidak sangat diperlukan.
- D. Selalu melakukan `SELECT` untuk mengecek keberadaan data sebelum melakukan `UPDATE`.
- E. Melakukan pengarsipan (archive) data lama daripada membiarkannya menumpuk di tabel aktif.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, E**

**Penjelasan:** Opsi A adalah praktik buruk (bad practice) yang memboroskan I/O dan memori. Opsi D juga disarankan untuk dihindari ("Avoid SELECT before UPDATE") karena menambah round-trip database yang tidak perlu; lebih baik gunakan mekanisme upsert atau update langsung dengan kondisi.
:::

---

## Bagian 2: Capacity Planning & Design

**6. Saat merancang kapasitas untuk sistem transaksi dengan pendekatan "Konservatif" (Conservative Strategy), langkah apa yang sebaiknya diambil?**

- A. Mengasumsikan aplikasi mendapatkan 100% waktu CPU secara eksklusif.
- B. Mengalokasikan target penggunaan CPU hanya 50% dari total kapasitas.
- C. Mengasumsikan bahwa beban transaksi selalu merata (smooth) tanpa lonjakan.
- D. Memperhitungkan pertumbuhan sistem di masa depan.
- E. Mengabaikan overhead dari proses background (seperti update display atau backup DB).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, D**

**Penjelasan:** Opsi A, C, dan E adalah asumsi "Optimis" yang berbahaya dan sering menyebabkan kegagalan kapasitas. Pendekatan konservatif (Opsi B) memotong target menjadi setengah (50%) dan mengantisipasi sistem tidak linear/"lumpy" (Opsi D).
:::

---

**7. Manakah prinsip desain Web App yang secara langsung mendukung skalabilitas (scalability) sistem?**

- A. Stateless (Tanpa status di server).
- B. Tightly Coupled (Sangat terikat antar komponen).
- C. Asynchronous (Asinkron).
- D. Loosely Coupled (Ketergantungan rendah antar komponen).
- E. Synchronous Blocking (Pemrosesan sinkron yang memblokir).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D**

**Penjelasan:** Tightly coupled dan Synchronous blocking adalah musuh skalabilitas karena menciptakan ketergantungan dan bottleneck. Skalabilitas didukung oleh arsitektur yang lepas, asinkron, dan tidak menyimpan state sesi di server aplikasi.
:::

---

**8. Dalam studi kasus, sistem mengalami masalah performa berkala karena adanya tugas "Lumpy" (menggumpal). Apa penyebab fenomena ini dalam contoh yang diberikan?**

- A. Validasi transaksi yang memakan waktu terlalu cepat.
- B. Pembaruan tampilan (Display Update) yang berjalan setiap 10 detik.
- C. Penyimpanan statistik ke Database yang dilakukan secara sinkron setiap 10 menit.
- D. Kehabisan bandwidth jaringan secara tiba-tiba.
- E. Penggunaan memori yang bocor (memory leak).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C**

**Penjelasan:** Dokumen menyoroti dua "performance lumps": Update displays (setiap 10 detik) dan Write to DB (setiap 10 menit). Opsi D dan E mungkin masalah umum, tapi bukan konteks spesifik dari studi kasus "lumpy distribution" ini.
:::

---

**9. Selain CPU dan Memori, hal-hal apa saja yang harus dianggarkan (budgeted) dan dilacak terkait Page Load pada Web App?**

- A. Jumlah dan ukuran resource (gambar, skrip, dll).
- B. Strategi Caching.
- C. Waktu render di browser.
- D. Latensi jaringan dan DNS lookup.
- E. Jumlah baris komentar dalam kode HTML.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C, D**

**Penjelasan:** Semua opsi A-D disebutkan sebagai faktor "Noteworthy" untuk Page Load. Opsi E (komentar kode) tidak signifikan secara langsung terhadap metrik performa operasional dibandingkan ukuran file atau waktu render.
:::

---

**10. Kapan aktivitas Verify & Validate model performa sebaiknya dilakukan?**

- A. Hanya di akhir proyek sebelum rilis (User Acceptance Test).
- B. Dimulai sejak awal siklus hidup (life cycle) pengembangan.
- C. Dilakukan terus menerus sepanjang siklus hidup proyek.
- D. Hanya ketika terjadi keluhan dari pengguna.
- E. Setelah sistem crash pertama kali.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C**

**Penjelasan:** Dokumen menegaskan "Begin early in the life cycle and continue throughout life cycle". Menunda hingga akhir (Opsi A) atau menunggu masalah (Opsi D/E) adalah pendekatan yang salah dalam Performance Engineering.
:::

---

## Bagian 3: Metrik & Pemodelan

**11. Bagaimana Response Time didefinisikan secara teknis dalam dokumen?**

- A. Waktu saat aktivitas dimulai dikurangi waktu saat aktivitas selesai.
- B. Selisih antara waktu aktivitas selesai dengan waktu saat aktivitas diinisiasi.
- C. Response Time = Wait Time + Service Time.
- D. Hanya waktu yang dihabiskan CPU untuk memproses permintaan (Service Time).
- E. Jumlah transaksi per detik.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C**

**Penjelasan:** Opsi A terbalik. Opsi D hanya mencakup Service Time, padahal Response Time mencakup waktu tunggu antrian (Wait Time). Opsi E adalah definisi Throughput.
:::

---

**12. Dalam memodelkan performa, apa saja elemen kunci yang harus diidentifikasi dalam Performance Scenarios?**

- A. Identifikasi dan karakterisasi beban kerja (Workload).
- B. Skenario Benchmark.
- C. Persyaratan performa yang presisi (misal: Response time, Throughput).
- D. Warna tombol pada antarmuka pengguna.
- E. Anggaran biaya pemasaran produk.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C**

**Penjelasan:** Opsi D dan E tidak relevan dengan pemodelan teknis performa sistem. Elemen kuncinya adalah beban kerja, tolok ukur (benchmark), dan persyaratan kuantitatif (response time/throughput).
:::

---

**13. Manakah yang merupakan tantangan nyata dalam melakukan Performance Engineering?**

- A. Memilih alat (tool) yang tepat.
- B. Mengidentifikasi masalah yang bersifat intermiten (kadang muncul, kadang tidak).
- C. Mengatur perilaku pengguna simulasi agar sesuai dengan kebijakan/realita.
- D. Menulis dokumentasi kode yang rapi.
- E. Melakukan pengukuran waktu respons yang akurat.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C, E**

**Penjelasan:** Opsi D adalah praktik Software Engineering yang baik, tapi bukan tantangan spesifik dalam aktivitas testing dan tuning performa yang disebutkan dalam slide "Challenges in PE".
:::

---

**14. Dokumen menyebutkan strategi "Adapt-to-Precision". Apa maksud dari strategi ini?**

- A. Selalu menggunakan model yang paling kompleks sejak awal.
- B. Menyesuaikan detail yang direpresentasikan dalam model dengan pengetahuan yang dimiliki tentang detail pemrosesan software.
- C. Menggunakan estimasi kasus terbaik dan terburuk saja.
- D. Memulai dengan model paling sederhana untuk mengidentifikasi masalah arsitektur.
- E. Mengubah presisi model seiring bertambahnya informasi/kematangan desain.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, E**

**Penjelasan:** Opsi A salah karena membuang sumber daya. Opsi C adalah "Best and Worst-case Strategy". Opsi D adalah "Simple-Model Strategy". Adapt-to-Precision berfokus pada kesesuaian tingkat detail model dengan pengetahuan yang tersedia saat itu.
:::

---

**15. Berdasarkan contoh kegagalan sistem perpajakan (E-Filing) dan Paspor yang dibahas, apa akar masalah utamanya?**

- A. Kode program tidak ditulis dengan bahasa Java.
- B. Kapasitas jaringan dan bandwidth tidak mencukupi saat peak time (tenggat waktu).
- C. Adanya permohonan fiktif (bogus applications) yang membebani sistem.
- D. Pengguna lupa password mereka.
- E. Kurangnya pengujian beban (load testing) yang memadai sebelum rilis.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, E**

**Penjelasan:** Slide menyebutkan masalah bandwidth karena pelaporan di batas waktu (pajak) dan aplikasi fiktif yang membuat antrian sistem terjadwal (paspor). Ini mengindikasikan kegagalan dalam capacity planning dan testing (Opsi E adalah implikasi logis dari kegagalan tersebut). Opsi A dan D tidak relevan dengan studi kasus.
:::

---

## Bagian 4: Observability & Optimization

**16. Untuk memastikan sistem dapat dipantau (observable), komponen apa yang harus diimplementasikan?**

- A. Log (Pencatatan kejadian).
- B. Metrics (Data kuantitatif).
- C. Traces (Penelusuran jejak request).
- D. Comments (Komentar di dalam kode).
- E. Unit Tests.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C**

**Penjelasan:** Dalam slide "Web App Design", tiga pilar observabilitas yang disebut secara spesifik adalah Log, Metrics, dan Traces. Komentar dan Unit Test berguna untuk maintainability, bukan runtime observability.
:::

---

**17. Langkah apa yang dilakukan jika evaluasi model performa menunjukkan hasil "Infeasible" (Tidak Layak)?**

- A. Memodifikasi konsep produk.
- B. Merevisi persyaratan performa.
- C. Langsung melanjutkan ke tahap implementasi dan berharap terbaik.
- D. Menambah sumber daya perangkat keras tanpa analisis.
- E. Memodifikasi atau membuat skenario baru.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, E**

**Penjelasan:** Berdasarkan diagram alir "Modeling Performance", jika hasil evaluasi "infeasible", panah mengarah ke: Modify product concept, Revise performance requirements, atau Modify/create scenarios. Mengabaikan hasil (Opsi C) adalah kesalahan fatal.
:::

---

**18. Terkait penggunaan Database Lock dalam studi kasus pembaruan statistik, apa dampak yang harus diwaspadai?**

- A. Locking meningkatkan concurrency sistem secara drastis.
- B. Tindakan sinkronisasi (seperti menulis ke DB) dapat memblokir ("lock out") bagian lain dari aplikasi.
- C. Locking yang tidak bijak dapat menyebabkan masalah distribusi beban ("lumps").
- D. Locking memastikan data tidak pernah konsisten.
- E. Penggunaan lock harus dilakukan dengan bijak (wisely).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, E**

**Penjelasan:** Opsi A salah, locking justru menurunkan concurrency (karena antrian). Opsi B dan C adalah inti masalah pada studi kasus di mana update statistik memblokir transaksi selama beberapa detik. Opsi E adalah saran yang tertulis di slide.
:::

---

**19. Definisi yang benar mengenai Throughput adalah:**

- A. Waktu yang dibutuhkan untuk menyelesaikan satu tugas.
- B. Laju (rate) di mana sistem menyelesaikan unit aktivitas tertentu.
- C. Rasio antara waktu sibuk CPU dengan total waktu.
- D. Jumlah total data yang tersimpan di database.
- E. Kebalikan dari waktu respons (dalam kondisi tertentu).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B**

**Penjelasan:** Opsi A adalah Service Time atau Response Time. Opsi C adalah Utilization. Throughput secara spesifik adalah rate (kecepatan per satuan waktu), misalnya transaksi per detik (TPS).
:::

---

**20. Aktivitas apa saja yang termasuk dalam cakupan kerja Performance Engineering?**

- A. Regression Test untuk performa.
- B. Capacity Planning (Perencanaan Kapasitas).
- C. System Diagnostics (Diagnostik Sistem/Profiling).
- D. Performance Tuning and Optimization.
- E. Functional Requirement Gathering.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C, D**

**Penjelasan:** Opsi E (Pengumpulan kebutuhan fungsional) adalah bagian dari analisis sistem awal/Software Engineering umum. Performance Engineering fokus pada aspek non-fungsional (Testing, Tuning, Diagnostics, Capacity) seperti yang tertera pada slide "Part of Performance Engineering".
:::