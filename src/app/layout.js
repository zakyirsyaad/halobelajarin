import { Inter } from "next/font/google";
import "./globals.css";
import "./globalicons.css"
import ReduxProvider from "@/Redux/features/provider";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Belajarin",
  description: "Where Learning Knows No Limits.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Toaster position="top-center" reverseOrder={false} />
        <ReduxProvider>
          {children}
        </ReduxProvider>

      </body>
      {/* <script src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key="SB-Mid-client-fxxfR1HkBON9Jw1t"></script> */}
      <Script src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key={process.env.MIDTRANS_CLIENT_KEY} />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/datepicker.min.js" />

    </html>
  );
}
