import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ChatGPTAI from "./pages/tools/ChatGPTAI";
import TikTokDownloader from "./pages/tools/TikTokDownloader";
import TikTokHashtagFinder from "./pages/tools/TikTokHashtagFinder";
import CanvaTemplateGenerator from "./pages/tools/CanvaTemplateGenerator";
import SEOKeywordGenerator from "./pages/tools/SEOKeywordGenerator";
import VideoToMP3Converter from "./pages/tools/VideoToMP3Converter";
import AIBlogWriter from "./pages/tools/AIBlogWriter";
import SocialMediaCaptionGenerator from "./pages/tools/SocialMediaCaptionGenerator";
import PDFDocConverter from "./pages/tools/PDFDocConverter";
import TrendingContentFinder from "./pages/tools/TrendingContentFinder";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <title>ToolHub 2026 – Free Online Tools for AI, SEO & Social Media</title>
          <meta
            name="description"
            content="Access 10 powerful free online tools for 2026. AI content generation, TikTok downloads, SEO keywords, social media optimization, and more. No signup required."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="https://toolhub2026.com" />
        </Helmet>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/chatgpt-ai" element={<ChatGPTAI />} />
            <Route path="/tiktok-downloader" element={<TikTokDownloader />} />
            <Route path="/tiktok-hashtag-finder" element={<TikTokHashtagFinder />} />
            <Route path="/canva-template-generator" element={<CanvaTemplateGenerator />} />
            <Route path="/seo-keyword-generator" element={<SEOKeywordGenerator />} />
            <Route path="/video-to-mp3-converter" element={<VideoToMP3Converter />} />
            <Route path="/ai-blog-writer" element={<AIBlogWriter />} />
            <Route path="/social-media-caption-generator" element={<SocialMediaCaptionGenerator />} />
            <Route path="/pdf-doc-converter" element={<PDFDocConverter />} />
            <Route path="/trending-content-finder" element={<TrendingContentFinder />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
