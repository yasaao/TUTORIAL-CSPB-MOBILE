import React from 'react';
import { X, Gamepad2, ChevronRight, Home } from 'lucide-react';
import { TUTORIAL_DATA } from '../constants';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  activeTab: string;
  onTabChange: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, activeTab, onTabChange }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Content */}
      <aside 
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-80 bg-slate-900/95 backdrop-blur-xl border-r border-slate-800 transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-800 shrink-0">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onTabChange('home')}
          >
            <div className="w-9 h-9 rounded-lg bg-[#D20061] flex items-center justify-center shadow-lg shadow-[#D20061]/20 group-hover:scale-105 transition-transform">
              <Gamepad2 className="text-white" size={22} />
            </div>
            <h1 className="font-bold text-xl text-white tracking-tight group-hover:text-[#D20061] transition-colors">
              CSPB <span className="text-[#D20061]">MOBILE</span>
            </h1>
          </div>
          <button onClick={toggleSidebar} className="lg:hidden text-slate-400 hover:text-white p-1 hover:bg-slate-800 rounded">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-1 scrollbar-thin scrollbar-thumb-slate-800">
          <button
            onClick={() => onTabChange('home')}
            className={`w-full flex items-center gap-3 px-4 py-3 mb-4 rounded-xl text-sm font-bold transition-all duration-200 text-left ${
              activeTab === 'home'
                ? 'bg-gradient-to-r from-[#D20061]/20 to-[#D20061]/5 text-[#D20061] border border-[#D20061]/20 shadow-sm'
                : 'text-slate-400 hover:bg-slate-800/80 hover:text-white'
            }`}
          >
            <Home size={18} className={activeTab === 'home' ? 'text-[#D20061]' : 'text-slate-500'} />
            Beranda
          </button>

          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-4 mt-6">Daftar Tutorial</p>
          
          <div className="space-y-1">
            {TUTORIAL_DATA.map((section) => (
              <button
                key={section.id}
                onClick={() => onTabChange(section.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group text-left ${
                  activeTab === section.id
                    ? 'bg-slate-800 text-white border-l-4 border-[#D20061] shadow-md'
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 hover:translate-x-1'
                }`}
              >
                <span className="break-words">{section.title}</span>
                {activeTab === section.id && (
                  <ChevronRight size={14} className="text-[#D20061] shrink-0 ml-2" />
                )}
              </button>
            ))}
          </div>
        </nav>

        <div className="p-4 border-t border-slate-800 bg-slate-900/50 shrink-0">
          <div className="text-xs text-slate-500 text-center">
            Tutorial by <span className="text-slate-300 font-bold hover:text-[#D20061] cursor-pointer">@yasaao</span>
          </div>
        </div>
      </aside>
    </>
  );
};