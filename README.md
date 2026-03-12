# Xplore Internet — Website Clone

A replica of the [xplore.ca](https://www.xplore.ca/) website built with React and Vite. Xplore is a Canadian rural Internet service provider offering 5G, fibre, and satellite connectivity.

## Tech Stack

- **React 19** — UI framework
- **Vite 7** — build tool and dev server
- **Tailwind CSS 4** — utility-first styling
- **React Router 7** — client-side routing
- **Lucide React** — SVG icon library

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

### Install & Run

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173/`.

### Other Commands

| Command             | Description                           |
| ------------------- | ------------------------------------- |
| `npm run dev`       | Start the Vite dev server with HMR    |
| `npm run build`     | Build for production into `dist/`     |
| `npm run preview`   | Preview the production build locally  |
| `npm run lint`      | Run ESLint on all source files        |

## Project Structure

```
src/
├── components/
│   ├── layout/        # Header, Footer, Layout wrapper
│   ├── sections/      # Page sections (BlogPreview, CTABanner)
│   └── ui/            # Reusable UI (Button, Card, HeroSection, etc.)
├── data/              # Static data (navigation, blog posts, FAQs, testimonials)
├── pages/             # Route-level page components
├── App.jsx            # Route definitions
├── main.jsx           # React entry point
└── index.css          # Tailwind imports and custom theme
```

## Routes

| Path                             | Page                |
| -------------------------------- | ------------------- |
| `/`                              | Home                |
| `/about`                         | About Us            |
| `/5gultra`                       | 5G Ultra            |
| `/5g-go`                         | 5G Go Hub           |
| `/fibre`                         | Fibre Internet      |
| `/satellite-internet-canada`     | Satellite Internet  |
| `/cottage`                       | Cottage Internet    |
| `/network`                       | Our Network         |
| `/shop`                          | Shop                |
| `/shop/internet-packages`        | Internet Packages   |
| `/shop/new-xplore-home-phone`    | Home Phone          |
| `/shop/wifi-solutions`           | Wi-Fi Solutions     |
| `/shop/xtra-care`                | Xtra Care Warranty  |
| `/shop/refer-a-friend`           | Refer a Friend      |
| `/contact-us`                    | Contact Us          |
| `/experts-in-rural-connectivity` | Experts             |
| `/connecting-rural-canadians`    | Customer Stories    |
| `/blog`                          | Blog Listing        |
| `/blog/:slug`                    | Blog Post           |
| `/business`                      | Business            |

## License

This project is for educational and demonstration purposes only.
