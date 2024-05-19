---
date: 2024-05-09
authors:
  - CNXSOFT
categories:
  - 기술 검토
---

### CNX 소프트웨어 제품 리뷰: Openterface Mini-KVM - 저렴한 KVM-over-USB 장치 (크라우드 펀딩)

이 게시물은 [Jean-Luc Aufranc (CNXSOFT)](https://www.cnx-software.com/2024/05/09/openterface-mini-kvm-affordable-kvm-over-usb-device/)의 2024년 5월 9일 원본 기사 [Openterface Mini-KVM은 저렴한 KVM-over-USB 장치입니다 (크라우드 펀딩)]를 바탕으로 재구성되었습니다.

<!-- more -->

**Openterface Mini-KVM**은 HDMI 및 오디오 입력을 갖춘 컴팩트한 오픈 소스 KVM-over-USB 하드웨어 장치로, USB-C 포트를 통해 호스트 컴퓨터에 연결됩니다.

우리는 몇 년 동안 싱글 보드 컴퓨터를 기반으로 한 여러 저렴한 [KVM-over-IP](https://www.cnx-software.com/2023/04/18/blikvm-open-source-kvm-over-ip-raspberry-pi-cm4-raspberry-pi-hat-pcie-board-allwinner-h616/) 솔루션을 보아왔습니다. 그러나 **Openterface Mini-KVM**은 더 저렴하고 플러그 앤 플레이가 가능한 네트워크 독립적인 KVM-over-USB 장치로, 호스트 컴퓨터와 대상 장치 간의 직접 HDMI 및 USB 연결을 설정합니다. 이 장치는 [PiKVM v4 Plus](https://docs.pikvm.org/v4/)나 확장 보드를 사용하여 호스트 장치에서 대상 장치를 종료할 수 있는 기능을 제공하는 [Pi-Cast KVM](https://www.cnx-software.com/2023/12/24/pi-cast-portable-kvm-switch-raspberry-pi-cm4/)과 같은 기능을 제외하고 KVM-over-IP 솔루션과 많은 동일한 기능을 지원합니다.

![Openinterface-Mini-KVM-1](https://www.cnx-software.com/wp-content/uploads/2024/05/Openinterface-Mini-KVM-1.jpg)

## Mini-KVM 사양 (모델 LIG03D01):
- **제어 방식**: KVM-over-USB
- **비디오 캡처**: HDMI 또는 VGA(후자는 추가 VGA-HDMI 케이블 필요)를 통해 최대 1920×1080 @ 30Hz, 140ms 미만의 지연 시간
- **오디오 캡처**: HDMI를 통해
- **텍스트 전송**: 에뮬레이트된 키보드 출력을 사용하여 호스트에서 대상 장치로 텍스트를 보낼 수 있어 사용자 이름, 비밀번호 또는 코드 스니펫 복사에 유용
- **USB 포트**: USB 드라이브에서 파일을 전송하거나 다른 USB 장치를 공유하기 위해 호스트 또는 대상 장치에 스위치된 USB 2.0 Type-A 포트
- **BIOS 액세스**: 펌웨어 업데이트 및 부트 관리를 위한 대상 장치의 BIOS에 직접 액세스
- **전원 공급**: 호스트 컴퓨터의 USB-C를 통해
- **크기**: 61 x 53 x 13.5 mm
- **무게**: 48그램

![KVM-over-USB-Raspberry-Pi-target-laptop-guest.webp](https://www.cnx-software.com/wp-content/uploads/2024/05/KVM-over-USB-Raspberry-Pi-target-laptop-guest.webp)

호스트 애플리케이션은 **macOS, Windows, Linux 및 Android**에서 곧 사용할 수 있습니다. 각 애플리케이션의 개발을 팔로우하고 하드웨어 설계 파일에 접근하려면 [GitHub](https://github.com/TechxArtisanStudio)의 다음 레포지토리를 참조하십시오 (현재는 비어 있음):
- **Openterface_MacOS** – MacOS용 호스트 애플리케이션
- **Openterface_QT** – Windows 및 Linux용 호스트 애플리케이션
- **Openterface_Android** – Android 지원용 호스트 애플리케이션
- **Openterface_Mini-KVM_Hardware** – 하드웨어 설계, 회로도 및 구성 요소

회사 (TECHxARTISAN)는 KVM-over-USB 솔루션이 다음과 같은 경우에 유용할 수 있다고 설명합니다:
- 서버를 문제 해결하는 IT 전문가
- ATM, VLT 및 키오스크를 수리하는 기술자
- 엣지 컴퓨팅 장치를 관리하는 개발자
- 싱글 보드 컴퓨터를 실험하는 기술 애호가
- 암호 자산을 관리하는 사람들과 같은 네트워크 분리에서 안전한 로컬 운영이 필요한 전문가
- 개인 및 작업 컴퓨터 간의 통합 워크플로가 자주 필요한 사람

이 장치는 추가 화면, 키보드 및 마우스가 필요 없이 노트북으로 헤드리스 하드웨어에 액세스하는 데 특히 유용할 것 같습니다.

![Mini-KVM-vs-StarTech-Crash-Cart-NOTECONS02-KVM-over-USB](https://www.cnx-software.com/wp-content/uploads/2024/05/Mini-KVM-vs-StarTech-Crash-Cart-NOTECONS02-KVM-over-USB.webp)

Mini-KVM 키트는 약 $400에 판매되는 VGA 입력을 지원하는 StarTech Crash Cart NOTECONS02 KVM-over-USB 장치와 KVM-over-IP 솔루션보다 상당히 저렴하지만 이 비교 표에서 [가장 저렴한 옵션](https://www.cnx-software.com/2023/04/18/blikvm-open-source-kvm-over-ip-raspberry-pi-cm4-raspberry-pi-hat-pcie-board-allwinner-h616/)은 아닙니다...

회사는 [크라우드 서플라이](https://www.crowdsupply.com/techxartisan/openterface-mini-kvm)에서 $12,000 목표를 이미 초과 달성하여 Mini-KVM을 출시했습니다. 두 가지 주요 리워드가 있습니다:

- **$79**: Openterface Mini-KVM 및 퀵 스타트 가이드
- **$99**: Openterface Mini-KVM 툴킷으로, $79 리워드와 동일한 항목 외에 30cm HDMI 남성-남성 케이블, 30cm USB-C 남성-USB-A 남성 케이블 및 USB-A 여성-USB-C 남성 어댑터, 1.5m USB-C 남성-남성 케이블 및 툴킷 가방이 포함됩니다.

또한 구형 서버 시스템이나 VGA 포트만 있는 시스템에 유용할 수 있는 VGA + 오디오 HDMI 변환기가 있습니다. 배송비는 미국 $8, 그 외 세계 $18이 추가됩니다. 백커들은 모든 것이 계획대로 진행된다면 2024년 9월 말까지 리워드를 받을 것으로 예상됩니다. 더 많은 정보는 [프로젝트 웹사이트](http://openterface.com/)에서 확인할 수 있습니다.