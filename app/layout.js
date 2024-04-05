import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NoteNet",
  description: "NextJs 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaulTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme-2"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
