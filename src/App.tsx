import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load pages
const ChatGPTAI = lazy(() => import("./pages/tools/ChatGPTAI"));
const TikTokDownloader = lazy(() => import("./pages/tools/TikTokDownloader"));
const TikTokHashtagFinder = lazy(() => import("./pages/tools/TikTokHashtagFinder"));
const CanvaTemplateGenerator = lazy(() => import("./pages/tools/CanvaTemplateGenerator"));
const SEOKeywordGenerator = lazy(() => import("./pages/tools/SEOKeywordGenerator"));
const VideoToMP3Converter = lazy(() => import("./pages/tools/VideoToMP3Converter"));
const AIBlogWriter = lazy(() => import("./pages/tools/AIBlogWriter"));
const SocialMediaCaptionGenerator = lazy(() => import("./pages/tools/SocialMediaCaptionGenerator"));
const PDFDocConverter = lazy(() => import("./pages/tools/PDFDocConverter"));
const TrendingContentFinder = lazy(() => import("./pages/tools/TrendingContentFinder"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const HubPage = lazy(() => import("./pages/HubPage"));
const SubToolPage = lazy(() => import("./pages/SubToolPage"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <title>ToolHub 2026 – 1000+ Free Online Tools for AI, SEO & Social Media</title>
          <meta name="description" content="Access 1000+ powerful free online tools for 2026. AI content generation, TikTok downloads, SEO keywords, social media optimization, and more. No signup required." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="https://toolhub2026.com" />
        </Helmet>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/hub/:hubId" element={<HubPage />} />
              <Route path="/hub/:hubId/:toolId" element={<SubToolPage />} />
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
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
