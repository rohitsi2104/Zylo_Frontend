# Project Title

A brief description of your project.

## Features

- Fast Refresh with Vite
- ESLint for code quality

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version >= 14)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Project

To start the development server, run:
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` (or the specified port in your console).

### Building for Production

To create a production build, run:
```bash
npm run build
```

The output will be in the `dist` directory.

## ESLint Configuration

This project includes ESLint for code quality. To enable type-aware lint rules, update the configuration as follows:

1. Open the `eslint.config.js` file and modify the `parserOptions`:
   ```javascript
   export default tseslint.config({
     languageOptions: {
       parserOptions: {
         project: ['./tsconfig.node.json', './tsconfig.app.json'],
         tsconfigRootDir: import.meta.dirname,
       },
     },
   });
   ```

2. Replace `tseslint.configs.recommended` with:
   - `tseslint.configs.recommendedTypeChecked`
   - or `tseslint.configs.strictTypeChecked`

3. Optionally add stylistic rules:
   ```javascript
   ...tseslint.configs.stylisticTypeChecked
   ```

4. Install the React ESLint plugin:
   ```bash
   npm install eslint-plugin-react --save-dev
   ```

5. Update the `eslint.config.js` file:
   ```javascript
   import react from 'eslint-plugin-react';

   export default tseslint.config({
     settings: { react: { version: '18.3' } },
     plugins: {
       react,
     },
     rules: {
       ...react.configs.recommended.rules,
       ...react.configs['jsx-runtime'].rules,
     },
   });
   ```

## Contributing

If you want to contribute, please create a pull request.

## License

This project is licensed under the MIT License.
f