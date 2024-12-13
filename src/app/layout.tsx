import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { CartProvider } from "./contexts/CartContext";

export const metadata: Metadata = {
  title: "Lorentia",
  description: "Created by Nishad Koormath",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
