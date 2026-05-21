import { legacyPath } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: '홈', href: '/' },
  {
    label: '제품',
    href: '#',
    children: [
      { label: 'KeyMod 시리즈', href: '/products/keymod/' },
      { label: 'KVM-GO 시리즈', href: '/products/kvm-go/' },
      { label: 'Mini-KVM', href: '/products/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/products/uconsole-kvm-extension/' },
      { label: '액세서리', href: '/products/accessories/' },
    ],
  },
  { label: '비디오', href: '/videos/' },
  { label: '활용 사례', href: '/use-cases/' },
  { label: 'FAQ', href: legacyPath('/faq/'), external: true },
  { label: '앱', href: legacyPath('/app/overview/'), external: true },
  { label: '튜토리얼', href: legacyPath('/tutorial/'), external: true },
  { label: '지원', href: legacyPath('/support/'), external: true },
  { label: '정보', href: '/about/' },
];
