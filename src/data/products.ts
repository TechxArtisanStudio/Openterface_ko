import { legacyPath, siteConfig } from '../config/site';

export interface ProductDocLink {
  label: string;
  href: string;
}

export interface Product {
  slug: string;
  title: string;
  slogan: string;
  subtitle: string;
  description: string;
  seoDescription: string;
  keywords: string;
  heroImage: string;
  heroImages: string[];
  buyLabel: string;
  buyHref: string;
  painPoints: string[];
  solutions: string[];
  hwFeatures: { title: string; description: string }[];
  swFeatures: { title: string; description: string }[];
  specs: { label: string; value: string }[];
  useCases: string[];
  funding?: { amount: string; date: string; backers: string };
  docLinks: ProductDocLink[];
  legacyBase: string;
}

export const products: Record<string, Product> = {
  keymod: {
    slug: 'keymod',
    title: 'Openterface KeyMod 시리즈',
    slogan: '스마트폰을 스마트 키보드로 바꾸세요',
    subtitle: '기술 애호가, 전문가 및 게이머를 위한 프로그래밍 가능한 키보드 및 마우스 제어.',
    description:
      '스마트폰을 휴대용 키보드 및 트랙패드 콘솔로 바꿔주는 컴팩트하고 프로그래밍 가능한 USB + Bluetooth HID 에뮬레이터입니다. Openterface Mini-KVM의 입증된 HID 코어를 기반으로 제작되었으며, 플러그 앤 플레이를 지원하고 100% 오픈 소스입니다.',
    seoDescription:
      'KeyMod 시리즈는 스마트폰을 휴대용 키보드 및 트랙패드로 바꿔줍니다. USB + Bluetooth HID 에뮬레이터, 오픈 소스, 키오스크 및 워크플로우 단축키에 완벽합니다.',
    keywords: 'KeyMod, HID 에뮬레이터, 스마트폰 키보드, 블루투스 키보드, USB 키보드, 오픈 소스',
    heroImage: 'https://assets2.openterface.com/images/keymod/2in1.webp',
    heroImages: [
      'https://assets2.openterface.com/images/keymod/2in1.webp',
      'https://assets2.openterface.com/images/keymod/keymod.webp',
      'https://assets2.openterface.com/images/keymod/feature.webp',
    ],
    buyLabel: '지금 후원하기',
    buyHref: siteConfig.links.keymodCrowdsupply,
    painPoints: [
      '키오스크나 TV 설정을 위해 풀 사이즈 키보드를 휴대하는 것은 비실용적입니다',
      '이동 중에도 워크플로우 단축키를 위한 프로그래밍 가능한 매크로가 필요합니다',
      '많은 HID 도구는 소스가 폐쇄되어 있고 사용자 정의가 제한적입니다',
    ],
    solutions: [
      '스마트폰을 휴대용 키보드 및 트랙패드로 사용하세요',
      '하나의 컴팩트한 장치에 USB 및 Bluetooth HID 통합',
      'Openterface 앱 지원과 함께 100% 오픈 소스 제공',
    ],
    hwFeatures: [
      { title: '컴팩트한 폼 팩터', description: '현장 작업 및 여행 시 주머니에 쏙 들어가는 크기입니다.' },
      { title: 'USB + Bluetooth', description: '최대 장치 호환성을 위한 이중 연결 지원.' },
      { title: '오픈 하드웨어', description: '입증된 Openterface HID 코어를 기반으로 한 투명한 설계.' },
    ],
    swFeatures: [
      { title: 'KeyMod 앱', description: '스마트폰에서 매크로, 레이아웃 및 게임패드 프로필을 구성하세요.' },
      { title: '교차 플랫폼', description: 'Openterface 앱을 통해 Android, iPadOS 및 데스크톱 호스트와 작동합니다.' },
      { title: '오픈 소스', description: '커뮤니티 기여를 위해 GitHub에서 전체 스택을 사용할 수 있습니다.' },
    ],
    specs: [
      { label: '연결성', value: 'USB-C + Bluetooth LE' },
      { label: 'HID 모드', value: '키보드, 마우스, 게임패드' },
      { label: '라이선스', value: '오픈 소스 하드웨어 및 소프트웨어' },
    ],
    useCases: ['스마트 TV 및 키오스크 입력', '모바일 워크플로우 매크로', '게임 및 접근성 설정'],
    docLinks: [
      { label: '기능', href: legacyPath('/product/keymod/features/') },
      { label: '구성품', href: legacyPath('/product/keymod/whats-in-the-box/') },
      { label: '연결 방법', href: legacyPath('/product/keymod/how-to-connect/') },
      { label: 'FAQ', href: legacyPath('/product/keymod/faq/') },
      { label: 'KeyMod 앱 다운로드', href: legacyPath('/app/overview/') },
    ],
    legacyBase: '/product/keymod/',
  },
  'kvm-go': {
    slug: 'kvm-go',
    title: 'Openterface KVM-GO 시리즈',
    slogan: '열쇠고리에 걸 수 있는 초소형 KVM',
    subtitle: '기술적인 결정적 순간을 위해 — 연결하고, 제어하고, 가세요.',
    description:
      '비디오 커넥터(HDMI, DisplayPort 또는 VGA)가 내장된 차세대 KVM-over-USB 솔루션입니다. 초소형 열쇠고리 크기로 데이터 센터 및 서버실에서의 신속한 IT 운영을 위해 제작되었습니다.',
    seoDescription:
      'Openterface KVM-Go로 헤드리스 컴퓨터를 제어하세요. 내장 HDMI/DP/VGA, 열쇠고리 크기, IT 전문가를 위한 4K KVM-over-USB.',
    keywords: 'KVM-Go, KVM over USB, 초소형 KVM, 열쇠고리 KVM, 4K KVM, 헤드리스 제어',
    heroImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    heroImages: [
      'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
      'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
    ],
    buyLabel: '지금 예약 주문하기',
    buyHref: siteConfig.links.kvmgoPurchase,
    funding: { amount: '$101,548', date: '2025년 12월 30일 펀딩 성공', backers: '478' },
    painPoints: [
      '기존 KVM 장비는 부피가 크고 별도의 비디오 케이블이 필요합니다',
      '현장에서의 비상 서버 액세스에는 주머니 크기의 도구가 필요합니다',
      '네트워크 액세스 없이 헤드리스 문제를 해결하는 것은 느립니다',
    ],
    solutions: [
      '내장 비디오 커넥터로 추가 케이블이 필요 없습니다',
      '언제든 손이 닿는 곳에 있는 열쇠고리 폼 팩터',
      'KVM-over-USB — 타겟 장치에 네트워크나 드라이버가 필요하지 않습니다',
    ],
    hwFeatures: [
      { title: '내장 비디오', description: 'HDMI, DisplayPort 또는 VGA 모델 — 번거로운 케이블이 없습니다.' },
      { title: '열쇠고리 크기', description: 'Openterface 라인업 중 가장 작은 KVM-over-USB 장치.' },
      { title: '4K 지원', description: '현대적인 디스플레이를 위한 고해상도 캡처.' },
    ],
    swFeatures: [
      { title: 'Openterface Qt 앱', description: 'Windows, macOS 및 Linux를 위한 교차 플랫폼 호스트 제어.' },
      { title: 'MicroSD 스위치', description: '휴대용 OS 이미지 및 도구를 위한 전환 가능한 저장소.' },
      { title: '오픈 소스 스택', description: '커뮤니티 중심의 펌웨어 및 호스트 애플리케이션.' },
    ],
    specs: [
      { label: '비디오', value: 'HDMI / DP / VGA (모델에 따라 다름)' },
      { label: '해상도', value: '최대 4K' },
      { label: '연결', value: 'USB-C KVM-over-USB' },
    ],
    useCases: ['데이터 센터 점검', '헤드리스 장치 설정', '현장 IT 및 홈랩 복구'],
    docLinks: [
      { label: '기능', href: legacyPath('/product/kvm-go/features/') },
      { label: '베타 빠른 시작 가이드', href: legacyPath('/product/kvm-go/beta-quick-start/') },
      { label: '연결 방법', href: legacyPath('/product/kvm-go/how-to-connect/') },
      { label: 'FAQ', href: legacyPath('/product/kvm-go/faq/') },
      { label: '앱 다운로드', href: legacyPath('/app/overview/') },
    ],
    legacyBase: '/product/kvm-go/',
  },
  minikvm: {
    slug: 'minikvm',
    title: 'Openterface Mini-KVM',
    slogan: '노트북을 KVM 콘솔로 바꾸세요',
    subtitle: '당신의 기술 라이프를 단순화하세요.',
    description:
      '플러그 앤 플레이 KVM-over-USB 솔루션입니다. 추가 주변기기나 네트워크 없이 USB와 HDMI를 사용하여 노트북에서 바로 옆의 헤드리스 컴퓨터를 제어하세요.',
    seoDescription:
      'Openterface Mini-KVM: HDMI 지원 플러그 앤 플레이 KVM-over-USB. 네트워크 없이 노트북에서 헤드리스 컴퓨터를 제어하세요.',
    keywords: 'Mini-KVM, KVM over USB, 헤드리스 제어, HDMI KVM, 플러그 앤 플레이 KVM',
    heroImage: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    heroImages: [
      'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
      'https://assets.openterface.com/images/cover/mini-kvm.webp',
    ],
    buyLabel: '지금 주문하기',
    buyHref: siteConfig.links.minikvmPurchase,
    funding: { amount: '$505,471', date: '2024년 6월 13일 펀딩 성공', backers: '3,775' },
    painPoints: [
      '모든 서버 수리를 위해 모니터와 키보드를 들고 다니는 것은 비실용적입니다',
      '네트워크 KVM은 구성과 연결이 필요합니다',
      'IT 전문가는 매일 사용할 수 있는 신뢰할 수 있는 포켓 KVM이 필요합니다',
    ],
    solutions: [
      '기존 노트북을 KVM 콘솔로 사용하세요',
      '하나의 컴팩트한 장치에 HDMI 캡처 + USB HID 통합',
      '2024년 이후 5,000명 이상의 커뮤니티 회원들에 의해 입증됨',
    ],
    hwFeatures: [
      { title: 'HDMI 캡처', description: '타겟 머신의 전체 비디오를 호스트 노트북으로 전송합니다.' },
      { title: 'USB 스위치', description: '호스트와 타겟 간에 USB 장치를 전환합니다.' },
      { title: '확장 핀', description: '하드웨어 해킹 및 맞춤형 통합 옵션 제공.' },
    ],
    swFeatures: [
      { title: 'Qt / macOS / Android 앱', description: '모든 주요 호스트 플랫폼을 위한 네이티브 앱.' },
      { title: '오픈 소스', description: '완전히 개방된 하드웨어 및 소프트웨어 생태계.' },
      { title: '활발한 커뮤니티', description: 'Discord, GitHub 및 정기적인 펌웨어 업데이트를 통한 지원.' },
    ],
    specs: [
      { label: '비디오 입력', value: 'HDMI' },
      { label: 'USB', value: '전환 가능한 포트가 있는 USB-C' },
      { label: '상태', value: '배송 중 — Crowd Supply' },
    ],
    useCases: ['홈랩 관리', '개발자 워크스테이션 나란히 제어', 'IT 벤치 문제 해결'],
    docLinks: [
      { label: '기능', href: legacyPath('/product/minikvm/features/') },
      { label: 'USB 스위치', href: legacyPath('/product/minikvm/usb-switch/') },
      { label: '기술 지원', href: legacyPath('/product/minikvm/support/') },
      { label: 'FAQ', href: legacyPath('/product/minikvm/faq/') },
      { label: '앱 다운로드', href: legacyPath('/app/overview/') },
    ],
    legacyBase: '/product/minikvm/',
  },
  'uconsole-kvm-extension': {
    slug: 'uconsole-kvm-extension',
    title: 'uConsole KVM Extension',
    slogan: 'uConsole을 위한 KVM 파워',
    subtitle: '휴대용 uConsole을 풀 KVM 터미널로 바꾸세요.',
    description:
      'Clockwork uConsole에 KVM-over-USB 기능을 추가하는 하드웨어 확장 장치입니다. 내장 키보드와 디스플레이를 갖춘 휴대용 IT 작업에 완벽합니다.',
    seoDescription:
      'uConsole KVM Extension은 Clockwork uConsole 휴대용 컴퓨터에 KVM-over-USB 기능을 추가합니다.',
    keywords: 'uConsole, KVM 확장, 휴대용 KVM, Clockwork uConsole',
    heroImage: 'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    heroImages: [
      'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    ],
    buyLabel: '더 알아보기',
    buyHref: legacyPath('/product/uconsole-kvm-extension/'),
    painPoints: [
      '휴대용 콘솔에는 헤드리스 타겟을 위한 통합 KVM 기능이 부족합니다',
      '현장 기술자는 하나의 장치로 모든 것을 해결하기를 원합니다',
    ],
    solutions: [
      'uConsole 폼 팩터 전용 확장 보드',
      '휴대용 장치에서 실행되는 완전한 Openterface KVM 스택',
    ],
    hwFeatures: [
      { title: 'uConsole 네이티브', description: 'Clockwork uConsole을 위해 특별히 설계되었습니다.' },
      { title: '컴팩트 PCB', description: 'uConsole 섀시 내부에 설치됩니다.' },
    ],
    swFeatures: [
      { title: 'Openterface 앱', description: 'Mini-KVM 및 KVM-GO와 동일한 신뢰할 수 있는 소프트웨어.' },
      { title: '설치 가이드', description: '단계별 하드웨어 및 소프트웨어 설치 문서.' },
    ],
    specs: [
      { label: '호환성', value: 'Clockwork uConsole' },
      { label: '인증', value: 'OSHWA 인증' },
    ],
    useCases: ['휴대용 데이터 센터 도구', '이동 중인 메이커 및 홈랩'],
    docLinks: [
      { label: '하드웨어 설치', href: legacyPath('/product/uconsole-kvm-extension/hardware-installation/') },
      { label: '소프트웨어 설정', href: legacyPath('/product/uconsole-kvm-extension/software-setup/') },
      { label: '연결 방법', href: legacyPath('/product/uconsole-kvm-extension/connect-to-target/') },
      { label: 'FAQ', href: legacyPath('/product/uconsole-kvm-extension/faq/') },
    ],
    legacyBase: '/product/uconsole-kvm-extension/',
  },
  accessories: {
    slug: 'accessories',
    title: 'Openterface 액세서리',
    slogan: '장비를 완성하세요',
    subtitle: '전문가를 위한 프리미엄 케이블, 어댑터 및 툴킷 백.',
    description:
      '비디오 어댑터, 고속 케이블 및 저장 솔루션을 포함한 필수 액세서리입니다. TxA Shop의 고품질 장비로 Openterface 경험을 향상시키세요.',
    seoDescription: 'Openterface 액세서리 — 케이블, 어댑터, 툴킷 백 및 비디오 커넥터.',
    keywords: 'KVM 액세서리, HDMI 케이블, USB-C 케이블, 툴킷 백',
    heroImage: 'https://assets.openterface.com/images/cover.webp',
    heroImages: ['https://assets.openterface.com/images/cover.webp'],
    buyLabel: '지금 쇼핑하기',
    buyHref: siteConfig.links.shop,
    painPoints: ['현장에서 적절한 케이블이 없으면 모든 수리가 지연됩니다'],
    solutions: ['Openterface 제품으로 테스트된 엄선된 액세서리'],
    hwFeatures: [
      { title: '비디오 어댑터', description: 'HDMI, VGA 및 특수 커넥터.' },
      { title: '고속 케이블', description: 'KVM 작업 부하를 위해 제작된 USB-C 및 Type-A 케이블.' },
      { title: '툴킷 백', description: '전체 Openterface 키트를 정리하세요.' },
    ],
    swFeatures: [],
    specs: [],
    useCases: ['현장 키트 정리', '비디오 형식 변환', 'IT 고백(go-bag)을 위한 백업 케이블'],
    docLinks: [
      { label: '모든 품목', href: legacyPath('/product/accessories/') },
      { label: 'TxA Shop', href: siteConfig.links.shop },
    ],
    legacyBase: '/product/accessories/',
  },
};

export const productSlugs = Object.keys(products);
