# Rangkuman Materi IF3140 - Sistem Basis Data: Transactions

## Transaction Concept
- **Transaksi** adalah unit eksekusi program yang mengakses dan mungkin memperbarui data.
- **Contoh**: Transfer dana $50 dari A ke B (read(A), A := A - 50, write(A), read(B), B := B + 50, write(B)).
- **Isu utama**: Kegagalan berbagai jenis dan eksekusi bersamaan (concurrent execution).

## Example of Fund Transfer
- **Proses**: read(A), A := A - 50, write(A), read(B), B := B + 50, write(B).
- **Atomicity**: Semua operasi harus tercermin di database atau tidak sama sekali; kegagalan setelah step 3 menyebabkan kehilangan dana.
- **Durability**: Perubahan setelah transaksi selesai harus bertahan meski ada kegagalan sistem.
- **Consistency**: Jumlah A + B tetap, termasuk batasan integritas eksplisit (kunci utama, kunci asing) dan implisit (misalnya, total saldo akun).
- **Isolation**: Transaksi lain tidak boleh melihat data yang belum selesai; bisa dijamin dengan eksekusi berurutan.

### Seluruh Tabel Perbandingan
| Properti      | Penjelasan                                      |
|---------------|-------------------------------------------------|
| Atomicity     | Semua atau tidak ada operasi yang diterapkan.   |
| Consistency   | Menjaga konsistensi database selama eksekusi.   |
| Isolation     | Sembunyikan hasil sementara dari transaksi lain.|
| Durability    | Perubahan tetap ada meski sistem gagal.         |

### Contoh Soal Latihan
1. **Soal**: Jika transaksi transfer $100 dari A ke B gagal setelah write(A), apa yang terjadi pada database jika atomicity tidak dijaga?
   - **Jawaban**: Dana hilang dari A, database jadi inkonsisten karena B tidak bertambah.
2. **Soal**: Bagaimana cara memastikan isolation saat T1 transfer $50 dan T2 membaca A + B bersamaan?
   - **Jawaban**: Jalankan T1 dan T2 secara berurutan atau gunakan mekanisme kontrol konkurensi.
3. **Soal**: Jika total saldo A + B harus 1000 dan T1 mengurangi A sebesar 200 tanpa menambah B, apakah konsisten?
   - **Jawaban**: Tidak konsisten karena total A + B menjadi 800.

---

## Transaction State
- **Status**: Active → Partially Committed → Committed, atau Active → Failed → Aborted.

## Concurrent Executions
- **Keuntungan**: Meningkatkan utilisasi prosesor/disk, throughput transaksi lebih baik, waktu respons rata-rata lebih cepat.
- **Kontrol konkurensi**: Mekanisme untuk menjamin isolasi.

### Contoh Soal Latihan
1. **Soal**: Apa yang terjadi jika dua transaksi aktif bersamaan tanpa kontrol konkurensi?
   - **Jawaban**: Bisa terjadi inkonsistensi data (misalnya, T2 membaca data sementara T1).
2. **Soal**: Bagaimana status transaksi berubah jika gagal di tengah proses?
   - **Jawaban**: Dari Active ke Failed, lalu ke Aborted.
3. **Soal**: Mengapa throughput meningkat dengan eksekusi bersamaan?
   - **Jawaban**: Utilisasi sumber daya lebih optimal.

---

## Serializability
- **Definisi**: Jadwal (schedule) bersamaan setara dengan jadwal berurutan jika mempertahankan konsistensi.
- **Jenis**: Conflict serializability (berdasarkan konflik read/write) dan view serializability (berdasarkan nilai yang dibaca).
- **Tes**: Gunakan graf presedensi; jika tidak bersepeda, jadwalnya serializable.

### Seluruh Tabel Perbandingan
| Jenis                | Kriteria                                      | Tes                      |
|-----------------------|----------------------------------------------|--------------------------|
| Conflict Serializable| Berdasarkan konflik read/write               | Graf presedensi tidak bersepeda |
| View Serializable    | Berdasarkan nilai yang dibaca                | Analisis ekivalensi mahal |

### Contoh Soal Latihan
1. **Soal**: Apakah jadwal T1: read(A), write(A), T2: read(A), write(A) serializable?
   - **Jawaban**: Tidak, karena ada konflik write-write tanpa urutan yang jelas.
2. **Soal**: Jika T1 membaca nilai awal A dan T2 menulis A, apakah view serializable?
   - **Jawaban**: Ya, jika T1 tetap membaca nilai awal A di jadwal lain.
3. **Soal**: Bagaimana menguji serializability dari graf dengan simpul T1 → T2?
   - **Jawaban**: Graf tidak bersepeda, jadi jadwalnya conflict serializable.

---

## Recoverability
- **Recoverable**: Commit T1 harus sebelum commit T2 jika T2 membaca data dari T1.
- **Cascadeless**: Commit T1 harus sebelum read T2 pada data yang ditulis T1 untuk hindari rollback berantai.

### Seluruh Tabel Perbandingan
| Jenis          | Kondisi                                      |
|----------------|----------------------------------------------|
| Recoverable    | Commit T1 sebelum commit T2 jika ada read.   |
| Cascadeless    | Commit T1 sebelum read T2 pada data ditulis. |

### Contoh Soal Latihan
1. **Soal**: Jika T1 write(A) dan T2 read(A) lalu T1 abort, apakah jadwal recoverable?
   - **Jawaban**: Tidak, karena T2 membaca data yang belum commit.
2. **Soal**: Bagaimana mencegah rollback berantai?
   - **Jawaban**: Gunakan jadwal cascadeless dengan commit sebelum read.
3. **Soal**: Jika T1 commit setelah T2 read(A), apakah aman?
   - **Jawaban**: Ya, asalkan jadwalnya recoverable.

---

## Implementation of Isolation
- **Metode**: Locking (shared/exclusive), timestamps (deteksi akses tidak berurutan), multiple versions (snapshot data).
- **Level Konsistensi SQL-92**: Serializable, repeatable read, read committed, read uncommitted.

### Seluruh Tabel Perbandingan
| Level Konsistensi    | Deskripsi                                      |
|-----------------------|-----------------------------------------------|
| Serializable         | Paling ketat, default.                        |
| Repeatable Read      | Membaca ulang harus sama.                     |
| Read Committed       | Hanya data yang sudah commit bisa dibaca.     |
| Read Uncommitted     | Data belum commit bisa dibaca (dirty reads).  |

### Contoh Soal Latihan
1. **Soal**: Pada level read uncommitted, apa risiko membaca data?
   - **Jawaban**: Bisa membaca data kotor (dirty reads) jika transaksi lain rollback.
2. **Soal**: Mengapa repeatable read mencegah non-repeatable reads?
   - **Jawaban**: Nilai yang dibaca tetap sama selama transaksi.
3. **Soal**: Bagaimana locking memastikan isolasi?
   - **Jawaban**: Gunakan kunci shared untuk read dan exclusive untuk write.

---

## Transaction Definition in SQL
- **Awal**: Otomatis (implisit).
- **Akhir**: Commit work atau rollback work; setiap pernyataan SQL commit otomatis.
- **Isolasi**: Bisa diatur di level database atau per transaksi.

### Contoh Soal Latihan
1. **Soal**: Bagaimana mengakhiri transaksi yang berhasil di SQL?
   - **Jawaban**: Gunakan perintah "commit work".
2. **Soal**: Apa yang terjadi jika transaksi gagal dan tidak ada rollback?
   - **Jawaban**: Perubahan tidak disimpan, database tetap konsisten.
3. **Soal**: Bagaimana mengatur level isolasi di SQL?
   - **Jawaban**: Tetapkan level di awal transaksi (misalnya, set transaction isolation level).

---

## Daftar Istilah Penting
- **Transaksi**: Satuan eksekusi program yang mengakses atau mengubah data.
- **Atomicity**: Semua operasi harus berhasil atau gagal bersama.
- **Consistency**: Menjaga aturan integritas database.
- **Isolation**: Menyembunyikan proses transaksi dari yang lain.
- **Durability**: Perubahan tetap meski sistem bermasalah.
- **Schedule**: Urutan eksekusi instruksi transaksi.
- **Serializability**: Kemampuan jadwal bersamaan setara dengan berurutan.
- **Conflict Serializability**: Berdasarkan konflik read/write.
- **View Serializability**: Berdasarkan nilai yang dibaca.
- **Precedence Graph**: Graf untuk menguji serializability.
- **Recoverable**: Commit transaksi sebelum yang membaca data.
- **Cascadeless**: Hindari rollback berantai dengan urutan commit.
- **Concurrency Control**: Mekanisme untuk isolasi transaksi.
- **Dirty Reads**: Membaca data belum commit.
- **Non-repeatable Reads**: Nilai berubah saat dibaca ulang.
- **Phantom Reads**: Munculnya data baru saat transaksi berjalan.

## Glossarium
- **ACID**: Atomicity, Consistency, Isolation, Durability.