---
date: 2024-05-31
authors:
  - Openterface
categories:
  - Updates
---

# MAKE: 매거진의 David Groom과의 캐주얼 채팅: Openterface Mini-KVM의 이야기

안녕하세요, 여러분!

우리는 방금 MAKE: 매거진의 David Groom과 함께한 멋진 [YouTube 라이브 스트림](https://www.youtube.com/live/lwitzvmxsgc?si=s9a1t5_Sce5v22e1)을 마쳤습니다! 이 세션 동안 우리는 Openterface Mini-KVM의 탄생 배경에 대해 깊이 있게 이야기했습니다. 이 혁신적인 오픈 소스 하드웨어 솔루션은 노트북만으로 헤드리스 장치와 라즈베리 파이 같은 싱글 보드 컴퓨터를 쉽게 제어할 수 있도록 설계되었습니다. 자세한 내용은 YouTube 라이브 스트림을 확인하시거나 아래 이야기를 읽어보세요.

![youtube-with-david-2](https://www.crowdsupply.com/img/2b83/081f1376-b266-4e83-b1af-5628dbe62b83/youtube-with-david_jpg_gallery-lg.jpg)

## 아이디어의 탄생

Mini-KVM의 여정은 중국 광저우에 위치한 우리 TechxArtisan 스튜디오에서 시작되었습니다. 지난 5년 동안 우리는 지역 및 국제 예술가들을 위한 다양한 기술 예술 프로젝트에 깊이 관여해 왔습니다. 우리의 작업에는 AI 감지 기능이 있는 인터랙티브 조명 설치, 극장 공연을 위한 로봇 팔, 무작위 미로를 해결하는 자율 주행 미니카, 사막과 숲 같은 무인지대를 탐험하는 로봇 개 등이 포함됩니다.

![techxartisan_tech_art](https://www.crowdsupply.com/img/bce8/9c580077-993a-42b2-b781-a30d34acbce8/techxartisan-tech-art_jpg_gallery-lg.jpg)

### 공통된 문제
우리 작업에서 반복적으로 발생하는 문제는 모니터, 키보드 또는 네트워크 연결이 없는 라즈베리 파이와 제트슨 나노 같은 헤드리스 컴퓨터를 관리하는 것이었습니다. 이는 종종 예비 모니터와 키보드를 찾기 위해 분주하게 돌아다니는 상황을 초래했습니다.

### 임시 해결책
처음에는 배터리 팩으로 구동되는 임시 휴대용 모니터 솔루션과 터치패드가 있는 무선 미니 키보드를 사용했습니다. 그러나 이러한 장치는 종종 잊어버리거나 잘못 두게 되어, 우리가 항상 코딩과 설정을 위해 가지고 다니는 노트북을 활용할 수 있는 전용 하드웨어 솔루션이 필요하게 되었습니다.

![diy-monitor-keyboard](https://www.crowdsupply.com/img/2efd/4459eff9-2d01-4552-ac91-a1941ed82efd/diy-monitor-keyboard_jpg_gallery-lg.jpg)
*현장 프로젝트를 위해 반드시 휴대해야 하는 두 가지 장치.*

### 첫 번째 프로토타입
우리의 첫 번째 DIY 프로토타입은 헤드리스 장치에서 비디오를 가져오기 위한 캡처 카드와 USB 키보드/마우스 시뮬레이터를 결합한 간단하지만 효과적인 솔루션이었습니다. 이 모든 것이 노트북에 연결되는 단일 USB 케이블에 통합되었습니다.

![/early-mini-kvm-pcb](https://www.crowdsupply.com/img/1f7e/fb91d879-dee7-45cc-bbdc-dc3ea5731f7e/early-mini-kvm-pcb_jpg_gallery-lg.jpg)
*초기 버전의 mini-KVM PCB 중 하나*

우리는 2023년 11월에 열린 선전 메이커 페어에서 우리의 멋진 기술 예술 프로젝트를 선보였고, mini-KVM 프로토타입을 David에게 보여주려고 했습니다. 그러나 David가 준 선물에 너무 흥분한 나머지 그것을 잊어버렸습니다!

![techxartisan_team_with_david_groom](https://www.crowdsupply.com/img/bc4e/17bdcc6e-0a34-4f2f-bf64-fee0b8d6bc4e/techxartisan-team-with-david-groom_jpg_gallery-lg.jpg)
*MAKE: 매거진에서 받은 스티커와 엽서는 정말 멋져요!*

## 커뮤니티 피드백과 개발
Reddit에 우리의 프로토타입을 공유한 후, 우리는 [커뮤니티](http://openterface.com/community/#community-contributors)로부터 귀중한 피드백을 받았고, 이를 통해 우리의 솔루션을 정제하고 완성된 제품으로 개발할 수 있었습니다. 이 커뮤니티의 지원은 우리의 임시 장치를 홈랩 사용자, 시스템 관리자, 기술 애호가 및 헤드리스 컴퓨터를 사용하는 모든 사람을 위한 세련되고 효율적인 도구로 변모시키는 데 중요한 역할을 했습니다.

![got_feedback_from_reddit](https://www.crowdsupply.com/img/b24b/e04dfa15-1e5b-4bfb-b97c-acdba784b24b/got-feedback-from-reddit_jpg_gallery-lg.jpg)
*홈랩 사용자들로부터 엄청난 피드백을 받았습니다.*

## 의심을 극복하다
기존의 유사한 솔루션과 경쟁할 수 있을지에 대한 초기 의심에도 불구하고, 온라인 커뮤니티로부터 받은 긍정적인 반응과 건설적인 제안은 잠재적인 사용 사례를 명확히 하는 데 도움이 되었고 우리의 자신감을 높였습니다. 이러한 지원과 우리의 노력을 인정받지 못했다면, 우리는 이 프로젝트를 더 이상 진행하지 않았을 것입니다.

## 크라우드펀딩과 미래 계획
Openterface Mini-KVM의 Crowd Supply 크라우드펀딩 캠페인은 큰 호응을 얻고 있으며, 약 2주가 남았습니다. 이 캠페인은 Mini-KVM을 개발하는 것뿐만 아니라, 커뮤니티 주도의 혁신의 힘을 증명하는 것입니다. 다음 단계로는 생산 관리, 소프트웨어 개선, 그리고 이 유용한 장치를 멋진 후원자들에게 전달하는 작업이 있습니다. 이 모든 것은 우리의 놀라운 오픈 소스 커뮤니티의 힘으로 이루어집니다.

![techxartisan_openterface_discord](https://www.crowdsupply.com/img/8d7a/58e213e7-7a81-47b4-9d6b-69be3c698d7a/techxartisan-openterface-discord_jpg_gallery-lg.jpg)
*베타 테스터들이 TechxArtisan의 Discord에서 Openterface Mini-KVM을 일상적인 기술 작업에 사용하는 모습을 공유하고 있습니다.*

## 오픈 소스 비전의 수용

Openterface Mini-KVM은 우리의 창의성과 인내심, 그리고 지원해주는 오픈 소스 커뮤니티의 증거입니다. 개인적인 문제를 해결하기 위한 간단한 솔루션으로 시작된 것이 이제는 해커, 기술 애호가, 그리고 전 세계의 기술 애호가들에게 혜택을 줄 수 있는 다재다능한 오픈 소스 도구로 발전했습니다. Mini-KVM이 공식 출시로 다가가는 동안 더 많은 업데이트를 기대해 주세요!