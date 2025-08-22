import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
     <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-10 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-blue-600">NextProductsHub</Link>
          <div className="space-x-6">
            <Link href="/products" className="text-gray-700 hover:text-blue-600">
              Products
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-blue-600">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-grow text-center bg-gradient-to-r from-blue-100 via-white to-blue-50 px-6 pt-32 pb-20">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          Discover Products You’ll Love
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Explore our collection of top-quality products designed to make your life easier and better.
        </p>
        <Link
          href="/products"
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium shadow hover:bg-blue-700 transition"
        >
          Shop Now
        </Link>
      </section>

      {/* Product Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose Us?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Quality Guaranteed</h3>
              <p className="text-gray-600">We source only the best materials for our products.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Affordable Prices</h3>
              <p className="text-gray-600">Top value without compromising on quality.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Fast Delivery</h3>
              <p className="text-gray-600">Get your orders quickly and reliably, every time.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">24/7 Support</h3>
              <p className="text-gray-600">We’re always here to help whenever you need us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 text-center py-6 mt-auto">
        <p>© {new Date().getFullYear()} Next Products Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}
