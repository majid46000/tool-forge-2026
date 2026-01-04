import { useState } from "react";
import { Hash, Copy, Loader2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ToolPageWrapper } from "@/components/shared/ToolPageWrapper";
import { InstructionsCard } from "@/components/shared/InstructionsCard";
import { SEOHead } from "@/components/shared/SEOHead";
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

// JSON-LD for SoftwareApplication
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "TikTok Hashtag Finder 2026",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free TikTok hashtag finder 2026. Discover trending hashtags to boost your TikTok engagement and go viral.",
  "url": "https://toolhub2026.com/tiktok-hashtag-finder"
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
      <SEOHead
        title="Free TikTok Hashtag Finder 2026 – Trending Hashtags Generator"
        description="Find trending TikTok hashtags for free. Boost your TikTok engagement with viral hashtags in 2026 – best free TikTok tools."
        canonical="/tiktok-hashtag-finder"
        jsonLd={jsonLd}
      />
      
      <ToolPageWrapper
        title="Free TikTok Hashtag Finder 2026 – Trending Hashtags"
        description="Discover trending TikTok hashtags to boost your engagement and go viral in 2026. Free TikTok tools – no signup required."
        icon={Hash}
      >
        <InstructionsCard
          steps={[
            "Enter your content topic or niche",
            "Click Generate to find trending TikTok hashtags",
            "Copy the hashtags to use in your TikTok posts",
          ]}
          tips={[
            "Mix trending and niche hashtags for best results",
            "Use 5-10 hashtags per TikTok post",
            "Update hashtags regularly to stay current",
          ]}
          features={[
            "Free trending TikTok hashtags 2026",
            "Niche-specific recommendations",
            "One-click copy functionality",
            "Updated for 2026 trends",
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
                placeholder="e.g., fitness, cooking, fashion, tech..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && generateHashtags()}
                aria-describedby="topic-help"
              />
              <p id="topic-help" className="text-xs text-muted-foreground mt-1">
                Enter your niche to find trending TikTok hashtags
              </p>
            </div>

            <Button onClick={generateHashtags} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
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
                <h2 className="font-semibold text-foreground">
                  Trending TikTok Hashtags ({hashtags.length})
                </h2>
                <Button variant="outline" size="sm" onClick={copyHashtags} aria-label="Copy all hashtags">
                  <Copy className="h-4 w-4 mr-2" aria-hidden="true" />
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
                    role="button"
                    tabIndex={0}
                    aria-label={`Copy ${tag}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Additional SEO Content */}
        <section className="mt-12 prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Best Free TikTok Tools 2026 – Hashtag Finder
          </h2>
          <p className="text-muted-foreground mb-4">
            Boost your TikTok engagement with trending hashtags. Our free TikTok hashtag finder helps you discover viral hashtags to grow your audience and increase views in 2026.
          </p>
          <h3 className="text-xl font-semibold text-foreground mb-3">
            How Trending Hashtags Help Your TikTok Videos
          </h3>
          <ul className="text-muted-foreground space-y-2">
            <li>✓ Increase video discoverability on For You Page</li>
            <li>✓ Reach more viewers interested in your niche</li>
            <li>✓ Boost engagement with trending topics</li>
            <li>✓ Grow your TikTok following organically</li>
          </ul>
        </section>
      </ToolPageWrapper>
    </Layout>
  );
}
