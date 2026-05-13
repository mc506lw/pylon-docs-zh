import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import type { ReactNode } from 'react';
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from 'fumadocs-ui/layouts/home/navbar';

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
              <NavbarMenuTrigger>文档</NavbarMenuTrigger>
              <NavbarMenuContent>
                <NavbarMenuLink href="/docs/monolithlib">MonolithLib文档</NavbarMenuLink>
                <NavbarMenuLink href="/docs/pylon">Pylon文档</NavbarMenuLink>
              </NavbarMenuContent>
            </NavbarMenu>
          ),
        },
        // other items
      ]}
    >
      {children}
    </HomeLayout>
  );
}
