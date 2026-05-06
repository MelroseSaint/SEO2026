import React, { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface SEOToolProps {
  initialKeyword?: string;
}

const SEOTool: React.FC<SEOToolProps> = ({ initialKeyword = "" }) => {
  const [keyword, setKeyword] = useState(initialKeyword);
  const [results, setResults] = useState<{
    keywords: string[];
    serpData: { title: string; snippet: string; url: string }[];
  }>({ keywords: [], serpData: [] });
  const [content, setContent] = useState("");
  const [optimizedContent, setOptimizedContent] = useState("");
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const fetchKeywordData = () => {
    try {
      const mockKeywords = [
        "SEO 2026 trends",
        "AI SEO tools",
        "voice search optimization",
        "semantic SEO",
        "core web vitals 2026",
        "local SEO 2026",
      ];
      const mockSerp = [
        {
          title: "2026 SEO Trends: What to Expect",
          snippet:
            "AI-driven SEO, voice search, and semantic optimization will dominate 2026. Learn how to prepare your content strategy.",
          url: "https://example.com/seo-2026-trends",
        },
        {
          title: "Top 10 SEO Tools for Freelancers in 2026",
          snippet:
            "Discover the best tools for keyword research, content optimization, and SERP analysis.",
          url: "https://example.com/seo-tools-2026",
        },
      ];
      setResults({ keywords: mockKeywords, serpData: mockSerp });
      toast({ title: "Keyword data loaded successfully!" });
    } catch (error) {
      toast({
        title: "Failed to load keyword data. Please try again.",
        variant: "destructive",
      });
    }
  };

  const analyzeContent = () => {
    if (!content || !results.serpData.length) return;

    const serpKeywords = results.serpData
      .flatMap((result) => result.snippet.split(/\s+/))
      .map((w) => w.toLowerCase());

    const optimized = content
      .split(/\s+/)
      .map((word) =>
        serpKeywords.includes(word.toLowerCase())
          ? word
          : `<span class="text-red-500">${word}</span>`,
      )
      .join(" ");

    setOptimizedContent(optimized);
  };

  useEffect(() => {
    if (keyword) fetchKeywordData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  return (
    <TooltipProvider>
      <div
        className={cn(
          "flex flex-col md:flex-row w-full",
          "space-y-6 md:space-y-0 md:space-x-6",
        )}
      >
        {/* Keyword input */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Enter seed keyword (e.g. SEO 2026)"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={fetchKeywordData}
            className="mt-3 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Search Keywords
          </button>
        </div>

        {/* Related keywords */}
        {results.keywords.length > 0 && (
          <div className="flex-1 bg-gray-800 p-5 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              Related Keywords
            </h3>
            <ul className="space-y-2">
              {results.keywords.map((kw, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between p-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <span className="flex-1 text-gray-200">{kw}</span>
                  <span className="text-sm text-gray-400">
                    {Math.floor(Math.random() * 1000) + 100} monthly searches
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* SERP insights */}
        {results.serpData.length > 0 && (
          <div className="flex-1 bg-gray-800 p-5 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              SERP Insights
            </h3>
            <div className="space-y-4">
              {results.serpData.map((result, i) => (
                <div
                  key={i}
                  className="bg-gray-900 p-4 rounded-lg shadow-md border border-gray-700"
                >
                  <h4 className="text-lg font-medium mb-2 text-blue-300">
                    {result.title}
                  </h4>
                  <p className="text-gray-300 text-sm">{result.snippet}</p>
                  <div className="mt-3 flex items-center space-x-4">
                    <span className="text-xs text-gray-400 truncate max-w-[200px]">
                      URL: {result.url}
                    </span>
                    <span className="text-xs text-gray-400">
                      {Math.floor(Math.random() * 500) + 50} backlinks
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content optimizer */}
        <div className="flex-1 bg-gray-800 p-5 rounded-xl border border-gray-700">
          <h3 className="text-xl font-semibold mb-3 text-blue-400">
            Content Optimizer
          </h3>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            placeholder="Paste your content here to optimize for target keywords..."
            rows={10}
          />
          <button
            onClick={analyzeContent}
            className="mt-3 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Optimize Content
          </button>
        </div>

        {/* Optimized preview */}
        {optimizedContent && (
          <div className="flex-1 bg-gray-800 p-5 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              Optimized Preview
            </h3>
            <div
              className="bg-gray-900 p-4 rounded-lg shadow-md border border-gray-700 text-sm text-gray-200"
              dangerouslySetInnerHTML={{ __html: optimizedContent }}
            />
          </div>
        )}
      </div>
    </TooltipProvider>
  );
};

export default SEOTool;