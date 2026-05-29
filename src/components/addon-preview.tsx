"use client";

import { useState, useMemo } from "react";
import { AddonCard } from "./addon-card";
import { cn } from "@/lib/cn";
import type { AddonData } from "./addon.types";

const addons: AddonData[] = [
    {
        id: "pylon",
        name: "Pylon",
        author: "Pylon 团队",
        icon: "⚡",
        description: "添加所有基础的 Pylon 内容。大多数附属组件运行所必需的核心模块。",
        statusTags: ["开源", "已发布"],
        downloadUrl: "https://github.com/pylonmc/pylon/releases",
        features: [
            "电力系统与能量网络",
            "流体管道与存储",
            "物流传输与过滤",
            "多方块机器结构",
            "研究解锁系统",
            "国际化 (i18n) 支持"
        ],
        tags: ["核心", "Kotlin", "必备"]
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
            "自动隐藏 WAILA",
            "数据同步"
        ],
        tags: ["连接", "适配"]
    },
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
        tags: ["库", "基础依赖"]
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
            "终末地风格工业",
            "自动化生产线",
            "资源处理链",
            "独特视觉风格"
        ],
        tags: ["工业", "主题", "Modpack"]
    },
    {
        id: "steamworks",
        name: "Steamwork",
        author: "KevinWoodWL",
        icon: "🔥",
        description: "扩展锅炉、 压力控制、蒸汽输送和蒸汽驱动机器。",
        statusTags: ["开源", "已发布"],
        downloadUrl: "https://github.com/KevinWoodWL/steamwork/releases",
        features: [
            "锅炉",
            "压力控制",
            "蒸汽驱动"
        ],
        tags: ["工业"]
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
            "美食系统扩展",
            "农夫乐事风格",
            "新食物与作物",
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
            "实体捕捉机制",
            "伙伴系统",
            "实体物品化",
            "互动功能"
        ],
        tags: ["生物", "玩法"]
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
            "快速建造工具",
            "批量放置方块",
            "挖掘加速",
            "建筑辅助"
        ],
        tags: ["工具", "建筑"]
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
            "自动化任务",
            "自定义行为"
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
            "黑暗魔法系统",
            "仪式与献祭",
            "恶魔召唤",
            "神秘学内容"
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
            "进度追踪",
            "成就系统"
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
            "服务器分析",
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
            "并行进度系统",
            "复杂配方链",
            "技术树扩展",
            "模块化解锁"
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
            "天文研究",
            "太空科技"
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
            "自动地图生成",
            "三维地图视图",
            "路径点系统",
            "导航辅助"
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
            "粒子生产与冷凝系统",
            "稳定锭块获取机制",
            "终局内容扩展",
            "高级效果与视觉增强"
        ],
        tags: ["终局", "魔法", "粒子"]
    }
];

type ViewMode = "grid" | "list";
type FilterType = "全部" | "已发布" | "开发中" | "开源";

function AddonListItem({ addon }: { addon: AddonData }) {
    return (
        <div className="group flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4 transition-all hover:border-neutral-700 hover:bg-neutral-900/50">
            <span className="text-2xl shrink-0">{addon.icon}</span>
            <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-neutral-100 truncate self-center">{addon.name}</h3>
                    {addon.statusTags.map((tag) => (
                        <span
                            key={tag}
                            className={cn(
                                "text-[11px] font-medium shrink-0 leading-none mt-4.5",
                                tag === "开源" && "text-blue-400",
                                tag === "已发布" && "text-emerald-400",
                                tag === "开发中" && "text-amber-400",
                                tag === "未发布" && "text-neutral-500"
                            )}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-[13px] text-neutral-500 truncate mt-0.5">{addon.description}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
                {addon.downloadUrl ? (
                    <a
                        href={addon.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium text-neutral-400 transition-colors hover:text-neutral-200 hover:bg-neutral-800"
                    >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                    </a>
                ) : (
                    <span className="text-[11px] text-neutral-600">暂无链接</span>
                )}
            </div>
        </div>
    );
}

export function AddonPreview() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<FilterType>("全部");
    const [viewMode, setViewMode] = useState<ViewMode>("grid");

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

        const shuffle = <T,>(arr: T[]): T[] => {
            const a = [...arr];
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        };

        const published = shuffle(matched.filter((a) => a.statusTags.includes("已发布")));
        const others = shuffle(matched.filter((a) => !a.statusTags.includes("已发布")));

        return [...published, ...others];
    }, [search, filter]);

    const filters: FilterType[] = ["全部", "已发布", "开发中", "开源"];

    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-neutral-200">
                    {filteredAddons.length} 个附属
                </h2>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="搜索附属..."
                            className="w-48 pl-8 pr-3 py-1.5 rounded-md bg-neutral-900 border border-neutral-800 text-sm text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600"
                        />
                    </div>
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={cn(
                                "px-3 py-1.5 text-xs font-medium rounded-md transition-colors",
                                filter === f
                                    ? "bg-neutral-100 text-neutral-900"
                                    : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800"
                            )}
                        >
                            {f}
                        </button>
                    ))}
                    <div className="w-px h-5 bg-neutral-800" />
                    <button
                        onClick={() => setViewMode("list")}
                        className={cn(
                            "p-1.5 rounded-md transition-colors",
                            viewMode === "list"
                                ? "text-neutral-200 bg-neutral-800"
                                : "text-neutral-500 hover:text-neutral-200 hover:bg-neutral-800"
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
                                ? "text-neutral-200 bg-neutral-800"
                                : "text-neutral-500 hover:text-neutral-200 hover:bg-neutral-800"
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
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                    {filteredAddons.map((addon) => (
                        <AddonCard key={addon.id} addon={addon} />
                    ))}
                </div>
            ) : (
                <div className="space-y-2">
                    {filteredAddons.map((addon) => (
                        <AddonListItem key={addon.id} addon={addon} />
                    ))}
                </div>
            )}

            {filteredAddons.length === 0 && (
                <div className="text-center py-16 text-neutral-500 text-sm">
                    没有找到匹配的附属
                </div>
            )}
        </div>
    );
}
