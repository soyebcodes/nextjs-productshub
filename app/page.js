import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="p-4 bg-gray-800 text-white flex justify-between items-center">
        <span className="font-bold text-lg">My Products</span>
        <div className="space-x-4">
          <Link href="/products" className="hover:underline">
            Products
          </Link>
          <Link href="/login" className="hover:underline">
            Login
          </Link>
        </div>
      </nav>
      {/* Hero section */}
       <section className="flex flex-col items-center justify-center flex-grow bg-blue-100 p-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Product Store</h1>
        <p className="text-gray-700 max-w-xl mb-6">
          Browse through our curated collection of products and find the one that fits your needs.
        </p>
        <Link
          href="/products"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Explore Products
        </Link>
      </section>
      {/* Products highlights */}
        <section className="p-12 bg-white grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Quality Guaranteed</h2>
          <p className="text-gray-600">
            Our products are sourced from top suppliers and built to last.
          </p>
        </div>
        <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Affordable Prices</h2>
          <p className="text-gray-600">
            We make sure you get the best value for your money.
          </p>
        </div>
        <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Fast Delivery</h2>
          <p className="text-gray-600">
            Get your products quickly with our efficient delivery system.
          </p>
        </div>
        <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">24/7 Support</h2>
          <p className="text-gray-600">
            Our support team is always ready to help you out.
          </p>
        </div>
      </section>
    </div>
  );
}
