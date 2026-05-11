import { Button } from "@/components/button";

export const HeroSection = () => (
    <>
        <section className="hero-glow-bg relative overflow-hidden pt-2 pb-6 text-center sm:pt-4 sm:pb-12 md:pt-8 md:pb-16">
            <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-5 px-6 sm:gap-6 lg:px-8">
                <p className="text-fd-muted-foreground text-[11px] tracking-widest uppercase sm:text-xs">
                    Community Docs · 非官方
                </p>

                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-6xl xl:text-7xl leading-[1.1]">
                    读懂 Pylon 的
                    <span className="bg-linear-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent">
                        每一面
                    </span>
                </h1>

                <p className="text-fd-muted-foreground max-w-xl text-base leading-relaxed sm:max-w-2xl sm:text-lg sm:text-xl">
                    电力系统、流体网络、物流管道、多方块机器
                    <br className="hidden sm:block" />
                    研究解锁、国际化、Addon API
                    <br />
                    一个文档站，覆盖 Pylon 全部能力模块。
                </p>

                <div className="flex flex-wrap justify-center gap-2.5 pt-1 sm:gap-3 sm:pt-0">
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
            </div>
        </section>
    </>
);
