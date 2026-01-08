import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ToolHub } from "@/data/toolHubs";

interface HubCardProps {
  hub: ToolHub;
}

export function HubCard({ hub }: HubCardProps) {
  const Icon = hub.icon;
  
  return (
    <Link to={hub.path} className="group block">
      <div className="relative glass-card p-8 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-glow-cyan h-full">
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-foreground/80">
          {hub.subTools.length}+ tools
        </div>
        
        <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${hub.color} mb-6 group-hover:shadow-lg transition-all duration-300`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-cyan-400 transition-colors">
          {hub.name}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {hub.description}
        </p>
        
        <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm group-hover:gap-3 transition-all">
          Explore Hub <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
