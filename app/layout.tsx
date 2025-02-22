import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import { Container } from "@mui/material";
import Header from "@/components/component/Header";

import SessionWrapper from "@/components/component/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food Track",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="pb-2">
      <body className={inter.className}>
        <SessionWrapper>
          <Header />
          <Container sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>{children}</Container>
        </SessionWrapper>
      </body>
      <Analytics />
    </html>
  );
}
