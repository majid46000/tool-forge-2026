import { Layout } from "@/components/layout/Layout";
import { ToolCard } from "@/components/shared/ToolCard";
import { SEOHead } from "@/components/shared/SEOHead";
import { Button } from "@/components/ui/button";
import { AdNativeBanner, AdRectangle } from "@/components/ads";
const heroHome = "/images/hero-home.jpg";
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
  Globe,
  Clock,
  Users,
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
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Access from any device, any browser, anywhere",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "24/7 uptime with instant processing",
  },
  {
    icon: Users,
    title: "Trusted by Millions",
    description: "Join thousands of content creators worldwide",
  },
];

// JSON-LD for Organization + WebSite
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://toolforge2026.com/#organization",
      "name": "ToolForge 2026",
      "url": "https://toolforge2026.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://toolforge2026.com/logo.png"
      },
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "@id": "https://toolforge2026.com/#website",
      "url": "https://toolforge2026.com",
      "name": "ToolForge 2026",
      "description": "Free AI tools 2026: ChatGPT alternative, AI blog writer, TikTok downloader no watermark, hashtag finder, caption generator & more.",
      "publisher": {
        "@id": "https://toolforge2026.com/#organization"
      }
    },
    {
      "@type": "CollectionPage",
      "@id": "https://toolforge2026.com/#webpage",
      "url": "https://toolforge2026.com",
      "name": "ToolForge 2026 – Best Free AI Tools for Content, SEO & TikTok",
      "isPartOf": {
        "@id": "https://toolforge2026.com/#website"
      },
      "about": {
        "@id": "https://toolforge2026.com/#organization"
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
        title="ToolForge 2026 – Best Free AI Tools for Content, SEO & TikTok"
        description="Free AI tools 2026: ChatGPT alternative, AI blog writer, TikTok downloader no watermark, hashtag finder, caption generator & more – all free, no signup."
        canonical="/"
        jsonLd={jsonLd}
      />
      
      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/30 to-emerald-900/50" />
        <div className="absolute inset-0 bg-black/40" />
        
        <img
          src={heroHome}
          alt="ToolForge 2026 Free AI Tools Hero Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          sizes="100vw"
        />
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full text-sm font-medium mb-8">
            <Sparkles className="h-4 w-4 text-cyan-400" aria-hidden="true" />
            <span className="text-foreground/90">10 Free AI & Social Media Tools 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Tool Forge 2026
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Free Professional AI Tools for Content, SEO & Social Media
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-bold py-6 px-10 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg"
              asChild
            >
              <a href="#tools" aria-label="Explore all free AI tools">
                Explore Tools Now <ArrowRight className="h-5 w-5 ml-2" aria-hidden="true" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass border-white/20 text-foreground hover:bg-white/10 py-6 px-10 rounded-xl text-lg font-semibold"
              asChild
            >
              <a href="/chatgpt-ai" aria-label="Try free ChatGPT alternative">
                Try ChatGPT AI
              </a>
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-b border-white/10" aria-labelledby="features-heading">
        <div className="container">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose <span className="text-gradient">ToolForge</span>?
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            The most powerful collection of free AI tools for content creators and marketers
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:border-cyan-500/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 border border-white/10 mb-4">
                  <feature.icon className="h-6 w-6 text-cyan-400" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-20" aria-labelledby="tools-heading">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 id="tools-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Free AI Tools & TikTok Downloaders
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
          <div className="mt-16">
            <AdNativeBanner />
            <AdRectangle />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10" aria-labelledby="cta-heading">
        <div className="container">
          <div className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6">
              Start Using <span className="text-gradient">Free AI Tools</span> Today
            </h2>
            <p className="text-muted-foreground mb-10 text-lg max-w-2xl mx-auto">
              No signup, no credit card, no hassle. The best free ChatGPT alternative and TikTok tools in 2026.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-bold py-6 px-12 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg"
              asChild
            >
              <a href="#tools" aria-label="Get started with free AI tools">
                Get Started Free <ArrowRight className="h-5 w-5 ml-2" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
