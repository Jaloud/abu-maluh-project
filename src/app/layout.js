import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import SiteHeader from "./bar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Abu Maluh: Cultural Preservation in Saudi Arabia",
  description:
    "Exploring how Abu Maluh CDs functioned as cultural preservation during Saudi Arabia's period of rapid modernization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <SiteHeader />
        <main className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
          {children}
        </main>
        <footer className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Abu Maluh Project
            </p>
            <p className="text-sm text-muted-foreground">
              A Digital Humanities Project exploring Saudi Arabian Cultural
              Preservation
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
