import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { Breadcrumb } from "./Breadcrumb";
import { AdNativeBanner, AdRectangle } from "../ads";

interface ToolPageWrapperProps {
  title: string;
  description: string;
  icon: LucideIcon;
  children: ReactNode;
}

export function ToolPageWrapper({ title, description, icon: Icon, children }: ToolPageWrapperProps) {
  return (
    <div className="gradient-hero min-h-screen">
      <div className="container py-8">
        <Breadcrumb items={[{ label: "Tools" }, { label: title }]} />

        {/* Hero */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary shadow-glow mb-6">
            <Icon className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
        </div>

        {children}

        {/* Ads below tool content */}
        <AdNativeBanner />
        <AdRectangle />
      </div>
    </div>
  );
}
