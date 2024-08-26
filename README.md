# Electro E-Commerce Web App

## Overview

Electro is a comprehensive e-commerce platform designed to showcase and sell a wide range of electronic products. The platform includes features such as a product grid, product details, a shopping cart, and more. It is built using modern web technologies, ensuring a responsive and user-friendly experience.

## Project Structure

The project follows a modular structure for easy scalability and maintainability. Below is an overview of the key directories and files:
```plaintext
public/
│
├── images/ # Public images accessible by the app
└── ... # Other public assets
│
src/
│
├── assets/ # Images and other static assets
│
├── components/ # Reusable components
│ ├── billboard/ # Billboard component
│ ├── bestDeals/ # Best Deals components
│ ├── bestSellers/ # Best Sellers components
│ ├── featured/ # Featured Products components
│ ├── footer/ # Footer component
│ ├── header/ # Header component (Navbar, Search, etc.)
│ ├── newsLetter/ # Newsletter sign-up component
│ ├── productCard/ # Reusable ProductCard component
│ ├── quickView/ # Quick View components
│ ├── saleBanner/ # Sale Banner component
│ ├── recentlyViewed/# Recently Viewed component
│ └── slider/ # Slider/Carousel component
│
├── ui/ # UI components (buttons, modals, etc.)
│
├── utils/ # Utility functions and helpers
│
├── App.js # Main application component
├── index.js # Entry point of the application
├── ... # Other configuration files
│
├──.gitignore # Git ignore file
├──package.json # Project dependencies and scripts
├──postcss.config.js # PostCSS configuration
├──tailwind.config.js # Tailwind CSS configuration
└──README.md # Project documentation
```
## Key Features

- **Responsive Design**: Fully responsive layout, optimized for both desktop and mobile devices.
- **Product Listings**: Display products in various categories like Best Deals, Best Sellers, Featured Products, and more.
- **Quick View**: Users can quickly view product details without leaving the main page.
- **Product Comparison & Wishlist**: Compare products and add them to a wishlist for later purchase.
- **Newsletter Signup**: Users can sign up for newsletters and receive special offers.
- **Shopping Cart**: Add products to the cart and proceed to checkout.
- **Footer**: Contains links to social media and payment options.

## Tech Stack

- **Frontend**:

  - **React.js**: JavaScript library for building user interfaces.
  - **Tailwind CSS**: Utility-first CSS framework for styling.

- **Tools & Libraries**:
  - **React Icons**: For including icons in the project.
  - **Slick Carousel**: For implementing the product carousel.

## Styling

The project uses [Tailwind CSS](https://tailwindcss.com/) for styling. Tailwind utilities are used for responsive design and custom component styling.

## Getting Started

To run this project locally, follow these steps:

.Clone the repository:

```bash
git clone https://github.com/ColonelEagel/electro.git
```

Navigate to the project directory:

```bash
cd electro
```
Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```
Run the development server:

```bash
npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev

```

## Deployment

For deployment, you can use services like Vercel, Netlify, or any hosting platform that supports static sites.

## Contributing

If you wish to contribute to this project, please follow these guidelines:

Fork the repository.
Create a new branch with a descriptive name:

```bash
git checkout -b my-new-feature
```

Make your changes:
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Commit your changes with a meaningful commit message:

```bash
git commit -m "Add my new feature"
```

Push to your branch:

```bash
git push origin my-new-feature
```

Create a pull request.

## Contact

For any questions or issues, please contact [Mohammed Darwish](mailto:mohamm.d.arwesh@gmail.com).
