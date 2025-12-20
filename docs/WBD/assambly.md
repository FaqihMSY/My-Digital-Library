# Latihan Soal: WebAssembly

## Bagian 1: Karakteristik Fundamental & Arsitektur

**1. Manakah dari pernyataan berikut yang secara akurat mendeskripsikan sifat teknis WebAssembly (WASM)?**

- A. Merupakan format instruksi biner tingkat rendah (low-level).
- B. Dirancang untuk menggantikan JavaScript sepenuhnya dalam pengembangan web modern.
- C. Memiliki eksekusi yang sandboxed untuk keamanan.
- D. Merupakan bahasa pemrograman tingkat tinggi yang diketik secara statis (statically typed).
- E. Format instruksinya bersifat platform-independent.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, E**

**Penjelasan:** Opsi B salah karena WASM dirancang untuk berjalan bersampingan dengan JavaScript (Web compatibility), bukan menggantikannya. Opsi D salah karena WASM adalah format instruksi biner (hasil kompilasi), bukan bahasa sumber tingkat tinggi seperti C++ atau Rust.
:::

---

**2. WebAssembly Virtual Machine (VM) mengemulasikan CPU riil dengan arsitektur tertentu. Komponen atau karakteristik mana yang benar terkait arsitektur VM ini?**

- A. Menggunakan arsitektur berbasis register (Register-based VM) untuk efisiensi tinggi.
- B. Menggunakan struktur data Stack untuk operasi.
- C. Memiliki Instruction Pointer yang menunjuk ke instruksi berikutnya.
- D. Memiliki Stack Pointer yang menunjuk ke bagian bawah stack.
- E. Menerjemahkan modul WASM menjadi kode mesin spesifik perangkat keras (seperti x86 atau ARM).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, E**

**Penjelasan:** Opsi A salah fatal karena WASM VM adalah Stack-based, bukan Register-based. Opsi D salah karena Stack Pointer menunjuk ke bagian atas (top) dari stack, bukan bawah.
:::

---

**3. Dalam konteks pengembangan aplikasi menggunakan bahasa seperti C++ atau Rust untuk WebAssembly, manakah tahapan yang valid?**

- A. Kode sumber dikompilasi langsung oleh browser menjadi file `.wasm`.
- B. Kode sumber dikompilasi menggunakan compiler khusus bahasa tersebut menjadi modul WASM.
- C. Modul WASM dieksekusi oleh WASM Virtual Machine.
- D. WASM VM menghasilkan kode mesin spesifik target hardware (seperti ARM atau x86).
- E. Kode sumber C++ diterjemahkan menjadi JavaScript sebelum dijalankan di VM.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, D**

**Penjelasan:** Opsi A salah karena kompilasi ke `.wasm` terjadi di sisi pengembang (development time), bukan di dalam browser. Opsi E salah karena tujuan WASM adalah menghindari overhead JavaScript untuk tugas berat; C++ dikompilasi ke biner WASM, bukan JS.
:::

---

**4. Terdapat beberapa ekstensi file yang diasosiasikan dengan ekosistem WebAssembly. Manakah pasangan ekstensi dan deskripsi yang benar?**

- A. `.wasm`: Format biner yang telah terkompilasi dan siap dieksekusi.
- B. `.wat`: Format teks yang dapat dibaca manusia (human readable).
- C. `.wast`: Format biner terkompresi untuk distribusi jaringan.
- D. `.wat`: Digunakan sebagai representasi source code dari format biner.
- E. `.wast`: Format teks yang berguna untuk pengujian (testing) atau memuat multiple modules.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D, E**

**Penjelasan:** Opsi C adalah pengecoh. `.wast` juga merupakan format teks (bukan biner) yang sering digunakan untuk test suites atau mendefinisikan beberapa modul dalam satu file.
:::

---

**5. Bagaimana karakteristik model memori linier yang digunakan oleh WebAssembly?**

- A. Merupakan array byte yang kontigu (berurutan).
- B. Ukurannya tetap (fixed) dan tidak dapat diubah setelah inisialisasi.
- C. Dapat diakses oleh JavaScript sebagai `ArrayBuffer`.
- D. Memori dibagi menjadi segmen heap dan stack yang dikelola otomatis oleh Garbage Collector browser.
- E. Bersifat resizable (dapat diubah ukurannya).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, E**

**Penjelasan:** Opsi B salah karena memori WASM bersifat resizable. Opsi D salah karena WASM (dalam bentuk aslinya/MVP) menggunakan model memori linier manual (seperti C/C++), bukan garbage collected heap seperti Java/JS.
:::

---

## Bagian 2: Interaksi dengan JavaScript & Web API

**6. Tinjau kemampuan WebAssembly dalam berinteraksi dengan lingkungan browser. Manakah pernyataan yang teknisnya benar?**

- A. WebAssembly dapat memanipulasi elemen DOM secara langsung tanpa perantara.
- B. WebAssembly membutuhkan JavaScript "glue code" untuk mengakses Web API.
- C. WebAssembly hanya dapat mengirimkan tipe data primitif (integer/float) ke JavaScript.
- D. Fungsi WebAssembly dapat memanggil `document.getElementById` secara native.
- E. JavaScript bertugas memperbarui DOM berdasarkan hasil komputasi WASM.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, E**

**Penjelasan:** Opsi A dan D adalah kesalahan konsep umum. WASM saat ini tidak bisa mengakses DOM atau Web API secara langsung; ia harus memanggil fungsi JavaScript (yang diimpor) untuk melakukan hal tersebut.
:::

---

**7. Dalam proses porting kode C/C++ ke WebAssembly, apa fungsi spesifik dari toolchain Emscripten?**

- A. Mengubah kode C/C++ menjadi kode Python untuk backend.
- B. Menggunakan Clang+LLVM untuk kompilasi kode sumber.
- C. Menghasilkan kode "glue" JavaScript dan HTML yang diperlukan.
- D. Mengubah hasil kompilasi LLVM menjadi biner Wasm.
- E. Menggantikan peran browser dalam merender grafik 3D.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, D**

**Penjelasan:** Opsi A tidak relevan. Opsi E salah karena Emscripten adalah compiler toolchain, bukan rendering engine. Emscripten memfasilitasi pembuatan biner wasm DAN kode perekat JS agar wasm bisa berjalan di browser.
:::

---

**8. Berdasarkan studi kasus implementasi (misalnya pada Figma), apa keuntungan performa WebAssembly dibandingkan asm.js atau JavaScript murni?**

- A. Ukuran unduhan (download size) yang jauh lebih kecil.
- B. Waktu muat (load time) yang lebih cepat.
- C. Menghilangkan kebutuhan akan parsing kode karena sudah dalam bentuk biner.
- D. Tidak memerlukan proses gzip atau brotli karena sudah terkompresi.
- E. Eksekusi kode mendekati kecepatan native.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, E**

**Penjelasan:** Opsi C kurang tepat karena browser masih perlu melakukan validasi/kompilasi awal pada biner wasm, meskipun jauh lebih cepat daripada parsing teks JS. Opsi D salah fatal; data menunjukkan bahwa kompresi gzip/brotli tetap diterapkan dan mengurangi ukuran file wasm secara signifikan.
:::

---

**9. Perhatikan potongan logika pemuatan modul berikut (konseptual):**

```javascript
fetch('module.wasm') → arrayBuffer() → instantiate()
```

**Apa implikasi dari urutan proses ini?**

- A. `fetch` digunakan untuk mengambil file biner dari server.
- B. `response.arrayBuffer()` mengubah respons menjadi representasi byte mentah di memori.
- C. `WebAssembly.instantiate` mengompilasi dan membuat instans modul secara sinkron (memblokir main thread).
- D. Objek `results.instance` berisi fungsi-fungsi yang diekspor (exports) oleh modul WASM.
- E. Proses ini membuktikan bahwa WASM tidak memerlukan JavaScript sama sekali untuk berjalan.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D**

**Penjelasan:** Opsi C salah karena `instantiate` (terutama yang menerima buffer/promise) berjalan secara asynchronous (mengembalikan Promise). Opsi E salah karena kode di atas jelas-jelas adalah kode JavaScript yang diperlukan untuk memuat WASM.
:::

---

**10. Aplikasi jenis apa yang paling diuntungkan dengan migrasi ke WebAssembly berdasarkan kapabilitasnya menangani tugas berat?**

- A. Aplikasi CRUD sederhana (Create, Read, Update, Delete).
- B. Editor grafis vektor (seperti Figma).
- C. Rendering peta 3D (seperti Google Earth).
- D. Formulir pendaftaran pengguna statis.
- E. Simulasi ilmiah dan video editing.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, E**

**Penjelasan:** Opsi A dan D adalah pengecoh. WASM didesain untuk performance-critical applications. Menggunakan WASM untuk formulir sederhana adalah overkill dan tidak efisien dibandingkan JS biasa.
:::

---

## Bagian 3: Modularitas & Bahasa Sumber

**11. WebAssembly didesain berbasis modul (module-based). Apa arti teknis dari pernyataan ini?**

- A. Modul adalah unit fungsionalitas yang mandiri (self-contained).
- B. Satu aplikasi hanya boleh memuat satu modul WASM.
- C. Modul dapat mengekspor fungsi untuk digunakan oleh modul lain atau JavaScript.
- D. Modul dapat mengimpor fungsi dari host environment (JavaScript).
- E. Modul berisi logika inti yang dapat digunakan kembali (reusable).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D, E**

**Penjelasan:** Opsi B salah. Slide menyebutkan bahwa pengembang dapat memuat dan mengeksekusi multiple WASM modules dalam satu aplikasi (composable).
:::

---

**12. Manakah fakta sejarah dan perkembangan yang benar terkait WebAssembly?**

- A. Diumumkan sebagai proyek W3C pada tahun 2015.
- B. Dukungan stabil di browser utama (Chrome, Firefox, Edge, Safari) baru tercapai pada tahun 2024.
- C. JavaScript (asm.js) muncul setelah WebAssembly sebagai penyempurnaan.
- D. Sejak 2020+, cakupan WASM meluas ke luar browser (Server-side, IoT).
- E. Awalnya hanya didukung oleh Google Chrome.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, D**

**Penjelasan:** Opsi B salah, rilis stabil di browser utama terjadi pada 2017. Opsi C terbalik; asm.js adalah pendahulu yang mencoba mengoptimalkan JS sebelum WASM ada. Opsi E salah karena ini adalah proyek kolaboratif W3C sejak awal.
:::

---

**13. Bahasa pemrograman apa saja yang disebutkan secara eksplisit memiliki dukungan compiler atau alur kerja untuk menjadi modul WebAssembly?**

- A. C & C++
- B. Rust
- C. Golang
- D. HTML
- E. SQL

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C**

**Penjelasan:** Opsi D dan E adalah pengecoh. HTML adalah bahasa markup dan SQL adalah bahasa query database; keduanya bukan bahasa pemrograman sistem yang dikompilasi menjadi instruksi biner WASM dalam konteks arsitektur standar.
:::

---

## Bagian 4: Implementasi Praktis

**14. Jika Anda memiliki modul WASM yang mengekspor fungsi `add(a, b)`, dan Anda ingin menampilkan hasilnya di halaman web. Langkah mana yang benar secara teknis?**

- A. Panggil `wasmModule.exports.add(5, 10)` di dalam JavaScript.
- B. Fungsi `add` akan langsung mengubah teks di dalam tag HTML `<p>` tanpa bantuan JS.
- C. Gunakan JavaScript untuk menangkap nilai kembalian fungsi `add`.
- D. Gunakan `document.getElementById(...).innerText` di dalam kode JavaScript untuk menampilkan hasil.
- E. Fungsi `add` dieksekusi di server, bukan di browser.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D**

**Penjelasan:** Opsi B salah karena WASM tidak punya akses DOM. Opsi E salah karena konteks standar WASM web adalah client-side execution (kecuali dibahas konteks server-side spesifik, tapi di sini konteksnya adalah interaksi browser).
:::

---

**15. Apa kelemahan mendasar JavaScript yang memicu kebutuhan akan WebAssembly untuk komputasi berat?**

- A. JavaScript tidak didukung secara native oleh browser.
- B. JavaScript tidak ideal untuk tugas intensif seperti scientific simulations atau gaming.
- C. JavaScript adalah satu-satunya bahasa yang didukung native browser (sebelum WASM), membatasi opsi bahasa pengembang.
- D. JavaScript tidak memiliki manajemen memori garbage collection.
- E. Kecepatan eksekusi JavaScript sulit mencapai near-native speed secara konsisten untuk beban kerja berat.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, E**

**Penjelasan:** Opsi A jelas salah. Opsi D salah karena JS justru memiliki Garbage Collection, yang kadang menjadi penyebab ketidakkonsistenan performa (jeda GC) dibandingkan manajemen memori manual di WASM (via bahasa asal seperti C++).
:::

---

**16. Mengapa Emscripten perlu menghasilkan "JS Glue Code" selain file `.wasm`?**

- A. Karena file `.wasm` tidak bisa diunduh oleh browser tanpa JS.
- B. Untuk menyediakan jembatan (interface) agar WASM bisa memanggil Web API.
- C. Untuk memuat (loading) dan menginisialisasi modul WASM.
- D. Untuk mengubah kode biner WASM kembali menjadi C++ saat runtime.
- E. Untuk mengalokasikan memori awal yang dibutuhkan WASM.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, E**

**Penjelasan:** Opsi D salah besar; itu disebut dekompilasi dan bukan tujuan glue code. Glue code krusial untuk setup lingkungan (imports, memory allocation) yang memungkinkan biner WASM berinteraksi dengan dunia luar.
:::

---

**17. Dimana saja kode WebAssembly dapat dijalankan sesuai perkembangannya?**

- A. Di dalam browser web (Client-side).
- B. Di sisi server (Server-side).
- C. Pada perangkat IoT.
- D. Di dalam Kernel Sistem Operasi Windows secara langsung sebagai driver.
- E. Menggunakan runtime seperti `wasmtime`.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C, E**

**Penjelasan:** Opsi D adalah pengecoh yang terlalu spesifik dan tidak disebutkan dalam materi. Materi secara eksplisit menyebutkan Browser, Server-side, IoT, dan wasmtime.
:::

---

## Bagian 5: Technical Deep Dive

**18. Dalam arsitektur Stack Based VM milik WASM, manakah komponen kunci yang terlibat dalam eksekusi instruksi aritmatika?**

- A. Heap Pointer.
- B. Stack Data Structure.
- C. Instructions (Instruksi operasi).
- D. Instruction Pointer.
- E. GPU Registers.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, D**

**Penjelasan:** Opsi A dan E adalah pengecoh istilah teknis. "Heap Pointer" bukan salah satu dari 4 objek kunci VM yang disebutkan (adanya Stack Pointer), dan GPU Registers tidak relevan dengan definisi dasar Stack Based VM untuk CPU emulation ini.
:::

---

**19. Berdasarkan grafik perbandingan Download Size antara asm.js dan WebAssembly:**

- A. Ukuran Uncompressed WebAssembly jauh lebih besar daripada asm.js.
- B. Ukuran Uncompressed WebAssembly lebih kecil daripada asm.js (sekitar 6MB vs 9MB+).
- C. Setelah kompresi Gzip, ukuran keduanya menjadi identik.
- D. WebAssembly secara konsisten memiliki ukuran lebih kecil baik sebelum maupun sesudah kompresi (Gzip/Brotli).
- E. asm.js lebih efisien dalam hal ukuran dokumen kosong (Empty document).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, D**

**Penjelasan:** Opsi A salah, data menunjukkan WASM lebih kecil. Opsi C salah, grafik menunjukkan perbedaan tetap ada meski mengecil. Opsi E salah, grafik Load Time/Size menunjukkan keunggulan WASM.
:::

---

**20. Fitur keamanan apa yang menjadi karakteristik utama WebAssembly?**

- A. Akses penuh ke file system pengguna (Full file system access).
- B. Eksekusi yang terisolasi (Sandboxed execution).
- C. Memori yang tidak dapat dibaca oleh host environment.
- D. Validasi tipe data pada perbatasan modul (Module boundary).
- E. Enkripsi otomatis seluruh kode sumber.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B**

**Penjelasan:** Opsi A adalah risiko keamanan, bukan fitur, dan WASM dibatasi (sandboxed). Opsi C salah karena memori dibagi (shared) sebagai `ArrayBuffer`. Opsi E tidak disebutkan dan bukan standar; biner WASM tidak terenkripsi, hanya terkompilasi. Catatan: Meskipun validasi tipe terjadi, poin paling eksplisit di slide definisi adalah "Secure and sandboxed execution".
:::