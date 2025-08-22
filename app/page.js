"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";


const featuredProducts = [
  { id: 1, name: "Wireless Headphones", price: 99.99 },
  { id: 2, name: "Smart Watch", price: 149.99 },
  { id: 3, name: "Gaming Mouse", price: 49.99 },
  { id: 4, name: "Mechanical Keyboard", price: 89.99 },
];

const testimonials = [
  { name: "Alice", quote: "Amazing products! Fast delivery and excellent support." },
  { name: "Bob", quote: "High quality and affordable. Highly recommend!" },
  { name: "Clara", quote: "Customer service is top-notch. Love this store." },
];

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navbar */}
      <nav className="p-4 bg-gray-100 dark:bg-gray-800 shadow flex justify-between items-center">
        <span className="font-bold text-lg text-gray-900 dark:text-gray-100">NextHub</span>
        <div className="space-x-4 flex items-center">
          <Link href="/products" className="hover:underline text-gray-900 dark:text-gray-100">Products</Link>
          {!session && <Link href="/login" className="hover:underline text-gray-900 dark:text-gray-100">Login</Link>}
          {session && (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Logout
            </button>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-grow bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 p-12 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
          Welcome to Next Products Hub
        </h1>
        <p className="text-lg max-w-2xl mb-6 text-gray-700 dark:text-gray-300">
          Browse through our curated collection of products and find the one that fits your needs.
        </p>
        <Link
          href="/products"
          className="bg-blue-500 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-600 hover:scale-105 transition"
        >
          Explore Products
        </Link>
      </section>

      {/* Product Highlights */}
      <section className="p-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {[
          { title: "Quality Guaranteed", desc: "Our products are sourced from top suppliers and built to last." },
          { title: "Affordable Prices", desc: "We make sure you get the best value for your money." },
          { title: "Fast Delivery", desc: "Get your products quickly with our efficient delivery system." },
          { title: "24/7 Support", desc: "Our support team is always ready to help you out." },
        ].map((item) => (
          <div key={item.title} className="border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{item.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Featured Products */}
      <section className="p-12 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">Featured Products</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {featuredProducts.map((p, index) => (
            <div key={p.id} className="bg-white dark:bg-gray-900 border rounded-2xl p-6 shadow hover:shadow-lg transition flex flex-col items-center text-center">
              <div className="h-32 w-32 bg-gray-200 dark:bg-gray-700 mb-4 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-300">
                  <Image   src={`/product${index + 1}.jpg`}
                alt={p.name}
                width={208}
                height={208}
                className="object-cover"/>
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{p.name}</h3>
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100">${p.price}</span>
              <Link href={`/products/${p.id}`} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
        <section className="p-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
        What Our Customers Say
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white dark:bg-gray-900 border rounded-xl p-6 shadow hover:shadow-md transition text-center"
          >
            {/* Single Avatar for all */}
            <div className="h-16 w-16 mx-auto mb-4 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 dark:bg-gray-700">
              <img
                src="/alice.jpg"
                alt={t.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-2">"{t.quote}"</p>
            <span className="font-semibold text-gray-900 dark:text-gray-100">{t.name}</span>
          </div>
        ))}
      </div>
    </section>

      {/* Newsletter Sign-Up */}
      <section className="p-12 bg-blue-500 dark:bg-blue-700 text-white text-center rounded-xl mx-8 my-12">
        <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
        <p className="mb-6">Subscribe to our newsletter and get updates on latest products.</p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="p-3 rounded-lg flex-1 text-gray-900 dark:text-gray-800"
          />
          <button type="submit" className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="p-4 bg-gray-100 dark:bg-gray-800 text-center text-sm text-gray-700 dark:text-gray-300">
        © {new Date().getFullYear()} Next Products Hub. All rights reserved.
      </footer>
    </div>
  );
}
