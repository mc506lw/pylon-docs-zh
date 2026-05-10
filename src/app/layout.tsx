import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
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
