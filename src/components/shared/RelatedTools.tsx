import { Link } from "react-router-dom";
import { 
  MessageSquare, 
  FileText, 
  Download, 
  Hash, 
  Palette, 
  Search, 
  Music, 
  Instagram, 
  FileUp, 
  TrendingUp 
} from "lucide-react";

const allTools = [
  { path: "/chatgpt-ai", title: "Free ChatGPT Alternative", icon: MessageSquare, keywords: "AI chat, text generation" },
  { path: "/ai-blog-writer", title: "AI Blog Writer", icon: FileText, keywords: "article generator, content writer" },
  { path: "/tiktok-downloader", title: "TikTok Downloader", icon: Download, keywords: "video download, no watermark" },
  { path: "/tiktok-hashtag-finder", title: "TikTok Hashtag Finder", icon: Hash, keywords: "trending hashtags, viral tags" },
  { path: "/canva-template-generator", title: "Canva Template Generator", icon: Palette, keywords: "social media templates" },
  { path: "/seo-keyword-generator", title: "SEO Keyword Generator", icon: Search, keywords: "keyword research, SEO tools" },
  { path: "/video-to-mp3-converter", title: "Video to MP3 Converter", icon: Music, keywords: "audio extraction" },
  { path: "/social-media-caption-generator", title: "Caption Generator", icon: Instagram, keywords: "social media captions" },
  { path: "/pdf-doc-converter", title: "PDF DOC Converter", icon: FileUp, keywords: "document conversion" },
  { path: "/trending-content-finder", title: "Trending Content Finder", icon: TrendingUp, keywords: "viral content ideas" },
];

interface RelatedToolsProps {
  currentPath: string;
  maxTools?: number;
}

export function RelatedTools({ currentPath, maxTools = 4 }: RelatedToolsProps) {
  const relatedTools = allTools
    .filter(tool => tool.path !== currentPath)
    .slice(0, maxTools);

  return (
    <section className="mt-12 pt-8 border-t border-border" aria-labelledby="related-tools-heading">
      <h2 id="related-tools-heading" className="text-xl font-semibold mb-4 text-foreground">
        Related Free AI Tools You'll Love
      </h2>
      <nav aria-label="Related tools">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedTools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <li key={tool.path}>
                <Link
                  to={tool.path}
                  className="flex flex-col items-center p-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors text-center group"
                  title={`Try our ${tool.title} - ${tool.keywords}`}
                >
                  <IconComponent className="w-8 h-8 mb-2 text-primary group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground">{tool.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <p className="mt-4 text-sm text-muted-foreground text-center">
        Explore more <Link to="/" className="text-primary hover:underline">free AI tools</Link> for content creation, SEO, and social media.
      </p>
    </section>
  );
}
