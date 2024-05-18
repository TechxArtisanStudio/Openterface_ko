---
comments: true
---

# 작동 방식

## 프로세스 분해

- **화면 스트리밍**: 미니-KVM은 타겟 컴퓨터의 화면 스트림을 캡처하여 호스트 컴퓨터의 앱에 표시합니다. 이를 통해 사용자는 호스트 기기에서 직접 타겟 시스템을 보고 관리할 수 있습니다.
- **커서 및 마우스 제어**: 호스트 컴퓨터의 앱 창으로 마우스를 이동시키면 사용자는 VNC를 사용하는 것처럼 타겟 장치의 커서를 제어할 수 있습니다. 이 기능을 통해 하나의 화면에서 두 시스템을 동시에 운영할 수 있습니다.
- **키보드 입력**: 앱 창이 활성화되어 있을 때, 호스트 컴퓨터의 키보드에서 입력된 모든 키스트로크는 타겟 장치로 전송되어 원활한 타이핑 및 명령 입력이 가능합니다.
- **HID 신호 변환**: 앱 내 모든 키보드 및 마우스 입력은 Human Interface Device (HID) 제어 신호로 변환되어 타겟 컴퓨터로 전송됩니다.
- **동기화**: 앱은 타겟 컴퓨터의 화면과 커서가 호스트 컴퓨터의 디스플레이와 동기화되도록 하여 통합된 사용자 경험을 제공합니다.

## 하드웨어 세부 사항 탐색

- [Openterface_Mini-KVM_Hardware](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware): 종합적인 하드웨어 디자인, 회로도 및 구성 요소를 탐색하세요.

![openterface-mini-kvm-product-with-PCB](/images/product/openterface-mini-kvm-product-with-PCB.jpg)