import { Link } from "react-router-dom";
import { Zap, Twitter, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/50 backdrop-blur-xl mt-auto">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 shadow-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                Tool<span className="text-gradient">Forge</span>{" "}
                <span className="text-muted-foreground">2026</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              The ultimate collection of free AI-powered tools for content creators, marketers, and developers. Built for the future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/chatgpt-ai" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  ChatGPT AI
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-6 text-lg">Connect</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl glass hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl glass hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl glass hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl glass hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 ToolForge. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Built with <span className="text-red-500">❤️</span> for creators worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
