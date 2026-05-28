import { docsPath, newsPath, siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "제품",
    href: '/products/',
    children: [
      { label: "모든 제품", href: '/products/' },
      { label: 'KeyMod Series', href: '/keymod/' },
      { label: 'KVM-GO Series', href: '/kvmgo/' },
      { label: 'Mini-KVM', href: '/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/kvmext/' },
      { label: "액세서리", href: '/accessories/' },
    ],
  },
  {
    label: "앱",
    href: '/app/',
    children: [
      { label: "모든 앱", href: '/app/' },
      { label: "KVM 제어", href: '/kvm/' },
      { label: 'KeyCmd', href: '/keycmd/' },
    ],
  },
  { label: "미디어", href: '/videos/' },
  { label: "소개", href: '/about/' },
  { label: "문서", href: docsPath(), external: true },
  { label: "뉴스", href: newsPath(), external: true },
  { label: "샵", href: siteConfig.links.shop, external: true },
];
