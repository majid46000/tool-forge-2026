import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  popular?: boolean;
}

export function ToolCard({ title, description, icon: Icon, path, popular }: ToolCardProps) {
  return (
    <Link to={path} className="group block">
      <div className="relative glass-card p-8 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-glow-cyan">
        {popular && (
          <div className="absolute -top-3 -right-3 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/30">
            Popular
          </div>
        )}
        
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 border border-white/10 mb-6 group-hover:border-cyan-500/50 group-hover:shadow-glow-cyan transition-all duration-300">
          <Icon className="h-7 w-7 text-cyan-400" />
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm group-hover:gap-3 transition-all">
          Use Tool <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
