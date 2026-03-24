import React, { useState, useMemo } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import searchIndex from '../search-index.json';

const Navigation = ({ files, activeFile, onSelect, isOpen, onClose, lang, onLangToggle }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFiles = useMemo(() => {
    if (!searchQuery.trim()) return files;
    
    const query = searchQuery.toLowerCase();
    return files.filter(note => {
      const titleMatch = 
        note.title_vi.toLowerCase().includes(query) ||
        note.title_en.toLowerCase().includes(query) ||
        note.day.toString().includes(query);
      
      if (titleMatch) return true;

      // Check content match in current language
      const content = lang === 'vi' ? searchIndex.vi[note.file] : searchIndex.en[note.file];
      return content?.toLowerCase().includes(query);
    });
  }, [searchQuery, files, lang]);

  const groupedFiles = filteredFiles.reduce((acc, note) => {
    const day = note.day;
    if (!acc[day]) acc[day] = [];
    acc[day].push(note);
    return acc;
  }, {});

  return (
    <nav className={`
      fixed inset-y-0 left-0 z-50 w-80 bg-bg-surface border-r border-border-default transform transition-transform duration-500 ease-in-out lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      <div className="h-full flex flex-col glass">
        {/* Header */}
        <div className="p-8 border-b border-border-default space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-accent-coral font-display text-[10px] tracking-[0.3em] block mb-2 opacity-70">LEARNING TOOL</span>
              <h2 className="font-display text-2xl font-bold text-text-primary tracking-tighter leading-none">
                {lang === 'vi' ? 'CHƯƠNG TRÌNH' : 'CURRICULUM'}
              </h2>
            </div>
            <button onClick={onClose} className="lg:hidden text-text-dim hover:text-accent-coral transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          
          <div className="relative group">
            <input
              type="text"
              placeholder={lang === 'vi' ? 'Tìm kiếm bài học...' : 'Search lessons...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-bg-deep/50 border border-border-default px-10 py-3 font-body text-xs text-text-primary placeholder:text-text-dim focus:outline-none focus:border-accent-coral/50 transition-all rounded-none"
            />
            <svg 
              className="absolute left-3 top-1/2 -translate-y-1/2 text-text-dim group-focus-within:text-accent-coral transition-colors" 
              xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-dim hover:text-accent-coral transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            )}
          </div>

          <LanguageSwitcher currentLang={lang} onToggle={onLangToggle} />
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-4 space-y-6">
            {Object.keys(groupedFiles).length === 0 ? (
              <div className="px-4 py-8 text-center">
                <p className="font-body text-xs text-text-dim italic">
                  {lang === 'vi' ? 'Không tìm thấy bài học nào' : 'No lessons found'}
                </p>
              </div>
            ) : (
              Object.entries(groupedFiles).map(([day, dayNotes]) => (
                <div key={day} className="space-y-1">
                  {/* Day Header */}
                  <div className="px-4 py-2 flex items-center gap-3">
                    <span className="text-accent-coral font-display text-[10px] font-black tracking-widest opacity-50">DAY {day.padStart(2, '0')}</span>
                    <div className="flex-1 h-px bg-border-default/30" />
                  </div>

                  {/* Chapters in Day */}
                  {dayNotes.map((note) => {
                    const isActive = activeFile === note.file;
                    const title = lang === 'vi' ? note.title_vi : note.title_en;
                    
                    const titleMatches = title.toLowerCase().includes(searchQuery.toLowerCase());
                    const showContentMatch = searchQuery && !titleMatches;

                    return (
                      <button
                        key={note.file}
                        onClick={() => {
                          onSelect(note.file);
                          if (window.innerWidth < 1024) onClose();
                        }}
                        className={`
                          w-full text-left p-3 pl-8 flex flex-col gap-1 transition-all duration-300 relative group overflow-hidden
                          ${isActive 
                            ? 'bg-bg-elevated border-l-2 border-l-accent-coral text-text-primary shadow-lg' 
                            : 'text-text-secondary hover:bg-bg-elevated hover:text-text-primary border-l-2 border-l-transparent'}
                        `}
                      >
                        <span className="font-body text-sm font-medium tracking-tight truncate relative z-10">
                          {title}
                        </span>
                        
                        {showContentMatch && (
                          <span className="text-[9px] font-display font-bold tracking-widest text-accent-amber opacity-80 uppercase relative z-10">
                            // {lang === 'vi' ? 'Tìm thấy trong nội dung' : 'Found in content'}
                          </span>
                        )}

                        {isActive && (
                          <div className="absolute top-0 right-0 w-8 h-8 bg-accent-coral/5 rotate-45 translate-x-4 -translate-y-4" />
                        )}
                      </button>
                    );
                  })}
                </div>
              ))
            )}
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-6 border-t border-border-default bg-bg-deep/30">
          <div className="bg-accent-coral text-bg-deep font-display font-bold text-[10px] tracking-widest px-3 py-2 rotate-1 text-center shadow-lg shadow-accent-coral/20">
            CCNA 200-301 // {lang.toUpperCase()}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
