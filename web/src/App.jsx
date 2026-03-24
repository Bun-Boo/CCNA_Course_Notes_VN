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
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (activeFile) {
      loadContent(activeFile, lang);
    }
  }, [activeFile, lang]);

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
    <div className="min-h-screen bg-bg-deep flex font-body selection:bg-accent-coral/30 selection:text-text-primary">
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
                <MarkdownRenderer content={content} />
                
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
