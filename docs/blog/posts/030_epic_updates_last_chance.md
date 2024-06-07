---
date: 2024-06-07
authors:
  - Openterface
categories:
  - Stage - Prototyping
  - Stage - Production
tags:
  - Community
---

# 에픽 업데이트 및 마지막 주 - Mini-KVM을 다시 사용할 수 있는 마지막 기회!

안녕하세요 여러분!

재미있게 즐기다 보면 시간이 금방 지나갑니다! 이제 크라우드 서플라이에서 Openterface Mini-KVM 크라우드 펀딩 캠페인의 마지막 주에 접어들었습니다. 몇 가지 흥미로운 업데이트에 대해 알아봅시다!

<!-- more -->

## 소프트웨어 업데이트

멋진 소식이 있습니다 - 이제 미니 KVM이 macOS, Windows 및 Linux를 지원합니다! 게다가 모두 오픈 소스입니다!

아래에서 각 시스템에 대한 자세한 내용을 확인하세요:

### Openterface_MacOS
![OP엔터페이스-맥OS-앱스토어](https://openterface.com/blog/030/openterface-macos-app-store.jpeg)
  - **GitHub 리포지토리:** [Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT)
  - **얼리 베타 데모 비디오:** [Mini-KVM: 기본 KVM 제어 테스트](https://www.youtube.com/watch?v=m7OpUem0zqY)
  - **설치 방법:**
    - **앱 스토어 :** "Openterface" 또는 "Mini-KVM"을 검색하여 호스트 앱을 찾으세요.
    - 소스에서 빌드하기:** CodeX를 설치하고 소스에서 macOS 앱을 빌드합니다.

### Openterface_QT
  - **GitHub 리포지토리:** [Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT)
  - **얼리 베타 데모:**
    - Windows:** [Mini-KVM: Windows용 베타 데모 비디오](https://www.youtube.com/watch?v=ERzpGtRvP2o&t=23s)
    ![openterface-win-app-demo-2](https://openterface.com/blog/030/openterface-win-app-demo-2.jpg)
    - Linux:** [Mini-KVM: Linux용 베타 데모 비디오](https://www.youtube.com/watch?v=_ScpI6TC0Pk)
    ![openterface-linux-app-demo.png](https://openterface.com/blog/030/openterface-linux-app-demo.png)
  - **설치 방법:**
    - 여기](https://github.com/TechxArtisanStudio/Openterface_QT/releases/tag/v0.0.1)의 GitHub 릴리스에서 Windows 앱을 다운로드하세요.
    - 지침에 따라 Windows 및 Linux용 소스를 빌드합니다.
    - 라즈베리 파이 도전 과제:** 라즈베리 파이에서 호스트 앱을 원활하게 실행하기 위해 계속 노력 중입니다. 곧 출시될 예정입니다.

### 기타 앱
  - 이전 업데이트](https://openterface.com/blog/from-development-to-your-hands--behind-the-scenes-/#openterface_android-and-openterface_webextension)에서 언급했듯이, 저희는 안드로이드와 웹익스텐션에 대한 개념 증명을 완료했습니다. 우선순위가 낮긴 하지만, 개발 중인 것은 분명합니다. 또한 ChromeOS 지원과 M 시리즈 칩이 탑재된 iPad에서 미니 KVM을 작동시킬 수 있는 가능성도 검토 중입니다. 인사이트가 있으시면 커뮤니티에서 토론에 참여해 주세요!

## 하드웨어 오픈 소스 지금 시작하세요!

![openterface-hardware-repo](https://openterface.com/blog/030/openterface-hardware-repo.png)

하드웨어 리포지토리가 대대적으로 업그레이드되었습니다! 이제 **데이터시트, 3D 모델, BOM, 회로도** 등 가젯을 직접 사용해보는 데 필요한 모든 것이 담겨 있습니다.

![PCB-V1-6-both-sides](https://openterface.com/blog/030/pcb-v1-6-both-sides.jpg)

하드웨어 리포지토리를 확인하세요: [Openterface_Mini-KVM_하드웨어](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware)

노련한 전문가든 이제 막 시작하신 분이든 여러분의 피드백과 기발한 제안을 기다립니다! 제작자 여러분은 처음부터 미니 KVM을 구축해 보시는 건 어떨까요? 저희 코드를 수정하여 자신만의 것으로 만들어서 보여주세요!

## 더 나은 액세서리

### 새로운 1.5m 주황색 Type-C 케이블(컨버터 포함)

![타입-C 케이블-V2-플러그드-오래된-맥](https://openterface.com/blog/030/type-c-cable-v2-plugged-old-mac.jpg)

사랑스러운 실리콘 느낌의 [스타일리시한 오렌지색 Type-C 케이블](https://openterface.com/blog/from-development-to-your-hands--behind-the-scenes-/#upgrading-toolkit-accessories)을 기억하시나요? 첫 번째 샘플을 받았는데 정말 멋져 보입니다! 이 케이블은 **240W 고속 충전**(전압 DC50V, 전류 5A, 전력 240W)을 지원하며 미니 KVM과 완벽하게 작동합니다. 이를 가능하게 해준 제조업체와 후원자 여러분께 큰 감사를 드립니다!

![TYPE-C-CABLE-V2-OPEN-2](https://openterface.com/blog/030/type-c-cable-v2-open-2.jpg)


### 업그레이드된 툴킷 가방

1.5m Type-C 케이블용 어댑터와 [1m 길이의 VGA-to-HDMI 케이블 업데이트](https://openterface.com/blog/-upgrade-on-vga-to-hdmi-cable-as-a-free-bonus-/)가 새로 추가되어 툴킷 가방의 크기가 16cm L x 10cm W x 3.8cm H로 커져 공간이 더 넓어졌습니다!

![베타-라운드2-툴킷](https://openterface.com/blog/030/beta-round2-toolkit.jpg)

### 포장 실험

컬러풀, 그레이, 블랙 등 다양한 디자인의 외부 포장 상자를 실험하고 있습니다. 저희는 컬러풀한 디자인으로 기울고 있지만, 여러분의 피드백을 기다리고 있습니다!

![툴킷-박스-쇼케이스.jpg](https://openterface.com/blog/030/toolkit-boxes-showcase.jpg)

베타 팀에 보내드린 베타 툴킷의 자세한 내용은 [여기](https://www.reddit.com/r/Openterface_miniKVM/comments/1d40atr/tactical_reinforcements_round_2_are_on_their_way/)에서 확인하세요. 여러분의 의견을 알려주세요! 미리 알려드리지만, 이 패키지 디자인은 최종안이 아닙니다. 박스 크기를 조정하고 CE 마크 및 기타 필수 정보와 같은 필수 세부 정보를 추가해야 할 수도 있습니다.

## 우리를 지지할 마지막 기회!

이번이 캠페인의 마지막 주입니다. 지금 바로 후원하셔서 합리적인 가격**으로 Openterface Mini-KVM을 구입하세요. 캠페인 종료 후 가격은 제품이 성숙함에 따라 인상될 수 있습니다. 놓치지 마시고 지금 바로 구매하세요!

## 우려 사항 해결

저희는 사기 크라우드펀딩 프로젝트로 인한 [회의론](https://openterface.com/blog/from-development-to-your-hands--behind-the-scenes-/#addressing-concerns)을 이해합니다. 저희를 신뢰할 수 있는 이유는 다음과 같습니다:

**크라우드 서플라이를 신뢰하세요: 2012년부터 크라우드 서플라이는 [후원자의 권리를 보호](https://www.crowdsupply.com/guide/backer-protection)하고, 개발을 면밀히 감독하며, 전문적인 조언을 제공하여 사용자에게 적합한 제품이 만들어질 수 있도록 지원하는 선도적인 전자 제품 플랫폼입니다.

**저희 팀을 믿으세요:** 저희는 IoT, AI, 테크 아트 분야에서 6년 이상의 경험을 보유하고 있습니다. 테크엑스아티산 스튜디오](https://techxartisan.com/en/) 웹사이트에서 더 자세히 알아보세요.

**유니티의 문화를 믿으세요:** 유니티는 기술적 우수성과 사용자 경험에 중점을 두고 오픈소스 협업을 수용합니다. 초기 프로토타입에서 현재 사전 제작 버전에 이르기까지 저희의 여정을 보려면 [Reddit r/Openterface_miniKVM](https://www.reddit.com/r/Openterface_miniKVM/) 및 [Discord TechxArtisan](https://discord.gg/sFTJD6a3R8)의 커뮤니티에 가입하세요.

아직 잘 모르시겠다면 괜찮습니다! 저희는 Openterface Mini-KVM이 결국 여러분을 사로잡을 것이라고 믿습니다.

### 향후 출시 예정

저희는 항상 흥미로운 것을 준비하고 있으니 기대해 주세요! 질문이 있으시면 [커뮤니티](https://openterface.com/community/)에서 저희와 함께 어울리거나 이메일(info@techxartisan.com)을 보내주세요. 앞으로도 많은 관심과 성원을 부탁드립니다! 😄

Cheers,

오펜터페이스 팀 | 테크엑스아티시안 스튜디오