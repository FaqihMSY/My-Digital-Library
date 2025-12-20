# Latihan Soal: Security & Privacy

## Bagian 1: Konsep Dasar Keamanan & CIA Triad

**1. Manakah dari pernyataan berikut yang secara akurat memetakan jenis ancaman (threat) terhadap properti keamanan (CIA Triad) yang dilanggarnya?**

- A. Serangan Interception melanggar Confidentiality.
- B. Serangan Modification melanggar Availability.
- C. Serangan Interruption melanggar Availability.
- D. Serangan Fabrication melanggar Integrity.
- E. Serangan Interception melanggar Integrity.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D**

**Penjelasan:** Modification mengubah data, sehingga melanggar Integrity, bukan Availability. Interception adalah penyadapan (akses tidak sah), melanggar Confidentiality. Interruption memutus akses (Availability). Fabrication membuat objek palsu (Integrity).
:::

---

**2. Dalam konteks terminologi keamanan sistem, manakah hubungan sebab-akibat yang BENAR antara Vulnerability, Threat, dan Control?**

- A. Control adalah ukuran protektif yang menutup atau meminimalisir Threat.
- B. Vulnerability adalah serangkaian keadaan yang berpotensi menyebabkan kerugian.
- C. Attack terjadi ketika manusia mengeksploitasi Vulnerability.
- D. Control bertujuan untuk mencegah, menghalangi, mengalihkan, mendeteksi, atau memulihkan sistem.
- E. Threat adalah kelemahan intrinsik dalam sistem keamanan yang belum ditambal.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: C, D**

**Penjelasan:** Opsi A salah karena Control menutup Vulnerability, bukan Threat (Threat adalah faktor eksternal). Opsi B dan E tertukar definisinya: Vulnerability adalah kelemahan (weakness), sedangkan Threat adalah potensi bahaya (circumstances causing loss/harm).
:::

---

## Bagian 2: Web Security Mechanics (CORS, SOP, HTTP)

**3. Mengenai Cross-Origin Resource Sharing (CORS) dan Same-Origin Policy, manakah implikasi teknis yang valid?**

- A. Secara default, browser mengizinkan same-origin requests (domain, protokol, dan port yang sama).
- B. CORS adalah mekanisme HTTP header yang memungkinkan server untuk "melonggarkan" aturan Same-Origin Policy.
- C. CORS bertujuan untuk memblokir semua request dari domain eksternal demi keamanan.
- D. Tanpa header CORS yang tepat, Main request (seperti GET image) dari domain berbeda akan selalu gagal di sisi server.
- E. Header CORS dikirim oleh server untuk memberitahu browser origin mana yang diizinkan memuat resource.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, E**

**Penjelasan:** Opsi C salah total; CORS justru mengizinkan sharing, bukan memblokir (SOP yang memblokir). Opsi D salah karena request mungkin berhasil di server, tapi responnya diblokir oleh browser, atau tergantung tipe request (simple vs preflight).
:::

---

**4. Mengapa Network Layer Security (seperti Firewall dan SSL/TLS) seringkali gagal mencegah serangan pada Application Layer?**

- A. Firewall jaringan biasanya hanya memeriksa port dan alamat IP, bukan isi konten trafik HTTP.
- B. SSL/TLS mengenkripsi trafik, sehingga serangan (seperti SQL Injection) di dalam payload justru tidak terbaca oleh IDS jaringan.
- C. Application Layer tidak memiliki perimeter keamanan yang jelas karena kode aplikasi kustom memiliki banyak celah logika.
- D. Network Security tidak bisa membedakan antara request SQL yang valid dan yang berbahaya jika sintaksnya benar secara protokol TCP/IP.
- E. Firewall tidak bisa melakukan Hardening pada sistem operasi.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C, D**

**Penjelasan:** Semua opsi A-D benar. Opsi E salah karena Hardening OS adalah bagian dari strategi pertahanan lapis infrastruktur yang sering diasosiasikan dengan keamanan jaringan/sistem, namun poin utamanya adalah ketidakmampuan firewall jaringan membaca logic aplikasi.
:::

---

## Bagian 3: Injection Attacks (SQLi & XSS)

**5. Sebuah form login menerima input Account dan SKU. Jika input Account diisi dengan string `' OR 1=1 --`, manakah pernyataan teknis yang benar mengenai mekanisme serangan ini?**

- A. Tanda `--` berfungsi untuk mengomentari (mengabaikan) sisa perintah SQL asli di belakang input.
- B. Serangan ini bertujuan untuk melakukan Buffer Overflow pada memori database.
- C. Kondisi `1=1` selalu bernilai True, menyebabkan query mengembalikan semua baris atau baris pertama tabel (biasanya admin).
- D. Ini adalah contoh Cross-Site Scripting karena menggunakan karakter khusus.
- E. Input tersebut memanipulasi struktur logika query SQL yang dieksekusi oleh database.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, E**

**Penjelasan:** Opsi B salah, ini adalah SQL Injection (SQLi), bukan Buffer Overflow. Opsi D salah, ini SQLi, bukan XSS. XSS melibatkan Javascript, SQLi melibatkan perintah database.
:::

---

**6. Analisis serangan Cross-Site Scripting (XSS). Manakah skenario atau karakteristik yang VALID?**

- A. Dalam Stored XSS, skrip berbahaya disimpan di database server dan dieksekusi setiap kali korban memuat halaman tersebut.
- B. Dampak utama XSS adalah penyerang bisa mendapatkan akses penuh ke DOM (Document Object Model) dan cookies korban.
- C. XSS dapat dicegah sepenuhnya dengan menggunakan SSL/HTTPS.
- D. Serangan ini terjadi karena aplikasi gagal memvalidasi atau melakukan encoding pada input pengguna sebelum menampilkannya kembali ke browser.
- E. XSS menyerang database server secara langsung untuk menghapus tabel.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D**

**Penjelasan:** Opsi C salah; HTTPS hanya mengenkripsi jalur, tidak mencegah eksekusi skrip jahat di browser. Opsi E salah; XSS adalah serangan client-side, targetnya adalah user/browser, bukan menghapus tabel server (itu SQLi).
:::

---

**7. Diberikan potongan kode respons server berikut:**

```html
<p>Your query for 'cookies<script>malicious-script</script>' returned...</p>
```

**Apa kesimpulan keamanan yang dapat ditarik?**

- A. Aplikasi rentan terhadap Reflected XSS.
- B. Aplikasi telah melakukan sanitasi input dengan benar.
- C. Browser akan mengeksekusi tag `<script>` tersebut.
- D. Server secara otomatis memblokir karakter `<` dan `>`.
- E. Input pengguna dikembalikan mentah-mentah (echoed back) dalam respon HTTP.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, E**

**Penjelasan:** Opsi B dan D salah karena tag script tercetak utuh di output, artinya tidak ada sanitasi/encoding, dan browser akan menganggapnya sebagai kode executable.
:::

---

## Bagian 4: Session Management & Authentication

**8. Mengenai serangan Session Hijacking dan mitigasinya, manakah pernyataan yang benar?**

- A. Penyerang harus mengetahui password pengguna untuk melakukan pembajakan sesi.
- B. Session Cookie dapat dicuri melalui XSS atau Network Sniffing (jika tidak dienkripsi).
- C. Menggunakan timeout sesi yang pendek dapat mengurangi jendela waktu eksploitasi jika cookie bocor.
- D. Session Hijacking terjadi ketika pengguna membuat sesi baru tanpa melakukan logout.
- E. Mewajibkan HTTPS membantu mencegah pencurian cookie melalui monitoring trafik jaringan.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, E**

**Penjelasan:** Opsi A salah; inti pembajakan sesi adalah mengambil alih akses tanpa perlu tahu password (cukup session ID). Opsi D salah; itu hanya bad practice, bukan definisi hijacking.
:::

---

**9. Sebuah sistem menerapkan kebijakan: "Kunci akun pengguna setelah 3 kali percobaan login gagal". Apa implikasi keamanan (trade-off) dari kebijakan ini?**

- A. Kebijakan ini efektif mencegah Brute Force Attack secara online.
- B. Kebijakan ini membuka celah untuk serangan Denial of Service (DoS) yang menargetkan user spesifik (Lockout attack).
- C. Kebijakan ini memastikan Non-Repudiation.
- D. Penyerang dapat dengan sengaja memasukkan password salah pada akun korban untuk mencegah pemilik asli masuk.
- E. Kebijakan ini adalah satu-satunya cara mencegah akses database ilegal.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D**

**Penjelasan:** Opsi C dan E salah. Trade-off klasik: mencegah brute force (A) tapi memungkinkan penyerang memblokir akses user sah (B, D).
:::

---

**10. Dalam konteks Authentication Factors, manakah pengelompokan yang tepat?**

- A. Password dan PIN adalah faktor Knowledge (Sesuatu yang Anda tahu).
- B. Sidik jari (Fingerprint) adalah faktor Possession (Sesuatu yang Anda miliki).
- C. Ponsel atau Token Hardware adalah faktor Possession (Sesuatu yang Anda miliki).
- D. Retina scan adalah faktor Attribute (Sesuatu yang melekat pada Anda/Biometrik).
- E. Jawaban "Nama Gadis Ibu Kandung" adalah faktor Attribute.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D**

**Penjelasan:** Opsi B salah, sidik jari adalah Attribute/Biometric, bukan Possession. Opsi E salah, pertanyaan keamanan adalah Knowledge.
:::

---

## Bagian 5: Authorization & Access Control

**11. Apa perbedaan mendasar antara Authentication dan Authorization?**

- A. Authentication memverifikasi "Siapa Anda", Authorization menentukan "Apa yang boleh Anda lakukan".
- B. Authentication menggunakan Access Control List (ACL), Authorization menggunakan Password.
- C. Authorization terjadi setelah proses Authentication berhasil.
- D. Authentication menjamin Integrity, Authorization menjamin Availability.
- E. Contoh Authorization adalah izin Read-Only pada folder yang dibagikan.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, E**

**Penjelasan:** Opsi B terbalik. Opsi D tidak relevan secara definisi langsung. AuthN = Identitas, AuthZ = Izin Akses.
:::

---

**12. Bagaimana Access Control Lists (ACLs) bekerja dalam membatasi akses sumber daya?**

- A. ACL adalah tabel yang menghubungkan pengguna (user) dengan sumber daya (resources) beserta izin spesifiknya.
- B. Penggunaan grup dalam ACL dapat mengurangi kompleksitas dan ukuran tabel izin secara dramatis.
- C. ACL menggantikan kebutuhan akan Encryption pada file.
- D. ACL mendefinisikan kebijakan akses, misalnya User A boleh membaca File X tapi tidak boleh mengedit.
- E. ACL hanya efektif jika diterapkan di Network Layer.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D**

**Penjelasan:** Opsi C salah; enkripsi melindungi kerahasiaan konten, ACL melindungi akses logis. Opsi E salah; ACL justru fundamental di sistem operasi dan aplikasi (Application Layer).
:::

---

## Bagian 6: Privacy & Data Protection

**13. Berdasarkan prinsip perlindungan data (Data Protection Principles), manakah tindakan yang dianggap melanggar prinsip Data Lifetime dan Purpose?**

- A. Menyimpan data pelanggan selamanya meskipun akun mereka sudah dihapus.
- B. Menggunakan data nomor telepon yang dikumpulkan untuk verifikasi keamanan (2FA) sebagai target iklan marketing tanpa izin.
- C. Memberikan fitur bagi pengguna untuk mengunduh dan memperbaiki data pribadi mereka.
- D. Mengenkripsi data sensitif saat disimpan di database.
- E. Menghapus data pribadi segera setelah tujuan pengumpulannya tercapai.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B**

**Penjelasan:** Opsi A melanggar prinsip Data Lifetime (jangan simpan lebih lama dari kebutuhan). Opsi B melanggar prinsip Purpose (tujuan penggunaan data harus spesifik dan ditaati). C, D, E adalah praktik yang benar (Good Practice).
:::

---

**14. Prinsip Awareness and Control dalam privasi menuntut pengembang aplikasi untuk:**

- A. Menyembunyikan detail teknis pengumpulan data agar user tidak bingung.
- B. Memberitahu pengguna data apa saja yang dikumpulkan saat menggunakan produk.
- C. Memberikan kendali kepada pengguna atas informasi pribadi yang dikumpulkan.
- D. Meminta persetujuan (Consent) sebelum mengungkapkan data ke pihak ketiga.
- E. Menyimpan data di negara dengan hukum perlindungan data yang paling lemah untuk efisiensi biaya.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, D**

**Penjelasan:** Opsi A melanggar transparansi. Opsi E melanggar prinsip Location (harus di negara dengan perlindungan setara atau kuat).
:::

---

## Bagian 7: Security Controls & Defense Strategy

**15. Manakah dari berikut ini yang termasuk dalam kategori Security Control tipe "Prevent" (Mencegah) dan "Detect" (Mendeteksi)?**

- A. Menggunakan HTTPS untuk mencegah penyadapan session cookie.
- B. Menganalisis log trafik untuk mengidentifikasi pola serangan brute force.
- C. Melakukan backup database untuk memulihkan data setelah serangan Ransomware.
- D. Menutup celah kerentanan (patching vulnerability) pada kode aplikasi.
- E. Memindahkan target serangan ke server Honeypot (Deflect).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D**

**Penjelasan:** Opsi A dan D adalah pencegahan (Prevent). Opsi B adalah deteksi (Detect). Opsi C adalah pemulihan (Recover), dan Opsi E adalah pengalihan (Deflect).
:::

---

**16. Mengapa Input Validation dianggap sebagai pertahanan krusial dalam keamanan aplikasi web?**

- A. Dapat mencegah serangan Injection (SQLi) dengan menolak karakter berbahaya.
- B. Dapat mencegah XSS dengan memastikan input tidak mengandung tag HTML yang dapat dieksekusi.
- C. Input validation menggantikan kebutuhan akan autentikasi user.
- D. Validasi harus dilakukan di sisi klien (browser) saja agar server tidak terbebani.
- E. Merupakan kontrol utama untuk memastikan data yang masuk ke sistem sesuai dengan format yang diharapkan.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, E**

**Penjelasan:** Opsi C salah. Opsi D sangat berbahaya; validasi wajib dilakukan di server karena validasi klien bisa dilewati (bypassed) dengan mudah oleh penyerang.
:::

---

## Bagian 8: OWASP Top 10 Trends

**17. Melihat evolusi OWASP Top 10 dari 2017 ke 2021, perubahan manakah yang signifikan dan mencerminkan pergeseran tren keamanan modern?**

- A. Injection turun peringkat (bukan lagi nomor 1) digantikan oleh Broken Access Control.
- B. Insecure Design diperkenalkan sebagai kategori baru pada tahun 2021.
- C. Server-Side Request Forgery (SSRF) dihapus dari daftar karena sudah jarang terjadi.
- D. Cryptographic Failures (sebelumnya Sensitive Data Exposure) naik peringkat menjadi ancaman utama (urutan ke-2).
- E. Cross-Site Scripting (XSS) dipisahkan menjadi kategori sendiri yang lebih besar di 2021.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D**

**Penjelasan:** Opsi C salah, SSRF justru baru masuk di 2021. Opsi E salah, XSS justru digabung ke dalam kategori Injection di 2021, tidak berdiri sendiri lagi seperti di 2017.
:::

---

**18. Kategori Using Components with Known Vulnerabilities (Menggunakan Komponen dengan Kerentanan yang Diketahui) menyiratkan risiko apa?**

- A. Risiko menggunakan library pihak ketiga yang belum di-update.
- B. Bahaya menggunakan sistem operasi bajakan.
- C. Risiko keamanan pada supply chain perangkat lunak.
- D. Risiko yang timbul karena menulis kode SQL manual daripada menggunakan ORM.
- E. Pentingnya memantau CVE (Common Vulnerabilities and Exposures) terkait dependensi aplikasi.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, E**

**Penjelasan:** Opsi B terlalu umum dan biasanya terkait lisensi/legal meski berisiko. Opsi D berkaitan dengan Injection, bukan komponen rentan. Poin kuncinya adalah library/dependency eksternal.
:::

---

## Bagian 9: Advanced Technical Scenarios

**19. Jika sebuah aplikasi web mengizinkan user mengupload file gambar, namun tidak memvalidasi konten filenya, serangan apa yang mungkin terjadi?**

- A. Penyerang mengupload file PHP/Shell yang menyamar sebagai gambar untuk mendapatkan Remote Code Execution.
- B. Penyerang melakukan SQL Injection melalui nama file.
- C. Stored XSS jika nama file ditampilkan kembali tanpa escaping.
- D. Man-in-the-Middle Attack pada koneksi server.
- E. Server akan otomatis terenkripsi oleh Ransomware.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C**

**Penjelasan:** Opsi A adalah risiko terbesar (Unrestricted File Upload). B dan C mungkin terjadi melalui metadata file (nama file). D dan E bukan dampak langsung dari upload file tanpa validasi (E butuh eksekusi, D butuh akses jaringan).
:::

---

**20. Brute Force Attacks tidak hanya sekadar menebak password secara acak. Metode apa lagi yang sering digunakan penyerang dalam kategori ini?**

- A. Dictionary Attack: Menggunakan daftar kata umum atau password populer yang pernah bocor.
- B. Menggunakan Rainbow Tables untuk membalikkan hash password yang dicuri.
- C. Mencoba kombinasi username yang valid (hasil enumeration) dengan password lemah.
- D. Menggunakan teknik Phishing untuk meminta password langsung.
- E. Memanfaatkan fakta bahwa banyak pengguna menggunakan password yang mudah diingat.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, E**

**Penjelasan:** Opsi B adalah serangan offline terhadap database password (cracking), bukan serangan brute force aktif ke form login web. Opsi D adalah Social Engineering, bukan Brute Force teknis.
:::