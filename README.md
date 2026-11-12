# Recruitment Landing Page
Project Recruitment landing Page ini ditujukan untuk memenuhi Mini Assignment sebagai Web Developer

## Getting Started
  ### Tech Stack
  - React + TypeScript (Vite)
  - pnpm
  - Material UI (`@mui/material`, `@emotion/react`, `@emotion/styled`)
  - React Router

## How to Run
Pastikan Node.js sudah terinstall

```bash
# 1. Install dependency
pnpm install

# 2. Jalankan local server
pnpm dev
```
Buka `http://localhost:5173`.

## Struktur Project

```
src/
├── components/     # NavigationBar
├── pages/          # RecruitmentPage (form lamaran) & Main Pages
├── styles/         # fonts.css
├── types/          # data posisi, class Applicant dan data Navigation
├── App.tsx
└── main.tsx        
```

## Route

| Path | Page |
|------|---------|
| `/`  | Halaman Utama |
| `/recruitment-section` | Form lamaran |

## Keputusan Utama

- **Frontend-only.** Scope tugas hanya landing page, jadi tidak ada backend. Data posisi disimpan statis di Array `applicants` pada Recruitment Page.
- **Material UI.** Komponen seperti `Grid`, `Card`, `TextField`, `Button` yang membantu pembuatan layout.
- **Responsif dengan `sx` breakpoint.** Ukuran font, padding, dan jumlah kolom diatur per breakpoint (`xs`, `sm`, `md`). Role cards tampil 1 kolom di mobile dan 3 kolom di desktop.
- **Navbar.** Data navbar menggunakan map dari `NavigationBar.ts` sehingga dapat bertambah. Navbar mengikuti saat scroll. Di mobile, menu Navbar menggunakan `Drawer`.
- **Route parameter untuk role.** Tombol "Apply Now" mengarah ke `/recruitment-section`.
- **Validasi form .** Hanya cek field kosong dan format email mengandung `@`.



