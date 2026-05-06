"use client";

import { useState } from "react";

const CopyAllSEOButton = ({ title, metaDescription, keywords }: { title: string; metaDescription: string; keywords: string[] }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const text = `${title}\n\n${metaDescription}\n\nKeywords: ${keywords.join(", ")}`;
    navigator.clipboard.writeText(text).then(() => setCopied(true));
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <button      onClick={handleCopy}
      className="px-4 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
      {...(copied ? { "aria-label": "Copied!" } : {})}
    >
      {copied ? "Copied!" : "Copy All SEO"}
    </button>
  );
};

export default CopyAllSEOButton;