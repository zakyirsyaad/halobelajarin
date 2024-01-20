import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/Redux/features/provider";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Belajarin",
  description: "Where Learning Knows No Limits.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Toaster position="top-center" reverseOrder={false} />
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
