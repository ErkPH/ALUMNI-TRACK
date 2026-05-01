# 🎓 Alumni Tracking System - Universitas Muhammadiyah Malang

### Identitas Mahasiswa
- **Nama**  : Erik Putra Hernanda
- **NIM**   : 202310370311250
- **Kelas** : Rekayasa Kebutuhan B

---

## 📋 Deskripsi Proyek
Sistem ini dirancang untuk memetakan dan melacak jejak karier lulusan Universitas Muhammadiyah Malang (UMM). Proyek ini merupakan bagian dari tugas akademik untuk pengumpulan dan pengolahan data alumni guna mendukung pengembangan kurikulum dan jejaring alumni.

Sistem mengintegrasikan data master alumni dengan data hasil penelusuran (scraping/tracking) untuk mendapatkan profil profesional yang komprehensif.

### Data yang Dikumpulkan:
1. **Identitas & Kontak**: Nama, NIM, Email, No HP.
2. **Media Sosial**: LinkedIn, Instagram, Facebook, TikTok.
3. **Detail Pekerjaan**: Tempat Bekerja, Alamat Bekerja, Posisi Jabatan.
4. **Klasifikasi Sektor**: PNS, Swasta, Wirausaha.
5. **Jejaring Kantor**: Media sosial instansi/tempat bekerja.

## 🛡️ Keamanan & Privasi (Data Protection)
Sesuai dengan instruksi tugas, sistem ini sangat memperhatikan aspek keamanan data:
- **Login Protected**: Akses ke dashboard data hanya dapat dilakukan melalui akun admin yang terverifikasi.
- **Privacy Compliance**: Semua data hanya digunakan untuk kepentingan pembelajaran. Data pribadi (PII) tidak dipublikasikan ke repositori publik melalui konfigurasi `.gitignore`.
- **Data Integrity**: Sistem membedakan secara visual antara data yang sudah tervalidasi (Verified) dan data yg masih mentah (RAW).

## 🚀 Fitur Utama
- **High-Performance Search**: Pencarian cepat alumni berdasarkan Nama atau NIM.
- **Server-Side Pagination**: Mampu mengolah 142.292+ data dengan ringan menggunakan Node.js tanpa membebani performa browser.
- **Quick Preview**: Melihat detail lengkap alumni (termasuk link sosial media yang dapat diklik) dalam satu modal interaktif.
- **Status Sorting**: Secara otomatis menampilkan status profil alumni apakah sudah terverifikasi atau belum.

## 🔑 Akun Akses (Login)
Silakan gunakan kredensial berikut untuk masuk ke sistem:
- **Username**: admin
- **Password**: umm2024

## 🛠️ Teknologi yang Digunakan
- **Frontend**: HTML5, Tailwind CSS, JavaScript (ES6+).
- **Backend**: Node.js & Express.js.
- **Database**: Local JSON Storage (Optimized for fast query).
- **Processing**: Python & Pandas (ETL Process).

---
**Catatan Penting**: *Semua data dalam sistem ini adalah untuk kepentingan pembelajaran, dilarang menyebarkan untuk kepentingan apapun.*