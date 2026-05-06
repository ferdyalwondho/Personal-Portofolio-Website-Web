# PRD — Ferdy Alwondho Personal Portfolio Website

**Version:** 1.0
**Owner:** Ferdy Alwondho
**Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS + Vercel
**Reference inspirasi:** Dribbble shot 21788500 oleh Aminur Tahmid — *Personal Portfolio Website Landing Page* (style: dark theme, accent neon, typography besar/bold, single-page scroll). **Catatan: jangan jiplak persis — pakai sebagai mood/layout reference saja, hindari peniruan 1:1 atas alasan kepatutan & orisinalitas.**

---

## 1. Tujuan & Konteks

### 1.1 Tujuan
Membuat **single-page personal portfolio website** untuk Ferdy Alwondho yang:
1. Menampilkan profil profesional sebagai **Technical Integration Engineer** dengan dual-expertise: **Telecom/Network** + **IT Application Development**.
2. Menjadi *digital business card* untuk recruiter, kolaborator, dan calon klien freelance.
3. Mudah di-update kontennya tanpa perlu re-deploy ulang dari nol (konten dipisah ke file data terstruktur).
4. Performant, SEO-friendly, dan lulus Lighthouse score ≥ 90 di semua kategori.

### 1.2 Target Audience
- **Recruiter & hiring manager** (telecom/IT/PM roles, lokal & internasional)
- **Klien freelance** untuk project ERP / web app development
- **Profesional rekanan** untuk networking

### 1.3 Non-Goals (yang TIDAK perlu dibuat)
- Bukan blog / CMS dinamis (tidak ada admin panel).
- Tidak ada e-commerce, login user, atau database transaksional.
- Tidak ada animasi 3D berat (Three.js, WebGL) — cukup micro-interaction.
- Tidak ada multi-bahasa di v1 (Bahasa Inggris only). Bahasa Indonesia bisa ditambah di v2.

---

## 2. Tech Stack & Tooling (WAJIB diikuti)

| Kategori | Pilihan | Alasan |
|---|---|---|
| Framework | **Next.js 14** (App Router) | Optimal untuk Vercel, SSG/ISR built-in |
| Language | **TypeScript** (strict mode) | Maintainability |
| Styling | **Tailwind CSS** + **CSS Variables** untuk theming | Cepat, konsisten |
| UI Primitives | **shadcn/ui** (button, card, dialog seperlunya) | Accessibility + DX |
| Animation | **Framer Motion** | Scroll reveal, hover micro-interaction |
| Icons | **lucide-react** | Konsisten, ringan |
| Font | `next/font/google` — **Inter** (body) + **Space Grotesk** atau **Bricolage Grotesque** (headings) | Modern, no FOUT |
| Form | **React Hook Form** + **Zod** | Validasi contact form |
| Email backend | **Resend** atau **Formspree** (free tier) | Tidak perlu maintain server |
| Hosting | **Vercel** | One-click deploy dari GitHub |
| Analytics | **Vercel Analytics** + opsional Plausible | Privacy-friendly |
| Repo | GitHub, branch: `main` (prod) + `dev` (staging) | Standard |

### 2.1 Catatan Versi
- Node.js ≥ 20 LTS
- React 18+
- Tailwind v3 (jangan v4 dulu sampai stabil di Next.js)

---

## 3. Brand & Design System

### 3.1 Nada / Voice
- **Tone:** Profesional tapi approachable, percaya diri tanpa sombong.
- **Tagline utama (hero):** *"Bridging Networks, Platforms, and People."*
- **Sub-tagline:** *"13+ years turning complex telecom & enterprise requirements into systems that actually ship."*

### 3.2 Color Palette (Dark-first, satu accent)

Definisikan di `globals.css` sebagai CSS variables, lalu di-extend di `tailwind.config.ts`:

```css
:root {
  /* Backgrounds */
  --bg-primary: #0A0A0A;        /* near-black, hero & body */
  --bg-secondary: #111111;      /* card surface */
  --bg-tertiary: #1A1A1A;       /* hover state, divider zone */

  /* Text */
  --text-primary: #FAFAFA;      /* headlines */
  --text-secondary: #A1A1AA;    /* body & captions */
  --text-muted: #52525B;        /* meta info, dates */

  /* Accent (PILIH SALAH SATU — default: Lime/Neon) */
  --accent: #C5F82A;            /* lime/neon — energetic, tech-feel */
  --accent-hover: #B0E020;
  --accent-foreground: #0A0A0A; /* text di atas accent button */

  /* Borders */
  --border: #27272A;
  --border-hover: #3F3F46;
}
```

**Alternatif accent** (kalau lime kurang cocok di mata user — minta konfirmasi sebelum final):
- Electric Blue: `#3B82F6`
- Amber: `#F59E0B`
- Magenta: `#EC4899`

### 3.3 Typography Scale

| Token | Size | Weight | Use |
|---|---|---|---|
| `text-display` | 72–96px (clamp) | 700 | Hero headline |
| `text-h1` | 48–64px | 700 | Section title |
| `text-h2` | 32–40px | 600 | Sub-section |
| `text-h3` | 22–24px | 600 | Card title |
| `text-body-lg` | 18–20px | 400 | Hero subtitle, intro paragraph |
| `text-body` | 16px | 400 | Body default |
| `text-caption` | 13–14px | 500 | Meta, label, badge |

Gunakan `clamp()` untuk fluid typography:
```css
font-size: clamp(2.5rem, 5vw + 1rem, 6rem);
```

### 3.4 Spacing & Layout
- **Container max-width:** 1280px (`max-w-7xl`)
- **Section vertical padding:** `py-24 md:py-32` (96px / 128px)
- **Grid gap:** 24px (`gap-6`) standard, 32px (`gap-8`) untuk card grid
- **Border radius:** 12px default (`rounded-xl`), 16px untuk card besar (`rounded-2xl`)

### 3.5 Motion Principles
- **Durasi:** 200–400ms untuk hover, 600–800ms untuk scroll reveal.
- **Easing:** `ease-out` untuk masuk, `ease-in-out` untuk loop.
- **Scroll reveal:** Pakai `framer-motion` `whileInView` dengan `viewport={{ once: true, amount: 0.2 }}`.
- **Hindari** parallax berlebihan, animasi loop yang distracting, dan auto-play video.

---

## 4. Struktur Halaman (Single Page, 9 Section)

Urutan section dari atas ke bawah:

```
[1] Sticky Navbar
[2] Hero
[3] About
[4] Core Competencies / Tech Stack
[5] Experience Timeline
[6] Featured Projects (Case Study Cards)
[7] Services / What I Do
[8] Education & Certifications
[9] Contact / CTA
[10] Footer
```

### Section 1: Navbar (sticky, transparent → blur on scroll)

**Layout:**
- Kiri: Logo/monogram → "FA" atau "Ferdy.A" dalam badge bordered.
- Tengah: Anchor links → `About`, `Experience`, `Projects`, `Services`, `Contact` (smooth scroll).
- Kanan: Tombol CTA → **"Download CV"** (variant: primary, accent color) + tombol theme toggle (opsional, default dark).

**Behavior:**
- Background `transparent` di top, jadi `bg-bg-primary/70 backdrop-blur-md` setelah scroll > 80px.
- Mobile: hamburger menu → overlay full-screen.
- Active link indicator: dot atau underline sesuai section yang sedang di-view (`IntersectionObserver`).

**Acceptance Criteria:**
- ✅ Smooth scroll ke section saat link diklik.
- ✅ Mobile menu buka/tutup smooth, trap focus saat open.
- ✅ Tombol "Download CV" memicu download file PDF lokal (`/public/Ferdy_Alwondho_CV.pdf`).

---

### Section 2: Hero

**Layout (2-column on desktop, stacked on mobile):**

| Kiri (60%) | Kanan (40%) |
|---|---|
| Eyebrow label: `● Available for opportunities` (dot hijau berkedip kecil) | Foto profile (lingkaran atau rounded-2xl, 320×320) ATAU placeholder geometric/initial monogram kalau belum ada foto |
| H1 huge: **"Bridging Networks, Platforms & People."** | Floating mini-cards: `13+ Years Experience`, `30+ Sites Delivered`, `5+ Apps Built` (stat highlights) |
| Sub: *"Technical Integration Engineer with 13+ years across telecom rollouts, ERP, and full-stack web app delivery — based in Jakarta, working globally."* | |
| 2 CTA buttons: **"View My Work"** (primary, accent) + **"Get in Touch"** (ghost/outline) | |
| Trust strip: `Worked with → XL Axiata · Indosat · NEC · Cinemaxx · Trimegah Securities` (logo grayscale atau text only) | |

**Visual treatment:**
- Background grid subtle (dot atau line grid, opacity 5–8%) menggunakan SVG atau CSS gradient.
- Optional: glow accent di pojok kanan bawah hero (radial gradient blur).

**Acceptance Criteria:**
- ✅ H1 readable di semua viewport (min font 40px di mobile).
- ✅ Foto/placeholder load dengan `next/image` priority + blur placeholder.
- ✅ CTA "View My Work" scroll smooth ke section #6 (Projects).
- ✅ Trust strip horizontal scroll di mobile, grid di desktop.

---

### Section 3: About

**Layout (2-column):**

**Kiri:** Foto sekunder atau ilustrasi (opsional, bisa diganti gradient block bertekstur).

**Kanan:**
- Eyebrow: `01 / About Me`
- H2: `Engineer who speaks both Networks and Code.`
- 2–3 paragraf body (gunakan ringkasan dari CV "Professional Summary"):

> "I'm Ferdy — a technical professional with 13+ years spanning telecommunications, network infrastructure, IT application development, and project management. Across that journey, I've consistently played one role: the bridge between customers, networks, and platforms.
>
> From rolling out microwave transmission across Sulawesi, Bali, and Papua, to leading a Microsoft Dynamics 365 ERP migration, to shipping internal Laravel + Vue.js apps for warehouse and project management — I translate messy real-world requirements into systems that scale and stay maintainable.
>
> What I bring isn't just code or cable runs. It's structured thinking, high ownership, and the willingness to push back on requirements when they need refining."

- 4 small KPI tiles di bawah paragraf:
  - `13+` Years Experience
  - `100+` Sites Coordinated
  - `5+` Web Apps Shipped
  - `1` ERP Migration Led (D365 FO)

**Acceptance Criteria:**
- ✅ Paragraf max-width 65ch supaya tetap readable.
- ✅ KPI tiles fade-in saat masuk viewport.

---

### Section 4: Core Competencies / Tech Stack

**Layout:**
- H2: `What I Work With`
- Sub: *"A toolbelt built across telecom field rollouts and enterprise app development."*
- **Grid 3 kolom (desktop) / 2 (tablet) / 1 (mobile):**

**Card 1 — Telecom & Network Engineering**
- Icon: Radio tower / signal
- Items: Microwave Transmission · VSAT · FTTH / Fiber · XGS-PON / PPPoE *(familiar)* · Carrier-Grade Networks · Network Rollout & ATP

**Card 2 — Software & Platform Development**
- Icon: Code brackets
- Items: PHP · Laravel · Vue.js · PostgreSQL · REST API · Git · Power BI

**Card 3 — Enterprise Systems & PM**
- Icon: Layers / org chart
- Items: Microsoft Dynamics 365 FO (AX) · Microsoft Project Online (EPM) · Microsoft Dynamics CRM · ERP Integration · PMO Governance · Stakeholder Management

**Visual:**
- Card background: `bg-bg-secondary`, border `border-border`, hover: `border-accent` + slight `translateY(-4px)`.
- Item list: vertical stack of "pills" atau bullet dengan checkmark accent.

**Acceptance Criteria:**
- ✅ Hover effect smooth, tidak janky.
- ✅ Tetap rapi di mobile (no horizontal overflow).

---

### Section 5: Experience Timeline

**Layout: Vertical timeline (kiri = year/period, garis di tengah, kanan = card)**

Konten dari CV (urutan terbaru → terlama):

**1. Head of IT Apps & ERP** — *PT Alita Praya Mitra* (Jan 2023 – Present)
> Leading the IT Application Department end-to-end. Built WMS Next-G and PM/PO Tools using Laravel + Vue.js + PostgreSQL. Operating Microsoft Dynamics 365 F&O. Led the AX 2012 → D365 FO migration.

**2. Project Management Officer — Nationwide** — *PT Alita Praya Mitra* (Apr 2021 – Jan 2023)
> Drove project governance and reporting for nationwide XL Axiata network upgrade programs. Built dashboards on Google Workspace + Data Studio for delivery visibility.

**3. Regional Project Manager** — *PT Alita Praya Mitra* (Jul 2020 – Apr 2021)
> End-to-end execution of microwave transmission projects across East Java, Bali, NTB, Sulawesi, Maluku, and Papua.

**4. Project Coordinator** — *PT Alita Praya Mitra, Sulawesi Region* (Dec 2016 – Jul 2020)
> Coordinated microwave rollout across Sulawesi. Reviewed network plans (ERM/ECRF) with the design team. Ran ATP with customers and vendors.

**5. EPM & CRM Junior Consultant** — *Ignite Technology Pte Ltd* (May 2014 – Dec 2016)
> Implemented Microsoft Project Online (EPM) and Dynamics CRM for clients including Cinemaxx Global Pasifik, NEC Asia Pacific, and Trimegah Securities.

**6. VSAT Engineer** — *PT Indo Pratama Teleglobal* (Aug 2011 – Apr 2014)
> Installed and maintained VSAT remote sites for the e-KTP and Rural BTS Indosat–INTI nationwide projects. Built monitoring tools using Cacti and WhatsUp Gold.

**Visual treatment:**
- Garis timeline: 1px solid `--border`, dot accent di tiap node.
- Card hover: glow halus accent.
- Mobile: timeline jadi single column dengan dot di kiri.

**Acceptance Criteria:**
- ✅ Tiap node ada year/period, role, company, location, deskripsi 1–2 kalimat.
- ✅ Animasi reveal node dari atas ke bawah saat scroll.

---

### Section 6: Featured Projects (Card Grid)

**Layout:**
- H2: `Selected Work`
- Sub: *"A mix of platform builds, ERP migrations, and nationwide network programs."*
- **Grid 2 kolom (desktop) / 1 (mobile)**, 6 project cards.

**Project Card (anatomy):**
```
┌──────────────────────────────────┐
│ [thumbnail / gradient block]     │ ← 16:9 atau 4:3
│                                  │
├──────────────────────────────────┤
│ TAG · TAG · TAG                  │ ← chips
│ Project Title                    │ ← H3
│ Short description (2 lines max)  │
│ Period · Role                    │ ← caption muted
│ [→ View details]                 │ ← ghost link, opsional
└──────────────────────────────────┘
```

**Konten 6 project (dari CV):**

1. **WMS Next-G** *(Feb 2025 – Jun 2025)*
   - Tags: `Laravel` · `Vue.js` · `PostgreSQL` · `PM/PO`
   - Built a Warehouse Management System from scratch, end-to-end as PM and PO.

2. **PM Tools & PO Management Tools V2** *(Jun 2024 – Dec 2024)*
   - Tags: `Laravel` · `Vue.js` · `Internal Platform`
   - Upgraded internal project & purchase order management platform — full lifecycle.

3. **AX 2012 → Dynamics 365 FO Migration** *(Oct 2023 – Feb 2024)*
   - Tags: `ERP` · `Microsoft D365` · `Migration`
   - Led ERP migration from AX 2012 to Dynamics 365 F&O including data migration and UAT.

4. **XL Axiata Nationwide Upgrade — H1 & H2** *(Jan 2022 – Jan 2023)*
   - Tags: `PMO` · `Microwave` · `Nationwide`
   - PMO for two consecutive nationwide microwave upgrade programs spanning hundreds of sites.

5. **XL New Site Rollout — East Region** *(Sep 2020 – May 2021)*
   - Tags: `Project Management` · `Rollout` · `Multi-province`
   - Regional PM for new site rollout across East Java, Sulawesi, Bali, and Nusa Tenggara.

6. **Microsoft Project Online (EPM) Deployment** *(Jan 2016 – Aug 2016)*
   - Tags: `EPM` · `Microsoft` · `Consulting`
   - Supported full deployment for PT Cinemaxx Global Pasifik, including training.

**Visual treatment:**
- Thumbnail bisa diganti dengan **gradient block + icon besar di tengah** kalau belum ada gambar real (untuk MVP). Tiap project punya warna gradient berbeda agar tidak monoton.
- Hover: card slight lift + accent border + thumbnail subtle zoom.

**Acceptance Criteria:**
- ✅ Tags clickable / filterable adalah **NICE-TO-HAVE**, bukan blocker untuk v1.
- ✅ Bila project punya gambar real (asset di `/public/projects/`), pakai `next/image`.
- ✅ Card link ke modal/dialog detail (Framer Motion shared layout) **NICE-TO-HAVE**, v1 cukup card statis.

---

### Section 7: Services / What I Do

**Layout:**
- H2: `How I Can Help`
- Sub: *"Three focus areas — pick what fits your need."*
- **3-column grid:**

**Service 1 — Web App Development**
> "Full-stack delivery using Laravel + Vue.js + PostgreSQL. From requirement to deployment. Best fit for internal tools, ERP companions, and operational dashboards."

**Service 2 — ERP & Platform Integration**
> "Microsoft Dynamics 365 F&O operation, AX migrations, EPM/CRM rollouts. Connecting platforms, fixing the gaps, owning the data flow."

**Service 3 — Telecom Project & PMO**
> "Microwave, VSAT, and FTTH project delivery — from regional rollout to nationwide PMO governance. Vendor coordination, ATP, and reporting."

**Visual treatment:**
- Tiap service card punya number besar di pojok (`01`, `02`, `03`) dengan opacity rendah.
- Card transparent background dengan border, hover → fill subtle accent.

**Acceptance Criteria:**
- ✅ Card punya icon + number + title + body.
- ✅ Tidak ada link/button keluar — purely informative di v1.

---

### Section 8: Education & Certifications

**Layout (2-column simple):**

**Kiri — Education:**
- **Bachelor's Degree** — Electrical, Electronics & Communications Engineering
- Universitas Pamulang · 2009 – 2016

**Kanan — Certifications:**
- VMware VTSP
- Microsoft Dynamics 365
- Microsoft Project Online (EPM)
- Microsoft Dynamics CRM

**Plus baris kecil di bawah: Languages**
- Indonesian (Native) · English (Professional Working)

**Visual treatment:** Simple list, bordered cards, icon kecil per item. Section ini paling minimal — sengaja, untuk balance.

---

### Section 9: Contact / CTA

**Layout (centered, large):**

- Eyebrow: `Let's Talk`
- Huge H2: **"Have a project in mind?"**
- Sub: *"I'm currently open for select roles and freelance engagements. Drop a message — I usually reply within 24 hours."*
- **Contact form** (max-width 600px, centered):
  - Name (required)
  - Email (required, validated)
  - Subject (optional)
  - Message (required, textarea, min 20 chars)
  - Submit button: **"Send Message"** (full width on mobile, accent color)
- **Atau**, di bawah form: `Or reach me directly →` dengan list:
  - Email: `f.alwondho@gmail.com` (mailto link, copy-to-clipboard icon)
  - Phone/WhatsApp: `+62 821 6276 0450`
  - LinkedIn: `linkedin.com/in/ferdy-alwondho-50734158`

**Form behavior:**
- Pakai React Hook Form + Zod untuk validasi.
- On submit → POST ke `/api/contact` (Next.js Route Handler) yang panggil **Resend** atau **Formspree**.
- Loading state, success state (toast / inline check), error state (toast).
- Anti-spam: honeypot field + simple rate limit (Vercel Edge Middleware atau Upstash Redis kalau perlu).

**Acceptance Criteria:**
- ✅ Form tervalidasi sebelum submit.
- ✅ Email berhasil masuk ke `f.alwondho@gmail.com`.
- ✅ Tidak ada credential di-hardcode (pakai `process.env`).

---

### Section 10: Footer

**Layout (3-row):**

**Row 1 (besar, optional):** Restating tagline atau logo besar `FERDY.` dengan accent dot.

**Row 2:**
- Kiri: Copyright `© 2026 Ferdy Alwondho. All rights reserved.`
- Tengah: Quick links (`Home`, `About`, `Projects`, `Contact`)
- Kanan: Social icons (LinkedIn, GitHub kalau ada, Email)

**Row 3 (mini):** `Built with Next.js · Hosted on Vercel · Last updated [auto]`

---

## 5. Data Model & File Structure

Konten yang sering berubah (project, experience) dipisah ke file data agar mudah update tanpa nyentuh komponen.

```
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                  # landing page utama
│   ├── globals.css
│   └── api/
│       └── contact/
│           └── route.ts          # Resend/Formspree handler
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Competencies.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── ui/                       # shadcn primitives
│   └── shared/
│       ├── SectionHeading.tsx
│       ├── KpiTile.tsx
│       └── ProjectCard.tsx
├── data/
│   ├── profile.ts                # nama, tagline, email, social
│   ├── experiences.ts            # array job entries
│   ├── projects.ts               # array project entries
│   ├── services.ts
│   └── competencies.ts
├── lib/
│   ├── utils.ts
│   └── analytics.ts
├── public/
│   ├── Ferdy_Alwondho_CV.pdf
│   ├── og-image.png              # 1200x630 untuk OG preview
│   └── projects/                 # thumbnail images (kalau ada)
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

**Contoh `data/projects.ts`:**

```typescript
export type Project = {
  id: string;
  title: string;
  period: string;
  role: string;
  description: string;
  tags: string[];
  thumbnail?: string;  // path ke /public/projects/...
  gradient?: string;   // fallback gradient class kalau no thumbnail
  link?: string;       // optional external case study
};

export const projects: Project[] = [
  {
    id: "wms-next-g",
    title: "WMS Next-G",
    period: "Feb 2025 – Jun 2025",
    role: "PM & PO, Full-stack Developer",
    description: "Built a Warehouse Management System from scratch using Laravel, Vue.js, and PostgreSQL. End-to-end ownership.",
    tags: ["Laravel", "Vue.js", "PostgreSQL", "PM/PO"],
    gradient: "from-lime-500/30 to-emerald-700/30",
  },
  // ... 5 lainnya
];
```

Pattern yang sama untuk `experiences.ts` dan `services.ts`.

---

## 6. SEO, Metadata & Sharing

### 6.1 Metadata (`app/layout.tsx`)
```typescript
export const metadata = {
  title: "Ferdy Alwondho — Technical Integration Engineer",
  description: "13+ years bridging telecom networks, ERP platforms, and full-stack web apps. Based in Jakarta, working globally.",
  openGraph: {
    title: "Ferdy Alwondho — Technical Integration Engineer",
    description: "Telecom + IT app specialist. Microwave, VSAT, FTTH, Laravel, Dynamics 365.",
    images: ["/og-image.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};
```

### 6.2 Wajib ada
- `robots.txt` (allow all)
- `sitemap.xml` (otomatis via Next.js `app/sitemap.ts`)
- `favicon.ico`, `apple-touch-icon.png`, `icon.png`
- `og-image.png` (1200×630)
- JSON-LD `Person` schema di `<head>` untuk Google rich results

---

## 7. Accessibility (a11y)

Wajib lulus checklist berikut:
- ✅ Semua interactive element punya `aria-label` yang jelas.
- ✅ Contrast ratio teks vs background ≥ 4.5:1 (cek dengan tool — accent lime di atas dark bg HARUS dicek, kemungkinan perlu underline/border tambahan).
- ✅ Keyboard navigable (tab order logis, focus visible, skip-to-content link di top).
- ✅ Mobile menu trap focus saat open, bisa ditutup dengan Esc.
- ✅ Form punya `<label>` dan error message yang dibacakan screen reader (`aria-live="polite"`).
- ✅ Animasi respect `prefers-reduced-motion`.

---

## 8. Performance

Target Lighthouse (mobile, throttled):

| Metric | Target |
|---|---|
| Performance | ≥ 90 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 95 |
| SEO | 100 |
| LCP | < 2.5s |
| CLS | < 0.1 |
| TBT | < 200ms |

**How to hit it:**
- `next/image` untuk semua gambar dengan `priority` di hero.
- `next/font` untuk semua font (no `<link>` external).
- Lazy-load Framer Motion section reveal (`dynamic import` kalau perlu).
- No unnecessary 3rd-party scripts.
- Tailwind purge aktif (default di v3).
- Static generation (`export const dynamic = 'force-static'`) untuk landing.

---

## 9. Responsive Breakpoints

Mengikuti default Tailwind, dengan emphasis di:

| Breakpoint | Width | Layout |
|---|---|---|
| `default` | < 640px | Mobile, single column, hamburger nav |
| `md` | 768px+ | Tablet, 2-column hero, grid 2-col |
| `lg` | 1024px+ | Desktop, full layout |
| `xl` | 1280px+ | Container max-width tercapai |

Wajib di-test di:
- iPhone SE (375px)
- iPhone 14 Pro (393px)
- iPad (768px)
- MacBook (1440px)
- Desktop 4K (2560px) — content harus tetap di max-w-7xl, tidak stretching.

---

## 10. Deployment & Environment

### 10.1 Variabel Environment (`.env.local` / Vercel dashboard)
```
RESEND_API_KEY=...
CONTACT_TO_EMAIL=f.alwondho@gmail.com
NEXT_PUBLIC_SITE_URL=https://ferdy.dev    # atau domain yang akhirnya dipakai
```

### 10.2 Deploy Flow
1. Push ke `main` → auto deploy ke production di Vercel.
2. Push ke `dev` atau PR → auto preview deploy.
3. Custom domain dihubungkan via Vercel dashboard.

### 10.3 Domain Suggestion
- `ferdyalwondho.com` (primary)
- `ferdy.dev` (alternatif singkat — kalau available)

---

## 11. Acceptance Criteria — Definition of Done

Project dianggap selesai (v1) saat **SEMUA** poin berikut tercentang:

### Functional
- [ ] Semua 9 section ada dan terisi konten sesuai PRD ini.
- [ ] Smooth scroll antar section bekerja di semua browser modern.
- [ ] Tombol "Download CV" mengunduh file PDF dari `/public`.
- [ ] Contact form bisa kirim email ke `f.alwondho@gmail.com` di production.
- [ ] Form validation jalan (empty, invalid email, dsb).
- [ ] Semua link external (`mailto`, `tel`, LinkedIn) bekerja dan `target="_blank"` + `rel="noopener noreferrer"` untuk eksternal.

### Visual / UX
- [ ] Design konsisten dengan color palette & typography di section 3.
- [ ] Tidak ada horizontal scroll di mobile.
- [ ] Animasi smooth, tidak janky, respect `prefers-reduced-motion`.
- [ ] Hover states ada dan terasa "alive" tapi tidak distracting.

### Technical
- [ ] TypeScript strict mode, no `any` kecuali di tempat yang benar-benar perlu (commented).
- [ ] Lighthouse ≥ 90 di semua kategori (mobile, throttled).
- [ ] Tidak ada console error/warning di production build.
- [ ] No env secret di-commit ke repo.
- [ ] `README.md` ada dengan instruksi setup & deploy.

### SEO & Sharing
- [ ] Meta title, description, OG image tampil benar saat di-share di WhatsApp, LinkedIn, X.
- [ ] `sitemap.xml` dan `robots.txt` accessible.

### Accessibility
- [ ] Lulus axe DevTools tanpa critical issue.
- [ ] Keyboard-only navigation lengkap dari atas ke bawah.

---

## 12. Out of Scope (v2 backlog)

Hal-hal di bawah ini **TIDAK** dikerjakan di v1, tapi dicatat untuk pengembangan berikutnya:
- Multi-bahasa (EN/ID toggle)
- Blog / writeup section dengan MDX
- Dark/light theme toggle (default dark only di v1)
- Detail page per-project (`/projects/[slug]`)
- CMS integration (Sanity / Contentlayer)
- Testimonials section
- Newsletter signup
- 3D / WebGL hero animation

---

## 13. Catatan untuk Developer / AI yang Mengerjakan

1. **Jangan jiplak shot Dribbble persis.** Pakai sebagai mood reference saja — layout boleh mirip, tapi tipografi, warna, spacing, dan komposisi harus dioriginalkan. Kalau ragu, lebih baik lebih minimal.

2. **Konten adalah sumber kebenaran (source of truth).** Semua copy di PRD ini sudah disesuaikan dari CV. Jangan mengarang pencapaian atau angka. Kalau perlu varian copy, tanya owner dulu.

3. **Kalau ada keputusan desain yang ambigu, pilih yang paling minimalis & dewasa.** Jangan tambah dekorasi, sticker, emoji berlebih. Style yang dituju: *quietly confident, technical, premium.*

4. **Mobile-first.** Bangun layout mobile dulu, baru ekspansi ke desktop.

5. **Komit ber-step:** scaffold → data layer → section by section → polish. Jangan langsung ngebut commit besar tanpa preview.

6. **Untuk thumbnail project yang belum ada gambar real:** generate dengan kombinasi gradient + icon Lucide besar di tengah card. Konsisten format (16:9), warna gradient unik per project.

7. **Sebelum merge ke `main`:** owner (Ferdy) wajib review preview deployment Vercel.

---

## 14. Open Questions (perlu konfirmasi owner)

Tanyakan ke Ferdy sebelum mulai eksekusi:

1. **Accent color:** Lime/neon (`#C5F82A`) OK, atau prefer biru/amber/magenta?
2. **Foto profile:** Sudah ada foto profesional? Kalau belum, pakai monogram "FA" sebagai placeholder?
3. **Domain final** yang mau dipakai?
4. **Email backend:** Resend (perlu register + verifikasi domain) atau Formspree (lebih cepat tapi ada brand)?
5. **GitHub link** — ada repo public yang mau di-link di footer/contact?
6. **Project thumbnail** — ada screenshot / asset untuk WMS Next-G atau PM Tools? Atau pakai gradient placeholder dulu?

---

**End of PRD v1.0**
