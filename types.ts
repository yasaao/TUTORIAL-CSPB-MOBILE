export interface ConfigCommand {
  command: string;
  description: string;
}

export interface SectionData {
  id: string;
  title: string;
  shortDescription?: string;
  type: 'config' | 'text' | 'steps' | 'script' | 'video';
  content?: string;
  items?: ConfigCommand[];
  steps?: string[];
  subSections?: {
    title: string;
    items: ConfigCommand[];
  }[];
  links?: {
    label: string;
    url: string;
  }[];
}

export interface SidebarItem {
  id: string;
  label: string;
}