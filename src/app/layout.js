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
      {/* <Helmet> */}
      {/* </Helmet> */}
      <body className={inter.className}>
        <Toaster position="top-center" reverseOrder={false} />
        <ReduxProvider>
          {children}
        </ReduxProvider>

      </body>
      {/* <script src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key="SB-Mid-client-fxxfR1HkBON9Jw1t"></script> */}
      <script src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key={process.env.MIDTRANS_CLIENT_KEY}></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/datepicker.min.js"></script>
    </html>
  );
}
