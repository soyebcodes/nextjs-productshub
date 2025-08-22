"use client";
import products from "../../../data/products.json";

export default function ProductDetails({ params }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="border rounded-2xl shadow-md bg-white p-8">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-700 mb-6">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">${product.price}</span>
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            onClick={() => alert("Pretend to buy 😄")}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
