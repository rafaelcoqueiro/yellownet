import { Nunito } from "next/font/google";
import "./globals.css";
import { metadata } from "./metadata";

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
});

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body className={`${nunito.className} ${nunito.variable} overflow-x-hidden`}>
        <main className="min-h-screen bg-white overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
