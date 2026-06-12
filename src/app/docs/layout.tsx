"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { ArrowLeft, Package } from 'lucide-react';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  const pathname = usePathname();

  // 判断当前是否在附属文档区域（不包括 addons 索引页本身）
  const isAddonDoc = pathname.startsWith('/docs/monolithlib') ||
    pathname.startsWith('/docs/jade2rebar') ||
    pathname.startsWith('/docs/rebarwrench') ||
    pathname.startsWith('/docs/constructionwand') ||
    pathname.startsWith('/docs/steamwork');

  // 判断当前是否在 Pylon 主文档
  const isPylonDoc = pathname.startsWith('/docs/pylon');

  // 根据当前位置显示不同的配置
  const sidebarConfig = isAddonDoc ? {
    tabs: false as const,
    banner: (
      <Link
        href="/docs/pylon"
        className="flex items-center gap-1.5 px-2 py-1.5 text-xs font-medium text-fd-muted-foreground hover:text-fd-primary transition-colors rounded-md hover:bg-fd-accent/50"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Pylon 主文档
      </Link>
    ),
  } : {
    tabs: [
      {
        title: 'Pylon',
        url: '/docs/pylon',
        description: 'Pylon官方文档',
      },
      {
        title: '📦 附属文档',
        url: '/docs/addons',
        description: '查看所有附属模块文档',
      }
    ],
  };

  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()} sidebar={sidebarConfig}>
      {children}
    </DocsLayout>
  );
}