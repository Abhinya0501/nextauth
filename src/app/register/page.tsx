"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function validateInput() {
    if (!name.trim() || !email.trim() || !password.trim()) {
      return "All fields are required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Invalid email format.";
    }

    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }

    return null;
  }

  async function handleRegister(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    const validationError = validateInput();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Registration failed");
      }

      // Auto-login after registration
      const signInResponse = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (signInResponse?.error) {
        throw new Error(signInResponse.error);
      }

      router.push("/dashboard"); // Redirect after success
    } catch (err: any) {
      setError(err.message || "Registration failed");
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
        
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <form onSubmit={handleRegister} className="flex flex-col">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white p-2 rounded transition cursor-pointer ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="mt-4">
          <p className="text-center text-gray-600">Or sign up with</p>
          <div className="flex flex-col space-y-2 mt-2">
            <button
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              className="w-full flex items-center justify-center bg-red-500 text-white p-2 rounded hover:bg-red-600 cursor-pointer"
            >
              Sign in with Google
            </button>
            <button
              onClick={() => signIn("github",{ callbackUrl: "/dashboard" })}
              className="w-full flex items-center justify-center bg-gray-900 text-white p-2 rounded hover:bg-gray-800 cursor-pointer" 
            >
              Sign in with GitHub
            </button>
          </div>
        </div>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline cursor-pointer">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
