import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crego Fashion House — Master the Art of Pattern Drafting",
  description:
    "Intimate 1-on-1 private coaching in pattern drafting for Ready-to-Wear, Custom Made & Bridal. Online or in-person with Crego Fashion House.",
  keywords: [
    "pattern drafting",
    "fashion design",
    "bridal patterns",
    "sewing coaching",
    "fashion house",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
