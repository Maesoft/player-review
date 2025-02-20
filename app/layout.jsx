import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {

  title: "Player Review",
  description: "La mejor Comunidad",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon"></link>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
