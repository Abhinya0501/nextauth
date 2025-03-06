"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loader2, LogOut } from "lucide-react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white px-6">
      <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl max-w-sm text-center">
        <h1 className="text-4xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Dashboard
        </h1>
        <p className="text-gray-700 mb-6 text-lg font-medium">
          Welcome, <span className="font-bold">{session?.user?.email}</span>
        </p>

        <button
          onClick={() => signOut()}
          className="flex items-center justify-center w-full bg-red-600 text-white font-semibold py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-red-700"
        >
          <LogOut className="w-5 h-5 mr-2" /> Logout
        </button>
      </div>
    </div>
  );
}
