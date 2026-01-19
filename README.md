# Kevin Kipkorir - Portfolio

Personal portfolio website showcasing 5G telecommunications, AI/ML projects, and engineering experience. Built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Form Handling:** Formspree
- **Deployment:** Vercel

## Quick Start

```bash
npm install
npm run dev
```

## Project Structure

```
portfolio-nextjs/
├── public/                 # Static assets
│   ├── profile.jpg         # Profile photo
│   ├── Kevin_Kipkorir_Resume.pdf
│   └── [company logos]     # Nokia, Optik, Scale, etc.
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout with metadata
│   │   └── page.tsx        # Main page
│   ├── components/
│   │   ├── Background.tsx  # Grid background
│   │   ├── Navbar.tsx      # Navigation
│   │   ├── Hero.tsx        # Landing section
│   │   ├── About.tsx       # About section
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── Skills.tsx      # Skills grid
│   │   ├── Experience.tsx  # Work timeline with logos
│   │   ├── Contact.tsx     # Contact form
│   │   └── Footer.tsx      # Footer
│   └── lib/
│       └── data.ts         # Content data
├── tailwind.config.ts
└── next.config.js
```

## Features

- Responsive design (mobile, tablet, desktop)
- Smooth scroll animations
- Interactive experience timeline with company logos
- Working contact form via Formspree
- CV download functionality
- SEO optimized

## Deployment

Deployed on Vercel with automatic deployments from the `main` branch.

## License

MIT License
