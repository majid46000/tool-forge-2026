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
      <div className="min-h-screen flex flex-col">
        <Header />
        <AdLeaderboard />
        <div className="flex-1 flex">
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
