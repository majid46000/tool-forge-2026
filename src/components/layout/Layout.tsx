import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-blue-950 to-black">
      <Header />
      <div className="flex-1 flex pt-16">
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
