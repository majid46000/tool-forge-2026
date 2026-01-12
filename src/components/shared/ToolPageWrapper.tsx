import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { Breadcrumb } from "./Breadcrumb";
import { RelatedTools } from "./RelatedTools";

interface ToolPageWrapperProps {
  title: string;
  description: string;
  icon: LucideIcon;
  children: ReactNode;
  heroImage?: string;
  heroAlt?: string;
  currentPath?: string;
}

export function ToolPageWrapper({ title, description, icon: Icon, children, heroImage, heroAlt, currentPath }: ToolPageWrapperProps) {
  return (
    <div className="min-h-screen">
      {/* Premium Hero Banner */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/30 to-emerald-900/50" />
        <div className="absolute inset-0 bg-black/40" />
        
        {heroImage && (
          <img
            src={heroImage}
            alt={heroAlt || `${title} Hero Banner`}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            loading="eager"
          />
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 backdrop-blur-xl border border-white/20 shadow-2xl mb-8">
            <Icon className="h-10 w-10 text-cyan-400" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-6">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative bg-gradient-to-b from-background to-background/95">
        <div className="container py-12">
          <Breadcrumb items={[{ label: "Tools" }, { label: title }]} />

          <div className="mt-8">
            {children}
          </div>

          {/* Related Tools - Internal Linking for SEO */}
          {currentPath && <RelatedTools currentPath={currentPath} />}
        </div>
      </div>
    </div>
  );
}
