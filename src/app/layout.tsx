import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/nav";
import Box from "@/components/box";
import SupabaseProvider from "@/providers/SupabaseProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import UserProvider from "@/providers/UserProvider";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Campus Bazaar",
  description: "Generated by Campus Bazaar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] dark:from-purple-900 from-purple-100 dark:via-neutral-900 via-white to-purple-50 dark:to-blue-950/35`}
      >
        <ThemeProvider>
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
        <Nav/>
        <Box className="mt-20">
          {children}
        </Box>
        </UserProvider>
        </SupabaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
