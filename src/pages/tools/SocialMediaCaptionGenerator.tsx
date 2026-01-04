import { useState } from "react";
import { Type, Copy, Loader2, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ToolPageWrapper } from "@/components/shared/ToolPageWrapper";
import { InstructionsCard } from "@/components/shared/InstructionsCard";
import { SEOHead } from "@/components/shared/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const platformIcons = {
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
  facebook: Facebook,
};

// JSON-LD for SoftwareApplication
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Free AI Caption Generator 2026",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free AI caption generator for Instagram, TikTok, Twitter & more. Create engaging social media captions in 2026.",
  "url": "https://toolhub2026.com/social-media-caption-generator"
};

export default function SocialMediaCaptionGenerator() {
  const [topic, setTopic] = useState("");
  const [platform, setPlatform] = useState("instagram");
  const [captions, setCaptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const generateCaptions = async () => {
    if (!topic.trim()) {
      toast({
        title: "Please enter a topic",
        description: "Describe your content theme.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setCaptions([]);

    try {
      const { data, error } = await supabase.functions.invoke("generate-ai-content", {
        body: { type: "caption", prompt: topic, platform },
      });

      if (error) {
        throw new Error(error.message);
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      const content = data.content as string;
      const parsedCaptions = content
        .split(/\n+/)
        .filter((line: string) => line.trim())
        .map((line: string) => line.replace(/^\d+[\.\)]\s*/, "").trim())
        .filter((line: string) => line.length > 0);

      setCaptions(parsedCaptions);
      toast({
        title: "Captions generated!",
        description: `${parsedCaptions.length} captions created for ${platform}.`,
      });
    } catch (error) {
      console.error("Generation error:", error);
      const message = error instanceof Error ? error.message : "Failed to generate captions";
      
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

  const copyCaption = (caption: string) => {
    navigator.clipboard.writeText(caption);
    toast({
      title: "Copied!",
      description: "Caption copied to clipboard.",
    });
  };

  const PlatformIcon = platformIcons[platform as keyof typeof platformIcons];

  return (
    <Layout>
      <SEOHead
        title="Free AI Caption Generator 2026 – Instagram, TikTok & Social Media"
        description="Free AI caption generator for Instagram, TikTok, Twitter & LinkedIn. Create engaging social media captions instantly in 2026."
        canonical="/social-media-caption-generator"
        jsonLd={jsonLd}
      />
      
      <ToolPageWrapper
        title="Free AI Caption Generator 2026"
        description="Generate engaging social media captions for Instagram, TikTok, Twitter & LinkedIn using AI – 100% free."
        icon={Type}
      >
        <InstructionsCard
          steps={[
            "Enter your content topic or theme",
            "Select your target social media platform",
            "Click Generate to create AI captions",
            "Copy your favorite caption",
          ]}
          tips={[
            "Customize captions to match your voice",
            "Add relevant emojis and hashtags",
            "Test different styles to see what works",
          ]}
          features={[
            "Free AI caption generator 2026",
            "Platform-specific formatting",
            "Engaging call-to-actions",
            "Works for all social platforms",
          ]}
        />

        <div className="bg-card rounded-xl border border-border p-6 shadow-card animate-slide-up">
          <div className="space-y-4">
            <div>
              <label htmlFor="topic-input" className="block text-sm font-medium text-foreground mb-2">
                Content Topic
              </label>
              <Input
                id="topic-input"
                placeholder="e.g., morning routine, productivity tips, travel adventures..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && generateCaptions()}
                aria-describedby="topic-help"
              />
              <p id="topic-help" className="text-xs text-muted-foreground mt-1">
                Describe your post to generate engaging captions
              </p>
            </div>

            <div>
              <label htmlFor="platform-select" className="block text-sm font-medium text-foreground mb-2">
                Platform
              </label>
              <Select value={platform} onValueChange={setPlatform}>
                <SelectTrigger id="platform-select" className="w-full md:w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="twitter">Twitter/X</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button onClick={generateCaptions} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Generating...
                </>
              ) : (
                "Generate Captions"
              )}
            </Button>
          </div>

          {captions.length > 0 && (
            <div className="mt-6 pt-6 border-t border-border">
              <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <PlatformIcon className="h-5 w-5" aria-hidden="true" />
                Generated Captions ({captions.length})
              </h2>
              <div className="space-y-4">
                {captions.map((caption, index) => (
                  <div
                    key={index}
                    className="bg-secondary rounded-lg p-4 group hover:bg-secondary/80 transition-colors"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <p className="text-sm text-foreground whitespace-pre-wrap flex-1">
                        {caption}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyCaption(caption)}
                        className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Copy caption"
                      >
                        <Copy className="h-4 w-4" aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Additional SEO Content */}
        <section className="mt-12 prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Best Free AI Caption Generator for Social Media 2026
          </h2>
          <p className="text-muted-foreground mb-4">
            Create engaging captions for Instagram, TikTok, Twitter, and LinkedIn with our free AI caption generator. Perfect for content creators, marketers, and influencers in 2026.
          </p>
        </section>
      </ToolPageWrapper>
    </Layout>
  );
}
