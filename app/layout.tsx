import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] }); // this can also specify things like weight...

export const metadata: Metadata = {
  title: "Next 13 Tasklist",
  description: "Achieve maximum productivity!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// What can I do here?
// import css, metadata and google fonts!
// Export meta data and create RootLayout
// TODO: import a different font
