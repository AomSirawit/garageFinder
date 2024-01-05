# React + Vite
# GarageFinder Frontend Landing Page

Find car repiar shop in phetchabun.

## Installation & Guide

1. create project
```bash
npm create vite@latest
```
2. install node module
```bash
npm install
```
3. install tailwindCSS
```bash
npm install -D tailwindcss
npx tailwindcss init
```
4. config tailwindCSS in tailwind.config.js
```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
5. add tailwind to main.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
6. install SweetAlert2
```bash
npm install sweetalert2
```
7. Start Project
```bash
npm run dev
```
