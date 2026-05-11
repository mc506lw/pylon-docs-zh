import { Button } from "@/components/button";

export const HeroSection = () => (
    <>
        <section className="flex flex-col items-center gap-6 pt-4 pb-8 text-center md:pt-8 md:pb-16">
            <p className="text-fd-muted-foreground text-xs tracking-widest uppercase">Community Docs · 非官方</p>

            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                读懂 Pylon 的<span className="bg-linear-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent">每一面</span>
            </h1>

            <p className="text-fd-muted-foreground max-w-2xl text-lg leading-relaxed sm:text-xl">
                电力系统 · 流体网络 · 物流管道 · 多方块机器
                <br className="hidden sm:block" />
                研究解锁 · 国际化 · Addon API
                <br />
                一个文档站，覆盖 Pylon 全部能力模块。
            </p>

            <div className="flex flex-wrap justify-center gap-3">
                <Button href="/docs" variant="primary">
                    浏览文档
                </Button>
                <Button
                    href="https://github.com/pylonmc"
                    variant="outline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </Button>
            </div>
        </section>

    </>
);