import { useState } from "react";
import { MessageSquare, Copy, Loader2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ToolPageWrapper } from "@/components/shared/ToolPageWrapper";
import { InstructionsCard } from "@/components/shared/InstructionsCard";
import { SEOHead } from "@/components/shared/SEOHead";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import heroChatgpt from "@/assets/hero-chatgpt.jpg";

// JSON-LD for SoftwareApplication
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Free ChatGPT Alternative 2026 – AI Text Generator",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Best free ChatGPT alternative 2026. Generate high-quality articles, text, and content instantly with AI – no login required.",
  "url": "https://toolhub2026.com/chatgpt-ai",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "2847"
  }
};

export default function ChatGPTAI() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Please enter a prompt",
        description: "Describe what you want to generate.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setOutput("");

    try {
      const { data, error } = await supabase.functions.invoke("generate-ai-content", {
        body: { type: "article", prompt },
      });

      if (error) {
        throw new Error(error.message);
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      setOutput(data.content);
      toast({
        title: "Content generated!",
        description: "Your article has been created successfully.",
      });
    } catch (error) {
      console.error("Generation error:", error);
      const message = error instanceof Error ? error.message : "Failed to generate content";
      
      if (message.includes("Daily limit")) {
        toast({
          title: "Daily limit reached",
          description: "Please try again tomorrow.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Generation failed",
          description: message,
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    toast({
      title: "Copied!",
      description: "Content copied to clipboard.",
    });
  };

  return (
    <Layout>
      <SEOHead
        title="Free ChatGPT Alternative 2026 – AI Text & Article Generator"
        description="Best free ChatGPT alternative 2026. Generate high-quality articles, text, and content instantly with AI – no login required."
        canonical="/chatgpt-ai"
        jsonLd={jsonLd}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "AI Tools", url: "/" },
          { name: "Free ChatGPT Alternative", url: "/chatgpt-ai" }
        ]}
        imageAlt="Free ChatGPT Alternative AI Text Generator 2026"
      />
      
      <ToolPageWrapper
        title="Free ChatGPT Alternative 2026 – AI Text Generator"
        description="The best free AI content generator for 2026. Generate articles, blog posts, and marketing copy instantly – no signup required."
        icon={MessageSquare}
        heroImage={heroChatgpt}
        heroAlt="Free ChatGPT Alternative AI Text Generator 2026 Hero Banner"
        currentPath="/chatgpt-ai"
      >
        <InstructionsCard
          steps={[
            "Enter your topic or keyword in the prompt field",
            "Click Generate to create your AI content",
            "Copy or export the generated text",
          ]}
          tips={[
            "Use specific keywords for better AI results",
            "Review and edit before publishing",
            "Try different prompts for variety",
          ]}
          features={[
            "Best free ChatGPT alternative 2026",
            "AI-powered text generation",
            "SEO-friendly content",
            "No login required",
          ]}
        />

        <div className="glass-card p-8 animate-slide-up">
          <div className="space-y-6">
            <div>
              <label htmlFor="prompt-input" className="block text-sm font-medium text-foreground mb-2">
                Your Prompt
              </label>
              <Textarea
                id="prompt-input"
                placeholder="Enter your topic or describe what you want to generate... (e.g., 'Write a blog post about sustainable technology trends in 2026')"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-32 bg-white/5 border-white/10 focus:border-cyan-500/50"
                aria-describedby="prompt-help"
              />
              <p id="prompt-help" className="text-xs text-muted-foreground mt-2">
                Be specific for better AI-generated content
              </p>
            </div>

            <Button 
              onClick={handleGenerate} 
              disabled={loading} 
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Generating...
                </>
              ) : (
                "Generate Article"
              )}
            </Button>
          </div>

          {output && (
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-foreground text-lg">Generated Content</h2>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleCopy} 
                  aria-label="Copy generated content"
                  className="glass border-white/20 hover:bg-white/10"
                >
                  <Copy className="h-4 w-4 mr-2" aria-hidden="true" />
                  Copy
                </Button>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <pre className="whitespace-pre-wrap text-foreground font-sans text-sm leading-relaxed">
                  {output}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Additional SEO Content */}
        <section className="mt-12 prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Why This is the Best Free ChatGPT Alternative in 2026
          </h2>
          <p className="text-muted-foreground mb-4">
            Looking for a free ChatGPT alternative that delivers professional-quality content? ToolHub 2026 offers the best free AI content generator with no signup required. Our AI text generator helps you create articles, blog posts, marketing copy, and more – completely free.
          </p>
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Key Benefits of Our Free AI Text Generator
          </h3>
          <ul className="text-muted-foreground space-y-2">
            <li>✓ 100% free to use – no hidden costs or subscriptions</li>
            <li>✓ No login or signup required – start generating immediately</li>
            <li>✓ SEO-optimized content for better search rankings</li>
            <li>✓ Works on all devices – desktop, tablet, and mobile</li>
            <li>✓ Fast AI generation – get results in seconds</li>
          </ul>
        </section>
      </ToolPageWrapper>
    </Layout>
  );
}
