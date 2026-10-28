# CoffeeHouse mock API

The product list is in `public/api/products.json`. The React app loads it with `fetch("/api/products.json")` via `src/api/products.js` and `ProductsContext.jsx`. Menu categories and product cards are generated from the response.

To verify: run `npm install` and `npm run dev`, then visit `http://localhost:5173/api/products.json`. Edit a product name or add a new unique-id product to that JSON, save, and refresh the Menu page. Its contents should update.

For product images, use files in `public/assets` and reference them as `/assets/filename.jpg` or `/assets/filename.svg`. Images for available product-specific SVG files are assigned in the JSON; other items use existing JPGs.

Orders remain saved in the browser's `coffeeHouseOrders` localStorage key. This is a local mock API, not a database-backed API.
