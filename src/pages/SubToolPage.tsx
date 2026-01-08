import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Copy, Loader2, Sparkles, AlertCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/shared/SEOHead";
import { FreeBanner } from "@/components/shared/FreeBanner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { getHubById, getToolById } from "@/data/toolHubs";
import { checkRateLimit, incrementUsage, getRemainingUses } from "@/lib/rateLimit";
import { supabase } from "@/integrations/supabase/client";

export default function SubToolPage() {
  const { hubId, toolId } = useParams<{ hubId: string; toolId: string }>();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const hub = hubId ? getHubById(hubId) : null;
  const tool = hubId && toolId ? getToolById(hubId, toolId) : null;
  
  if (!hub || !tool) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Tool Not Found</h1>
          <Link to="/" className="text-cyan-400 hover:underline">Return Home</Link>
        </div>
      </Layout>
    );
  }
  
  const Icon = tool.icon;
  const isAI = tool.type === "ai";
  const remaining = getRemainingUses();
  
  const handleGenerate = async () => {
    if (!input.trim()) {
      toast({
        title: "Please enter some input",
        description: "Provide text or data to process.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    setOutput("");
    
    try {
      if (isAI) {
        // Check rate limit for AI tools
        const rateCheck = checkRateLimit();
        if (!rateCheck.allowed) {
          toast({
            title: "Daily limit reached",
            description: rateCheck.message,
            variant: "destructive",
          });
          setLoading(false);
          return;
        }
        
        // Call AI edge function
        const { data, error } = await supabase.functions.invoke("generate-ai-content", {
          body: { type: "general", prompt: `Tool: ${tool.name}\n\nUser input: ${input}` },
        });
        
        if (error) throw new Error(error.message);
        if (data?.error) throw new Error(data.error);
        
        incrementUsage();
        setOutput(data.content);
      } else {
        // Client-side processing
        await new Promise(r => setTimeout(r, 500));
        setOutput(processClientTool(tool.id, input));
      }
      
      toast({
        title: "Success!",
        description: "Your content has been processed.",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Processing failed",
        description: error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    toast({ title: "Copied!", description: "Output copied to clipboard." });
  };
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.name,
    "description": tool.description,
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "url": `https://toolforge2026.com/hub/${hubId}/${toolId}`
  };
  
  return (
    <Layout>
      <SEOHead
        title={`${tool.name} – Free Online Tool | ToolForge 2026`}
        description={`${tool.description} 100% free, no signup required.`}
        canonical={`/hub/${hubId}/${toolId}`}
        jsonLd={jsonLd}
      />
      
      <FreeBanner />
      
      <div className="container py-12">
        <Link to={hub.path} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ChevronLeft className="h-4 w-4" />
          Back to {hub.name}
        </Link>
        
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${hub.color}`}>
              <Icon className="h-7 w-7 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-foreground">{tool.name}</h1>
                {isAI && (
                  <span className="px-2 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    AI
                  </span>
                )}
              </div>
              <p className="text-muted-foreground">{tool.description}</p>
            </div>
          </div>
          
          {/* Rate limit warning for AI tools */}
          {isAI && (
            <div className="glass-card p-4 mb-6 flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{remaining} AI uses</span> remaining today. 
                Resets daily – always free!
              </p>
            </div>
          )}
          
          {/* Tool Interface */}
          <div className="glass-card p-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="tool-input" className="block text-sm font-medium text-foreground mb-2">
                  Input
                </label>
                <Textarea
                  id="tool-input"
                  placeholder="Enter your text or data here..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="min-h-32 bg-white/5 border-white/10 focus:border-cyan-500/50"
                />
              </div>
              
              <Button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-semibold py-3 rounded-xl"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  <>
                    {isAI && <Sparkles className="h-4 w-4 mr-2" />}
                    Process
                  </>
                )}
              </Button>
            </div>
            
            {output && (
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-foreground">Output</h2>
                  <Button variant="outline" size="sm" onClick={handleCopy} className="glass border-white/20">
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <pre className="whitespace-pre-wrap text-foreground font-sans text-sm leading-relaxed">
                    {output}
                  </pre>
                </div>
              </div>
            )}
          </div>
          
          {/* SEO Content */}
          <section className="mt-12 prose prose-sm max-w-none">
            <h2 className="text-xl font-bold text-foreground mb-3">
              About {tool.name}
            </h2>
            <p className="text-muted-foreground">
              {tool.description} This tool is part of our {hub.name}, offering {hub.subTools.length}+ free tools 
              for content creators, marketers, and developers. No signup required – just enter your data and get instant results.
            </p>
            <ul className="text-muted-foreground mt-4 space-y-1">
              <li>✓ 100% free – no hidden costs</li>
              <li>✓ No signup or login required</li>
              <li>✓ Works on all devices</li>
              <li>✓ Instant processing</li>
              {isAI && <li>✓ AI-powered for better results</li>}
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}

// Client-side processing functions
function processClientTool(toolId: string, input: string): string {
  // Generic processing for client-side tools
  const lowerInput = input.toLowerCase();
  
  if (toolId.includes("word-counter") || toolId.includes("counter")) {
    const words = input.trim().split(/\s+/).filter(Boolean).length;
    const chars = input.length;
    const charsNoSpace = input.replace(/\s/g, "").length;
    const lines = input.split("\n").length;
    const sentences = input.split(/[.!?]+/).filter(Boolean).length;
    return `📊 Text Statistics:\n\nWords: ${words}\nCharacters: ${chars}\nCharacters (no spaces): ${charsNoSpace}\nLines: ${lines}\nSentences: ${sentences}\nReading time: ~${Math.ceil(words / 200)} min`;
  }
  
  if (toolId.includes("uppercase")) {
    return input.toUpperCase();
  }
  
  if (toolId.includes("lowercase")) {
    return input.toLowerCase();
  }
  
  if (toolId.includes("reverse")) {
    return input.split("").reverse().join("");
  }
  
  if (toolId.includes("title-case")) {
    return input.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  }
  
  if (toolId.includes("base64-encode")) {
    try {
      return btoa(input);
    } catch {
      return "Error: Invalid input for Base64 encoding";
    }
  }
  
  if (toolId.includes("base64-decode")) {
    try {
      return atob(input);
    } catch {
      return "Error: Invalid Base64 string";
    }
  }
  
  if (toolId.includes("url-encode")) {
    return encodeURIComponent(input);
  }
  
  if (toolId.includes("url-decode")) {
    try {
      return decodeURIComponent(input);
    } catch {
      return "Error: Invalid URL-encoded string";
    }
  }
  
  if (toolId.includes("slug") || toolId.includes("text-to-slug")) {
    return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
  }
  
  if (toolId.includes("remove-duplicate")) {
    return [...new Set(input.split("\n"))].join("\n");
  }
  
  if (toolId.includes("sort-lines")) {
    return input.split("\n").sort().join("\n");
  }
  
  if (toolId.includes("json-format") || toolId.includes("json-formatter")) {
    try {
      return JSON.stringify(JSON.parse(input), null, 2);
    } catch {
      return "Error: Invalid JSON";
    }
  }
  
  if (toolId.includes("json-minif")) {
    try {
      return JSON.stringify(JSON.parse(input));
    } catch {
      return "Error: Invalid JSON";
    }
  }
  
  if (toolId.includes("hash") || toolId.includes("md5") || toolId.includes("sha")) {
    // Simple hash simulation (not cryptographically secure)
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
      const char = input.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return `Hash: ${Math.abs(hash).toString(16).padStart(8, "0")}`;
  }
  
  if (toolId.includes("password-gen")) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    const length = parseInt(input) || 16;
    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `Generated Password (${length} chars):\n\n${password}`;
  }
  
  if (toolId.includes("lorem") || toolId.includes("placeholder")) {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.";
    const paragraphs = parseInt(input) || 3;
    return Array(paragraphs).fill(lorem).join("\n\n");
  }
  
  if (toolId.includes("qr")) {
    return `QR Code Data: ${input}\n\n[QR Code would be generated here]\n\nUse a dedicated QR library for actual QR generation.`;
  }
  
  // Default: return some useful info
  const words = input.trim().split(/\s+/).filter(Boolean).length;
  return `✅ Processed successfully!\n\nInput: ${words} words, ${input.length} characters\n\nOutput:\n${input}\n\n---\nThis is a demo output. The full tool functionality is available in the complete version.`;
}
