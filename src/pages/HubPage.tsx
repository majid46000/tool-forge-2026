import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Search, ChevronLeft, Sparkles, Zap } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/shared/SEOHead";
import { SubToolCard } from "@/components/shared/SubToolCard";
import { FreeBanner } from "@/components/shared/FreeBanner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getHubById, toolHubs } from "@/data/toolHubs";

export default function HubPage() {
  const { hubId } = useParams<{ hubId: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const hub = hubId ? getHubById(hubId) : null;
  
  const categories = useMemo(() => {
    if (!hub) return [];
    const cats = new Set(hub.subTools.map(t => t.category));
    return Array.from(cats);
  }, [hub]);
  
  const filteredTools = useMemo(() => {
    if (!hub) return [];
    return hub.subTools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !activeCategory || tool.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [hub, searchQuery, activeCategory]);
  
  const aiToolsCount = hub?.subTools.filter(t => t.type === "ai").length || 0;
  const clientToolsCount = hub?.subTools.filter(t => t.type === "client").length || 0;
  
  if (!hub) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Hub Not Found</h1>
          <Link to="/" className="text-cyan-400 hover:underline">Return Home</Link>
        </div>
      </Layout>
    );
  }
  
  const Icon = hub.icon;
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": hub.name,
    "description": hub.description,
    "url": `https://toolforge2026.com${hub.path}`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": hub.subTools.length,
      "itemListElement": hub.subTools.slice(0, 10).map((tool, i) => ({
        "@type": "SoftwareApplication",
        "position": i + 1,
        "name": tool.name,
        "applicationCategory": "UtilitiesApplication",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      }))
    }
  };
  
  return (
    <Layout>
      <SEOHead
        title={`${hub.name} – ${hub.subTools.length}+ Free Tools | ToolForge 2026`}
        description={`${hub.description}. All tools 100% free, no signup required.`}
        canonical={hub.path}
        jsonLd={jsonLd}
      />
      
      <FreeBanner />
      
      {/* Hero Section */}
      <section className="py-16 border-b border-white/10">
        <div className="container">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ChevronLeft className="h-4 w-4" />
            Back to All Hubs
          </Link>
          
          <div className="flex items-center gap-6 mb-8">
            <div className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${hub.color}`}>
              <Icon className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{hub.name}</h1>
              <p className="text-muted-foreground text-lg">{hub.description}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
              <Zap className="h-4 w-4 text-emerald-400" />
              <span className="text-sm">{clientToolsCount} Client-Side Tools</span>
            </div>
            <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-sm">{aiToolsCount} AI-Powered Tools</span>
            </div>
          </div>
          
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/5 border-white/10"
            />
          </div>
        </div>
      </section>
      
      {/* Category Filters */}
      <section className="py-6 border-b border-white/10 sticky top-0 z-20 bg-background/80 backdrop-blur-lg">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <Button
              variant={activeCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(null)}
              className="whitespace-nowrap"
            >
              All ({hub.subTools.length})
            </Button>
            {categories.map(cat => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className="whitespace-nowrap"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Tools Grid */}
      <section className="py-12">
        <div className="container">
          <p className="text-muted-foreground mb-6">
            Showing {filteredTools.length} tools
          </p>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredTools.map((tool) => (
              <SubToolCard key={tool.id} tool={tool} hubId={hub.id} />
            ))}
          </div>
          
          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No tools found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
