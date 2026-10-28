# CoffeeHouse live SampleAPIs integration

Coffee is fetched at runtime from:
- https://api.sampleapis.com/coffee/hot
- https://api.sampleapis.com/coffee/iced

Desserts are loaded from `public/api/products.json` (only dessert-category items). SampleAPIs coffee data does not include prices, so the UI assigns clearly demo INR prices. Coffee images come from the API `image` field, with a local fallback for broken links. Requires internet access for coffee listings and images. Cart and order history continue using browser localStorage. No backend or real payment processing.

Run `npm install` then `npm run dev`. In the browser DevTools Network tab, look for requests to the two SampleAPIs endpoints. To check the products, visit `/menu`.
