import React from 'react';

const LanguageSwitcher = ({ currentLang, onToggle }) => {
  return (
    <div className="flex bg-bg-elevated/50 p-1 border border-border-default relative group">
      <div className="absolute inset-0 bg-accent-coral/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <button 
        onClick={() => onToggle('vi')}
        className={`px-3 py-1 text-[10px] font-display font-bold tracking-widest transition-all ${currentLang === 'vi' ? 'bg-accent-coral text-bg-deep' : 'text-text-dim hover:text-text-primary'}`}
      >
        VI
      </button>
      <button 
        onClick={() => onToggle('en')}
        className={`px-3 py-1 text-[10px] font-display font-bold tracking-widest transition-all ${currentLang === 'en' ? 'bg-accent-amber text-bg-deep' : 'text-text-dim hover:text-text-primary'}`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
