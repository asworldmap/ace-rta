import "./globals.css";
import type { Metadata } from "next";
import TopNav from "./_components/TopNav";

export const metadata: Metadata = {
  title: "Green Dojo · Internal",
  description: "Internal workspace for the Green Dojo proposal (WKF) by ACE-RTA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
