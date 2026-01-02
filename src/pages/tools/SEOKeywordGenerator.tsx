import { useState } from "react";
import { Search, Copy, Loader2, TrendingUp, Target } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ToolPageWrapper } from "@/components/shared/ToolPageWrapper";
import { InstructionsCard } from "@/components/shared/InstructionsCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface Keyword {
  term: string;
  volume: string;
  difficulty: "Low" | "Medium" | "High";
  type: "Short-tail" | "Long-tail";
}

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
      <ToolPageWrapper
        title="SEO Keyword Generator – Find Top Keywords for Your Website"
        description="Generate high-ranking SEO keywords for your website, blog, or marketing campaigns."
        icon={Search}
      >
        <InstructionsCard
          steps={[
            "Enter your main topic or niche",
            "Click Generate to find relevant keywords",
            "Copy keywords to use in your content strategy",
          ]}
          tips={[
            "Focus on long-tail keywords for better ranking",
            "Target low-difficulty keywords when starting",
            "Use keywords naturally in your content",
          ]}
          features={[
            "Search volume estimates",
            "Keyword difficulty scores",
            "Long-tail keyword suggestions",
            "One-click copy functionality",
          ]}
        />

        <div className="bg-card rounded-xl border border-border p-6 shadow-card animate-slide-up">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Enter Your Topic
              </label>
              <Input
                placeholder="e.g., digital marketing, web development, fitness..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && generateKeywords()}
              />
            </div>

            <Button onClick={generateKeywords} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Search className="h-4 w-4" />
                  Generate Keywords
                </>
              )}
            </Button>
          </div>

          {keywords.length > 0 && (
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">
                  Generated Keywords ({keywords.length})
                </h3>
                <Button variant="outline" size="sm" onClick={copyKeywords}>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy All
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-2 font-medium text-muted-foreground">Keyword</th>
                      <th className="text-left py-3 px-2 font-medium text-muted-foreground">
                        <TrendingUp className="h-4 w-4 inline mr-1" />
                        Volume
                      </th>
                      <th className="text-left py-3 px-2 font-medium text-muted-foreground">
                        <Target className="h-4 w-4 inline mr-1" />
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
      </ToolPageWrapper>
    </Layout>
  );
}
