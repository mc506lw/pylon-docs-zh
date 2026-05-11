import { Blocks, Cpu, Database, FileText, GitFork, Globe, Package, Puzzle, Settings, Zap } from "lucide-react";

import { cn } from "@/lib/cn";

const FeatureCard = ({
    icon: Icon,
    title,
    desc,
    tags,
    className,
}: {
    icon: React.ElementType;
    title: string;
    desc: string;
    tags?: string[];
    className?: string;
}) => (
    <div className={cn("border-fd-border bg-fd-card rounded-xl border p-6", className)}>
        <div className="bg-fd-primary/10 text-fd-primary mb-4 inline-flex rounded-lg p-2.5">
            <Icon className="h-5 w-5" />
        </div>
        <h3 className="mb-2 text-base font-semibold">{title}</h3>
        <p className="text-fd-muted-foreground text-sm leading-relaxed">{desc}</p>
        {tags && (
            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="border-fd-border bg-fd-muted text-fd-muted-foreground rounded-full border px-2.5 py-0.5 text-xs"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        )}
    </div>
);

const CompactCard = ({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) => (
    <div className="border-fd-border bg-fd-card flex flex-1 items-start gap-3 rounded-xl border p-5">
        <div className="bg-fd-primary/10 text-fd-primary shrink-0 rounded-lg p-2">
            <Icon className="h-4 w-4" />
        </div>
        <div>
            <h3 className="mb-1 text-sm font-semibold">{title}</h3>
            <p className="text-fd-muted-foreground text-xs leading-relaxed">{desc}</p>
        </div>
    </div>
);

export const FeaturesSection = () => (
    <section className="pb-16">
        <div className="mb-10 text-center">
            <h2 className="mb-2 text-2xl font-bold sm:text-3xl">7 大能力模块</h2>
            <p className="text-fd-muted-foreground text-sm">从电力到物流，一站式掌握 Pylon 全部能力</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
                icon={Blocks}
                title="自定义方块与物品"
                desc="创建具有自定义行为、纹理和交互的方块与物品，完全集成原版配方与 WAILA 显示系统。"
                tags={["配方合成", "WAILA 信息", "持久化数据"]}
                className="sm:col-span-2"
            />
            <FeatureCard icon={Zap} title="流体系统" desc="高效可扩展的流体管道网络，支持多种流体类型、存储与过滤。→ 建设石油化工生产线" />
            <FeatureCard icon={Package} title="物流运输" desc="智能物品传输系统，支持路由、过滤与自动分拣。→ 全自动物品分拣工厂" />
            <div className="flex flex-col gap-4">
                <CompactCard icon={Cpu} title="多方块结构" desc="构建复杂的多方块机器，自动检测结构完整性并管理运行状态。" />
                <CompactCard icon={Database} title="持久化数据" desc="基于 PDC 的跨维度数据存储，重启不丢失。" />
            </div>
            <FeatureCard
                icon={Puzzle}
                title="研究系统"
                desc="基于研究点的渐进式解锁机制，为玩家提供目标感明确的技术树体验。"
                tags={["可配置条件", "多语言支持"]}
            />
            <FeatureCard icon={Globe} title="国际化 (i18n)" desc="原生多语言架构，每个玩家独立语言设置，完整翻译键体系。→ 开箱即用的中文支持" />
            <div className="flex flex-col gap-4">
                <CompactCard icon={Settings} title="高度可配置" desc="每台机器独立参数配方可编辑，行为完全可控。" />
                <CompactCard icon={FileText} title="完整 API 文档" desc="Javadoc 参考与 Addon 开发指南，从入门到贡献代码。" />
            </div>
            <FeatureCard
                icon={GitFork}
                title="Addon 扩展 API"
                desc="清晰的组件化接口，支持 Kotlin 与 Java，模块化设计让二次开发变得简单直接。"
                tags={["Kotlin / Java", "模块化"]}
            />
        </div>
    </section>
);