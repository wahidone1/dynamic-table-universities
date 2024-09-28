# Dynamic Table

Dynamic Table adalah aplikasi web yang dibangun menggunakan Next.js, TypeScript, dan Tailwind CSS. Aplikasi ini menampilkan daftar universitas dari API eksternal, dengan fitur pencarian, pemfilteran berdasarkan negara, pengurutan, dan pagination yang responsif.

## Fitur

- **Pencarian**: Mencari universitas berdasarkan nama atau negara.
- **Filter**: Memfilter daftar universitas berdasarkan negara melalui dropdown.
- **Pengurutan**: Mengurutkan daftar universitas berdasarkan nama atau negara.
- **Pagination**: Menampilkan data dengan pagination yang responsif, hanya menampilkan beberapa nomor halaman di sekitar halaman aktif.
- **Halaman Login**: Halaman login sederhana untuk autentikasi pengguna.

## Prerequisites

Sebelum memulai, pastikan Anda telah menginstal:

- [Node.js](https://nodejs.org/) (versi 14.x atau lebih baru)
- [npm](https://www.npmjs.com/) (biasanya sudah termasuk dalam instalasi Node.js)

## Instalasi

1. Clone repositori ini ke komputer Anda:

   ```bash
   git clone https://github.com/username/repo-name.git
   cd repo-name
   ```

2. Instal dependensi yang diperlukan:

   ```bash
   npm install
   ```

## Menjalankan Aplikasi

Untuk menjalankan aplikasi dalam mode pengembangan, gunakan perintah berikut:

```bash
npm run dev
```

Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000).

## Struktur Proyek

```
project-folder/
├── components/
│   ├── DynamicTable.tsx  # Komponen utama untuk menampilkan tabel dinamis
│   ├── Filter.tsx        # Komponen untuk filter berdasarkan negara
│   ├── Pagination.tsx     # Komponen untuk pagination
│   ├── Search.tsx         # Komponen untuk pencarian
│   └── Sort.tsx           # Komponen untuk pengurutan
└── login/
│   └── page.tsx      # Halaman login
├── page.tsx          # Halaman utama
└── globals.css        # Style global
```

## Cara Menggunakan

1. **Mencari Universitas**: Gunakan kolom pencarian untuk mencari universitas berdasarkan nama atau negara.
2. **Memfilter Universitas**: Pilih negara dari dropdown filter untuk menampilkan universitas yang hanya berada di negara tersebut.
3. **Mengurutkan Universitas**: Klik pada kolom judul tabel untuk mengurutkan berdasarkan nama atau negara.
4. **Pagination**: Gunakan pagination di bagian bawah tabel untuk navigasi ke halaman berikutnya atau sebelumnya.
5. **Halaman Login**: Akses halaman login di [http://localhost:3000/login](http://localhost:3000/login).

## Teknologi yang Digunakan

- **Next.js**: Framework React untuk pengembangan aplikasi web.
- **TypeScript**: Superset dari JavaScript yang menambahkan tipe statis.
- **Tailwind CSS**: Framework CSS untuk desain yang responsif dan dapat disesuaikan.

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan lakukan fork repositori dan buat pull request.
