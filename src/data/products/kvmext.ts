import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

const KVMEXT_SHOP =
  'https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole';

/**
 * KVM Extension (uConsole) marketing payload — Phase 1F flat landing at /kvmext/.
 * Sourced from docs/products/kvmext/ (index, features).
 */
export const kvmextProduct: Product = {
  slug: 'uconsole-kvm-extension',
  title: "uConsole KVM Extension",
  slogan: "uConsole을 위한 KVM 파워",
  subtitle: "휴대용 uConsole을 풀 KVM 터미널로 바꾸세요.",
  status: 'oshwa',
  description:
    "Clockwork uConsole에 KVM-over-USB 기능을 추가하는 하드웨어 확장 장치입니다. 내장 키보드와 디스플레이를 갖춘 휴대용 IT 작업에 완벽합니다.",
  seoDescription:
    "uConsole KVM Extension은 Clockwork uConsole 휴대용 컴퓨터에 KVM-over-USB 기능을 추가합니다.",
  keywords:
    "uConsole, KVM 확장, 휴대용 KVM, Clockwork uConsole",
  heroImage:
    'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
  heroImages: [
    'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    'https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension.webp',
  ],
  buyLabel: "더 알아보기",
  buyHref: KVMEXT_SHOP,
  painPoints: [
    "휴대용 콘솔에는 헤드리스 타겟을 위한 통합 KVM 기능이 부족합니다",
    "현장 기술자는 하나의 장치로 모든 것을 해결하기를 원합니다",
  ],
  solutions: [
    "uConsole 폼 팩터 전용 확장 보드",
    "휴대용 장치에서 실행되는 완전한 Openterface KVM 스택",
  ],
  hwFeatures: [
    { title: "uConsole 네이티브", description: "Clockwork uConsole을 위해 특별히 설계되었습니다." },
    { title: "컴팩트 PCB", description: "uConsole 섀시 내부에 설치됩니다." },
  ],
  swFeatures: [
    { title: "Openterface 앱", description: "Mini-KVM 및 KVM-GO와 동일한 신뢰할 수 있는 소프트웨어." },
    { title: "설치 가이드", description: "단계별 하드웨어 및 소프트웨어 설치 문서." },
  ],
  specs: [
    { label: "호환성", value: "Clockwork uConsole" },
    { label: "인증", value: "OSHWA 인증" },
  ],
  useCases: [
    "휴대용 데이터 센터 도구",
    "이동 중인 메이커 및 홈랩",
  ],
  useCaseCards: [
    {
      title: 'Portable datacenter tool',
      description: 'Walk racks with your uConsole — one device for display, keyboard, and KVM.',
      href: docsPath('/products/kvmext/'),
    },
    {
      title: 'Maker & homelab on the go',
      description: 'Configure headless SBCs, NAS nodes, and lab gear from a pocketable console.',
      href: docsPath('/products/kvmext/features/'),
    },
    {
      title: 'Field IT & MSP visits',
      description: 'BIOS access and quick fixes without hauling a crash cart.',
    },
    {
      title: 'Network-free troubleshooting',
      description: 'When the target has no IP — HDMI + HID still works.',
      href: docsPath('/products/kvmext/connect-to-target/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmext/'),
  specsDocsHref: docsPath('/products/kvmext/features/'),
  docsOverviewHref: docsPath('/products/kvmext/'),
  videoProductSlug: 'uconsole-kvm-extension',
  videoSectionTitle: 'Installation & community demos',
  latestNewsHref: `${siteConfig.links.news}/products/kvmext/2025-08-28-oshwa-certification/`,
  latestNewsTitle: 'OSHWA certification achieved',
  latestNewsSubtitle: 'Official Open Source Hardware Association certification for the uConsole KVM Extension.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "하드웨어 설치", href: docsPath("/product/uconsole-kvm-extension/hardware-installation/") },
    { label: "소프트웨어 설정", href: docsPath("/product/uconsole-kvm-extension/software-setup/") },
    { label: "연결 방법", href: docsPath("/product/uconsole-kvm-extension/connect-to-target/") },
    { label: "FAQ", href: docsPath("/product/uconsole-kvm-extension/faq/") },
  ],
  legacyBase: "/products/uconsole-kvm-extension/",
};
