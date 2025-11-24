import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeSnippetProps {
  command: string;
  description?: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ command, description }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative mb-3 overflow-hidden rounded-lg bg-slate-900 border border-slate-800 hover:border-[#D20061]/50 transition-all duration-300">
      <div className="flex items-start justify-between p-3 md:p-4">
        <div className="flex-1 min-w-0">
          <code className="block font-mono text-[#D20061] font-bold text-sm md:text-base whitespace-pre-wrap break-words">
            {command}
          </code>
          {description && (
            <p className="mt-1 text-slate-400 text-xs md:text-sm font-medium whitespace-pre-wrap break-words">
              // {description}
            </p>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="ml-4 p-2 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors shrink-0 mt-0.5"
          title="Copy command"
        >
          {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
        </button>
      </div>
    </div>
  );
};