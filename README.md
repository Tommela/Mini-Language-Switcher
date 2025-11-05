# Mini Language Switcher

A lightweight React application demonstrating internationalization (i18n) with a simple language switching feature. This project showcases how to implement multi-language support using React Context API and JSON-based translations.

## Features

- 🌍 **Multi-language Support**: Switch between English and Spanish
- 🎯 **Context API**: Uses React Context for state management
- 📱 **React Router**: Navigation between Home and About pages
- ⚡ **Vite**: Fast development build tool
- 🎨 **Simple UI**: Clean and minimal interface

## Tech Stack

- **React** ^19.1.1
- **React Router DOM** ^7.8.1
- **Vite** ^7.1.2
- **ESLint** for code quality

## Project Structure

```
language-switcher/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   └── Navbar.jsx          # Navigation bar with language switcher
│   ├── contexts/
│   │   └── LanguageContext.jsx  # Language context definition
│   ├── locales/
│   │   ├── en.json             # English translations
│   │   └── es.json             # Spanish translations
│   ├── pages/
│   │   ├── Home.jsx            # Home page component
│   │   └── About.jsx           # About page component
│   ├── providers/
│   │   └── LanguageProvider.jsx # Language provider component
│   ├── App.jsx                 # Main application component
│   └── main.jsx                # Application entry point
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Tommela/Mini-Language-Switcher.git
cd Mini-Language-Switcher/language-switcher
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal)

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality

## How It Works

### Language Provider

The `LanguageProvider` component manages the language state and provides it to all child components through React Context. It stores translations in a `languages` object and provides:

- `language`: Current selected language code (e.g., "en", "es")
- `changeLanguage`: Function to switch between languages
- `t`: Translation object for the current language

### Using Translations

Components can access translations using the `LanguageContext`:

```jsx
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const MyComponent = () => {
  const { t } = useContext(LanguageContext);
  
  return (
    <div>
      <h1>{t.welcome}</h1>
      <p>{t.intro}</p>
    </div>
  );
};
```

### Adding New Languages

1. Create a new JSON file in `src/locales/` (e.g., `fr.json` for French)
2. Add translations with the same keys as existing language files
3. Update `LanguageProvider.jsx` to import and include the new language:
```jsx
import fr from "../locales/fr.json";
const languages = { en, es, fr };
```
4. Add a language switcher button in `Navbar.jsx`

## Supported Languages

- 🇺🇸 English (en)
- 🇪🇸 Spanish (es)

## Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Author

Created by [Tommela](https://github.com/Tommela)

---

**Note**: This is a minimal example project demonstrating language switching functionality. For production applications, consider using dedicated i18n libraries like `react-i18next` or `react-intl` for more advanced features.

