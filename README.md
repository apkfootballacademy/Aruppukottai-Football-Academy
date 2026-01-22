# Aruppukottai Youth Football Academy

## Project Overview

A professional football training academy website showcasing our programs, achievements, and facilities in Aruppukottai.

## Technologies Used

- **Frontend**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.19
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui (Radix UI based)
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Testing**: Vitest + React Testing Library

## Development Setup

### Prerequisites
- Node.js & npm installed

### Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd aruppukottai-youth-football-main

# Step 3: Install dependencies
npm i

# Step 4: Start the development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Project Structure

```
src/
├── components/          # Page sections & UI components
│   ├── Hero.tsx       # Landing hero section
│   ├── Navbar.tsx     # Navigation header
│   ├── About.tsx      # About section
│   ├── Programs.tsx   # Training programs
│   ├── Gallery.tsx    # Photo gallery
│   ├── Achievements.tsx # Awards & achievements
│   ├── Admissions.tsx # Enrollment information
│   ├── Testimonials.tsx # Student testimonials
│   ├── Contact.tsx    # Contact form & info
│   ├── Footer.tsx     # Site footer
│   └── ui/            # shadcn/ui components
├── pages/
│   ├── Index.tsx      # Main landing page
│   └── NotFound.tsx   # 404 page
├── assets/            # Images and static assets
└── lib/               # Utilities & configurations
```

## Features

- **Responsive Design**: Mobile-first approach
- **Modern UI**: Navy blue, forest green, and gold color scheme
- **Smooth Animations**: Framer Motion interactions
- **Navigation**: Sticky navbar with scroll effects
- **Content Sections**: About, programs, gallery, achievements, admissions
- **Contact System**: Contact form and information
- **Professional Branding**: Football academy theme

## Design System

- **Primary Colors**: Navy blue theme with forest green accents
- **Typography**: Poppins font family
- **Custom CSS Variables**: Defined in `src/index.css`
- **Component Variants**: Using class-variance-authority
- **Responsive Breakpoints**: Mobile, tablet, desktop layouts

## Developer

<div align="center">

**Crafted with passion and precision by**

### 👨‍💻 Manikandan V
*Full Stack Developer*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/v-manikandan1142/)

*Transforming ideas into digital excellence with modern web technologies*

</div>

---

## Deployment

Build the project and deploy to your preferred hosting platform:

```sh
npm run build
```

The build files will be in the `dist` directory.
