import type { Metadata } from "next";
import { Inter, Roboto, Press_Start_2P } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-Roboto"
});

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-PressStart2P"
})

export const metadata: Metadata = {
  title: "Quizz app",
  description: "Which Greek god are you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      </head>
      <body className={`${inter.className} ${roboto.variable} ${pressStart.variable}`}>
        {children}
        </body>
    </html>
  );
}
