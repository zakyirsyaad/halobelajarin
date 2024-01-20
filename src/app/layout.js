import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Belajarin",
  description: "Where Learning Knows No Limits.",
  icons: {
    icon: ['./favicon-32x32.png'],
    apple: ['./apple-touch-icon.png'],
    shortcut: ['./apple-touch-icon.png'],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
