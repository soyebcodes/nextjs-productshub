"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-6">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">
          Login to Your Account
        </h1>

        {/* Google Sign In */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/products" })}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-xl font-medium transition mb-4"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
