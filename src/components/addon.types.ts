export interface AddonData {
    id: string;
    name: string;
    author: string;
    icon: string;
    description: string;
    statusTags: ("开源" | "已发布" | "未发布" | "开发中")[];
    downloadUrl?: string;
    features?: string[];
    tags?: string[];
}
