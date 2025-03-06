"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4">
      <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl max-w-sm text-center">
        <h1 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Welcome to Auth System
        </h1>
        <p className="text-gray-700 mb-6">Securely manage your authentication with ease.</p>

        <div className="flex flex-col space-y-3">
          <Link 
            href="/login" 
            className="bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700"
          >
            Login
          </Link>
          <Link 
            href="/register" 
            className="bg-green-600 text-white font-semibold py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-green-700"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
