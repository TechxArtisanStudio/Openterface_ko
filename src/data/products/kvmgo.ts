import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KVM-GO marketing payload — cloned from Mini-KVM template (Phase 1D).
 * Sourced from docs/products/kvmgo/ (index, features, reviews, use-cases).
 */
export const kvmgoProduct: Product = {
  slug: 'kvm-go',
  title: "Openterface KVM-GO 시리즈",
  slogan: "열쇠고리에 걸 수 있는 초소형 KVM",
  subtitle: "기술적인 결정적 순간을 위해 — 연결하고, 제어하고, 가세요.",
  status: 'pre-order',
  description:
    "비디오 커넥터(HDMI, DisplayPort 또는 VGA)가 내장된 차세대 KVM-over-USB 솔루션입니다. 초소형 열쇠고리 크기로 데이터 센터 및 서버실에서의 신속한 IT 운영을 위해 제작되었습니다.",
  seoDescription:
    "Openterface KVM-Go로 헤드리스 컴퓨터를 제어하세요. 내장 HDMI/DP/VGA, 열쇠고리 크기, IT 전문가를 위한 4K KVM-over-USB.",
  keywords:
    "KVM-Go, KVM over USB, 초소형 KVM, 열쇠고리 KVM, 4K KVM, 헤드리스 제어",
  heroImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
  ],
  buyLabel: "지금 예약 주문하기",
  buyHref: siteConfig.links.kvmgoPurchase,
  funding: { amount: "$101,548", date: "2025년 12월 30일 펀딩 성공", backers: "478" },
  painPoints: [
    "기존 KVM 장비는 부피가 크고 별도의 비디오 케이블이 필요합니다",
    "현장에서의 비상 서버 액세스에는 주머니 크기의 도구가 필요합니다",
    "네트워크 액세스 없이 헤드리스 문제를 해결하는 것은 느립니다",
  ],
  solutions: [
    "내장 비디오 커넥터로 추가 케이블이 필요 없습니다",
    "언제든 손이 닿는 곳에 있는 열쇠고리 폼 팩터",
    "KVM-over-USB — 타겟 장치에 네트워크나 드라이버가 필요하지 않습니다",
  ],
  hwFeatures: [
    { title: "내장 비디오", description: "HDMI, DisplayPort 또는 VGA 모델 — 번거로운 케이블이 없습니다." },
    { title: "열쇠고리 크기", description: "Openterface 라인업 중 가장 작은 KVM-over-USB 장치." },
    { title: "4K 지원", description: "현대적인 디스플레이를 위한 고해상도 캡처." },
  ],
  swFeatures: [
    { title: "Openterface Qt 앱", description: "Windows, macOS 및 Linux를 위한 교차 플랫폼 호스트 제어." },
    { title: "MicroSD 스위치", description: "휴대용 OS 이미지 및 도구를 위한 전환 가능한 저장소." },
    { title: "오픈 소스 스택", description: "커뮤니티 중심의 펌웨어 및 호스트 애플리케이션." },
  ],
  specs: [
    { label: "비디오", value: "HDMI / DP / VGA (모델에 따라 다름)" },
    { label: "해상도", value: "최대 4K" },
    { label: "연결", value: "USB-C KVM-over-USB" },
  ],
  useCases: [
    "데이터 센터 점검",
    "헤드리스 장치 설정",
    "현장 IT 및 홈랩 복구",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with a keychain KVM that plugs straight in.',
      href: docsPath('/products/kvmgo/use-cases/'),
    },
    {
      title: 'EDC field toolkit',
      description: 'Always in your bag — built-in connector means one less cable to forget.',
      href: docsPath('/products/kvmgo/use-cases/'),
    },
    {
      title: 'Headless homelab rescue',
      description: 'Configure NAS, SBC, and lab nodes without a spare monitor.',
    },
    {
      title: 'Legacy VGA systems',
      description: 'VGA model targets older racks and industrial gear (in development).',
      href: docsPath('/products/kvmgo/features/'),
    },
    {
      title: 'BIOS & firmware access',
      description: 'Boot menus and recovery screens with no network dependency.',
      href: docsPath('/products/kvmgo/features/'),
    },
    {
      title: 'MicroSD OS installs',
      description: 'Switchable storage for imaging and portable recovery tools.',
      href: docsPath('/products/kvmgo/microsd-switch/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmgo/use-cases/'),
  specsDocsHref: docsPath('/products/kvmgo/features/'),
  docsOverviewHref: docsPath('/products/kvmgo/'),
  videoProductSlug: 'kvm-go',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What press & early users say',
  socialProof: [
    {
      quote:
        'Small enough to fit on a keychain, Openterface KVM-GO is a tiny, open-source hardware KVM-over-USB gadget with HDMI, DisplayPort, or VGA connectors.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2026/01/05/openterface-kvm-go-an-ultra-compact-kvm-over-usb-solution-with-hdmi-dp-or-vga-video-input/',
    },
    {
      quote:
        "Openterface's KVM-GO is a pocket-sized, open source tool for hardware-level access to headless computers.",
      author: 'Hackster News',
      href: 'https://www.hackster.io/news/a-kvm-that-fits-on-your-keychain-e2adb39f7a2b',
    },
    {
      quote:
        'Following the nearly half-million dollar crowdfunding success of the Mini-KVM, Openterface is back with the KVM-GO — a tiny KVM that reduces cable clutter.',
      author: 'Notebookcheck',
      href: 'https://www.notebookcheck.net/KVM-GO-Openterface-is-back-with-a-more-compact-and-refined-KVM.1196402.0.html',
    },
    {
      quote:
        'Keychain-friendly KVM-over-USB gadget comes in a smaller form factor but with upgraded 4K60-capable internals.',
      author: 'Hackster News',
      href: 'https://www.hackster.io/news/techxartisan-is-back-with-a-smaller-yet-more-powerful-openterface-the-openterface-kvm-go-26174b2d11c0',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KVM-GO updates',
  latestNewsSubtitle: 'Production milestones, app releases, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "기능", href: docsPath("/product/kvm-go/features/") },
    { label: "베타 빠른 시작 가이드", href: docsPath("/product/kvm-go/beta-quick-start/") },
    { label: "연결 방법", href: docsPath("/product/kvm-go/how-to-connect/") },
    { label: "FAQ", href: docsPath("/product/kvm-go/faq/") },
    { label: "앱 다운로드", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/kvm-go/",
};
