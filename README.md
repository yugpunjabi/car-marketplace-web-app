# 🚗 Car Marketplace Web App

A feature-rich and responsive **Car Marketplace Web Application** where users can explore, upload, and manage car listings. Built with modern technologies like **React.js**, **Vite**, **Tailwind CSS**, **Drizzle ORM**, and **Cloudinary** for seamless image uploads.

Live Link 👉 [https://car-marketplace-yugpunjabi.vercel.app](https://car-marketplace-yugpunjabi.vercel.app)

---

## 📌 Table of Contents

- [📸 Demo](#-demo)
- [✨ Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [⚙️ Setup Instructions](#-setup-instructions)
- [🌐 Deployment (Vercel)](#-deployment-vercel)
- [📂 Folder Structure](#-folder-structure)
- [🧠 Project Highlights](#-project-highlights)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

--------

## ✨ Features

- 🔍 **View Most Searched Cars**
- 📝 **Add / Edit Listings** (with full form and validations)
- 📤 **Upload Multiple Images** to Cloudinary
- 📊 **Financial Calculator** to estimate monthly payments
- 🔒 **Authentication with Clerk**
- ✅ **Edit/Delete listings** from your profile
- 🌐 **Responsive** for all devices
- 💾 **Data stored in PostgreSQL (Neon)** via **Drizzle ORM**

---

## 🛠 Tech Stack

### 🧑‍💻 Frontend
- [React.js](https://reactjs.org/)
- [Vite.js](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Sonner](https://sonner.emilkowal.dev/) (for notifications)

### ☁️ Backend / Services
- [Clerk](https://clerk.dev/) – Auth system
- [Cloudinary](https://cloudinary.com/) – Image uploads
- [Neon PostgreSQL](https://neon.tech/) – Database
- [Drizzle ORM](https://orm.drizzle.team/) – Type-safe ORM

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yugpunjabi/car-marketplace-web-app.git
cd car-marketplace-web-app



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
