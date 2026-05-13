"use client";

import { useState } from "react";
import { Blocks, Cpu, Database, FileText, GitFork, Globe, Package, Puzzle, Settings, Zap, ChevronDown } from "lucide-react";

import { cn } from "@/lib/cn";

type FeatureItem = {
    icon: React.ElementType;
    title: string;
    desc: string;
    tags?: string[];
};

const categories = [
    {
        key: "core" as const,
        label: "核心系统",
        description: "电力、流体、物流与多方块，构成工业基地的基础设施",
        items: [
            {
                icon: Zap,
                title: "流体系统",
                desc: "高效可扩展的流体管道网络，支持多种流体类型、存储与过滤",
            },
            {
                icon: Package,
                title: "物流运输",
                desc: "智能物品传输系统，支持路由、过滤与自动分拣",
            },
            {
                icon: Cpu,
                title: "多方块结构",
                desc: "构建复杂的多方块机器，自动检测结构完整性并管理运行状态",
            },
            {
                icon: Database,
                title: "持久化数据",
                desc: "基于 PDC 的跨维度数据存储，重启不丢失",
            },
        ] satisfies FeatureItem[],
    },
    {
        key: "player" as const,
        label: "玩家功能",
        description: "方块物品、研究解锁与多语言，面向游戏体验的功能",
        items: [
            {
                icon: Blocks,
                title: "自定义方块与物品",
                desc: "创建具有自定义行为、纹理和交互的方块与物品",
                tags: ["配方合成", "WAILA 信息", "持久化数据"],
            },
            {
                icon: Puzzle,
                title: "研究系统",
                desc: "基于研究点的渐进式解锁机制，目标感明确的技术树",
                tags: ["可配置条件", "多语言支持"],
            },
            {
                icon: Globe,
                title: "国际化 (i18n)",
                desc: "原生多语言架构，每个玩家独立语言设置",
            },
        ] satisfies FeatureItem[],
    },
    {
        key: "dev" as const,
        label: "开发者工具",
        description: "API 文档、扩展接口与配置系统，为 Addon 开发者准备",
        items: [
            {
                icon: GitFork,
                title: "Addon 扩展 API",
                desc: "清晰的组件化接口，支持 Kotlin 与 Java",
                tags: ["Kotlin / Java", "模块化"],
            },
            {
                icon: Settings,
                title: "高度可配置",
                desc: "每台机器独立参数配方可编辑，行为完全可控",
            },
            {
                icon: FileText,
                title: "完整 API 文档",
                desc: "Javadoc 参考与 Addon 开发指南",
            },
        ] satisfies FeatureItem[],
    },
];

function TagPill({ children }: { children: string }) {
    return (
        <span className="border-fd-border bg-fd-muted text-fd-muted-foreground whitespace-nowrap rounded-full border px-2 py-px text-[11px]">
            {children}
        </span>
    );
}

function FeatureRow({ icon: Icon, title, desc, tags }: FeatureItem) {
    return (
        <div className="group relative flex items-start gap-3 rounded-lg px-1 py-2.5 transition-colors active:bg-fd-muted/40 sm:gap-3.5 sm:py-3">
            <div className="text-fd-primary mt-0.5 shrink-0">
                <Icon className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
                <h3 className="text-[13px] font-semibold leading-snug sm:text-sm">{title}</h3>
                <p className="text-fd-muted-foreground mt-0.5 text-xs leading-relaxed sm:text-sm">{desc}</p>
                {tags && tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                            <TagPill key={tag}>{tag}</TagPill>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function CategoryAccordion({ category, defaultOpen }: { category: (typeof categories)[number]; defaultOpen: boolean }) {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <div className="border-fd-border overflow-hidden rounded-xl border">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="active:bg-fd-muted/50 flex min-h-[48px] w-full cursor-pointer items-center justify-between gap-4 bg-fd-card px-4 py-3.5 text-left sm:px-5 sm:py-4 lg:cursor-default lg:pointer-events-none"
            >
                <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                        <h3 className="text-[15px] font-semibold sm:text-base">{category.label}</h3>
                        <span className="text-fd-muted-foreground text-xs tabular-nums">({category.items.length})</span>
                    </div>
                    <p className="text-fd-muted-foreground mt-0.5 hidden text-xs sm:block">{category.description}</p>
                </div>
                <ChevronDown
                    className={cn(
                        "text-fd-muted-foreground h-5 w-5 shrink-0 transition-transform duration-200 lg:hidden",
                        open && "rotate-180"
                    )}
                />
            </button>
            <div
                className={cn(
                    "grid transition-all duration-300 ease-out lg:grid-rows-[1fr] lg:opacity-100",
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 lg:hidden"
                )}
            >
                <div className="overflow-hidden">
                    <div className="divide-fd-border divide-y border-t px-1.5 py-1.5 sm:border-t sm:px-2 sm:py-2">
                        {category.items.map((item) => (
                            <FeatureRow key={item.title} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function FeaturedCard() {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-fd-border bg-linear-to-br from-fd-card to-fd-muted/20 p-5 sm:p-7 lg:p-10">
            <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-amber-500/10 blur-3xl transition-colors group-hover:bg-amber-500/15 sm:-right-8 sm:-top-8 sm:h-32 sm:w-32" />
            <div className="relative">
                <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-[11px] font-medium text-amber-600 dark:text-amber-400 sm:mb-4 sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-xs">
                    <Blocks className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    核心能力
                </div>
                <h3 className="text-lg font-bold tracking-tight sm:text-xl lg:text-2xl xl:text-3xl">
                    自定义方块与物品
                </h3>
                <p className="text-fd-muted-foreground mt-2 max-w-md text-sm leading-relaxed sm:mt-3 sm:max-w-lg sm:text-base">
                    创建具有自定义行为、纹理和交互的方块与物品，完全集成原版配方与 WAILA 显示系统。从简单的装饰方块到复杂的多状态机械组件。
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                    {["配方合成", "WAILA 信息", "持久化数据", "自定义交互"].map((tag) => (
                        <span
                            key={tag}
                            className="border-fd-border bg-fd-muted/60 text-fd-muted-foreground rounded-full border px-2.5 py-0.5 text-[11px] font-medium sm:px-3 sm:py-1 sm:text-xs"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

function DesktopPanel({ category }: { category: (typeof categories)[number] }) {
    return (
        <div className="border-fd-border rounded-xl border bg-fd-card p-4 sm:p-5">
            <h3 className="text-sm font-semibold">{category.label}</h3>
            <p className="text-fd-muted-foreground mb-3 mt-0.5 text-[11px] leading-relaxed sm:mb-4 sm:text-xs">{category.description}</p>
            <div className="space-y-0.5">
                {category.items.map((item) => (
                    <FeatureRow key={item.title} {...item} />
                ))}
            </div>
        </div>
    );
}

export const FeaturesSection = () => (
    <section className="pb-12 sm:pb-16">
        <div className="mb-6 text-center sm:mb-10 lg:mb-12">
            <h2 className="mb-1.5 text-xl font-bold tracking-tight sm:mb-2 sm:text-2xl lg:text-3xl">7 大能力模块</h2>
            <p className="text-fd-muted-foreground mx-auto max-w-xs text-xs sm:max-w-md sm:text-sm">
                从电力到物流，一站式掌握 Pylon 全部能力
            </p>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
            <FeaturedCard />

            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-4">
                {categories.map((cat) => (
                    <DesktopPanel key={cat.key} category={cat} />
                ))}
            </div>

            <div className="lg:hidden flex flex-col gap-2.5 sm:gap-3">
                {categories.map((cat, i) => (
                    <CategoryAccordion key={cat.key} category={cat} defaultOpen={i === 0} />
                ))}
            </div>
        </div>
    </section>
);
