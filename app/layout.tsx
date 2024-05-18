import { Inter as FontSans } from "next/font/google";

// eslint-disable-next-line import/order
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";
import { cn } from "@/lib/utils";

import { Providers } from "./providers";

import type { Metadata } from "next";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CHAMA LEILÕES",
  description: "O maior portal de leilões do Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased flex w-screen flex-col items-center ",
            fontSans.variable
          )}
        >
          {children}
          <Toaster />
        </body>
      </Providers>
    </html>
  );
}
