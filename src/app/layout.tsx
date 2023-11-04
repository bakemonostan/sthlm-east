import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ToastProvider } from "@/providers/ToastProvider";
import SidebarProvider from "@/providers/SidebarProvider";
import { NextUiProviders } from "@/providers/NextUIProvider";
import Navbar from "@/components/ui/Navbar";
import "@aws-amplify/ui-react/styles.css";
import AuthProvider from "@/providers/AuthProvider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sthlm-East",
  description: "Sthlm East Gospel Choir",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} max-w-[120rem] mx-auto`}>
        <ToastProvider />
        <NextUiProviders>
          <AuthProvider>
            <main className="w-full flex border ">
              <SidebarProvider />
              <section className="flex-1 md:w-9/12 mx-auto lg:w-10/12">
                <Navbar />
                <div className="container pt-12 h-screen md:h-auto">
                  {" "}
                  {children}
                </div>
              </section>
            </main>
          </AuthProvider>
        </NextUiProviders>
      </body>
    </html>
  );
}
