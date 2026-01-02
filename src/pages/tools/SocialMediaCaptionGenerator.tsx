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

const captionTemplates = {
  instagram: [
    "✨ {topic} vibes only! Double tap if you agree 💫 #fyp #viral",
    "POV: You just discovered the magic of {topic} 🪄 Save this for later!",
    "This is your sign to embrace {topic} today 💖 What do you think?",
    "Plot twist: {topic} just changed everything 🎬 #trending #2026",
  ],
  twitter: [
    "Hot take: {topic} is the future and here's why 🧵",
    "{topic} hits different in 2026 🔥 RT if you agree",
    "Unpopular opinion: Everyone should know about {topic}",
    "The secret to success? {topic}. That's it. That's the tweet.",
  ],
  linkedin: [
    "I've been thinking a lot about {topic} lately. Here's what I've learned:\n\n✅ It transforms how we work\n✅ It creates new opportunities\n✅ It's essential for 2026\n\nWhat's your take?",
    "3 things I wish I knew about {topic} earlier:\n\n1. It's more accessible than you think\n2. The ROI is incredible\n3. Now is the perfect time to start\n\n#ProfessionalDevelopment",
  ],
  facebook: [
    "Just discovered something amazing about {topic}! 🤩 Who else is excited about this?",
    "Can we talk about {topic} for a second? This is a game-changer! 🙌",
    "Big news: {topic} is trending and I'm here for it! Share your thoughts below 👇",
  ],
};

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
    await new Promise((resolve) => setTimeout(resolve, 800));

    const templates = captionTemplates[platform as keyof typeof captionTemplates];
    const generated = templates.map((template) =>
      template.replace(/{topic}/g, topic)
    );

    setCaptions(generated);
    setLoading(false);
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
        description="Generate engaging captions for social media posts automatically."
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
            "Platform-specific formatting",
            "Engaging call-to-actions",
            "Trending phrases for 2026",
            "Multiple caption options",
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
