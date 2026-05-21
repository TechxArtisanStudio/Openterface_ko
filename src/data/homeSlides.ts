import { siteConfig } from '../config/site';

export interface HomeSlide {
  id: number;
  category: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  images?: string[];
  primaryCta?: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
  funding?: { amount: string; date: string; backers: string };
  progressSmall: string;
  progressLarge: string;
}

export const homeSlides: HomeSlide[] = [
  {
    id: 1,
    category: 'KeyMod 시리즈',
    headline: '스마트폰을 미니 키보드로 바꾸세요',
    description:
      '스마트폰을 휴대용 키보드 및 트랙패드로 바꿔주는 컴팩트한 USB + Bluetooth HID 에뮬레이터입니다. 플러그 앤 플레이를 지원하며 100% 오픈 소스입니다. 키오스크, 스마트 TV 유지보수 및 빠른 워크플로우 단축키에 완벽합니다.',
    image: 'https://assets2.openterface.com/images/keymod/2in1.webp',
    imageAlt: 'Openterface KeyMod 시리즈',
    images: [
      'https://assets2.openterface.com/images/keymod/2in1.webp',
      'https://assets2.openterface.com/images/keymod/keymod.webp',
      'https://assets2.openterface.com/images/keymod/feature.webp',
    ],
    primaryCta: { label: '지금 후원하기', href: siteConfig.links.keymodCrowdsupply, external: true },
    secondaryCta: { label: '제품 보기', href: '/products/keymod/' },
    progressSmall: 'KeyMod 시리즈',
    progressLarge: '스마트폰을 미니 키보드로 바꾸세요',
  },
  {
    id: 2,
    category: 'KVM-GO 시리즈',
    headline: '열쇠고리에 걸 수 있는 초소형 KVM',
    description:
      '열쇠고리에 걸 수 있도록 설계되어 위급한 순간에 문제를 해결해 줍니다. 이 차세대 KVM-over-USB 장치는 현장에서의 신속한 IT 운영을 위해 제작되었습니다.',
    image: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    imageAlt: 'KVM-GO 시리즈',
    images: [
      'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
      'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
    ],
    primaryCta: { label: '지금 예약 주문하기', href: siteConfig.links.kvmgoPurchase, external: true },
    secondaryCta: { label: '제품 보기', href: '/products/kvm-go/' },
    funding: { amount: '$101,548', date: '2025년 12월 30일 펀딩 성공', backers: '478' },
    progressSmall: 'KVM-GO 시리즈',
    progressLarge: '열쇠고리에 걸 수 있는 초소형 KVM',
  },
  {
    id: 3,
    category: 'Mini-KVM 시리즈',
    headline: '전문가를 위한 컴팩트 KVM 솔루션',
    description:
      '컴팩트하고 기능이 풍부하며 오픈 소스인 KVM-over-USB 솔루션으로, 즉각적인 IT 작업과 문제 해결을 도와 당신의 기술 라이프를 단순화합니다.',
    image: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    imageAlt: 'Openterface Mini-KVM',
    images: [
      'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
      'https://assets.openterface.com/images/cover/mini-kvm.webp',
    ],
    primaryCta: { label: '지금 주문하기', href: siteConfig.links.minikvmPurchase, external: true },
    secondaryCta: { label: '제품 보기', href: '/products/minikvm/' },
    funding: { amount: '$505,471', date: '2024년 6월 13일 펀딩 성공', backers: '3,775' },
    progressSmall: 'Mini-KVM 시리즈',
    progressLarge: '전문가를 위한 컴팩트 KVM 솔루션',
  },
  {
    id: 4,
    category: 'TxA Shop',
    headline: '프리미엄 액세서리로 장비를 완성하세요',
    description:
      '비디오 어댑터, 고속 케이블 및 저장 솔루션을 포함한 필수 액세서리 범위를 살펴보세요. 전문가를 위해 설계된 고품질 액세서리로 Openterface 경험을 향상시키세요.',
    image: 'https://assets.openterface.com/images/cover.webp',
    imageAlt: 'TxA Shop 액세서리',
    primaryCta: { label: '지금 쇼핑하기', href: siteConfig.links.shop, external: true },
    secondaryCta: { label: '액세서리 보기', href: '/products/accessories/' },
    progressSmall: 'TxA Shop',
    progressLarge: '프리미엄 액세서리로 장비를 완성하세요',
  },
];

export const homeSeo = {
  title: 'Openterface | IT 전문가를 위한 초소형 KVM 솔루션',
  description:
    'Openterface를 만나보세요 - KVM-GO 시리즈(열쇠고리 크기), Mini-KVM 시리즈 및 uConsole KVM Extension을 포함한 초소형 KVM-over-USB 솔루션.',
  keywords:
    'KVM-over-USB, KVM 스위치, 휴대용 KVM, USB KVM, 헤드리스 서버 관리, KVM-GO, Mini-KVM, KeyMod',
};
