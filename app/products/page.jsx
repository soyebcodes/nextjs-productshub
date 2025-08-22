import Link from "next/link";
import products from "../../data/products.json";

export default function ProductsPage() {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-gray-100">
        Our Products
      </h1>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded-2xl shadow-sm hover:shadow-lg transition bg-white dark:bg-gray-800 p-6 flex flex-col"
          >
            {/* Product Name */}
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              {p.name}
            </h2>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 flex-grow">
              {p.description}
            </p>

            {/* Price + Details Button */}
            <div className="mt-6 flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
                ${p.price}
              </span>
              <Link
                href={`/products/${p.id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
