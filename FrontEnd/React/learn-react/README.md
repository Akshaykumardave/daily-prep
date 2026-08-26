# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

----------------------------------------------------------------------------------------------------------------------------------------

#### package.json -  file is the central manifest file for any Node.js project or npm package, acting as the configuration hub that defines project metadata, manages dependencies, and automates scripts. It is written in standard JSON format and resides in the root directory of your project.

#### vite.config.json - Central configuration file used by the Vite build tool to customizse how the web application is built, bundled and served during development.

#### eslint.config.js - It is the primary configuration file used in ESLint, marking the transition to the modern Flat config system. EXMA script configurations, rules for development standards.

#### index.html - First file to be executed in browser.
