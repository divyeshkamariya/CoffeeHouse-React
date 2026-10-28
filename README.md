# Coffee House — React + Vite

A responsive, frontend-only cafe portfolio website using the **Mocha `#3A2218`**, **Caramel `#D49A5A`**, and **Cream `#F7EEE2`** palette.

## Run locally

```bash
npm install
npm run dev
```

## Production check

```bash
npm run build
npm run preview
```

## Structure

- `src/pages/`: Home, Menu, About, Gallery, Contact
- `src/components/`: ProductCard, ProductGrid, PageHero, CartDrawer, ProductModal
- `src/hooks/`: useCart hook
- `public/api/products.json`: mock menu API (products live here)
- `src/api/`, `src/context/`: fetch the menu once and share it with all pages
- `src/styles/`: base layout and brand palette
- `src/utils/`: currency formatting
- `public/assets/`: coffee shop photos (drink illustrations are original SVGs)

## Features

Menu filtering, product details, shopping cart with quantity and removal, localStorage persistence, responsive navigation, gallery, and contact-form demo.

**Portfolio demo only.** Checkout, payment processing and contact form backend are not connected. Business details are illustrative.

## Menu API

Products are loaded with `fetch` from `public/api/products.json`. To use an online API, copy `.env.example` to `.env`, set `VITE_API_URL`, and adjust the field names in `src/api/products.js` (`normalize`). The response can be an array or `{ "products": [...] }`.

### Dummy REST API (json-server)

```bash
npm run api          # starts http://localhost:3001
```

Then set `VITE_API_URL=http://localhost:3001/products` in `.env` and run `npm run dev` in a second terminal. Data lives in `server/db.json`.

| Request | What it does |
|---|---|
| `GET /products` | all products (coffee, tea, desserts, snacks) |
| `GET /products?category=Desserts` | filter by category |
| `GET /products?q=chocolate` | search |
| `GET /products?_sort=price&_order=desc&_limit=3` | sort and limit |
| `GET /products/espresso` | one product |
| `GET /categories` | category list |
| `POST /products`, `PUT /products/:id`, `DELETE /products/:id` | add, edit, delete (saved in `db.json`) |
