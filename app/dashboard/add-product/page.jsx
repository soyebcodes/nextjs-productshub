"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { useSession, signIn } from "next-auth/react";

export default function AddProductPage() {
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  if (!session) {
    return (
      <div className="p-12 text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          You must be logged in to add products
        </h1>
        <button
          onClick={() => signIn()}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition"
        >
          Login
        </button>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || !price) {
      Swal.fire("Error", "All fields are required", "error");
      return;
    }
    setLoading(true);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, price }),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire("Success!", "Product added successfully", "success");
        setName("");
        setDescription("");
        setPrice("");
      } else {
        Swal.fire("Error", data.error || "Failed to add product", "error");
      }
    } catch (err) {
      Swal.fire("Error", "Something went wrong", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Add New Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 border rounded-xl shadow p-8 space-y-6"
      >
        <div>
          <label className="block mb-2 font-semibold text-gray-900 dark:text-gray-100">
            Product Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-900 dark:text-gray-100">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          ></textarea>
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-900 dark:text-gray-100">
            Price
          </label>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
