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
    </div>
  );
}
