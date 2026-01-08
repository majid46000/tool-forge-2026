import { useState } from "react";
import { TrendingUp, Search, Loader2, ExternalLink, Play, ThumbsUp } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ToolPageWrapper } from "@/components/shared/ToolPageWrapper";
import { InstructionsCard } from "@/components/shared/InstructionsCard";
import { SEOHead } from "@/components/shared/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import heroTrendingContent from "@/assets/hero-trending-content.jpg";

interface TrendingContent {
  title: string;
  platform: "TikTok" | "YouTube";
  views: string;
  likes: string;
  description: string;
}

const mockTrendingContent: Record<string, TrendingContent[]> = {
  default: [
    { title: "This One Hack Changed Everything", platform: "TikTok", views: "5.2M", likes: "890K", description: "Viral productivity hack that everyone is trying" },
    { title: "You Won't Believe What Happened Next", platform: "YouTube", views: "12M", likes: "1.2M", description: "Trending challenge video with unexpected twist" },
    { title: "Day In My Life 2026 Edition", platform: "TikTok", views: "3.8M", likes: "650K", description: "Lifestyle vlog showing daily routine" },
    { title: "The Truth About [Topic]", platform: "YouTube", views: "8.5M", likes: "980K", description: "Educational explainer getting millions of views" },
  ],
  fitness: [
    { title: "30-Day Transformation Challenge", platform: "TikTok", views: "8.1M", likes: "1.5M", description: "Before/after fitness journey content" },
    { title: "This Exercise Burns 3x More Fat", platform: "YouTube", views: "15M", likes: "2.1M", description: "Workout technique going viral" },
    { title: "Gym Fails Compilation 2026", platform: "TikTok", views: "6.4M", likes: "890K", description: "Funny gym moments compilation" },
  ],
  cooking: [
    { title: "5-Minute Meals That Changed My Life", platform: "TikTok", views: "9.2M", likes: "1.8M", description: "Quick recipe tutorials" },
    { title: "Restaurant Secrets They Don't Want You to Know", platform: "YouTube", views: "18M", likes: "2.5M", description: "Chef reveals industry secrets" },
    { title: "Food ASMR Compilation", platform: "TikTok", views: "4.6M", likes: "720K", description: "Satisfying cooking sounds" },
  ],
  tech: [
    { title: "AI Just Did Something Incredible", platform: "TikTok", views: "7.3M", likes: "1.1M", description: "Latest AI demonstration going viral" },
    { title: "Best Gadgets of 2026 So Far", platform: "YouTube", views: "11M", likes: "1.4M", description: "Tech review compilation" },
    { title: "This App is a Game Changer", platform: "TikTok", views: "5.8M", likes: "940K", description: "Productivity app review" },
  ],
};

// JSON-LD for SoftwareApplication
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Trending Content Finder 2026",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free trending content finder 2026. Discover viral TikTok and YouTube content to boost your social media strategy.",
  "url": "https://toolhub2026.com/trending-content-finder"
};

export default function TrendingContentFinder() {
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState<TrendingContent[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const findTrending = async () => {
    if (!topic.trim()) {
      toast({
        title: "Please enter a topic",
        description: "Describe what type of content you're looking for.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const topicLower = topic.toLowerCase();
    let results = mockTrendingContent.default;

    for (const [key, items] of Object.entries(mockTrendingContent)) {
      if (topicLower.includes(key)) {
        results = items;
        break;
      }
    }

    setContent(results);
    setLoading(false);
  };

  return (
    <Layout>
      <SEOHead
        title="Free Trending Content Finder 2026 – Viral TikTok & YouTube Ideas"
        description="Discover trending TikTok and YouTube content for free. Find viral video ideas to boost your social media strategy in 2026."
        canonical="/trending-content-finder"
        jsonLd={jsonLd}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Content Tools", url: "/" },
          { name: "Trending Finder", url: "/trending-content-finder" }
        ]}
        imageAlt="Free Trending Content Finder Viral Videos 2026"
      />
      
      <ToolPageWrapper
        title="Free Trending Content Finder 2026"
        description="Discover viral TikTok and YouTube content to boost your social media strategy. Find trending ideas for free."
        icon={TrendingUp}
        heroImage={heroTrendingContent}
        heroAlt="Free Trending Content Finder Viral Videos 2026 Hero Banner"
        currentPath="/trending-content-finder"
      >
        <InstructionsCard
          steps={[
            "Enter a topic or niche to explore",
            "Click Find Trending to discover viral content",
            "Review suggestions for content inspiration",
          ]}
          tips={[
            "Study why trending content works",
            "Put your unique spin on popular formats",
            "Act fast on emerging trends",
          ]}
          features={[
            "Free trending content finder 2026",
            "TikTok trend discovery",
            "YouTube viral content",
            "Content strategy insights",
          ]}
        />

        <div className="glass-card p-8 animate-slide-up">
          <div className="space-y-6">
            <div>
              <label htmlFor="topic-input" className="block text-sm font-medium text-foreground mb-2">
                Content Topic
              </label>
              <Input
                id="topic-input"
                placeholder="e.g., fitness, cooking, tech, fashion..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && findTrending()}
                className="bg-white/5 border-white/10 focus:border-cyan-500/50"
                aria-describedby="topic-help"
              />
              <p id="topic-help" className="text-xs text-muted-foreground mt-2">
                Enter your niche to find trending content ideas
              </p>
            </div>

            <Button 
              onClick={findTrending} 
              disabled={loading}
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Searching Trends...
                </>
              ) : (
                <>
                  <Search className="h-4 w-4" aria-hidden="true" />
                  Find Trending Content
                </>
              )}
            </Button>
          </div>

          {content.length > 0 && (
            <div className="mt-8 pt-8 border-t border-white/10">
              <h2 className="font-semibold text-foreground mb-6 text-lg">
                Trending Content ({content.length} results)
              </h2>
              <div className="space-y-4">
                {content.map((item, index) => (
                  <article
                    key={index}
                    className="bg-white/5 rounded-xl p-5 hover:bg-white/10 transition-colors border border-white/10"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`text-xs font-medium px-3 py-1 rounded-full ${
                              item.platform === "TikTok"
                                ? "bg-pink-500/20 text-pink-400 border border-pink-500/30"
                                : "bg-red-500/20 text-red-400 border border-red-500/30"
                            }`}
                          >
                            {item.platform}
                          </span>
                        </div>
                        <h3 className="font-medium text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Play className="h-3 w-3" aria-hidden="true" />
                            {item.views} views
                          </span>
                          <span className="flex items-center gap-1">
                            <ThumbsUp className="h-3 w-3" aria-hidden="true" />
                            {item.likes} likes
                          </span>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="shrink-0 hover:bg-white/10" 
                        aria-label="View content"
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </Button>
                    </div>
                  </article>
                ))}
              </div>

              <p className="text-xs text-muted-foreground mt-6 text-center p-4 rounded-lg bg-white/5 border border-white/10">
                Note: This is demo data. Real implementation would require API integration with TikTok and YouTube.
              </p>
            </div>
          )}
        </div>

        {/* Additional SEO Content */}
        <section className="mt-12 prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Best Free Trending Content Finder 2026
          </h2>
          <p className="text-muted-foreground mb-4">
            Discover viral TikTok and YouTube content to inspire your social media strategy. Our free tool helps you find trending topics and popular video formats in 2026.
          </p>
        </section>
      </ToolPageWrapper>
    </Layout>
  );
}
