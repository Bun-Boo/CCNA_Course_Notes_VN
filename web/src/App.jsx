import { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import MarkdownRenderer from './components/MarkdownRenderer';
import Pagination from './components/Pagination';
import notesList from './notes-list.json';

function App() {
  const [activeFile, setActiveFile] = useState(notesList[0]?.file || '');
  const [lang, setLang] = useState('vi');
  const [content, setContent] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [localSearchQuery, setLocalSearchQuery] = useState('');
  const [matchIndex, setMatchIndex] = useState(-1);
  const [matchCount, setMatchCount] = useState(0);
  const scrollContainerRef = useRef(null);

  const toggleTheme = (e) => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      setTheme(newTheme);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0 at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 700,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
  };

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    setLocalSearchQuery('');
    setMatchIndex(-1);
    setMatchCount(0);
    if (activeFile) {
      loadContent(activeFile, lang);
    }
  }, [activeFile, lang]);

  // Handle Search Match Navigation
  useEffect(() => {
    const matches = document.querySelectorAll('.search-highlight');
    setMatchCount(matches.length);
    if (matches.length > 0) {
      setMatchIndex(0);
    } else {
      setMatchIndex(-1);
    }
  }, [localSearchQuery, content]);

  useEffect(() => {
    const matches = document.querySelectorAll('.search-highlight');
    matches.forEach((m, i) => {
      if (i === matchIndex) {
        m.classList.add('search-highlight-active');
        m.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        m.classList.remove('search-highlight-active');
      }
    });
  }, [matchIndex]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        goToPrevMatch();
      } else {
        goToNextMatch();
      }
    }
  };

  const goToNextMatch = () => {
    if (matchCount > 0) {
      setMatchIndex((prev) => (prev + 1) % matchCount);
    }
  };

  const goToPrevMatch = () => {
    if (matchCount > 0) {
      setMatchIndex((prev) => (prev - 1 + matchCount) % matchCount);
    }
  };

  const loadContent = async (file, currentLang) => {
    setIsLoading(true);
    try {
      const folder = currentLang === 'vi' ? 'notes' : 'notes_en';
      const response = await fetch(`/${folder}/${file}`);
      const text = await response.text();
      setContent(text);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Failed to load note:', error);
      setContent(currentLang === 'vi' ? '# Lỗi tải tài liệu\nKhông thể tải tệp tin này.' : '# Loading Error\nCould not load this file.');
    } finally {
      setIsLoading(false);
    }
  };

  const currentIndex = notesList.findIndex(n => n.file === activeFile);
  const prevNote = currentIndex > 0 ? notesList[currentIndex - 1] : null;
  const nextNote = currentIndex < notesList.length - 1 ? notesList[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-bg-deep flex font-body selection:bg-accent-coral/30 selection:text-text-primary transition-colors duration-700">
      {/* Search & Theme Controls (Floating) */}
      <div className={`fixed top-8 right-8 z-40 flex items-center gap-4 transition-all duration-500 transform ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className="w-14 h-14 flex items-center justify-center bg-bg-surface/80 backdrop-blur-3xl border border-border-default/50 rounded-full text-accent-amber shadow-2xl hover:border-accent-amber/50 transition-all duration-500 group"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {theme === 'dark' ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform duration-500">
              <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-rotate-12 transition-transform duration-500">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </button>

        {/* Search Bar */}
        <div className={`
          group flex items-center bg-bg-surface/80 backdrop-blur-3xl border border-border-default/50 rounded-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_25px_80px_rgba(0,0,0,0.6)] overflow-hidden
          ${localSearchQuery ? 'w-[480px] h-14' : 'w-14 h-14 hover:w-[480px]'}
        `}>
          {/* Icon Anchor - Perfectly centered in the 56px circle */}
          <div className="w-14 h-14 flex items-center justify-center shrink-0 text-accent-amber transition-transform duration-500 group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_10px_rgba(255,184,48,0.4)]">
              <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          
          <input 
            type="text"
            placeholder={lang === 'vi' ? 'TÌM KIẾM TRONG BÀI...' : 'SEARCH IN PAGE...'}
            value={localSearchQuery}
            onChange={(e) => setLocalSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`
              bg-transparent font-display text-[10px] uppercase font-black tracking-[0.2em] text-text-primary placeholder:text-text-dim/40 focus:outline-none transition-all duration-700
              ${localSearchQuery ? 'flex-1 opacity-100' : 'w-0 opacity-0 group-hover:flex-1 group-hover:opacity-100'}
            `}
          />
          
          <div className={`
            flex items-center gap-4 transition-all duration-700 shrink-0 pr-5
            ${localSearchQuery ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0'}
          `}>
            {matchCount > 0 && (
              <div className="font-display text-[10px] font-black tracking-widest flex items-center gap-2">
                <span className="text-accent-amber tabular-nums">{String(matchIndex + 1).padStart(2, '0')}</span>
                <span className="text-accent-coral/40">/</span>
                <span className="text-text-dim tabular-nums">{String(matchCount).padStart(2, '0')}</span>
              </div>
            )}
            
            <div className="flex items-center gap-1 border-l border-border-default/50 pl-4">
              <div className="flex flex-col">
                <button onClick={goToPrevMatch} className="text-text-dim hover:text-accent-amber transition-all p-1 hover:scale-125 focus:text-accent-amber" title="Previous (Shift+Enter)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                </button>
                <button onClick={goToNextMatch} className="text-text-dim hover:text-accent-amber transition-all p-1 hover:scale-125 focus:text-accent-amber" title="Next (Enter)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
              </div>
              <button 
                onClick={() => setLocalSearchQuery('')}
                className="text-text-dim hover:text-accent-coral transition-all p-2 hover:bg-white/5 rounded-full ml-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-bg-deep/90 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Navigation Sidebar */}
      <Navigation 
        files={notesList} 
        activeFile={activeFile} 
        onSelect={setActiveFile}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        lang={lang}
        onLangToggle={setLang}
      />

      {/* Main Content Area */}
      <main ref={scrollContainerRef} className="flex-1 min-w-0 h-screen overflow-y-auto custom-scrollbar relative flex flex-col bg-bg-deep">
        {/* Mobile Header */}
        <div className="lg:hidden sticky top-0 z-30 bg-bg-deep/80 backdrop-blur-md border-b border-border-default p-4 flex justify-between items-center px-6">
          <div className="flex items-center gap-3">
            <span className="text-accent-coral font-display text-xs tracking-widest">//</span>
            <h1 className="font-display text-sm font-bold text-text-primary uppercase tracking-tighter">CCNA CURRICULUM</h1>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 border border-border-default bg-bg-surface text-text-primary hover:border-accent-coral transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>

        <div className="flex-1 max-w-5xl w-full mx-auto px-6 py-12 lg:py-32">
          {/* Page Header Decoration */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 animate-fade-up gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-accent-coral font-display text-sm tracking-widest font-bold">// CCNA 200-301</span>
                <span className="w-12 h-px bg-border-default" />
                <span className="text-text-dim font-display text-[10px] tracking-[0.3em] uppercase">JEREMY'S IT LAB</span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-text-primary tracking-tighter leading-[0.9] mb-8">
                {lang === 'vi' ? notesList[currentIndex]?.title_vi : notesList[currentIndex]?.title_en}
              </h1>
              <div className="flex flex-wrap gap-4 mb-8">
                {notesList[currentIndex]?.lectureId && (
                  <a 
                    href={`https://www.youtube.com/watch?v=${notesList[currentIndex].lectureId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-accent-coral/10 border border-accent-coral/30 px-5 py-2.5 text-accent-coral font-display text-[10px] font-bold tracking-widest hover:bg-accent-coral hover:text-bg-deep transition-all group shadow-lg shadow-accent-coral/5"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform"><path d="M8 5v14l11-7z"/></svg>
                    {lang === 'vi' ? 'XEM BÀI GIẢNG' : 'WATCH LECTURE'}
                  </a>
                )}
                {notesList[currentIndex]?.labId && (
                  <a 
                    href={`https://www.youtube.com/watch?v=${notesList[currentIndex].labId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-accent-amber/10 border border-accent-amber/30 px-5 py-2.5 text-accent-amber font-display text-[10px] font-bold tracking-widest hover:bg-accent-amber hover:text-bg-deep transition-all group shadow-lg shadow-accent-amber/5"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                    {lang === 'vi' ? 'XEM THỰC HÀNH' : 'WATCH LAB'}
                  </a>
                )}
              </div>
              <p className="text-text-secondary font-body text-lg leading-relaxed max-w-xl opacity-80 italic">
                {lang === 'vi' 
                  ? 'Kiến thức cốt lõi được hệ thuật hóa cho kỳ thi Cisco Certified Network Associate.' 
                  : 'Core knowledge systematized for the Cisco Certified Network Associate exam.'}
              </p>
            </div>
            
            <div className="bg-accent-coral text-bg-deep font-display font-bold text-xs tracking-[0.2em] px-6 py-3 rotate-3 shadow-2xl shadow-accent-coral/30">
              VOL.01 / 2026
            </div>
          </div>

          <div className="flex gap-2 mb-24 opacity-20">
            {[...Array(30)].map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 bg-border-default" />
            ))}
          </div>

          <div className="relative">
            {/* Background Accent */}
            <div className="absolute -left-32 top-0 text-[12rem] font-black text-white/5 font-display select-none pointer-events-none rotate-90 origin-top-left -z-10">
              CCNA
            </div>

            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-48 space-y-8 animate-pulse">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 border-4 border-border-default translate-x-1 translate-y-1" />
                  <div className="absolute inset-0 border-4 border-accent-coral animate-spin transition-all" />
                </div>
                <p className="font-display text-[10px] tracking-widest text-text-dim font-bold">RETRIVING DATA // ENCRYPTED</p>
              </div>
            ) : (
              <div className="animate-fade-up">
                <MarkdownRenderer content={content} searchQuery={localSearchQuery} />
                
                <Pagination 
                  prev={prevNote ? { ...prevNote, title: lang === 'vi' ? prevNote.title_vi : prevNote.title_en } : null}
                  next={nextNote ? { ...nextNote, title: lang === 'vi' ? nextNote.title_vi : nextNote.title_en } : null}
                  onSelect={setActiveFile}
                />
              </div>
            )}
          </div>

          {/* Footer Decoration */}
          <footer className="mt-48 pb-24 pt-12 border-t border-border-default flex flex-col md:flex-row justify-between items-center gap-12 opacity-40">
            <div className="flex flex-col items-center md:items-start gap-4">
              <span className="font-display text-[10px] tracking-[0.3em] text-text-dim font-bold">
                BUILT BY ANTIGRAVITY ENGINE // VERSION 2.1.0
              </span>
              <p className="text-[10px] font-body text-text-dim text-center md:text-left">
                Thiết kế theo hướng tiếp cận Editorial & Retro-Futurism. <br />
                Mọi nội dung bản quyền thuộc về Jeremy's IT Lab.
              </p>
            </div>
            <div className="flex gap-8">
              {['YOUTUBE', 'DISCORD', 'GITHUB', 'PATREON'].map(link => (
                <a key={link} href="#" className="font-display text-[10px] tracking-widest text-text-dim hover:text-accent-coral transition-colors relative group">
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-coral group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
