import React, { useState } from "react";
import { CopyButton } from "@/components/seo-copy-button";
import SEOTool from "@/components/seo-tool";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const Index = () => {
  const [appDescription, setAppDescription] = useState("");
  const [generatedSEO, setGeneratedSEO] = useState<{
    title: string;
    metaDescription: string;
    keywords: string[];
    suggestedContent: string;
  } | null>(null);
  const { toast } = useToast();

  const analyzeDescription = () => {
    if (!appDescription.trim()) {
      toast({
        title: "Please enter a description of your app or site",
        variant: "destructive",
      });
      return;
    }

    // Extract key themes and generate SEO
    const lowerDesc = appDescription.toLowerCase();
    
    // Identify keywords based on common patterns
    const keywordPatterns = {
      ai: ["ai", "artificial intelligence", "machine learning", "smart", "automated"],
      ecommerce: ["shop", "store", "buy", "sell", "product", "cart", "checkout"],
      blog: ["blog", "article", "post", "content", "writer", "publish"],
      portfolio: ["portfolio", "showcase", "gallery", "work", "projects"],
      business: ["business", "company", "enterprise", "b2b", "service"],
      social: ["social", "community", "connect", "network", "share"],
      tool: ["tool", "utility", "helper", "generator", "builder"],
      app: ["app", "application", "software", "platform", "system"],
    };

    const detectedCategories = Object.entries(keywordPatterns)
      .filter(([_, patterns]) => patterns.some(p => lowerDesc.includes(p)))
      .map(([category]) => category);

    const primaryCategory = detectedCategories[0] || "tool";
    
    // Generate keywords
    const baseKeywords = [
      "2026",
      "online",
      "web",
      "digital",
      "modern",
      "efficient",
      "optimized",
    ];

    const categoryKeywords = {
      ai: ["AI-powered", "intelligent", "smart", "automated", "machine learning"],
      ecommerce: ["ecommerce", "online store", "shopping", "retail", "sales"],
      blog: ["blogging", "content creation", "writing", "publishing", "articles"],
      portfolio: ["portfolio", "showcase", "creative", "design", "projects"],
      business: ["business", "professional", "enterprise", "corporate", "B2B"],
      social: ["social", "community", "networking", "engagement", "connections"],
      tool: ["tool", "utility", "productivity", "helper", "solution"],
      app: ["application", "software", "platform", "system", "technology"],
    };

    const selectedKeywords = [
      ...baseKeywords,
      ...(categoryKeywords[primaryCategory as keyof typeof categoryKeywords] || categoryKeywords.tool),
    ];

    // Extract key features from description
    const sentences = appDescription.split(/[.!?]+/).filter(s => s.trim().length > 10);
    const keyFeatures = sentences.slice(0, 3).map(s => s.trim());

    // Generate SEO elements
    const title = `${appDescription.split(" ")[0]} - Modern ${primaryCategory.toUpperCase()} Solution for 2026`;
    const metaDescription = `${appDescription.substring(0, 150)}${appDescription.length > 150 ? "..." : ""} Discover the ${primaryCategory} that helps you work smarter in 2026.`;
    
    const suggestedContent = `
Welcome to our ${primaryCategory} platform designed for modern users. ${appDescription} 

${keyFeatures.length > 0 ? "Key features include:" : ""}
${keyFeatures.map((f, i) => `${i + 1}. ${f}`).join("\n")}

Built for 2026 and beyond, our solution combines cutting-edge technology with user-friendly design to help you achieve your goals efficiently. Whether you're looking to streamline your workflow or enhance your digital presence, we've got you covered.

Join thousands of satisfied users who trust our platform for their ${primaryCategory} needs.
`.trim();

    setGeneratedSEO({
      title,
      metaDescription,
      keywords: selectedKeywords,
      suggestedContent,
    });

    toast({
      title: "SEO Analysis Complete!",
      description: "Your optimized SEO elements have been generated.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            SEO Discovery Engine 2026          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your app or website description into powerful SEO that helps you rank higher on Google, Bing, and Yahoo.
          </p>
        </div>

        {/* SEO Description Analyzer */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Describe Your App or Website
            </h2>
            <p className="text-gray-400 mb-6">
              Tell us what your app or site does, who it's for, and what makes it special. We'll generate optimized SEO to help people discover you.
            </p>
                        <textarea
              value={appDescription}
              onChange={(e) => setAppDescription(e.target.value)}
              placeholder="Example: A modern task management app that helps remote teams collaborate efficiently with AI-powered suggestions and real-time updates..."
              className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg resize-none"
              rows={6}
            />
                        <button
              onClick={analyzeDescription}
              className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-blue-500/25"
            >
              Generate SEO
            </button>
          </div>
        </div>

        {/* Generated SEO Results */}
        {generatedSEO && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-blue-400 text-center">
              Your Optimized SEO Elements
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Title Tag */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold mb-3 text-green-400">
                  SEO Title Tag
                </h3>
                <p className="text-gray-300 text-sm mb-2">
                  This appears in search results as the clickable headline
                </p>
                <div className="flex items-center">
                  <div className="flex-1 bg-gray-900 p-4 rounded-lg border border-gray-700 overflow-x-auto">
                    <code className="text-blue-300 text-sm">{generatedSEO.title}</code>
                  </div>
                  <CopyButton text={generatedSEO.title} />
                </div>
              </div>

              {/* Meta Description */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold mb-3 text-purple-400">
                  Meta Description
                </h3>
                <p className="text-gray-300 text-sm mb-2">
                  The summary that appears below your title in search results
                </p>
                <div className="flex items-center">
                  <div className="flex-1 bg-gray-900 p-4 rounded-lg border border-gray-700 overflow-x-auto">
                    <p className="text-gray-300 text-sm">{generatedSEO.metaDescription}</p>
                  </div>
                  <CopyButton text={generatedSEO.metaDescription} />
                </div>
              </div>

              {/* Keywords */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 md:col-span-2">
                <h3 className="text-lg font-semibold mb-3 text-pink-400">
                  Target Keywords
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Use these keywords naturally in your content, titles, and descriptions
                </p>
                <div className="flex flex-wrap gap-2">
                  {generatedSEO.keywords.map((kw, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Suggested Content */}
            <div className="mt-8 bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold mb-3 text-yellow-400">
                Suggested Homepage Content
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Use this content structure for your homepage to improve search rankings
              </p>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <div className="prose prose-invert prose-blue max-w-none">
                  <pre className="text-gray-300 text-sm whitespace-pre-wrap font-sans">
                    {generatedSEO.suggestedContent}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Existing SEO Tool */}
        <SEOTool />
        
        <div className="mt-8">
          <MadeWithDyad />
        </div>
      </div>
    </div>
  );
};

export default Index;