import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, ChevronDown, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const tools = [
  { name: "ChatGPT AI", path: "/chatgpt-ai" },
  { name: "TikTok Downloader", path: "/tiktok-downloader" },
  { name: "AI Blog Writer", path: "/ai-blog-writer" },
  { name: "TikTok Hashtag Finder", path: "/tiktok-hashtag-finder" },
  { name: "Canva Template Generator", path: "/canva-template-generator" },
  { name: "SEO Keyword Generator", path: "/seo-keyword-generator" },
  { name: "Video to MP3 Converter", path: "/video-to-mp3-converter" },
  { name: "Social Media Caption Generator", path: "/social-media-caption-generator" },
  { name: "PDF / DOC Converter", path: "/pdf-doc-converter" },
  { name: "Trending Content Finder", path: "/trending-content-finder" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
  }, [isDark]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 shadow-lg group-hover:shadow-glow transition-all duration-300">
            <Zap className="h-5 w-5 text-white" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
          </div>
          <span className="text-xl font-bold">
            Tool<span className="text-gradient">Forge</span>{" "}
            <span className="text-muted-foreground">2026</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <Link to="/">
            <Button
              variant="ghost"
              className={`text-foreground/80 hover:text-foreground hover:bg-white/10 ${
                location.pathname === "/" ? "bg-white/10 text-foreground" : ""
              }`}
            >
              Home
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1 text-foreground/80 hover:text-foreground hover:bg-white/10">
                Tools <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-64 glass-card p-2"
            >
              {tools.map((tool) => (
                <DropdownMenuItem key={tool.path} asChild>
                  <Link
                    to={tool.path}
                    className="cursor-pointer rounded-lg hover:bg-white/10 px-3 py-2 transition-colors"
                  >
                    {tool.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className="hover:bg-white/10"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className="hover:bg-white/10"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl animate-slide-up">
          <nav className="container py-4 flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl hover:bg-white/10 transition-colors font-medium"
            >
              Home
            </Link>
            <div className="px-4 py-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Tools
            </div>
            {tools.map((tool) => (
              <Link
                key={tool.path}
                to={tool.path}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 pl-8 rounded-xl hover:bg-white/10 transition-colors text-sm"
              >
                {tool.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
