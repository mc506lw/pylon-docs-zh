"use client";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/cn";
import type { AddonData } from "./addon.types";

interface AddonCardProps {
  addon: AddonData;
}

function StatusTag({ tag }: { tag: string }) {
  const styles = {
    "开源": "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400",
    "已发布": "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400",
    "开发中": "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400",
    "未发布": "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 text-[11px] font-medium",
        styles[tag as keyof typeof styles]
      )}
    >
      {tag}
    </span>
  );
}

export function AddonCard({ addon }: AddonCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white dark:border-neutral-800/80 dark:bg-neutral-950">
      <div className="flex flex-col sm:flex-row">
        <div className="flex items-center justify-center border-b border-neutral-200/80 bg-neutral-50/50 p-6 sm:w-32 sm:border-b-0 sm:border-r dark:border-neutral-800/80 dark:bg-neutral-900/50 sm:dark:bg-neutral-900">
          <span className="text-4xl">{addon.icon}</span>
        </div>

        <div className="flex-1 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              <p className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                {addon.name}
              </p>
              <div className="flex gap-1.5">
                {addon.statusTags.map((tag) => (
                  <StatusTag key={tag} tag={tag} />
                ))}
              </div>
            </div>
            {addon.downloadUrl && (
              <a
                href={addon.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-800 transition-all hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:border-neutral-500 dark:hover:bg-neutral-700"
              >
                <GitHubLogoIcon className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
            )}
          </div>

          <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {addon.description}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-3">
            <span className="text-xs text-neutral-500 dark:text-neutral-500">
              {addon.author}
            </span>
          </div>

          {addon.features && addon.features.length > 0 && (
            <div className="mt-4">
              <h4 className="mb-2 text-[11px] font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                核心功能
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {addon.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-md border border-neutral-200 bg-neutral-50 px-2 py-1 text-xs text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}

          {addon.tags && addon.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {addon.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-neutral-400 dark:text-neutral-600"
                >
                  #{tag.replace(/_/g, " ")}
                </span>
              ))}
            </div>
          )}

          {!addon.features?.length && !addon.tags?.length && (
            <p className="mt-4 text-sm text-neutral-400">暂无详细信息</p>
          )}
        </div>
      </div>
    </div>
  );
}
