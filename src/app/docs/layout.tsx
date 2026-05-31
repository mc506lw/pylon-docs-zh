import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()} sidebar={{
      tabs: [
        {
          title: 'Pylon',
          url: '/docs/pylon',
          description: 'Pylon官方文档',
        },
        {
          title: 'MonolithLib',
          url: '/docs/monolithlib',
          description: '多方块巨构库',
        },
        {
          title: 'Jade2Rebar',
          url: '/docs/jade2rebar',
          description: 'Jade适配',
        },
        {
          title: 'RebarWrench',
          url: '/docs/rebarwrench',
          description: '扳手前置库',
        }
      ],
    }}  >
      {children}

    </DocsLayout>
  );
}