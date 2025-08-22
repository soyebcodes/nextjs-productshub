import Link from "next/link";
import products from "../../data/products.json";

export default function ProductsPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded-2xl shadow-sm hover:shadow-md transition bg-white p-6 flex flex-col"
          >
            <h2 className="text-xl font-semibold mb-2">{p.name}</h2>
            <p className="text-gray-600 flex-grow">{p.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-bold">${p.price}</span>
              <Link
                href={`/products/${p.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
