import { Button } from "@/components/button";

export const HeroSection = () => (
    <>
        <section className="relative overflow-hidden pt-2 pb-6 text-center sm:pt-4 sm:pb-12 md:pt-8 md:pb-16">
            <div className="pointer-events-none absolute inset-0">
                <div
                    aria-hidden="true"
                    className="animate-hero-glow-1 absolute left-1/2 top-1/2 h-[120%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(245,158,11,0.13)_0%,transparent_75%)] sm:h-[130%] sm:w-[150%]"
                />
                <div
                    aria-hidden="true"
                    className="animate-hero-glow-2 absolute left-1/2 top-1/2 h-[90%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_55%_48%_at_50%_50%,rgba(251,146,60,0.10)_0%,transparent_70%)] blur-xl sm:h-[100%] sm:w-[120%]"
                />
                <div
                    aria-hidden="true"
                    className="animate-hero-glow-3 absolute left-1/2 top-1/2 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_45%_40%_at_50%_50%,rgba(245,158,11,0.07)_0%,transparent_65%)] blur-2xl sm:h-[80%] sm:w-[95%]"
                />
            </div>

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
