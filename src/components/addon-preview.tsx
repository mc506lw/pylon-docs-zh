"use client";

import { AddonCard } from "./addon-card";
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

export function AddonPreview() {
    return (
        <div className="w-full max-w-5xl mx-auto space-y-8">
            <div className="grid gap-4 grid-cols-1">
                {addons.map((addon) => (
                    <AddonCard key={addon.id} addon={addon} />
                ))}
            </div>
        </div>
    );
}
