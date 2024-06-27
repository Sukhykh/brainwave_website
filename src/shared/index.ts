export interface NavigationItem {
  id: string;
  title: string;
  url: string;
  onlyMobile?: boolean;
}

export interface RoadmapItem {
  id: string;
  title: string;
  text: string;
  date: string;
  status: string;
  imageUrl: string;
  colorful?: boolean;
}

export interface CollabContentItem {
  id: string;
  title: string;
  text?: string;
}

export interface CollabAppsItem {
  id: string;
  title: string;
  icon: string;
  width: number;
  height: number;
}

export interface PricingItem {
  id: string;
  title: string;
  description: string;
  price: string | null;
  features: string[];
}

export interface BenefitsItem {
  id: string;
  title: string;
  text: string;
  backgroundUrl: string;
  iconUrl: string;
  imageUrl: string;
  light?: boolean;
}

export interface SocialItem {
  id: string;
  title: string;
  iconUrl: string;
  url: string;
}
