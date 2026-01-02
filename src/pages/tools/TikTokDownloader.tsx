import { useState } from "react";
import { Video, Download, AlertCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ToolPageWrapper } from "@/components/shared/ToolPageWrapper";
import { InstructionsCard } from "@/components/shared/InstructionsCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function TikTokDownloader() {
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState("mp4");
  const [processing, setProcessing] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    if (!url.trim()) {
      toast({
        title: "Please enter a URL",
        description: "Paste a valid TikTok video link.",
        variant: "destructive",
      });
      return;
    }

    if (!url.includes("tiktok.com")) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid TikTok video URL.",
        variant: "destructive",
      });
      return;
    }

    setProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setProcessing(false);

    toast({
      title: "Backend Required",
      description: "This feature requires server-side processing. The video URL was validated successfully.",
    });
  };

  return (
    <Layout>
      <ToolPageWrapper
        title="TikTok Downloader – Free Video Downloads Without Watermark"
        description="Download TikTok videos quickly and safely without watermarks using our free tool."
        icon={Video}
      >
        <InstructionsCard
          steps={[
            "Copy the TikTok video link from the app",
            "Paste the link in the input field below",
            "Select your preferred format (MP4 or Audio)",
            "Click Download to save the video",
          ]}
          tips={[
            "Use for personal or educational purposes only",
            "Respect content creators' copyright",
            "Some videos may have download restrictions",
          ]}
          features={[
            "Fast download speeds",
            "No watermark on videos",
            "Works on all devices",
            "MP4 and audio formats",
          ]}
        />

        <div className="bg-card rounded-xl border border-border p-6 shadow-card animate-slide-up">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                TikTok Video URL
              </label>
              <Input
                placeholder="https://www.tiktok.com/@username/video/..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Format
              </label>
              <Select value={format} onValueChange={setFormat}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mp4">MP4 Video</SelectItem>
                  <SelectItem value="mp3">MP3 Audio</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button onClick={handleDownload} disabled={processing}>
              {processing ? (
                "Processing..."
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  Download {format.toUpperCase()}
                </>
              )}
            </Button>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-secondary/50 border border-border flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Server-Side Processing Required</p>
              <p>
                This tool requires backend API integration to fetch and process TikTok videos.
                The input validation works client-side, but actual downloading needs server implementation.
              </p>
            </div>
          </div>
        </div>
      </ToolPageWrapper>
    </Layout>
  );
}
