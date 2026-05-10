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
            <h2 className="mb-2 text-2xl font-bold sm:text-3xl">功能特性</h2>
            <p className="text-fd-muted-foreground text-sm">基于 Rebar 框架的强大扩展系统</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
                icon={Blocks}
                title="自定义方块与物品"
                desc="轻松创建具有自定义行为、纹理和交互逻辑的方块与物品，完全集成原版系统。"
                tags={["配方", "WAILA 显示"]}
                className="sm:col-span-2"
            />
            <FeatureCard icon={Zap} title="流体系统" desc="高效且可扩展的流体管道网络，支持多种流体类型和存储方案。" />
            <FeatureCard icon={Package} title="物流运输" desc="智能物品运输系统，自动将物品从 A 点运送到 B 点，支持路由和过滤。" />
            <div className="flex flex-col gap-4">
                <CompactCard icon={Cpu} title="多方块结构" desc="创建复杂的多方块机器和建筑，自动检测和状态管理。" />
                <CompactCard icon={Database} title="持久化数据" desc="强大的数据存储系统，支持 PDC 和跨维度保存。" />
            </div>
            <FeatureCard
                icon={Puzzle}
                title="研究系统"
                desc="基于研究点的解锁系统，为玩家提供渐进式的内容解锁体验。"
                tags={["可配置条件", "多语言支持"]}
            />
            <FeatureCard
                icon={Globe}
                title="国际化"
                desc="原生多语言支持，每个玩家独立语言设置，完整的翻译机制。"
            />
            <div className="flex flex-col gap-4">
                <CompactCard icon={Settings} title="高度可配置" desc="每台机器独立设置，配方可编辑，行为可定制。" />
                <CompactCard icon={FileText} title="详尽文档" desc="完整的 Javadoc API 参考和 Markdown 文档。" />
            </div>
            <FeatureCard
                icon={GitFork}
                title="轻松扩展"
                desc="清晰的附加组件 API，支持 Kotlin 和 Java，模块化设计易于维护。"
            />
        </div>
    </section>
);