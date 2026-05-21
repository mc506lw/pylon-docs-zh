export interface AddonData {
    id: string;
    name: string;
    author: string;
    icon: string;
    description: string;
    status: "released" | "dev";
    downloadUrl?: string;
    features?: string[];
    tags?: string[];
}
