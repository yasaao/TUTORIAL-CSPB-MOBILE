import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TutorialCard } from './components/TutorialCard';
import { TUTORIAL_DATA, YOUTUBE_LINK, DONATION_LINK, SKIN_WEB_LINK } from './constants';
import { Menu, ArrowRight, Youtube, Heart, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getActiveTutorial = () => {
    return TUTORIAL_DATA.find(t => t.id === activeTab);
  };

  const activeData = getActiveTutorial();

  return (
    <div className="min-h-screen bg-slate-950 flex font-sans text-slate-200">
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      <main className="flex-1 w-full relative flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="lg:hidden sticky top-0 z-30 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-4 py-3 flex items-center justify-between">
          <button 
            onClick={toggleSidebar}
            className="p-2 -ml-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 shrink-0"
          >
            <Menu size={24} />
          </button>
          <span className="font-bold text-white px-2 text-sm text-center">
            {activeTab === 'home' ? 'CSPB MOBILE' : activeData?.title || 'Tutorial'}
          </span>
          <div className="w-8 shrink-0"></div>
        </header>

        <div className="flex-1 p-4 md:p-8 lg:p-12 max-w-5xl mx-auto w-full">
          
          {activeTab === 'home' ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Hero Section */}
              <div className="flex flex-col items-center text-center py-12 md:py-20">
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-[#D20061] blur-3xl opacity-20 rounded-full"></div>
                </div>
                
                <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                  TUTORIAL <br/>
                  CSPB MOBILE
                </h1>
                
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
                  Tutorial dan tips seputar CSPB MOBILE — Dibaca dan dicermati ya adik adik!
                </p>
                
                <div className="flex flex-wrap flex-row justify-center w-full max-w-4xl gap-3">
                  {/* Donation Button */}
                  <a 
                    href={DONATION_LINK} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-auto min-w-[140px] md:flex-1 px-4 py-3 md:px-6 md:py-4 bg-black hover:bg-slate-900 text-white font-bold text-sm md:text-base rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 border border-white"
                  >
                    <Heart size={18} className="fill-current md:w-5 md:h-5" />
                    DONATION
                  </a>

                  {/* YouTube Button */}
                  <a 
                    href={YOUTUBE_LINK} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-auto min-w-[140px] md:flex-1 px-4 py-3 md:px-6 md:py-4 bg-black hover:bg-slate-900 text-white font-bold text-sm md:text-base rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 border border-white"
                  >
                    <Youtube size={20} className="md:w-6 md:h-6" />
                    TUTORIAL LAINNYA
                  </a>

                  {/* Skin CSPB Button */}
                  <a 
                    href={SKIN_WEB_LINK} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-auto min-w-[140px] md:flex-1 px-4 py-3 md:px-6 md:py-4 bg-black hover:bg-slate-900 text-white font-bold text-sm md:text-base rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 border border-white"
                  >
                    <ExternalLink size={18} className="md:w-5 md:h-5" />
                    SKIN CSPB
                  </a>
                </div>
              </div>

              {/* Quick Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {TUTORIAL_DATA.map((section, idx) => (
                  <div 
                    key={section.id}
                    onClick={() => handleTabChange(section.id)}
                    className="group p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-[#D20061]/50 hover:bg-slate-800 transition-all cursor-pointer flex flex-col h-full"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800 text-[#D20061] font-bold group-hover:bg-[#D20061] group-hover:text-white transition-colors">
                        {idx + 1}
                      </span>
                      <ArrowRight size={20} className="text-slate-600 group-hover:text-[#D20061] -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-200 group-hover:text-white mb-2">{section.title}</h3>
                    <p className="text-sm text-slate-500 group-hover:text-slate-400">
                      {section.shortDescription || (
                       section.type === 'config' ? 'Setting opengl dan config untuk performa.' : 
                       section.type === 'script' ? 'Penjelasan detail script senjata.' : 
                       section.type === 'steps' ? 'Langkah-langkah modding.' : 'Tutorial lengkap.')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Specific Tutorial View
            <div key={activeTab} className="min-h-[60vh]">
              {activeData ? (
                <TutorialCard data={activeData} />
              ) : (
                <div className="flex items-center justify-center h-full text-slate-500">
                  Tutorial tidak ditemukan.
                </div>
              )}
              
              <div className="flex justify-between mt-12 pt-8 border-t border-slate-800">
                 {(() => {
                   const currentIndex = TUTORIAL_DATA.findIndex(t => t.id === activeTab);
                   const prev = TUTORIAL_DATA[currentIndex - 1];
                   const next = TUTORIAL_DATA[currentIndex + 1];

                   return (
                     <>
                       {prev ? (
                         <button 
                           onClick={() => handleTabChange(prev.id)}
                           className="text-left group"
                         >
                           <span className="block text-xs text-slate-500 mb-1">Sebelumnya</span>
                           <span className="text-sm md:text-base font-bold text-slate-300 group-hover:text-[#D20061] flex items-center gap-2">
                             ← {prev.title.split('.')[1] || prev.title}
                           </span>
                         </button>
                       ) : <div />}
                       
                       {next ? (
                         <button 
                           onClick={() => handleTabChange(next.id)}
                           className="text-right group"
                         >
                           <span className="block text-xs text-slate-500 mb-1">Selanjutnya</span>
                           <span className="text-sm md:text-base font-bold text-slate-300 group-hover:text-[#D20061] flex items-center gap-2">
                             {next.title.split('.')[1] || next.title} →
                           </span>
                         </button>
                       ) : <div />}
                     </>
                   );
                 })()}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;