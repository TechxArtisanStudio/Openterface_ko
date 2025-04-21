---
title: "연결 방법"
description: "Openterface Mini-KVM 설정을 위한 단계별 가이드입니다. USB-C, HDMI 및 주변 장치 연결에 대한 자세한 지침과 인터페이스 설명 및 중요한 설정 팁을 제공합니다."
keywords: "Mini-KVM 설정, KVM 연결 가이드, USB-C KVM 설정, HDMI KVM 연결, KVM 설치 가이드, 컴퓨터 주변장치 설정, USB 장치 연결, KVM 인터페이스 가이드, 헤드리스 컴퓨터 설정, KVM 구성"
---

# **연결 방법** | 설정 안내 | Openterface Mini-KVM

## 연결 단계

![to-host](https://assets.openterface.com/images/product/to-host.svg#only-light){:style="height:260px"} ![to-host](https://assets.openterface.com/images/product/to-host_1.svg#only-dark){:style="height:260px"}
![to-target](https://assets.openterface.com/images/product/to-target.svg#only-light){:style="height:260px"} ![to-target](https://assets.openterface.com/images/product/to-target_1.svg#only-dark){:style="height:260px"}

Mini-KVM를 설정하려면 다음 단계를 순서대로 따라주세요:

1. **호스트 컴퓨터 연결** (오렌지 측):
    - 오렌지 1.5m Type-C USB 케이블을 사용하여 Mini-KVM의 오렌지 측 Type-C 암 포트에 호스트 컴퓨터를 연결합니다.

    !!! note "호스트 앱 필요"
        호스트 컴퓨터에는 호스트 앱이 설치되어 있어야 합니다. 자세한 정보와 다운로드 링크는 [앱](/app) 페이지를 참조하세요.

2. **대상 장치 연결** (블랙 측):
    - 블랙 0.3m Type-C USB 케이블을 사용하여 Mini-KVM의 블랙 측 Type-C 암 포트에 대상 장치를 연결합니다.

3. **대상 비디오 출력 연결** (블랙 측):
    - 대상 장치의 비디오 출력 포트를 Mini-KVM의 블랙 측 HDMI 암 포트에 연결합니다. 블랙 0.3m HDMI 케이블 또는 VGA-to-HDMI 변환 케이블 등 적합한 비디오 소스 케이블을 사용하세요.

    !!! note "대상 기기에 앱 불필요"
        대상 장치에는 사전 설치나 별도 설정이 필요 없습니다. 대상 장치가 HDMI, VGA 등 비디오 출력을 지원하고 내장 USB 포트를 통해 에뮬레이션된 키보드 및 마우스(HID) 신호를 받을 수 있으면 사용 가능합니다. 지원 플랫폼에는 Windows, macOS, Linux, Android 및 iOS가 포함됩니다.

4. **전환 가능한 USB-A 2.0 포트 연결** (선택 사항):
    - 전환 가능한 USB-A 2.0 포트에 USB 장치를 연결하려면 위 세 가지 연결을 완료한 후 호스트 앱이 실행 중인지 확인하고 연결하는 것이 좋습니다.


## 인터페이스

![host-side](https://assets.openterface.com/images/product/host-htc.svg#only-light){:style="width:360px"}
![target-side](https://assets.openterface.com/images/product/target-htc.svg#only-light){:style="width:360px"}
![host-side](https://assets.openterface.com/images/product/host-htc_1.svg#only-dark){:style="width:360px"}
![target-side](https://assets.openterface.com/images/product/target-htc_1.svg#only-dark){:style="width:360px"}

① ![Type-C to Host](https://assets.openterface.com/images/shell-icons/host.svg#only-light){:style="height:15px"} ![Type-C to Host](https://assets.openterface.com/images/shell-icons/host_1.svg#only-dark){:style="height:15px"} - **호스트 USB-C 포트(암형)**: 내장 USB 허브를 통해 호스트 컴퓨터에 데이터 전송용 USB 디바이스 포트

② ![Type-C to Target](https://assets.openterface.com/images/shell-icons/target.svg#only-light){:style="height:18px"} ![Type-C to Target](https://assets.openterface.com/images/shell-icons/target_1.svg#only-dark){:style="height:18px"} - **대상 USB-C 포트(암형)**: 내장 USB 허브를 통해 키보드 및 마우스 HID 출력 에뮬레이션을 위한 대상 장치 연결용 USB 디바이스 포트

③ ![HDMI Input](https://assets.openterface.com/images/shell-icons/input.svg#only-light){:style="height:18px"} ![HDMI Input](https://assets.openterface.com/images/shell-icons/input_1.svg#only-dark){:style="height:18px"} - **HDMI 입력 포트(암형)**: 대상 컴퓨터의 HDMI 소스 입력

④ ![USB-A Port](https://assets.openterface.com/images/shell-icons/switchable-usb.svg#only-light){:style="height:26px"} ![USB-A Port](https://assets.openterface.com/images/shell-icons/switchable-usb_1.svg#only-dark){:style="height:26px"} - **전환 가능한 USB-A 2.0 포트(암형)**: 호스트 컴퓨터 또는 대상 컴퓨터 중 하나에서 번갈아 사용되는 USB 호스트 포트입니다. 자세한 내용은 [USB 포트 전환 가이드](../usb-switch)를 참조하세요.

!!! warning "USB 전원 제한"
    USB 포트에서 공급되는 전원은 호스트 메인보드에 따라 다릅니다. 전력이 많이 필요한 USB 장치를 연결하는 것은 권장되지 않습니다. 일반적으로 전력 소비는 1.5W를 초과하지 않아야 합니다. 전력이 큰 장치를 연결하면 불안정한 작동이나 잠재적 손상이 발생할 수 있습니다.

!!! warning "USB-A 포트 잠금 메커니즘"
    USB-A 포트에는 디바이스를 연결하거나 분리할 때 추가적인 힘이 필요한 잠금 메커니즘이 포함되어 있습니다. 이는 안정적인 연결을 보장하기 위한 의도된 설계입니다. **초소형 USB 디바이스**(예: 초소형 USB 드라이브)는 잡고 분리하기 어려워 손상될 수 있으므로 사용을 피하세요.

!!! warning "외부 USB 허브 사용 시 외부 전원 및 호환성 주의"
    Mini-KVM에는 이미 호스트와 대상 컴퓨터 모두에 연결되는 내장 USB 허브가 포함되어 있습니다. USB-A 포트에 추가 외부 USB 허브를 연결하면 허브에 연결된 모든 USB 디바이스가 USB 디바이스 트리의 더 깊은 레벨에서 작동하게 됩니다. 일부 컴퓨터는 USB 트리 깊이에 제한이 있어 호환성 문제가 발생하거나 특정 디바이스가 작동하지 않을 수 있습니다.

    또한, 연결된 외부 USB 허브는 반드시 외부 전원을 공급받도록 하세요. 전원이 없는 허브를 사용하면 전체 Mini-KVM 설정이 불안정해지거나 오작동할 수 있습니다.

⑤ ![Toggle Switch](https://assets.openterface.com/images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Toggle Switch](https://assets.openterface.com/images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} - **토글 스위치**: USB-A 2.0 포트의 연결을 호스트 컴퓨터와 대상 컴퓨터 간에 전환할 때 사용합니다.

⑥ ![Extension Pins](https://assets.openterface.com/images/shell-icons/pins.svg#only-light){:style="height:15px"} ![Extension Pins](https://assets.openterface.com/images/shell-icons/pins_1.svg#only-dark){:style="height:15px"} - **확장 핀**: 기본적으로 숨겨져 있으며 상단 커버를 교체해야 접근할 수 있습니다. 개발자 용도에 대한 자세한 정보는 [확장 핀](../extension-pins) 페이지를 참조하세요.