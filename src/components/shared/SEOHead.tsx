import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article";
  jsonLd?: object;
}

export function SEOHead({ 
  title, 
  description, 
  canonical,
  type = "website",
  jsonLd 
}: SEOHeadProps) {
  const baseUrl = "https://toolhub2026.com";
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;

  // Default WebSite structured data
  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ToolHub 2026",
    "url": baseUrl,
    "description": "Free AI tools 2026: ChatGPT alternative, AI blog writer, TikTok downloader no watermark, hashtag finder, caption generator & more – all free, no signup.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="ToolHub 2026" />
      <meta property="og:image" content={`${baseUrl}/og-image.png`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}/og-image.png`} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="ToolHub 2026" />
      <meta name="keywords" content="free AI tools 2026, ChatGPT alternative free, TikTok downloader no watermark, AI blog writer free, free TikTok tools, best free AI content generator, SEO tools, social media tools" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd || defaultJsonLd)}
      </script>
    </Helmet>
  );
}
