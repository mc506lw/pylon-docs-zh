import { Button } from "@/components/button";

export const BannerSection = () => (
    <div className="border-fd-border relative mt-4 overflow-hidden rounded-xl border bg-[linear-gradient(var(--color-fd-border)_1px,transparent_1px),linear-gradient(to_right,var(--color-fd-border)_1px,transparent_1px)] bg-size-[48px_48px] py-10 sm:py-16">
        <div className="relative z-1 px-4 text-center">
            <h2 className="from-fd-primary to-fd-foreground/40 bg-linear-to-b bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
                基于 Rebar 框架的 Minecraft 技术扩展
                <br />
                为原版游戏注入全新活力
            </h2>
            <p className="text-fd-muted-foreground mx-auto mt-3 max-w-md text-sm">
                Pylon 提供电力系统、流体物流、多方块结构等功能，所有内容完全本地运行，性能优化，易于配置。
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button href="/docs/install" variant="primary">
                    安装指南
                </Button>
                <Button
                    href="https://discord.gg/4tMAnBAacW"
                    variant="outline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Discord 社区
                </Button>
            </div>
        </div>
        <div className="absolute inset-0 z-0 [background:radial-gradient(ellipse_at_center,transparent_40%,var(--color-fd-background)_100%)]" />
    </div>
);