import React from "react";  
import { MadeWithDyad } from "@/components/made-with-dyad";  
import SEOTool from "@/components/seo-tool";  

const Index = () => {  
  return (  
    <div className="min-h-screen bg-gray-900 text-white">  
      <div className="container mx-auto px-4 py-12">  
        <div className="text-center mb-12">  
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">SEO Toolkit 2026</h1>  
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">AI-powered keyword research, SERP analysis, and content optimization built for modern SEO freelancers</p>  
        </div>  
        <SEOTool />  
        <div className="mt-8">  
          <MadeWithDyad />  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Index;