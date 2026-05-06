import React, { useState, useEffect } from "react";  
import { useToast } from "@/components/ui/use-toast";  
import { Toaster } from "@/components/ui/toaster";  
import { Sonner } from "@/components/ui/sonner";  
import { TooltipProvider } from "@/components/ui/tooltip";  
import { useIsMobile } from "@/hooks/use-mobile";  
import { cn } from "@/lib/utils";  

interface SEOToolProps {  
  initialKeyword?: string;  
}  

const SEOTool: React.FC<SEOToolProps> = ({ initialKeyword = "" }) => {  
  const [keyword, setKeyword] = useState(initialKeyword);  
  const [results, setResults] = useState<{ keywords: string[], serpData: any[] }>({ keywords: [], serpData: [] });  
  const [content, setContent] = useState("");  
  const [optimizedContent, setOptimizedContent] = useState("");  
  const { toast } = useToast();  
  const isMobile = useIsMobile();  

  const fetchKeywordData = async () => {  
    try {  
      // Mock API call (replace with real API like SerpAPI or Ahrefs)  
      const response = await fetch(`https://mock-serp-api.com/keyword?query=${encodeURIComponent(keyword)}`);  
      const data = await response.json();  
      setResults({  
        keywords: data.related_keywords,  
        serpData: data.top_results  
      });  
      toast("Keyword data fetched successfully!");  
    } catch (error) {  
      toast("Failed to fetch keyword data. Please try again.");  
    }  
  };  

  const analyzeContent = () => {  
    if (!content || !results.serpData.length) return;  

    // Mock content optimization logic  
    const optimized = content  
      .split(" ")  
      .map(word => results.serpData.some(result => result.content.includes(word)) ? word : `<span class="text-red-500">${word}</span>`)  
      .join(" ");  

    setOptimizedContent(optimized);  
  };  

  useEffect(() => {  
    if (keyword) fetchKeywordData();  
  }, [keyword]);  

  return (  
    <div className={cn("flex flex-col md:flex-row", "space-y-4 md:space-y-0 md:space-x-4")}  
      style={{ background: "dark", padding: "2rem" }}>  
      <div className="flex-1 mb-4 md:mb-0">  
        <input  
          type="text"  
          placeholder="Enter seed keyword"  
          value={keyword}  
          onChange={(e) => setKeyword(e.target.value)}  
          className="w-full p-2 rounded-lg"  
        />  
        <button  
          onClick={fetchKeywordData}  
          className="mt-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"  
        >  
          Search Keywords  
        </button>  
      </div>  

      {results.keywords.length > 0 && (  
        <div className="flex-1 mb-4 md:mb-0">  
          <h3 className="text-xl font-medium mb-2">Related Keywords</h3>  
          <ul className="space-y-2">  
            {results.keywords.map((kw, i) => (  
              <li key={i} className="flex items-center justify-between">  
                <span className="flex-1">{kw}</span>  
                <span className="text-sm text-gray-400">Volume: {Math.floor(Math.random() * 1000)}</span>  
              </li>  
            ))}  
          </ul>  
        </div>  
      )}  

      {results.serpData.length > 0 && (  
        <div className="flex-1 mb-4 md:mb-0">  
          <h3 className="text-xl font-medium mb-2">SERP Insights</h3>  
          <div className="space-y-4">  
            {results.serpData.map((result, i) => (  
              <div key={i} className="bg-gray-900 p-4 rounded-lg shadow-md">  
                <h4 className="text-lg font-medium mb-2">{result.title}</h4>  
                <p className="text-gray-400">{result.snippet}</p>  
                <div className="mt-2">  
                  <span className="text-sm text-gray-400">URL: {result.url}</span>  
                  <span className="ml-4 text-sm text-gray-400">Backlinks: {Math.floor(Math.random() * 1000)}</span>  
                </div>  
              </div>  
            ))}  
          </div>  
        </div>  
      )}  

      <div className="flex-1 mb-4 md:mb-0">  
        <h3 className="text-xl font-medium mb-2">Content Optimizer</h3>  
        <textarea  
          value={content}  
          onChange={(e) => setContent(e.target.value)}  
          className="w-full p-2 rounded-lg"  
          placeholder="Paste your content here"  
          rows={10}  
        />  
        <button  
          onClick={analyzeContent}  
          className="mt-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"  
        >  
          Optimize Content  
        </button>  
      </div>  

      {optimizedContent && (  
        <div className="flex-1 mb-4 md:mb-0">  
          <h3 className="text-xl font-medium mb-2">Optimized Content Preview</h3>  
          <div className="bg-gray-900 p-4 rounded-lg shadow-md">  
            <div dangerouslySetInnerHTML={{ __html: optimizedContent }} />  
          </div>  
        </div>  
      )}  

      <Toaster />  
      <Sonner />  
    </div>  
  );  
};  

export default SEOTool;  