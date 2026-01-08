import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { SubTool } from "@/data/toolHubs";

interface SubToolCardProps {
  tool: SubTool;
  hubId: string;
}

export function SubToolCard({ tool, hubId }: SubToolCardProps) {
  const Icon = tool.icon;
  const isAI = tool.type === "ai";
  
  return (
    <Link to={`/hub/${hubId}/${tool.id}`} className="group block">
      <div className="relative glass-card p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-[1.01] h-full">
        {isAI && (
          <div className="absolute -top-2 -right-2 px-2 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold flex items-center gap-1">
            <Sparkles className="h-3 w-3" />
            AI
          </div>
        )}
        
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-emerald-500/20 border border-white/10 flex-shrink-0">
            <Icon className="h-5 w-5 text-cyan-400" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground text-sm mb-1 group-hover:text-cyan-400 transition-colors truncate">
              {tool.name}
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
              {tool.description}
            </p>
          </div>
          
          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-cyan-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
        </div>
      </div>
    </Link>
  );
}
