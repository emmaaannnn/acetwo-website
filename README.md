# ACETWO Store

A React-based clothing store website for ACETWO, serving as a visual catalog and information hub. The site is password-protected and showcases multiple product collections, with detailed product modals and customer support/policy pages. Purchases are handled externally via Instagram.

## Features

- **Password Lock Screen:**  
  Users must enter a password to access the main store.
- **Product Catalog:**  
  Products are organized into collections (e.g., Outshine Collection, Panda Collection). Each product displays images, price, sale status, and availability.
- **Product Modal:**  
  Clicking a product opens a modal with a zoomable image, detailed description, sizes, and a link to purchase via Instagram.
- **Responsive Design:**  
  The site is styled for desktop, tablet, and mobile devices.
- **Customer Support & Policies Pages:**  
  Accessible from the lock screen and main site, providing information on orders, returns, privacy, and terms.
- **No Direct Purchases:**  
  The site is a visual catalog; all purchases are handled manually via Instagram.

## Project Structure

```
acetwo-store/
  public/
    products/           # Product images
    assets/             # GIFs and logos
    index.html
    ...
  src/
    components/         # React components (Product, ProductList, Modal, Magnifier, etc.)
    data/
      products.json     # Product and collection data
      password.json     # Store password
    pages/              # Route pages (home, lockScreen, support, policies)
    styles/             # CSS files for styling
    App.js
    index.js
  package.json
  README.md
```