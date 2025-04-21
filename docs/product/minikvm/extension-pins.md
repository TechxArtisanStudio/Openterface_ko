---
title: "확장 핀"
description: "Openterface Mini-KVM의 확장 핀을 통해 맞춤형 하드웨어 개발 및 오픈 소스 프로젝트의 잠재력을 탐색하세요."
keywords: "Mini-KVM 확장 핀, 맞춤 개발, 하드웨어 수정, 오픈 소스 KVM"
---

# **확장 핀** | 개발자 모드 | Openterface Mini-KVM

![mini-kvm-pins-port](https://assets.openterface.com/images/product/mini-kvm-pins-port.webp){:style="height:360px"}
![pin-cap](https://assets.openterface.com/images/product/part/pin-cap.webp){:style="height:300px"}

Openterface Mini-KVM은 고급 개발 및 [Open Software](/app) 실험을 위한 확장 핀을 제공합니다. 이러한 핀은 기본 케이스 구성에서는 노출되지 않습니다.

## 핀에 액세스하는 방법

1. 기기를 분해합니다.
2. 기존 케이스 커버를 특수 제작된 확장 핀 캡으로 교체합니다.
3. 확장 핀 캡의 [3D 모델](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware/tree/main/models)을 다운로드합니다.
4. [하드웨어 GitHub 저장소](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware)를 확인하세요.

![change-cap](https://assets.openterface.com/images/product/change-cap.svg#only-light){:style="height:300px"}
![change-cap](https://assets.openterface.com/images/product/change-cap_1.svg#only-dark){:style="height:300px"}

!!! warning "보증 무효"
    원래 케이스를 제거하면 제품 보증이 무효화될 수 있습니다. 모든 수정 및 분해는 사용자 책임 하에 수행됩니다.

!!! note "실험적 기능"
    이 핀을 사용하여 개발된 기능은 실험적이며 완전히 테스트되지 않았습니다. Openterface는 수정, 확장 핀 노출 또는 기타 변경으로 인한 손상, 부상 또는 오작동에 대해 책임을 지지 않습니다.

## 핀 구성

![target-side](https://assets.openterface.com/images/product/extension-pins-1.svg#only-light){:style="height:200px"}
![host-side](https://assets.openterface.com/images/product/extension-pins-2.svg#only-light){:style="height:200px"}
![target-side](https://assets.openterface.com/images/product/extension-pins-1_1.svg#only-dark){:style="height:200px"}
![host-side](https://assets.openterface.com/images/product/extension-pins-2_1.svg#only-dark){:style="height:200px"}

확장 핀이 제공하는 연결:

1. 외부 구성요소용 USB 5V 전원 공급
2. 호스트 USB 허브로의 데이터 양극
3. 호스트 USB 허브로의 데이터 음극
4. 타겟 USB 허브로의 데이터 양극
5. 타겟 USB 허브로의 데이터 음극
6. 접지

!!! danger "잘못된 연결은 손상을 초래합니다"
    VCC와 GND를 혼동하면 기기 및 연결된 구성요소에 심각한 손상을 일으킬 수 있습니다. 전원을 연결하기 전에 항상 핀 연결을 다시 확인하세요.

## 확장 핀 캡

![pin-cap](https://assets.openterface.com/images/product/part/pin-cap.webp){:style="height:360px"}

이 3D 프린팅된 확장 핀 캡은 Openterface Mini-KVM의 원래 캡을 대체하여 고급 사용자가 확장 핀을 노출하고 접근하여 맞춤형 개발을 할 수 있도록 합니다. GitHub 저장소에서 3D 모델 파일을 다운로드하여 직접 캡을 인쇄할 수 있습니다.

- **용도**: 고급 하드웨어 개발을 위한 확장 핀에 대한 접근을 제공합니다.
- **다운로드**: [3D 모델 파일](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware/tree/main/models)

## 개발 참여하기

개발 및 실험이 계속됨에 따라, 이 섹션을 업데이트하여 핀의 기능과 창의적으로 사용할 수 있는 방법에 대한 정보를 추가할 예정입니다. 여러분의 창의성과 전문 지식은 Openterface Mini-KVM의 가능성을 확장하는 데 도움이 됩니다. 참여해주세요:

1. **아이디어 공유하기**: 이 핀을 사용한 멋진 아이디어가 있나요? 여러분의 의견을 기다립니다!
2. **DIY 프로젝트 기여하기**: 흥미로운 프로젝트를 만들었다면, [Discord Openterface](/discord) 커뮤니티와 공유해보세요.
3. **토론에 참여하기**: 다른 개발자 및 애호가와 연결하여 브레인스토밍하고 협력하세요.

함께 구축하고 혁신을 만들어 나갑시다!