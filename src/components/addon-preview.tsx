"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AddonCard } from "./addon-card";
import { cn } from "@/lib/cn";
import type { AddonData } from "./addon.types";

const addons: AddonData[] = [
    {
        id: "monolithlib",
        name: "MonolithLib",
        author: "mc506lw",
        icon: "🏗️",
        description: "添加巨型多方块机器和精密展示实体的支持库。",
        statusTags: ["开源", "已发布"],
        downloadUrl: "https://github.com/mc506lw/monolithlib/releases",
        features: [
            "巨型多方块结构",
            "精密展示实体",
            "高级构建API",
            "性能优化"
        ],
        tags: ["库", "基础依赖"],
        hasDocs: true,
        docsUrl: "/docs/monolithlib"
    },
    {
        id: "jade2rebar",
        name: "Jade2Rebar",
        author: "mc506lw",
        icon: "🔗",
        description: "桥接 Rebar 的 WAILA 与 Jade MOD。",
        statusTags: ["开源", "已发布"],
        downloadUrl: "https://github.com/mc506lw/Jade2Rebar/releases",
        features: [
            "客户端握手",
            "WAILA 集成",
            "数据同步"
        ],
        tags: ["连接", "适配"],
        hasDocs: true,
        docsUrl: "/docs/jade2rebar"
    },
    {
        id: "rebar-wrench",
        name: "RebarWrench",
        author: "lijinhong11",
        icon: "🔩",
        description: "为 Rebar 附属提供的扳手工具，用于配置和修改方块属性。",
        statusTags: ["开源", "开发中"],
        downloadUrl: "https://github.com/lijinhong11/RebarWrench",
        features: [
            "属性配置",
            "开发者API",
            "值切换功能"
        ],
        tags: ["工具", "开发", "API"],
        hasDocs: true,
        docsUrl: "/docs/rebarwrench"
    },
    {
        id: "construction-wand",
        name: "ConstructionWand",
        author: "balugaq",
        icon: "🪄",
        description: "添加建筑之杖，方便玩家快速建造和挖掘。",
        statusTags: ["开源", "已发布"],
        downloadUrl: "https://github.com/balugaq/construction-wand/releases",
        features: [
            "快速建造",
            "批量放置",
            "挖掘加速"
        ],
        tags: ["工具", "建筑"],
        hasDocs: true,
        docsUrl: "/docs/constructionwand"
    },
    {
        id: "steamworks",
        name: "Steamwork",
        author: "KevinWoodWL",
        icon: "🔥",
        description: "扩展锅炉、压力控制、蒸汽输送和蒸汽驱动机器。",
        statusTags: ["开源", "已发布"],
        downloadUrl: "https://github.com/KevinWoodWL/steamwork/releases",
        features: [
            "锅炉系统",
            "压力控制",
            "蒸汽驱动"
        ],
        tags: ["工业"],
        hasDocs: true,
        docsUrl: "/docs/steamwork"
    },
    {
        id: "pylon",
        name: "Pylon",
        author: "Pylon 团队",
        icon: "⚡",
        description: "添加所有基础的 Pylon 内容。大多数附属组件运行所必需的核心模块。",
        statusTags: ["开源", "已发布"],
        downloadUrl: "https://github.com/pylonmc/pylon/releases",
        features: [
            "电力系统",
            "流体管道",
            "物流传输",
            "多方块机器",
            "研究系统",
            "国际化支持"
        ],
        tags: ["核心", "Kotlin", "必备"]
    },
    {
        id: "iron-furnaces",
        name: "Iron Furnaces",
        author: "mc506lw",
        icon: "🔥",
        description: "高级熔炉系统，复刻经典模组。9种等级熔炉从铜到下界合金，支持升级组件与精美 GUI。",
        statusTags: ["开源", "已发布"],
        downloadUrl: "https://github.com/mc506lw/Iron-Furnaces/releases",
        features: [
            "多等级熔炉",
            "升级组件",
            "特殊熔炉",
            "智能界面"
        ],
        tags: ["工业", "工具"]
    },
    {
        id: "endfield-industry",
        name: "Endfield-Industry",
        author: "mc506lw",
        icon: "🏭",
        description: "添加明日方舟·终末地风格的集成工业系统。",
        statusTags: ["开源", "已发布"],
        downloadUrl: "https://github.com/mc506lw/endfield-industry/releases",
        features: [
            "终末地风格",
            "自动化生产",
            "资源处理",
            "视觉主题"
        ],
        tags: ["工业", "主题", "Modpack"]
    },
    {
        id: "pylon-delight",
        name: "Pylon-Delight",
        author: "mmmjjkx",
        icon: "🍖",
        description: "添加农夫乐事风格的食物和物品。",
        statusTags: ["开源", "开发中"],
        downloadUrl: "https://github.com/lijinhong11/pylon-delight",
        features: [
            "美食扩展",
            "新食物作物",
            "烹饪配方"
        ],
        tags: ["食物", "生活"]
    },
    {
        id: "barmobs",
        name: "RebarMobs",
        author: "ybw0014",
        icon: "🎒",
        description: "添加实体捕捉系统，可将实体作为物品伙伴。",
        statusTags: ["开源", "开发中"],
        downloadUrl: "https://github.com/GuizhanCraft/RebarMobs",
        features: [
            "实体捕捉",
            "伙伴系统",
            "物品化"
        ],
        tags: ["生物", "玩法"]
    },
    {
        id: "pylondroid",
        name: "PylonDroid",
        author: "Intybyte",
        icon: "🤖",
        description: "添加可编程机器人，使用 PISA 指令执行任务。",
        statusTags: ["开源", "开发中"],
        downloadUrl: "https://github.com/Intybyte/PylonDroid",
        features: [
            "可编程机器人",
            "PISA 指令集",
            "自动化任务"
        ],
        tags: ["编程", "自动化", "机器人"]
    },
    {
        id: "occult-operations",
        name: "OccultOperations",
        author: "JustAHuman",
        icon: "👹",
        description: "添加恶魔、仪式、牺牲等黑暗元素。",
        statusTags: ["未发布"],
        features: [
            "黑暗魔法",
            "仪式献祭",
            "恶魔召唤"
        ],
        tags: ["魔法", "RPG", "黑暗"]
    },
    {
        id: "rebar-rank",
        name: "RebarRank",
        author: "Idra",
        icon: "📊",
        description: "添加基于 Pylon 物品的升级系统。",
        statusTags: ["未发布"],
        features: [
            "等级系统",
            "物品升级",
            "进度追踪"
        ],
        tags: ["RPG", "进度"]
    },
    {
        id: "rebar-blockstats",
        name: "RebarBlockStats",
        author: "JustAHuman",
        icon: "📈",
        description: "添加服务器方块放置/破坏统计。",
        statusTags: ["未发布"],
        features: [
            "数据统计",
            "方块追踪",
            "可视化报表"
        ],
        tags: ["统计", "管理"]
    },
    {
        id: "gantry",
        name: "Gantry",
        author: "glomdom",
        icon: "🔧",
        description: "添加与 Pylon 并行的进度体系，专注于复杂配方链。",
        statusTags: ["未发布"],
        features: [
            "并行进度",
            "复杂配方",
            "技术树扩展"
        ],
        tags: ["进度", "技术"]
    },
    {
        id: "galactipylon",
        name: "Galactipylon",
        author: "Seggan",
        icon: "🚀",
        description: "添加火箭、行星探索和天文学研究功能。",
        statusTags: ["未发布"],
        features: [
            "航天系统",
            "行星探索",
            "天文研究"
        ],
        tags: ["太空", "探索", "科幻"]
    },
    {
        id: "cartographic",
        name: "Cartographic",
        author: "JustAHuman",
        icon: "🗺️",
        description: "添加自动映射图册、三维地图、路径点信标等地图功能。",
        statusTags: ["未发布"],
        features: [
            "自动地图",
            "三维视图",
            "路径点系统"
        ],
        tags: ["地图", "探索", "导航"]
    },
    {
        id: "rebar-transcendence",
        name: "Rebar TranscEndence",
        author: "TagDL",
        icon: "✨",
        description: "添加终局阶段的高级效果系统，引入粒子技术与稳定化机制。",
        statusTags: ["开源", "已发布"],
        downloadUrl: "https://github.com/TagDL/RebarTranscEndence/releases",
        features: [
            "粒子系统",
            "稳定化机制",
            "终局内容"
        ],
        tags: ["终局", "魔法", "粒子"]
    },
    {
        id: "dora-machines",
        name: "Dora Machines",
        author: "TagDL",
        icon: "🔧",
        description: "哆啦科技，添加范围挖掘工具、工业矿机、滤网、不可破坏符文等机器与工具。",
        statusTags: ["开源", "已发布"],
        downloadUrl: "https://github.com/TagDL/DoraMachines/releases",
        features: [
            "范围挖掘",
            "工业矿机",
            "粉尘滤网",
            "不可破坏符文"
        ],
        tags: ["工业", "工具", "机器"]
    }
];

type ViewMode = "grid" | "list";
type FilterType = "全部" | "已发布" | "开发中" | "开源";

function AddonListItem({ addon }: { addon: AddonData }) {
    return (
        <div className="group flex items-center gap-2.5 rounded-lg border border-fd-border/60 bg-fd-card/50 px-3 py-1.5 transition-all hover:border-fd-primary hover:bg-fd-accent/40">
            <span className="text-base shrink-0 leading-none">{addon.icon}</span>

            <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-1.5">
                    <h3 className="text-[13px] font-semibold text-fd-foreground truncate">{addon.name}</h3>
                    {addon.statusTags.map((tag) => (
                        <span
                            key={tag}
                            className={cn(
                                "shrink-0 text-[9px]",
                                tag === "开源" && "text-blue-500 dark:text-blue-400",
                                tag === "已发布" && "text-emerald-500 dark:text-emerald-400",
                                tag === "开发中" && "text-amber-500 dark:text-amber-400",
                                tag === "未发布" && "text-fd-muted-foreground"
                            )}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-[11px] text-fd-muted-foreground/80 truncate leading-snug -mt-px">{addon.description}</p>
            </div>

            <div className="shrink-0">
                {addon.downloadUrl ? (
                    <a
                        href={addon.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-6 h-6 rounded text-fd-muted-foreground/70 transition-colors hover:text-fd-primary hover:bg-fd-accent"
                    >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                ) : null}
            </div>
        </div>
    );
}

export function AddonPreview() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<FilterType>("全部");
    const [viewMode, setViewMode] = useState<ViewMode>("grid");
    const [displayAddons, setDisplayAddons] = useState<AddonData[]>([]);
    const hasMounted = useRef(false);

    const filteredAddons = useMemo(() => {
        const matched = addons.filter((addon) => {
            const matchSearch =
                search === "" ||
                addon.name.toLowerCase().includes(search.toLowerCase()) ||
                addon.description.toLowerCase().includes(search.toLowerCase()) ||
                addon.author.toLowerCase().includes(search.toLowerCase());

            const matchFilter =
                filter === "全部" ||
                addon.statusTags.includes(filter as AddonData["statusTags"][number]);

            return matchSearch && matchFilter;
        });

        // 有文档的排前面，然后按已发布优先，最后随机排序
        const withDocs = matched.filter((a) => a.hasDocs);
        const withoutDocs = matched.filter((a) => !a.hasDocs);

        const shuffle = <T,>(arr: T[]): T[] => {
            const a = [...arr];
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        };

        const sortByStatus = (arr: AddonData[]): AddonData[] => {
            const published = arr.filter((a) => a.statusTags.includes("已发布"));
            const others = arr.filter((a) => !a.statusTags.includes("已发布"));
            return [...shuffle(published), ...shuffle(others)];
        };

        return [...sortByStatus(withDocs), ...sortByStatus(withoutDocs)];
    }, [search, filter]);

    useEffect(() => {
        if (!hasMounted.current) {
            hasMounted.current = true;
            setDisplayAddons(filteredAddons);
        } else {
            setDisplayAddons(filteredAddons);
        }
    }, [filteredAddons]);

    const filters: FilterType[] = ["全部", "已发布", "开发中", "开源"];

    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-fd-foreground">
                    {displayAddons.length} 个附属
                </h2>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-fd-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="搜索附属..."
                            className="w-48 pl-8 pr-3 py-1.5 rounded-md bg-fd-muted border border-fd-border text-sm text-fd-foreground placeholder:text-fd-muted-foreground focus:outline-none focus:border-fd-primary"
                        />
                    </div>
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={cn(
                                "px-3 py-1.5 text-xs font-medium rounded-md transition-colors",
                                filter === f
                                    ? "bg-fd-primary text-fd-primary-foreground"
                                    : "text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-accent"
                            )}
                        >
                            {f}
                        </button>
                    ))}
                    <div className="w-px h-5 bg-fd-border" />
                    <button
                        onClick={() => setViewMode("list")}
                        className={cn(
                            "p-1.5 rounded-md transition-colors",
                            viewMode === "list"
                                ? "text-fd-foreground bg-fd-accent"
                                : "text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-accent"
                        )}
                        title="列表视图"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <button
                        onClick={() => setViewMode("grid")}
                        className={cn(
                            "p-1.5 rounded-md transition-colors",
                            viewMode === "grid"
                                ? "text-fd-foreground bg-fd-accent"
                                : "text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-accent"
                        )}
                        title="卡片视图"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                    </button>
                </div>
            </div>

            {viewMode === "grid" ? (
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                    {displayAddons.map((addon) => (
                        <AddonCard key={addon.id} addon={addon} href={addon.docsUrl} />
                    ))}
                </div>
            ) : (
                <div className="space-y-1">
                    {displayAddons.map((addon) => (
                        <AddonListItem key={addon.id} addon={addon} />
                    ))}
                </div>
            )}

            {displayAddons.length === 0 && (
                <div className="text-center py-16 text-fd-muted-foreground text-sm">
                    没有找到匹配的附属
                </div>
            )}
        </div>
    );
}
