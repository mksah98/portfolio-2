A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## 🚀 Project Overview
This project is a personal portfolio site to showcase your skills, experience, projects, and contact information. It is designed to be fast, accessible, and easy to customize.

## ✨ Features
- Modern UI/UX with responsive design
- Sections for Hero, Experience, Education, Skills, Projects, and Contact
- Contact form with email sending capability
- Theme support (light/dark)
- Modular and reusable component structure

## 🛠️ Tech Stack
- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [Lucide React](https://lucide.dev/) (icons)
- [React Icons](https://react-icons.github.io/react-icons/)

## 📁 Folder Structure
```
portfolio/
├── app/                # Next.js app directory (pages, layout, API routes)
│   ├── api/            # API routes (e.g., send-email)
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components (sections, UI, utilities)
│   └── ui/             # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and static data
├── public/             # Static assets (images, PDFs, etc.)
├── styles/             # Additional global styles
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## 🧑‍💻 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/mksah98/portfolio-2.git
   cd portfolio-2
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## ⚙️ Customization
- Edit content in the `components/` and `lib/info.ts` files to update your information.
- Add or remove sections by editing `app/page.tsx` and the corresponding components.
- Update styles in `app/globals.css` or `tailwind.config.ts`.

## 📬 Contact
For questions or feedback, feel free to open an issue or reach out via the contact form on the site.

---

**MIT License**