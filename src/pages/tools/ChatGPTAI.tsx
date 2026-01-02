import { useState } from "react";
import { MessageSquare, Copy, Loader2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ToolPageWrapper } from "@/components/shared/ToolPageWrapper";
import { InstructionsCard } from "@/components/shared/InstructionsCard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const sampleOutput = `# The Future of AI in Content Creation

Artificial Intelligence is revolutionizing how we create content in 2026. Here's what you need to know about leveraging AI for your creative projects.

## Key Benefits of AI Content Generation

1. **Speed**: Generate high-quality content in seconds
2. **Consistency**: Maintain a consistent tone across all materials
3. **Scalability**: Produce more content without increasing costs
4. **Creativity**: Get fresh ideas and overcome writer's block

## Getting Started

To begin using AI for content creation, start with a clear prompt that includes your topic, target audience, and desired tone. The more specific you are, the better results you'll achieve.

*This is sample output. Connect your OpenAI API key for real AI-generated content.*`;

export default function ChatGPTAI() {
  const [prompt, setPrompt] = useState("");
  const [apiKey, setApiKey] = useState("");
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
                content: "You are a professional content writer. Create high-quality, engaging content based on the user's prompt.",
              },
              { role: "user", content: prompt },
            ],
            max_tokens: 1000,
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
        setOutput(sampleOutput);
      }
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setOutput(sampleOutput);
    }

    setLoading(false);
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
        title="ChatGPT AI – Generate Articles & Text Instantly"
        description="Generate high-quality articles and text instantly using ChatGPT AI. Perfect for blogs, social media, and marketing content."
        icon={MessageSquare}
      >
        <InstructionsCard
          steps={[
            "Enter your topic or keyword in the prompt field",
            "Enter your OpenAI API key (optional for demo)",
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
