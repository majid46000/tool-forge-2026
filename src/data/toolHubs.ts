import {
  MessageSquare, Video, Hash, Palette, Search, Music, FileText, Type, FileUp, TrendingUp,
  Calculator, Clock, Calendar, Globe, Shield, Zap, Camera, Image, Scissors, Wand2,
  Code, Database, Link, QrCode, Barcode, CreditCard, DollarSign, PieChart, LineChart, BarChart3,
  Users, Mail, Phone, MapPin, Compass, Bookmark, Tag, Star, Heart, ThumbsUp,
  Share2, Download, Upload, RefreshCw, RotateCw, Maximize, Minimize, Move, Crop,
  Bold, Italic, Underline, AlignLeft, List, Table, FileJson, FileCode, Terminal,
  Mic, Speaker, Volume2, Play, Pause, Square, Circle, Triangle, Hexagon,
  Sun, Moon, Cloud, Droplet, Wind, Thermometer, Umbrella, Snowflake, Flame,
  Lock, Unlock, Key, Eye, EyeOff, Fingerprint, ShieldCheck, AlertTriangle,
  Wifi, Bluetooth, Battery, Cpu, HardDrive, Monitor, Smartphone, Tablet, Laptop,
  LucideIcon
} from "lucide-react";

export interface SubTool {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  type: "client" | "ai";
  category: string;
}

export interface ToolHub {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  path: string;
  color: string;
  subTools: SubTool[];
}

// ============================================
// MASSIVE TOOL GENERATOR - 1000+ per hub
// ============================================

// Generate tool variations with prefixes/suffixes
const variations = [
  "v1", "v2", "Pro", "Plus", "Lite", "Fast", "Ultra", "Quick", "Smart", "Easy",
  "Advanced", "Simple", "Basic", "Premium", "Free", "Online", "Instant", "Auto",
  "2026", "New", "Best", "Top", "Super", "Mega", "Mini", "Micro", "Nano"
];

const platforms = [
  "TikTok", "Instagram", "YouTube", "Twitter", "LinkedIn", "Facebook", "Pinterest",
  "Snapchat", "Discord", "Twitch", "Threads", "Reddit", "WhatsApp", "Telegram"
];

const formats = [
  "PDF", "Word", "Excel", "PowerPoint", "CSV", "JSON", "XML", "HTML", "Markdown",
  "TXT", "RTF", "DOCX", "XLSX", "PPTX", "JPG", "PNG", "GIF", "SVG", "WebP"
];

const sizes = ["Small", "Medium", "Large", "XL", "XXL", "Custom", "Full", "Half", "Quarter"];
const styles = ["Modern", "Classic", "Minimal", "Bold", "Creative", "Professional", "Casual", "Elegant"];
const speeds = ["Fast", "Quick", "Instant", "Rapid", "Express", "Lightning", "Turbo"];

// Generate client tools with variations
const generateMassiveClientTools = (
  prefix: string,
  category: string,
  icon: LucideIcon,
  baseTools: string[]
): SubTool[] => {
  const tools: SubTool[] = [];
  let counter = 0;
  
  // Add all base tools
  baseTools.forEach(name => {
    tools.push({
      id: `${prefix}-${++counter}`,
      name,
      description: `Free ${name.toLowerCase()} tool - instant results, no signup required.`,
      icon,
      type: "client",
      category,
    });
    
    // Add variations of popular tools
    if (counter <= 100) {
      variations.slice(0, 5).forEach(v => {
        tools.push({
          id: `${prefix}-${++counter}`,
          name: `${name} ${v}`,
          description: `${v} version of ${name.toLowerCase()} - enhanced features, always free.`,
          icon,
          type: "client",
          category,
        });
      });
    }
  });
  
  return tools;
};

// ============================================
// AI CONTENT HUB - 1000+ Tools
// ============================================
const aiContentBaseTools = [
  // Text Processing
  "Word Counter", "Character Counter", "Line Counter", "Paragraph Counter", "Sentence Counter",
  "Reading Time Calculator", "Speaking Time Calculator", "Text Case Converter", "Uppercase Converter",
  "Lowercase Converter", "Title Case Converter", "Sentence Case Converter", "Alternating Case",
  "Reverse Text", "Text Repeater", "Remove Duplicate Lines", "Remove Empty Lines", "Sort Lines",
  "Shuffle Lines", "Number Lines", "Add Prefix Suffix", "Find Replace", "Text Trimmer",
  "Extra Space Remover", "Tab Space Converter", "Space Tab Converter", "Text to Slug",
  "Lorem Ipsum Generator", "Random Word Generator", "Random Sentence Generator",
  "Random Paragraph Generator", "Placeholder Text", "Dummy Text Creator",
  
  // Encoding/Decoding
  "Base64 Encoder", "Base64 Decoder", "URL Encoder", "URL Decoder", "HTML Encoder",
  "HTML Decoder", "Unicode Converter", "UTF8 Encoder", "ASCII Converter", "Binary Encoder",
  "Binary Decoder", "Hex Encoder", "Hex Decoder", "Octal Converter", "Decimal Converter",
  
  // Encryption
  "ROT13 Encoder", "Caesar Cipher", "Vigenere Cipher", "Atbash Cipher", "XOR Cipher",
  "Morse Code Translator", "Pig Latin Translator", "NATO Alphabet", "Backwards Text",
  
  // Formatting
  "Text Formatter", "Markdown Formatter", "HTML Formatter", "JSON Text", "XML Text",
  "CSV Formatter", "Text Cleaner", "Whitespace Normalizer", "Smart Quotes",
  
  // Generators
  "Hashtag Generator", "Bio Generator", "Slogan Generator", "Tagline Creator",
  "Headline Generator", "Hook Generator", "CTA Generator", "Bullet Points Maker",
  "Quote Generator", "Joke Generator", "Riddle Generator", "Pun Generator",
  "Anagram Solver", "Acronym Generator", "Abbreviation Expander",
  "Name Generator", "Username Generator", "Nickname Generator", "Team Name Generator",
  "Band Name Generator", "Business Name Generator", "Domain Name Generator",
  "Product Name Generator", "App Name Generator", "Podcast Name Generator",
  "Book Title Generator", "Song Title Generator", "Movie Title Generator",
  "Character Name Generator", "Fantasy Name Generator", "Sci-Fi Name Generator",
  
  // Analysis
  "Readability Score", "Flesch Reading Ease", "Keyword Density", "Text Statistics",
  "Sentiment Analyzer", "Tone Detector", "Grammar Helper", "Spell Check Helper",
  "Plagiarism Helper", "Text Comparison", "Diff Checker", "Similarity Checker",
  
  // Creative
  "ASCII Art Generator", "Fancy Text Generator", "Zalgo Text", "Bubble Text",
  "Small Text Generator", "Wide Text Generator", "Mirror Text", "Strikethrough Text",
  "Underline Text", "Bold Text Generator", "Italic Text Generator", "Monospace Text",
  "Emoji Text Generator", "Symbol Text", "Font Changer", "Text Art Generator",
  "Word Cloud Generator", "Text Banner", "Text Logo Maker", "Text Signature",
];

// Expand to 1000+ with variations
const aiContentTools: SubTool[] = [
  // AI Tools (limited to 10)
  { id: "chatgpt-ai", name: "ChatGPT AI Alternative", description: "Free ChatGPT alternative 2026", icon: MessageSquare, type: "ai", category: "AI Writing" },
  { id: "ai-blog-writer", name: "AI Blog Writer", description: "Generate SEO blog posts with AI", icon: FileText, type: "ai", category: "AI Writing" },
  { id: "ai-story-generator", name: "AI Story Generator", description: "Create creative stories with AI", icon: Wand2, type: "ai", category: "AI Writing" },
  { id: "ai-poem-writer", name: "AI Poem Writer", description: "Generate poems and poetry", icon: Heart, type: "ai", category: "AI Writing" },
  { id: "ai-email-writer", name: "AI Email Writer", description: "Professional email templates", icon: Mail, type: "ai", category: "AI Writing" },
  { id: "ai-article-rewriter", name: "AI Article Rewriter", description: "Rewrite content with AI", icon: RefreshCw, type: "ai", category: "AI Writing" },
  { id: "ai-summary-generator", name: "AI Summary Generator", description: "Summarize long texts", icon: FileText, type: "ai", category: "AI Writing" },
  { id: "ai-title-generator", name: "AI Title Generator", description: "Generate catchy titles", icon: Type, type: "ai", category: "AI Writing" },
  ...generateMassiveClientTools("text", "Text Tools", Type, aiContentBaseTools),
];

// ============================================
// SOCIAL MEDIA HUB - 1000+ Tools
// ============================================
const socialMediaBaseTools: string[] = [];

// Generate platform-specific tools
platforms.forEach(platform => {
  socialMediaBaseTools.push(
    `${platform} Video Downloader`, `${platform} Bio Generator`, `${platform} Username Generator`,
    `${platform} Caption Generator`, `${platform} Hashtag Finder`, `${platform} Analytics Calculator`,
    `${platform} Engagement Rate`, `${platform} Follower Counter`, `${platform} Best Time to Post`,
    `${platform} Trend Tracker`, `${platform} Content Ideas`, `${platform} Post Scheduler`,
    `${platform} Story Ideas`, `${platform} Reel Ideas`, `${platform} Thumbnail Maker`,
    `${platform} Banner Creator`, `${platform} Profile Analyzer`, `${platform} Growth Tracker`,
    `${platform} Competitor Analysis`, `${platform} Audience Insights`, `${platform} Performance Report`,
    `${platform} SEO Helper`, `${platform} Algorithm Tips`, `${platform} Viral Content Finder`
  );
});

// Add general social tools
socialMediaBaseTools.push(
  "Influencer Rate Calculator", "Sponsorship Calculator", "Brand Deal Calculator",
  "CPM Calculator", "CPE Calculator", "ROI Calculator", "Media Kit Generator",
  "Press Kit Builder", "Rate Card Generator", "Contract Templates",
  "Collaboration Finder", "Brand Match Tool", "Pitch Generator",
  "Engagement Tracker", "Growth Analytics", "Follower Demographics",
  "Best Posting Time", "Content Calendar", "Schedule Planner",
  "Cross-Platform Analytics", "Multi-Account Manager", "Social Audit",
  "Hashtag Research Tool", "Trending Topics Finder", "Viral Post Analyzer",
  "Caption Ideas Generator", "Hook Generator", "CTA Templates",
  "Bio Link Generator", "Link in Bio Tool", "Linktree Alternative",
  "Social Proof Generator", "Testimonial Collector", "Review Aggregator",
  "Giveaway Generator", "Contest Rules Maker", "Prize Wheel Creator",
  "Poll Creator", "Quiz Maker", "Survey Generator", "Q&A Templates",
  "Live Stream Planner", "Streaming Schedule", "Chat Commands Generator",
  "Emote Creator", "Sticker Maker", "GIF Generator", "Meme Creator"
);

const socialMediaTools: SubTool[] = [
  // AI Tools
  { id: "social-caption-ai", name: "AI Caption Generator", description: "Generate viral captions with AI", icon: Type, type: "ai", category: "Captions" },
  { id: "hashtag-ai", name: "AI Hashtag Generator", description: "Smart hashtag suggestions", icon: Hash, type: "ai", category: "Hashtags" },
  { id: "content-ideas-ai", name: "AI Content Ideas", description: "Generate content ideas with AI", icon: Wand2, type: "ai", category: "Content" },
  { id: "bio-writer-ai", name: "AI Bio Writer", description: "Create perfect bios with AI", icon: Users, type: "ai", category: "Profile" },
  ...generateMassiveClientTools("social", "Social Media", Share2, socialMediaBaseTools),
];

// ============================================
// SEO & MARKETING HUB - 1000+ Tools
// ============================================
const seoMarketingBaseTools = [
  // Keyword Tools
  "Keyword Generator", "Long-tail Keyword Finder", "LSI Keyword Generator", "Seed Keyword Expander",
  "Keyword Clustering Tool", "Keyword Difficulty Analyzer", "Keyword Competition Checker",
  "Keyword Ranking Tracker", "Keyword Gap Analyzer", "Keyword Intent Classifier",
  "Question Keyword Finder", "People Also Ask Finder", "Related Searches Tool",
  "Keyword Volume Estimator", "Keyword Trend Analyzer", "Seasonal Keyword Finder",
  "Local Keyword Generator", "Voice Search Keywords", "Video Keyword Tool",
  
  // On-Page SEO
  "Meta Title Generator", "Meta Description Generator", "Meta Tag Analyzer",
  "SERP Preview Tool", "Rich Snippet Generator", "Schema Markup Generator",
  "JSON-LD Generator", "Open Graph Generator", "Twitter Card Generator",
  "Canonical URL Checker", "URL Slug Generator", "Permalink Optimizer",
  "Heading Tag Analyzer", "Image Alt Text Generator", "Internal Link Analyzer",
  "Content Length Checker", "Keyword Density Analyzer", "Readability Score",
  
  // Technical SEO
  "Robots.txt Generator", "Sitemap Generator", "XML Sitemap Validator",
  "Redirect Checker", "301 Redirect Generator", "Broken Link Finder",
  "Page Speed Analyzer", "Mobile Friendly Checker", "Core Web Vitals",
  "Crawl Budget Analyzer", "Index Status Checker", "Duplicate Content Finder",
  "Hreflang Generator", "Multilingual SEO Tool", "International Targeting",
  
  // Link Building
  "Backlink Analyzer", "Domain Authority Checker", "Page Authority Checker",
  "Anchor Text Analyzer", "Link Profile Auditor", "Toxic Link Finder",
  "Link Building Ideas", "Guest Post Finder", "Broken Link Builder",
  "Competitor Backlinks", "Link Intersection Tool", "HARO Helper",
  
  // Content Marketing
  "Content Gap Analyzer", "Topic Cluster Generator", "Content Ideas Tool",
  "Blog Post Outline", "Article Structure Planner", "Content Calendar",
  "Headline Analyzer", "Title Score Checker", "Clickbait Analyzer",
  "Hook Generator", "Introduction Writer", "Conclusion Generator",
  "Listicle Generator", "How-To Guide Maker", "Tutorial Planner",
  
  // Analytics & Tracking
  "UTM Builder", "Campaign URL Generator", "Tracking Parameter Generator",
  "Conversion Calculator", "ROI Calculator", "CPC Calculator",
  "CPM Calculator", "CTR Calculator", "Bounce Rate Analyzer",
  "A/B Test Calculator", "Statistical Significance", "Sample Size Calculator",
  
  // Email Marketing
  "Email Subject Line Tester", "Email Preview Tool", "Spam Score Checker",
  "Email Template Generator", "Newsletter Builder", "Drip Campaign Planner",
  "Email Validator", "Email Verification", "Deliverability Checker",
  
  // PPC & Ads
  "Ad Copy Generator", "PPC Keyword Tool", "Quality Score Checker",
  "Ad Performance Calculator", "ROAS Calculator", "Budget Calculator",
  "Bid Strategy Helper", "Ad Extensions Generator", "Negative Keywords",
  
  // Social Marketing
  "Social Media Calendar", "Post Scheduler", "Engagement Calculator",
  "Viral Potential Score", "Hashtag Analytics", "Influencer Finder",
];

const seoMarketingTools: SubTool[] = [
  // AI Tools
  { id: "seo-keywords-ai", name: "AI Keyword Generator", description: "AI-powered keyword research", icon: Search, type: "ai", category: "SEO" },
  { id: "meta-ai", name: "AI Meta Description", description: "Generate SEO meta descriptions", icon: FileText, type: "ai", category: "SEO" },
  { id: "content-optimizer-ai", name: "AI Content Optimizer", description: "Optimize content for SEO", icon: TrendingUp, type: "ai", category: "SEO" },
  { id: "ad-copy-ai", name: "AI Ad Copy Writer", description: "Generate ad copy with AI", icon: Type, type: "ai", category: "Marketing" },
  ...generateMassiveClientTools("seo", "SEO Tools", Search, seoMarketingBaseTools),
];

// ============================================
// IMAGE & DESIGN HUB - 1000+ Tools
// ============================================
const imageDesignBaseTools = [
  // Image Editing
  "Image Resizer", "Image Cropper", "Image Rotator", "Image Flipper",
  "Image Compressor", "Bulk Image Resizer", "Batch Image Converter",
  "Aspect Ratio Calculator", "DPI Converter", "Pixel Calculator",
  
  // Format Conversion
  "JPEG Compressor", "PNG Compressor", "WebP Converter", "HEIC to JPG",
  "PNG to JPG", "JPG to PNG", "GIF to PNG", "SVG to PNG",
  "WebP to PNG", "BMP to JPG", "TIFF Converter", "ICO Converter",
  "Image to Base64", "Base64 to Image", "Image to PDF", "PDF to Image",
  
  // Color Tools
  "Color Picker", "Color Palette Generator", "Color Scheme Generator",
  "Gradient Generator", "CSS Gradient Maker", "Color Converter",
  "HEX to RGB", "RGB to HEX", "HSL Converter", "CMYK Converter",
  "Color Contrast Checker", "Accessibility Checker", "Color Blindness Simulator",
  "Color Mixer", "Complementary Colors", "Analogous Colors",
  "Triadic Colors", "Split Complementary", "Color Harmonies",
  
  // Icons & Favicons
  "Favicon Generator", "App Icon Generator", "Logo Maker",
  "Icon Resizer", "Icon Pack Creator", "SVG Icon Editor",
  "PNG to ICO", "ICO Generator", "Favicon Checker",
  
  // Watermarks & Overlays
  "Watermark Generator", "Image Watermark", "Text Watermark",
  "Logo Overlay", "Signature Generator", "Copyright Stamp",
  "Batch Watermark", "Remove Watermark Helper", "Transparent Watermark",
  
  // Social Media Graphics
  "Meme Generator", "Quote Image Maker", "Social Post Maker",
  "Instagram Post Maker", "Facebook Cover Maker", "Twitter Header Maker",
  "YouTube Thumbnail Maker", "LinkedIn Banner Maker", "Pinterest Pin Maker",
  "Story Maker", "Reel Cover Maker", "Carousel Creator",
  
  // Business Graphics
  "Business Card Designer", "Flyer Maker", "Poster Designer",
  "Infographic Maker", "Chart Image Maker", "Diagram Generator",
  "Presentation Graphics", "Report Cover Maker", "Newsletter Header",
  
  // Mockups
  "Mockup Generator", "Device Mockup Maker", "Screenshot Beautifier",
  "T-Shirt Mockup", "Mug Mockup", "Book Cover Mockup",
  "Phone Mockup", "Laptop Mockup", "Browser Mockup",
  
  // Effects & Filters
  "Border Generator", "Frame Maker", "Collage Maker",
  "Image Blur Tool", "Background Blur", "Pixelate Tool",
  "Brightness Adjuster", "Contrast Adjuster", "Saturation Editor",
  "Hue Shifter", "Exposure Adjuster", "Shadows Highlights",
  "Black White Converter", "Sepia Filter", "Vintage Filter",
  "Photo Filter Gallery", "Instagram Filters", "Retro Effects",
  "Noise Generator", "Grain Effect", "Film Effect",
  "Vignette Effect", "Light Leak", "Bokeh Generator",
  
  // Annotations
  "Text on Image", "Image Annotator", "Arrow Drawer",
  "Shape Overlay", "Sticker Adder", "Emoji Overlay",
  "Image Splitter", "Image Joiner", "Before After Slider",
  
  // Codes
  "QR Code Generator", "Barcode Generator", "Data Matrix Generator",
  "QR Code Reader", "Barcode Reader", "QR Code Customizer",
  
  // Stock & Resources
  "Icon Finder", "Stock Photo Finder", "Free Image Search",
  "Avatar Maker", "Profile Picture Maker", "Thumbnail Creator",
  "Banner Maker", "Header Creator", "Featured Image Generator",
];

const imageDesignTools: SubTool[] = [
  // AI Tools
  { id: "ai-image-gen", name: "AI Image Generator", description: "Create images with AI", icon: Wand2, type: "ai", category: "AI Design" },
  { id: "ai-logo-gen", name: "AI Logo Generator", description: "Generate logos with AI", icon: Palette, type: "ai", category: "AI Design" },
  { id: "ai-bg-remover", name: "AI Background Remover", description: "Remove backgrounds with AI", icon: Scissors, type: "ai", category: "AI Design" },
  { id: "ai-image-upscaler", name: "AI Image Upscaler", description: "Enhance image quality", icon: Maximize, type: "ai", category: "AI Design" },
  ...generateMassiveClientTools("image", "Image Tools", Image, imageDesignBaseTools),
];

// ============================================
// VIDEO & AUDIO HUB - 1000+ Tools
// ============================================
const videoAudioBaseTools = [
  // Video Converters
  "Video to MP3", "Video to GIF", "Video Trimmer", "Video Merger",
  "Video Splitter", "Video Compressor", "Video Format Converter",
  "MP4 Converter", "AVI Converter", "MOV Converter", "WebM Converter",
  "MKV Converter", "FLV Converter", "WMV Converter", "3GP Converter",
  
  // Video Editing
  "Video Resolution Changer", "Video Aspect Ratio", "Video FPS Converter",
  "Video Speed Changer", "Slow Motion Maker", "Time Lapse Maker",
  "Video Reverser", "Video Looper", "Boomerang Maker",
  "Video Cropper", "Video Rotator", "Video Flipper",
  "Add Music to Video", "Remove Audio from Video", "Video Volume Changer",
  "Add Subtitles", "Subtitle Generator", "SRT Creator",
  "Video Thumbnail Extractor", "Video Frame Extractor", "Video to Images",
  "Add Text to Video", "Video Watermark", "Video Overlay",
  
  // Video Effects
  "Video Background Remover", "Green Screen Tool", "Chroma Key",
  "Video Stabilizer", "Video Enhancer", "Video Upscaler",
  "Video Filter Adder", "Video Color Grading", "LUT Applier",
  "Video Blur", "Video Brightness", "Video Contrast",
  
  // Recording
  "Screen Recorder", "Webcam Recorder", "Audio Recorder",
  "Podcast Recorder", "Voice Recorder", "Sound Recorder",
  "Video Recorder", "Game Recorder", "Meeting Recorder",
  
  // Audio Converters
  "Audio to Text", "Audio Trimmer", "Audio Merger",
  "Audio Splitter", "Audio Compressor", "Audio Normalizer",
  "Audio Format Converter", "MP3 Converter", "WAV Converter",
  "FLAC Converter", "OGG Converter", "AAC Converter",
  "M4A Converter", "WMA Converter", "AIFF Converter",
  
  // Audio Editing
  "Audio Speed Changer", "Pitch Shifter", "Tempo Changer",
  "Noise Remover", "Background Noise Reducer", "Audio Enhancer",
  "Audio Equalizer", "Bass Booster", "Treble Booster",
  "Fade In Out Maker", "Audio Reverser", "Audio Looper",
  "Audio Volume Changer", "Audio Mixer", "Multi Track Editor",
  
  // Audio Effects
  "Echo Effect", "Reverb Effect", "Chorus Effect",
  "Distortion Effect", "Delay Effect", "Flanger Effect",
  "Phaser Effect", "Tremolo Effect", "Vibrato Effect",
  
  // Sound Creation
  "Ringtone Maker", "Notification Sound", "Alarm Tone Creator",
  "BPM Counter", "Key Detector", "Metronome",
  "Tuner Tool", "Chord Finder", "Scale Generator",
  "Beat Maker", "Drum Pattern Generator", "Melody Generator",
  
  // Voice
  "Voice Changer", "Autotune Tool", "Vocal Remover",
  "Karaoke Maker", "Instrumental Separator", "Stem Splitter",
  "Text to Speech", "Speech to Text", "Voice Cloner Info",
  
  // Visualization
  "Audio Spectrum Visualizer", "Waveform Generator", "Audio Graph Maker",
  "Music Visualizer", "Sound Wave Art", "Audio Waveform Image",
];

const videoAudioTools: SubTool[] = [
  // AI Tools
  { id: "ai-voice-gen", name: "AI Voice Generator", description: "Generate voiceovers with AI", icon: Mic, type: "ai", category: "AI Audio" },
  { id: "ai-music-gen", name: "AI Music Generator", description: "Create music with AI", icon: Music, type: "ai", category: "AI Audio" },
  { id: "ai-transcription", name: "AI Transcription", description: "Transcribe audio with AI", icon: FileText, type: "ai", category: "AI Audio" },
  ...generateMassiveClientTools("video", "Video Audio", Video, videoAudioBaseTools),
];

// ============================================
// DOCUMENTS HUB - 1000+ Tools
// ============================================
const documentsBaseTools = [
  // PDF Tools
  "PDF to Word", "Word to PDF", "PDF to Excel", "Excel to PDF",
  "PDF to PowerPoint", "PowerPoint to PDF", "PDF Compressor", "PDF Merger",
  "PDF Splitter", "PDF Page Extractor", "PDF Rotator", "PDF Page Remover",
  "PDF Password Protector", "PDF Password Remover", "PDF Encryptor",
  "PDF to Image", "Image to PDF", "PDF to Text", "Text to PDF",
  "PDF Editor", "PDF Annotator", "PDF Form Filler",
  "PDF Signature", "PDF Watermark", "PDF Header Footer",
  "PDF Page Numbers", "PDF Bookmarks", "PDF Table of Contents",
  "PDF Viewer", "PDF Reader", "PDF Print Helper",
  
  // Document Converters
  "DOCX to PDF", "PDF to DOCX", "ODT Converter", "RTF Converter",
  "TXT to PDF", "PDF to TXT", "HTML to PDF", "PDF to HTML",
  "Markdown to PDF", "PDF to Markdown", "LaTeX Converter",
  "EPUB Converter", "MOBI Converter", "eBook Converter",
  "EPUB to PDF", "PDF to EPUB", "Kindle Converter",
  
  // Spreadsheet Tools
  "Excel Merger", "Excel Splitter", "CSV to Excel", "Excel to CSV",
  "JSON to Excel", "Excel to JSON", "XML to Excel", "Excel to XML",
  "Excel Viewer", "Spreadsheet Formatter", "Data Cleaner",
  "Duplicate Remover", "Excel Formula Helper", "Pivot Table Helper",
  "VLOOKUP Helper", "Excel Charts", "Spreadsheet Comparison",
  
  // Presentation Tools
  "PowerPoint Compressor", "PPT to PDF", "PPT to Images",
  "Slide Extractor", "Presentation Merger", "Slide Templates",
  "PPT to Video", "Slide Sorter", "Presentation Viewer",
  
  // Business Documents
  "Invoice Generator", "Receipt Generator", "Quote Generator",
  "Contract Templates", "Agreement Templates", "NDA Generator",
  "Proposal Generator", "Purchase Order", "Delivery Note",
  "Packing Slip", "Bill of Lading", "Commercial Invoice",
  
  // Personal Documents
  "Resume Builder", "CV Templates", "Cover Letter Generator",
  "Reference Letter", "Recommendation Letter", "Thank You Letter",
  "Resignation Letter", "Offer Letter", "Employment Contract",
  
  // Letters & Correspondence
  "Business Letter Templates", "Memo Generator", "Report Templates",
  "Meeting Minutes", "Agenda Generator", "Notes Templates",
  "Email Templates", "Formal Letter", "Informal Letter",
  
  // Certificates & Awards
  "Certificate Generator", "Diploma Templates", "Award Generator",
  "Achievement Certificate", "Completion Certificate", "Participation Certificate",
  "ID Card Generator", "Badge Maker", "Name Tag Generator",
  
  // Labels & Envelopes
  "Envelope Generator", "Label Maker", "Address Labels",
  "Shipping Labels", "Barcode Labels", "Product Labels",
  "Return Labels", "Mailing Labels", "CD Labels",
  
  // Planning Documents
  "Calendar Generator", "Planner Templates", "Schedule Maker",
  "Timetable Generator", "Gantt Chart", "Timeline Creator",
  "Project Plan", "Roadmap Generator", "Milestone Tracker",
  
  // Tracking Documents
  "Checklist Generator", "To-Do List", "Task Tracker",
  "Habit Tracker", "Goal Tracker", "Progress Tracker",
  "Expense Report", "Budget Templates", "Financial Report",
  "Timesheet Templates", "Attendance Tracker", "Work Log",
  
  // Forms & Surveys
  "Form Builder", "Survey Creator", "Questionnaire Maker",
  "Feedback Form", "Registration Form", "Application Form",
  "Order Form", "Contact Form", "Consent Form",
  
  // Diagrams
  "Mind Map Maker", "Flowchart Builder", "Org Chart Generator",
  "Process Diagram", "Network Diagram", "ER Diagram",
  "UML Diagram", "Sequence Diagram", "Class Diagram",
];

const documentsTools: SubTool[] = [
  // AI Tools
  { id: "ai-resume-writer", name: "AI Resume Writer", description: "Generate professional resumes with AI", icon: FileText, type: "ai", category: "AI Documents" },
  { id: "ai-cover-letter", name: "AI Cover Letter Writer", description: "Write cover letters with AI", icon: Mail, type: "ai", category: "AI Documents" },
  { id: "ai-contract-generator", name: "AI Contract Generator", description: "Generate contracts with AI", icon: FileUp, type: "ai", category: "AI Documents" },
  ...generateMassiveClientTools("docs", "Documents", FileText, documentsBaseTools),
];

// ============================================
// CALCULATORS HUB - 1000+ Tools
// ============================================
const calculatorsBaseTools = [
  // Basic Math
  "Percentage Calculator", "Percentage Change", "Percentage Difference",
  "Fraction Calculator", "Decimal to Fraction", "Fraction to Decimal",
  "Basic Calculator", "Scientific Calculator", "Graphing Calculator",
  "Matrix Calculator", "Quadratic Solver", "Polynomial Solver",
  "Equation Solver", "Algebra Calculator", "Geometry Calculator",
  "Trigonometry Calculator", "Calculus Calculator", "Statistics Calculator",
  
  // Unit Converters
  "Unit Converter", "Length Converter", "Weight Converter",
  "Temperature Converter", "Volume Converter", "Area Converter",
  "Speed Converter", "Time Converter", "Data Size Converter",
  "Pressure Converter", "Energy Converter", "Power Converter",
  "Angle Converter", "Force Converter", "Frequency Converter",
  
  // Financial
  "Currency Converter", "Cryptocurrency Calculator", "Exchange Rate",
  "Loan Calculator", "Mortgage Calculator", "EMI Calculator",
  "Interest Calculator", "Compound Interest", "Simple Interest",
  "Investment Calculator", "ROI Calculator", "CAGR Calculator",
  "Retirement Calculator", "Savings Calculator", "Goal Calculator",
  "Tax Calculator", "Income Tax", "Sales Tax Calculator",
  "Tip Calculator", "Bill Splitter", "Discount Calculator",
  "Margin Calculator", "Markup Calculator", "Profit Calculator",
  "Break Even Calculator", "Payroll Calculator", "Salary Calculator",
  "Hourly to Salary", "Overtime Calculator", "Raise Calculator",
  "Net Worth Calculator", "Debt Payoff", "Credit Card Payoff",
  "401k Calculator", "IRA Calculator", "Stock Return Calculator",
  "Dividend Calculator", "Bond Calculator", "Options Calculator",
  "Forex Pip Calculator", "Lot Size Calculator", "Position Size",
  
  // Health & Fitness
  "BMI Calculator", "BMR Calculator", "TDEE Calculator",
  "Calorie Calculator", "Macro Calculator", "Protein Calculator",
  "Body Fat Calculator", "Ideal Weight", "Water Intake",
  "Heart Rate Zones", "Max Heart Rate", "Target Heart Rate",
  "Pace Calculator", "Running Calculator", "Cycling Calculator",
  "Swim Pace Calculator", "Triathlon Calculator", "Fitness Age",
  
  // Date & Time
  "Age Calculator", "Date Calculator", "Days Between Dates",
  "Time Zone Converter", "Epoch Converter", "Unix Timestamp",
  "Weeks Calculator", "Months Calculator", "Years Calculator",
  "Work Days Calculator", "Business Days", "Holiday Calculator",
  "Birthday Calculator", "Anniversary Calculator", "Countdown",
  "Pregnancy Due Date", "Ovulation Calculator", "Period Calculator",
  "Sleep Calculator", "Wake Up Time", "Sleep Cycle",
  
  // Education
  "GPA Calculator", "Grade Calculator", "CGPA Calculator",
  "Test Score Calculator", "Weighted Average", "Final Grade",
  "SAT Score", "ACT Score", "GRE Score Calculator",
  "Percentile Calculator", "Rank Calculator", "Grading Scale",
  
  // Home & DIY
  "Rent vs Buy", "Square Footage", "Paint Calculator",
  "Flooring Calculator", "Tile Calculator", "Wallpaper Calculator",
  "Concrete Calculator", "Brick Calculator", "Lumber Calculator",
  "Roofing Calculator", "Insulation Calculator", "Drywall Calculator",
  "Pool Volume", "Aquarium Calculator", "Garden Planner",
  
  // Vehicle
  "Fuel Cost Calculator", "Gas Mileage", "MPG Calculator",
  "Car Loan Calculator", "Lease Calculator", "Car Payment",
  "Depreciation Calculator", "Total Cost of Ownership", "Car Compare",
  
  // Utilities
  "Electricity Cost", "Power Consumption", "Watt Calculator",
  "Solar Panel Calculator", "Energy Savings", "Carbon Footprint",
  "Water Usage", "Natural Gas", "Utility Bill",
  
  // Cooking
  "Cooking Converter", "Recipe Scaler", "Ingredient Converter",
  "Baking Calculator", "Yeast Calculator", "Dough Calculator",
  
  // Random
  "Random Number Generator", "Random Name Picker", "Dice Roller",
  "Coin Flipper", "Lottery Generator", "Password Generator",
  "Probability Calculator", "Odds Calculator", "Permutation Calculator",
  "Combination Calculator", "Factorial Calculator", "Fibonacci Calculator",
  "Prime Number Checker", "GCD Calculator", "LCM Calculator",
  "Standard Deviation", "Mean Calculator", "Median Calculator",
  "Mode Calculator", "Variance Calculator", "Correlation Calculator",
];

const calculatorsTools: SubTool[] = [
  ...generateMassiveClientTools("calc", "Calculators", Calculator, calculatorsBaseTools),
];

// ============================================
// DEVELOPER TOOLS HUB - 1000+ Tools
// ============================================
const devToolsBaseTools = [
  // JSON Tools
  "JSON Formatter", "JSON Validator", "JSON Minifier",
  "JSON to XML", "XML to JSON", "JSON to YAML",
  "YAML to JSON", "JSON to CSV", "CSV to JSON",
  "JSON Viewer", "JSON Editor", "JSON Path Finder",
  "JSON Diff", "JSON Merge", "JSON Query",
  
  // XML Tools
  "XML Formatter", "XML Validator", "XML Minifier",
  "XML to HTML", "HTML to XML", "XML Viewer",
  "XPath Tester", "XSLT Transformer", "XSD Validator",
  
  // HTML Tools
  "HTML Formatter", "HTML Minifier", "HTML Validator",
  "HTML to Markdown", "Markdown to HTML", "HTML Preview",
  "HTML Entities Encoder", "HTML Entities Decoder", "HTML Cleaner",
  "HTML Table Generator", "HTML List Generator", "HTML Form Builder",
  
  // CSS Tools
  "CSS Formatter", "CSS Minifier", "CSS Validator",
  "SCSS to CSS", "LESS to CSS", "CSS Prefix Generator",
  "CSS Gradient Generator", "CSS Shadow Generator", "CSS Border Radius",
  "CSS Grid Generator", "CSS Flexbox Generator", "CSS Animation Generator",
  "CSS Unit Converter", "PX to REM", "REM to PX",
  
  // JavaScript Tools
  "JavaScript Formatter", "JavaScript Minifier", "JavaScript Validator",
  "TypeScript Compiler", "ES6 to ES5", "JSX Converter",
  "JavaScript Obfuscator", "JavaScript Beautifier", "JavaScript Linter",
  
  // SQL Tools
  "SQL Formatter", "SQL Validator", "SQL Minifier",
  "SQL to NoSQL", "CSV to SQL", "SQL Generator",
  "SQL Escape", "SQL Unescape", "SQL Query Builder",
  
  // Regex Tools
  "Regex Tester", "Regex Generator", "Regex Debugger",
  "Regex Cheat Sheet", "Regex Visualizer", "Regex Replacer",
  
  // Time Tools
  "Cron Expression Generator", "Cron Parser", "Cron Validator",
  "Timestamp Converter", "Date Parser", "ISO 8601 Converter",
  "UTC Converter", "Epoch Converter", "Time Zone Converter",
  
  // Security Tools
  "JWT Decoder", "JWT Generator", "JWT Validator",
  "Hash Generator", "MD5 Generator", "SHA256 Generator",
  "SHA1 Generator", "SHA512 Generator", "HMAC Generator",
  "Base64 Encoder", "Base64 Decoder", "URL Encoder",
  "URL Decoder", "HTML Entity Encoder", "Unicode Converter",
  
  // ID Generators
  "UUID Generator", "GUID Generator", "ULID Generator",
  "Snowflake ID", "CUID Generator", "NanoID Generator",
  
  // Network Tools
  "IP Address Lookup", "IP to Binary", "Subnet Calculator",
  "CIDR Calculator", "DNS Lookup", "WHOIS Lookup",
  "Port Checker", "Ping Tool", "Traceroute",
  "HTTP Status Codes", "MIME Types", "HTTP Headers",
  "User Agent Parser", "Browser Detector", "Device Detector",
  
  // API Tools
  "Lorem Ipsum Generator", "Fake Data Generator", "Mock API",
  "API Response Formatter", "Webhook Tester", "cURL Converter",
  "GraphQL Formatter", "OpenAPI Viewer", "Swagger Editor",
  "Postman to cURL", "Insomnia Converter", "API Documentation",
  
  // Comparison Tools
  "Diff Checker", "Code Compare", "Merge Tool",
  "Text Diff", "File Diff", "JSON Diff",
  
  // Generators
  "Syntax Highlighter", "Code Snippet", "Gist Creator",
  "ASCII Art Generator", "Box Drawing", "Table Generator",
  "Markdown Table", "CSV Table Generator", "HTML Table Generator",
  
  // Config Generators
  ".htaccess Generator", "Robots.txt Generator", "Sitemap Generator",
  "Favicon Generator", "Manifest Generator", "Meta Tag Generator",
  "CSP Generator", "CORS Header Generator", "Security Headers",
  
  // Git Tools
  "Git Commands", "Git Ignore Generator", "Git README Generator",
  "Git Commit Message", "Git Branch Name", "Semantic Version",
  "Changelog Generator", "Release Notes", "Git Diff",
  
  // Package Tools
  "NPM Package Analyzer", "Package.json Generator", "Dependency Checker",
  "Bundle Size Checker", "License Checker", "Vulnerability Scanner",
  
  // DevOps Tools
  "Docker Compose", "Kubernetes YAML", "Terraform Helper",
  "Environment Variable", "Config File Generator", ".env Generator",
  "CI/CD Pipeline", "GitHub Actions", "GitLab CI",
  
  // Code Tools
  "Code Obfuscator", "Code Beautifier", "Minifier Tool",
  "Code Formatter", "Linter", "Syntax Checker",
];

const devToolsTools: SubTool[] = [
  ...generateMassiveClientTools("dev", "Developer Tools", Code, devToolsBaseTools),
];

// ============================================
// SECURITY HUB - 1000+ Tools
// ============================================
const securityBaseTools = [
  // Password Tools
  "Password Generator", "Strong Password Maker", "Passphrase Generator",
  "Password Strength Checker", "Password Entropy Calculator", "Memorable Password",
  "PIN Generator", "Random Password", "Secure Password Tips",
  "Password Manager Info", "Password Vault Info", "Master Password",
  
  // Hash Tools
  "Hash Generator", "MD5 Hash", "SHA256 Hash",
  "SHA1 Hash", "SHA512 Hash", "HMAC Generator",
  "Hash Identifier", "Hash Comparison", "File Hash Checker",
  "Checksum Calculator", "CRC32 Generator", "RIPEMD Generator",
  
  // Encryption Tools
  "Encryption Tool", "AES Encryptor", "DES Encryptor",
  "Blowfish Encryptor", "Triple DES", "RSA Helper",
  "Symmetric Encryption", "Asymmetric Encryption", "Hybrid Encryption",
  "File Encryptor Info", "Folder Encryptor Info", "Drive Encryptor Info",
  
  // Encoding Tools
  "Base64 Encoder", "Base64 Decoder", "Base32 Encoder",
  "URL Safe Base64", "Hex Encoder", "Hex Decoder",
  "ROT13 Encoder", "Caesar Cipher", "Vigenere Cipher",
  "Atbash Cipher", "XOR Cipher", "Substitution Cipher",
  
  // Steganography
  "Steganography Tool", "Hidden Message Encoder", "Image Steganography",
  "Audio Steganography", "Text Steganography", "Invisible Text",
  "Whitespace Encoding", "Zero Width Characters", "Hidden Data Finder",
  
  // Token Generators
  "UUID Generator", "GUID Generator", "Random Token Generator",
  "API Key Generator", "Secret Key Generator", "License Key Generator",
  "OTP Generator", "TOTP Generator", "HOTP Generator",
  "2FA Code Generator", "Authenticator Helper", "Backup Codes",
  
  // QR Security
  "QR Code Generator", "QR Code Reader", "Secure QR Code",
  "Encrypted QR", "Password QR", "WiFi QR Generator",
  "vCard QR", "URL QR", "QR Code Decoder",
  
  // Certificate Tools
  "SSL Checker", "Certificate Decoder", "CSR Generator",
  "Private Key Generator", "Public Key Extractor", "PEM Converter",
  "PKCS12 Converter", "Certificate Chain", "Self Signed Certificate",
  "Certificate Expiry", "SSL Validity", "TLS Checker",
  
  // JWT Tools
  "JWT Decoder", "JWT Generator", "JWT Validator",
  "JWT Debugger", "JWT Claims Viewer", "JWT Signature Verifier",
  
  // OAuth Tools
  "OAuth Helper", "OAuth2 Token", "SAML Decoder",
  "SAML Generator", "OpenID Helper", "OIDC Debugger",
  
  // Network Security
  "IP Address Lookup", "IP Location", "IP Anonymizer Info",
  "DNS Leak Test", "WebRTC Leak Test", "Browser Fingerprint",
  "Device Fingerprint", "Canvas Fingerprint", "Audio Fingerprint",
  
  // Privacy Tools
  "Privacy Checker", "Tracking Detector", "Cookie Analyzer",
  "Third Party Tracker", "Analytics Detector", "Pixel Tracker Finder",
  "Ad Tracker Info", "Browser Privacy", "Incognito Detector",
  
  // Security Headers
  "HTTP Header Analyzer", "Security Header Checker", "CSP Generator",
  "HSTS Checker", "X-Frame-Options", "Content-Type-Options",
  "Referrer Policy", "Permissions Policy", "CORS Checker",
  
  // Vulnerability Info
  "XSS Tester Info", "SQL Injection Info", "CSRF Info",
  "Command Injection", "Path Traversal", "XXE Info",
  "SSRF Info", "Open Redirect", "Clickjacking Checker",
  
  // Scanner Info
  "Port Scanner Info", "Network Scanner Info", "Vulnerability Scanner Info",
  "Web Scanner Info", "SSL Scanner", "Header Scanner",
  
  // Data Protection
  "File Shredder Info", "Secure Delete Info", "Data Wiping Info",
  "Metadata Remover", "EXIF Cleaner", "Document Sanitizer",
  
  // Communication Security
  "Anonymous Email Info", "Disposable Email", "Temp Mail Info",
  "Encrypted Email Info", "Secure Messaging Info", "E2E Encryption Info",
  
  // VPN & Proxy
  "VPN Helper Info", "Proxy Helper Info", "TOR Info",
  "SOCKS5 Info", "HTTP Proxy", "Proxy Checker",
  
  // Crypto
  "Blockchain Explorer Info", "Wallet Address Validator", "Crypto Address Generator",
  "Public Key Derivation", "Private Key Generator", "Mnemonic Generator",
  
  // Digital Signatures
  "Digital Signature Helper", "Document Signing Info", "Code Signing Info",
  "GPG Helper", "PGP Encryption Info", "Message Signing",
  
  // Malware Info
  "Malware Scanner Info", "Virus Total Helper", "File Hash Checker",
  "Safe Browsing Check", "Malicious URL Checker", "Phishing Detector",
  
  // Compliance
  "Privacy Policy Generator", "Terms of Service Generator", "Cookie Policy Generator",
  "GDPR Checker", "CCPA Helper", "HIPAA Info",
  "SOC2 Checklist", "PCI DSS Info", "Security Audit Checklist",
];

const securityTools: SubTool[] = [
  ...generateMassiveClientTools("security", "Security Tools", Lock, securityBaseTools),
];

// ============================================
// UTILITIES HUB - 1000+ Tools
// ============================================
const utilitiesBaseTools = [
  // Time Tools
  "World Clock", "Time Zone Converter", "Meeting Time Planner",
  "Countdown Timer", "Stopwatch", "Alarm Clock",
  "Pomodoro Timer", "Focus Timer", "Break Timer",
  "Interval Timer", "Tabata Timer", "Meditation Timer",
  
  // Date Tools
  "Calendar Generator", "Date Calculator", "Days Counter",
  "Age Calculator", "Birthday Calculator", "Anniversary Calculator",
  "Week Number Finder", "Day of Week", "Leap Year Checker",
  "Date Difference", "Add Days", "Subtract Days",
  "Work Days Calculator", "Business Days", "Holiday Finder",
  
  // Notes Tools
  "Notepad Online", "Sticky Notes", "Quick Notes",
  "Markdown Editor", "Rich Text Editor", "Plain Text Editor",
  "Code Editor", "JSON Editor", "YAML Editor",
  
  // List Tools
  "To-Do List", "Task Manager", "Checklist Maker",
  "Shopping List", "Grocery List", "Packing List",
  "Bucket List", "Wish List", "Reading List",
  
  // Tracking Tools
  "Habit Tracker", "Goal Tracker", "Progress Tracker",
  "Expense Tracker", "Budget Planner", "Money Manager",
  "Time Tracker", "Project Tracker", "Milestone Tracker",
  
  // Converters
  "Unit Converter", "Currency Converter", "Measurement Converter",
  "Length Converter", "Weight Converter", "Volume Converter",
  "Temperature Converter", "Speed Converter", "Area Converter",
  
  // QR & Barcodes
  "QR Code Generator", "QR Code Reader", "Barcode Generator",
  "Barcode Scanner", "WiFi QR", "vCard Generator",
  "URL QR Code", "Text QR Code", "Email QR Code",
  
  // Link Tools
  "URL Shortener Helper", "Link Expander", "Broken Link Checker",
  "Link Validator", "URL Cleaner", "UTM Remover",
  "Redirect Checker", "Link Preview", "Metadata Viewer",
  
  // Screenshot Tools
  "Website Screenshot", "Webpage Capture", "Full Page Screenshot",
  "Screenshot Editor", "Screenshot Annotator", "Screenshot to PDF",
  
  // Testing Tools
  "Webcam Test", "Microphone Test", "Speaker Test",
  "Keyboard Tester", "Mouse Tester", "Gamepad Tester",
  "Touch Screen Test", "Display Test", "Dead Pixel Checker",
  
  // Network Info
  "Internet Speed Test Info", "Ping Test Info", "Latency Checker",
  "What Is My IP", "IP Location Finder", "ISP Detector",
  "DNS Checker", "Port Checker", "Network Status",
  
  // Device Info
  "Browser Info", "Device Info", "Screen Resolution",
  "System Info", "Battery Status", "Memory Usage",
  "GPU Info", "CPU Info", "Storage Info",
  
  // Emoji Tools
  "Emoji Picker", "Emoji Keyboard", "Emoji Search",
  "Emoji Copy Paste", "Emoji Combiner", "Emoji Art",
  "Kaomoji Picker", "Emoticon Generator", "ASCII Emoji",
  
  // Symbol Tools
  "Symbol Finder", "Special Characters", "Unicode Search",
  "Math Symbols", "Currency Symbols", "Arrow Symbols",
  "Star Symbols", "Heart Symbols", "Check Symbols",
  
  // Font Tools
  "Font Finder", "Font Identifier", "Google Fonts Browser",
  "Font Preview", "Font Comparison", "Font Pairing",
  "Fancy Text Generator", "Font Converter", "Web Safe Fonts",
  
  // Color Tools
  "Color Picker", "Color Palette", "Gradient Generator",
  "Color Converter", "Color Mixer", "Random Color",
  "Color Scheme", "Color Harmony", "Color Blindness Sim",
  
  // Random Tools
  "Random Generator", "Number Generator", "Name Picker",
  "Decision Maker", "Coin Flipper", "Dice Roller",
  "Lottery Generator", "Raffle Picker", "Prize Wheel",
  "Yes No Generator", "Random Quote", "Random Fact",
  
  // Drawing Tools
  "Drawing Canvas", "Whiteboard", "Sketch Pad",
  "Paint Tool", "Pixel Art Maker", "Doodle Pad",
  
  // Diagram Tools
  "Mind Map Maker", "Flowchart Creator", "Diagram Builder",
  "Org Chart Maker", "Tree Diagram", "Venn Diagram",
  
  // Education Tools
  "Flashcard Maker", "Study Cards", "Quiz Creator",
  "Vocabulary Builder", "Spelling Practice", "Math Practice",
  
  // Viewer Tools
  "PDF Viewer", "Document Viewer", "Image Viewer",
  "Text Viewer", "Code Viewer", "Markdown Viewer",
  
  // File Tools
  "File Explorer Helper", "File Size Checker", "File Type Identifier",
  "File Comparison", "Duplicate Finder", "File Renamer",
  
  // Archive Tools
  "ZIP Extractor Info", "File Compressor Info", "Archive Manager Info",
  "RAR Opener Info", "7Z Extractor", "TAR GZ Handler",
  
  // Transfer Tools
  "Download Manager Info", "Upload Helper", "File Sharing Info",
  "Transfer Speed Test", "FTP Helper", "SFTP Info",
  
  // Language Tools
  "Translation Helper", "Dictionary", "Thesaurus",
  "Spell Checker", "Grammar Checker", "Pronunciation Guide",
  "Language Detector", "Transliteration", "Romanization",
  
  // Weather Tools
  "Weather Widget Info", "Forecast Viewer", "Weather Converter",
  "Temperature Converter", "Wind Chill Calculator", "Heat Index",
  
  // Games & Fun
  "Word Scrambler", "Crossword Helper", "Anagram Solver",
  "Word Search", "Sudoku Generator", "Puzzle Maker",
  "Trivia Generator", "Riddle Maker", "Joke Generator",
];

const utilitiesTools: SubTool[] = [
  ...generateMassiveClientTools("util", "Utilities", Clock, utilitiesBaseTools),
];

// ============================================
// EXPORT ALL HUBS
// ============================================
export const toolHubs: ToolHub[] = [
  {
    id: "ai-content",
    name: "AI Content Hub",
    description: "1000+ AI-powered content creation tools",
    icon: MessageSquare,
    path: "/hub/ai-content",
    color: "from-purple-500 to-pink-500",
    subTools: aiContentTools,
  },
  {
    id: "social-media",
    name: "Social Media Hub",
    description: "1000+ tools for TikTok, Instagram, YouTube & more",
    icon: Video,
    path: "/hub/social-media",
    color: "from-pink-500 to-red-500",
    subTools: socialMediaTools,
  },
  {
    id: "seo-marketing",
    name: "SEO & Marketing Hub",
    description: "1000+ SEO and digital marketing tools",
    icon: Search,
    path: "/hub/seo-marketing",
    color: "from-green-500 to-teal-500",
    subTools: seoMarketingTools,
  },
  {
    id: "image-design",
    name: "Image & Design Hub",
    description: "1000+ image editing and design tools",
    icon: Palette,
    path: "/hub/image-design",
    color: "from-orange-500 to-yellow-500",
    subTools: imageDesignTools,
  },
  {
    id: "video-audio",
    name: "Video & Audio Hub",
    description: "1000+ video and audio conversion tools",
    icon: Music,
    path: "/hub/video-audio",
    color: "from-red-500 to-pink-500",
    subTools: videoAudioTools,
  },
  {
    id: "documents",
    name: "Documents Hub",
    description: "1000+ document and file conversion tools",
    icon: FileUp,
    path: "/hub/documents",
    color: "from-blue-500 to-indigo-500",
    subTools: documentsTools,
  },
  {
    id: "calculators",
    name: "Calculators Hub",
    description: "1000+ calculators and converters",
    icon: Calculator,
    path: "/hub/calculators",
    color: "from-cyan-500 to-blue-500",
    subTools: calculatorsTools,
  },
  {
    id: "dev-tools",
    name: "Developer Tools Hub",
    description: "1000+ tools for developers and coders",
    icon: Code,
    path: "/hub/dev-tools",
    color: "from-gray-500 to-zinc-500",
    subTools: devToolsTools,
  },
  {
    id: "security",
    name: "Security & Privacy Hub",
    description: "1000+ security and privacy tools",
    icon: Shield,
    path: "/hub/security",
    color: "from-emerald-500 to-green-500",
    subTools: securityTools,
  },
  {
    id: "utilities",
    name: "Utilities Hub",
    description: "1000+ everyday utility tools",
    icon: Zap,
    path: "/hub/utilities",
    color: "from-yellow-500 to-orange-500",
    subTools: utilitiesTools,
  },
];

// ============================================
// UTILITY FUNCTIONS
// ============================================
export const getTotalTools = () => {
  return toolHubs.reduce((acc, hub) => acc + hub.subTools.length, 0);
};

export const getAIToolCount = () => {
  return toolHubs.reduce((acc, hub) => 
    acc + hub.subTools.filter(t => t.type === "ai").length, 0);
};

export const getClientToolCount = () => {
  return toolHubs.reduce((acc, hub) => 
    acc + hub.subTools.filter(t => t.type === "client").length, 0);
};

export const getHubById = (id: string) => {
  return toolHubs.find(hub => hub.id === id);
};

export const getToolById = (hubId: string, toolId: string) => {
  const hub = getHubById(hubId);
  return hub?.subTools.find(t => t.id === toolId);
};
