import { useState } from "react";
import { FileText, Copy, Loader2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ToolPageWrapper } from "@/components/shared/ToolPageWrapper";
import { InstructionsCard } from "@/components/shared/InstructionsCard";
import { SEOHead } from "@/components/shared/SEOHead";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import heroBlogWriter from "@/assets/hero-blog-writer.jpg";

// JSON-LD for SoftwareApplication
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Free AI Blog Writer 2026",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Generate complete, SEO-optimized blog posts for free with the best AI blog writer 2026. Perfect for bloggers and marketers.",
  "url": "https://toolhub2026.com/ai-blog-writer",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "1823"
  }
};

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
      <SEOHead
        title="Free AI Blog Writer 2026 – Create SEO-Optimized Blog Posts Instantly"
        description="Generate complete, SEO-optimized blog posts for free with the best AI blog writer 2026. Perfect for bloggers and marketers."
        canonical="/ai-blog-writer"
        jsonLd={jsonLd}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "AI Tools", url: "/" },
          { name: "AI Blog Writer", url: "/ai-blog-writer" }
        ]}
        imageAlt="Free AI Blog Writer SEO Content Generator 2026"
      />
      
      <ToolPageWrapper
        title="Free AI Blog Writer 2026 – Create SEO Blog Posts"
        description="The best free AI blog writer for 2026. Generate complete, SEO-optimized blog posts automatically – perfect for bloggers and marketers."
        icon={FileText}
        heroImage={heroBlogWriter}
        heroAlt="Free AI Blog Writer SEO Content Generator 2026 Hero Banner"
        currentPath="/ai-blog-writer"
      >
        <InstructionsCard
          steps={[
            "Enter your blog topic or title idea",
            "Click Generate to create your AI blog post",
            "Review, edit, and copy your content",
          ]}
          tips={[
            "Be specific with your topic for better results",
            "Review and personalize the generated content",
            "Add your own examples and insights",
          ]}
          features={[
            "Best free AI blog writer 2026",
            "SEO-optimized content structure",
            "Proper headings and formatting",
            "Ready-to-publish quality",
          ]}
        />

        <div className="glass-card p-8 animate-slide-up">
          <div className="space-y-6">
            <div>
              <label htmlFor="topic-input" className="block text-sm font-medium text-foreground mb-2">
                Blog Topic
              </label>
              <Textarea
                id="topic-input"
                placeholder="Enter your blog topic... (e.g., 'The Complete Guide to Remote Work Productivity in 2026')"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="min-h-20 bg-white/5 border-white/10 focus:border-cyan-500/50"
                aria-describedby="topic-help"
              />
              <p id="topic-help" className="text-xs text-muted-foreground mt-2">
                Enter a specific topic for SEO-optimized blog posts
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
                  Writing Blog Post...
                </>
              ) : (
                "Generate Blog Post"
              )}
            </Button>
          </div>

          {output && (
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-foreground text-lg">Generated Blog Post</h2>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleCopy} 
                  aria-label="Copy blog post"
                  className="glass border-white/20 hover:bg-white/10"
                >
                  <Copy className="h-4 w-4 mr-2" aria-hidden="true" />
                  Copy
                </Button>
              </div>
              <div className="bg-white/5 rounded-xl p-6 max-h-96 overflow-y-auto border border-white/10">
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
            Best Free AI Blog Writer for 2026
          </h2>
          <p className="text-muted-foreground mb-4">
            Create professional, SEO-optimized blog posts in seconds with our free AI blog writer. Whether you are a blogger, marketer, or content creator, our tool helps you generate high-quality content that ranks on Google.
          </p>
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Why Choose Our AI Blog Writer?
          </h3>
          <ul className="text-muted-foreground space-y-2">
            <li>✓ 100% free – no subscription or payment required</li>
            <li>✓ SEO-optimized structure with proper headings</li>
            <li>✓ Engaging introductions and conclusions</li>
            <li>✓ Ready-to-publish quality content</li>
            <li>✓ Works for any niche or industry</li>
          </ul>
        </section>
      </ToolPageWrapper>
    </Layout>
  );
}
