import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "./_component/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NoteNet",
  description: "NextJs 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full dark:bg-[#1F1F1F]`}>
          <Navbar/>
          <main className="h-full pt-40">
            {children}
          </main>        
      </body>
    </html>
  );
}
