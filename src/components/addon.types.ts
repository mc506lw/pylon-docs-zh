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
  inputInfo?: string;
  outputInfo?: string;
  group?: string;
  metric?: string;
  provider?: string;
  latency?: string;
  /** 是否有独立文档 */
  hasDocs?: boolean;
  /** 文档路径 */
  docsUrl?: string;
  /** AI 使用率 */
  aiUsage?: "极少" | "中等" | "较高" | "未披露";
}
