import { Layout } from "@/components/layout/Layout";
import { ToolCard } from "@/components/shared/ToolCard";
import { SEOHead } from "@/components/shared/SEOHead";
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
    description: "Free ChatGPT alternative 2026 – generate high-quality articles and text instantly using AI.",
    icon: MessageSquare,
    path: "/chatgpt-ai",
    popular: true,
  },
  {
    title: "TikTok Downloader",
    description: "Download TikTok videos without watermark – fast, free, and safe for 2026.",
    icon: Video,
    path: "/tiktok-downloader",
    popular: true,
  },
  {
    title: "AI Blog Writer",
    description: "Best free AI blog writer 2026 – create SEO-optimized blog posts automatically.",
    icon: FileText,
    path: "/ai-blog-writer",
    popular: true,
  },
  {
    title: "TikTok Hashtag Finder",
    description: "Free TikTok tools 2026 – discover trending hashtags to boost engagement.",
    icon: Hash,
    path: "/tiktok-hashtag-finder",
  },
  {
    title: "Canva Template Generator",
    description: "Generate professional social media templates and logos quickly for free.",
    icon: Palette,
    path: "/canva-template-generator",
  },
  {
    title: "SEO Keyword Generator",
    description: "Find high-ranking SEO keywords for your website and marketing in 2026.",
    icon: Search,
    path: "/seo-keyword-generator",
  },
  {
    title: "Video to MP3 Converter",
    description: "Convert any video to MP3 audio files – fast and free online converter.",
    icon: Music,
    path: "/video-to-mp3-converter",
  },
  {
    title: "Social Media Captions",
    description: "AI caption generator 2026 – create engaging captions for Instagram, TikTok & more.",
    icon: Type,
    path: "/social-media-caption-generator",
  },
  {
    title: "PDF / DOC Converter",
    description: "Convert documents between PDF and DOC formats quickly and for free.",
    icon: FileUp,
    path: "/pdf-doc-converter",
  },
  {
    title: "Trending Content Finder",
    description: "Discover viral TikTok & YouTube content to boost your social media strategy.",
    icon: TrendingUp,
    path: "/trending-content-finder",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Tools",
    description: "Best free AI content generator 2026 for instant results",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get professional results in seconds, not minutes",
  },
  {
    icon: Shield,
    title: "100% Free & Secure",
    description: "No signup required – your data is never stored",
  },
];

// JSON-LD for Organization + WebSite
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://toolhub2026.com/#organization",
      "name": "ToolHub 2026",
      "url": "https://toolhub2026.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://toolhub2026.com/logo.png"
      },
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "@id": "https://toolhub2026.com/#website",
      "url": "https://toolhub2026.com",
      "name": "ToolHub 2026",
      "description": "Free AI tools 2026: ChatGPT alternative, AI blog writer, TikTok downloader no watermark, hashtag finder, caption generator & more.",
      "publisher": {
        "@id": "https://toolhub2026.com/#organization"
      }
    },
    {
      "@type": "CollectionPage",
      "@id": "https://toolhub2026.com/#webpage",
      "url": "https://toolhub2026.com",
      "name": "ToolHub 2026 – Best Free AI Tools for Content, SEO & TikTok",
      "isPartOf": {
        "@id": "https://toolhub2026.com/#website"
      },
      "about": {
        "@id": "https://toolhub2026.com/#organization"
      },
      "description": "Free AI tools 2026: ChatGPT alternative, AI blog writer, TikTok downloader no watermark, hashtag finder, caption generator & more – all free, no signup.",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "SoftwareApplication",
            "name": "ChatGPT AI Alternative",
            "applicationCategory": "UtilitiesApplication",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          },
          {
            "@type": "SoftwareApplication",
            "name": "TikTok Downloader No Watermark",
            "applicationCategory": "UtilitiesApplication",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          },
          {
            "@type": "SoftwareApplication",
            "name": "AI Blog Writer",
            "applicationCategory": "UtilitiesApplication",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          }
        ]
      }
    }
  ]
};

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="ToolHub 2026 – Best Free AI Tools for Content, SEO & TikTok"
        description="Free AI tools 2026: ChatGPT alternative, AI blog writer, TikTok downloader no watermark, hashtag finder, caption generator & more – all free, no signup."
        canonical="/"
        jsonLd={jsonLd}
      />
      
      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        </div>
        <div className="container relative py-20 md:py-28">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              <span>10 Free AI & Social Media Tools 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Best Free AI Tools 2026
              <br />
              <span className="text-gradient">ChatGPT Alternative, TikTok & SEO</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Access the best free AI content generator, TikTok downloader no watermark, AI blog writer, hashtag finder & more – all free, no signup required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="#tools" aria-label="Explore all free AI tools">
                  Explore Free Tools <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/chatgpt-ai" aria-label="Try free ChatGPT alternative">
                  Try ChatGPT Alternative
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Why ToolHub 2026 */}
      <section className="py-12 border-b border-border bg-card" aria-labelledby="features-heading">
        <div className="container">
          <h2 id="features-heading" className="sr-only">Why Choose ToolHub 2026 Free AI Tools</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
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
      <section id="tools" className="py-16 md:py-24" aria-labelledby="tools-heading">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 id="tools-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Free AI Tools & TikTok Downloaders 2026
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The best free AI content generator, TikTok tools, SEO keyword finder, and social media tools – all in one place.
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
      <section className="py-16 md:py-24 bg-card border-t border-border" aria-labelledby="cta-heading">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Start Using Free AI Tools Today
            </h2>
            <p className="text-muted-foreground mb-8">
              No signup, no credit card, no hassle. The best free ChatGPT alternative and TikTok tools in 2026.
            </p>
            <Button size="lg" asChild>
              <a href="#tools" aria-label="Get started with free AI tools">
                Get Started Free <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
