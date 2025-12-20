# Latihan Soal: Web 3.0 & Blockchain

## Bagian 1: Konsep & Evolusi Web

**1. Manakah pernyataan berikut yang secara akurat membedakan Web 3.0 dari generasi sebelumnya (Web 1.0 dan Web 2.0)?**

- A. Web 3.0 berfokus pada "Read-Write-Own" di mana pengguna memiliki otonomi data.
- B. Infrastruktur utama Web 3.0 bergantung pada Cloud dan Mobile Devices sebagai pilar utama.
- C. Identitas pengguna dikelola melalui Self-Sovereign Identity (SSI), bukan akun terpusat pada platform.
- D. Web 3.0 menyelesaikan masalah User-Generated Content yang belum teratasi di Web 2.0.
- E. Interaksi antar platform dimungkinkan melalui protokol Cross-chain.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, E**

**Penjelasan:** Opsi B salah karena Cloud & Mobile adalah infrastruktur Web 2.0 (Slide 16); Web 3.0 menggunakan Blockchain. Opsi D salah karena User-Generated Content adalah solusi Web 2.0, bukan masalah yang diselesaikan Web 3.0.
:::

---

**2. Dalam konteks ekonomi digital dan mekanisme kepercayaan di Web 3.0, manakah fakta yang valid?**

- A. Menggunakan model "Fictitious Economy" untuk memaksimalkan interaksi pengguna.
- B. Biaya perpindahan (switching cost) antar penyedia layanan menjadi sangat rendah.
- C. Kepercayaan dialihkan dari entitas platform tunggal ke protokol terdistribusi dan kode transparan.
- D. Platform memiliki hak mutlak atas data pengguna untuk tujuan monetisasi iklan.
- E. Menggabungkan aspek kebebasan (freedom) dan kepercayaan (trust) melalui desentralisasi.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, E**

**Penjelasan:** Opsi A salah, "Fictitious Economy" diasosiasikan dengan Web 2.0 di Slide 16, sedangkan Web 3.0 adalah Intelligent Execution/Value. Opsi D adalah karakteristik Web 2.0 yang justru ingin didisrupsi oleh Web 3.0.
:::

---

**3. Bagaimana mekanisme pengelolaan data dan identitas bekerja secara teknis dalam arsitektur Web 3.0?**

- A. Pengguna harus mendaftar satu kali (Single Sign-On) pada server terpusat untuk mengakses semua DApps.
- B. Menggunakan infrastruktur kunci publik terdistribusi (DPKI).
- C. Data pengguna dilindungi algoritma kriptografi dan disimpan di distributed ledger.
- D. Akses data legal hanya dapat terjadi jika ada otorisasi tanda tangan digital (signature) pengguna.
- E. Platform memegang private key pengguna untuk memulihkan akun jika hilang.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, D**

**Penjelasan:** Opsi A salah karena Web 3.0 tidak mewajibkan pembuatan akun di platform (Slide 6). Opsi E fatal secara keamanan; di Web 3.0 (Self-Sovereign), pengguna memegang kendali penuh atas kunci privat mereka, bukan platform.
:::

---

## Bagian 2: Blockchain Mechanics

**4. Jika sebuah blok (Blok B) terbentuk setelah Blok A, mekanisme apa yang menjamin integritas rantai tersebut?**

- A. Blok B menyimpan salinan penuh seluruh data dari Blok A.
- B. Blok B mengandung nilai hash dari Blok A (prevHash).
- C. Perubahan data pada Blok A akan mengubah hash Blok A, sehingga memutus rantai di Blok B.
- D. Setiap node dalam jaringan harus menyetujui perubahan data melalui mekanisme konsensus (>50%).
- E. Data dalam blok dienkripsi sehingga tidak bisa dibaca oleh public node.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, D**

**Penjelasan:** Opsi A salah karena blok hanya menyimpan referensi hash sebelumnya, bukan menyalin datanya. Opsi E salah konteks; ledger bersifat transparan (publik), integritas dijaga oleh hash, bukan dengan menyembunyikan data (enkripsi).
:::

---

**5. Komponen apa saja yang secara teknis terdapat di dalam Header dari sebuah blok (seperti pada contoh Bitcoin)?**

- A. Daftar lengkap transaksi (Transaction Data).
- B. Root of Merkle Tree.
- C. Hash dari blok sebelumnya.
- D. Nonce.
- E. Smart Contract Code.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, D**

**Penjelasan:** Opsi A dan E salah karena data transaksi detail dan kode kontrak berada di Body blok. Header hanya memuat metadata ringkas (Root, PrevHash, Time, Nonce) untuk efisiensi validasi (Slide 24).
:::

---

**6. Terkait keamanan dan distribusi data pada Blockchain:**

- A. Modifikasi data transaksi valid hanya memerlukan persetujuan dari node yang membuat blok tersebut.
- B. Jika satu node mengubah datanya sendiri, perubahan itu otomatis ditolak jika tidak sesuai dengan mayoritas node lain.
- C. Seluruh chain disimpan di semua node dalam jaringan.
- D. Tampering data sangat sulit karena perubahan satu karakter mengubah hash secara drastis.
- E. Authorized Node memiliki hak mutlak untuk mem-veto transaksi tanpa konsensus.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, D**

**Penjelasan:** Opsi A salah karena butuh konsensus mayoritas (>50%), bukan hanya pembuat blok. Opsi E salah karena dalam blockchain publik/terdesentralisasi, tidak ada otoritas tunggal yang memiliki hak veto mutlak di luar mekanisme konsensus.
:::

---

## Bagian 3: Smart Contracts

**7. Apa yang membedakan Smart Contract (khususnya di Ethereum) dibandingkan skrip biasa?**

- A. Bersifat Turing-complete (contoh: Solidity).
- B. Kode kontrak dapat diubah dengan mudah setelah di-deploy untuk memperbaiki bug.
- C. Eksekusi program terjadi secara otomatis dan deterministik di seluruh node.
- D. Memerlukan biaya eksekusi yang disebut "Gas Fee".
- E. Berjalan di atas server terpusat milik pengembang untuk efisiensi.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D**

**Penjelasan:** Opsi B adalah pengecoh utama; salah satu tantangan terbesar Smart Contract adalah kodenya sulit/tidak bisa diubah pasca-deploy (immutability). Opsi E salah karena berjalan di atas Blockchain (terdesentralisasi).
:::

---

**8. Berdasarkan arsitektur dasarnya, manakah perbedaan yang benar antara Bitcoin dan Ethereum?**

- A. Bitcoin menggunakan Account Based Ledger, sedangkan Ethereum menggunakan Transaction Based.
- B. Waktu blok (Out Time of Block) Ethereum jauh lebih cepat (detik) dibanding Bitcoin (menit).
- C. Bitcoin menggunakan bahasa skrip sederhana, sedangkan Ethereum menggunakan bahasa kompleks (Turing-complete).
- D. Ethereum menggunakan Proof of Stack (PoS) + PoW (pada konteks slide/sejarah), sedangkan Bitcoin murni PoW.
- E. Total token Ethereum bersifat tetap (Fixed), sedangkan Bitcoin tidak terbatas.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, D**

**Penjelasan:** Opsi A terbalik (Bitcoin itu Transaction/UTXO based, Ethereum Account based). Opsi E salah karena Bitcoin yang Fixed (21 juta), sedangkan Ethereum Unfixed (Slide 25).
:::

---

**9. Manakah yang merupakan keterbatasan atau tantangan nyata dari Smart Contract?**

- A. Ketergantungan pada pihak ketiga untuk memverifikasi eksekusi.
- B. Tidak dapat diubah (immutable) setelah penyebaran, meningkatkan risiko jika ada celah keamanan.
- C. Keterbatasan waktu/kecepatan pemrosesan dibanding aplikasi konvensional.
- D. Biaya pemrosesan (gas fee) dibebankan pada saat invokasi kontrak.
- E. Kode bersifat tertutup (closed source) demi alasan keamanan.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, D**

**Penjelasan:** Opsi A salah karena Smart Contract menghilangkan butuhnya pihak ketiga. Opsi E salah karena kode di public blockchain bersifat transparan dan dapat diverifikasi siapa saja (Slide 8/27).
:::

---

## Bagian 4: DAO (Decentralized Autonomous Organizations)

**10. Bagaimana DAO berbeda dari organisasi tradisional dalam hal manajemen dan pengambilan keputusan?**

- A. DAO memiliki struktur manajemen bertingkat (Graded Management) untuk efisiensi.
- B. Keputusan dibuat melalui protokol voting yang biasanya proporsional dengan kepemilikan token.
- C. Aliran dana (Money Flow) bersifat transparan dan dapat diaudit publik.
- D. Memerlukan entitas hukum terpusat (Single legal entity) untuk beroperasi.
- E. Aturan organisasi dijalankan oleh algoritma (Smart Contract), bukan oleh manajer manusia.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, E**

**Penjelasan:** Opsi A dan D adalah ciri organisasi tradisional. DAO bersifat Distributed, Flat, dan seringkali beroperasi tanpa entitas hukum tunggal yang terpusat (Slide 29).
:::

---

**11. Apa peran token dalam ekosistem DAO?**

- A. Sebagai alat pembayaran gaji tetap bulanan seperti kontrak kerja konvensional.
- B. Memberikan hak suara (voting rights) dalam tata kelola komunitas.
- C. Berfungsi sebagai insentif untuk kontribusi anggota.
- D. Sebagai bukti kepemilikan saham yang diatur oleh hukum sekuritas konvensional di semua negara.
- E. Memungkinkan pembagian keuntungan (benefit sharing) secara otomatis.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, E**

**Penjelasan:** Opsi A salah karena DAO tidak mengenal kontrak kerja gaji tetap konvensional, melainkan insentif berbasis kontribusi/token. Opsi D terlalu generalis dan seringkali salah karena status hukum token DAO masih abu-abu/berbeda di tiap yurisdiksi, berbeda dengan saham konvensional.
:::

---

## Bagian 5: Token & Tokenomics

**12. Berdasarkan fungsi dan jenisnya, manakah kategorisasi token yang tepat?**

- A. Security Token merepresentasikan investasi atau kepemilikan yang mengharapkan profit.
- B. NFT digunakan untuk aset yang dapat dipertukarkan secara identik satu sama lain (fungible).
- C. Token berfungsi sebagai "unit atom" dari Web 3.0 yang membawa kepentingan/nilai.
- D. Utility Token atau Asset Type Token dapat digunakan untuk hak akses atau penggunaan platform.
- E. Token diciptakan semata-mata untuk menggantikan mata uang Fiat.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D**

**Penjelasan:** Opsi B salah fatal: NFT (Non-Fungible Token) adalah untuk aset unik/koleksi, bukan fungible. Opsi E salah karena fungsi token sangat luas (hak suara, kepemilikan aset, akses), bukan hanya sebagai mata uang.
:::

---

**13. Mengapa sistem blockchain memberikan token rewards?**

- A. Karena biaya pemeliharaan ledger mahal (listrik/komputasi).
- B. Sebagai insentif bagi node untuk melakukan tugas pembukuan (bookkeeping).
- C. Untuk mencegah pengguna biasa bergabung menjadi node.
- D. Untuk menciptakan inflasi buatan agar harga aset turun.
- E. Sebagai mekanisme distribusi nilai dalam ekonomi kreator.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, E**

**Penjelasan:** Opsi C salah, insentif justru menarik node baru. Opsi D salah, tujuannya adalah keamanan dan partisipasi, bukan devaluasi aset.
:::

---

## Bagian 6: Studi Kasus & Aplikasi

**14. Seorang developer mengklaim telah membuat aplikasi Web 3.0 yang "Sempurna" dengan karakteristik berikut. Manakah karakteristik yang MELANGGAR prinsip dasar Web 3.0?**

- A. Aplikasi menyimpan password pengguna dalam database terenkripsi milik perusahaan.
- B. Logika bisnis inti dijalankan menggunakan Smart Contract yang kodenya terbuka.
- C. Admin memiliki "Master Key" untuk membatalkan transaksi blockchain jika ada penipuan.
- D. Pengguna dapat login menggunakan dompet kripto mereka tanpa email.
- E. Data aktivitas pengguna dijual ke pihak ketiga untuk menutupi biaya server.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, E**

**Penjelasan:** A melanggar prinsip Self-Sovereign Identity. C melanggar prinsip Immutability dan Decentralization (tidak boleh ada admin sentral yang bisa rollback transaksi). E melanggar prinsip Data Autonomy dan User Ownership.
:::

---

**15. Jika Anda ingin membangun sistem yang Censor-Resistant (tahan sensor) dan transparan, komponen apa yang wajib ada?**

- A. Penyimpanan data pada Distributed Ledger.
- B. Logika aplikasi pada server AWS Lambda (Serverless).
- C. Tata kelola menggunakan DAO.
- D. Kode yang bersifat Open Source dan dapat diverifikasi (Smart Contract).
- E. Database SQL dengan replikasi Master-Slave.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D**

**Penjelasan:** Opsi B dan E adalah teknologi Web 2.0 yang tersentralisasi. Jika server AWS/SQL dimatikan oleh penyedia (Amazon/Admin), aplikasi mati. Web 3.0 membutuhkan distribusi (Ledger) dan kode otonom.
:::

---

**16. Bagaimana Web 3.0 menangani batasan antar aplikasi (Ecological Boundary)?**

- A. Aplikasi bersifat terisolasi (siloed) demi keamanan data.
- B. Menggunakan protokol Cross-chain untuk interkoneksi nilai.
- C. Pengguna menghadapi hambatan minimal untuk masuk ke "field" aplikasi lain (Free Entry).
- D. Perilaku pengguna tidak lagi dibatasi oleh entitas pihak ketiga.
- E. Satu aplikasi "Super-App" menguasai semua fitur (seperti WeChat).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, D**

**Penjelasan:** Opsi A dan E adalah karakteristik Web 2.0 (Walled Gardens). Web 3.0 menekankan pada Openness dan Interoperability (Slide 12-13).
:::

---

**17. Apa yang terjadi jika seseorang mencoba memodifikasi data transaksi di Blok #50 pada blockchain yang sudah mencapai Blok #100?**

- A. Hash blok #50 akan berubah.
- B. Hash blok #51 hingga #100 akan menjadi tidak valid karena rantai prevHash putus.
- C. Perubahan akan otomatis diterima jika dilakukan oleh "Authorized Node".
- D. Penyerang harus mengkomputasi ulang Proof-of-Work (atau konsensus) untuk blok #50 hingga #100.
- E. Sistem akan menolak perubahan tersebut karena tidak sesuai dengan salinan di node lain.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D, E**

**Penjelasan:** Opsi C salah. Ini adalah inti keamanan Blockchain. Mengubah data lama membutuhkan usaha komputasi ulang seluruh rantai setelahnya (D) dan akan ditolak oleh jaringan karena hash-nya berbeda (E).
:::

---

**18. Dalam Creator Economy Web 3.0, bagaimana hubungan antara kreator dan platform berubah?**

- A. Platform mengambil potongan mayoritas pendapatan sebagai biaya layanan.
- B. Kreator memiliki kepemilikan atas konten mereka melalui token/NFT.
- C. Komunitas dapat ikut serta dalam tata kelola platform (Co-construction).
- D. Keuntungan dibagi secara otomatis melalui Smart Contract.
- E. Hak cipta dikelola secara manual oleh tim legal platform.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, D**

**Penjelasan:** Opsi A dan E adalah model Web 2.0. Web 3.0 menekankan pada distribusi nilai langsung ke kreator dan komunitas serta otomatisasi royalti.
:::

---

**19. Mengingat Web 3.0 belum memiliki definisi standar, manakah deskripsi yang disepakati secara umum?**

- A. Solusi masa depan untuk keamanan informasi pengguna dan kepemilikan konten.
- B. "A user-owned Internet".
- C. Web yang hanya bisa dibaca (Read-only) namun sangat cepat.
- D. Generasi ketiga teknologi Web yang menekankan otonomi pengguna.
- E. Web semantik yang sepenuhnya dikendalikan oleh AI tanpa intervensi manusia.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D**

**Penjelasan:** Opsi C adalah Web 1.0. Opsi E salah, meskipun ada aspek "Intelligent Execution", Web 3.0 berpusat pada User (User-centric), bukan dominasi AI total tanpa manusia.
:::

---

**20. Manakah kategori Blockchain yang disebutkan dalam materi?**

- A. Public Blockchain.
- B. Corporate Blockchain.
- C. Consortium Blockchain.
- D. Private Blockchain.
- E. Government Blockchain.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D**

**Penjelasan:** Berdasarkan Slide 23, kategori yang diakui secara teknis adalah Public, Consortium, dan Private. Istilah "Corporate" atau "Government" adalah deskripsi penggunaan, bukan kategori teknis arsitektur blockchain dalam konteks slide tersebut.
:::