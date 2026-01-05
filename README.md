# xyyz Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone or download this folder
cd portfolio-nextjs

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 📁 Project Structure

```
portfolio-nextjs/
├── public/                 # Static assets (images, resume, etc.)
│   ├── profile.jpg        # Your profile photo (add this!)
│   └── resume.pdf         # Your resume (add this!)
├── src/
│   ├── app/
│   │   ├── globals.css    # Global styles & Tailwind config
│   │   ├── layout.tsx     # Root layout with metadata
│   │   └── page.tsx       # Main page component
│   ├── components/
│   │   ├── Background.tsx # Animated background
│   │   ├── Navbar.tsx     # Navigation bar
│   │   ├── Hero.tsx       # Hero/landing section
│   │   ├── About.tsx      # About me section
│   │   ├── Projects.tsx   # Projects showcase
│   │   ├── Skills.tsx     # Skills grid
│   │   ├── Experience.tsx # Work experience timeline
│   │   ├── Contact.tsx    # Contact form & links
│   │   ├── Footer.tsx     # Footer
│   │   └── SectionHeader.tsx # Reusable section header
│   └── lib/
│       └── data.ts        # All your content data (EDIT THIS!)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## ✏️ Customization

### 1. Update Your Information

Edit `src/lib/data.ts` to update:
- Projects
- Skills
- Work experience
- Contact links (email, LinkedIn, GitHub)

### 2. Add Your Profile Photo

1. Add your photo to `public/profile.jpg`
2. In `src/components/Hero.tsx`, uncomment the Image component and remove the emoji placeholder:

```tsx
// Replace this:
<span className="text-7xl">📡</span>

// With this:
<Image
  src="/profile.jpg"
  alt="xyyz"
  fill
  className="object-cover"
  priority
/>
```

### 3. Add Your Resume

Place your resume PDF in `public/resume.pdf`, then add a download button in the Hero section.

### 4. Set Up Contact Form

Replace the demo form handler in `src/components/Contact.tsx` with:

**Option A: Formspree (easiest)**
```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option B: Resend + Server Action (recommended)**
See [Resend documentation](https://resend.com/docs/send-with-nextjs)

## 🎨 Customizing the Design

### Colors

Edit the color palette in `tailwind.config.ts`:

```ts
colors: {
  primary: {
    DEFAULT: "#0a0a0f",    // Main background
    light: "#12121a",      // Secondary background
    card: "#1a1a24",       // Card background
  },
  accent: {
    cyan: "#00d4ff",       // Primary accent
    magenta: "#ff00aa",    // Secondary accent
    purple: "#7b61ff",     // Tertiary accent
  },
}
```

### Fonts

Change fonts in `src/app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap');
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts to connect your GitHub and deploy
```

Your site will be live at `https://your-project.vercel.app`

### Custom Domain

1. In Vercel dashboard, go to your project → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

## 🛠️ Development with Claude Code

```bash
# Navigate to project
cd portfolio-nextjs

# Start Claude Code
claude

# Example prompts:
# - "Add a dark/light mode toggle"
# - "Create a blog section"
# - "Add project filtering by technology"
# - "Implement smooth page transitions"
# - "Add a skills progress bar visualization"
```

## 📱 Features

- ✅ Fully responsive design
- ✅ Smooth scroll animations with Framer Motion
- ✅ Animated background effects
- ✅ Mobile navigation menu
- ✅ Contact form ready for integration
- ✅ SEO optimized with Next.js metadata
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling

## 📄 License

MIT License - feel free to use this template for your own portfolio!
