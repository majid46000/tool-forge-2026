import { useState } from "react";
import { FileUp, Download, Upload, FileText, AlertCircle } from "lucide-react";
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
import heroPdfConverter from "@/assets/hero-pdf-converter.jpg";

// JSON-LD for SoftwareApplication
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Free PDF to DOC Converter 2026",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online PDF to DOC converter 2026. Convert PDF to Word and Word to PDF – fast, easy, no signup required.",
  "url": "https://toolhub2026.com/pdf-doc-converter"
};

export default function PDFDocConverter() {
  const [file, setFile] = useState<File | null>(null);
  const [outputFormat, setOutputFormat] = useState("pdf");
  const [processing, setProcessing] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!validTypes.includes(selectedFile.type)) {
        toast({
          title: "Invalid file type",
          description: "Please select a PDF or DOC/DOCX file.",
          variant: "destructive",
        });
        return;
      }
      setFile(selectedFile);

      if (selectedFile.type === "application/pdf") {
        setOutputFormat("docx");
      } else {
        setOutputFormat("pdf");
      }
    }
  };

  const handleConvert = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please upload a file to convert.",
        variant: "destructive",
      });
      return;
    }

    setProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setProcessing(false);

    toast({
      title: "Conversion Demo",
      description: "In production, the file would be converted and downloaded. This is a UI demonstration.",
    });
  };

  return (
    <Layout>
      <SEOHead
        title="Free PDF to DOC Converter 2026 – Convert PDF to Word Online"
        description="Free online PDF to DOC converter 2026. Convert PDF to Word and Word to PDF – fast, easy, preserves formatting, no signup required."
        canonical="/pdf-doc-converter"
        jsonLd={jsonLd}
      />
      
      <ToolPageWrapper
        title="Free PDF to DOC Converter 2026"
        description="Convert PDF to Word and Word to PDF for free. Fast, easy, and preserves formatting – no signup required."
        icon={FileUp}
        heroImage={heroPdfConverter}
        heroAlt="Free PDF to DOC Word Converter 2026 Hero Banner"
      >
        <InstructionsCard
          steps={[
            "Upload your PDF or DOC/DOCX file",
            "Select the output format",
            "Click Convert to process the file",
            "Download your converted document",
          ]}
          tips={[
            "Keep original formatting when possible",
            "Check converted files before sharing",
            "Use high-quality source files",
          ]}
          features={[
            "Free PDF to DOC converter 2026",
            "DOC to PDF conversion",
            "Preserves formatting",
            "Fast processing",
          ]}
        />

        <div className="glass-card p-8 animate-slide-up">
          <div className="space-y-6">
            <div>
              <label htmlFor="doc-upload" className="block text-sm font-medium text-foreground mb-2">
                Upload Document
              </label>
              <div className="border-2 border-dashed border-white/20 rounded-xl p-10 text-center hover:border-cyan-500/50 transition-colors bg-white/5">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="doc-upload"
                />
                <label htmlFor="doc-upload" className="cursor-pointer">
                  {file ? (
                    <div className="flex items-center justify-center gap-4">
                      <FileText className="h-12 w-12 text-cyan-400" aria-hidden="true" />
                      <div className="text-left">
                        <p className="text-sm font-medium text-foreground">{file.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {(file.size / 1024).toFixed(1)} KB
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" aria-hidden="true" />
                      <p className="text-sm font-medium text-foreground">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        PDF, DOC, or DOCX files
                      </p>
                    </>
                  )}
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="format-select" className="block text-sm font-medium text-foreground mb-2">
                Output Format
              </label>
              <Select value={outputFormat} onValueChange={setOutputFormat}>
                <SelectTrigger id="format-select" className="w-full md:w-48 bg-white/5 border-white/10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="glass-card">
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="docx">DOCX</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={handleConvert} 
              disabled={processing || !file}
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {processing ? (
                "Converting..."
              ) : (
                <>
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Convert to {outputFormat.toUpperCase()}
                </>
              )}
            </Button>
          </div>

          <div className="mt-8 p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-start gap-4">
            <AlertCircle className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Implementation Note</p>
              <p>
                Full document conversion requires backend libraries like pdf-lib or LibreOffice.
                This interface demonstrates the user flow for the conversion process.
              </p>
            </div>
          </div>
        </div>

        {/* Additional SEO Content */}
        <section className="mt-12 prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Best Free PDF to Word Converter 2026
          </h2>
          <p className="text-muted-foreground mb-4">
            Convert PDF to DOC and Word to PDF for free online. Our converter preserves formatting and works with all document types – no signup required.
          </p>
        </section>
      </ToolPageWrapper>
    </Layout>
  );
}
