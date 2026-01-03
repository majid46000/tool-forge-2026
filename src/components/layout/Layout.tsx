import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AdSocialBar } from "../ads/AdSocialBar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <AdSocialBar position="top" />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <AdSocialBar position="bottom" />
    </>
  );
}
