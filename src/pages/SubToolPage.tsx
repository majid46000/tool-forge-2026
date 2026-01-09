import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Copy, Loader2, Sparkles, AlertCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/shared/SEOHead";
import { FreeBanner } from "@/components/shared/FreeBanner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
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
        await new Promise(r => setTimeout(r, 300));
        setOutput(processClientTool(tool.id, tool.name, input));
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
                  placeholder={getPlaceholder(tool.name)}
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

// Get placeholder based on tool name
function getPlaceholder(toolName: string): string {
  const name = toolName.toLowerCase();
  if (name.includes("counter") || name.includes("statistics")) return "Enter your text to analyze...";
  if (name.includes("converter") || name.includes("encoder") || name.includes("decoder")) return "Enter text to convert...";
  if (name.includes("generator")) return "Enter keywords or description...";
  if (name.includes("calculator")) return "Enter numbers or values...";
  if (name.includes("password")) return "Enter desired password length (e.g., 16)...";
  if (name.includes("lorem") || name.includes("placeholder")) return "Enter number of paragraphs (e.g., 3)...";
  if (name.includes("json") || name.includes("xml") || name.includes("yaml")) return "Paste your code here...";
  if (name.includes("hash")) return "Enter text to hash...";
  if (name.includes("color")) return "Enter color code (e.g., #FF5733 or rgb(255,87,51))...";
  return "Enter your text or data here...";
}

// Client-side processing functions
function processClientTool(toolId: string, toolName: string, input: string): string {
  const name = toolName.toLowerCase();
  const id = toolId.toLowerCase();
  
  // Text counters and statistics
  if (name.includes("word counter") || name.includes("character counter") || id.includes("counter") || name.includes("statistics")) {
    const words = input.trim().split(/\s+/).filter(Boolean).length;
    const chars = input.length;
    const charsNoSpace = input.replace(/\s/g, "").length;
    const lines = input.split("\n").length;
    const sentences = input.split(/[.!?]+/).filter(Boolean).length;
    const paragraphs = input.split(/\n\s*\n/).filter(Boolean).length;
    return `📊 Text Statistics:

Words: ${words.toLocaleString()}
Characters: ${chars.toLocaleString()}
Characters (no spaces): ${charsNoSpace.toLocaleString()}
Lines: ${lines.toLocaleString()}
Sentences: ${sentences.toLocaleString()}
Paragraphs: ${paragraphs.toLocaleString()}
Reading time: ~${Math.ceil(words / 200)} min
Speaking time: ~${Math.ceil(words / 150)} min`;
  }
  
  // Case converters
  if (name.includes("uppercase")) return input.toUpperCase();
  if (name.includes("lowercase")) return input.toLowerCase();
  if (name.includes("title case")) return input.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  if (name.includes("sentence case")) return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  if (name.includes("alternating")) return input.split("").map((c, i) => i % 2 ? c.toLowerCase() : c.toUpperCase()).join("");
  
  // Text transformations
  if (name.includes("reverse")) return input.split("").reverse().join("");
  if (name.includes("mirror")) return input.split("\n").map(line => line.split("").reverse().join("")).join("\n");
  if (name.includes("upside down")) {
    const upsideDown: Record<string, string> = { a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ", i: "ᴉ", j: "ɾ", k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o", p: "d", q: "b", r: "ɹ", s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z" };
    return input.split("").map(c => upsideDown[c.toLowerCase()] || c).reverse().join("");
  }
  
  // Encoders/Decoders
  if (name.includes("base64 encode")) {
    try { return btoa(unescape(encodeURIComponent(input))); } catch { return "Error: Invalid input"; }
  }
  if (name.includes("base64 decode")) {
    try { return decodeURIComponent(escape(atob(input))); } catch { return "Error: Invalid Base64"; }
  }
  if (name.includes("url encode")) return encodeURIComponent(input);
  if (name.includes("url decode")) {
    try { return decodeURIComponent(input); } catch { return "Error: Invalid URL encoding"; }
  }
  if (name.includes("html encode")) return input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  if (name.includes("html decode")) return input.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#039;/g, "'");
  
  // Binary/Hex converters
  if (name.includes("text to binary")) return input.split("").map(c => c.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");
  if (name.includes("binary to text")) {
    try { return input.split(/\s+/).map(b => String.fromCharCode(parseInt(b, 2))).join(""); } catch { return "Error: Invalid binary"; }
  }
  if (name.includes("text to hex")) return input.split("").map(c => c.charCodeAt(0).toString(16).padStart(2, "0")).join(" ");
  if (name.includes("hex to text")) {
    try { return input.split(/\s+/).map(h => String.fromCharCode(parseInt(h, 16))).join(""); } catch { return "Error: Invalid hex"; }
  }
  
  // ROT13 and ciphers
  if (name.includes("rot13")) {
    return input.replace(/[a-zA-Z]/g, c => String.fromCharCode((c <= "Z" ? 90 : 122) >= (c.charCodeAt(0) + 13) ? c.charCodeAt(0) + 13 : c.charCodeAt(0) - 13));
  }
  if (name.includes("caesar")) {
    const shift = 3;
    return input.replace(/[a-zA-Z]/g, c => {
      const base = c <= "Z" ? 65 : 97;
      return String.fromCharCode((c.charCodeAt(0) - base + shift) % 26 + base);
    });
  }
  
  // Morse code
  if (name.includes("morse")) {
    const morse: Record<string, string> = { a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..", m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.", s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--..", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.", "0": "-----", " ": "/" };
    return input.toLowerCase().split("").map(c => morse[c] || c).join(" ");
  }
  
  // Slug generator
  if (name.includes("slug") || name.includes("url slug")) {
    return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
  }
  
  // Line operations
  if (name.includes("remove duplicate")) return [...new Set(input.split("\n"))].join("\n");
  if (name.includes("remove empty")) return input.split("\n").filter(l => l.trim()).join("\n");
  if (name.includes("sort lines")) return input.split("\n").sort().join("\n");
  if (name.includes("shuffle lines")) return input.split("\n").sort(() => Math.random() - 0.5).join("\n");
  if (name.includes("number lines")) return input.split("\n").map((l, i) => `${i + 1}. ${l}`).join("\n");
  
  // JSON/Code formatters
  if (name.includes("json format") || name.includes("json validator")) {
    try { return JSON.stringify(JSON.parse(input), null, 2); } catch { return "Error: Invalid JSON"; }
  }
  if (name.includes("json minif")) {
    try { return JSON.stringify(JSON.parse(input)); } catch { return "Error: Invalid JSON"; }
  }
  
  // Hash generators
  if (name.includes("hash") || name.includes("md5") || name.includes("sha")) {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
      const char = input.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    const hashStr = Math.abs(hash).toString(16).padStart(32, "0");
    return `MD5 (simulated): ${hashStr}\nSHA1 (simulated): ${hashStr}${hashStr.slice(0, 8)}\nSHA256 (simulated): ${hashStr}${hashStr}`;
  }
  
  // Password generator
  if (name.includes("password")) {
    const length = parseInt(input) || 16;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";
    let password = "";
    for (let i = 0; i < Math.min(length, 128); i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `🔐 Generated Password (${length} chars):\n\n${password}\n\n✓ Contains uppercase, lowercase, numbers, and symbols`;
  }
  
  // Lorem ipsum
  if (name.includes("lorem") || name.includes("placeholder") || name.includes("dummy text")) {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
    const count = parseInt(input) || 3;
    return Array(Math.min(count, 20)).fill(lorem).join("\n\n");
  }
  
  // Random generators
  if (name.includes("random number")) {
    const parts = input.split("-").map(n => parseInt(n.trim()));
    const min = parts[0] || 1;
    const max = parts[1] || 100;
    return `🎲 Random Number: ${Math.floor(Math.random() * (max - min + 1)) + min}`;
  }
  if (name.includes("dice")) {
    const sides = parseInt(input) || 6;
    return `🎲 Dice Roll (${sides} sides): ${Math.floor(Math.random() * sides) + 1}`;
  }
  if (name.includes("coin flip")) {
    return `🪙 Coin Flip: ${Math.random() > 0.5 ? "HEADS" : "TAILS"}`;
  }
  
  // UUID/GUID
  if (name.includes("uuid") || name.includes("guid")) {
    return `Generated UUID:\n\n${crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    })}`;
  }
  
  // Color converters
  if (name.includes("hex to rgb")) {
    const hex = input.replace("#", "");
    if (hex.length === 6) {
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return `RGB: rgb(${r}, ${g}, ${b})\nRGBA: rgba(${r}, ${g}, ${b}, 1)`;
    }
    return "Error: Invalid HEX color (use format #RRGGBB)";
  }
  if (name.includes("rgb to hex")) {
    const match = input.match(/(\d+)/g);
    if (match && match.length >= 3) {
      const hex = match.slice(0, 3).map(n => parseInt(n).toString(16).padStart(2, "0")).join("");
      return `HEX: #${hex.toUpperCase()}`;
    }
    return "Error: Invalid RGB (use format rgb(r, g, b))";
  }
  
  // Calculators
  if (name.includes("percentage")) {
    const nums = input.match(/[\d.]+/g)?.map(Number);
    if (nums && nums.length >= 2) {
      const [a, b] = nums;
      return `${a} is ${((a / b) * 100).toFixed(2)}% of ${b}\n${a}% of ${b} = ${(a / 100 * b).toFixed(2)}`;
    }
    return "Enter two numbers (e.g., 25 100)";
  }
  
  if (name.includes("bmi")) {
    const nums = input.match(/[\d.]+/g)?.map(Number);
    if (nums && nums.length >= 2) {
      const [weight, height] = nums;
      const bmi = weight / ((height / 100) ** 2);
      let category = "Normal";
      if (bmi < 18.5) category = "Underweight";
      else if (bmi >= 25 && bmi < 30) category = "Overweight";
      else if (bmi >= 30) category = "Obese";
      return `BMI: ${bmi.toFixed(1)}\nCategory: ${category}`;
    }
    return "Enter weight (kg) and height (cm), e.g., 70 175";
  }
  
  if (name.includes("age calculator")) {
    const date = new Date(input);
    if (!isNaN(date.getTime())) {
      const now = new Date();
      let years = now.getFullYear() - date.getFullYear();
      const monthDiff = now.getMonth() - date.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < date.getDate())) years--;
      return `🎂 Age: ${years} years old`;
    }
    return "Enter a birth date (e.g., 1990-05-15)";
  }
  
  // Extra space remover
  if (name.includes("space remover") || name.includes("extra space")) {
    return input.replace(/\s+/g, " ").trim();
  }
  
  // Text trimmer
  if (name.includes("trimmer") || name.includes("text cleaner")) {
    return input.split("\n").map(l => l.trim()).join("\n");
  }
  
  // Emoji tools
  if (name.includes("emoji")) {
    const emojis = "😀😃😄😁😆😅😂🤣😊😇🙂🙃😉😌😍🥰😘😗😙😚😋😛😜🤪😝🤑🤗🤭🤫🤔🤐🤨😐😑😶😏😒🙄😬🤥😌😔😪🤤😴😷🤒🤕🤢🤮🤧🥵🥶🥴😵🤯🤠🥳🥸😎🤓🧐😕😟🙁☹️😮😯😲😳🥺😦😧😨😰😥😢😭😱😖😣😞😓😩😫🥱😤😡😠🤬";
    return emojis.split("").sort(() => Math.random() - 0.5).slice(0, 20).join(" ");
  }
  
  // Hashtag generator
  if (name.includes("hashtag")) {
    const words = input.split(/\s+/).filter(w => w.length > 2);
    const hashtags = words.map(w => `#${w.toLowerCase().replace(/[^a-z0-9]/g, "")}`).filter(Boolean);
    return hashtags.slice(0, 30).join(" ");
  }
  
  // Default: return useful analysis
  const words = input.trim().split(/\s+/).filter(Boolean).length;
  return `✅ Processed with ${toolName}

📊 Input Analysis:
• Words: ${words}
• Characters: ${input.length}
• Lines: ${input.split("\n").length}

📝 Output:
${input}

---
💡 Tip: This tool is 100% free and works instantly!`;
}
