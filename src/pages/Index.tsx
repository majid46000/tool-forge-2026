import { Layout } from "@/components/layout/Layout";
import { ToolCard } from "@/components/shared/ToolCard";
import { Button } from "@/components/ui/button";
import { AdNativeBanner, AdRectangle } from "@/components/ads";
import {
  MessageSquare,
  Video,
  Hash,
  Palette,
  Search,
  Music,
  FileText,
  Type,
  FileUp,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
} from "lucide-react";

const tools = [
  {
    title: "ChatGPT AI",
    description: "Generate high-quality articles and text instantly using AI technology.",
    icon: MessageSquare,
    path: "/chatgpt-ai",
    popular: true,
  },
  {
    title: "TikTok Downloader",
    description: "Download TikTok videos quickly without watermarks.",
    icon: Video,
    path: "/tiktok-downloader",
    popular: true,
  },
  {
    title: "AI Blog Writer",
    description: "Create complete, SEO-optimized blog posts automatically.",
    icon: FileText,
    path: "/ai-blog-writer",
    popular: true,
  },
  {
    title: "TikTok Hashtag Finder",
    description: "Discover trending hashtags to increase your TikTok engagement.",
    icon: Hash,
    path: "/tiktok-hashtag-finder",
  },
  {
    title: "Canva Template Generator",
    description: "Generate professional post and logo templates quickly.",
    icon: Palette,
    path: "/canva-template-generator",
  },
  {
    title: "SEO Keyword Generator",
    description: "Find high-ranking keywords for your website and marketing.",
    icon: Search,
    path: "/seo-keyword-generator",
  },
  {
    title: "Video to MP3 Converter",
    description: "Convert any video into MP3 audio files easily.",
    icon: Music,
    path: "/video-to-mp3-converter",
  },
  {
    title: "Social Media Captions",
    description: "Generate engaging captions for social media posts.",
    icon: Type,
    path: "/social-media-caption-generator",
  },
  {
    title: "PDF / DOC Converter",
    description: "Convert documents between PDF and DOC formats.",
    icon: FileUp,
    path: "/pdf-doc-converter",
  },
  {
    title: "Trending Content Finder",
    description: "Discover viral TikTok & YouTube content for your strategy.",
    icon: TrendingUp,
    path: "/trending-content-finder",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Leverage cutting-edge AI for instant results",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get results in seconds, not minutes",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is never stored or shared",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        </div>
        <div className="container relative py-20 md:py-28">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              10 Free Online Tools
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Free Online Tools for 2026
              <br />
              <span className="text-gradient">AI, Social Media, SEO & More</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Access 10 powerful tools instantly – no signup required. Generate content, download videos, optimize SEO, and boost your productivity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="#tools">
                  Explore Tools <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 border-b border-border bg-card">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              All Tools
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Choose from our collection of free online tools designed to boost your productivity and creativity.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tools.map((tool, index) => (
              <div
                key={tool.path}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ToolCard {...tool} />
              </div>
            ))}
          </div>
          
          {/* Ads section */}
          <AdNativeBanner />
          <AdRectangle />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-muted-foreground mb-8">
              Start using our free tools today. No signup, no credit card, no hassle.
            </p>
            <Button size="lg" asChild>
              <a href="#tools">
                Get Started <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
