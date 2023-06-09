---
date: '2023-06-08'
title: '디자인 패턴 개요'
categories: ['cs', 'design-pattern']
summary: '디자인 패턴의 전반적인 개요'
thumbnail: '../../../static/defalut-thumbnail.png'
---

# 디자인 패턴

## 디자인 패턴이란?

- 디자인 패턴은 GoF(4인의 갱)으로도 알려진 Erich Gamma(에리히 감마), Richard Helm(리처드 헬름), Ralph Johnson(랄프 존슨), John Vlissides(존 블리시데스)이 1994년 출판한 "Design - Patterns: Elements of Reusable Object-Oriented Software" 책을 통해 제시된 개념
- 가장 영향력 있는 책 중 한 개로 인정받음
- 책의 저자들은 소프트웨어 시스템을 개발한 경험을 바탕으로 23개의 디자인 패턴을 수집하고 문서화
- 책에서 설명한 패턴은 소프트웨어가 설계되고 개발되는 방식에 큰 영향, 소프트웨어 개발 커뮤니티의 어휘와 관행의 기본이 됨
- 저자들의 목표는 소프트웨어 설계를 위한 공통 어휘와 모범 사례를 제공하여 개발자들이 소프트웨어 프로젝트에 대해 더 쉽게 소통하고 협업할 수 있도록 하는 것, 또한 일반적인 설계 문제에 대한 검증된 솔루션을 제공함으로써 개발자들이 코드의 품질과 유지보수성을 향상하는 것을 목표

## 디자인 패턴 분류

1.  생성 패턴(Creational patterns)
    - 상황에 적합한 방식으로 객체를 생성하려고 하는 객체 생성 메커니즘과 관련된 패턴
    - 5개의 패턴 포함 ( 싱글톤(Singleton), 팩토리 메소드(Factory Method), 추상 팩토리(Abstract Factory), 빌더(Builder), 프로토타입(Prototype) )
2.  구조 패턴(Structural patterns)
    - 객체 구성, 더 큰 구조를 형성하기 위한 물체의 배열과 관련된 패턴
    - 7개의 패턴 포함 ( 어댑터(Adapter), 브리지(Bridge), 컴포지트(Composite), 데코레이터(Decorator), 파사드(Facade), 플라이웨이트(Flyweight), 프록시(Proxy) )
3.  행동 패턴(Behavioral patterns)
    - 객체(혹은 클래스) 간의 통신, 객체(혹은 클래스) 간에 무슨 일이 일어나고 그것들이 함께 작동하는 방식과 관련된 패턴
    - 11개의 패턴 포함 ( 책임 체인(Chain of Responsibility), 명령어(Command), 인터프리터(Interpreter), 반복자(Iterator), 중재자(Mediator), 기념품(Memento), 관찰자(Observer), 상태(State), 전략(Strategy), 템플릿 방법(Template Method), 방문자(Visitor) )

<div align="center">

| **생성 패턴**                 | **구조 패턴**           | **행동 패턴**                      |
| ----------------------------- | ----------------------- | ---------------------------------- |
| 싱글톤(Singleton)             | 어댑터(Adapter)         | 책임 체인(Chain of Responsibility) |
| 팩토리 메소드(Factory Method) | 브리지(Bridge)          | 명령어(Command)                    |
| 추상 팩토리(Abstract Factory) | 컴포지트(Composite)     | 인터프리터(Interpreter)            |
| 빌더(Builder)                 | 데코레이터(Decorator)   |  반복자(Iterator)                  |
| 프로토타입(Prototype)         | 파사드(Facade)          | 중재자(Mediator)                   |
|                               | 플라이웨이트(Flyweight) | 기념품(Memento)                    |
|                               | 프록시(Proxy)           | 관찰자(Observer)                   |
|                               |                         | 상태(State)                        |
|                               |                         | 전략(Strategy)                     |
|                               |                         | 템플릿 방법(Template Method)       |
|                               |                         | 방문자(Visitor)                    |

---

</div>

## 디자인패턴의 구조

- 패턴 이름(Pattern name): 패턴을 식별하는 고유한 이름
- 의도(Intent): 패턴이 해결하는 문제와 패턴이 달성하고자 하는 목표에 대한 설명, 패턴을 참조할 수 있는 다른 이름
- 동기(Motivation): 패턴이 사용되는 상황과 문제 해결에 필요한 어려움에 대한 설명
- 적용 가능성(Applicability): 패턴을 적용할 수 있는 조건에 대한 설명
- 구조(Structure): 솔루션과 관련된 여러 개체와 클래스 간의 관계를 보여주는 클래스 다이어그램
- 참가자(Participants): 책임 및 협업을 포함하여 솔루션과 관련된 클래스 및 개체의 목록
- 상호협력(Collaborations): 개체와 클래스가 함께 작동하여 문제를 해결하는 방법에 대한 설명
- 결과(Consequences) 설계 패턴을 사용할 경우의 절충점과 이점, 제한 또는 단점에 대해 설명
- 구현(Implementation): 코드 조각 또는 샘플을 포함하여 코드에서 설계 패턴을 구현하는 방법에 대한 설명
- 샘플 코드(Sample code): 패턴을 구현하는 방법을 보여주는 예제 코드
- 알려진 용도(Known uses): 사용 중인 패턴의 실제 예제 목록
