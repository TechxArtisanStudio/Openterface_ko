/** Flat marketing URLs from slug-map SSOT (legacy nested slugs → short paths). */
export const PRODUCT_FLAT_PATHS: Record<string, string> = {
  keymod: '/keymod/',
  'kvm-go': '/kvmgo/',
  minikvm: '/minikvm/',
  'uconsole-kvm-extension': '/kvmext/',
  accessories: '/accessories/',
};

export const productsHubOrder = [
  'keymod',
  'kvm-go',
  'minikvm',
  'uconsole-kvm-extension',
  'accessories',
] as const;

export function productFlatPath(slug: string): string {
  return PRODUCT_FLAT_PATHS[slug] ?? `/products/${slug}/`;
}

export const productsHubSeo = {
  title: '제품',
  description:
    'IT 전문가, 개발자, 메이커를 위한 초소형 KVM-over-USB 하드웨어와 오픈소스 앱.',
  keywords: 'Openterface 제품, KeyMod, KVM-GO, Mini-KVM, KVM 확장, 액세서리, KVM 앱',
};
