import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

const MarkdownRenderer = ({ content, searchQuery }) => {
  const highlightText = (text, isHeader = false) => {
    if (!searchQuery || searchQuery.length < 2 || typeof text !== 'string') return text;
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === searchQuery.toLowerCase() 
        ? <mark 
            key={i} 
            className={isHeader 
              ? "search-highlight bg-transparent text-accent-amber underline decoration-accent-amber/30 underline-offset-8 transition-all duration-300" 
              : "search-highlight bg-accent-amber/20 text-text-primary px-0.5 rounded-sm transition-all duration-300"}
          >
            {part}
          </mark> 
        : part
    );
  };

  const wrapWithHighlight = (children, isHeader = false) => {
    return React.Children.map(children, child => {
      if (typeof child === 'string') return highlightText(child, isHeader);
      return child;
    });
  };

  return (
    <div className="markdown-content max-w-none animate-fade-up">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-12 flex items-center gap-6">
              <span>{wrapWithHighlight(props.children, true)}</span>
            </h1>
          ),
          h2: ({ node, ...props }) => (
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mt-20 mb-8 flex items-center">
              <span className="text-accent-coral font-display text-sm tracking-[0.3em] mr-4 opacity-70">//</span>
              <span>{wrapWithHighlight(props.children, true)}</span>
            </h2>
          ),
          h3: ({ node, ...props }) => (
            <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary mt-12 mb-6 flex items-center">
              <span className="text-accent-amber font-display text-xs tracking-[0.2em] mr-3 opacity-60">//</span>
              <span>{wrapWithHighlight(props.children, true)}</span>
            </h3>
          ),
          p: ({ node, ...props }) => (
            <p className="text-text-primary/95 leading-[1.9] mb-10 text-[1.1rem] font-body font-normal tracking-wide">
              {wrapWithHighlight(props.children)}
            </p>
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-none space-y-4 mb-10 ml-2" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="flex gap-5 text-text-primary/90 text-[1.05rem] leading-relaxed mb-4">
              <span className="text-accent-coral mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent-coral/80 rotate-45 shadow-[0_0_8px_rgba(255,107,74,0.4)]" />
              <span className="opacity-100">{wrapWithHighlight(props.children)}</span>
            </li>
          ),
          code: ({ node, inline, className, children, ...props }) => {
            if (inline) {
              return (
                <code className="bg-bg-elevated/80 text-accent-amber px-2 py-0.5 font-mono text-sm border border-border-default shadow-inner" {...props}>
                  {children}
                </code>
              );
            }
            return (
              <div className="relative my-12 group">
                <div className="absolute -top-3 left-6 bg-accent-amber text-bg-deep font-display font-black text-[9px] tracking-[0.3em] px-3 py-1 z-10 shadow-lg shadow-accent-amber/20 uppercase">
                  Terminal Output
                </div>
                <pre className="bg-bg-surface border border-border-default p-8 pt-10 overflow-x-auto transition-all duration-500 group-hover:border-accent-amber/40 group-hover:bg-bg-elevated/50 shadow-2xl shadow-black/40 custom-scrollbar">
                  <code className={`${className} font-mono text-sm leading-relaxed`} {...props}>
                    {children}
                  </code>
                </pre>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity font-display text-[10px] tracking-widest text-text-dim pointer-events-none">
                  CCNA_CORE_SYSTEM_v2
                </div>
              </div>
            );
          },
          hr: () => (
            <div className="flex gap-2 my-20 opacity-10">
              {[...Array(40)].map((_, i) => (
                <span key={i} className="w-1.5 h-1.5 bg-border-default rounded-full" />
              ))}
            </div>
          ),
          img: ({ node, ...props }) => (
            <div className="relative my-16 group">
              <div className="absolute -inset-4 bg-accent-coral/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
              <img className="w-full border border-border-default transition-all duration-700 group-hover:border-accent-coral/30 group-hover:shadow-2xl group-hover:shadow-accent-coral/5" {...props} />
              <div className="mt-4 flex justify-between items-center px-2">
                <span className="text-[10px] font-display font-bold text-text-dim tracking-widest uppercase">Fig.01 // {props.alt || 'Network Diagram'}</span>
                <span className="w-20 h-px bg-border-default/30" />
              </div>
            </div>
          ),
          blockquote: ({ node, ...props }) => (
            <div className="bg-bg-elevated/30 border-l-4 border-accent-coral p-8 my-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-coral/5 -rotate-45 translate-x-12 -translate-y-12" />
              <p className="italic text-text-primary text-xl leading-relaxed opacity-90 relative z-10">
                {props.children}
              </p>
            </div>
          ),
          table: ({ node, ...props }) => (
            <div className="my-16 overflow-x-auto border border-border-default/50 bg-bg-surface/30 backdrop-blur-sm rounded-2xl shadow-2xl shadow-black/40 group/table">
              <table className="w-full text-left border-collapse" {...props} />
              <div className="p-2 border-t border-border-default/20 bg-black/5 flex justify-end">
                <span className="text-[8px] font-display font-black text-text-dim tracking-[0.4em] uppercase opacity-40">System_Data_Table</span>
              </div>
            </div>
          ),
          thead: ({ node, ...props }) => (
            <thead className="bg-bg-elevated/60 border-b-2 border-border-default/50" {...props} />
          ),
          th: ({ node, ...props }) => (
            <th className="px-8 py-6 font-display text-xs font-black uppercase tracking-[0.4em] text-accent-amber" {...props}>
              {wrapWithHighlight(props.children, true)}
            </th>
          ),
          td: ({ node, ...props }) => (
            <td className="px-8 py-6 text-text-primary/90 text-[0.95rem] font-body border-b border-white/5 group-hover/row:text-text-primary group-hover/row:bg-white/10 transition-all duration-300">
              {wrapWithHighlight(props.children)}
            </td>
          ),
          tr: ({ node, ...props }) => (
            <tr className="group/row transition-all duration-300" {...props} />
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;

