# Latihan Soal: Framework & Library dalam Web Development

###### FYI : multichoice yak

###### WARN : Sebagian latihan soal ini dibikin menggunakan ai

## Bagian 1: Konsep Dasar & jQuery

**1. Manakah pernyataan yang secara akurat membedakan karakteristik teknis antara Library dan Framework dalam pengembangan aplikasi web?**

- A. Library menyediakan struktur template kode yang harus diikuti oleh pengembang ("Inversion of Control").
- B. Framework berfungsi sebagai kumpulan fungsi utilitas yang dipanggil oleh kode pengembang saat dibutuhkan.
- C. Framework biasanya memaksakan arsitektur dan konvensi tertentu untuk menjaga keteraturan kode tim.
- D. Library melakukan abstraksi terhadap layer yang berbeda seperti model DOM browser untuk menyederhanakan pemanggilan fungsi.
- E. jQuery adalah contoh Framework, sedangkan Angular adalah contoh Library.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: C, D**

**Penjelasan:** Opsi A dan B terbalik definisinya; Framework-lah yang memegang kendali struktur (Inversion of Control), sedangkan Library dipanggil oleh pengembang. Opsi E salah klasifikasi (jQuery adalah Library, Angular adalah Framework).
:::

---

**2. Dalam konteks manipulasi DOM menggunakan jQuery, manakah operasi yang valid dan sesuai dengan fungsinya?**

- A. `$('#id').empty()` menghapus elemen pembungkus (parent) beserta seluruh isinya dari DOM.
- B. `$('.class').append('<p>Text</p>')` menambahkan elemen paragraf di bagian akhir di dalam elemen dengan class tersebut.
- C. `$('div').after('<span>Baru</span>')` menyisipkan elemen span di dalam div, tepat sebelum tag penutup.
- D. `$('p').text('<b>Bold</b>')` akan merender teks "Bold" yang ditebalkan secara visual di browser.
- E. `$('#btn').remove()` akan menghapus elemen dengan ID 'btn' sepenuhnya dari pohon DOM.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, E**

**Penjelasan:** Opsi A salah karena `.empty()` hanya menghapus child elements, bukan elemen itu sendiri. Opsi C salah karena `.after()` menyisipkan setelah elemen (sibling), bukan di dalam. Opsi D salah karena `.text()` akan meng-escape HTML tag, sehingga tag `<b>` akan tertulis sebagai teks literal, bukan dirender sebagai HTML.
:::

---

**3. Terkait mekanisme AJAX pada jQuery, manakah sintaks atau pernyataan teknis yang benar di bawah ini?**

- A. `$.get()` secara default menggunakan metode HTTP GET untuk mengambil data.
- B. `$.ajax({ type: 'POST' })` adalah alternatif low-level untuk melakukan request POST.
- C. Callback function pada `$.get()` menerima parameter `(sData, sStatus)`, di mana sData berisi respon dari server.
- D. `$.post()` tidak dapat mengirimkan data payload; hanya `$.ajax()` yang bisa melakukannya.
- E. `$(selector).load()` digunakan khusus untuk memuat data JSON ke dalam variabel JavaScript.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C**

**Penjelasan:** Opsi D salah karena `$.post()` bisa mengirim data (parameter kedua). Opsi E salah karena `.load()` spesifik memuat HTML langsung ke dalam elemen, bukan memuat JSON ke variabel.
:::

---

**4. Jika dibandingkan dengan Vanilla JavaScript (Native), apa saja trade-off teknis yang benar saat memutuskan menggunakan jQuery?**

- A. jQuery menawarkan sintaks yang lebih ringkas (shorter syntax) dan penanganan kompatibilitas lintas browser (cross-browser support).
- B. Vanilla JavaScript memiliki performa eksekusi yang lebih baik karena berinteraksi langsung dengan API browser tanpa layer tambahan.
- C. jQuery memiliki ukuran file yang lebih kecil dibandingkan kode Vanilla JS untuk fungsi yang setara karena kompresi native browser.
- D. Vanilla JavaScript memiliki ketergantungan (dependency) yang lebih tinggi terhadap library eksternal.
- E. jQuery menyederhanakan proses animasi dan AJAX yang kompleks di native JS lama.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, E**

**Penjelasan:** Opsi C salah, Vanilla JS tidak butuh download library tambahan (0 KB overhead), sedangkan jQuery menambah ukuran load. Opsi D salah, Vanilla JS justru no dependencies.
:::

---

**5. Perhatikan kode jQuery berikut: `$('div#status')`. Apa implikasi dari selector tersebut?**

- A. Akan memilih elemen `<div id="status">`.
- B. Akan memilih elemen dengan `id="div"` dan `class="status"`.
- C. Selektor ini kurang spesifik dibandingkan `$('#status')` saja.
- D. Mengembalikan array elemen atau objek jQuery yang merepresentasikan elemen tersebut.
- E. Akan memilih semua elemen `<div>` yang berada di dalam elemen dengan id "status".

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, D**

**Penjelasan:** Opsi B terbalik (itu sintaks `div.status`). Opsi C salah secara teknis, justru `div#status` lebih spesifik (redundant) tapi `$('#status')` biasanya lebih cepat karena langsung memanggil `getElementById`. Opsi E salah, itu sintaks `$('#status div')` (descendant).
:::

---

## Bagian 2: ReactJS & Virtual DOM

**6. Apa peran fundamental Virtual DOM dalam arsitektur performa ReactJS?**

- A. Virtual DOM adalah salinan "ringan" (lightweight copy) dari DOM aktual yang meminimalisir manipulasi langsung ke browser.
- B. Setiap kali ada perubahan state, React langsung menghapus seluruh DOM browser dan menggantinya dengan Virtual DOM baru.
- C. Proses "Rekonsiliasi" membandingkan Virtual DOM baru dengan yang lama untuk menentukan set perubahan minimal yang diperlukan.
- D. Mengubah Virtual DOM secara komputasi lebih mahal daripada mengubah DOM browser karena overhead memori.
- E. Virtual DOM memungkinkan React melakukan batch update ke DOM browser untuk menghindari perhitungan ulang layout (reflow) yang berlebihan.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, E**

**Penjelasan:** Opsi B salah karena itu sangat tidak efisien; React hanya mengupdate bagian yang berubah (diffing). Opsi D salah, operasi Virtual DOM (objek JS) jauh lebih cepat daripada menyentuh DOM browser yang memicu rendering engine.
:::

---

**7. Mengenai sintaks JSX (JavaScript XML) dalam pengembangan React, manakah pernyataan teknis yang valid?**

- A. JSX adalah ekstensi sintaks yang wajib digunakan; React tidak dapat berjalan tanpa JSX.
- B. Kode `<div className="box">Content</div>` dalam JSX akan dikompilasi menjadi pemanggilan `React.createElement('div', {className: 'box'}, 'Content')`.
- C. JSX memungkinkan penulisan struktur pohon elemen UI yang lebih mudah dibaca dibandingkan pure JavaScript.
- D. Browser modern (Chrome/Firefox) sudah dapat mengeksekusi JSX secara native tanpa perlu transpiler atau compiler.
- E. Untuk production, disarankan melakukan kompilasi JSX di sisi klien (browser) menggunakan BabelJS agar lebih fleksibel.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C**

**Penjelasan:** Opsi A salah, React bisa ditulis dengan plain JS (`React.createElement`). Opsi D salah, browser tidak mengerti JSX, harus dikompilasi. Opsi E salah, kompilasi di browser lambat; untuk production harus dikompilasi sebelumnya (build time).
:::

---

**8. Analisis kode komponen React (ES5 syntax) berikut:**

```javascript
var Counter = React.createClass({
  getInitialState: function() { return { count: 0 }; },
  handleClick: function() {
    this.state.count = this.state.count + 1; // Baris X
  },
  render: function() { return <div>{this.state.count}</div>; }
});
```

**Apa masalah teknis yang terjadi pada kode di atas?**

- A. `getInitialState` bukan fungsi yang valid dalam `React.createClass`.
- B. Baris X melakukan mutasi state secara langsung, yang tidak akan memicu re-render UI.
- C. Seharusnya menggunakan `this.setState({ count: this.state.count + 1 })` untuk memperbarui nilai.
- D. Fungsi `render` tidak boleh mengembalikan elemen `<div>`, harus mengembalikan string.
- E. `React.createClass` memerlukan properti `displayName` agar bisa berjalan.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C**

**Penjelasan:** Opsi A salah, `getInitialState` valid di `createClass`. Opsi D salah, render harus me-return elemen React. Masalah utamanya adalah mutasi langsung (Baris X); React tidak tahu data berubah tanpa `setState`, sehingga UI tidak update.
:::

---

**9. Manakah perbedaan mendasar antara Props dan State dalam komponen React?**

- A. Props bersifat immutable (tidak bisa diubah oleh komponen penerima), sedangkan State bersifat mutable (dapat diubah internal komponen).
- B. Perubahan pada Props tidak memicu render ulang, sedangkan perubahan State memicu render ulang.
- C. State digunakan untuk menyimpan data spesifik komponen yang dinamis (seperti status checkbox atau input).
- D. Props digunakan untuk melewatkan data atau event handler dari komponen induk (parent) ke anak (child).
- E. Akses data State dari komponen anak (child component) secara langsung dianggap sebagai best practice.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D**

**Penjelasan:** Opsi B salah, perubahan Props dari parent juga memicu re-render pada child. Opsi E salah, state bersifat privat/lokal; child tidak boleh mengakses state parent secara langsung (harus via props).
:::

---

**10. Dalam proses Rekonsiliasi React, mengapa penggunaan atribut key pada daftar elemen (list) sangat krusial?**

- A. `key` yang unik membantu React mengidentifikasi item mana yang berubah, ditambah, atau dihapus.
- B. Tanpa `key`, React akan menghapus seluruh list dan membuatnya ulang dari awal jika urutan berubah, yang buruk untuk performa.
- C. React menjamin bahwa komponen dengan `key` yang sama akan di-reuse atau diurutkan ulang, bukan dihancurkan.
- D. Nilai `key` harus berupa angka indeks array (0, 1, 2) untuk performa terbaik.
- E. Masalah pada state komponen dapat terjadi jika urutan item berubah tetapi React hanya memperbarui isi teksnya saja (reuse komponen yang salah).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, E**

**Penjelasan:** Opsi B kurang tepat (React akan memutasi item satu per satu, bukan menghapus semua, tapi tetap tidak efisien/salah state). Opsi D salah, menggunakan indeks array sebagai key adalah bad practice jika list bisa diurutkan ulang, karena indeks bisa berubah untuk item yang sama.
:::

---

## Bagian 3: Arsitektur & Implementasi Lanjut

**11. Manakah pernyataan yang benar mengenai arsitektur React Component?**

- A. Nama variabel komponen harus diawali dengan huruf kapital (misal: `LikeComponent`) agar dikenali sebagai Custom React Element.
- B. Komponen memecah UI menjadi bagian-bagian kecil yang reusable dan modular.
- C. React mengimplementasikan konsep "Separation of Concerns" dengan memisahkan template HTML dan logika JS ke file yang terpisah secara ketat.
- D. Fungsi `render` pada sebuah komponen adalah fungsi murni (pure) yang mengembalikan deskripsi tampilan berdasarkan props dan state saat ini.
- E. `ReactDOM.render` menerima dua argumen: elemen React (Virtual DOM) dan elemen target di browser (Browser DOM).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D, E**

**Penjelasan:** Opsi C salah. React justru menggabungkan logika dan view (HTML via JSX) dalam satu komponen, bukan memisahkannya seperti MVC tradisional (AngularJS lama atau template engine).
:::

---

**12. Perhatikan struktur berikut: `<Form><FormRow /><FormRow /></Form>`. Apa yang terjadi di belakang layar saat kode ini dijalankan tanpa JSX?**

- A. Terjadi pemanggilan fungsi `React.createElement(Form, null, ...children)`.
- B. Browser akan menganggap `<Form>` sebagai tag HTML standar `<form>`.
- C. Komponen `Form` akan menerima `FormRow` sebagai properti `children`.
- D. Kode tersebut akan error jika variabel `Form` dan `FormRow` belum didefinisikan.
- E. Struktur ini menunjukkan pola komposisi komponen (composition).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D, E**

**Penjelasan:** Opsi B salah. Karena diawali huruf kapital, React memperlakukannya sebagai Component, bukan tag HTML native.
:::

---

**13. Berdasarkan statistik dan tren penggunaan Framework (sumber: StackOverflow Survey 2024 pada slide), manakah fakta yang benar?**

- A. Node.js dan React menempati posisi teratas sebagai teknologi yang paling banyak digunakan.
- B. jQuery sudah punah dan tidak lagi digunakan atau diinginkan oleh pengembang.
- C. Svelte memiliki persentase penggunaan (usage) yang lebih tinggi daripada React.
- D. Angular memiliki persentase penggunaan yang lebih rendah daripada React.
- E. Banyak teknologi yang "dikagumi" (admired) belum tentu memiliki basis penggunaan (usage) tertinggi saat ini.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, D, E**

**Penjelasan:** Opsi B salah, slide menunjukkan jQuery masih digunakan (~21.4%). Opsi C salah, React jauh lebih tinggi penggunaannya (39.5% vs 6.5%).
:::

---

**14. Terkait optimasi performa pada React, teknik apa saja yang relevan?**

- A. Memoizing menggunakan `React.memo` atau `useMemo` untuk mencegah render ulang yang tidak perlu.
- B. Lazy Loading untuk menunda pemuatan komponen yang belum dibutuhkan.
- C. Menggunakan Virtual Lists untuk merender hanya sebagian item yang terlihat pada daftar yang sangat panjang.
- D. Memaksa penggunaan `forceUpdate()` sesering mungkin untuk memastikan sinkronisasi data.
- E. Selalu menggunakan index array sebagai `key` pada setiap mapping list.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C**

**Penjelasan:** Opsi D adalah bad practice (menghindari rekonsiliasi efisien). Opsi E juga bad practice (masalah pada reordering).
:::

---

**15. Apa yang dimaksud dengan elemen React (React Element) dalam hierarki objek?**

- A. Instance dari sebuah kelas DOM browser asli (seperti `HTMLDivElement`).
- B. Objek JavaScript sederhana (plain object) yang mendeskripsikan apa yang ingin ditampilkan di layar.
- C. Elemen yang bersifat immutable setelah dibuat.
- D. Sama persis dengan React Component.
- E. Representasi level rendah yang digunakan Virtual DOM untuk menghitung perbedaan UI.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, E**

**Penjelasan:** Opsi A salah, itu elemen DOM asli. Opsi D salah, Component adalah fungsi/class yang menghasilkan Element. Element adalah output dari render.
:::

---

## Bagian 4: Studi Kasus Mini (Problem Solving)

**16. Anda sedang membangun aplikasi Dashboard real-time. Anda melihat UI berkedip dan input teks kehilangan fokus setiap kali data baru masuk ke list. Apa kemungkinan penyebab teknisnya?**

- A. Anda menggunakan jQuery bersamaan dengan React sehingga terjadi konflik manipulasi DOM.
- B. Anda tidak memberikan prop `key` pada item list, atau menggunakan `key` yang selalu berubah (seperti `Math.random()`) pada setiap render.
- C. Anda menggunakan state untuk menyimpan nilai input.
- D. React menghancurkan dan membuat ulang komponen input tersebut karena menganggapnya sebagai komponen berbeda (akibat masalah `key`).
- E. Browser tidak mendukung update real-time.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, D**

**Penjelasan:** Ini adalah gejala klasik masalah rekonsiliasi. Jika `key` berubah (random) atau hilang, React menghancurkan DOM node lama (hilang fokus) dan membuat baru, menyebabkan kedipan/hilang fokus.
:::

---

**17. Manakah pernyataan yang benar mengenai Angular (versi 2+) dibandingkan dengan pendekatan Library seperti React?**

- A. Angular menggunakan TypeScript sebagai bahasa utamanya.
- B. Angular memiliki konsep hirarki komponen sebagai karakteristik arsitektur utamanya, menggantikan konsep `$scope` dan controller.
- C. Angular adalah framework yang "opiniated", menyediakan solusi lengkap termasuk routing dan HTTP client.
- D. Angular merilis versi baru dengan siklus yang sangat lambat (jarang update) dibandingkan React.
- E. Angular menggunakan Virtual DOM persis sama dengan implementasi React.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C**

**Penjelasan:** Opsi D salah, slide menyebutkan "Very rapid releases". Opsi E salah, Angular menggunakan mekanisme deteksi perubahan (Change Detection/Zone.js) yang berbeda dengan Virtual DOM React (meski konsep komponen mirip).
:::

---

**18. Mengapa mutabilitas DOM browser dianggap "mahal" (expensive operation) dalam pengembangan web?**

- A. Mengubah DOM memicu browser untuk menghitung ulang geometri (margin, padding) dan layout halaman (reflow/layout thrashing).
- B. DOM browser tidak memiliki API untuk modifikasi.
- C. Struktur data DOM browser sangat sederhana sehingga sulit dimanipulasi.
- D. Proses repaint (menggambar ulang piksel) memakan resource CPU/GPU.
- E. JavaScript tidak bisa berinteraksi langsung dengan DOM.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, D**

**Penjelasan:** Opsi B, C, E salah secara faktual. Masalah performa muncul karena reflow dan repaint yang berat saat struktur HTML berubah, bukan karena JS tidak bisa mengaksesnya.
:::

---

**19. Kode berikut: `var title = React.createElement('h1', {}, 'Hello world');` setara dengan sintaks JSX:**

- A. `var title = <h1 value="Hello world" />`
- B. `var title = <h1>Hello world</h1>`
- C. `var title = <H1>Hello world</H1>`
- D. `var title = React.render('h1', 'Hello world')`
- E. Kode tersebut membuat elemen header level 1 tanpa properti/atribut tambahan.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, E**

**Penjelasan:** Opsi A salah (syntax `value`). Opsi C salah (tag HTML kecil, komponen besar). Opsi D salah (syntax ngawur).
:::

---

**20. Jika Anda ingin melakukan request AJAX sederhana menggunakan jQuery untuk mengambil data dari 'api/data' dan menampilkannya di #result, manakah potongan kode yang paling tepat?**

- A. `$.get("api/data", function(data) { $("#result").html(data); });`
- B. `$('#result').load("api/data");` (Asumsi respon adalah HTML fragmen).
- C. `$.ajax({ url: "api/data", success: function(r) { $("#result").html(r); } });`
- D. `$.post("api/data", function(data) { $("#result").text(data); });`
- E. `$('api/data').get(function(d) { ... })`

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C**

**Penjelasan:** Opsi D menggunakan POST (biasanya untuk kirim data, bukan ambil, meski bisa return data). Opsi E sintaks salah (selektor memilih elemen DOM, bukan URL string). Opsi A, B, C adalah cara valid (B valid jika data adalah HTML).
:::