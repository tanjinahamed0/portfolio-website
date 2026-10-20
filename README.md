# MD TANJIN AHAMED — Full-Stack Web Developer Portfolio

A modern, high-fidelity developer portfolio web application built with **React, Vite, TypeScript, and Tailwind CSS**, replicating the exact visual layout, dark cyber color scheme, glowing gradient accents, and component hierarchy illustrated in `portfolio-design.png`.

---

## 🎨 Visual Design & Architecture Highlights

1. **Dark Aesthetic & Cyber Grid**:
   - Deep midnight background (`#080c14`) textured with subtle 40px cyber-grid line overlays.
   - Ambient radial glow meshes in vibrant cyan (`#00f2fe`) and electric purple (`#7928ca`).
   - Micro dot-matrix decorations framing hero and section boundaries.

2. **Hero Showcase**:
   - Personalized welcoming tagline: `Welcome: MD TANJIN AHAMED`.
   - Big bold typography: `FULL-STACK WEB DEVELOPER.` with `(Crafting exceptional digital experiences.)`.
   - Dual CTA actions: Primary gradient button (`View Projects`) with cyan-to-purple transitions and glassmorphic outlined button (`Get In Touch`).
   - Developer workspace portrait in framed rounded bezel with diagonal violet/cyan geometric gradient slice and status badge (`Available for Hire`).
   - Floating dark IDE code preview window.

3. **Projects Grid**:
   - 4-card responsive layout featuring authentic project screenshots extracted from design assets:
     - **ECOMMERCE PLATFORM**: React, Node.js, Stripe
     - **PORTFOLIO SITE**: Vue.js, Tailwind CSS
     - **TASK MANAGER**: MERN Stack
     - **WORK MANAGER**: MERN Stack
   - Interactive `[Live Demo]` modal with deep architecture highlights, tech badges, and source links.

4. **Skills & Expertise**:
   - Categorized cards for **Frontend**, **Backend**, **Databases**, **Cloud & Infrastructure**, and **Tools**.
   - Custom SVG brand icons (JavaScript, React, Vue, Node.js, Python, MongoDB, PostgreSQL, SQL, AWS, Docker, Figma, Git).

5. **About Me & Contact Split**:
   - **About Me**: Bio summary paired with a macOS traffic-light code editor card (`import techStack from 'skills' ...`) with 1-click clipboard copy.
   - **Get In Touch**: Modern form with interactive submission state and direct social links (LinkedIn, GitHub, Mail).

6. **Footer**:
   - Streamlined bottom bar with fast navigation links and copyright tag.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation & Development

```bash
# Install dependencies
npm install

# Start local Vite development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
d:\Antigravity/
├── index.html                 # Entry HTML with Inter & Fira Code typography
├── package.json               # Vite + React + TypeScript + Tailwind scripts & dependencies
├── tsconfig.json              # TypeScript compiler configuration
├── vite.config.ts             # Vite build & bundler configuration
├── tailwind.config.js         # Custom palette, gradients, and shadow glow definitions
├── postcss.config.js          # PostCSS with Tailwind & Autoprefixer
├── portfolio-design.png       # Reference mockup design
├── public/
│   └── assets/                # Developer portrait and project screenshots
└── src/
    ├── main.tsx               # Application mount point
    ├── App.tsx                # Root layout, section scroll observer, and modals
    ├── index.css              # Cyber-grid textures, glow utilities, custom scrollbar
    ├── types/                 # TypeScript interfaces (Project, SkillItem, etc.)
    ├── data/                  # Portfolio content & skills configuration
    └── components/
        ├── Navbar.tsx         # Responsive navbar with active indicator
        ├── Hero.tsx           # Hero section with portrait and action CTAs
        ├── Projects.tsx       # Projects gallery
        ├── ProjectCard.tsx    # Individual project card with hover states
        ├── ProjectModal.tsx   # Detailed quick view project preview modal
        ├── Skills.tsx         # Skill categories with tech brand badges
        ├── About.tsx          # About card with code snippet & copy action
        ├── Contact.tsx        # Interactive contact form & social links
        ├── Footer.tsx         # Footer bar
        └── icons/
            ├── TechIcon.tsx   # SVG tech icons (React, Vue, JS, Python, etc.)
            └── BrandIcons.tsx # GitHub and LinkedIn SVG brand icons
```
