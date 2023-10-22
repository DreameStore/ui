# DreameStore Storefront UI Components

![License](https://img.shields.io/badge/license-BSD--3-blue)

This is a collection of reusable UI components for DreameStore Storefront.

## Installation

You can install these UI components using [PNPM](https://pnpm.io/) as your package manager. If you don't have PNPM installed, you can do so by running:

```bash
npm install -g pnpm
```

Once you have PNPM installed, you can add `dreame-ui` to your project using the following command:

```bash
pnpm install dreame-ui
```

## Usage

To use these UI components in your project, you can import them like any other package:

```javascript
import { Button, Input, Card } from "dreame-ui";

// Now you can use the UI components in your code.
```

## Development with Storybook 7

We use [Storybook](https://storybook.js.org/) for developing and showcasing our UI components. To start the Storybook development environment, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/DreameStore/ui.git
   cd dreame-store-ui
   ```

2. **Install Dependencies**:

   Make sure you have PNPM installed. If not, install it globally with:

   ```bash
   npm install -g pnpm
   ```

   Then, install the project dependencies:

   ```bash
   pnpm install
   ```

3. **Start Storybook**:

   Run the following command to start Storybook:

   ```bash
   pnpm run sb
   ```

   Storybook will start, and you can view your UI components in a development environment in your web browser at `http://localhost:6006/`.

## License

This project is licensed under the BSD-3 License. See the [LICENSE](LICENSE) file for details.
