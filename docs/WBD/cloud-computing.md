# Latihan Soal: Cloud Computing

## Bagian 1: Konsep Dasar & Karakteristik

**1. Manakah pernyataan berikut yang secara akurat menggambarkan tantangan provisioning dalam infrastruktur tradisional yang diselesaikan oleh Cloud Computing?**

- A. Over-provisioning menyebabkan risiko hilangnya pengguna potensial karena sistem tidak mampu menangani beban puncak.
- B. Rata-rata penggunaan server (utilisasi) di dunia nyata seringkali hanya berkisar antara 5% hingga 20%.
- C. Under-provisioning mengakibatkan capital outlay yang besar menjadi sia-sia karena sumber daya tidak terpakai (idle).
- D. Beban puncak (peak workload) dapat melebihi rata-rata beban kerja hingga faktor 2 sampai 10 kali lipat.
- E. Cloud memungkinkan alokasi sumber daya dimulai dari skala kecil dan bertumbuh sesuai kebutuhan (start small and grow).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, D, E**

**Penjelasan:** Pengecoh A dan C terbalik. Over-provisioning menyebabkan pemborosan modal (sumber daya idle), sedangkan Under-provisioning menyebabkan hilangnya pengguna (sistem down/lambat).
:::

---

**2. Berdasarkan standar NIST, manakah yang merupakan karakteristik esensial dari Cloud Computing?**

- A. Resource Pooling (Penyatuan sumber daya untuk melayani banyak konsumen).
- B. Unlimited Bandwidth (Kapasitas jaringan tanpa batas).
- C. Measured Service (Layanan yang terukur dan dimonitor oleh penyedia).
- D. Rapid Elasticity (Kemampuan untuk melakukan skala naik dan turun dengan cepat).
- E. Single-Tenant Isolation (Setiap hardware didedikasikan untuk satu pengguna saja).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D**

**Penjelasan:** Opsi B bukan istilah standar NIST. Opsi E salah karena Cloud menggunakan model Multi-tenant, bukan Single-tenant secara default (Resource Pooling).
:::

---

**3. Mengenai konsep Resource Pooling dan akses jaringan, manakah pernyataan teknis yang valid?**

- A. Penyedia cloud menggunakan model multi-tenant untuk melayani konsumen.
- B. Kapabilitas cloud hanya dapat diakses melalui thick clients (seperti desktop powerful), bukan thin clients (seperti mobile/browser).
- C. Ubiquitous Network Access berarti layanan dapat diakses melalui mekanisme standar jaringan.
- D. Lokasi fisik sumber daya (seperti server) selalu diketahui secara pasti dan presisi oleh pengguna akhir setiap saat.
- E. Konsumen dapat menggunakan layanan tanpa interaksi manusia dengan penyedia (On-Demand Self-Service).

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, E**

**Penjelasan:** Opsi B salah karena akses mencakup thick dan thin clients. Opsi D salah karena dalam resource pooling, pengguna seringkali tidak tahu lokasi fisik pasti dari sumber daya (abstraksi lokasi).
:::

---

## Bagian 2: Model Layanan (SPI)

**4. Dalam model Infrastructure as a Service (IaaS), komponen mana saja yang menjadi tanggung jawab PENGGUNA (Consumer) untuk dikelola?**

- A. Virtualization
- B. Middleware
- C. Runtime
- D. Networking (Fisik)
- E. Data

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, E**

**Penjelasan:** Pada IaaS, pengguna mengelola dari OS ke atas (termasuk Middleware, Runtime, Data, App). Penyedia mengelola Virtualization, Servers, Storage, dan Networking. Mahasiswa sering salah mengira Middleware diurus oleh provider di IaaS.
:::

---

**5. Identifikasi pernyataan yang benar mengenai batasan tanggung jawab pada Platform as a Service (PaaS):**

- A. Pengguna memiliki kendali penuh atas sistem operasi (O/S).
- B. Pengguna dapat melakukan deploy aplikasi yang dibuat menggunakan bahasa pemrograman yang didukung oleh penyedia.
- C. Penyedia layanan mengelola Runtime dan Middleware.
- D. Google App Engine adalah contoh layanan PaaS yang ditujukan untuk komputasi umum (general purpose computing).
- E. Azure (dalam konteks PaaS) menyediakan lingkungan komputasi umum berbasis platform Microsoft.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, E**

**Penjelasan:** Opsi A salah karena di PaaS, O/S dikelola provider. Opsi D salah karena App Engine dideskripsikan untuk "Build scalable web applications fast", bukan general purpose computing seperti EC2 (IaaS).
:::

---

**6. Manakah yang merupakan karakteristik dari Software as a Service (SaaS)?**

- A. Konsumen tidak perlu mengelola infrastruktur komputasi dasar (server, jaringan).
- B. Aplikasi berjalan pada infrastruktur cloud milik penyedia.
- C. Cocok untuk pengguna yang ingin mengonfigurasi parameter kernel sistem operasi.
- D. Contoh layanannya termasuk Dropbox dan Salesforce.
- E. Semua lapisan dari Networking hingga Applications dikelola oleh penyedia layanan.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D, E**

**Penjelasan:** Opsi C salah karena SaaS tidak memberikan akses ke level OS atau kernel. Pengguna hanya menggunakan aplikasi jadi.
:::

---

## Bagian 3: Arsitektur & Infrastruktur

**7. Terkait arsitektur fisik Cloud (Region dan Availability Zone), manakah fakta teknis yang benar?**

- A. Region terdiri dari beberapa Availability Zone (AZ) yang terisolasi secara fisik.
- B. Setiap AZ dalam satu region berbagi suplai daya (power) yang sama untuk efisiensi.
- C. Satu AZ dapat terdiri dari satu atau lebih pusat data fisik (physical data centers).
- D. AZ dirancang agar terisolasi satu sama lain dari segi lokasi dan suplai air.
- E. Region adalah lokasi logis, bukan lokasi fisik.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D**

**Penjelasan:** Opsi B salah fatal; isolasi AZ justru mensyaratkan sumber daya (power) yang terpisah untuk mencegah kegagalan total. Opsi E salah, Region adalah lokasi fisik geografis.
:::

---

**8. Mengenai teknologi Virtualisasi dan Hypervisor:**

- A. Virtualisasi memungkinkan multiple VM berjalan pada satu server fisik tunggal.
- B. Hypervisor Tipe 1 berjalan di atas Sistem Operasi (Hosted).
- C. Hypervisor Tipe 2 dikenal sebagai Bare Metal atau Native.
- D. VMware ESXi dan KVM adalah contoh teknologi yang mengelola alokasi VM.
- E. Hypervisor Tipe 1 menempatkan lapisan virtualisasi langsung di atas Hardware.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, D, E**

**Penjelasan:** Opsi B dan C adalah pengecoh yang menukar definisi. Tipe 1 = Native/Bare Metal (langsung di hardware), Tipe 2 = Hosted (di atas OS).
:::

---

**9. Manakah pernyataan yang tepat mengenai komponen Storage dalam infrastruktur cloud?**

- A. Block Storage menyediakan blok penyimpanan mentah, mirip dengan hard drive tradisional.
- B. Object Storage memiliki sistem file hirarkis (seperti folder tree).
- C. File Storage biasanya digunakan untuk sebagian besar kasus penggunaan aplikasi web (web application use cases).
- D. Object Storage menyediakan penyimpanan yang scalable untuk data tidak terstruktur (unstructured data).
- E. SAN dan NAS adalah teknologi yang umum digunakan dalam lingkungan cloud.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, D, E**

**Penjelasan:** Opsi B salah, yang hirarkis adalah File Storage. Opsi C salah, teks menyebutkan Object Storage (bukan File) yang sering digunakan untuk kasus aplikasi web.
:::

---

**10. Dalam konteks jaringan (Networking) cloud, komponen mana saja yang berfungsi untuk menjaga koneksi dan keamanan transfer data?**

- A. Load Balancers
- B. Firewalls
- C. Hypervisors
- D. Software-defined networking (SDN)
- E. Virtual Private Networks (VPNs)

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D, E**

**Penjelasan:** Opsi C salah. Hypervisor adalah komponen komputasi/virtualisasi, bukan komponen jaringan utama untuk transfer data.
:::

---

## Bagian 4: Manajemen, Keamanan, & Deployment

**11. Apa fungsi utama dari platform manajemen cloud (Management and Orchestration)?**

- A. Melakukan replikasi data ke lokasi alternatif (Disaster Recovery).
- B. Memfasilitasi provisioning dan alokasi sumber daya.
- C. Mengimplementasikan otomatisasi (automation) untuk efisiensi deployment.
- D. Mengelola penagihan (cost management and billing).
- E. Menyediakan blok penyimpanan mentah untuk database.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: B, C, D**

**Penjelasan:** Opsi A adalah fungsi Disaster Recovery, bukan fungsi utama manajemen platform. Opsi E adalah fungsi Storage. Manajemen fokus pada kontrol, orkestrasi, dan administrasi.
:::

---

**12. Manakah mekanisme yang termasuk dalam komponen Keamanan (Security) infrastruktur cloud?**

- A. Intrusion Detection Systems (IDS).
- B. Enkripsi Data (Data Encryption).
- C. Latency Management.
- D. Manajemen Kerentanan (Vulnerability Management).
- E. Kontrol Akses dan Otentikasi.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D, E**

**Penjelasan:** Opsi C (Latency Management) berkaitan dengan performa/monitoring jaringan, bukan fitur keamanan spesifik secara langsung.
:::

---

**13. Tentukan pernyataan yang benar mengenai model deployment (Public, Private, Hybrid):**

- A. Public Cloud infrastrukturnya dioperasikan khusus hanya untuk satu organisasi.
- B. Private Cloud infrastrukturnya tersedia untuk masyarakat umum.
- C. Hybrid Cloud terdiri dari dua atau lebih cloud (private, community, atau public).
- D. Dalam Hybrid Cloud, entitas-entitas cloud tersebut tetap unik tetapi terikat oleh teknologi yang memungkinkan data/aplikasi berpindah (interoperate/federate).
- E. Private Cloud selalu lebih murah daripada Public Cloud karena tidak ada biaya bandwidth.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: C, D**

**Penjelasan:** Opsi A dan B definisinya tertukar. Opsi E adalah asumsi ekonomi yang tidak dinyatakan dalam fakta teknis dokumen (dan seringkali salah karena CapEx Private Cloud tinggi).
:::

---

## Bagian 5: Studi Kasus & Pemetaan Layanan

**14. Anda sedang merancang strategi Disaster Recovery (DR). Aktivitas mana yang relevan dengan komponen ini?**

- A. Melakukan replikasi data dan aplikasi ke lokasi alternatif.
- B. Menggunakan Monitoring tools untuk melihat real-time insights.
- C. Membuat salinan data secara berkala (Backup) untuk melindungi dari korupsi data.
- D. Memastikan Failover dan High Availability.
- E. Mengelola Service Value Nets antar bisnis.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, C, D**

**Penjelasan:** Opsi B adalah fungsi Monitoring & Analytics. Opsi E berkaitan dengan arsitektur bisnis/Service Value Nets, bukan mekanisme teknis DR.
:::

---

**15. Analisis padanan layanan (Service Mapping) berikut. Manakah pasangan layanan yang setara (equivalent) antar penyedia cloud yang benar?**

- A. Google Compute Engine ↔ Amazon EC2 ↔ Azure Virtual Machines.
- B. Google Cloud Functions ↔ AWS Lambda ↔ Azure Functions.
- C. Google Cloud Storage ↔ Amazon S3 ↔ Azure Blob Storage.
- D. Google App Engine ↔ AWS Elastic Beanstalk ↔ Oracle Cloud Infra OCI.
- E. Google Cloud Bigtable ↔ Amazon DynamoDB ↔ Azure Cosmos DB.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C, E**

**Penjelasan:** Opsi D salah pada bagian Oracle. *Google App Engine* (PaaS) setara dengan *Oracle Application Container*, bukan *Oracle Cloud Infra OCI* (yang merupakan IaaS/VM).
:::

---

**16. Manakah tugas yang termasuk dalam ranah Monitoring and Analytics?**

- A. Capacity Planning (Perencanaan kapasitas).
- B. Alerting and Incident Management.
- C. Virtualization (Membuat VM).
- D. Real-time monitoring kesehatan infrastruktur.
- E. Data Privacy Protection.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D**

**Penjelasan:** Opsi C adalah fungsi Compute/Virtualization. Opsi E adalah fungsi Compliance/Security. Monitoring fokus pada pelacakan performa dan kesehatan sistem.
:::

---

**17. Berkaitan dengan Compliance and Governance, apa tujuan utama dari komponen ini?**

- A. Memastikan kepatuhan terhadap regulasi industri.
- B. Mengelola risiko (Risk management).
- C. Menyediakan load balancing untuk lalu lintas jaringan.
- D. Melakukan audit keamanan dan pelaporan.
- E. Menjamin privasi dan perlindungan data.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, D, E**

**Penjelasan:** Opsi C adalah fungsi Networking. Compliance berurusan dengan hukum, aturan, audit, dan kebijakan.
:::

---

**18. Jika Anda menggunakan layanan Oracle Autonomous Data Warehouse, layanan serupa apa yang ditawarkan oleh penyedia cloud lain?**

- A. Google BigQuery
- B. Amazon Redshift
- C. Azure Synapse Analytics
- D. Amazon DynamoDB
- E. Google Cloud Datastore

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C**

**Penjelasan:** Opsi D dan E adalah layanan NoSQL, sedangkan Data Warehouse (Oracle ADW, Redshift, BigQuery) adalah kategori analisis data skala besar (OLAP/Warehousing), bukan NoSQL transaksional sederhana.
:::

---

**19. Pada diagram Cloud Architecture (Service Value Nets), lapisan mana saja yang terlibat dalam ekosistem cloud?**

- A. Service Value Nets
- B. Platform as a Service
- C. Infrastructure as a Service
- D. Business Service & Community Service
- E. Hard Drive Partitioning Service

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C, D**

**Penjelasan:** Diagram arsitektur menunjukkan lapisan SVN, PaaS, IaaS, serta komponen Business/Community services di dalamnya. Opsi E adalah istilah teknis level rendah yang tidak ada di arsitektur tingkat tinggi ini.
:::

---

**20. Mengapa data center fisik (Physical Data Centers) disebut sebagai fondasi infrastruktur cloud?**

- A. Karena mereka menampung perangkat keras yang diperlukan seperti server dan sistem penyimpanan.
- B. Karena mereka menyediakan ruang fisik, daya, dan pendinginan.
- C. Karena desain dan pemeliharaannya menentukan ketersediaan (availability) layanan cloud.
- D. Karena pengguna cloud wajib mengunjungi data center untuk melakukan instalasi server.
- E. Karena mereka mengelola virtualisasi secara otomatis tanpa hypervisor.

::: details Lihat Jawaban & Pembahasan
**Kunci Jawaban: A, B, C**

**Penjelasan:** Opsi D salah total (sifat cloud adalah remote/virtual). Opsi E salah karena virtualisasi dikelola oleh Hypervisor, dan Hypervisor berjalan di atas hardware di dalam data center, bukan data center itu sendiri yang menggantikan hypervisor.
:::