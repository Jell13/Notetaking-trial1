import { Inter } from "next/font/google";
import {Toaster} from "sonner"
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import ConvexClientProvider from "@/components/providers/convex-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NoteNet",
  description: "NextJs 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaulTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="theme-2"
          >
            <Toaster position="bottom-center"/>
            {children}
          </ThemeProvider>
        </ConvexClientProvider>

      </body>
    </html>
  );
}
