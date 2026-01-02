import { CheckCircle2, Lightbulb, Sparkles } from "lucide-react";

interface InstructionsCardProps {
  steps: string[];
  tips?: string[];
  features?: string[];
}

export function InstructionsCard({ steps, tips, features }: InstructionsCardProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3 mb-8">
      {/* Steps */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-card">
        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-accent" />
          How to Use
        </h3>
        <ol className="space-y-3">
          {steps.map((step, index) => (
            <li key={index} className="flex gap-3 text-sm text-muted-foreground">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold shrink-0">
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      {/* Tips */}
      {tips && tips.length > 0 && (
        <div className="bg-card rounded-xl border border-border p-6 shadow-card">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-500" />
            Pro Tips
          </h3>
          <ul className="space-y-2">
            {tips.map((tip, index) => (
              <li key={index} className="text-sm text-muted-foreground flex gap-2">
                <span className="text-yellow-500">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Features */}
      {features && features.length > 0 && (
        <div className="bg-card rounded-xl border border-border p-6 shadow-card">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Features
          </h3>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground flex gap-2">
                <span className="text-accent">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
