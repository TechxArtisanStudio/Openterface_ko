---
date: 2024-07-16
authors:
  - Openterface
categories:
  - Updates
---

# Teardown에서 생산까지: 앞으로 나아갑니다!

안녕하세요, 여러분!

크라우드펀딩 캠페인이 끝난 지 꽤 되었는데요, 오늘은 여러분께 멋진 소식을 전해드리려고 합니다. Openterface Mini-KVM의 생산 단계에 본격적으로 돌입했으며, 진행 상황을 계속 공유할 예정입니다.

## Teardown 2024 하이라이트

먼저, 지난달 포틀랜드에서 열린 [Teardown 2024](https://x.com/TechxArtisan/status/1810619822948090092) 행사에 대해 이야기해볼까요? [**Crowd Supply**](https://www.crowdsupply.com/teardown/portland-2024)가 주최한 이 행사는 정말 놀라웠습니다. 데모 테이블에서 많은 기술 친구들과 후원자들을 직접 만날 수 있어 기뻤습니다! 여러분의 따뜻한 격려와 응원에 큰 힘을 얻었습니다. 행사에서 찍은 사진 몇 장을 공유합니다:

![openterface-billy-at-teardown2024-2](https://www.crowdsupply.com/img/f0a2/16c34150-c59a-40d0-ab77-7c5dada8f0a2/openterface-billy-at-teardown2024-2_jpg_gallery-lg.jpg)

Electromaker가 행사 중에 저희 제품을 소개해 주셔서 큰 감사의 인사를 전합니다! 이 영상에서 저희의 대화를 확인해 보세요:

<iframe width="800" height="450" src="https://www.youtube.com/embed/K0EuMSQEwKo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 본격적인 생산 돌입

현재 저희는 **CH9329와 CH340 같은 부품과 칩을 주문**하며 생산 준비에 한창입니다. 또한 Mini-KVM과 케이블을 CE, RoHS, UKCA 인증 테스트에 제출하고 있습니다. 모든 것이 순조롭게 진행된다면 곧 공장에서 생산을 시작할 수 있을 것입니다. 저희 팀은 생산 라인의 모든 단계가 원활하게 진행되어 재미있고 신뢰할 수 있는 최고 품질의 제품을 제공하기 위해 최선을 다하고 있습니다! 여기 RoHS와 CE 인증 테스트 보고서 사진을 공유합니다:

![openterface-test-report-typec](https://www.crowdsupply.com/img/8d57/cd1d5f8e-820b-40c2-b758-1f075e2e8d57/openterface-test-report-typec_jpg_gallery-lg.jpg)

Mini-KVM과 다른 케이블들도 필요한 인증 기준을 충족하는지 확인하기 위해 비슷한 보고서를 계속 공유할 예정이니 기대해 주세요.

## OSHWA 인증

Openterface Mini-KVM이 공식적으로 **OSHWA** 인증을 받았다는 소식을 전하게 되어 기쁩니다! 🥳 인증 내용을 여기에서 확인할 수 있습니다: [OSHWA UID CN000015](https://certification.oshwa.org/cn000015.html). 저희는 소프트웨어와 하드웨어 모두를 오픈 소스로 유지하며, 기술 애호가들이 USB KVM의 잠재력을 탐구하고 개발에 기여하며 활기찬 커뮤니티를 함께 만들어 나가기를 바랍니다.

![openterface-oshw-cn000015](https://www.crowdsupply.com/img/925a/fbf33f8d-0c0d-405e-bb34-6e0038c9925a/openterface-oshw-cn000015_jpg_md-xl.jpg)

## 하드웨어 업데이트 V1.9

저희는 **VCC, GND, Target D+, Target D-, Host D+, Host D-**와 같은 추가 핀이 포함된 **하드웨어 V1.9**를 출시했습니다! 이 데이터 핀들은 타겟과 호스트의 USB 허브에 연결되어 있어 더욱 다양한 해킹이 가능합니다. Openterface를 이용해 ATX, 네트워크 브리징, 오디오 바이패스 등 다양한 확장을 DIY로 만들어 보세요. 이 핀들을 이용해 Mini-KVM을 어떻게 해킹할지 창의적인 아이디어가 있다면 [Reddit](/reddit)이나 [Discord](/discord)에 공유하고 함께 코딩을 즐겨보세요!

![openterface-v1-9-hackable](https://www.crowdsupply.com/img/caf8/7b5bb696-2342-487a-b0e8-aa137e6dcaf8/openterface-v1-9-hackable_jpg_md-xl.jpg)

## Pi에서 Openterface 실행 & uConsole과 협력

저희는 **Pi 환경에서 QT 호스트 앱을 성공적으로 실행**했습니다! 더 흥미로운 것은 Mini-KVM이 Clockwork의 **uConsole**과 협력하여 휴대용 KVM 도구로 변신할 수 있다는 점입니다. 이는 플러그 앤 플레이와 주변의 헤드리스 장치 문제를 빠르게 해결하는 데 매우 유용합니다.

<iframe width="800" height="450" src="https://www.youtube.com/embed/n7k_FwgM9kA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 개발 및 최종 마무리

Kevin이 이끄는 개발팀은 코드를 테스트하고 정제하는 데 열심히 일하고 있습니다. [Techxartisan의 Discord](/discord)에 가입하여 개발팀과 베타팀과 함께 소식을 나누고 진행 상황을 확인하세요. 한편, Billy는 모든 서류 작업을 처리하고 제품, 포장 및 제품 설명서를 최종 디자인하고 있습니다.

Billy가 도쿄에서 Kazubu에게 공유한 알루미늄 케이스의 업데이트된 프린트와 라벨을 [Kazubu의 트윗](https://x.com/_kazubu/status/1803442407800971612)에서 확인해 보세요:

![openterface-kazubu-tweet-new-look](https://www.crowdsupply.com/img/a680/71cdf2d7-27a3-4b93-8271-b3e82229a680/openterface-kazubu-tweet-new-look_jpg_md-xl.jpg)

## 9월 목표

현재 저희는 일정에 맞춰 진행 중이며, 9월 말까지 Mini-KVM을 여러분의 손에 전달하기 위해 열심히 노력하고 있습니다.

Mini-KVM에 대해 더 많은 사람들에게 알릴 수 있도록 도와주시면 감사하겠습니다. 이 제품이 더 많은 기술 애호가들에게 도움이 되고, 헤드리스 장치를 관리하는 모든 사람의 기술 생활을 더 쉽게 만들어주기를 바랍니다.

여러분의 지원과 열정에 진심으로 감사드립니다. 여러분 없이는 이 모든 것이 불가능했을 것입니다!

감사합니다,  
Billy Wang  
Openterface 팀

