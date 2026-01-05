import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { Breadcrumb } from "./Breadcrumb";
import { AdNativeBanner, AdRectangle } from "../ads";

interface ToolPageWrapperProps {
  title: string;
  description: string;
  icon: LucideIcon;
  children: ReactNode;
  heroImage?: string;
  heroAlt?: string;
}

export function ToolPageWrapper({ title, description, icon: Icon, children, heroImage, heroAlt }: ToolPageWrapperProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      {heroImage && (
        <div className="relative w-full h-[280px] md:h-[340px] lg:h-[400px] overflow-hidden">
          <img
            src={heroImage}
            alt={heroAlt || `${title} Hero Banner`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 animate-fade-in">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/90 shadow-glow mb-4">
                <Icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 drop-shadow-lg">{title}</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">{description}</p>
            </div>
          </div>
        </div>
      )}

      <div className="gradient-hero">
        <div className="container py-8">
          <Breadcrumb items={[{ label: "Tools" }, { label: title }]} />

          {/* Fallback hero if no image */}
          {!heroImage && (
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary shadow-glow mb-6">
                <Icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
            </div>
          )}

          {children}

          {/* Ads below tool content */}
          <AdNativeBanner />
          <AdRectangle />
        </div>
      </div>
    </div>
  );
}
