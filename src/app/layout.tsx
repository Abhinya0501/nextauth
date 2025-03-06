import { ReactNode } from "react";
import SessionProviderWrapper from "../app/components/SessionProviderWrapper";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <SessionProviderWrapper>
          <main className="container mx-auto p-4">{children}</main>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
