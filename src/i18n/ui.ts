export interface MarketingUi {
  docLinkBanner: {
    aboutMessage: string;
    homeMessage: string;
    productMessage: string;
    linkLabel: string;
  };
  homeSubscribe: {
    kicker: string;
    heading: string;
    description: string;
    benefitCrowdfunding: string;
    benefitGuides: string;
    benefitUnsubscribe: string;
    submitLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    footnote: string;
  };
}

export const ui: MarketingUi = {
  "docLinkBanner": {
    "aboutMessage": "제품 가이드, FAQ, 튜토리얼 및 앱 다운로드는 docs.openterface.com 에서 확인하세요.",
    "homeMessage": "튜토리얼, FAQ, 앱 다운로드 및 제품 가이드는 docs.openterface.com 에서 확인하세요.",
    "linkLabel": "문서 열기 ↗",
    "productMessage": "상세 사양, 설정 가이드 및 FAQ는 docs.openterface.com 에서 확인하세요."
  },
  "homeSubscribe": {
    "kicker": "소식 받기",
    "heading": "KVM-GO, KeyMod, Mini-KVM 업데이트를 가장 먼저",
    "description": "제품 출시, 펌웨어, 실용적인 IT 팁 — 월 최대 1회. 스팸 없이 Openterface 팀의 유용한 소식만.",
    "benefitCrowdfunding": "크라우dfunding 및 사전 주문 기간 조기 알림",
    "benefitGuides": "설정 가이드 및 앱 릴리스 노트",
    "benefitUnsubscribe": "언제든 한 번의 클릭으로 구독 취소",
    "submitLabel": "업데이트 구독",
    "namePlaceholder": "이름 (선택)",
    "emailPlaceholder": "이메일 주소 *",
    "footnote": "월 최대 1통. 언제든 구독 취소 가능. 문의: info@openterface.com"
  }
};
