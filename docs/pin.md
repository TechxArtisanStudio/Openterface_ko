# 확장 핀 가이드라인

![change-cap](images/product/change-cap.svg#only-light){:style="height:300px"}
![change-cap](images/product/change-cap_1.svg#only-dark){:style="height:300px"}

Openterface Mini-KVM은 고급 개발 및 [오픈 소프트웨어](/app) 실험을 위한 확장 핀을 제공합니다. 이 핀들은 기본 케이스 구성에서는 노출되지 않습니다.

### 개발을 위한 확장 핀 접근 방법

확장 핀에 접근하려면:

1. 기기를 분해합니다.
2. 기존 케이스 커버를 특수 확장 핀 캡으로 교체합니다.
3. 확장 핀 캡의 3D 모델을 [GitHub 저장소](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware)에서 다운로드합니다.

!!! warning "보증 무효"
    기존 케이스를 제거하면 제품 보증이 무효화됩니다. 모든 수정이나 분해는 사용자의 책임 하에 이루어집니다.

!!! note "실험적 기능"
    이 핀들을 사용하여 개발된 기능은 실험적이며 완전히 테스트되지 않았습니다. Openterface는 수정, 확장 핀 노출 또는 기타 기기 변경으로 인한 손상, 부상 또는 오작동에 대해 책임을 지지 않습니다.

### 핀 레이아웃

![target-side](images/product/extension-pins-1.svg#only-light){:style="height:200px"}
![host-side](images/product/extension-pins-2.svg#only-light){:style="height:200px"}
![target-side](images/product/extension-pins-1_1.svg#only-dark){:style="height:200px"}
![host-side](images/product/extension-pins-2_1.svg#only-dark){:style="height:200px"}

확장 핀은 다음과 같은 연결을 제공합니다:

1. 외부 구성 요소를 위한 USB 5V 전원 공급
2. 호스트의 USB 허브로의 데이터 양극
3. 호스트의 USB 허브로의 데이터 음극
4. 타겟의 USB 허브로의 데이터 양극
5. 타겟의 USB 허브로의 데이터 음극
6. 접지

!!! danger "잘못된 연결"
    VCC와 GND를 혼동하면 기기와 연결된 구성 요소에 심각한 손상을 초래할 수 있습니다. 기기를 전원에 연결하기 전에 항상 핀 연결을 두 번 확인하세요.
