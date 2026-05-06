# Ferdy Alwondho — Personal Portfolio Website

Personal portfolio website for Ferdy Alwondho, Head of IT Apps & Integration with 13+ years of experience across telecommunications, project management, ERP, and full-stack web development.

Live at: [ferdy-alwondho.my.id](https://ferdy-alwondho.my.id)

---

## Features

- Responsive single-page portfolio with smooth scroll navigation
- Interactive About section with 3D tilt photo and floating badges
- Experience timeline, Projects showcase, Competencies, and Services sections
- Contact form powered by Resend (email delivery)
- Animated logo marquee for "Worked With" companies
- Built with accessibility and performance in mind

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| UI Components | shadcn/ui |
| Email | [Resend](https://resend.com) |
| Form Validation | React Hook Form + Zod |
| Icons | Lucide React |
| Font | Geist (Variable) |
| Deployment | Vercel |

---

## Running Locally

**1. Clone the repo**
```bash
git clone https://github.com/ferdyalwondho/Personal-Portofolio-Website-Web.git
cd Personal-Portofolio-Website-Web
```

**2. Install dependencies**
```bash
npm install
```

**3. Set up environment variables**

Copy `.env.example` to `.env.local` and fill in the values:
```bash
cp .env.example .env.local
```

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=your@email.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**4. Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deploying to Vercel

**1. Push to GitHub**

Make sure your latest code is pushed to the `main` branch.

**2. Import to Vercel**

- Go to [vercel.com](https://vercel.com) and log in with GitHub
- Click **Add New Project** → select this repo → click **Import**
- Framework will be auto-detected as **Next.js**

**3. Add Environment Variables**

Before deploying, add these under **Environment Variables**:

| Key | Value |
|-----|-------|
| `RESEND_API_KEY` | Your Resend API key |
| `CONTACT_TO_EMAIL` | Email address to receive contact form messages |
| `NEXT_PUBLIC_SITE_URL` | Your production URL (e.g. `https://ferdy-alwondho.my.id`) |

**4. Deploy**

Click **Deploy**. Vercel will build and publish the site in 1–2 minutes.

**5. Connect custom domain (optional)**

Go to **Settings → Domains** in your Vercel project, add your domain, and follow the DNS instructions.

> Every push to `main` will trigger an automatic re-deploy on Vercel.

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes | API key from [resend.com](https://resend.com) |
| `CONTACT_TO_EMAIL` | No | Destination email for contact form (defaults to `f.alwondho@gmail.com`) |
| `NEXT_PUBLIC_SITE_URL` | No | Public URL of the site |

---

## Project Structure

```
├── app/
│   ├── api/contact/      # Contact form API route (Resend)
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── sections/         # Page sections (Hero, About, Experience, etc.)
│   ├── shared/           # Reusable components
│   └── ui/               # shadcn/ui base components
├── data/                 # Content data (profile, experiences, projects, etc.)
├── public/               # Static assets (images, logos)
└── lib/
    └── utils.ts
```
