export type ResourceType =
  | 'Guide'
  | 'Template'
  | 'Dataset'
  | 'Example'
  | 'Video'
  | 'Docs'
  | 'Changelog';


export type ResourceItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  type: ResourceType;
  tags?: string[];
  date?: string; // ISO
  readTime?: string; // e.g. "8 min"
  featured?: boolean;
  external?: boolean;
};