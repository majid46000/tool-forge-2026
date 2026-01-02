import { useState } from "react";
import { FileText, Copy, Loader2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ToolPageWrapper } from "@/components/shared/ToolPageWrapper";
import { InstructionsCard } from "@/components/shared/InstructionsCard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export default function AIBlogWriter() {
  const [topic, setTopic] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!topic.trim()) {
      toast({
        title: "Please enter a topic",
        description: "Describe what you want to write about.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setOutput("");

    try {
      const { data, error } = await supabase.functions.invoke("generate-ai-content", {
        body: { type: "blog", prompt: topic },
      });

      if (error) {
        throw new Error(error.message);
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      setOutput(data.content);
      toast({
        title: "Blog post generated!",
        description: "Your blog post has been created successfully.",
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
      description: "Blog post copied to clipboard.",
    });
  };

  return (
    <Layout>
      <ToolPageWrapper
        title="AI Blog Writer – Create Blog Posts Instantly"
        description="Generate complete, SEO-optimized blog posts automatically using AI."
        icon={FileText}
      >
        <InstructionsCard
          steps={[
            "Enter your blog topic or title idea",
            "Click Generate to create your blog post",
            "Review, edit, and copy your content",
          ]}
          tips={[
            "Be specific with your topic for better results",
            "Review and personalize the generated content",
            "Add your own examples and insights",
          ]}
          features={[
            "SEO-optimized content structure",
            "Proper headings and formatting",
            "Engaging introductions and conclusions",
            "Ready-to-publish quality",
          ]}
        />

        <div className="bg-card rounded-xl border border-border p-6 shadow-card animate-slide-up">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Blog Topic
              </label>
              <Textarea
                placeholder="Enter your blog topic... (e.g., 'The Complete Guide to Remote Work Productivity in 2026')"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="min-h-20"
              />
            </div>

            <Button onClick={handleGenerate} disabled={loading} className="w-full md:w-auto">
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Writing Blog Post...
                </>
              ) : (
                "Generate Blog Post"
              )}
            </Button>
          </div>

          {output && (
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Generated Blog Post</h3>
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
              </div>
              <div className="bg-secondary rounded-lg p-4 max-h-96 overflow-y-auto">
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
