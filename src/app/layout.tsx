import type { Metadata } from "next";
import { Playfair_Display, Crimson_Text } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const crimsonText = Crimson_Text({
  variable: "--font-body", 
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WashingtonArchive.org - George Washington: Life, Leadership & Legacy",
  description: "A comprehensive digital archive exploring the life, leadership, and legacy of George Washington through primary sources, historical analysis, and interactive exhibits.",
  keywords: ["George Washington", "American History", "Revolutionary War", "President", "Founding Fathers"],
  authors: [{ name: "Academic History Project" }],
  icons: {
    icon: "/quarter.png",
    shortcut: "/quarter.png",
    apple: "/quarter.png",
  },
  openGraph: {
    title: "WashingtonArchive.org - Digital Museum",
    description: "Explore the complex life of America's first president through an immersive digital archive experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${crimsonText.variable} antialiased overflow-x-hidden`}
        style={{ scrollBehavior: 'auto' }}
      >
        {children}
      </body>
    </html>
  );
}
