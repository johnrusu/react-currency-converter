# React Currency Converter

A fast, responsive currency converter application built with React, TypeScript, and Vite. Convert between major world currencies with real-time exchange rates.

🌐 **Live Demo:** [https://johnrusu.github.io/react-currency-converter/](https://johnrusu.github.io/react-currency-converter/)

## Features

- 💱 Real-time currency conversion with live exchange rates
- 🌍 Support for major world currencies
- 🔄 Quick currency swap functionality
- 📱 Fully responsive design (mobile & desktop)
- 🎨 Modern UI with Material-UI and TailwindCSS
- 🌙 Dark theme support
- 🚀 Fast performance with Vite build tool
- 🧭 Client-side routing with React Router

## Technologies Used

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Material-UI (MUI)** - Component library
- **TailwindCSS** - Utility-first CSS
- **React Router** - Client-side routing
- **ExchangeRate-API** - Live currency data

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager
- An API key from [ExchangeRate-API](https://www.exchangerate-api.com/)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/johnrusu/react-currency-converter.git
cd react-currency-converter
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
VITE_CURRENCY_API_KEY=your_api_key_here
```

> **⚠️ Important:** The application requires the `VITE_CURRENCY_API_KEY` environment variable to fetch exchange rates. Get your free API key from [ExchangeRate-API](https://www.exchangerate-api.com/).

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_CURRENCY_API_KEY` | API key from ExchangeRate-API | Yes |

### For GitHub Pages Deployment

If deploying to GitHub Pages via GitHub Actions, add `VITE_CURRENCY_API_KEY` as a repository secret:

1. Go to your repository **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `VITE_CURRENCY_API_KEY`
4. Value: Your API key
5. Click **Add secret**

## Project Structure

```
react-currency-converter/
├── public/              # Static assets
│   ├── favicons/       # App icons
│   └── 404.html        # SPA fallback for GitHub Pages
├── src/
│   ├── components/     # React components
│   ├── constants/      # App constants and labels
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Root component
│   └── main.tsx        # App entry point
├── .github/
│   └── workflows/      # GitHub Actions CI/CD
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Rusu Ionut**
- GitHub: [@johnrusu](https://github.com/johnrusu)

## Acknowledgments

- Exchange rate data provided by [ExchangeRate-API](https://www.exchangerate-api.com/)
- UI components by [Material-UI](https://mui.com/)

