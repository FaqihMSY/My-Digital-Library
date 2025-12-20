# Latihan Soal: SEO (Search Engine Optimization)

## Bagian 1: Konsep Dasar & Cara Kerja Search Engine

**1. Dalam konteks pemrosesan aplikasi web modern (berbasis JavaScript), manakah pernyataan yang BENAR mengenai antrean (queues) pada Googlebot?**

- A. Semua halaman langsung dirender segera setelah crawling.
- B. Terdapat pemisahan antara proses crawling awal dengan proses rendering.
- C. Rendering JavaScript adalah proses yang intensif sumber daya dan bisa tertunda dari detik hingga minggu.
- D. Googlebot selalu mengeksekusi JavaScript pada fase Indexing, bukan Rendering.
- E. Chromium "evergreen" digunakan untuk merender halaman.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, E**

**Penjelasan:** Googlebot memisahkan crawling dan rendering. Halaman masuk ke "Rendering Queue" (antrean) karena proses ini resource-intensive. Pengecoh (D) salah karena eksekusi JS terjadi di fase Rendering, sebelum Indexing.
:::

---

**2. Manakah dari elemen berikut yang termasuk dalam faktor penentu peringkat (Ranking Factors) teknis?**

- A. Kecepatan First Input Delay (FID) atau Interaction to Next Paint (INP).
- B. Penggunaan protokol HTTPS.
- C. Jumlah keyword yang diulang sebanyak mungkin dalam satu paragraf (Keyword Stuffing).
- D. Penerapan Structured Data.
- E. Kualitas backlink dari situs lain.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D, E**

**Penjelasan:** Opsi C (Keyword Stuffing) adalah praktik buruk yang harus dihindari. Sisa opsi lainnya adalah faktor valid yang mempengaruhi ranking (Page Experience, Security, Structured Data, Relevance/Authority).
:::

---

## Bagian 2: Crawling & Indexing Technicalities

**3. Sebuah file `robots.txt` memiliki konfigurasi di bawah ini. Manakah implikasi teknis yang VALID dari konfigurasi tersebut?**

```
User-agent: *
Disallow: /admin/
Disallow: /temp/
Allow: /admin/public/
```

- A. Folder `/admin/` sepenuhnya tidak akan di-crawl oleh bot apapun.
- B. Bot diizinkan mengakses `/admin/public/` meskipun direktori induknya `/admin/` di-disallow.
- C. Konfigurasi ini secara otomatis mencegah halaman `/temp/` muncul di hasil pencarian meskipun ada link eksternal yang mengarah ke sana.
- D. Bot tidak akan menelusuri folder `/temp/`.
- E. File CSS dan JavaScript di dalam root folder otomatis terblokir.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, D**

**Penjelasan:** Aturan Allow yang lebih spesifik dapat menimpa Disallow pada direktori induk (B benar). robots.txt hanya memblokir crawling, bukan indexing (jika ada backlink, halaman masih bisa terindeks, jadi C salah). E salah karena tidak ada aturan yang memblokir CSS/JS.
:::

---

**4. Mengenai XML Sitemap, manakah praktik terbaik (Best Practices) yang harus diterapkan pengembang?**

- A. Memasukkan semua URL, termasuk yang memiliki status 404 atau 301, agar Google tahu statusnya.
- B. Memecah sitemap jika jumlah URL melebihi 50.000.
- C. Hanya menyertakan URL kanonikal (canonical URLs).
- D. Menggunakan atribut `<priority>` untuk memaksa Google meranking halaman lebih tinggi.
- E. Menyerahkan (submit) sitemap melalui Search Console.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, E**

**Penjelasan:** Sitemap harus bersih, hanya berisi URL kanonikal yang valid (200 OK). Opsi A salah karena URL error/redirect tidak boleh masuk. Opsi D salah karena `<priority>` hanya petunjuk prioritas crawling, bukan jaminan ranking.
:::

---

## Bagian 3: URL & Struktur Halaman

**5. Manakah dari struktur URL berikut yang dianggap "SEO-Friendly" dan mengikuti best practices?**

- A. `https://example.com/products/gaming_laptop_pro`
- B. `https://example.com/blog/technical-seo-guide`
- C. `https://example.com/index.php?category=laptop&id=123`
- D. `https://example.com/electronics/smartphones`
- E. `https://example.com/ABOUT/Team-Members`

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, D**

**Penjelasan:** A menggunakan underscore (_) yang kurang disukai dibanding hyphen (-). C menggunakan parameter dinamis. E menggunakan huruf kapital (sebaiknya lowercase untuk konsistensi). Hanya B dan D yang bersih, deskriptif, dan menggunakan hyphen.
:::

---

**6. Mengapa URL Rewriting penting dalam pengembangan aplikasi web?**

- A. Untuk mengubah URL dinamis yang penuh parameter menjadi URL statis yang mudah dibaca manusia.
- B. Untuk menyembunyikan ekstensi file seperti `.php` atau `.html` demi keamanan saja.
- C. Memungkinkan penyisipan keyword relevan langsung ke dalam path URL.
- D. Memudahkan crawler memproses struktur situs.
- E. Menggantikan fungsi robots.txt dalam memblokir halaman.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D**

**Penjelasan:** URL Rewriting fokus pada readability, keyword inclusion, dan crawlability. Opsi B bukan alasan utama SEO, dan E salah karena fungsinya berbeda total dengan robots.txt.
:::

---

**7. Terkait kode status HTTP, manakah pernyataan yang akurat mengenai dampaknya terhadap SEO?**

- A. Status 301 meneruskan sekitar 90-99% link equity ke URL baru.
- B. Status 302 memberi sinyal kepada Google bahwa perubahan bersifat permanen.
- C. Status 404 adalah penalti bagi website dan harus dihilangkan sepenuhnya.
- D. "Soft 404" terjadi ketika server mengembalikan status 200 OK untuk halaman yang kontennya tidak ada/hilang.
- E. Status 503 digunakan untuk downtime sementara agar Googlebot tahu situs akan kembali.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, D, E**

**Penjelasan:** B salah karena 302 adalah temporary. C salah karena 404 natural tidak memberi penalti, yang bermasalah adalah broken link internal. D dan A adalah definisi teknis yang tepat.
:::

---

## Bagian 4: Metadata & Masalah Duplikasi

**8. Anda sedang mengonfigurasi tag `<head>` untuk SEO. Manakah implementasi yang BENAR?**

- A. `<title>` harus unik untuk setiap halaman dan idealnya 50-60 karakter.
- B. `<meta name="keywords">` adalah tag paling penting untuk ranking Google saat ini.
- C. `<link rel="canonical" href="...">` digunakan untuk mengatasi masalah konten duplikat pada URL dengan parameter.
- D. `<meta name="viewport">` penting untuk SEO mobile-friendliness.
- E. `<meta name="description">` harus diisi dengan teks yang sama di semua halaman untuk konsistensi branding.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D**

**Penjelasan:** B salah karena Google mengabaikan meta keywords. E salah karena meta description harus unik untuk setiap halaman agar relevan di hasil pencarian.
:::

---

**9. Kasus Duplikasi Konten: Sebuah halaman produk dapat diakses melalui http, https, www, dan non-www. Solusi teknis apa yang paling tepat untuk menyatukan sinyal SEO?**

- A. Menggunakan robots.txt untuk memblokir versi http.
- B. Mengimplementasikan tag `<link rel="canonical">` yang mengarah ke versi preferensi (misal: `https://www...`).
- C. Membiarkan Google memilih sendiri versi terbaik.
- D. Melakukan redirect 301 dari semua varian ke satu versi utama.
- E. Menambahkan parameter `?ref=canonical` di setiap URL.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, D**

**Penjelasan:** Solusi standar adalah Canonical Tag (B) atau 301 Redirects (D). Memblokir via robots.txt (A) berbahaya karena menghapus akses. Membiarkan Google (C) berisiko dilusi ranking.
:::

---

## Bagian 5: JavaScript SEO & SPA

**10. Apa tantangan utama Single Page Applications (SPA) murni (Client-Side Rendering) di mata crawler tradisional?**

- A. Crawler mungkin hanya melihat "cangkang" HTML kosong (empty HTML shell) sebelum JavaScript dieksekusi.
- B. SPA tidak memiliki URL sama sekali.
- C. Navigasi menggunakan Hash Fragments (`/#/page`) tidak dapat di-crawl dengan andal oleh Googlebot.
- D. Meta tags di SPA tidak bisa dibaca walaupun sudah diubah lewat DOM.
- E. Potensi terjadinya Soft 404 karena routing ditangani di sisi klien.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, E**

**Penjelasan:** B salah karena SPA punya URL. D salah karena Googlebot modern bisa membaca perubahan DOM jika dirender, tapi tantangannya ada di waktu rendering, bukan ketidakmampuan total. A, C, E adalah tantangan valid SPA.
:::

---

**11. Untuk memperbaiki navigasi SPA agar ramah SEO, pengembang harus beralih dari Hash Fragments ke History API. Manakah potongan kode atau konsep yang relevan dengan solusi ini?**

- A. Menggunakan `<a href="#/products">`
- B. Menggunakan fungsi `window.history.pushState({}, '', url)`
- C. Server harus dikonfigurasi untuk menangani rute URL langsung (bukan hanya root).
- D. Menggunakan `<a href="/products">` (path absolut/relatif standar).
- E. Mengandalkan onClick event listener tanpa tag `<a>` yang valid.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, D**

**Penjelasan:** A adalah cara lama (Hash) yang buruk. E buruk untuk aksesibilitas dan SEO. B, C, D adalah komponen implementasi History API yang benar.
:::

---

**12. Bagaimana cara menangani Soft 404 pada aplikasi SPA (Client-Side Rendering) ketika produk tidak ditemukan di API?**

- A. Membiarkan halaman tetap tampil kosong dengan status 200 OK.
- B. Melakukan redirect via JavaScript (`window.location.href`) ke halaman 404 khusus.
- C. Menyuntikkan meta tag `<meta name="robots" content="noindex">` secara dinamis ke dalam DOM.
- D. Mengubah status kode HTTP header menjadi 404 menggunakan JavaScript di sisi klien (browser).
- E. Menampilkan pesan "Not Found" di layar tanpa mengubah apapun di balik layar.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C**

**Penjelasan:** D tidak mungkin dilakukan karena JS di browser tidak bisa mengubah response header yang sudah diterima dari server. A dan E adalah penyebab Soft 404. Solusi valid adalah redirect (B) atau menyuntikkan noindex (C).
:::

---

**13. Manakah keuntungan menggunakan Server-Side Rendering (SSR) dibandingkan Client-Side Rendering (CSR) untuk SEO?**

- A. Googlebot dapat melihat konten HTML lengkap segera saat request pertama.
- B. Menghilangkan kebutuhan akan file sitemap.xml.
- C. Mempercepat Initial Page Load yang berdampak positif pada Core Web Vitals.
- D. Memudahkan berbagi tautan di media sosial (preview tautan muncul benar).
- E. Menghapus ketergantungan pada JavaScript sepenuhnya.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D**

**Penjelasan:** B salah, sitemap tetap butuh. E salah, JS tetap dipakai untuk interaktivitas (hydration). A, C, D adalah keunggulan utama SSR.
:::

---

## Bagian 6: Optimasi Lanjutan & Core Web Vitals

**14. Terkait Dynamic Meta Tags dengan JavaScript, manakah kode yang BENAR untuk memperbarui deskripsi halaman secara dinamis?**

- A. `document.title = 'New Description';`
- B. Mencari elemen meta dengan `querySelector('meta[name="description"]')` lalu mengubah atribut `.content`-nya.
- C. Jika meta deskripsi belum ada, membuatnya dengan `document.createElement('meta')` lalu menambahkannya ke `document.head`.
- D. Googlebot tidak akan pernah membaca perubahan meta tag yang dilakukan lewat JavaScript.
- E. `document.body.appendChild(metaDesc);`

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C**

**Penjelasan:** A mengubah judul, bukan deskripsi. D salah (Googlebot bisa baca setelah rendering). E salah (meta tag harus di head, bukan body).
:::

---

**15. Mengenai Lazy Loading gambar untuk performa SEO, manakah praktik yang disarankan?**

- A. Menggunakan atribut native `<img loading="lazy">`.
- B. Menerapkan Lazy Loading pada semua gambar, termasuk gambar utama di bagian paling atas (above-the-fold).
- C. Menggunakan API `IntersectionObserver` untuk kompatibilitas atau kontrol lebih lanjut.
- D. Tidak perlu menentukan dimensi width dan height jika sudah di-lazy load.
- E. Memberikan dimensi placeholder untuk mencegah pergeseran tata letak (Layout Shift).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, E**

**Penjelasan:** B salah karena gambar above-the-fold (LCP element) harus dimuat segera, jangan di-lazy load. D salah karena tanpa dimensi akan merusak CLS (Cumulative Layout Shift).
:::

---

**16. Structured Data membantu mesin pencari memahami konten. Manakah fakta yang benar?**

- A. Format yang direkomendasikan Google adalah JSON-LD.
- B. Structured Data ditempatkan di dalam tag `<script type="application/ld+json">`.
- C. Implementasi ini menjamin halaman pasti muncul di peringkat 1.
- D. Memungkinkan munculnya Rich Results (seperti bintang review, resep, event).
- E. Syntax harus mengikuti kosakata dari schema.org.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D, E**

**Penjelasan:** C salah besar. SEO tidak pernah menjamin peringkat 1. Structured Data hanya membantu visibility dan tampilan (Rich Results), bukan jaminan ranking instan.
:::

---

**17. Core Web Vitals mengukur pengalaman pengguna. Pasangan metrik dan target yang benar adalah:**

- A. LCP (Largest Contentful Paint) harus kurang dari 2.5 detik.
- B. FID (First Input Delay) mengukur stabilitas visual.
- C. CLS (Cumulative Layout Shift) targetnya harus di bawah 0.1.
- D. INP (Interaction to Next Paint) adalah pengganti FID untuk mengukur responsivitas/interaktivitas.
- E. LCP mengukur seberapa cepat server merespon (Time to First Byte).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D**

**Penjelasan:** B salah (FID mengukur interaktivitas, bukan stabilitas). E salah (LCP mengukur elemen terbesar terlihat, bukan respon server awal). A, C, D benar sesuai standar.
:::

---

## Bagian 7: Mobile & Audit

**18. Apa implikasi dari Mobile-First Indexing?**

- A. Google hanya mengindeks situs yang dibuka dari HP, situs desktop diabaikan.
- B. Google menggunakan versi mobile dari konten untuk proses indexing dan ranking.
- C. Konten pada versi mobile dan desktop harus setara (same content).
- D. Structured data hanya perlu ada di versi desktop.
- E. Kecepatan loading di perangkat seluler menjadi faktor krusial.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, E**

**Penjelasan:** A salah (Desktop tetap diindeks tapi sekunder). D salah (harus ada di kedua versi). Intinya adalah versi mobile menjadi prioritas utama (primary).
:::

---

**19. Dalam Image Optimization, teknik apa yang harus diterapkan?**

- A. Menggunakan format gambar modern seperti WebP.
- B. Selalu menggunakan format PNG untuk foto produk karena kualitasnya paling tinggi tanpa kompresi.
- C. Menggunakan atribut `alt` yang deskriptif dan kaya keyword.
- D. Menggunakan atribut `srcset` untuk menyajikan gambar responsif sesuai ukuran layar.
- E. Menghapus atribut width dan height agar gambar fleksibel.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D**

**Penjelasan:** B salah (WebP/JPEG lebih baik untuk foto karena kompresi). E salah (menghapus dimensi menyebabkan CLS buruk).
:::

---

**20. Apa kesalahan umum (Common Mistakes) yang sering terjadi dalam implementasi SEO teknis?**

- A. Memblokir akses ke file CSS dan JavaScript melalui robots.txt.
- B. Lupa menambahkan atribut `alt` pada tag `<img>`.
- C. Menggunakan History API untuk navigasi.
- D. Tidak memiliki tag kanonikal pada halaman yang memiliki duplikat.
- E. Memiliki loading speed yang lambat karena gambar yang tidak dioptimasi.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D, E**

**Penjelasan:** C justru adalah best practice, bukan kesalahan. Kesalahan fatal adalah memblokir resource rendering (A), aksesibilitas buruk (B), isu duplikasi (D), dan performa buruk (E).
:::