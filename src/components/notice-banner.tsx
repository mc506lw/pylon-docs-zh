'use client';

import { useState } from 'react';

const messages = [
  { text: '本站为非官方 Pylon 文档站，大量内容均为 AI 生成', link: '前往官方文档站', url: 'https://pylonmc.github.io/' },
  { text: 'This is an unofficial Pylon documentation site, most content is AI-generated', link: 'Visit Official Docs', url: 'https://pylonmc.github.io/' },
  { text: '中文开发者交流', link: '加入 QQ 群', url: 'https://qm.qq.com/q/QX4ATXliY8' },
];

export function NoticeBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] overflow-hidden bg-gradient-to-r from-amber-500/90 via-orange-500/90 to-red-500/90 text-white text-sm shadow-md">
      {/* Close button */}
      <button
        onClick={() => setVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-6 h-6 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-all"
        aria-label="关闭提示"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Scrolling marquee */}
      <div className="relative py-2 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => {
            const msg = messages[i % messages.length];
            return (
              <span key={i} className="inline-flex items-center gap-3 shrink-0">
                <span className="font-medium">{msg.text}</span>
                <span className="opacity-50">·</span>
                <a
                  href={msg.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-yellow-200 transition-colors font-semibold shrink-0"
                >
                  {msg.link} →
                </a>
                {<span className="opacity-40 mx-4 select-none shrink-0">{'\u25CF \u25CF \u25CF'}</span>}
              </span>
            );
          })}
        </div>
      </div>

      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-inherit to-transparent pointer-events-none z-[1]" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-inherit to-transparent pointer-events-none z-[1]" />
    </div>
  );
}
