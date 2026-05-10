import { Button } from "@/components/button";

export const HeroSection = () => (
    <>
        <section className="flex flex-col items-center gap-6 pt-4 pb-8 text-center md:pt-8 md:pb-16">
            <p className="text-fd-muted-foreground text-xs tracking-widest uppercase">非官方文档</p>

            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                Pylon <span className="bg-linear-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent">文档</span>
            </h1>

            <p className="text-fd-muted-foreground max-w-2xl text-lg leading-relaxed sm:text-xl">
                Pylon 是一个基于 Rebar 框架的 Minecraft 技术插件，
                <br className="hidden sm:block" />
                为原版玩法带来电力、物流、流体、多方块等丰富内容。
            </p>

            <div className="flex flex-wrap justify-center gap-3">
                <Button href="/docs" variant="primary">
                    开始使用
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