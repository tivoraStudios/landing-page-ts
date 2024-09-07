import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Tivora Studios - Custom Sustainable Packaging | Eco-Friendly Solutions for Your Brand",
  description:
    "Discover custom packaging solutions that are sustainable and eco-friendly. At Tivora Studios, we provide high-quality, environmentally conscious packaging that reflects your brand's identity. Our innovative designs are created with sustainable materials, offering a perfect blend of creativity and responsibility. Make a lasting impact with packaging that's both beautiful and good for the planet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
