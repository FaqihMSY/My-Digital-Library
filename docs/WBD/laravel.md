# Latihan Soal: Laravel Framework

## Bagian 1: Konsep Framework & Struktur Laravel

**1. Dalam konteks pengembangan perangkat lunak menggunakan framework seperti Laravel, manakah pernyataan berikut yang secara akurat menggambarkan prinsip Inversion of Control dan Extensibility?**

- A. Alur kendali program ditentukan oleh kode pemanggil (caller), bukan oleh framework.
- B. Framework menyediakan kode umum (generic functionality) yang dapat diganti secara selektif oleh kode pengguna.
- C. Pengguna diharapkan memodifikasi file inti framework (core code) untuk menambahkan fungsionalitas spesifik.
- D. Framework bertindak sebagai abstraksi yang dapat digunakan kembali dan dibungkus dalam API yang terdefinisi dengan baik.
- E. Alur kendali program didikte oleh framework.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, D, E**

**Penjelasan:** Opsi A terbalik (itu definisi library). Opsi C salah fatal; prinsip Non-modifiable Framework Code menegaskan pengguna harus memperluas (extend), bukan memodifikasi inti framework.
:::

---

**2. Tinjau struktur direktori root pada proyek Laravel standar. Manakah pernyataan berikut yang BENAR mengenai fungsi spesifik dari sub-direktori yang ada?**

- A. Direktori `public/` berisi `index.php` yang menjadi pintu masuk (entry point) untuk semua request.
- B. Direktori `config/` berisi file `app.php` yang bertugas melakukan bootstrapping framework.
- C. Direktori `storage/` menyimpan file-file yang dihasilkan framework seperti log, sesi berbasis file, dan template Blade yang telah dikompilasi.
- D. Direktori `vendor/` berisi dependensi Composer dan tidak boleh dimodifikasi secara manual.
- E. Direktori `app/` menampung file migrasi database dan model factories.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D**

**Penjelasan:** Opsi B salah karena `app.php` untuk bootstrapping ada di folder `bootstrap/`, bukan `config/`. Opsi E salah karena migrasi ada di `database/`, bukan `app/`.
:::

---

**3. Mengenai definisi route di dalam direktori `routes/`, manakah karakteristik yang membedakan `web.php` dan `api.php`?**

- A. Route di `web.php` secara default menyediakan proteksi CSRF dan enkripsi cookie.
- B. Route di `api.php` bersifat stateless (tanpa status sesi).
- C. Route di `api.php` ditujukan untuk request yang diautentikasi melalui token.
- D. Route di `web.php` tidak memiliki akses ke session state.
- E. `console.php` digunakan untuk mendefinisikan route berbasis HTTP untuk CLI.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C**

**Penjelasan:** Opsi D salah, justru `web.php` memiliki state. Opsi E salah, `console.php` untuk perintah berbasis closure (command), bukan HTTP route.
:::

---

**4. Anda mendefinisikan form HTML di dalam view yang diarahkan ke route yang didefinisikan di `web.php`. Pada skenario manakah direktif `@csrf` atau token CSRF WAJIB disertakan agar request tidak ditolak oleh middleware Laravel?**

- A. Form dengan method POST.
- B. Form dengan method GET untuk pencarian data.
- C. Form yang mensimulasikan method DELETE.
- D. Form yang mensimulasikan method PUT atau PATCH.
- E. Semua request AJAX yang mengarah ke `api.php`.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D**

**Penjelasan:** Opsi B salah karena GET bersifat read-only dan tidak mengubah state, sehingga tidak butuh CSRF. Opsi E salah karena `api.php` bersifat stateless dan biasanya tidak menggunakan session-based CSRF protection standar.
:::

---

## Bagian 2: Routing & Parameter

**5. Perhatikan definisi route berikut. Manakah sintaks yang VALID dan tidak akan menyebabkan error saat aplikasi dijalankan?**

- A. `Route::get('/user/{id}', function ($id) { return 'User '.$id; });`
- B. `Route::get('/user/{name?}', function ($name) { return $name; });`
- C. `Route::get('/user/{name?}', function ($name = 'John') { return $name; });`
- D. `Route::get('/user/{name?}', function ($name = null) { return $name; });`
- E. `Route::get('/posts/{post}/comments/{comment}', function ($commentId, $postId) { ... });`

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D, E**

**Penjelasan:** Opsi B akan menyebabkan runtime error jika parameter tidak diisi di URL, karena argumen `$name` pada fungsi closure tidak memiliki nilai default, padahal di route didefinisikan opsional (?). Opsi E valid meskipun nama variabel berbeda, urutan argumen mengikuti urutan parameter di URI.
:::

---

**6. Anda ingin mengelompokkan beberapa route di bawah prefix `/admin` dan subdomain `account.example.com`. Manakah potongan kode yang benar untuk mencapai hal ini?**

- A. 
  ```php
  Route::domain('{account}.example.com')->group(function () {
      Route::prefix('admin')->group(function () { ... });
  });
  ```

- B. 
  ```php
  Route::prefix('admin')->domain('{account}.example.com')->group(function () { ... });
  ```

- C. 
  ```php
  Route::group(['prefix' => 'admin', 'domain' => '{account}.example.com'], function () { ... });
  ```

- D. 
  ```php
  Route::prefix('admin')->group(function ($account) { ... });
  ```

- E. Parameter subdomain `{account}` akan diteruskan ke semua callback route di dalam grup tersebut.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, E**

**Penjelasan:** Opsi A dan B adalah sintaks fluent yang valid. Opsi E benar secara teknis (parameter domain diteruskan). Opsi D salah karena group closure tidak menerima parameter routing secara langsung di definisinya.
:::

---

## Bagian 3: Blade Templating

**7. Manakah pernyataan teknis yang BENAR mengenai cara kerja dan fitur Blade templating engine?**

- A. View Blade dikompilasi menjadi kode PHP murni dan di-cache sampai file view dimodifikasi.
- B. Kode PHP murni tidak dapat digunakan di dalam file `.blade.php`.
- C. Direktif `@json($array)` ekuivalen dengan `<?php echo json_encode($array) ?>`.
- D. File view harus disimpan tepat di root direktori `public/views/`.
- E. Logika presentasi (View) dipisahkan dari logika aplikasi (Controller).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, E**

**Penjelasan:** Opsi B salah, Blade mengizinkan PHP murni. Opsi D salah fatal, lokasi view ada di `resources/views/`.
:::

---

**8. Diberikan variabel `$records` yang merupakan sebuah array. Manakah blok kode Blade yang akan menangani kondisi "array kosong" atau "array null" dengan benar tanpa memicu error Undefined variable?**

- A. `@if(count($records) > 0) ... @else ... @endif`
- B. `@forelse ($records as $record) ... @empty ... @endforelse`
- C. `@isset($records) ... @endisset`
- D. `@unless($records) ... @endunless`
- E. `@empty($records) ... @endempty`

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, E**

**Penjelasan:** Opsi A berisiko error jika `$records` belum terdefinisi (null). Opsi B, C, dan E aman karena `@isset` dan `@empty` mengecek keberadaan variabel, dan `@forelse` menangani array kosong secara internal.
:::

---

## Bagian 4: Eloquent ORM - Model Basics

**9. Jika Anda membuat model `class Flight extends Model {}` tanpa mendefinisikan properti tambahan apa pun, asumsi apa yang akan dibuat oleh Eloquent?**

- A. Tabel database bernama `flights` (jamak dari nama class).
- B. Primary key bernama `id`.
- C. Primary key bertipe integer dan auto-incrementing.
- D. Tabel tidak memiliki kolom `created_at` dan `updated_at`.
- E. Koneksi database menggunakan driver sqlite secara default.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C**

**Penjelasan:** Opsi D salah, secara default Eloquent menganggap `$timestamps = true`. Opsi E salah, koneksi mengikuti konfigurasi default aplikasi, bukan spesifik sqlite kecuali di-override.
:::

---

**10. Anda bekerja dengan tabel database legasi yang tidak mengikuti konvensi Laravel. Tabel bernama `my_flights`, primary key berupa string `flight_id`, dan tidak ada timestamps. Properti apa yang harus di-override di dalam Model?**

- A. `protected $table = 'my_flights';`
- B. `protected $primaryKey = 'flight_id';`
- C. `public $incrementing = false;`
- D. `public $timestamps = false;`
- E. `protected $keyType = 'string';`

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C, D, E**

**Penjelasan:** Semua opsi benar dan diperlukan untuk kasus spesifik tersebut sesuai dokumentasi teknis Model (visibilitas `protected` untuk `$table`, `$primaryKey`, `$keyType` dan `public` untuk `$incrementing`, `$timestamps`).
:::

---

## Bagian 5: Eloquent ORM - Data Operations

**11. Perhatikan kode berikut: `$flights = Flight::where('active', 1)->orderBy('name')->take(10)->get();` Apa implikasi dari eksekusi kode di atas?**

- A. `->take(10)` ekuivalen dengan `LIMIT 10` pada SQL.
- B. `->get()` mengembalikan sebuah instance `Illuminate\Database\Eloquent\Collection`.
- C. `->get()` mengembalikan array PHP standar.
- D. Jika tidak ada hasil, variabel `$flights` akan bernilai `null`.
- E. Metode `->refresh()` dapat digunakan pada instance hasil query untuk memuat ulang data dari database.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B**

**Penjelasan:** Opsi C salah (return object Collection). Opsi D salah (return Collection kosong, bukan null). Opsi E salah konteks; `refresh()` digunakan pada single instance model, bukan pada collection hasil `get()`.
:::

---

**12. Manakah metode yang valid untuk menyimpan data baru atau memperbarui data yang sudah ada ke database menggunakan Eloquent?**

- A. `$flight->save();` setelah menetapkan atribut pada instance model baru.
- B. `Flight::create(['name' => 'Bali']);` (dengan asumsi properti fillable atau guarded sudah dikonfigurasi).
- C. `Flight::make(['name' => 'Bali']);` akan langsung menyimpan ke database.
- D. `Flight::firstOrCreate(['name' => 'Bali']);`
- E. `Flight::where('active', 1)->update(['delayed' => 1]);`

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D, E**

**Penjelasan:** Opsi C salah, `make()` hanya membuat instance di memori tetapi tidak menyimpannya ke database. Opsi E adalah mass update yang valid via query builder.
:::

---

**13. Mengapa metode `Flight::create([...])` memerlukan konfigurasi properti `$fillable` atau `$guarded` pada model?**

- A. Untuk mencegah kerentanan Mass Assignment.
- B. Agar Eloquent tahu kolom mana yang boleh diisi secara massal melalui array.
- C. Tanpa properti tersebut, metode `create` akan mengembalikan error.
- D. `save()` juga memerlukan `$fillable` agar berfungsi.
- E. `$guarded` mendefinisikan atribut yang TIDAK boleh diisi secara massal.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C, E**

**Penjelasan:** Opsi D salah. `save()` pada instance model (bukan mass assignment) tidak dibatasi oleh `$fillable` atau `$guarded`.
:::

---

**14. Manakah cara yang BENAR untuk menghapus record menggunakan Eloquent?**

- A. `$flight = Flight::find(1); $flight->delete();`
- B. `Flight::delete(1);`
- C. `Flight::where('active', 0)->delete();`
- D. `$flight->destroy();` pada instance model.
- E. `Flight::destroy(1);`

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C**

**Penjelasan:** Berdasarkan slide (halaman 41), hanya opsi A (via instance) dan C (via query) yang ditampilkan secara eksplisit. Opsi B salah karena `delete()` pada static biasanya dipanggil via query builder, bukan langsung dengan ID (itu method `destroy`).
:::

---

## Bagian 6: Eloquent Relationships

**15. Model `User` memiliki satu `Phone`. Model `Phone` dimiliki oleh `User`. Bagaimana pendefinisian metode relasi yang tepat pada kedua model?**

- A. Di model User: `return $this->hasOne(Phone::class);`
- B. Di model Phone: `return $this->belongsTo(User::class);`
- C. Di model User: `return $this->belongsTo(Phone::class);`
- D. Metode relasi di Phone digunakan untuk mendapatkan user pemilik ponsel.
- E. Eloquent akan mencari foreign key `user_id` pada tabel `phones`.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D, E**

**Penjelasan:** Opsi C salah karena terbalik (User adalah pemilik/parent, bukan yang 'belongs to' phone). Opsi E benar, `hasOne` mengasumsikan foreign key ada di tabel lawan (phones).
:::

---

**16. Diketahui relasi `Post` has many `Comment`. Apa perbedaan antara pemanggilan `$post->comments` dan `$post->comments()`?**

- A. `$post->comments` mengembalikan Collection dari seluruh komentar (hasil query).
- B. `$post->comments()` mengembalikan instance Query Builder (relation object).
- C. `$post->comments()->where('title', 'foo')->first()` adalah chaining yang valid.
- D. `$post->comments` memungkinkan chaining method query seperti `->where(...)`.
- E. `$post->comments` adalah dynamic property.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C, E**

**Penjelasan:** Opsi D salah. Karena `$post->comments` sudah berupa Collection (hasil akhir), kita tidak bisa memanggil method SQL/Query Builder seperti `where` (SQL) padanya, melainkan method filter Collection (PHP).
:::

---

**17. Untuk mengimplementasikan relasi Many-to-Many antara `User` dan `Role`, elemen apa saja yang diperlukan?**

- A. Tabel `users` dan tabel `roles`.
- B. Tabel pivot (perantara), biasanya bernama `role_user` (urutan alfabetis).
- C. Tabel pivot harus memiliki kolom `id` sebagai primary key sendiri agar bisa berjalan.
- D. Definisi `return $this->belongsToMany(Role::class);` pada model User.
- E. Definisi `return $this->hasMany(User::class);` pada model Role.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D**

**Penjelasan:** Opsi C salah, tabel pivot hanya butuh foreign key (`user_id`, `role_id`). Opsi E salah, relasi many-to-many menggunakan `belongsToMany` di KEDUA sisi model, bukan `hasMany`.
:::

---

## Bagian 7: Controllers & Views

**18. Manakah langkah atau sintaks yang benar terkait pembuatan dan penggunaan Controller?**

- A. Command: `php artisan make:controller UserController`
- B. Controller disimpan di direktori `app/Http/Controllers/`.
- C. Controller class harus meng-extend `App\Http\Controllers\Controller`.
- D. Route definisi: `Route::get('/user/{id}', [UserController::class, 'show']);`
- E. Sebuah controller wajib memiliki semua method resource (index, create, store, dll).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C, D**

**Penjelasan:** Opsi E salah. Controller bisa berupa controller biasa yang hanya berisi satu atau dua method kustom, atau Single Action Controller. Tidak wajib resourceful.
:::

---

**19. Kapan dan bagaimana Anda menggunakan Single Action Controller?**

- A. Ketika aksi controller sangat kompleks sehingga didedikasikan dalam satu kelas sendiri.
- B. Menggunakan method magic `public function __invoke()`.
- C. Route didefinisikan tanpa array: `Route::post('/server', ProvisionServer::class);`.
- D. Route didefinisikan dengan nama method: `Route::post('/server', [ProvisionServer::class, '__invoke']);`.
- E. Class tersebut tidak perlu meng-extend base Controller.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C**

**Penjelasan:** Opsi D tidak perlu (redundant), Laravel otomatis mendeteksi `__invoke`. Opsi E salah, tetap disarankan extend base Controller untuk akses fitur middleware dll (lihat slide 55).
:::

---

**20. Anda ingin mengembalikan view yang tersimpan di `resources/views/admin/profile.blade.php` dengan membawa data user. Manakah sintaks yang benar?**

- A. `return view('admin/profile', ['user' => $user]);`
- B. `return view('admin.profile', ['user' => $user]);`
- C. `return view('admin.profile', $user);` (asumsi `$user` adalah array).
- D. Parameter pertama fungsi `view` menggunakan notasi titik (.) untuk sub-direktori.
- E. Argumen kedua fungsi `view` adalah array data yang akan tersedia sebagai variabel di view.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, D, E**

**Penjelasan:** Opsi A biasanya bisa jalan tapi konvensi Laravel menggunakan titik (dot notation) seperti di opsi B dan D. Opsi C berisiko jika `$user` adalah objek Model, karena argumen kedua harus array key-value pair.
:::