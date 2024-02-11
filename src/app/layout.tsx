import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SideNavbar } from "@/components/side-navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: "Dashboard ⤐ %s"
  }
};


const RootLayout = ({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) =>{
  return (
    <html lang="en">
      <body className={cn("min-h-screen w-full bg-white text-black flex",inter.className, {"debug-screens": process.env.NODE_ENV === "development"})}>
        <SideNavbar />
        <div className="p-8 w-full">{children}</div>
        </body>
    </html>
  );
};

export default RootLayout;
