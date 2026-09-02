# LP WD — Follow Kami (WEDRINK)

Landing page static — no build, no npm. Siap deploy ke GitHub + Render Static Site.

## Struktur File
```
LP WD/
├── index.html                    # halaman utama
├── style.css                     # styling liquid glass + animasi
├── script.js                     # modal, search, musik
├── LOGO 4 BROTHERS BLUE.jpg      # logo headline (50% opacity, 3D)
└── lagunya.MP3                   # background music (auto-loop)
```

## Cara Upload Manual ke GitHub (tanpa git di terminal)

1. Buka https://github.com/new → buat repo baru, misal `lp-wd` (Public, jangan centang README)
2. Di halaman repo kosong, klik **"uploading an existing file"**
3. Drag & drop semua file di folder `LP WD` ini (index.html, style.css, script.js, LOGO 4 BROTHERS BLUE.jpg, lagunya.MP3)
4. Commit → **Commit changes**

> Alternatif: klik `Add file` → `Upload files` tiap update.

## Deploy ke Render (Static Site)

1. Buka https://dashboard.render.com → **New** → **Static Site**
2. Connect repo `lp-wd` yang baru lu upload
3. Setting:
   - **Build Command:** (kosongkan) — ` `
   - **Publish Directory:** `.`
   - **Branch:** `main`
4. Klik **Create Static Site** → tunggu 1-2 menit → jadi `https://lp-wd.onrender.com`

Tiap lu upload file baru ke GitHub, Render auto-deploy ulang.

## Preview Lokal
- Double-click `index.html` langsung jalan, atau
- VS Code → install extension **Live Server** → klik **Go Live**

## Catatan
- File `LOGO 4 BROTHERS BLUE.jpg` ada spasi — di `index.html` sudah pakai `LOGO%204%20BROTHERS%20BLUE.jpg` (URL-encoded) biar aman di GitHub/Render. Jangan rename manual kalau tidak ganti di HTML juga.
- Kalau mau rename jadi `logo.jpg`, ganti `src` di `index.html:24` juga.
