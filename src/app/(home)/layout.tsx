import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import type { ReactNode } from 'react';
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from 'fumadocs-ui/layouts/home/navbar';
import Link from 'fumadocs-core/link';
import Image from 'next/image';
import Preview from './img/banner.png';
import MonolithLibImg from './img/monolithlib.png';
import Jade2RebarImg from './img/jade2rebar.png';
import {
  Download,
  Package,
  BookOpen,
  Wand2,
  List,
  Hammer
} from 'lucide-react';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={[
        {
          type: 'custom',
          on: 'nav',
          children: (
            <NavbarMenu>
              <NavbarMenuTrigger>
                <Link href="/docs/pylon">文档</Link>
              </NavbarMenuTrigger>
              <NavbarMenuContent>
                <NavbarMenuLink href="/docs/pylon" className="md:row-span-2">
                  <div className="-mx-3 -mt-3">
                    <Image
                      src={Preview}
                      alt="Pylon 预览"
                      className="rounded-t-lg object-cover"
                      style={{
                        maskImage: 'linear-gradient(to bottom,white 60%,transparent)',
                      }}
                    />
                  </div>
                  <p className="font-medium">Pylon 文档</p>
                  <p className="text-fd-muted-foreground text-sm">
                    了解 Pylon 模组的全部功能与使用方法
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink href="/docs/pylon/install" className="lg:col-start-2">
                  <Download className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">安装指南</p>
                  <p className="text-fd-muted-foreground text-sm">
                    快速安装 Pylon 与 Rebar
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink href="/docs/pylon/resourcepack/home" className="lg:col-start-2">
                  <Package className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">资源包</p>
                  <p className="text-fd-muted-foreground text-sm">
                    自定义纹理、方块与物品模型
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink href="/docs/pylon/create-addons/vibecoding/tutorial-0" className="lg:col-start-3 lg:row-start-1">
                  <Wand2 className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">VibeCoding</p>
                  <p className="text-fd-muted-foreground text-sm">
                    用 AI 辅助创建 Pylon 附属
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/pylon/documentation/overview"
                  className="lg:col-start-3 lg:row-start-2"
                >
                  <BookOpen className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">参考文档</p>
                  <p className="text-fd-muted-foreground text-sm">
                    深入理解 Pylon 技术细节
                  </p>
                </NavbarMenuLink>
              </NavbarMenuContent>
            </NavbarMenu>
          ),
        },
        {
          type: 'custom',
          on: 'nav',
          children: (
            <NavbarMenu>
              <NavbarMenuTrigger>
                <Link href="/docs/pylon/addon-list">附属</Link>
              </NavbarMenuTrigger>
              <NavbarMenuContent>
                <NavbarMenuLink href="/docs/monolithlib" className="md:row-span-2">
                  <div className="-mx-3 -mt-3">
                    <Image
                      src={MonolithLibImg}
                      alt="MonolithLib 预览"
                      className="rounded-t-lg object-cover"
                      style={{
                        maskImage: 'linear-gradient(to bottom,white 60%,transparent)',
                      }}
                    />
                  </div>
                  <p className="font-medium">MonolithLib</p>
                  <p className="text-fd-muted-foreground text-sm">
                    多方块巨构支持库，添加巨型机器与精密实体
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink href="/docs/jade2rebar" className="md:row-span-2 lg:col-start-2">
                  <div className="-mx-3 -mt-3">
                    <Image
                      src={Jade2RebarImg}
                      alt="Jade2Rebar 预览"
                      className="rounded-t-lg object-cover"
                      style={{
                        maskImage: 'linear-gradient(to bottom,white 60%,transparent)',
                      }}
                    />
                  </div>
                  <p className="font-medium">Jade2Rebar</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Jade 信息显示插件适配，查看方块详情
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink href="/docs/pylon/addon-list" className="lg:col-start-3">
                  <List className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">附属列表</p>
                  <p className="text-fd-muted-foreground text-sm">
                    浏览所有可用的 Pylon 附属
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink href="/http://localhost:3000/docs/pylon/create-addons/tutorial-0" className="lg:col-start-3 lg:row-start-2">
                  <Hammer className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">制作附属</p>
                  <p className="text-fd-muted-foreground text-sm">
                    学习如何开发 Pylon 附属组件
                  </p>
                </NavbarMenuLink>
              </NavbarMenuContent>
            </NavbarMenu>
          ),
        },
      ]}
    >
      {children}
    </HomeLayout>
  );
}
