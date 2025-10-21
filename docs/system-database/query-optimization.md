# Rangkuman Materi IF3140 – Sistem Basis Data: Query Optimization

## Langkah Dasar Pemrosesan Query

- **Parsing dan translasi**
- **Optimasi**
- **Evaluasi**

## Pengenalan

- **Cara alternatif mengevaluasi query tertentu**
- **Ekspresi ekuivalen**
- **Algoritma berbeda untuk setiap operasi**

### Pengenalan (Lanjutan)

- **Rencana evaluasi menentukan algoritma apa yang digunakan untuk setiap operasi dan bagaimana eksekusi operasi dikoordinasikan**
- **Cari tahu cara melihat rencana eksekusi query di database favorit Anda**
- **Perbedaan biaya antara rencana evaluasi bisa sangat besar** (contoh: detik vs hari)
- **Langkah optimasi berbasis biaya:**
  - **Hasilkan ekspresi ekuivalen secara logis menggunakan aturan ekuivalensi**
  - **Anotasi ekspresi hasil untuk mendapatkan rencana query alternatif**
  - **Pilih rencana termurah berdasarkan biaya perkiraan**
- **Estimasi biaya rencana berdasarkan:**
  - **Informasi statistik tentang relasi** (contoh: jumlah tuple, jumlah nilai berbeda untuk atribut)
  - **Estimasi statistik untuk hasil menengah** (untuk menghitung biaya ekspresi kompleks)
  - **Rumus biaya untuk algoritma**, dihitung menggunakan statistik

## Transformasi Ekspresi Relasional

- **Dua ekspresi aljabar relasional ekuivalen jika menghasilkan set tuple yang sama pada setiap instance database legal**
  - **Urutan tuple tidak relevan**
  - **Tidak peduli jika hasil berbeda pada database yang melanggar batasan integritas**
- **Dalam SQL, input dan output adalah multiset tuple**
  - **Dua ekspresi ekuivalen jika menghasilkan multiset tuple yang sama pada setiap instance database legal**
- **Aturan ekuivalensi menyatakan bahwa ekspresi dua bentuk ekuivalen**
  - **Dapat mengganti ekspresi bentuk pertama dengan kedua, atau sebaliknya**

### Aturan Ekuivalensi

- **Operasi seleksi konjungtif dapat diuraikan menjadi urutan seleksi individu:** σθ1∧θ2(E) = σθ1(σθ2(E))
- **Operasi seleksi bersifat komutatif:** σθ1(σθ2(E)) = σθ2(σθ1(E))
- **Hanya proyeksi terakhir dalam urutan yang diperlukan, yang lain bisa dihilangkan:** ΠL1(ΠL2(…ΠLn(E))) = ΠL1(E)
- **Seleksi dapat digabungkan dengan produk Cartesian dan join theta:**
  - **σθ(E1 × E2) = E1 ⋈θ E2**
  - **σθ1(E1 ⋈θ2 E2) = E1 ⋈θ1∧θ2 E2**
- **Operasi theta-join (dan natural join) bersifat komutatif:** E1 ⋈θ E2 = E2 ⋈θ E1
- **(a) Operasi natural join bersifat asosiatif:** (E1 ⋈ E2) ⋈ E3 = E1 ⋈ (E2 ⋈ E3)
  - **(b) Theta join asosiatif dengan cara berikut:** (E1 ⋈θ1 E2) ⋈θ2∧θ3 E3 = E1 ⋈θ1∧θ3 (E2 ⋈θ2 E3) (di mana θ2 hanya melibatkan atribut dari E2 dan E3)

### Tabel Perbandingan: Komutatif vs Asosiatif

| Konsep         | Penjelasan                              |
|-----------------|-----------------------------------------|
| Komutatif      | Urutan operasi tidak memengaruhi hasil (E1 ⋈θ E2 = E2 ⋈θ E1) |
| Asosiatif      | Pengelompokan operasi tidak memengaruhi hasil ((E1 ⋈ E2) ⋈ E3 = E1 ⋈ (E2 ⋈ E3)) |

## Contoh Soal Latihan

1. **Soal:** Diberikan ekspresi σdept_name='Music'(instructor ⋈ teaches ⋈ course), ubah menjadi bentuk ekuivalen menggunakan aturan seleksi dan join.
   - **Jawaban:** instructor ⋈ teaches ⋈ σdept_name='Music'(course)
2. **Soal:** Jika ada ekspresi Πname, title(σyear=2009(instructor ⋈ teaches ⋈ course)), apakah proyeksi berulang diperlukan? Jelaskan.
   - **Jawaban:** Tidak, hanya proyeksi terakhir (Πname, title) yang diperlukan, sisanya bisa dihilangkan sesuai aturan ekuivalensi.
3. **Soal:** Tentukan apakah (E1 ⋈θ1 E2) ⋈θ2 E3 ekuivalen dengan E1 ⋈θ1 (E2 ⋈θ2 E3) jika θ2 melibatkan atribut dari E1, E2, dan E3.
   - **Jawaban:** Tidak ekuivalen, karena θ2 harus hanya melibatkan atribut dari E2 dan E3 untuk asosiatifitas.

## Daftar Istilah Penting

- **Query Optimization:** Proses menemukan rencana evaluasi dengan biaya terendah untuk menjalankan query.
- **Evaluation Plan:** Rencana yang menentukan algoritma dan koordinasi eksekusi operasi dalam query.
- **Equivalence Rules:** Aturan yang memungkinkan transformasi ekspresi relasional menjadi bentuk ekuivalen.
- **Cost-based Optimization:** Pendekatan optimasi yang memilih rencana berdasarkan estimasi biaya.
- **Relational Algebra:** Sistem aljabar untuk memanipulasi data relasional dengan operasi seperti seleksi dan join.
- **Theta-join:** Jenis join yang menggunakan kondisi theta untuk menggabungkan relasi.
- **Natural Join:** Join yang menggabungkan relasi berdasarkan atribut yang sama tanpa kondisi tambahan.

## Glossarium

- SQL: Structured Query Language
