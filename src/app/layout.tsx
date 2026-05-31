import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Pylon 文档',
    template: '%s | Pylon 文档',
  },
  description: 'Pylon 非官方文档站 - 基于 Rebar 框架的 Minecraft 技术模组，覆盖电力、流体、物流、多方块等全部能力模块。',
  icons: {
    icon: '/icon.webp',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="zh-CN" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          i18n={{
            locale: 'zh',
            translations: {
              search: '搜索',
              searchNoResult: '没有找到相关结果',
              toc: '目录',
              tocNoHeadings: '没有标题内容',
              lastUpdate: '最后更新时间',
              chooseLanguage: '选择语言',
              nextPage: '下一页',
              previousPage: '上一页',
              chooseTheme: '选择主题',
              editOnGithub: '在 GitHub 上编辑',
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
