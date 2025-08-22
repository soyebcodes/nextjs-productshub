# Next Products Hub

A simple Next.js 15 application with public and protected pages, using NextAuth.js for authentication. Users can browse products, view product details, and (if logged in) add new products.

## Features

- Landing Page with:
  - Navbar
  - Hero Section
  - Product Highlights
  - Featured Products
  - Testimonials
  - Newsletter
  - Footer
- Authentication via NextAuth.js (Google / Credentials)
- Product List (`/products`) – public
- Product Details (`/products/[id]`) – public
- Protected Add Product Page (`/dashboard/add-product`) – only for logged-in users
- Dark/Light theme toggle
- SweetAlert confirmation for successful product additions
- Loading spinner on product form submission

## Technologies Used

- Next.js 15 (App Router)
- NextAuth.js for authentication
- Tailwind CSS for styling
- SweetAlert2 for notifications
- Prisma + PostgreSQL (or SQLite) for product storage

## Setup & Installation

1. Clone the repository:

```bash
git clone https://github.com/soyebcodes/next-products-hub.git
cd next-products-hub
```
