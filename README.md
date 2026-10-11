# Sage Roots International — Premium Study Abroad Website

A complete, production-ready Next.js 14 website for **Sage Roots International (SRI)** — a global education consultancy.

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18 or above — [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### 1. Install Dependencies
```bash
cd sage-roots-international
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
sage-roots-international/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (header, footer, metadata)
│   ├── page.tsx            # Homepage
│   ├── about/
│   ├── destinations/
│   ├── universities/
│   │   └── [slug]/         # Dynamic university detail pages
│   ├── courses/
│   ├── services/
│   ├── foundation/
│   ├── scholarships/
│   ├── success-stories/
│   └── contact/
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky nav with mobile drawer
│   │   ├── Footer.tsx      # Multi-column dark footer
│   │   └── AnnouncementBar.tsx
│   ├── home/               # All homepage sections
│   │   ├── HeroSlider.tsx
│   │   ├── BenefitStrip.tsx
│   │   ├── FeaturedDestinations.tsx
│   │   ├── PromoBanner.tsx
│   │   ├── UniversityMarketplace.tsx
│   │   ├── StudyBySubject.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── FoundationPathways.tsx
│   │   ├── SuccessStories.tsx
│   │   └── ConsultationForm.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── UniversityCard.tsx
│       ├── DestinationCard.tsx
│       ├── FloatingWhatsApp.tsx
│       └── TabVisibility.tsx
│
├── data/
│   ├── universities.ts     # 8 UK university data entries
│   ├── destinations.ts     # 7 study destination entries
│   └── services.ts         # Services, subjects, testimonials
│
└── lib/
    └── utils.ts
```

---

## ⚙️ Customisation Guide

### Update WhatsApp Number
In `app/layout.tsx`, replace `+44XXXXXXXXXX` with your verified business number:
```tsx
<FloatingWhatsApp phoneNumber="+44YOURREALNUMBER" />
```
Also update the number in `components/layout/Header.tsx`.

### Add Your Logo
Replace the text-based wordmark in `Header.tsx` and `Footer.tsx` with:
```tsx
import Image from 'next/image'
<Image src="/logo.svg" alt="Sage Roots International" width={120} height={40} />
```
Place your logo at `public/logo.svg`.

### Add Real University Data
Edit `data/universities.ts` to update verified information.
Each university entry follows this TypeScript interface:
```ts
interface University {
  name, slug, city, country, image, studyLevels,
  subjects, intakes, tuitionFeeNote, scholarshipNote,
  overview, entryRequirements, englishRequirements, ...
}
```

### Wire Up the Consultation Form
In `components/home/ConsultationForm.tsx`, replace the demo delay with a real API call:
```ts
// Option A: Formspree
await fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', body: data })

// Option B: Next.js API route
await fetch('/api/contact', { method: 'POST', body: JSON.stringify(fields) })
```

---

## 🎨 Brand Colors

| Token | Hex |
|-------|-----|
| Midnight Purple | `#180326` |
| Royal Purple | `#3B125C` |
| Purple | `#4A148C` |
| Magenta | `#D81B60` |
| Lavender | `#F6F0FF` |

Edit `tailwind.config.ts` to update.

---

## ⚠️ Important Notes

- **Images**: Currently using Unsplash placeholder images. Replace with official photography for production.
- **Testimonials**: All testimonials are marked as sample placeholders. Add real testimonials with student consent only.
- **University Data**: Fees, requirements, and scholarship information are placeholder notes — update with verified data before launch.
- **Contact Details**: Office address and phone number should be verified and updated before publishing.

---

## 📦 Tech Stack

| Technology | Version |
|-----------|---------|
| Next.js | 14.2.5 |
| React | 18 |
| TypeScript | 5 |
| Tailwind CSS | 3.4 |
| Lucide React | 0.417 |
| Framer Motion | 11 |

---

## 📞 Support

For development queries, contact your development team or refer to the [Next.js documentation](https://nextjs.org/docs).
