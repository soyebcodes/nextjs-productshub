"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        const found = data.find((p) => p.id === id);
        setProduct(found || null);
      } catch (err) {
        console.error(err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="p-12 text-center text-gray-700 dark:text-gray-300">
        Loading product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="p-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Product not found
        </h1>
        <Link
          href="/products"
          className="inline-block mt-6 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="px-6 py-12 max-w-4xl mx-auto">
      <div className="border rounded-3xl shadow-lg bg-white dark:bg-gray-900 p-10 transition-colors">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900 dark:text-gray-100">
          {product.name}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          {product.description}
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            ${product.price}
          </span>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl text-lg font-medium transition transform hover:scale-105"
            onClick={() => alert("Pretend to buy 😄")}
          >
            Buy Now
          </button>
        </div>
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/products"
          className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition transform hover:-translate-y-1"
        >
          ← Back to Products
        </Link>
      </div>
    </div>
  );
}
