import { useState } from "react";
import { FileText, Copy, Loader2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ToolPageWrapper } from "@/components/shared/ToolPageWrapper";
import { InstructionsCard } from "@/components/shared/InstructionsCard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const sampleBlogPost = `# Complete Guide to [Your Topic] in 2026

## Introduction

In today's fast-paced digital world, understanding [your topic] has become essential for success. This comprehensive guide will walk you through everything you need to know.

## What is [Your Topic]?

[Your topic] refers to the practice of... [detailed explanation would go here based on the actual topic provided].

## Key Benefits

1. **Increased Efficiency** - Save time and resources with proven strategies
2. **Better Results** - Achieve measurable improvements in your outcomes
3. **Competitive Advantage** - Stay ahead of the curve in your industry

## How to Get Started

### Step 1: Research and Planning
Begin by understanding your current situation and setting clear goals...

### Step 2: Implementation
Once you have a plan, start implementing the strategies...

### Step 3: Measure and Optimize
Track your progress and make adjustments as needed...

## Conclusion

[Your topic] is a valuable skill that can transform your approach to... Start implementing these strategies today and see the difference!

---
*This is sample output. Connect your OpenAI API key for AI-generated, SEO-optimized blog posts.*`;

export default function AIBlogWriter() {
  const [topic, setTopic] = useState("");
  const [apiKey, setApiKey] = useState("");
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

    if (apiKey.trim()) {
      try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content: "You are an expert blog writer and SEO specialist. Create comprehensive, engaging, and SEO-optimized blog posts with proper headings, subheadings, and formatting in markdown.",
              },
              {
                role: "user",
                content: `Write a complete, SEO-optimized blog post about: ${topic}. Include an engaging introduction, multiple sections with h2 and h3 headings, bullet points where appropriate, and a compelling conclusion.`,
              },
            ],
            max_tokens: 2000,
          }),
        });

        const data = await response.json();
        if (data.error) {
          throw new Error(data.error.message);
        }
        setOutput(data.choices[0].message.content);
      } catch (error) {
        toast({
          title: "API Error",
          description: error instanceof Error ? error.message : "Failed to generate content",
          variant: "destructive",
        });
        setOutput(sampleBlogPost.replace(/\[Your Topic\]/g, topic).replace(/\[your topic\]/g, topic.toLowerCase()));
      }
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setOutput(sampleBlogPost.replace(/\[Your Topic\]/g, topic).replace(/\[your topic\]/g, topic.toLowerCase()));
    }

    setLoading(false);
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
            "Add your OpenAI API key (optional for demo)",
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

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                OpenAI API Key (Optional)
              </label>
              <Input
                type="password"
                placeholder="sk-..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Leave empty for demo output. Get your API key at{" "}
                <a
                  href="https://platform.openai.com/api-keys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  platform.openai.com
                </a>
              </p>
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
