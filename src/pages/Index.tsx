import React from "react";  
import { MadeWithDyad } from "@/components/made-with-dyad";  
import SEOTool from "@/components/seo-tool";  

const Index = () => {  
  return (  
    <div className="min-h-screen flex items-center justify-center bg-gray-100">  
      <div className="text-center">  
        <h1 className="text-4xl font-bold mb-4">Welcome to Your SEO Toolkit</h1>  
        <p className="text-xl text-gray-600">Start optimizing your content for 2026!</p>  
      </div>  
      <SEOTool />  
      <MadeWithDyad />  
    </div>  
  );  
};  

export default Index;  