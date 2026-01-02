import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  popular?: boolean;
}

export function ToolCard({ title, description, icon: Icon, path, popular }: ToolCardProps) {
  return (
    <div className="group relative bg-card rounded-xl border border-border p-6 shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
      {popular && (
        <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full gradient-accent text-accent-foreground text-xs font-semibold shadow-md">
          Popular
        </div>
      )}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
      <Link to={path}>
        <Button variant="outline" className="w-full">
          Use Tool
        </Button>
      </Link>
    </div>
  );
}
