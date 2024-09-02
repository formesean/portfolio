import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "../lib/utils";
import { Dockbar } from "./_components/Dock";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Sean Aguilar Portfolio",
  description: "Welcome to the adventure of Sean Aguilar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-[#0d0d0d] font-sans antialiased dark",
          fontSans.variable
        )}
      >
        <div className="flex flex-col h-screen">
          <main className="container mx-auto flex-grow">{children}</main>
          <Dockbar />
        </div>
      </body>
    </html>
  );
}
