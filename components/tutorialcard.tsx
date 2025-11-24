import React from 'react';
import { SectionData } from '../types';
// Pastikan import ini sama persis (C besar, S besar) dan satu folder
import { CodeSnippet } from './CodeSnippet';
import { PlayCircle, Cpu, Settings, Image as ImageIcon, FileCode, Search, Download, ExternalLink } from 'lucide-react';
import { YOUTUBE_LINK } from '../constants';

interface TutorialCardProps {
  data: SectionData;
}

const getIcon = (type: string) => {
  switch (type) {
    case 'config': return <Cpu className="text-[#D20061]" />;
    case 'text': return <Settings className="text-purple-400" />;
    case 'steps': return <ImageIcon className="text-pink-400" />;
    case 'script': return <FileCode className="text-yellow-400" />;
    case 'video': return <PlayCircle className="text-red-500" />;
    default: return <Search className="text-blue-400" />;
  }
};

export const TutorialCard: React.FC<TutorialCardProps> = ({ data }) => {
  return (
    <div id={data.id} className="scroll-mt-24 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-slate-800/50 ring-1 ring-slate-700/50">
          {getIcon(data.type)}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{data.title}</h2>
      </div>

      <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl">
        
        {data.content && (
          <div className="prose prose-invert max-w-none mb-6 text-slate-300 leading-relaxed whitespace-pre-wrap">
            {data.content}
          </div>
        )}

        {data.links && (
          <div className="flex flex-wrap gap-4 mb-8">
            {data.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-[#D20061] text-white rounded-lg font-bold transition-colors border border-slate-700 hover:border-[#D20061]"
              >
                {link.label.toLowerCase().includes('download') ? <Download size={18} /> : <ExternalLink size={18} />}
                {link.label}
              </a>
            ))}
          </div>
        )}

        {data.subSections?.map((sub, idx) => (
          <div key={idx} className="mb-8 last:mb-0">
            <h3 className="text-lg font-semibold text-[#ff80b3] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D20061]"></span>
              {sub.title}
            </h3>
            <div className="grid gap-2">
              {sub.items.map((item, i) => (
                <CodeSnippet key={i} command={item.command} description={item.description} />
              ))}
            </div>
          </div>
        ))}

        {data.items && (
          <div className="grid gap-2">
            {data.items.map((item, idx) => (
              <CodeSnippet key={idx} command={item.command} description={item.description} />
            ))}
          </div>
        )}

        {data.steps && (
          <ol className="relative border-l border-slate-700 ml-3 space-y-6 mt-4">
            {data.steps.map((step, idx) => (
              <li key={idx} className="ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-slate-800 rounded-full -left-3 ring-4 ring-slate-900 text-xs font-bold text-[#D20061] border border-[#D20061]/30">
                  {idx + 1}
                </span>
                <p className="text-slate-300 leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        )}

        {data.type === 'video' && (
          <div className="mt-4 flex flex-col items-center justify-center p-8 bg-slate-800/30 rounded-xl border border-dashed border-slate-700">
            <p className="text-slate-400 mb-6 text-center max-w-md">
              Tonton tutorial visual lengkap mengenai penambahan senjata dan skin versi terbaru di YouTube.
            </p>
            <a 
              href={YOUTUBE_LINK} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-red-900/20"
            >
              <PlayCircle size={20} fill="currentColor" />
              Buka Playlist YouTube
            </a>
          </div>
        )}
      </div>
    </div>
  );
};