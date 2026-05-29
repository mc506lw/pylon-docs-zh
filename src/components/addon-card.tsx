"use client";

import { cn } from "@/lib/cn";
import type { AddonData } from "./addon.types";

interface AddonCardProps {
  addon: AddonData;
}

export function AddonCard({ addon }: AddonCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-5 transition-all hover:border-neutral-700 hover:bg-neutral-900/50">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <span className="text-2xl shrink-0">{addon.icon}</span>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-semibold text-neutral-100 truncate">
              {addon.name}
            </h3>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              {addon.statusTags.map((tag) => (
                <span
                  key={tag}
                  className={cn(
                    "text-[11px] font-medium",
                    tag === "开源" && "text-blue-400",
                    tag === "已发布" && "text-emerald-400",
                    tag === "开发中" && "text-amber-400",
                    tag === "未发布" && "text-neutral-500"
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center shrink-0">
          {addon.downloadUrl ? (
            <a
              href={addon.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium text-neutral-400 transition-colors hover:text-neutral-200 hover:bg-neutral-800"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          ) : (
            <span className="text-[11px] text-neutral-600">暂无链接</span>
          )}
        </div>
      </div>

      <p className="text-[13px] leading-relaxed text-neutral-400 line-clamp-3">
        {addon.description}
      </p>

      {addon.features && addon.features.length > 0 && (
        <div className="mt-3 pt-3 border-t border-neutral-800/40">
          <div className="flex flex-wrap gap-1.5">
            {addon.features.slice(0, 3).map((feature) => (
              <span
                key={feature}
                className="rounded px-1.5 py-0.5 text-[10px] text-neutral-500 bg-neutral-800/50"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
