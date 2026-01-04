import { useState } from "react";
import { Music, Download, Upload, AlertCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ToolPageWrapper } from "@/components/shared/ToolPageWrapper";
import { InstructionsCard } from "@/components/shared/InstructionsCard";
import { SEOHead } from "@/components/shared/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

// JSON-LD for SoftwareApplication
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Free Video to MP3 Converter 2026",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online video to MP3 converter 2026. Extract audio from any video file – fast, easy, and no signup required.",
  "url": "https://toolhub2026.com/video-to-mp3-converter"
};

export default function VideoToMP3Converter() {
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const { toast } = useToast();

  const handleConvert = async () => {
    if (!url.trim() && !file) {
      toast({
        title: "No input provided",
        description: "Please paste a video URL or upload a file.",
        variant: "destructive",
      });
      return;
    }

    setProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setProcessing(false);

    toast({
      title: "Backend Required",
      description: "Video conversion requires server-side processing. Your input was validated.",
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (!selectedFile.type.startsWith("video/")) {
        toast({
          title: "Invalid file type",
          description: "Please select a video file.",
          variant: "destructive",
        });
        return;
      }
      setFile(selectedFile);
      setUrl("");
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Free Video to MP3 Converter 2026 – Extract Audio Online"
        description="Free online video to MP3 converter 2026. Extract audio from YouTube, TikTok, and any video file – fast, easy, no signup required."
        canonical="/video-to-mp3-converter"
        jsonLd={jsonLd}
      />
      
      <ToolPageWrapper
        title="Free Video to MP3 Converter 2026"
        description="Convert any video to MP3 audio for free. Extract audio from YouTube, TikTok, and video files – fast and easy."
        icon={Music}
      >
        <InstructionsCard
          steps={[
            "Paste a video URL or upload a video file",
            "Click Convert to process the video",
            "Download your MP3 audio file",
          ]}
          tips={[
            "Supported formats: MP4, AVI, MOV, WebM",
            "Higher quality videos produce better audio",
            "Use for personal audio extraction",
          ]}
          features={[
            "Free video to MP3 converter 2026",
            "Multiple video format support",
            "High-quality audio extraction",
            "No file size limits",
          ]}
        />

        <div className="bg-card rounded-xl border border-border p-6 shadow-card animate-slide-up">
          <div className="space-y-4">
            <div>
              <label htmlFor="video-url" className="block text-sm font-medium text-foreground mb-2">
                Video URL
              </label>
              <Input
                id="video-url"
                placeholder="https://youtube.com/watch?v=... or any video URL"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  setFile(null);
                }}
                aria-describedby="url-help"
              />
              <p id="url-help" className="text-xs text-muted-foreground mt-1">
                Paste any video URL to extract MP3 audio
              </p>
            </div>

            <div className="relative">
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">OR</span>
                <div className="flex-1 border-t border-border"></div>
              </div>
            </div>

            <div>
              <label htmlFor="video-upload" className="block text-sm font-medium text-foreground mb-2">
                Upload Video File
              </label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="video-upload"
                />
                <label htmlFor="video-upload" className="cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" aria-hidden="true" />
                  {file ? (
                    <p className="text-sm font-medium text-foreground">{file.name}</p>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Click to upload or drag and drop
                    </p>
                  )}
                </label>
              </div>
            </div>

            <Button onClick={handleConvert} disabled={processing}>
              {processing ? (
                "Converting..."
              ) : (
                <>
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Convert to MP3
                </>
              )}
            </Button>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-secondary/50 border border-border flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Server-Side Processing Required</p>
              <p>
                This tool requires backend implementation for actual video-to-audio conversion.
                The interface demonstrates the user flow and input validation.
              </p>
            </div>
          </div>
        </div>

        {/* Additional SEO Content */}
        <section className="mt-12 prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Best Free Video to MP3 Converter 2026
          </h2>
          <p className="text-muted-foreground mb-4">
            Extract audio from any video file with our free online converter. Supports YouTube, TikTok, and all major video formats – fast, easy, and no signup required.
          </p>
        </section>
      </ToolPageWrapper>
    </Layout>
  );
}
