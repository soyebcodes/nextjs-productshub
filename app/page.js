"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="p-4 bg-gray-100 dark:bg-gray-800 shadow flex justify-between items-center">
        <span className="font-bold text-lg">NextHub</span>
        <div className="space-x-4">
          <Link href="/products" className="hover:underline">
            Products
          </Link>

          {!session && (
            <Link href="/login" className="hover:underline">
              Login
            </Link>
          )}

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
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to Next Products Hub
        </h1>
        <p className="text-lg max-w-2xl mb-6 text-gray-700 dark:text-gray-300">
          Browse through our curated collection of products and find the one
          that fits your needs.
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
          {
            title: "Quality Guaranteed",
            desc: "Our products are sourced from top suppliers and built to last.",
          },
          {
            title: "Affordable Prices",
            desc: "We make sure you get the best value for your money.",
          },
          {
            title: "Fast Delivery",
            desc: "Get your products quickly with our efficient delivery system.",
          },
          {
            title: "24/7 Support",
            desc: "Our support team is always ready to help you out.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="p-4 bg-gray-100 dark:bg-gray-800 text-center text-sm text-gray-700 dark:text-gray-300">
        © {new Date().getFullYear()} Next Products Hub. All rights reserved.
      </footer>
    </div>
  );
}
