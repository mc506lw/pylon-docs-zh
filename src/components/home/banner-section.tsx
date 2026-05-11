import { Button } from "@/components/button";

export const BannerSection = () => (
    <div className="border-fd-border relative mt-4 overflow-hidden rounded-xl border bg-[linear-gradient(var(--color-fd-border)_1px,transparent_1px),linear-gradient(to_right,var(--color-fd-border)_1px,transparent_1px)] bg-size-[48px_48px] py-10 sm:py-16">
        <div className="relative z-1 px-4 text-center">
            <h2 className="from-fd-primary to-fd-foreground/40 bg-linear-to-b bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
                它能让原版 Minecraft 变成什么？
            </h2>
            <p className="text-fd-muted-foreground mx-auto mt-3 max-w-md text-sm">
                有电、有流体、有物流、有多方块机器。纯服务端运行，无需客户端 Mod。本站由社区独立维护，持续追踪版本更新。
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