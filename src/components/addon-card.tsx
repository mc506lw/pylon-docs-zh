"use client";

import { useRouter } from 'next/navigation';
import { cn } from "@/lib/cn";
import type { AddonData } from "./addon.types";

interface AddonCardProps {
  addon: AddonData;
  href?: string;
}

export function AddonCard({ addon, href }: AddonCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-fd-card bg-fd-card transition-all duration-200 flex flex-col h-full not-prose",
        href && "hover:border-fd-primary hover:shadow-lg cursor-pointer"
      )}
      onClick={handleClick}
    >
      {/* 头部：图标 + 名称 + GitHub */}
      <div className="p-5 pb-3">
        <div className="flex items-start gap-2.5">
          <span className="text-[24px] leading-none shrink-0">{addon.icon}</span>
          <div className="min-w-0 flex-1 pt-0.5">
            <h3 className="text-[15px] font-semibold text-fd-foreground tracking-tight leading-snug truncate">
              {addon.name}
            </h3>
            <p className="text-[11px] text-fd-muted-foreground/70 mt-0.5 leading-normal">
              by {addon.author}
            </p>
          </div>
          {addon.downloadUrl ? (
            <a
              href={addon.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="shrink-0 inline-flex items-center gap-1 text-[11px] font-medium text-fd-muted-foreground/70 hover:text-fd-primary transition-colors"
            >
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          ) : null}
        </div>

        {/* 描述 */}
        <p className="text-[13px] leading-relaxed text-fd-muted-foreground line-clamp-2 mt-2.5">
          {addon.description}
        </p>
      </div>

      {/* 特性标签 */}
      {addon.features && addon.features.length > 0 && (
        <div className="px-5 py-2.5 bg-fd-muted/30 border-t border-fd-border/30 shrink-0">
          <div className="flex flex-wrap gap-1.5">
            {addon.features.slice(0, 4).map((feature) => (
              <span
                key={feature}
                className="rounded-md px-2 py-0.5 text-[10px] font-medium text-fd-muted-foreground bg-fd-background/60 border border-fd-border/40"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 底部状态栏 */}
      <div className="px-5 py-2 border-t border-fd-border/20 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-1.5">
          {addon.aiUsage && (
            <span className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold leading-none bg-violet-500/10 text-violet-600 dark:text-violet-400">
              AI使用率: {addon.aiUsage}
            </span>
          )}
          {addon.statusTags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold leading-none",
                tag === "开源" && "bg-blue-500/10 text-blue-600 dark:text-blue-400",
                tag === "已发布" && "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
                tag === "开发中" && "bg-amber-500/10 text-amber-600 dark:text-amber-400",
                tag === "未发布" && "bg-fd-muted text-fd-muted-foreground"
              )}
            >
              {tag === "已发布" && (
                <span className="w-1 h-1 rounded-full bg-current mr-1" />
              )}
              {tag === "开发中" && (
                <span className="w-1 h-1 rounded-full bg-current mr-1 animate-pulse" />
              )}
              {tag}
            </span>
          ))}
        </div>
        {addon.tags && addon.tags.length > 0 && (
          <div className="flex items-center gap-1">
            {addon.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-[10px] text-fd-muted-foreground/60">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 有文档提示 */}
      {addon.hasDocs && href && (
        <div className="px-5 py-2 bg-emerald-500/5 border-t border-emerald-500/20 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 shrink-0">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          点击查看文档
        </div>
      )}
    </div>
  );
}
