# Mariane Angelyn Reyes | Portfolio (React + Vite)

## Run it

```bash
npm install
npm run dev
```

Open the address shown in the terminal (usually http://localhost:5173).

## Build for hosting

```bash
npm run build
```

The finished site is created in the `dist` folder. Upload that folder to
Netlify, Vercel, GitHub Pages, or any web host.

## Add your photo

Copy your picture into the `public` folder and name it `mari.png`
(or change `photo` in `src/data/content.js`).

## Edit your information

Almost all text (about, education, skills, projects, contact links) lives in
`src/data/content.js`. Colors and spacing are in `src/styles.css`.

## Structure

```
src/
  App.jsx            page layout
  hooks.js           active section, scroll reveal, top bar shadow
  styles.css         all styles
  data/content.js    your information
  components/        Topbar, Sidebar, Hero, About, Education,
                     Skills, Projects, Contact, Footer
```
