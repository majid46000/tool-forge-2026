import { useState } from "react";
import { Type, Copy, Loader2, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ToolPageWrapper } from "@/components/shared/ToolPageWrapper";
import { InstructionsCard } from "@/components/shared/InstructionsCard";
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

      // Parse the captions from the response
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
      <ToolPageWrapper
        title="Social Media Caption Generator – Generate Captions Instantly"
        description="Generate engaging captions for social media posts automatically using AI."
        icon={Type}
      >
        <InstructionsCard
          steps={[
            "Enter your content topic or theme",
            "Select your target platform",
            "Click Generate to create captions",
            "Copy your favorite caption",
          ]}
          tips={[
            "Customize captions to match your voice",
            "Add relevant emojis and hashtags",
            "Test different styles to see what works",
          ]}
          features={[
            "AI-powered caption generation",
            "Platform-specific formatting",
            "Engaging call-to-actions",
            "Trending phrases for 2026",
          ]}
        />

        <div className="bg-card rounded-xl border border-border p-6 shadow-card animate-slide-up">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Content Topic
              </label>
              <Input
                placeholder="e.g., morning routine, productivity tips, travel adventures..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && generateCaptions()}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Platform
              </label>
              <Select value={platform} onValueChange={setPlatform}>
                <SelectTrigger className="w-full md:w-48">
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
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate Captions"
              )}
            </Button>
          </div>

          {captions.length > 0 && (
            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <PlatformIcon className="h-5 w-5" />
                Generated Captions ({captions.length})
              </h3>
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
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </ToolPageWrapper>
    </Layout>
  );
}
