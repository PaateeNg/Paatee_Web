import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/DesktopNavBar";
import Footer from "@/components/Footer";
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ["latin"] });

//dynamic import to avoid SSR errors
const ClientApolloProvider = dynamic(() => import ('@/lib/componentWrapper/ClientApolloProvider'))

export const metadata: Metadata = {
  title: "Paatee App",
  description: "Party Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* called this component from a Apollo component i created beceuase this layout is a server component that cant be changed */}
        <ClientApolloProvider>
          <NavBar />
          {children}
          
          <Footer />
        </ClientApolloProvider>
        
        </body>
    </html>
  );
}
