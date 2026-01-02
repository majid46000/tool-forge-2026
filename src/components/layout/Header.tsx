import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Wrench, ChevronDown } from "lucide-react";
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
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary shadow-md group-hover:shadow-glow transition-shadow duration-300">
            <Wrench className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">
            Tool<span className="text-gradient">Hub</span> 2026
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <Link to="/">
            <Button
              variant="ghost"
              className={location.pathname === "/" ? "bg-secondary" : ""}
            >
              Home
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1">
                Tools <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-card border-border">
              {tools.map((tool) => (
                <DropdownMenuItem key={tool.path} asChild>
                  <Link
                    to={tool.path}
                    className="cursor-pointer hover:bg-secondary"
                  >
                    {tool.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card animate-slide-up">
          <nav className="container py-4 flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
            >
              Home
            </Link>
            <div className="px-4 py-2 text-sm font-medium text-muted-foreground">
              Tools
            </div>
            {tools.map((tool) => (
              <Link
                key={tool.path}
                to={tool.path}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 pl-8 rounded-lg hover:bg-secondary transition-colors text-sm"
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
