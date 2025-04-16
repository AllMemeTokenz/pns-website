"use client";
import React from "react";
import { Grandstander } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

const grandstander = Grandstander({ subsets: ["latin"] });

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags for SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="$P&S is a Aviation Technology in the Crypto World In the aviation world."
        />
        <meta
          name="keywords"
          content="pns, pitot, plane, crypto, raydium, memecoin"
        />
        <meta name="author" content="$P&S" />
        {/* Open Graph meta tags for social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="$P&S" />
        <meta
          property="og:description"
          content="$P&S is a Aviation Technology in the Crypto World In the aviation world."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/deeyw3apd/image/upload/v1744778085/P_S-Logo_i76dte.jpg"
        />
        <meta
          property="og:url"
          content="https://res.cloudinary.com/deeyw3apd/image/upload/v1744778085/P_S-Logo_i76dte.jpg"
        />
        {/* Twitter card meta tags */}
        <meta name="twitter:card" content="" />
        <meta name="twitter:title" content="$P&S" />
        <meta
          name="twitter:description"
          content="$P&S is a Aviation Technology in the Crypto World In the aviation world."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/deeyw3apd/image/upload/v1744778085/P_S-Logo_i76dte.jpg"
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Theme color */}
        <meta name="theme-color" content="#fafaf2" />
        <title>
          $P&S is a Aviation Technology in the Crypto World In the aviation
          world.
        </title>
      </head>
      <body
        className={
          "dark:bg-background-dark max-w-[100vw] overflow-x-hidden bg-background-light text-background-dark dark:text-background-light " +
          grandstander.className
        }
      >
        <motion.div
          initial={{ opacity: 0, x: -0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Toaster
            toastOptions={{
              className: "!z-[9999] !bg-[#fefce8] !border !border-[#fafaf2]",
            }}
            containerClassName="md:mt-14 mt-24"
          />
          <Header />
          {children}
        </motion.div>
        <footer className="w-full py-4 px-5 md:px-8 lg:px-12 xl:px-16 border-t-2 border-blue-950">
          <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Logo on the left */}
            <div className="flex items-center">
              <div className="relative h-10 w-32 sm:h-12 sm:w-36">
                {/* Replace with your actual logo */}
                <div className="flex items-center">
                  <div className="p-2 rounded-lg">
                    <span className="font-bold text-2xl text-blue-950">
                      $P&S
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright on the right */}
            <div className="text-blue-950 font-medium text-sm sm:text-base">
              © $P&S 2025. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
