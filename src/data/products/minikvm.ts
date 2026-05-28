import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * Mini-KVM marketing payload — reference template for Phase 1D–1G.
 * Sourced from docs/products/minikvm/ (index, features, reviews).
 */
export const minikvmProduct: Product = {
  slug: 'minikvm',
  title: "Openterface Mini-KVM",
  slogan: "노트북을 KVM 콘솔로 바꾸세요",
  subtitle: "당신의 기술 라이프를 단순화하세요.",
  status: 'shipping',
  description:
    "플러그 앤 플레이 KVM-over-USB 솔루션입니다. 추가 주변기기나 네트워크 없이 USB와 HDMI를 사용하여 노트북에서 바로 옆의 헤드리스 컴퓨터를 제어하세요.",
  seoDescription:
    "Openterface Mini-KVM: HDMI 지원 플러그 앤 플레이 KVM-over-USB. 네트워크 없이 노트북에서 헤드리스 컴퓨터를 제어하세요.",
  keywords:
    "Mini-KVM, KVM over USB, 헤드리스 제어, HDMI KVM, 플러그 앤 플레이 KVM",
  heroImage: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    'https://assets.openterface.com/images/cover/mini-kvm.webp',
  ],
  buyLabel: "지금 주문하기",
  buyHref: siteConfig.links.minikvmPurchase,
  funding: { amount: "$505,471", date: "2024년 6월 13일 펀딩 성공", backers: "3,775" },
  painPoints: [
    "모든 서버 수리를 위해 모니터와 키보드를 들고 다니는 것은 비실용적입니다",
    "네트워크 KVM은 구성과 연결이 필요합니다",
    "IT 전문가는 매일 사용할 수 있는 신뢰할 수 있는 포켓 KVM이 필요합니다",
  ],
  solutions: [
    "기존 노트북을 KVM 콘솔로 사용하세요",
    "하나의 컴팩트한 장치에 HDMI 캡처 + USB HID 통합",
    "2024년 이후 5,000명 이상의 커뮤니티 회원들에 의해 입증됨",
  ],
  hwFeatures: [
    { title: "HDMI 캡처", description: "타겟 머신의 전체 비디오를 호스트 노트북으로 전송합니다." },
    { title: "USB 스위치", description: "호스트와 타겟 간에 USB 장치를 전환합니다." },
    { title: "확장 핀", description: "하드웨어 해킹 및 맞춤형 통합 옵션 제공." },
  ],
  swFeatures: [
    { title: "Qt / macOS / Android 앱", description: "모든 주요 호스트 플랫폼을 위한 네이티브 앱." },
    { title: "오픈 소스", description: "완전히 개방된 하드웨어 및 소프트웨어 생태계." },
    { title: "활발한 커뮤니티", description: "Discord, GitHub 및 정기적인 펌웨어 업데이트를 통한 지원." },
  ],
  specs: [
    { label: "비디오 입력", value: "HDMI" },
    { label: "USB", value: "전환 가능한 포트가 있는 USB-C" },
    { label: "상태", value: "배송 중 — Crowd Supply" },
  ],
  useCases: [
    "홈랩 관리",
    "개발자 워크스테이션 나란히 제어",
    "IT 벤치 문제 해결",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with the laptop you already carry.',
      href: docsPath('/minikvm/reviews/'),
    },
    {
      title: 'Homelab & SBC setup',
      description: 'Configure headless Raspberry Pi, NAS, and lab nodes from one laptop.',
    },
    {
      title: 'BIOS & firmware access',
      description: 'Reach boot menus and recovery screens with no network KVM required.',
      href: docsPath('/minikvm/features/'),
    },
    {
      title: 'Developer bench',
      description: 'Side-by-side host/target control without a second monitor.',
    },
    {
      title: 'Kiosk & embedded systems',
      description: 'Field configuration for displays, signage, and appliances.',
    },
    {
      title: 'MSP field toolkit',
      description: 'Quick headless access on customer sites — fast, offline-capable, pocket-sized.',
      href: docsPath('/minikvm/reviews/'),
    },
  ],
  useCasesDocsHref: docsPath('/minikvm/'),
  specsDocsHref: docsPath('/minikvm/features/'),
  docsOverviewHref: docsPath('/minikvm/'),
  videoProductSlug: 'minikvm',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What reviewers & testers say',
  socialProof: [
    {
      quote:
        'Promises to be a low cost, feature packed way to use a laptop as a monitor, keyboard and mouse for accessing servers and other computers.',
      author: 'Cameron Gray — YouTube review',
      href: 'https://www.youtube.com/watch?v=xAEQpWyfY-c',
    },
    {
      quote:
        'A simple gadget concept that has a permanent home on my test bench, turning my laptop into my display, keyboard, and mouse.',
      author: "apalrd's adventures",
      href: 'https://www.youtube.com/watch?v=ZZ5P6MnBcHw',
    },
    {
      quote:
        'Plug-and-play and network-independent KVM-over-USB that establishes a direct HDMI and USB connection between host and target.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2024/05/09/openterface-mini-kvm-affordable-kvm-over-usb-device/',
    },
    {
      quote:
        "In datacenters it's cool that this totally replaces a crash cart using the laptop you'd already have with you!",
      author: 'samw — tinytoolk.it',
      href: 'https://tinytoolk.it/tools/openterface-kvm/',
    },
    {
      quote:
        'Latency is definitely better than using VNC… Overall a very solid device, it has been a very worthy addition to my daily carry toolkit.',
      author: '65Diamond — r/msp',
      href: 'https://www.reddit.com/r/msp/comments/1j2dlde/comment/mju6uru/',
    },
    {
      quote:
        'An extremely useful tool… The hardware is more than solid and the toolbox also contains all the accessories you need.',
      author: 'Florian Bernd — beta tester',
      href: 'https://blog.flobernd.de/2024/06/openterface-beta-test/',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest Mini-KVM updates',
  latestNewsSubtitle: 'Firmware releases, app updates, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "기능", href: docsPath("/product/minikvm/features/") },
    { label: "USB 스위치", href: docsPath("/product/minikvm/usb-switch/") },
    { label: "기술 지원", href: docsPath("/product/minikvm/support/") },
    { label: "FAQ", href: docsPath("/product/minikvm/faq/") },
    { label: "앱 다운로드", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/minikvm/",
};
