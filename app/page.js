import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  
     <div className="flex flex-col min-h-screen">
      <nav className="p-4 bg-gray-800 text-white flex justify-between items-center">
        <span className="font-bold text-lg">My Products</span>
        <div className="space-x-4">
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/login" className="hover:underline">Login</Link>
        </div>
      </nav>
</div>
  );
}
