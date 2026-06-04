# AGENTS.md — OLO Website

Panduan ini digunakan oleh AI agents (Claude Code, Gemini CLI, Cursor, dll) untuk memahami konvensi, struktur, dan aturan pengembangan project ini.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Icon Pack:** `react-icons`
- **UI Library:** ❌ Tidak menggunakan UI library eksternal (Shadcn, MUI, Chakra, dll)
  - Jika butuh instalasi library baru → **konfirmasi ke developer terlebih dahulu**

---

## Struktur Folder

```
src/
├── app/              # Next.js App Router — route pages & layouts
├── components/       # Reusable UI components
├── data/             # Static data / mock data / constants
├── interfaces/       # TypeScript interfaces & types
└── layouts/          # Layout components (wrapper tingkat halaman)
```

---

## Konvensi Komponen (`src/components/`)

Struktur folder menggunakan **grouping dengan prefix underscore** dan **PascalCase** untuk nama komponen/folder.

```
src/components/
├── _shared/                  # Komponen umum yang dipakai di mana saja
│   ├── Button/
│   ├── Wrapper/
│   └── Carousel/
├── _forms/                   # Komponen form
│   ├── Input/
│   └── Select/
├── About/                    # Komponen spesifik halaman About
├── DetailProducts/           # Komponen spesifik halaman Detail Products
└── [...PascalCase lainnya]
```

### Aturan Penamaan Komponen

- Folder komponen: **PascalCase** (misal: `Button`, `DetailProducts`)
- Setiap folder komponen berisi file utama dengan nama yang sama:
  ```
  Button/
  └── Button.tsx
  ```
- Gunakan **named export**, bukan default export, kecuali untuk page files di `app/`

---

## Konvensi Interface (`src/interfaces/`)

```
src/interfaces/
├── components/        # Interface untuk props komponen
│   ├── Button.ts
│   └── [...komponen lainnya]
└── zod/               # Zod schema (hanya jika menggunakan Zod)
    └── [...schemas]
```

### Aturan Penamaan Interface

- Nama interface menggunakan prefix `I` → `IButtonProps`, `IProductCard`
- Atau suffix `Props` untuk komponen → `ButtonProps`, `CarouselProps`
- Simpan interface komponen di `interfaces/components/` dengan nama file yang sesuai komponennya

---

## Konvensi Icon

- Gunakan **`react-icons`** untuk semua kebutuhan icon
- Import spesifik dari sub-package yang relevan:
  ```tsx
  import { FiArrowRight } from "react-icons/fi";
  import { MdOutlineClose } from "react-icons/md";
  ```
- Jangan import dari root `react-icons` langsung

---

## Aturan Umum

- **Jangan install library baru** tanpa konfirmasi ke developer
- Gunakan **TypeScript strict** — hindari penggunaan `any`
- Styling menggunakan **Tailwind CSS** (jika sudah terkonfigurasi) atau CSS Modules — sesuaikan dengan setup aktual project
- Semua route ada di `src/app/` mengikuti konvensi App Router Next.js
- Data statis / konstanta disimpan di `src/data/`

---

## Hal yang Perlu Dikonfirmasi Sebelum Dilakukan

- [ ] Instalasi dependency / package baru
- [ ] Perubahan struktur folder utama
- [ ] Penambahan provider atau konfigurasi global baru
- [ ] Integrasi API eksternal yang belum ada sebelumnya
