#ALX Listing App

This project is focused on creating an **Airbnb clone listing page**.  
The goal is to learn and apply modern frontend technologies such as **React**, **Next.js**, **TypeScript**, and **Tailwind CSS** while building a functional, responsive, and scalable web application.

Key objectives include:

- Practicing component-based development with React.
- Understanding routing and rendering strategies using Next.js.
- Strengthening styling skills with Tailwind CSS.
- Gaining experience with TypeScript for type safety.
- Laying the foundation for a full-featured Airbnb-style platform in future iterations.

### Project Setup

- Scaffolded with:

  - `npx create-next-app@latest alx-listing-app --typescript --tailwind --eslint --no-app-router --no-src-dir`

- TailwindCSS configured with minimal setup (`tailwind.config.js` + `globals.css`).

### Folder Structure

```bash
alx-listing-app/
├── components/
│   └── common/
│       ├── Button.tsx      # Reusable Button component
│       └── Card.tsx        # Reusable Card component
├── constants/
│   └── index.ts            # Global constants (API URLs, UI text, etc.)
├── interfaces/
│   └── index.ts            # TypeScript interfaces (CardProps, ButtonProps, etc.)
├── public/
│   └── assets/             # Images, icons, and SVGs
├── pages/                  # Next.js pages
├── styles/
│   └── globals.css         # Tailwind base styles
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Documentation
```
