# Latihan Soal: Microservices Architecture

## Bagian 1: Konsep Fundamental & Definisi

**1. Manakah pernyataan di bawah ini yang secara akurat mendefinisikan karakteristik utama dari Microservices dalam konteks pemodelan domain?**

- A. Microservices memprioritaskan kohesi fungsionalitas teknis (technical functionality) di atas fungsionalitas bisnis.
- B. Microservices adalah layanan yang dapat dirilis secara independen (independently releasable).
- C. Setiap layanan dimodelkan di sekitar domain bisnis (business domain).
- D. Microservices mewajibkan penggunaan satu database terpusat untuk menjamin konsistensi data antar layanan.
- E. Arsitektur ini adalah pilihan spesifik dari pendekatan SOA (Service-Oriented Architecture).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, E**

**Penjelasan:**
- **Benar:** Microservices dimodelkan berdasarkan domain bisnis, dapat dirilis independen, dan merupakan pendekatan spesifik dari SOA.
- **Salah (A):** Dokumen menyebutkan sebaliknya: "prioritize high cohesion of business functionality over high cohesion of technical functionality".
- **Salah (D):** Microservices harus memiliki state sendiri ("Owning Their Own State") dan menghindari database bersama.
:::

---

**2. Terkait konsep Information Hiding dalam Microservices, manakah praktik yang dianggap valid?**

- A. Memperlakukan setiap microservice sebagai black box dari sudut pandang eksternal.
- B. Mengekspos detail implementasi internal agar konsumen layanan dapat melakukan optimasi query.
- C. Menyembunyikan informasi sebanyak mungkin di dalam komponen.
- D. Memisahkan fungsionalitas yang sering berubah (internal) dari kontrak eksternal yang jarang berubah.
- E. Mengizinkan layanan lain mengakses tabel database internal secara langsung (read-only) untuk performa.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D**

**Penjelasan:**
- **Benar:** Konsep utamanya adalah menyembunyikan detail internal (black box) dan hanya mengekspos kontrak eksternal.
- **Salah (B & E):** Information hiding justru melarang eksposur implementasi internal atau akses database langsung antar layanan (shared database).
:::

---

**3. Apa implikasi dari prinsip Independent Deployability?**

- A. Kita dapat mengubah satu layanan dan merilisnya ke pengguna tanpa harus menyebarkan (deploy) layanan lain.
- B. Layanan harus tightly coupled untuk memastikan integritas rilis.
- C. Perubahan pada satu layanan tidak boleh memaksa perubahan pada layanan lain (loosely coupled).
- D. Semua microservices dalam satu ekosistem harus menggunakan versi bahasa pemrograman yang sama.
- E. Deployment harus dilakukan secara serentak (bulk release) untuk fitur yang melintasi banyak layanan.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C**

**Penjelasan:**
- **Benar:** Kunci independensi adalah loose coupling agar satu layanan bisa di-deploy tanpa memengaruhi yang lain.
- **Salah (B):** Seharusnya loosely coupled.
- **Salah (D):** Tidak ada syarat keseragaman bahasa (Tech Heterogeneity adalah keuntungan).
- **Salah (E):** Ini adalah ciri khas Distributed Monolith, bukan Microservices yang ideal.
:::

---

**4. Mengenai ukuran (Size) sebuah Microservice, manakah parameter yang disarankan?**

- A. Ukurannya harus sekecil mungkin, idealnya di bawah 100 baris kode.
- B. Ukurannya dibatasi oleh kemampuan kognitif pengembang ("fit in my head").
- C. Ukuran ditentukan agar mudah dipahami.
- D. Ukuran harus seragam antar semua layanan dalam sistem.
- E. Kata "micro" menyiratkan batasan fisik memori yang ketat pada perangkat keras.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C**

**Penjelasan:**
- **Benar:** Dokumen mengutip James Lewis, "as big as my head", yang rasionalnya adalah agar mudah dipahami.
- **Salah (A & D):** Dokumen secara eksplisit menolak pengukuran berbasis jumlah baris kode (LOC) atau keseragaman kaku.
- **Salah (E):** "Micro" merujuk pada cakupan fungsionalitas, bukan batasan hardware.
:::

---

## Bagian 2: Monolith vs Microservices

**5. Identifikasi pernyataan yang benar mengenai variasi arsitektur Monolith:**

- A. Modular Monolith membagi kode ke dalam modul-modul terpisah namun tetap dalam satu proses deployment.
- B. Distributed Monolith adalah sistem yang terdiri dari banyak layanan tetapi harus di-deploy secara bersamaan.
- C. Single-Process Monolith selalu memiliki performa lebih buruk daripada Microservices.
- D. Modular Monolith memungkinkan pengerjaan modul secara independen sebelum disatukan.
- E. Distributed Monolith adalah tujuan akhir transisi dari Monolith ke Microservices.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D**

**Penjelasan:**
- **Benar:** Modular monolith terpisah secara logis (modul) tapi satu proses fisik. Distributed monolith adalah kondisi gagal di mana banyak layanan tapi coupling tinggi (deploy bersamaan).
- **Salah (C):** Monolith seringkali lebih performan karena tidak ada network latency.
- **Salah (E):** Distributed Monolith dianggap sebagai kegagalan penerapan SOA, bukan tujuan.
:::

---

**6. Apa keuntungan tetap menggunakan atau memulai dengan arsitektur Monolith?**

- A. Topologi deployment yang jauh lebih sederhana.
- B. Memudahkan code reuse tanpa perlu memisahkan library.
- C. Skalabilitas granular pada fitur tertentu lebih mudah dilakukan dibanding Microservices.
- D. Workflow pengembangan, monitoring, dan troubleshooting lebih sederhana.
- E. Menghindari masalah konsistensi data terdistribusi.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D, E**

**Penjelasan:**
- **Benar:** Semua adalah keuntungan Monolith yang disebut di dokumen.
- **Salah (C):** Skalabilitas granular (hanya membesarkan fitur tertentu) adalah keuntungan Microservices, bukan Monolith.
:::

---

**7. Mengapa Distributed Monolith dianggap bermasalah meskipun sudah terdiri dari banyak layanan?**

- A. Karena gagal memenuhi janji SOA (Service Oriented Architecture).
- B. Karena seluruh sistem tetap harus di-deploy secara bersamaan.
- C. Karena menggunakan terlalu banyak teknologi berbeda (Polyglot).
- D. Karena batas (boundaries) antar layanan terlalu longgar.
- E. Karena seringkali menggabungkan kompleksitas sistem terdistribusi dengan kekakuan monolith.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, E**

**Penjelasan:**
- **Benar:** Distributed monolith memiliki kompleksitas distribusi tapi tidak memiliki fleksibilitas deployment (harus deploy bareng).
- **Salah (C):** Masalahnya bukan pada teknologinya, tapi pada coupling-nya.
:::

---

## Bagian 3: Keuntungan Microservices

**8. Terkait Technology Heterogeneity, manakah implikasi positif yang valid?**

- A. Memungkinkan pemilihan alat yang tepat (right tool) untuk pekerjaan yang spesifik.
- B. Mewajibkan setiap layanan ditulis dalam bahasa pemrograman yang berbeda-beda.
- C. Memungkinkan penggunaan teknologi penyimpanan data (database) yang berbeda sesuai karakteristik data (misal: Graph DB untuk jejaring sosial).
- D. Mengurangi biaya lisensi software secara keseluruhan.
- E. Menghindari "Technology Fetishism".

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C**

**Penjelasan:**
- **Benar:** Bebas memilih bahasa/DB per layanan sesuai kebutuhan.
- **Salah (B):** "Bisa" berbeda bukan berarti "wajib" berbeda.
- **Salah (D):** Biaya lisensi justru sering naik (lebih banyak supporting software).
- **Salah (E):** Kebebasan teknologi justru berisiko menimbulkan "Technology Fetishism" (menggunakan teknologi baru tanpa alasan kuat), bukan menghindarinya.
:::

---

**9. Bagaimana Microservices menangani Scaling (Penskalaan)?**

- A. Kita dapat melakukan scaling hanya pada layanan yang membutuhkan sumber daya lebih.
- B. Bagian sistem yang lain dapat tetap berjalan pada perangkat keras yang lebih kecil/rendah.
- C. Seluruh aplikasi diduplikasi ke banyak server seperti pada Monolith.
- D. Menghilangkan kebutuhan akan Load Balancer.
- E. Lebih efisien dalam penggunaan sumber daya dibanding scaling monolith untuk kasus beban tidak merata.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, E**

**Penjelasan:**
- **Benar:** Targeted scaling adalah keuntungan utama.
- **Salah (C):** Itu cara scaling Monolith.
- **Salah (D):** Microservices justru sangat bergantung pada load balancing antar layanan.
:::

---

**10. Apa maksud dari keuntungan Organizational Alignment dalam Microservices?**

- A. Memungkinkan arsitektur menyesuaikan struktur organisasi (tim kecil mengerjakan codebase kecil).
- B. Mengurangi jumlah orang yang bekerja pada satu codebase yang sama.
- C. Menghilangkan kebutuhan komunikasi antar tim (Backend, Frontend, DBA).
- D. Meningkatkan produktivitas karena tim lebih otonom.
- E. Memaksa semua tim untuk berada di satu lokasi fisik yang sama.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D**

**Penjelasan:**
- **Benar:** Tim kecil, kode kecil, produktivitas tinggi, meminimalkan konflik ("delivery contention").
- **Salah (C):** Komunikasi tetap butuh, tapi batas kepemilikan lebih jelas.
- **Salah (E):** Justru membantu tim yang terdistribusi (distributed teams).
:::

---

## Bagian 4: Pain Points (Tantangan)

**11. Manakah tantangan nyata terkait Developer Experience saat beralih ke Microservices?**

- A. Runtime yang berat (seperti JVM) dapat membatasi jumlah layanan yang bisa dijalankan di laptop developer.
- B. Developer harus memahami seluruh sistem secara mendalam sebelum bisa menulis satu baris kode.
- C. Bahaya "Technology Fetishism" akibat terlalu banyaknya opsi teknologi baru.
- D. Waktu build dan deploy lokal menjadi instan karena kode lebih kecil.
- E. Kompleksitas mengelola banyak repositori dan konfigurasi lingkungan lokal.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, E**

**Penjelasan:**
- **Benar:** Dokumen menyebutkan batasan resource lokal dan godaan teknologi baru. Opsi E adalah implikasi logis dari poin A.
- **Salah (B):** Microservices justru bertujuan agar dev hanya perlu paham layanan mereka (scope kecil).
- **Salah (D):** Meskipun kode kecil, orkestrasi lokal banyak layanan seringkali lambat/rumit.
:::

---

**12. Masalah Reporting (Pelaporan) apa yang muncul pada arsitektur Microservices?**

- A. Data tersebar di banyak skema yang terisolasi secara logis.
- B. Tidak bisa lagi melakukan join tabel sederhana antar domain bisnis yang berbeda.
- C. Laporan harus dibuat dengan menggabungkan data dari berbagai sumber layanan.
- D. Database menjadi terlalu besar (monolithic database) sehingga lambat di-query.
- E. Hilangnya kemampuan untuk menyimpan data historis.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C**

**Penjelasan:**
- **Benar:** Karena "Own their own state", data terpecah-pecah. Join tradisional SQL tidak bisa dilakukan lintas layanan.
- **Salah (D):** Justru database terpecah-pecah menjadi kecil.
- **Salah (E):** Data historis tetap bisa disimpan, hanya cara aksesnya yang lebih sulit.
:::

---

**13. Tantangan Network Latency pada Microservices disebabkan oleh:**

- A. Proses yang sebelumnya lokal (in-process) kini harus melalui jaringan.
- B. Kebutuhan untuk serialisasi dan deserialisasi data.
- C. Penggunaan protokol komunikasi yang lebih lambat dibanding pemanggilan fungsi memori.
- D. Jumlah panggilan jaringan yang meningkat drastis dibanding Monolith.
- E. Penggunaan kabel jaringan fiber optik yang mahal.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C, D**

**Penjelasan:**
- **Benar:** Semua opsi A-D adalah penyebab teknis latensi yang disebut atau diimplikasikan dalam dokumen (distributed processing).
- **Salah (E):** Tidak relevan dengan arsitektur software.
:::

---

**14. Mengapa aspek Testing (Pengujian) menjadi lebih sulit?**

- A. Cakupan tes End-to-End menjadi sangat luas dan besar.
- B. Perlu menjalankan/men-deploy banyak proses layanan untuk skenario tes integrasi.
- C. Tes unit tidak lagi bisa dilakukan pada level layanan individu.
- D. Kesulitan mengonfigurasi lingkungan tes yang merepresentasikan sistem produksi.
- E. Tidak adanya framework testing untuk sistem terdistribusi.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D**

**Penjelasan:**
- **Benar:** Kompleksitas tes E2E dan konfigurasi lingkungan multi-servis adalah poin utama.
- **Salah (C):** Tes unit tetap bisa dan wajib dilakukan.
- **Salah (E):** Alat ada, tapi prosesnya yang sulit.
:::

---

**15. Mengenai Data Consistency, manakah pernyataan yang benar?**

- A. Beralih dari sistem monolithic dengan satu database ke sistem terdistribusi menimbulkan tantangan konsistensi.
- B. Transaksi ACID lintas layanan jauh lebih mudah diterapkan di Microservices.
- C. Pengelola state tersebar di berbagai database yang berbeda.
- D. Konsistensi data dijamin secara otomatis oleh protokol HTTP.
- E. Penggunaan shared database adalah solusi yang disarankan untuk masalah ini.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C**

**Penjelasan:**
- **Benar:** Konsistensi menjadi sulit karena data tersebar.
- **Salah (B):** ACID lintas layanan sangat sulit (seringkali diganti Eventual Consistency).
- **Salah (D):** Protokol transport tidak menjamin konsistensi data bisnis.
- **Salah (E):** Dokumen melarang shared database ("Microservices should avoid the use of shared databases").
:::

---

## Bagian 5: Kasus & Pengambilan Keputusan

**16. Sebuah perusahaan startup kecil dengan 3 developer ingin membangun aplikasi baru. Mengapa mereka disarankan untuk WASPADA atau menunda penggunaan Microservices?**

- A. Karena biaya awal (cost) infrastruktur dan operasional yang lebih tinggi.
- B. Karena Microservices memperlambat proses di jangka pendek (kurva belajar, setup).
- C. Karena Microservices tidak bisa berjalan di server murah.
- D. Karena masalah organisasi (banyak orang, delivery contention) belum mereka alami.
- E. Karena Monolith lebih sederhana untuk dipahami dan dioperasikan di awal.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D, E**

**Penjelasan:**
- **Benar:** Dokumen menekankan Microservices seringkali solusi masalah organisasi (banyak orang). Jika tim kecil, kompleksitasnya (Cost, Learning curve) tidak sebanding dengan manfaatnya.
- **Salah (C):** Microservices bisa berjalan di mana saja, tapi efisiensinya yang dipertanyakan untuk skala kecil.
:::

---

**17. Dalam diagram Scope of Change (Cakupan Perubahan), manakah skenario yang menunjukkan buruknya Alignment of Architecture (misal: pada Layered Architecture)?**

- A. Perubahan fitur sederhana (misal: "Show genre UI") memaksa perubahan di tiga tim berbeda (Frontend, Backend, DBA).
- B. Logika bisnis tersebar di lapisan UI, Logika, dan Database.
- C. Satu tim memiliki kendali penuh atas UI, Backend, dan Database untuk satu fitur ("Profile functionality").
- D. Perubahan pada UI tidak memerlukan perubahan pada skema database.
- E. Tim dibentuk berdasarkan lapisan teknis (UI Team, Server Team), bukan fitur bisnis.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, E**

**Penjelasan:**
- **Benar:** Skenario buruk adalah ketika perubahan kecil menyebar ke semua lapisan (coupling tinggi) dan tim terkotak-kotak secara teknis (bukan domain bisnis).
- **Salah (C & D):** Ini adalah contoh baik (Microservices/Vertical Slice).
:::

---

**18. Jika sebuah layanan (Service A) membutuhkan data dari layanan lain (Service B), apa pendekatan yang BENAR menurut prinsip Microservices dalam dokumen ini?**

- A. Service A melakukan query langsung ke database Service B.
- B. Service A meminta data tersebut kepada Service B melalui antarmuka (interface) yang disediakan.
- C. Service A dan Service B berbagi tabel database yang sama.
- D. Service B mengirimkan data secara periodik ke database Service A (replikasi).
- E. Service A membaca backup log dari Service B.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B**

**Penjelasan:**
- **Benar:** "If a microservice wants to access data held by another... it should go and ask that second microservice."
- **Salah (A & C):** Melanggar prinsip Information Hiding dan Own Their Own State.
- **Salah (D & E):** Tidak disebutkan sebagai pola standar akses data real-time dalam konteks dasar dokumen ini.
:::

---

**19. Terkait Security (Keamanan), apa resiko tambahan yang harus dikelola di Microservices?**

- A. Data yang bergerak antar layanan (data in transit) lebih rentan disadap.
- B. Perlu mengamankan lebih banyak endpoint agar hanya pihak berwenang yang bisa mengakses.
- C. Kode program menjadi terbuka untuk umum (open source) secara otomatis.
- D. Penggunaan HTTPS/TLS menjadi kurang penting karena komunikasi terjadi di jaringan internal.
- E. Autentikasi antar layanan menjadi tantangan baru.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, E**

**Penjelasan:**
- **Benar:** Karena komunikasi via jaringan, data in transit dan perlindungan endpoints menjadi krusial.
- **Salah (C):** Arsitektur tidak menentukan lisensi kode.
- **Salah (D):** Justru semakin penting, bahkan di internal (Zero Trust).
:::

---

**20. Kapan keputusan untuk menggunakan Microservices dianggap tepat?**

- A. Ketika Anda ingin menyelesaikan masalah teknis murni, bukan masalah organisasi.
- B. Ketika Anda perlu memungkinkan sejumlah besar orang bekerja pada sistem yang sama secara paralel.
- C. Ketika Anda ingin meminimalkan latensi jaringan antar komponen.
- D. Ketika kompleksitas mengelola Monolith sudah menghambat delivery speed dan rekrutmen.
- E. Ketika Anda memiliki tim kecil yang ingin mencoba teknologi terbaru.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, D**

**Penjelasan:**
- **Benar:** Dokumen menekankan: "Microservices are very often a solution to an organizational problem" (banyak orang, paralel) dan "developer experience/recruiting".
- **Salah (A):** Dokumen menyangkal ini ("rather than a technical one").
- **Salah (C):** Microservices menambah latensi.
- **Salah (E):** Alasan yang salah (Technology Fetishism).
:::