# Latihan Soal: Full Stack Testing

## Bagian 1: Arsitektur & Strategi Testing

**1. Dalam arsitektur pengujian berlapis, pengujian dilakukan pada layer UI, Services, dan Database. Manakah dari aktivitas berikut yang secara spesifik menjadi tanggung jawab pengujian pada Services Layer?**

- A. Memverifikasi integritas data dan constraints kolom tabel.
- B. Memvalidasi logika bisnis melalui endpoints API.
- C. Mengukur rendering performance pada browser klien.
- D. Memastikan keamanan (security) pada level pertukaran data backend.
- E. Menguji aksesibilitas (accessibility) elemen interaktif.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, D**

**Penjelasan:** Opsi A adalah tanggung jawab Database Layer, sedangkan C dan E adalah tanggung jawab UI Layer. Services Layer berfokus pada logika backend, API, dan keamanannya, bukan representasi visual atau penyimpanan fisik data.
:::

---

**2. Berdasarkan prinsip Test Pyramid dalam aplikasi web berorientasi layanan, karakteristik mana yang benar terkait distribusi dan sifat pengujian?**

- A. Unit Tests memiliki volume terbanyak karena eksekusinya paling cepat.
- B. End-to-End (E2E) Tests harus mencakup seluruh permutasi logika untuk menjamin kualitas maksimal.
- C. Service Tests berada di antara Unit Tests dan UI Tests dalam hal kecepatan dan isolasi.
- D. UI Tests cenderung lebih "rapuh" (brittle) dibandingkan Integration Tests.
- E. Biaya pemeliharaan (maintenance cost) menurun seiring naiknya level piramida.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D**

**Penjelasan:** Opsi B salah karena E2E mahal dan lambat; cakupan logika detail dilakukan di Unit Test. Opsi E salah karena biaya justru naik di level atas (E2E/UI) karena kompleksitas dan kerentanannya (brittleness).
:::

---

## Bagian 2: Unit & Integration Testing

**3. Manakah dari skenario berikut yang merupakan kandidat valid untuk Unit Testing yang terisolasi dengan baik?**

- A. Memverifikasi sebuah fungsi mengembalikan nilai total belanja yang benar setelah diskon negatif dimasukkan.
- B. Memastikan fungsi mengembalikan error yang sesuai saat parameter `item_prices` kosong.
- C. Memverifikasi bahwa data tersimpan (commit) ke dalam tabel database PostgreSQL yang sebenarnya.
- D. Menguji apakah method pembulatan desimal bekerja konsisten pada berbagai input angka.
- E. Memastikan API merespons dengan HTTP 200 OK saat diakses melalui network.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D**

**Penjelasan:** Opsi C dan E melibatkan komponen eksternal (Database riil dan Network), sehingga masuk ranah Integration atau Service Testing, bukan Unit Testing yang harusnya menguji logika terkecil dalam kode (in-memory).
:::

---

**4. Apa tujuan utama dari Integration Testing dalam konteks layanan mikro atau aplikasi terdistribusi?**

- A. Menguji detail fungsionalitas end-to-end dari perspektif pengguna.
- B. Memverifikasi komunikasi yang sukses antara Order Service dan Database.
- C. Memastikan penanganan positive/negative integration flows antar komponen internal.
- D. Menggantikan kebutuhan akan Unit Testing karena cakupannya lebih luas.
- E. Memastikan Service dapat bertukar pesan dengan External Services (pihak ketiga) dengan benar.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, E**

**Penjelasan:** Opsi A adalah ranah E2E. Opsi D salah fatal karena Integration Testing tidak memeriksa logika bisnis mendetail (seperti if-else paths) yang menjadi tugas Unit Testing.
:::

---

**5. Mengapa Contract Testing dianggap krusial dalam pengembangan sistem yang melibatkan banyak layanan (services)?**

- A. Memungkinkan pengembangan menggunakan stubs karena struktur kontrak telah disepakati.
- B. Memverifikasi bahwa data yang dikirim memiliki nilai yang presisi 100% sama dengan database produksi.
- C. Memberikan notifikasi kepada layanan yang bergantung (dependent service) jika terjadi perubahan struktur pada provider.
- D. Menggantikan dokumentasi API sepenuhnya.
- E. Fokus memvalidasi struktur respons (schema) daripada ketepatan logika bisnis data tersebut.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, E**

**Penjelasan:** Opsi B salah karena Contract Testing fokus pada bentuk/struktur data (apakah field 'id' ada dan bertipe integer?), bukan pada apakah 'id' bernilai 12345 secara spesifik.
:::

---

## Bagian 3: Service/API Testing

**6. Saat melakukan pengujian pada REST API, elemen apa saja yang valid untuk diverifikasi dalam respons tes?**

- A. HTTP Status Codes (misal: 200, 404, 500) sesuai dengan skenario input.
- B. Struktur Response Body (biasanya JSON atau XML).
- C. Kualitas rendering font pada data yang diterima.
- D. Logika autentikasi (misal: hanya user terautentikasi yang bisa POST order).
- E. Interaksi mouse event pada tombol submit.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D**

**Penjelasan:** Opsi C dan E adalah aspek UI/Frontend. API Testing bersifat headless (tanpa antarmuka visual), sehingga rendering font dan event mouse tidak relevan di lapisan ini.
:::

---

**7. Apa saja karakteristik teknis dan risiko yang melekat pada End-to-End (E2E) Testing?**

- A. Memvalidasi seluruh alur domain kerja (domain workflow) termasuk sistem hilir (downstream systems).
- B. Memiliki waktu eksekusi paling cepat karena menjalankan semua komponen sekaligus.
- C. Rentan terhadap flakiness (ketidakstabilan hasil tes).
- D. Menggabungkan alat pengujian UI, Service, dan DB untuk mencakup satu aliran penuh.
- E. Dapat diimplementasikan dengan jumlah tes yang sedikit namun mengaktifkan semua komponen.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D, E**

**Penjelasan:** Opsi B salah besar. E2E adalah jenis tes yang paling lambat karena harus memuat browser, network, database, dan layanan eksternal secara nyata.
:::

---

**8. Cypress memiliki arsitektur yang berbeda secara fundamental dari Selenium. Manakah pernyataan yang benar mengenai perbedaan tersebut?**

- A. Cypress mengeksekusi perintah di dalam run-loop yang sama dengan aplikasi, bukan melalui jaringan eksternal.
- B. Selenium lebih cepat karena berkomunikasi langsung dengan driver browser native.
- C. Cypress secara otomatis menangani penungguam (waiting) untuk elemen agar terlihat atau dapat diklik.
- D. Cypress membutuhkan setup tambahan untuk kerangka kerja assertion seperti Chai.
- E. Selenium beroperasi dengan mengirimkan perintah remote melalui jaringan ke browser.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, E**

**Penjelasan:** Opsi B salah; Cypress umumnya lebih cepat karena berjalan di dalam browser. Opsi D salah; Cypress sudah bundled (terpaket) dengan Mocha dan Chai secara default, tidak butuh setup manual.
:::

---

**9. Diberikan potongan kode REST Assured berikut:**

```java
given().
when().
  get("http://localhost:1000/items").
then().
  assertThat().statusCode(200);
```

**Apa implikasi teknis dari kode pengujian di atas?**

- A. Kode ini mensimulasikan interaksi pengguna mengklik tombol "Get Items" di browser.
- B. Kode ini memverifikasi bahwa endpoint `/items` tersedia dan mengembalikan sukses.
- C. Pengujian ini termasuk dalam kategori Service/API Testing.
- D. Kode ini memvalidasi apakah format JSON yang dikembalikan memiliki field "SKU".
- E. Sintaks yang digunakan mengadopsi gaya BDD (Behavior Driven Development).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, E**

**Penjelasan:** Opsi A salah karena REST Assured adalah tool backend/API, tidak menyentuh browser UI. Opsi D salah karena kode di atas hanya mengecek `statusCode(200)`, belum ada asersi untuk mengecek isi body (field SKU).
:::

---

**10. Dalam konteks Contract Testing dan Service Testing, kapan penggunaan Stubs sangat disarankan?**

- A. Saat layanan yang bergantung (dependent service) belum selesai dikembangkan.
- B. Saat ingin melakukan tes performa pada database produksi.
- C. Untuk menyepakati struktur interaksi agar pengembangan bisa berjalan paralel.
- D. Saat melakukan Manual Exploratory Testing.
- E. Untuk mengisolasi tes agar kegagalan layanan eksternal tidak menggagalkan tes internal.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, E**

**Penjelasan:** Opsi B berbahaya (jangan tes performa di prod DB). Opsi D tidak relevan karena eksploratori biasanya membutuhkan sistem nyata untuk melihat perilaku aneh, bukan stub yang sudah diprediksi.
:::

---

## Bagian 4: Tools & Skills

**11. Selain pengujian fungsional otomatis, keterampilan apa saja yang termasuk dalam "10 Full Stack Testing Skills"?**

- A. Accessibility Testing (Aksesibilitas).
- B. Visual Testing.
- C. Data Testing.
- D. Hardware Stress Testing.
- E. Continuous Testing (CI/CD).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C, E**

**Penjelasan:** Hardware Stress Testing biasanya bukan bagian dari skill set standar pengujian aplikasi web (software) yang dibahas dalam konteks Full Stack Web Dev. Fokusnya adalah pada aspek software (Security, Performance, Mobile, dll).
:::

---

**12. Fitur apa yang disediakan Cypress untuk mengatasi kesulitan debugging dan flakiness pada E2E test?**

- A. Kemampuan Time Travel (snapshot) untuk melihat keadaan aplikasi di setiap langkah perintah.
- B. Integrasi langsung dengan Chrome DevTools untuk inspeksi elemen saat tes berjalan.
- C. Penggunaan `Thread.sleep()` otomatis di setiap baris kode.
- D. Perekaman video otomatis saat eksekusi tes (terutama saat headless).
- E. Eksekusi perintah di luar browser untuk menghindari memory leak.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D**

**Penjelasan:** Opsi C salah; Cypress menggunakan auto-wait, bukan sleep statis yang buruk. Opsi E salah; kekuatan Cypress justru karena ia berjalan di dalam browser.
:::

---

**13. Perhatikan payload request berikut:**

```json
POST /orders/new
{ "sku": "ABCD", "qty": 1 }
```

**Jika Anda merancang negative test case untuk API di atas, skenario apa yang valid?**

- A. Mengirim request tanpa Authentication Token dan mengharapkan status 401/403.
- B. Mengirim request dengan `"qty": -5` dan mengharapkan status 200 OK.
- C. Mengirim request dengan tipe data salah (misal `"qty": "satu"`) dan mengharapkan status 400 Bad Request.
- D. Memverifikasi bahwa respons mengandung `"Msg": "successfully created"`.
- E. Mengirim request ke endpoint yang salah dan mengharapkan status 404.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, E**

**Penjelasan:** Opsi B salah; input negatif harusnya menghasilkan error/penolakan, bukan 200 OK. Opsi D adalah positive test case, bukan negative.
:::

---

**14. Sebuah aplikasi E-Commerce terhubung dengan Warehouse System dan Shipping Partner. Bagaimana strategi E2E testing menangani sistem hilir (downstream) ini?**

- A. Mengabaikan sistem hilir karena di luar kendali tim pengembang.
- B. Melakukan tes integrasi nyata untuk memastikan alur bisnis tidak terputus.
- C. Menggunakan mock di semua level E2E untuk mempercepat waktu eksekusi.
- D. Menyadari bahwa ketergantungan ini adalah penyebab utama tes E2E berjalan lama.
- E. Memvalidasi bahwa data pesanan sampai ke sistem Warehouse dengan benar.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, D, E**

**Penjelasan:** Opsi A tidak bisa diterima dalam E2E yang bertujuan memvalidasi "entire breadth". Opsi C melemahkan tujuan E2E; jika semua di-mock, itu menjadi Integration atau Component test, bukan E2E sejati.
:::

---

**15. Apa yang membedakan UI Functional Test dengan Unit Test pada level komponen UI?**

- A. UI Functional Test meniru tindakan pengguna (klik, ketik) pada aplikasi yang berjalan.
- B. UI Functional Test memvalidasi alur pengguna yang kritis (critical user flows).
- C. UI Functional Test memeriksa logika internal fungsi JavaScript tanpa merender tampilan.
- D. UI Functional Test harus menghindari validasi detail yang sudah dicakup di level unit/service.
- E. UI Functional Test biasanya disimpan di repositori kode yang sama persis dengan kode backend.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D**

**Penjelasan:** Opsi C adalah definisi Unit Test. Opsi E tidak mutlak, seringkali kode UI test (seperti Cypress) berada di folder terpisah atau repo tersendiri (namun bisa monorepo), tapi poin kuncinya adalah pemisahan concern dari kode produk.
:::

---

## Bagian 5: Troubleshooting & Best Practices

**16. Apa penyebab umum terjadinya Flaky Tests (tes yang kadang lulus, kadang gagal) pada pengujian UI/E2E?**

- A. Ketergantungan pada kondisi jaringan yang tidak stabil.
- B. Penggunaan strategi wait yang tidak tepat (misal: hard coded sleep).
- C. Perubahan data dinamis pada backend yang tidak direset sebelum tes berjalan.
- D. Penggunaan framework Cypress yang berjalan di dalam browser.
- E. Elemen DOM belum sepenuhnya dimuat saat perintah click dijalankan.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C, E**

**Penjelasan:** Opsi D justru merupakan solusi untuk mengurangi flakiness, bukan penyebabnya. Cypress dirancang untuk meminimalkan masalah ini melalui arsitekturnya.
:::

---

**17. Diberikan kode Cypress:**

```javascript
cy.get('.todo-list li').should('have.length', 2);
cy.get('.todo-list li').first().should('have.text', 'Pay electric bill');
```

**Apa yang dilakukan oleh script pengujian di atas?**

- A. Memastikan ada tepat dua elemen list item di dalam kelas `.todo-list`.
- B. Memastikan elemen pertama dari list tersebut berisi teks spesifik.
- C. Menghapus item pertama dari daftar todo.
- D. Melakukan looping otomatis pada semua item todo.
- E. Menggunakan assertion `should` untuk memvalidasi kondisi DOM.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, E**

**Penjelasan:** Opsi C dan D tidak terjadi. Kode hanya melakukan seleksi (`get`, `first`) dan asersi (`should`), tidak ada perintah aksi seperti `.click()` atau iterasi `.each()`.
:::

---

**18. Mengenai protokol pertukaran informasi dalam Service Testing, manakah pernyataan faktual yang benar?**

- A. SOAP adalah protokol yang lebih modern dan ringan dibandingkan REST.
- B. REST menggunakan standar HTTP dan format data seperti JSON atau XML.
- C. API bertindak sebagai abstraksi yang menyembunyikan kompleksitas sistem di bawahnya.
- D. Sistem legacy yang menggunakan SOAP sering ditulis ulang (rewrite) menggunakan spesifikasi REST.
- E. RESTful API memerlukan penggunaan XML secara eksklusif.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, D**

**Penjelasan:** Opsi A terbalik; REST lebih modern/populer dibanding SOAP. Opsi E salah karena REST sangat umum menggunakan JSON, bahkan plain text, tidak eksklusif XML.
:::

---

**19. Dalam konteks "10 Full Stack Testing Skills", apa yang membedakan fokus Visual Testing dibandingkan Functional Testing biasa?**

- A. Visual Testing memverifikasi apakah tombol Submit benar-benar mengirimkan data ke server.
- B. Visual Testing mendeteksi pergeseran piksel (pixel shift) atau tata letak yang berantakan.
- C. Visual Testing memastikan tampilan konsisten di berbagai ukuran layar (viewport).
- D. Visual Testing memeriksa apakah warna tombol sesuai dengan panduan desain (style guide).
- E. Visual Testing berfokus pada logika validasi input formulir.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, D**

**Penjelasan:** Opsi A dan E adalah tugas Functional Testing (apakah fitur bekerja?). Visual Testing peduli pada "apakah fitur terlihat benar?", bukan "apakah fitur bekerja?".
:::

---

**20. Bagaimana peran Continuous Testing dalam siklus pengembangan modern?**

- A. Menjalankan Unit Testing secara otomatis setiap kali ada perubahan kode (commit/push).
- B. Menunda semua pengujian hingga fase release untuk menghemat sumber daya server.
- C. Memberikan umpan balik (feedback) cepat kepada pengembang jika ada regresi.
- D. Menggantikan peran QA Manual sepenuhnya.
- E. Mengintegrasikan eksekusi tes ke dalam pipeline deployment.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, E**

**Penjelasan:** Opsi B bertentangan dengan prinsip CI/CD (Continuous Integration). Opsi D salah, karena Manual Exploratory Testing tetap diperlukan untuk kasus-kasus yang sulit diotomasi atau butuh intuisi manusia.
:::