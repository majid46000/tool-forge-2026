import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface RequestBody {
  type: "article" | "blog" | "caption";
  prompt: string;
  platform?: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("AI service is not configured");
    }

    const { type, prompt, platform } = await req.json() as RequestBody;

    if (!prompt?.trim()) {
      return new Response(
        JSON.stringify({ error: "Please provide a prompt" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    let systemPrompt = "";
    let userPrompt = "";

    switch (type) {
      case "article":
        systemPrompt = "You are a professional content writer. Create high-quality, engaging articles and text content based on user prompts. Format your response in clean markdown with proper headings, bullet points, and structure.";
        userPrompt = prompt;
        break;
      case "blog":
        systemPrompt = "You are an expert blog writer and SEO specialist. Create comprehensive, engaging, and SEO-optimized blog posts with proper headings, subheadings, and formatting in markdown. Include an engaging introduction, multiple sections with h2 and h3 headings, bullet points where appropriate, and a compelling conclusion.";
        userPrompt = `Write a complete, SEO-optimized blog post about: ${prompt}`;
        break;
      case "caption":
        systemPrompt = `You are a social media expert specializing in ${platform || "general"} content. Create engaging, platform-appropriate captions that drive engagement. Be creative, use relevant emojis, and include trending phrases for 2026.`;
        userPrompt = `Generate 4 unique, engaging social media captions for ${platform || "social media"} about: ${prompt}. Format each caption on its own line, numbered 1-4.`;
        break;
      default:
        systemPrompt = "You are a helpful AI assistant. Create high-quality content based on the user's request.";
        userPrompt = prompt;
    }

    console.log(`Generating ${type} content for prompt: ${prompt.substring(0, 50)}...`);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);

      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Daily limit reached. Please try again tomorrow." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      throw new Error("Failed to generate content");
    }

    const data = await response.json();
    const generatedText = data.choices?.[0]?.message?.content;

    if (!generatedText) {
      throw new Error("No content generated");
    }

    console.log(`Successfully generated ${type} content`);

    return new Response(
      JSON.stringify({ content: generatedText }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in generate-ai-content function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Failed to generate content" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
