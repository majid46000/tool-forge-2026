import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { 
  AdSocialBar, 
  AdPopunder, 
  AdLeaderboard, 
  AdSkyscraper, 
  AdMobileBanner 
} from "../ads";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-blue-950 to-black">
        <Header />
        <AdLeaderboard />
        <div className="flex-1 flex pt-16">
          <main className="flex-1">{children}</main>
          <aside className="hidden lg:block w-[180px] p-2 shrink-0">
            <AdSkyscraper />
          </aside>
        </div>
        <AdMobileBanner />
        <Footer />
      </div>
      <AdSocialBar />
      <AdPopunder />
    </>
  );
}
