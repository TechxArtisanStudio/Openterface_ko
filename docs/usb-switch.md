# 전환 가능한 USB 포트 메커니즘

![switch-graphics](images/product/switch-graphics.svg#only-light){:style="width:460px"}
![switch-graphics](images/product/switch-graphics_1.svg#only-dark){:style="width:460px"}

Mini-KVM 장치는 호스트와 타겟 컴퓨터 간에 전환할 수 있는 USB-A 2.0 포트를 제공합니다. 이 기능은 물리적 토글 스위치와 호스트 애플리케이션의 소프트웨어 스위치로 제어됩니다. 이 문서는 이러한 스위치의 메커니즘과 논리를 설명합니다.

## 스위치 유형

- **소프트웨어 스위치**: 호스트 애플리케이션 내의 토글 버튼.
      - USB 포트 연결을 호스트와 타겟 컴퓨터 간에 전환합니다.

- ![Toggle Switch](images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Toggle Switch](images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} **하드웨어 스위치**: 장치에 있는 물리적 두 위치 토글 스위치.
      - 안쪽 위치: 호스트 컴퓨터에 연결
      - 바깥쪽 위치: 타겟 컴퓨터에 연결

## 초기 설정 및 동기화

Mini-KVM이 제대로 연결되고 호스트 앱이 실행되면:

1. 장치의 실제 USB 포트 연결(회로)은 처음에 호스트 연결로 기본 설정됩니다.
2. 호스트 앱은 하드웨어 스위치의 현재 위치를 감지하여 호스트 또는 타겟 컴퓨터로 설정합니다.
3. 소프트웨어 스위치는 하드웨어 스위치 위치와 동기화됩니다.
4. 실제 회로 연결은 스위치 위치에 맞게 업데이트됩니다.

!!! warning "하드웨어 제한"
    USB 드라이브가 장치에 이미 연결된 상태에서 전원을 켜거나 호스트 애플리케이션을 실행하면, 호스트 컴퓨터는 안전하지 않은 USB 장치 제거에 대한 경고를 표시합니다. 이는 v1.9의 하드웨어 제한 사항입니다. 따라서 장치를 켜거나 호스트 앱을 시작하기 전에 USB 장치를 연결하지 않는 것이 좋습니다.

## 작동 상태

하드웨어 및 소프트웨어 스위치가 모두 존재하기 때문에 네 가지 가능한 상태가 발생할 수 있습니다:

- **상태 1** (동기화, 호스트에 연결됨):
      - 하드웨어 스위치: 호스트를 가리킴 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - 소프트웨어 스위치: 호스트를 가리킴 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - USB 포트 연결: 호스트에 연결됨 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}

- **상태 2** (동기화, 타겟에 연결됨):
      - 하드웨어 스위치: 타겟을 가리킴 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - 소프트웨어 스위치: 타겟을 가리킴 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - USB 포트 연결: 타겟에 연결됨 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}

- **상태 3** (비동기화, USB 호스트에 연결됨):
      - 하드웨어 스위치: 타겟을 가리킴 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - 소프트웨어 스위치: 호스트를 가리킴 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - USB 포트 연결: 호스트에 연결됨 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}

- **상태 4** (비동기화, USB 타겟에 연결됨):
      - 하드웨어 스위치: 호스트를 가리킴 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - 소프트웨어 스위치: 타겟을 가리킴 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - USB 포트 연결: 타겟에 연결됨 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}

## 상태 전환 및 논리

### **상태 1**에서 (호스트에 동기화됨)

- ^^***시나리오 1a***^^: 사용자가 하드웨어 스위치를 타겟으로 이동
      - 내부 상태 변수를 타겟으로 업데이트 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - 호스트 애플리케이션 디스플레이를 타겟으로 업데이트 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - 실제 회로 연결을 타겟으로 전환 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - 상태 2로 전환, 동기화됨

- ***시나리오 1b***: 사용자가 소프트웨어 스위치를 타겟으로 클릭
      - 내부 상태 변수를 타겟으로 업데이트 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - 하드웨어 스위치 위치는 변경되지 않음 (호스트를 가리킴 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"})
      - 실제 회로 연결을 타겟으로 전환 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - 상태 3으로 전환, 비동기화됨

### **상태 2**에서 (타겟에 동기화됨)

- ^^***시나리오 2a***^^: 사용자가 하드웨어 스위치를 호스트로 이동 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}:
      - 내부 상태 변수를 호스트로 업데이트 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - 소프트웨어 스위치 디스플레이를 호스트로 업데이트 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - 실제 회로 연결을 호스트로 전환 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - 상태 1로 전환, 동기화됨

- ***시나리오 2b***: 사용자가 소프트웨어 스위치를 호스트로 클릭 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}:
      - 내부 상태 변수를 호스트로 업데이트 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - 하드웨어 스위치 위치는 변경되지 않음 (타겟을 가리킴 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"})
      - 실제 회로 연결을 호스트로 전환 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - 상태 4로 전환, 비동기화됨

### **상태 3**에서 (비동기화, USB 호스트에 연결됨)

- ^^***시나리오 3a***^^: 사용자가 하드웨어 스위치를 타겟으로 이동 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}:
      - 변수에 대한 변경 없음
      - 상태 2로 전환, 동기화됨

- ***시나리오 3b***: 사용자가 소프트웨어 스위치를 호스트로 클릭 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}:
      - 내부 상태 변수를 호스트로 업데이트 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - 하드웨어 스위치 위치는 변경되지 않음 (타겟을 가리킴 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"})
      - 실제 회로 연결을 호스트로 전환 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - 상태 1로 전환, 동기화됨

### **상태 4**에서 (비동기화, USB 타겟에 연결됨)

- ^^***시나리오 4a***^^: 사용자가 하드웨어 스위치를 호스트로 이동 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}:
      - 변수에 대한 변경 없음
      - 상태 1로 전환, 동기화됨

- ***시나리오 4b***: 사용자가 소프트웨어 스위치를 타겟으로 클릭 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}:
      - 내부 상태 변수를 타겟으로 업데이트 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - 하드웨어 스위치 위치는 변경되지 않음 (호스트를 가리킴 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"})
      - 실제 회로 연결을 타겟으로 전환 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - 상태 2로 전환, 동기화됨

!!! warning "스위치를 전환하기 전에 플래시 드라이브를 꺼내세요"
    USB 포트가 플래시 드라이브에 사용 중인 경우, 포트의 사용을 다른 컴퓨터로 전환하기 전에 플래시 드라이브를 꺼내는 것을 잊지 마세요.

!!! warning "USB 전력 제한"
    USB 포트에서 공급되는 전력은 호스트 마더보드에 따라 다릅니다. 많은 전력이 필요한 USB 장치를 연결하는 것은 권장되지 않습니다. 일반적으로 전력 소비는 1.5W를 초과하지 않아야 합니다. 고전력 장치를 연결하면 불안정한 작동이나 잠재적인 손상이 발생할 수 있습니다.

!!! Note "사용자 안내"
    - **소프트웨어 스위치 우선**: 하드웨어 스위치 위치와 상관없이 소프트웨어 스위치를 클릭하면 회로 방향이 즉시 변경됩니다.

    - **하드웨어 스위치 동기화**: 하드웨어 스위치를 수동으로 전환하면 비동기화 상태 3 또는 상태 4에서 상태 1 또는 상태 2로 전환됩니다. 그러나 이 동기화는 실제 회로 연결을 반드시 변경하지는 않습니다.

    - **하드웨어 스위치 모니터링**: 하드웨어 스위치는 물리적이지만 소프트웨어에 의해 모니터링되며 회로 방향을 직접 제어하지 않습니다. 대신 소프트웨어가 스위치 위치를 해석하고 실제 회로 전환을 관리합니다.

## 소프트웨어 제어 USB 전환의 중요성

v1.9에서 도입된 소프트웨어 제어 USB 전환 기능은 향후 개발 계획에서 중요한 기능입니다. 특히 아직 구현되지 않은 VNC와 같은 KVM-over-IP 솔루션을 지원하는 데 필수적입니다. 이 기능은 사용자가 원격으로 USB 포트를 전환하고 공유할 수 있게 하여, 원격 설정에서 파일 전송을 용이하게 합니다.

이 기능은 원격 관리 및 제어의 가능성을 열어줍니다. 예를 들어, 물리적 개입 없이 장치 간 파일 전송을 가능하게 하여 원격 문제 해결 및 시스템 관리의 효율성을 높입니다.

이 기능을 활용할 창의적인 아이디어가 있으신가요? Openterface [커뮤니티](/community/)에 참여하여 여러분의 생각을 공유해 주세요 😃
