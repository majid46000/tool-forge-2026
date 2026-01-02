import { useState } from "react";
import { Hash, Copy, Loader2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ToolPageWrapper } from "@/components/shared/ToolPageWrapper";
import { InstructionsCard } from "@/components/shared/InstructionsCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const trendingHashtags: Record<string, string[]> = {
  fitness: ["#fitnesstok", "#workout2026", "#gymlife", "#fitnessmotivation", "#healthylifestyle", "#fyp", "#viral", "#trending"],
  cooking: ["#cookingtok", "#recipe2026", "#foodie", "#homecooking", "#easyrecipes", "#fyp", "#viral", "#foodtiktok"],
  fashion: ["#fashiontok", "#ootd2026", "#styleinspo", "#outfitideas", "#fashiontrends", "#fyp", "#viral", "#grwm"],
  tech: ["#techtok", "#gadgets2026", "#techreview", "#innovation", "#ai", "#fyp", "#viral", "#technology"],
  travel: ["#traveltok", "#wanderlust2026", "#explore", "#travelguide", "#vacation", "#fyp", "#viral", "#traveltiktok"],
  beauty: ["#beautytok", "#makeup2026", "#skincare", "#grwm", "#beautytips", "#fyp", "#viral", "#makeuptutorial"],
  gaming: ["#gamingtok", "#gamer2026", "#gameplay", "#streamer", "#esports", "#fyp", "#viral", "#gamingcommunity"],
  music: ["#musictok", "#newmusic2026", "#singer", "#producer", "#musician", "#fyp", "#viral", "#coversong"],
  default: ["#fyp", "#viral", "#trending", "#foryou", "#foryoupage", "#tiktok2026", "#explore", "#followme"],
};

export default function TikTokHashtagFinder() {
  const [topic, setTopic] = useState("");
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const generateHashtags = async () => {
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

    const topicLower = topic.toLowerCase();
    let selectedHashtags = trendingHashtags.default;

    for (const [key, tags] of Object.entries(trendingHashtags)) {
      if (topicLower.includes(key)) {
        selectedHashtags = tags;
        break;
      }
    }

    const customTags = [
      `#${topic.replace(/\s+/g, "").toLowerCase()}`,
      `#${topic.replace(/\s+/g, "").toLowerCase()}2026`,
      `#${topic.replace(/\s+/g, "").toLowerCase()}tips`,
    ];

    setHashtags([...customTags, ...selectedHashtags]);
    setLoading(false);
  };

  const copyHashtags = () => {
    navigator.clipboard.writeText(hashtags.join(" "));
    toast({
      title: "Copied!",
      description: "Hashtags copied to clipboard.",
    });
  };

  return (
    <Layout>
      <ToolPageWrapper
        title="TikTok Hashtag Finder – Find Trending Hashtags Instantly"
        description="Discover trending hashtags for your TikTok videos to increase engagement and reach."
        icon={Hash}
      >
        <InstructionsCard
          steps={[
            "Enter your content topic or niche",
            "Click Generate to find trending hashtags",
            "Copy the hashtags to use in your TikTok posts",
          ]}
          tips={[
            "Mix trending and niche hashtags",
            "Use 5-10 hashtags per post for best results",
            "Update hashtags regularly to stay current",
          ]}
          features={[
            "Trending hashtag suggestions",
            "Niche-specific recommendations",
            "One-click copy functionality",
            "Updated for 2026 trends",
          ]}
        />

        <div className="bg-card rounded-xl border border-border p-6 shadow-card animate-slide-up">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Content Topic
              </label>
              <Input
                placeholder="e.g., fitness, cooking, fashion, tech..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && generateHashtags()}
              />
            </div>

            <Button onClick={generateHashtags} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Finding Hashtags...
                </>
              ) : (
                "Generate Hashtags"
              )}
            </Button>
          </div>

          {hashtags.length > 0 && (
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">
                  Suggested Hashtags ({hashtags.length})
                </h3>
                <Button variant="outline" size="sm" onClick={copyHashtags}>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy All
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {hashtags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary hover:bg-primary/20 transition-colors cursor-pointer"
                    onClick={() => {
                      navigator.clipboard.writeText(tag);
                      toast({ title: "Copied!", description: `${tag} copied to clipboard.` });
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </ToolPageWrapper>
    </Layout>
  );
}
