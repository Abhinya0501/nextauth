"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null); // Reset errors

    if (!email.trim() || !password.trim()) {
      setError("Email and password are required.");
      return;
    }

    setLoading(true);
    const result = await signIn("credentials", { 
      email, 
      password, 
      redirect: false 
    });

    if (result?.error) {
      setError("Invalid email or password. Please try again.");
      setLoading(false);
    } else {
      router.push("/dashboard"); // Redirect after login
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button 
          onClick={() => signIn("google",{ callbackUrl: "/dashboard" })} 
          className="w-full bg-blue-500 text-white p-2 rounded mb-2 hover:bg-blue-600 transition cursor-pointer"
        >
          Sign in with Google
        </button>
        <button 
          onClick={() => signIn("github",{ callbackUrl: "/dashboard" })} 
          className="w-full bg-gray-800 text-white p-2 rounded mb-2 hover:bg-gray-900 transition cursor-pointer" 
        >
          Sign in with GitHub
        </button>

        <div className="flex items-center my-3">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            placeholder="Email" 
            className="p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400" 
          />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            placeholder="Password" 
            className="p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400" 
          />
          <button 
            type="submit" 
            disabled={loading} 
            className={`w-full text-white p-2 rounded transition cursor-pointer ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline cursor-pointer">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
