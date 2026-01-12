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
// AI CONTENT HUB - Curated Essential Tools
// ============================================
const aiContentTools: SubTool[] = [
  // AI Tools (keep best ones only)
  { id: "chatgpt-ai", name: "ChatGPT AI Alternative", description: "Free ChatGPT alternative - generate any text with AI", icon: MessageSquare, type: "ai", category: "AI Writing" },
  { id: "ai-blog-writer", name: "AI Blog Writer", description: "Generate SEO-optimized blog posts with AI", icon: FileText, type: "ai", category: "AI Writing" },
  { id: "ai-summary-generator", name: "AI Summary Generator", description: "Summarize long texts instantly", icon: FileText, type: "ai", category: "AI Writing" },
  
  // Text Processing (one tool per function)
  { id: "word-counter", name: "Word Counter", description: "Count words, characters, sentences, and paragraphs", icon: Type, type: "client", category: "Text Tools" },
  { id: "text-case-converter", name: "Text Case Converter", description: "Convert text to uppercase, lowercase, title case, and more", icon: Type, type: "client", category: "Text Tools" },
  { id: "duplicate-line-remover", name: "Duplicate Line Remover", description: "Remove duplicate and empty lines from text", icon: Type, type: "client", category: "Text Tools" },
  { id: "text-reverser", name: "Text Reverser", description: "Reverse text, words, or lines instantly", icon: RefreshCw, type: "client", category: "Text Tools" },
  { id: "find-replace", name: "Find & Replace", description: "Find and replace text with regex support", icon: Search, type: "client", category: "Text Tools" },
  { id: "lorem-ipsum", name: "Lorem Ipsum Generator", description: "Generate placeholder text for designs", icon: FileText, type: "client", category: "Text Tools" },
  
  // Encoding/Decoding (one tool per category)
  { id: "base64-encoder", name: "Base64 Encoder/Decoder", description: "Encode and decode Base64 strings", icon: Code, type: "client", category: "Encoding" },
  { id: "url-encoder", name: "URL Encoder/Decoder", description: "Encode and decode URLs", icon: Link, type: "client", category: "Encoding" },
  { id: "html-encoder", name: "HTML Entity Encoder", description: "Encode and decode HTML entities", icon: Code, type: "client", category: "Encoding" },
  { id: "morse-code", name: "Morse Code Translator", description: "Convert text to and from Morse code", icon: Mic, type: "client", category: "Encoding" },
  
  // Generators (one per function)
  { id: "username-generator", name: "Username Generator", description: "Generate unique usernames for any platform", icon: Users, type: "client", category: "Generators" },
  { id: "business-name-generator", name: "Business Name Generator", description: "Generate creative business and brand names", icon: Tag, type: "client", category: "Generators" },
  { id: "slogan-generator", name: "Slogan Generator", description: "Create catchy slogans and taglines", icon: Type, type: "client", category: "Generators" },
  
  // Analysis
  { id: "readability-score", name: "Readability Score", description: "Check text readability with Flesch-Kincaid", icon: BarChart3, type: "client", category: "Analysis" },
  { id: "keyword-density", name: "Keyword Density Checker", description: "Analyze keyword frequency in text", icon: Search, type: "client", category: "Analysis" },
  
  // Creative Text
  { id: "fancy-text-generator", name: "Fancy Text Generator", description: "Create stylish text with special fonts", icon: Type, type: "client", category: "Creative" },
  { id: "ascii-art-generator", name: "ASCII Art Generator", description: "Convert text to ASCII art", icon: Image, type: "client", category: "Creative" },
];

// ============================================
// SOCIAL MEDIA HUB - Curated Essential Tools
// ============================================
const socialMediaTools: SubTool[] = [
  // AI Tools
  { id: "social-caption-ai", name: "AI Caption Generator", description: "Generate viral captions for any platform", icon: Type, type: "ai", category: "Captions" },
  { id: "hashtag-ai", name: "AI Hashtag Generator", description: "Find trending hashtags for your content", icon: Hash, type: "ai", category: "Hashtags" },
  { id: "bio-writer-ai", name: "AI Bio Writer", description: "Create engaging profile bios", icon: Users, type: "ai", category: "Profile" },
  
  // Video Downloaders (one unified)
  { id: "social-video-downloader", name: "Social Media Video Downloader", description: "Download videos from TikTok, Instagram, YouTube & more", icon: Download, type: "client", category: "Downloaders" },
  
  // Calculators (one unified)
  { id: "engagement-calculator", name: "Engagement Rate Calculator", description: "Calculate engagement rate for any platform", icon: Calculator, type: "client", category: "Analytics" },
  { id: "follower-growth", name: "Follower Growth Tracker", description: "Track and visualize follower growth", icon: TrendingUp, type: "client", category: "Analytics" },
  
  // Content Tools
  { id: "best-posting-time", name: "Best Time to Post", description: "Find optimal posting times by platform", icon: Clock, type: "client", category: "Strategy" },
  { id: "content-calendar", name: "Content Calendar", description: "Plan and schedule your content", icon: Calendar, type: "client", category: "Planning" },
  { id: "link-in-bio", name: "Link in Bio Generator", description: "Create a custom link page for your bio", icon: Link, type: "client", category: "Profile" },
  
  // Influencer Tools
  { id: "influencer-rate-calculator", name: "Influencer Rate Calculator", description: "Calculate fair rates for sponsorships", icon: DollarSign, type: "client", category: "Monetization" },
  { id: "media-kit-generator", name: "Media Kit Generator", description: "Create professional media kits", icon: FileText, type: "client", category: "Monetization" },
];

// ============================================
// SEO & MARKETING HUB - Curated Essential Tools
// ============================================
const seoMarketingTools: SubTool[] = [
  // AI Tools
  { id: "seo-keywords-ai", name: "AI Keyword Generator", description: "AI-powered keyword research tool", icon: Search, type: "ai", category: "SEO" },
  { id: "meta-ai", name: "AI Meta Description Writer", description: "Generate SEO meta descriptions with AI", icon: FileText, type: "ai", category: "SEO" },
  { id: "ad-copy-ai", name: "AI Ad Copy Writer", description: "Generate high-converting ad copy", icon: Type, type: "ai", category: "Marketing" },
  
  // On-Page SEO
  { id: "serp-preview", name: "SERP Preview Tool", description: "Preview how your page appears in Google", icon: Search, type: "client", category: "On-Page SEO" },
  { id: "schema-generator", name: "Schema Markup Generator", description: "Create JSON-LD structured data", icon: Code, type: "client", category: "On-Page SEO" },
  { id: "open-graph-generator", name: "Open Graph Generator", description: "Generate OG tags for social sharing", icon: Share2, type: "client", category: "On-Page SEO" },
  
  // Technical SEO
  { id: "robots-txt-generator", name: "Robots.txt Generator", description: "Create robots.txt for search engines", icon: FileText, type: "client", category: "Technical SEO" },
  { id: "sitemap-generator", name: "XML Sitemap Generator", description: "Generate XML sitemaps", icon: Globe, type: "client", category: "Technical SEO" },
  { id: "redirect-checker", name: "Redirect Checker", description: "Check URL redirects and chains", icon: Link, type: "client", category: "Technical SEO" },
  
  // Analytics
  { id: "utm-builder", name: "UTM Campaign Builder", description: "Build UTM tracking URLs", icon: Link, type: "client", category: "Analytics" },
  { id: "ab-test-calculator", name: "A/B Test Calculator", description: "Calculate statistical significance", icon: Calculator, type: "client", category: "Analytics" },
  { id: "cpc-calculator", name: "CPC/CPM Calculator", description: "Calculate cost per click and impressions", icon: DollarSign, type: "client", category: "Analytics" },
  
  // Email Marketing
  { id: "email-subject-tester", name: "Email Subject Line Tester", description: "Test email subject line effectiveness", icon: Mail, type: "client", category: "Email" },
  { id: "spam-score-checker", name: "Spam Score Checker", description: "Check if emails might hit spam", icon: AlertTriangle, type: "client", category: "Email" },
];

// ============================================
// IMAGE & DESIGN HUB - Curated Essential Tools
// ============================================
const imageDesignTools: SubTool[] = [
  // AI Tools
  { id: "ai-image-gen", name: "AI Image Generator", description: "Create images from text prompts", icon: Wand2, type: "ai", category: "AI Design" },
  { id: "ai-bg-remover", name: "AI Background Remover", description: "Remove image backgrounds instantly", icon: Scissors, type: "ai", category: "AI Design" },
  
  // Image Editing
  { id: "image-resizer", name: "Image Resizer", description: "Resize images to any dimensions", icon: Maximize, type: "client", category: "Image Editing" },
  { id: "image-compressor", name: "Image Compressor", description: "Compress images without quality loss", icon: Minimize, type: "client", category: "Image Editing" },
  { id: "image-cropper", name: "Image Cropper", description: "Crop and rotate images", icon: Crop, type: "client", category: "Image Editing" },
  
  // Format Conversion
  { id: "image-converter", name: "Image Format Converter", description: "Convert between JPG, PNG, WebP, GIF", icon: RefreshCw, type: "client", category: "Conversion" },
  { id: "image-to-base64", name: "Image to Base64", description: "Convert images to Base64 strings", icon: Code, type: "client", category: "Conversion" },
  
  // Color Tools
  { id: "color-picker", name: "Color Picker", description: "Pick colors from images or create palettes", icon: Palette, type: "client", category: "Colors" },
  { id: "gradient-generator", name: "Gradient Generator", description: "Create CSS gradients visually", icon: Palette, type: "client", category: "Colors" },
  { id: "contrast-checker", name: "Color Contrast Checker", description: "Check WCAG accessibility contrast", icon: Eye, type: "client", category: "Colors" },
  
  // Icons & Graphics
  { id: "favicon-generator", name: "Favicon Generator", description: "Create favicons from images", icon: Image, type: "client", category: "Icons" },
  { id: "qr-code-generator", name: "QR Code Generator", description: "Create customizable QR codes", icon: QrCode, type: "client", category: "Codes" },
  { id: "watermark-generator", name: "Watermark Generator", description: "Add text or image watermarks", icon: Image, type: "client", category: "Editing" },
  
  // Social Media Graphics
  { id: "social-image-maker", name: "Social Media Image Maker", description: "Create properly sized social graphics", icon: Image, type: "client", category: "Social" },
  { id: "meme-generator", name: "Meme Generator", description: "Create memes with custom text", icon: Image, type: "client", category: "Creative" },
];

// ============================================
// VIDEO & AUDIO HUB - Curated Essential Tools
// ============================================
const videoAudioTools: SubTool[] = [
  // AI Tools
  { id: "ai-voice-gen", name: "AI Voice Generator", description: "Generate realistic voiceovers", icon: Mic, type: "ai", category: "AI Audio" },
  { id: "ai-transcription", name: "AI Transcription", description: "Transcribe audio to text with AI", icon: FileText, type: "ai", category: "AI Audio" },
  
  // Video Converters
  { id: "video-to-mp3", name: "Video to MP3", description: "Extract audio from video files", icon: Music, type: "client", category: "Conversion" },
  { id: "video-to-gif", name: "Video to GIF", description: "Convert videos to animated GIFs", icon: Video, type: "client", category: "Conversion" },
  { id: "video-compressor", name: "Video Compressor", description: "Compress videos while keeping quality", icon: Minimize, type: "client", category: "Editing" },
  
  // Video Editing
  { id: "video-trimmer", name: "Video Trimmer", description: "Cut and trim video clips", icon: Scissors, type: "client", category: "Editing" },
  { id: "video-merger", name: "Video Merger", description: "Merge multiple videos into one", icon: Video, type: "client", category: "Editing" },
  { id: "subtitle-generator", name: "Subtitle Generator", description: "Add subtitles to videos", icon: FileText, type: "client", category: "Editing" },
  
  // Audio Tools
  { id: "audio-converter", name: "Audio Format Converter", description: "Convert between MP3, WAV, FLAC, AAC", icon: Music, type: "client", category: "Audio" },
  { id: "audio-trimmer", name: "Audio Trimmer", description: "Cut and trim audio files", icon: Scissors, type: "client", category: "Audio" },
  { id: "noise-remover", name: "Background Noise Remover", description: "Remove noise from audio", icon: Volume2, type: "client", category: "Audio" },
  
  // Utilities
  { id: "ringtone-maker", name: "Ringtone Maker", description: "Create custom ringtones", icon: Phone, type: "client", category: "Utilities" },
  { id: "bpm-counter", name: "BPM Counter", description: "Detect tempo of audio tracks", icon: Music, type: "client", category: "Utilities" },
];

// ============================================
// DOCUMENTS HUB - Curated Essential Tools
// ============================================
const documentsTools: SubTool[] = [
  // AI Tools
  { id: "ai-resume-writer", name: "AI Resume Writer", description: "Generate professional resumes with AI", icon: FileText, type: "ai", category: "AI Documents" },
  { id: "ai-cover-letter", name: "AI Cover Letter Writer", description: "Write personalized cover letters", icon: Mail, type: "ai", category: "AI Documents" },
  
  // PDF Tools
  { id: "pdf-converter", name: "PDF Converter", description: "Convert to/from PDF (Word, Excel, Images)", icon: FileText, type: "client", category: "PDF" },
  { id: "pdf-merger", name: "PDF Merger", description: "Combine multiple PDFs into one", icon: FileText, type: "client", category: "PDF" },
  { id: "pdf-splitter", name: "PDF Splitter", description: "Split PDFs into separate pages", icon: Scissors, type: "client", category: "PDF" },
  { id: "pdf-compressor", name: "PDF Compressor", description: "Reduce PDF file size", icon: Minimize, type: "client", category: "PDF" },
  
  // Document Generators
  { id: "invoice-generator", name: "Invoice Generator", description: "Create professional invoices", icon: DollarSign, type: "client", category: "Business" },
  { id: "contract-templates", name: "Contract Templates", description: "Generate legal contract templates", icon: FileText, type: "client", category: "Business" },
  { id: "certificate-generator", name: "Certificate Generator", description: "Create custom certificates", icon: Star, type: "client", category: "Business" },
  
  // Planning Tools
  { id: "calendar-generator", name: "Calendar Generator", description: "Create printable calendars", icon: Calendar, type: "client", category: "Planning" },
  { id: "checklist-maker", name: "Checklist Maker", description: "Build and print checklists", icon: List, type: "client", category: "Planning" },
  
  // Diagrams
  { id: "flowchart-builder", name: "Flowchart Builder", description: "Create flowcharts and diagrams", icon: Share2, type: "client", category: "Diagrams" },
  { id: "mind-map-maker", name: "Mind Map Maker", description: "Build visual mind maps", icon: Share2, type: "client", category: "Diagrams" },
];

// ============================================
// CALCULATORS HUB - Curated Essential Tools
// ============================================
const calculatorsTools: SubTool[] = [
  // Math
  { id: "percentage-calculator", name: "Percentage Calculator", description: "Calculate percentages and changes", icon: Calculator, type: "client", category: "Math" },
  { id: "scientific-calculator", name: "Scientific Calculator", description: "Advanced mathematical calculations", icon: Calculator, type: "client", category: "Math" },
  { id: "unit-converter", name: "Unit Converter", description: "Convert between any units", icon: RefreshCw, type: "client", category: "Conversion" },
  
  // Financial
  { id: "currency-converter", name: "Currency Converter", description: "Convert between world currencies", icon: DollarSign, type: "client", category: "Finance" },
  { id: "loan-calculator", name: "Loan Calculator", description: "Calculate loan payments and interest", icon: DollarSign, type: "client", category: "Finance" },
  { id: "investment-calculator", name: "Investment Calculator", description: "Calculate ROI and compound interest", icon: TrendingUp, type: "client", category: "Finance" },
  { id: "tax-calculator", name: "Tax Calculator", description: "Estimate income and sales tax", icon: DollarSign, type: "client", category: "Finance" },
  { id: "tip-calculator", name: "Tip Calculator", description: "Calculate tips and split bills", icon: DollarSign, type: "client", category: "Finance" },
  
  // Health
  { id: "bmi-calculator", name: "BMI Calculator", description: "Calculate body mass index", icon: Heart, type: "client", category: "Health" },
  { id: "calorie-calculator", name: "Calorie Calculator", description: "Calculate daily calorie needs", icon: Heart, type: "client", category: "Health" },
  { id: "pace-calculator", name: "Pace Calculator", description: "Calculate running/cycling pace", icon: Clock, type: "client", category: "Health" },
  
  // Date & Time
  { id: "age-calculator", name: "Age Calculator", description: "Calculate exact age in years/months/days", icon: Calendar, type: "client", category: "Date" },
  { id: "date-difference", name: "Date Difference Calculator", description: "Calculate days between dates", icon: Calendar, type: "client", category: "Date" },
  { id: "time-zone-converter", name: "Time Zone Converter", description: "Convert times between zones", icon: Globe, type: "client", category: "Date" },
  
  // Random
  { id: "random-generator", name: "Random Generator", description: "Generate random numbers and picks", icon: Zap, type: "client", category: "Random" },
  { id: "password-generator", name: "Password Generator", description: "Create strong secure passwords", icon: Lock, type: "client", category: "Random" },
];

// ============================================
// DEVELOPER TOOLS HUB - Curated Essential Tools
// ============================================
const devToolsTools: SubTool[] = [
  // JSON/Data
  { id: "json-formatter", name: "JSON Formatter", description: "Format, validate and beautify JSON", icon: FileJson, type: "client", category: "Data" },
  { id: "json-to-csv", name: "JSON/CSV Converter", description: "Convert between JSON, CSV, XML", icon: Table, type: "client", category: "Data" },
  { id: "yaml-json", name: "YAML/JSON Converter", description: "Convert between YAML and JSON", icon: FileCode, type: "client", category: "Data" },
  
  // Code Formatting
  { id: "html-formatter", name: "HTML Formatter", description: "Format and minify HTML", icon: Code, type: "client", category: "Formatting" },
  { id: "css-formatter", name: "CSS Formatter", description: "Format, minify CSS and generate prefixes", icon: Palette, type: "client", category: "Formatting" },
  { id: "js-formatter", name: "JavaScript Formatter", description: "Format and minify JavaScript", icon: FileCode, type: "client", category: "Formatting" },
  { id: "sql-formatter", name: "SQL Formatter", description: "Format and beautify SQL queries", icon: Database, type: "client", category: "Formatting" },
  
  // Regex & Testing
  { id: "regex-tester", name: "Regex Tester", description: "Test and debug regular expressions", icon: Code, type: "client", category: "Testing" },
  { id: "diff-checker", name: "Diff Checker", description: "Compare and diff text/code", icon: Code, type: "client", category: "Testing" },
  
  // Security
  { id: "jwt-decoder", name: "JWT Decoder", description: "Decode and verify JWT tokens", icon: Lock, type: "client", category: "Security" },
  { id: "hash-generator", name: "Hash Generator", description: "Generate MD5, SHA256, SHA512 hashes", icon: Lock, type: "client", category: "Security" },
  { id: "uuid-generator", name: "UUID Generator", description: "Generate unique identifiers", icon: Key, type: "client", category: "Generators" },
  
  // Network
  { id: "ip-lookup", name: "IP Address Lookup", description: "Get IP info, location and ISP", icon: Globe, type: "client", category: "Network" },
  { id: "dns-lookup", name: "DNS Lookup", description: "Query DNS records for domains", icon: Globe, type: "client", category: "Network" },
  { id: "http-status", name: "HTTP Status Codes", description: "Reference for HTTP status codes", icon: Code, type: "client", category: "Network" },
  
  // Generators
  { id: "cron-generator", name: "Cron Expression Generator", description: "Build and explain cron jobs", icon: Clock, type: "client", category: "Generators" },
  { id: "gitignore-generator", name: ".gitignore Generator", description: "Generate gitignore files", icon: FileCode, type: "client", category: "Generators" },
];

// ============================================
// SECURITY HUB - Curated Essential Tools
// ============================================
const securityTools: SubTool[] = [
  // Password Tools
  { id: "password-generator-secure", name: "Secure Password Generator", description: "Generate strong, random passwords", icon: Lock, type: "client", category: "Passwords" },
  { id: "password-strength", name: "Password Strength Checker", description: "Test password security level", icon: ShieldCheck, type: "client", category: "Passwords" },
  
  // Hash & Encryption
  { id: "hash-tool", name: "Hash Generator & Checker", description: "Generate and verify file hashes", icon: Lock, type: "client", category: "Encryption" },
  { id: "encryption-tool", name: "Text Encryption Tool", description: "Encrypt and decrypt text", icon: Key, type: "client", category: "Encryption" },
  
  // Token Generators
  { id: "api-key-generator", name: "API Key Generator", description: "Generate secure API keys", icon: Key, type: "client", category: "Tokens" },
  { id: "otp-generator", name: "OTP Generator", description: "Generate one-time passwords", icon: Lock, type: "client", category: "Tokens" },
  
  // SSL & Certificates
  { id: "ssl-checker", name: "SSL Certificate Checker", description: "Check SSL certificate validity", icon: ShieldCheck, type: "client", category: "Certificates" },
  { id: "csr-generator", name: "CSR Generator", description: "Generate certificate signing requests", icon: FileText, type: "client", category: "Certificates" },
  
  // Privacy
  { id: "metadata-remover", name: "Image Metadata Remover", description: "Remove EXIF data from images", icon: Eye, type: "client", category: "Privacy" },
  { id: "browser-fingerprint", name: "Browser Fingerprint Checker", description: "Check your browser fingerprint", icon: Fingerprint, type: "client", category: "Privacy" },
  
  // Security Headers
  { id: "security-headers", name: "Security Headers Checker", description: "Check website security headers", icon: Shield, type: "client", category: "Analysis" },
  { id: "csp-generator", name: "CSP Generator", description: "Generate Content Security Policy", icon: Shield, type: "client", category: "Headers" },
  
  // Compliance
  { id: "privacy-policy-generator", name: "Privacy Policy Generator", description: "Generate privacy policy documents", icon: FileText, type: "client", category: "Compliance" },
  { id: "terms-generator", name: "Terms of Service Generator", description: "Generate terms and conditions", icon: FileText, type: "client", category: "Compliance" },
];

// ============================================
// UTILITIES HUB - Curated Essential Tools
// ============================================
const utilitiesTools: SubTool[] = [
  // Time Tools
  { id: "world-clock", name: "World Clock", description: "View time across multiple zones", icon: Clock, type: "client", category: "Time" },
  { id: "countdown-timer", name: "Countdown Timer", description: "Create countdown timers", icon: Clock, type: "client", category: "Time" },
  { id: "pomodoro-timer", name: "Pomodoro Timer", description: "Focus timer for productivity", icon: Clock, type: "client", category: "Time" },
  
  // Notes & Lists
  { id: "notepad", name: "Online Notepad", description: "Quick notes that save locally", icon: FileText, type: "client", category: "Notes" },
  { id: "markdown-editor", name: "Markdown Editor", description: "Write and preview Markdown", icon: FileText, type: "client", category: "Notes" },
  { id: "todo-list", name: "To-Do List", description: "Simple task management", icon: List, type: "client", category: "Lists" },
  
  // QR & Links
  { id: "qr-reader", name: "QR Code Reader", description: "Scan and read QR codes", icon: QrCode, type: "client", category: "Codes" },
  { id: "barcode-generator", name: "Barcode Generator", description: "Create various barcode types", icon: Barcode, type: "client", category: "Codes" },
  { id: "url-shortener", name: "URL Shortener Helper", description: "Create shortened URLs", icon: Link, type: "client", category: "Links" },
  
  // Testing
  { id: "webcam-test", name: "Webcam Test", description: "Test your webcam and microphone", icon: Camera, type: "client", category: "Testing" },
  { id: "speed-test-info", name: "Internet Speed Test Info", description: "Test your connection speed", icon: Wifi, type: "client", category: "Testing" },
  
  // Emoji & Symbols
  { id: "emoji-picker", name: "Emoji Picker", description: "Search and copy emojis", icon: Heart, type: "client", category: "Emoji" },
  { id: "symbol-finder", name: "Special Characters", description: "Find and copy special symbols", icon: Type, type: "client", category: "Emoji" },
  
  // Fun
  { id: "dice-roller", name: "Dice Roller", description: "Roll dice for games", icon: Circle, type: "client", category: "Fun" },
  { id: "coin-flipper", name: "Coin Flipper", description: "Flip a coin for decisions", icon: Circle, type: "client", category: "Fun" },
];

// ============================================
// EXPORT ALL HUBS
// ============================================
export const toolHubs: ToolHub[] = [
  {
    id: "ai-content",
    name: "AI Content Hub",
    description: "Essential AI writing and text tools",
    icon: MessageSquare,
    path: "/hub/ai-content",
    color: "from-purple-500 to-pink-500",
    subTools: aiContentTools,
  },
  {
    id: "social-media",
    name: "Social Media Hub",
    description: "Tools for TikTok, Instagram, YouTube & more",
    icon: Video,
    path: "/hub/social-media",
    color: "from-pink-500 to-red-500",
    subTools: socialMediaTools,
  },
  {
    id: "seo-marketing",
    name: "SEO & Marketing Hub",
    description: "SEO and digital marketing essentials",
    icon: Search,
    path: "/hub/seo-marketing",
    color: "from-green-500 to-teal-500",
    subTools: seoMarketingTools,
  },
  {
    id: "image-design",
    name: "Image & Design Hub",
    description: "Image editing and design tools",
    icon: Palette,
    path: "/hub/image-design",
    color: "from-orange-500 to-yellow-500",
    subTools: imageDesignTools,
  },
  {
    id: "video-audio",
    name: "Video & Audio Hub",
    description: "Video and audio conversion tools",
    icon: Music,
    path: "/hub/video-audio",
    color: "from-red-500 to-pink-500",
    subTools: videoAudioTools,
  },
  {
    id: "documents",
    name: "Documents Hub",
    description: "Document and file conversion tools",
    icon: FileUp,
    path: "/hub/documents",
    color: "from-blue-500 to-indigo-500",
    subTools: documentsTools,
  },
  {
    id: "calculators",
    name: "Calculators Hub",
    description: "Calculators and converters",
    icon: Calculator,
    path: "/hub/calculators",
    color: "from-cyan-500 to-blue-500",
    subTools: calculatorsTools,
  },
  {
    id: "dev-tools",
    name: "Developer Tools Hub",
    description: "Essential tools for developers",
    icon: Code,
    path: "/hub/dev-tools",
    color: "from-gray-500 to-zinc-500",
    subTools: devToolsTools,
  },
  {
    id: "security",
    name: "Security & Privacy Hub",
    description: "Security and privacy tools",
    icon: Shield,
    path: "/hub/security",
    color: "from-emerald-500 to-green-500",
    subTools: securityTools,
  },
  {
    id: "utilities",
    name: "Utilities Hub",
    description: "Everyday utility tools",
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
