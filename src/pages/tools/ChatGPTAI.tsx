import { useState } from "react";
import { MessageSquare, Copy, Loader2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ToolPageWrapper } from "@/components/shared/ToolPageWrapper";
import { InstructionsCard } from "@/components/shared/InstructionsCard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

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
      <ToolPageWrapper
        title="AI Text Generator – Generate Articles & Text Instantly"
        description="Generate high-quality articles and text instantly using AI. Perfect for blogs, social media, and marketing content."
        icon={MessageSquare}
      >
        <InstructionsCard
          steps={[
            "Enter your topic or keyword in the prompt field",
            "Click Generate to create your content",
            "Copy or export the generated text",
          ]}
          tips={[
            "Use specific keywords for better results",
            "Review and edit before publishing",
            "Try different prompts for variety",
          ]}
          features={[
            "AI-powered text generation",
            "Fast and customizable",
            "Multi-language support",
            "SEO-friendly content",
          ]}
        />

        <div className="bg-card rounded-xl border border-border p-6 shadow-card animate-slide-up">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Your Prompt
              </label>
              <Textarea
                placeholder="Enter your topic or describe what you want to generate... (e.g., 'Write a blog post about sustainable technology trends in 2026')"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-32"
              />
            </div>

            <Button onClick={handleGenerate} disabled={loading} className="w-full md:w-auto">
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate Article"
              )}
            </Button>
          </div>

          {output && (
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Generated Content</h3>
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
              </div>
              <div className="bg-secondary rounded-lg p-4 prose prose-sm max-w-none">
                <pre className="whitespace-pre-wrap text-foreground font-sans text-sm">
                  {output}
                </pre>
              </div>
            </div>
          )}
        </div>
      </ToolPageWrapper>
    </Layout>
  );
}
