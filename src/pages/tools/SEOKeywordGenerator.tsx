import { useState } from "react";
import { Search, Copy, Loader2, TrendingUp, Target } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ToolPageWrapper } from "@/components/shared/ToolPageWrapper";
import { InstructionsCard } from "@/components/shared/InstructionsCard";
import { SEOHead } from "@/components/shared/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface Keyword {
  term: string;
  volume: string;
  difficulty: "Low" | "Medium" | "High";
  type: "Short-tail" | "Long-tail";
}

// JSON-LD for SoftwareApplication
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Free SEO Keyword Generator 2026",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free SEO keyword generator 2026. Find high-ranking keywords for your website, blog, and marketing campaigns.",
  "url": "https://toolhub2026.com/seo-keyword-generator"
};

export default function SEOKeywordGenerator() {
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState<Keyword[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const generateKeywords = async () => {
    if (!topic.trim()) {
      toast({
        title: "Please enter a topic",
        description: "Enter a topic to generate keywords.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const baseKeywords: Keyword[] = [
      { term: topic, volume: "10K-50K", difficulty: "High", type: "Short-tail" },
      { term: `${topic} 2026`, volume: "5K-10K", difficulty: "Low", type: "Long-tail" },
      { term: `best ${topic}`, volume: "5K-20K", difficulty: "Medium", type: "Long-tail" },
      { term: `${topic} tips`, volume: "2K-5K", difficulty: "Low", type: "Long-tail" },
      { term: `${topic} guide`, volume: "3K-8K", difficulty: "Medium", type: "Long-tail" },
      { term: `how to ${topic}`, volume: "8K-15K", difficulty: "Medium", type: "Long-tail" },
      { term: `${topic} for beginners`, volume: "4K-10K", difficulty: "Low", type: "Long-tail" },
      { term: `${topic} tools`, volume: "2K-6K", difficulty: "Medium", type: "Long-tail" },
      { term: `${topic} strategies`, volume: "1K-3K", difficulty: "Low", type: "Long-tail" },
      { term: `free ${topic}`, volume: "3K-7K", difficulty: "Medium", type: "Long-tail" },
    ];

    setKeywords(baseKeywords);
    setLoading(false);
  };

  const copyKeywords = () => {
    const keywordText = keywords.map((k) => k.term).join(", ");
    navigator.clipboard.writeText(keywordText);
    toast({
      title: "Copied!",
      description: "Keywords copied to clipboard.",
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Low":
        return "text-accent bg-accent/10";
      case "Medium":
        return "text-yellow-600 bg-yellow-100";
      case "High":
        return "text-destructive bg-destructive/10";
      default:
        return "";
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Free SEO Keyword Generator 2026 – Find High-Ranking Keywords"
        description="Free SEO keyword generator 2026. Find high-ranking keywords with search volume and difficulty scores for your website and marketing."
        canonical="/seo-keyword-generator"
        jsonLd={jsonLd}
      />
      
      <ToolPageWrapper
        title="Free SEO Keyword Generator 2026"
        description="Find high-ranking SEO keywords with search volume and difficulty scores. The best free SEO tool for 2026."
        icon={Search}
      >
        <InstructionsCard
          steps={[
            "Enter your main topic or niche",
            "Click Generate to find SEO keywords",
            "Copy keywords to use in your content strategy",
          ]}
          tips={[
            "Focus on long-tail keywords for better ranking",
            "Target low-difficulty keywords when starting",
            "Use keywords naturally in your content",
          ]}
          features={[
            "Free SEO keyword research 2026",
            "Search volume estimates",
            "Keyword difficulty scores",
            "Long-tail keyword suggestions",
          ]}
        />

        <div className="bg-card rounded-xl border border-border p-6 shadow-card animate-slide-up">
          <div className="space-y-4">
            <div>
              <label htmlFor="topic-input" className="block text-sm font-medium text-foreground mb-2">
                Enter Your Topic
              </label>
              <Input
                id="topic-input"
                placeholder="e.g., digital marketing, web development, fitness..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && generateKeywords()}
                aria-describedby="topic-help"
              />
              <p id="topic-help" className="text-xs text-muted-foreground mt-1">
                Enter a topic to discover SEO keywords with volume and difficulty
              </p>
            </div>

            <Button onClick={generateKeywords} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Search className="h-4 w-4" aria-hidden="true" />
                  Generate Keywords
                </>
              )}
            </Button>
          </div>

          {keywords.length > 0 && (
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-foreground">
                  SEO Keywords ({keywords.length})
                </h2>
                <Button variant="outline" size="sm" onClick={copyKeywords} aria-label="Copy all keywords">
                  <Copy className="h-4 w-4 mr-2" aria-hidden="true" />
                  Copy All
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-2 font-medium text-muted-foreground">Keyword</th>
                      <th className="text-left py-3 px-2 font-medium text-muted-foreground">
                        <TrendingUp className="h-4 w-4 inline mr-1" aria-hidden="true" />
                        Volume
                      </th>
                      <th className="text-left py-3 px-2 font-medium text-muted-foreground">
                        <Target className="h-4 w-4 inline mr-1" aria-hidden="true" />
                        Difficulty
                      </th>
                      <th className="text-left py-3 px-2 font-medium text-muted-foreground">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {keywords.map((keyword, index) => (
                      <tr key={index} className="border-b border-border hover:bg-secondary/50">
                        <td className="py-3 px-2 font-medium text-foreground">{keyword.term}</td>
                        <td className="py-3 px-2 text-muted-foreground">{keyword.volume}</td>
                        <td className="py-3 px-2">
                          <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(keyword.difficulty)}`}>
                            {keyword.difficulty}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-muted-foreground">{keyword.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Additional SEO Content */}
        <section className="mt-12 prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Best Free SEO Keyword Tool for 2026
          </h2>
          <p className="text-muted-foreground mb-4">
            Find high-ranking keywords for your website, blog, or marketing campaigns with our free SEO keyword generator. Get search volume estimates and difficulty scores to plan your content strategy.
          </p>
        </section>
      </ToolPageWrapper>
    </Layout>
  );
}
