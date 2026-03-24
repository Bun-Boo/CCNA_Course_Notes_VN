import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Pagination = ({ prev, next, onSelect }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-24 border-t border-border-default pt-12">
      <div className="flex flex-col items-start gap-4">
        {prev && (
          <>
            <span className="text-text-dim font-display text-[10px] tracking-widest uppercase opacity-50 flex items-center gap-2">
              <span className="w-4 h-px bg-border-default" /> Previous Chapter
            </span>
            <button 
              onClick={() => onSelect(prev.file)}
              className="group flex items-center gap-4 text-left border border-border-default bg-bg-surface p-6 hover:border-accent-coral hover:bg-bg-elevated transition-all w-full"
            >
              <ArrowLeft className="w-5 h-5 text-accent-coral group-hover:-translate-x-1 transition-transform" />
              <div>
                <span className="block text-accent-coral font-display text-[10px] tracking-widest mb-1">
                  DAY {prev.day.toString().padStart(2, '0')}
                </span>
                <span className="block text-text-primary font-display font-bold text-sm tracking-tight leading-tight">
                  {prev.title}
                </span>
              </div>
            </button>
          </>
        )}
      </div>

      <div className="flex flex-col items-end gap-4 text-right">
        {next && (
          <>
            <span className="text-text-dim font-display text-[10px] tracking-widest uppercase opacity-50 flex items-center gap-2">
              Next Chapter <span className="w-4 h-px bg-border-default" />
            </span>
            <button 
              onClick={() => onSelect(next.file)}
              className="group flex items-center justify-between gap-4 text-right border border-border-default bg-bg-surface p-6 hover:border-accent-amber hover:bg-bg-elevated transition-all w-full"
            >
              <div className="flex-1">
                <span className="block text-accent-amber font-display text-[10px] tracking-widest mb-1">
                  DAY {next.day.toString().padStart(2, '0')}
                </span>
                <span className="block text-text-primary font-display font-bold text-sm tracking-tight leading-tight">
                  {next.title}
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-accent-amber group-hover:translate-x-1 transition-transform" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Pagination;
