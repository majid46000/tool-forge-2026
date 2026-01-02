import { useState } from "react";
import { Music, Download, Upload, AlertCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ToolPageWrapper } from "@/components/shared/ToolPageWrapper";
import { InstructionsCard } from "@/components/shared/InstructionsCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

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
      <ToolPageWrapper
        title="Video to MP3 Converter – Convert Videos to Audio Files"
        description="Convert any video into MP3 audio files easily and quickly."
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
            "Multiple video format support",
            "High-quality audio extraction",
            "Fast conversion speeds",
            "No file size limits",
          ]}
        />

        <div className="bg-card rounded-xl border border-border p-6 shadow-card animate-slide-up">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Video URL
              </label>
              <Input
                placeholder="https://youtube.com/watch?v=... or any video URL"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  setFile(null);
                }}
              />
            </div>

            <div className="relative">
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">OR</span>
                <div className="flex-1 border-t border-border"></div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
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
                  <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
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
                  <Download className="h-4 w-4" />
                  Convert to MP3
                </>
              )}
            </Button>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-secondary/50 border border-border flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Server-Side Processing Required</p>
              <p>
                This tool requires backend implementation for actual video-to-audio conversion.
                The interface demonstrates the user flow and input validation.
              </p>
            </div>
          </div>
        </div>
      </ToolPageWrapper>
    </Layout>
  );
}
