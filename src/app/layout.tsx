import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/DesktopNavBar";
import Footer from "@/components/Footer";
import dynamic from 'next/dynamic'
import { NavbarProvider } from "@/lib/context/NavbarContext";
import { AuthProvider } from "@/lib/context/UserContext";

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
      <body className={`${inter.className} overflow-x-hidden`}>
      {/* called this component from a Apollo component i created beceuase this layout is a server component that cant be changed */}
        <ClientApolloProvider>
          {/* For the storing user is logged in */}
          <AuthProvider>

          {/* for the navbar to show at setting pages */}
          <NavbarProvider>
          <NavBar />
          {children}
          <Footer />
          </NavbarProvider>
            
          </AuthProvider>
          
        </ClientApolloProvider>
        
        </body>
    </html>
  );
}
