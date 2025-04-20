# 연결 방법

## 인터페이스

![host-side](https://assets.openterface.com/images/product/host-htc.svg#only-light){:style="width:360px"}

![target-side](https://assets.openterface.com/images/product/target-htc.svg#only-light){:style="width:360px"}

![host-side](https://assets.openterface.com/images/product/host-htc_1.svg#only-dark){:style="width:360px"}

![target-side](https://assets.openterface.com/images/product/target-htc_1.svg#only-dark){:style="width:360px"}

① ![Type-C to Host](images/shell-icons/host.svg#only-light){:style="height:15px"} ![Type-C to Host](images/shell-icons/host_1.svg#only-dark){:style="height:15px"} - **호스트 USB-C 포트** (암): USB 장치 포트로서, 내장된 USB 허브를 통해 호스트 컴퓨터와 데이터 전송을 위해 연결됩니다.

② ![Type-C to Target](images/shell-icons/target.svg#only-light){:style="height:18px"} ![Type-C to Target](images/shell-icons/target_1.svg#only-dark){:style="height:18px"} - **타겟 USB-C 포트** (암): USB 장치 포트로서, 내장된 USB 허브를 통해 호스트 컴퓨터에 키보드와 마우스 HID 출력을 에뮬레이션하기 위해 연결됩니다.

③ ![HDMI Input](images/shell-icons/input.svg#only-light){:style="height:18px"} ![HDMI Input](images/shell-icons/input_1.svg#only-dark){:style="height:18px"} - **HDMI 입력 포트** (암): 타겟 컴퓨터로부터 HDMI 소스 입력을 받습니다.

④ ![USB-A Port](images/shell-icons/switchable-usb.svg#only-light){:style="height:26px"} ![USB-A Port](images/shell-icons/switchable-usb_1.svg#only-dark){:style="height:26px"} - **전환 가능한 USB-A 2.0 포트** (암): USB 호스트 포트로서, 호스트 컴퓨터나 타겟 컴퓨터 중 하나에만 사용될 수 있습니다.

!!! warning "꽉 끼는 연결"
    이 USB-A 암 포트는 잠금 메커니즘이 있어 USB 장치를 꽂고 뺄 때 약간의 힘이 필요합니다.

⑤ ![Toggle Switch](images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Toggle Switch](images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} - **토글 스위치**: USB-A 2.0 포트를 호스트와 타겟 컴퓨터 간에 전환하기 위한 스위치입니다.

⑥ ![Extension Pins](images/shell-icons/pins.svg#only-light){:style="height:15px"} ![Extension Pins](images/shell-icons/pins_1.svg#only-dark){:style="height:15px"} - **확장 핀**: 개발자용 확장 핀에 대한 자세한 내용은 [확장 핀](/extension-pin)을 참조하세요.

## 연결 단계

![to-host](https://assets.openterface.com/images/product/to-host.svg#only-light){:style="height:260px"} ![to-host](https://assets.openterface.com/images/product/to-host_1.svg#only-dark){:style="height:260px"}
![to-target](https://assets.openterface.com/images/product/to-target.svg#only-light){:style="height:260px"} ![to-target](https://assets.openterface.com/images/product/to-target_1.svg#only-dark){:style="height:260px"}

Mini-KVM을 설정하려면 다음 단계를 순서대로 따르세요:

1. **호스트 컴퓨터 연결** (주황색 측면):
    - 주황색 1.5m Type-C USB 케이블을 사용하여 호스트 컴퓨터를 mini-KVM에 연결합니다. 주황색 측면의 Type-C 암 포트에 꽂습니다.

    !!! note "호스트 앱 필요"
        호스트 컴퓨터에는 호스트 앱이 설치되어 있어야 합니다. 자세한 정보와 다운로드 링크는 [앱 문서](/app)를 참조하세요.

2. **타겟 장치 연결** (검은색 측면):
    - 검은색 0.3m Type-C USB 케이블을 사용하여 타겟 장치를 mini-KVM에 연결합니다. 검은색 측면의 Type-C 암 포트에 꽂습니다.

3. **타겟 비디오 출력 연결** (검은색 측면):
    - 타겟 장치의 비디오 출력 포트를 mini-KVM의 검은색 측면에 있는 HDMI 암 포트에 연결합니다. 검은색 0.3m HDMI 케이블 또는 VGA-to-HDMI 변환 케이블과 같은 적절한 비디오 소스-to-HDMI 케이블을 사용합니다.

    !!! note "타겟 장치에 앱 필요 없음"
        타겟 장치에는 사전 설치나 설정이 필요하지 않습니다. 타겟 장치가 비디오 출력(HDMI, VGA 등)을 지원하고 USB 포트를 통해 에뮬레이트된 키보드와 마우스 제어(HID) 신호를 받을 수 있으면 사용 가능합니다. 따라서 지원되는 타겟 장치 플랫폼에는 Windows, macOS, Linux, Android, iOS가 포함됩니다.

4. **전환 가능한 USB-A 2.0 포트 연결** (선택 사항):
    - 전환 가능한 USB-A 2.0 포트에 USB 장치를 연결하려면 위의 세 가지 연결을 완료하고 호스트 앱이 열려 있는지 확인한 후에 연결하는 것이 좋습니다.

