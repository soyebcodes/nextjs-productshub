"use client";
import Link from "next/link";
import products from "../../../data/products.json";

export default function ProductDetails({ params }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return (
      <div className="p-12 text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Product not found
        </h1>
        <Link
          href="/products"
          className="inline-block mt-6 bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-lg transition"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="px-6 py-12 max-w-4xl mx-auto">
      <div className="border rounded-2xl shadow-md bg-white dark:bg-gray-900 p-10">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          {product.name}
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          {product.description}
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            ${product.price}
          </span>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-medium transition"
            onClick={() => alert("Pretend to buy 😄")}
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Back to Products */}
      <div className="mt-8 text-center">
        <Link
          href="/products"
          className="inline-block bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-lg transition"
        >
          ← Back to Products
        </Link>
      </div>
    </div>
  );
}
