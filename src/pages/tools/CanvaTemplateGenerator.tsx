import { useState } from "react";
import { Palette, Download, Loader2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ToolPageWrapper } from "@/components/shared/ToolPageWrapper";
import { InstructionsCard } from "@/components/shared/InstructionsCard";
import { SEOHead } from "@/components/shared/SEOHead";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import heroCanvaTemplate from "@/assets/hero-canva-template.jpg";

const templates = {
  "instagram-post": {
    title: "Instagram Post Template",
    dimensions: "1080 x 1080",
    color: "from-pink-500 to-purple-600",
  },
  "instagram-story": {
    title: "Instagram Story Template",
    dimensions: "1080 x 1920",
    color: "from-orange-500 to-pink-500",
  },
  "facebook-post": {
    title: "Facebook Post Template",
    dimensions: "1200 x 630",
    color: "from-blue-500 to-blue-700",
  },
  logo: {
    title: "Logo Template",
    dimensions: "500 x 500",
    color: "from-green-500 to-teal-600",
  },
  "youtube-thumbnail": {
    title: "YouTube Thumbnail",
    dimensions: "1280 x 720",
    color: "from-red-500 to-red-700",
  },
  "twitter-header": {
    title: "Twitter/X Header",
    dimensions: "1500 x 500",
    color: "from-sky-500 to-blue-600",
  },
};

// JSON-LD for SoftwareApplication
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Free Canva Template Generator 2026",
  "applicationCategory": "DesignApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free social media template generator 2026. Create Instagram, Facebook, YouTube templates like Canva – no signup required.",
  "url": "https://toolhub2026.com/canva-template-generator"
};

export default function CanvaTemplateGenerator() {
  const [templateType, setTemplateType] = useState("instagram-post");
  const [generatedTemplate, setGeneratedTemplate] = useState<keyof typeof templates | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setGeneratedTemplate(templateType as keyof typeof templates);
    setLoading(false);
    toast({
      title: "Template Generated!",
      description: "Your template is ready to download.",
    });
  };

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "This is a mock template. In production, a real image file would be generated.",
    });
  };

  return (
    <Layout>
      <SEOHead
        title="Free Canva Template Generator 2026 – Instagram, Facebook & More"
        description="Free social media template generator 2026. Create Instagram posts, stories, YouTube thumbnails & logos like Canva – no signup required."
        canonical="/canva-template-generator"
        jsonLd={jsonLd}
      />
      
      <ToolPageWrapper
        title="Free Template Generator 2026 – Like Canva"
        description="Create professional social media templates for Instagram, Facebook, YouTube & more – 100% free, no signup required."
        icon={Palette}
        heroImage={heroCanvaTemplate}
        heroAlt="Free Canva Template Generator Social Media 2026 Hero Banner"
      >
        <InstructionsCard
          steps={[
            "Choose your template type (post, story, logo, etc.)",
            "Click Generate to create your template",
            "Download or edit the generated template",
          ]}
          tips={[
            "Choose the right dimensions for your platform",
            "Use consistent branding across templates",
            "Customize colors to match your brand",
          ]}
          features={[
            "Free template generator 2026",
            "Multiple template formats",
            "Platform-specific dimensions",
            "Professional designs",
          ]}
        />

        <div className="glass-card p-8 animate-slide-up">
          <div className="space-y-6">
            <div>
              <label htmlFor="template-select" className="block text-sm font-medium text-foreground mb-2">
                Template Type
              </label>
              <Select value={templateType} onValueChange={setTemplateType}>
                <SelectTrigger id="template-select" className="w-full md:w-64 bg-white/5 border-white/10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="glass-card">
                  <SelectItem value="instagram-post">Instagram Post</SelectItem>
                  <SelectItem value="instagram-story">Instagram Story</SelectItem>
                  <SelectItem value="facebook-post">Facebook Post</SelectItem>
                  <SelectItem value="youtube-thumbnail">YouTube Thumbnail</SelectItem>
                  <SelectItem value="twitter-header">Twitter/X Header</SelectItem>
                  <SelectItem value="logo">Logo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={handleGenerate} 
              disabled={loading}
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Generating...
                </>
              ) : (
                "Generate Template"
              )}
            </Button>
          </div>

          {generatedTemplate && templates[generatedTemplate] && (
            <div className="mt-8 pt-8 border-t border-white/10">
              <h2 className="font-semibold text-foreground mb-6 text-lg">Generated Template</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div
                  className={`aspect-square max-w-xs rounded-2xl bg-gradient-to-br ${templates[generatedTemplate].color} flex items-center justify-center p-8 text-white shadow-2xl`}
                  role="img"
                  aria-label={`${templates[generatedTemplate].title} preview`}
                >
                  <div className="text-center">
                    <Palette className="h-12 w-12 mx-auto mb-4 opacity-80" aria-hidden="true" />
                    <p className="font-bold text-lg">{templates[generatedTemplate].title}</p>
                    <p className="text-sm opacity-75 mt-2">
                      {templates[generatedTemplate].dimensions}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Template Type</p>
                    <p className="font-medium text-foreground text-lg">{templates[generatedTemplate].title}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Dimensions</p>
                    <p className="font-medium text-foreground text-lg">{templates[generatedTemplate].dimensions}</p>
                  </div>
                  <Button 
                    onClick={handleDownload} 
                    variant="outline"
                    className="glass border-white/20 hover:bg-white/10"
                  >
                    <Download className="h-4 w-4 mr-2" aria-hidden="true" />
                    Download Template
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Additional SEO Content */}
        <section className="mt-12 prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Best Free Template Generator 2026 – Canva Alternative
          </h2>
          <p className="text-muted-foreground mb-4">
            Create professional social media templates for free. Our template generator works like Canva but requires no signup – perfect for Instagram, Facebook, YouTube, and more.
          </p>
        </section>
      </ToolPageWrapper>
    </Layout>
  );
}
