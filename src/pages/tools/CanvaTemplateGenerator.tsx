import { useState } from "react";
import { Palette, Download, Loader2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ToolPageWrapper } from "@/components/shared/ToolPageWrapper";
import { InstructionsCard } from "@/components/shared/InstructionsCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

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
      <ToolPageWrapper
        title="Canva Template Generator – Generate Templates Fast"
        description="Create professional post and logo templates quickly with our Canva Template Generator."
        icon={Palette}
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
            "Multiple template formats",
            "Platform-specific dimensions",
            "Free to use and download",
            "Professional designs",
          ]}
        />

        <div className="bg-card rounded-xl border border-border p-6 shadow-card animate-slide-up">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Template Type
              </label>
              <Select value={templateType} onValueChange={setTemplateType}>
                <SelectTrigger className="w-full md:w-64">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="instagram-post">Instagram Post</SelectItem>
                  <SelectItem value="instagram-story">Instagram Story</SelectItem>
                  <SelectItem value="facebook-post">Facebook Post</SelectItem>
                  <SelectItem value="youtube-thumbnail">YouTube Thumbnail</SelectItem>
                  <SelectItem value="twitter-header">Twitter/X Header</SelectItem>
                  <SelectItem value="logo">Logo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button onClick={handleGenerate} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate Template"
              )}
            </Button>
          </div>

          {generatedTemplate && templates[generatedTemplate] && (
            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="font-semibold text-foreground mb-4">Generated Template</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div
                  className={`aspect-square max-w-xs rounded-xl bg-gradient-to-br ${templates[generatedTemplate].color} flex items-center justify-center p-8 text-white shadow-lg`}
                >
                  <div className="text-center">
                    <Palette className="h-12 w-12 mx-auto mb-4 opacity-80" />
                    <p className="font-bold text-lg">{templates[generatedTemplate].title}</p>
                    <p className="text-sm opacity-75 mt-2">
                      {templates[generatedTemplate].dimensions}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Template Type</p>
                    <p className="font-medium text-foreground">{templates[generatedTemplate].title}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Dimensions</p>
                    <p className="font-medium text-foreground">{templates[generatedTemplate].dimensions}</p>
                  </div>
                  <Button onClick={handleDownload} variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download Template
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </ToolPageWrapper>
    </Layout>
  );
}
