"use client";

import { cn } from "@/lib/cn";
import { buttonVariants } from "fumadocs-ui/components/ui/button";
import { useCopyButton } from "fumadocs-ui/utils/use-copy-button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "fumadocs-ui/components/ui/popover";
import { useMemo, useState } from "react";
import { usePathname } from "fumadocs-core/framework";
import {
  Check,
  ChevronDown,
  Copy,
  ExternalLinkIcon,
  TextIcon,
  Flag,
  Share2,
  Printer,
} from "lucide-react";

const cache = new Map<string, Promise<string>>();

/**
 * 带中文的 Markdown 复制按钮
 */
export function MarkdownCopyButton({
  markdownUrl,
  ...props
}: React.ComponentProps<"button"> & {
  markdownUrl: string;
}) {
  const [isLoading, setLoading] = useState(false);
  const [checked, onClick] = useCopyButton(async () => {
    const cached = cache.get(markdownUrl);
    if (cached) return navigator.clipboard.writeText(await cached);

    setLoading(true);
    try {
      const promise = fetch(markdownUrl).then((res) => res.text());
      cache.set(markdownUrl, promise);
      await navigator.clipboard.write([
        new ClipboardItem({ "text/plain": promise }),
      ]);
    } finally {
      setLoading(false);
    }
  });

  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      {...props}
      className={cn(
        buttonVariants({
          color: "secondary",
          size: "sm",
          className: "gap-2 [&_svg]:size-3.5 [&_svg]:text-fd-muted-foreground",
        }),
        props.className
      )}
    >
      {checked ? <Check /> : <Copy />}
      {props.children ?? "复制 Markdown"}
    </button>
  );
}

/**
 * 带中文菜单的文档操作弹窗
 */
export function ViewOptionsPopover({
  markdownUrl,
  githubUrl,
  ...props
}: React.ComponentProps<typeof PopoverTrigger> & {
  markdownUrl?: string;
  githubUrl?: string;
}) {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  const items = useMemo(() => {
    const q = `阅读 ${typeof window === "undefined" ? pathname : new URL(pathname, window.location.origin)}，我对此页内容有不明白的问题要问`;

    return [
      githubUrl && {
        title: "在 GitHub 中打开",
        href: githubUrl,
        icon: (
          <svg
            fill="currentColor"
            role="img"
            viewBox="0 0 24 24"
          >
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        ),
      },
      markdownUrl && {
        title: "以 Markdown 查看",
        href: markdownUrl,
        icon: <TextIcon />,
      },
      {
        title: "在豆包中打开",
        href: `https://www.doubao.com/chat/url-action?action=${encodeURIComponent(JSON.stringify({ pluginId: "Send_Message", payload: { text: q } }))}`,
        icon: <img src="/img/doubao.svg" alt="豆包" className="size-4" />,
      },
      {
        title: "在秘塔 AI 中打开",
        href: `https://metaso.cn/?q=${encodeURIComponent(q)}`,
        icon: <img src="/img/mitaAI.svg" alt="秘塔 AI" className="size-4" />,
      },
      {
        type: "separator" as const,
      },
      githubUrl && {
        title: "报告问题",
        href: githubUrl?.replace(
          /\/blob\/.*/,
          "/issues/new?title=" + encodeURIComponent(`[文档问题] 页面：${typeof window === "undefined" ? "" : document.title}`)
        ),
        icon: <Flag className="size-4" />,
      },
      {
        title: copied ? "已复制" : "复制链接",
        onClick: () => {
          navigator.clipboard.writeText(window.location.href);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        },
        icon: <Share2 className="size-4" />,
      },
      {
        title: "打印/PDF",
        onClick: () => window.print(),
        icon: <Printer className="size-4" />,
      },
    ].filter(Boolean);
  }, [githubUrl, markdownUrl, pathname, copied]);

  return (
    <Popover>
      <PopoverTrigger
        {...props}
        className={cn(
          buttonVariants({ color: "secondary", size: "sm" }),
          "gap-2 data-[state=open]:bg-fd-accent data-[state=open]:text-fd-accent-foreground",
          props.className
        )}
      >
        {props.children ?? "更多"}
        <ChevronDown className="size-3.5 text-fd-muted-foreground" />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col">
        {items.map((item, i) => {
          if ("type" in item && item.type === "separator") {
            return <div key={`sep-${i}`} className="my-1 border-t border-fd-border/60" />;
          }
          if ("onClick" in item) {
            return (
              <button
                key={item.title}
                onClick={item.onClick}
                className="text-sm p-2 rounded-lg inline-flex items-center gap-2 hover:text-fd-accent-foreground hover:bg-fd-accent [&_svg]:size-4 text-left"
              >
                {item.icon}
                {item.title}
              </button>
            );
          }
          const linkItem = item as { title: string; href: string; icon: React.ReactNode };
          return (
            <a
              key={linkItem.href}
              href={linkItem.href}
              rel="noreferrer noopener"
              target="_blank"
              className="text-sm p-2 rounded-lg inline-flex items-center gap-2 hover:text-fd-accent-foreground hover:bg-fd-accent [&_svg]:size-4"
            >
              {linkItem.icon}
              {linkItem.title}
              <ExternalLinkIcon className="text-fd-muted-foreground size-3.5 ms-auto" />
            </a>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}
