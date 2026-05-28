import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KeyMod marketing payload — Phase 1E flat landing at /keymod/.
 * Sourced from docs/products/keymod/ (index, features, use-cases).
 */
export const keymodProduct: Product = {
  slug: 'keymod',
  title: "Openterface KeyMod 시리즈",
  slogan: "스마트폰을 스마트 키보드로 바꾸세요",
  subtitle: "기술 애호가, 전문가 및 게이머를 위한 프로그래밍 가능한 키보드 및 마우스 제어.",
  status: 'pre-launch',
  description:
    "스마트폰을 휴대용 키보드 및 트랙패드 콘솔로 바꿔주는 컴팩트하고 프로그래밍 가능한 USB + Bluetooth HID 에뮬레이터입니다. Openterface Mini-KVM의 입증된 HID 코어를 기반으로 제작되었으며, 플러그 앤 플레이를 지원하고 100% 오픈 소스입니다.",
  seoDescription:
    "KeyMod 시리즈는 스마트폰을 휴대용 키보드 및 트랙패드로 바꿔줍니다. USB + Bluetooth HID 에뮬레이터, 오픈 소스, 키오스크 및 워크플로우 단축키에 완벽합니다.",
  keywords:
    "KeyMod, HID 에뮬레이터, 스마트폰 키보드, 블루투스 키보드, USB 키보드, 오픈 소스",
  heroImage: 'https://assets2.openterface.com/images/keymod/2in1.webp',
  heroImages: [
    'https://assets2.openterface.com/images/keymod/2in1.webp',
    'https://assets2.openterface.com/images/keymod/keymod.webp',
    'https://assets2.openterface.com/images/keymod/feature.webp',
  ],
  buyLabel: "지금 후원하기",
  buyHref: siteConfig.links.keymodCrowdsupply,
  painPoints: [
    "키오스크나 TV 설정을 위해 풀 사이즈 키보드를 휴대하는 것은 비실용적입니다",
    "이동 중에도 워크플로우 단축키를 위한 프로그래밍 가능한 매크로가 필요합니다",
    "많은 HID 도구는 소스가 폐쇄되어 있고 사용자 정의가 제한적입니다",
  ],
  solutions: [
    "스마트폰을 휴대용 키보드 및 트랙패드로 사용하세요",
    "하나의 컴팩트한 장치에 USB 및 Bluetooth HID 통합",
    "Openterface 앱 지원과 함께 100% 오픈 소스 제공",
  ],
  hwFeatures: [
    { title: "컴팩트한 폼 팩터", description: "현장 작업 및 여행 시 주머니에 쏙 들어가는 크기입니다." },
    { title: "USB + Bluetooth", description: "최대 장치 호환성을 위한 이중 연결 지원." },
    { title: "오픈 하드웨어", description: "입증된 Openterface HID 코어를 기반으로 한 투명한 설계." },
  ],
  swFeatures: [
    { title: "KeyMod 앱", description: "스마트폰에서 매크로, 레이아웃 및 게임패드 프로필을 구성하세요." },
    { title: "교차 플랫폼", description: "Openterface 앱을 통해 Android, iPadOS 및 데스크톱 호스트와 작동합니다." },
    { title: "오픈 소스", description: "커뮤니티 기여를 위해 GitHub에서 전체 스택을 사용할 수 있습니다." },
  ],
  specs: [
    { label: "연결성", value: "USB-C + Bluetooth LE" },
    { label: "HID 모드", value: "키보드, 마우스, 게임패드" },
    { label: "라이선스", value: "오픈 소스 하드웨어 및 소프트웨어" },
  ],
  useCases: [
    "스마트 TV 및 키오스크 입력",
    "모바일 워크플로우 매크로",
    "게임 및 접근성 설정",
  ],
  useCaseCards: [
    {
      title: 'Outdoor display computers',
      description: 'Configure and troubleshoot outdoor PCs without carrying a keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'LED signage players',
      description: 'On-site updates to signage controllers — phone as full keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Kiosks',
      description: 'Debug, configure, or maintain kiosks with immediate HID access.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Smart TVs & set-top boxes',
      description: 'Full keyboard and trackpad when the remote is not enough.',
    },
    {
      title: 'Quick workflow shortcuts',
      description: 'Developers and IT staff — occasional input without extra gear.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Portable & plug-and-play',
      description: 'Your phone is always with you; KeyMod stays compact in your bag.',
    },
  ],
  useCasesDocsHref: docsPath('/keymod/use-cases/'),
  specsDocsHref: docsPath('/keymod/features/'),
  docsOverviewHref: docsPath('/keymod/'),
  videoProductSlug: 'keymod',
  videoSectionTitle: 'Community reviews & demos',
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KeyMod updates',
  latestNewsSubtitle: 'Beta releases, app updates, and pre-launch news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "기능", href: docsPath("/product/keymod/features/") },
    { label: "구성품", href: docsPath("/product/keymod/whats-in-the-box/") },
    { label: "연결 방법", href: docsPath("/product/keymod/how-to-connect/") },
    { label: "FAQ", href: docsPath("/product/keymod/faq/") },
    { label: "KeyMod 앱 다운로드", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/keymod/",
};
