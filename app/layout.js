import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/navbar/page.js';

export const metadata = {
  title: "Gavin Osborne",
  description: "A portfolio for Gavin Osborne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
