"use client";

import { useState } from "react";

const CopyButton = ({ text, children }: { text: string; children: React.ReactNode }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => setCopied(true));
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button      onClick={handleCopy}
      className="px-3 py-1 rounded bg-gray-700 text-white text-sm hover:bg-gray-800 transition-colors"
      {...(copied ? { "aria-label": "Copied!" } : {})}
    >
      {copied ? "Copied!" : children}
    </button>
  );
};

export default CopyButton;