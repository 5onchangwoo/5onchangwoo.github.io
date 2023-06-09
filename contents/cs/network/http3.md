---
date: '2023-05-31'
title: 'HTTP(HyperText Transfer Protocol) - 3'
categories: ['cs', 'network']
summary: 'http에 대해 알아보는 마지막 게시글'
thumbnail: '../../../static/defalut-thumbnail.png'
---

# HTTP 상태 코드

클라이언트가 보낸 **요청의** 처리 상태를 응답에서 알려주는 기능

- 1xx (Informational): 요청이 수신되어 처리 중.
- 2xx (Successful): 요청 정상 처리.
- 3xx (Redirection): 요청을 완료하려면 추가 행동이 필요할 때
- 4xx (Client Error): 클라이언트 오류, 잘못된 문법 등으로 서버가 요청을 수행할 수 없을 때
- 5xx (Server Error): 서버 오류, 서버가 정상 요청을 처리하지 못하는 상태.

따라서 인식할 수 없는 상태 코드를 서버가 반환하면 **클라이언트는 상위 상태 코드로 해석**해서 처리하면 된다.

예를 들어, 299번의 모르는 코드가 오면 2xx코드 (Successful, 정상 처리)로 처리하면 된다.

## 1xx (Infromational)

요청이 수신되어 처리 중 일 때

- 거의 사용되지 않는다.

### 2xx (Successful)

클라이언트의 요청을 성공적으로 처리완료

개발할 때 어느 정도 쓸 범위를 미리 정해놓고 사용함.

- 200 OK - 단순 요청 성공 시 전송
- 201 Created - 요청 성공해서 새로운 리소스가 생성될 때 전송  
  (생성된 리소스는 응답은 Location 헤더 필드로 식별함)
- 202 Accepted - 요청이 접수되었으나 처리가 완료되지 않았을 때 전송 (배치 처리와 같은 곳에서 사용됨)  
  예) 요청 접수 후 1시간 뒤에 배치 프로세스가 요청을 처리할 때 전송.
- 204 No Content - 서버가 요청을 성공적으로 수행했지만, 응답 페이로드 본문에 보낼 데이터가 없을 때 전송  
  예) 웹 문서 편집기에서 save 버튼  
  \-> save 버튼의 결과로 아무 내용이 없어도 된다.  
  \-> save 버튼을 눌러도 같은 화면을 유지해야 한다.  
  \-> 결과 내용이 없어도 204 메시지(2xx)만으로 성공을 인식할 수 있다.

### 3xx (Redirection)

요청을 완료하기 위해 유저 에이전트의 추가 조치가 필요할 때 전송  
**리다이렉션? : 웹 브라우저는 3xx 응답의 결과에 Location 헤더가 있으면, Location 위치로 자동 이동되는 기능**

\-종류

- **영구 리다이렉션** - 특정 리소스의 URI가 영구적으로 이동  
  \- 원래의 URL를 사용하지 않을 때, 검색 엔진 등에서도 변경을 인지함.  
  \- 예) /members - /users  
  \- 예) /event -> /new-event  
  \- **301 Moved Permanently** \- 리다이렉트 시 요청 메서드가 GET으로 변하고, 본문이 제거될 수 있음(MAY)  
  \- **308 Permanent Redirect** -  리다이렉트 요청 메서드와 본문 유지(처음 POST를 보내면 리다이렉트도 POST)
- **일시 리다이렉션** - 리소스의 URI가 일시적인 변경  
  \- 원래의 URL을 사용할 때, 따라서 검색엔진 등에서도 URL을 변경하지 않음.  
  \- 주문 완료 후 주문 내역 화면으로 이동  
  \- **PRG: Post/Redirect/Get**  
     \* POST로 주문 후에 웹 브라우저를 새로고침 한다면? -> 다시 요청되어 중복 주문이 될 수 있다.  
     \* 따라서 POST로 주분 후에 주문 결과 화면을 GET 메서드로 리다이렉트  
       -> 결과 화면에서 새로고침해도 결과 화면을 GET으로 조회  
  \- **302 Found** - 리다이렉트 시 요청 메서드가 GET으로 변하고, 본문이 제거될 수 있음(MAY)  
  \- **307 Temporary Redirect** - 리다이렉트 요청 메서드와 본문 유지(요청 메서드를 변경하면 안 된다. MUST NOT)  
  \- **303 See Other** - 리다이렉트 요청 메서드가 GET로 변경(MUST)  
  \-> 302 스펙의 의도는 HTTP 메서드를 유지하고자 했으나 웹 브라우저들이 대부분 GET으로 바꾸어버리게 만듦.  
      그래서 모호한 302를 대신하는 명확한 307, 303이 등장하게 됨. (301 대응으로 308도 등장했다)  
      307, 303을 권장하지만 현실적으로 이미 많은 애플리케이션 라이브러리들이 302를 기본값으로 사용 중  
      따라서 자동 리다이렉션 시에 GET으로 변해도 되면 그냥 302를 사용해도 큰 문제가 없다.
- **특수 리다이렉션**  
  \- 결과 대신 캐시를 이용  
  \- **300 Multiple Choices** - 사용 X  
  \- **304 Not Modified**  
      \* 캐시를 목적으로 사용  
      \* 클라이언트에게 리소스가 수정되지 않았음을 알려줌. 따라서 클라이언트는 로컬 PC에 저장된 캐시를 재사용  
      \* 304 응답은 응답에 메시지 바디를 포함하지 않음 (로컬 캐시를 사용해야 한다.)  
      \* 조건부 GET, HEAD 요청 시 사용함.

## 4xx (Client Error)

클라이언트의 요청에 잘못된 문법 등으로 서버가 요청을 수행할 수 없을 때

**오류의 원인이 클라이언트에 있음**

**★★★즉, 클라이언트가 이미 잘못된 요청, 데이터를 전송하기 때문에 재시도해도 실패함★★★**

- **400 Bad Request** - 클라이언트가 잘못된 요청을 해서 서버가 요청을 처리할 수 없음.  
  \- 요청 구문, 메시지 등등 오류  
  \- 클라이언트는 요청 내용을 다시 검토하고, 보내야 함  
  \- 예) 요청 파라미터가 잘못되거나, API 스펙이 맞지 않을 때
- **401 Unauthorized** \- 클라이언트가 해당 리소스에 대한 인증이 필요할 때  
  \- 인증(Authentication) 되지 않았을 때  
  \- 401 오류 발생 시 응답에 WWW-Authenticate 헤더와 함께 인증 방법을 설명  
  \- 참고  
      \* 인증(Authentication): 본인이 누구인지 확인 (단순 로그인)  
      \* 인가(Authorization): 권한 부여  
        (ADMIN 권한과 같이 특정 리소스에 접근할 수 있는 권한, 인증이 있어야 인가를 가능)
- **403 Forbidden** - 서버가 요청을 이해했지만 승인을 거부함  
  \- 주로 인증 자격 증명은 있지만, 인가(접근 권한) 자격 증명이 되지 않았을 때  
  \- 예) 어드민 등급이 아닌 사용자가 로그인은 했지만, 어드민 등급의 리소스에 접근하는 경우
- **404 Not Found** - 요청 리소스를 찾을 수 없음  
  \- 요청 리소스가 서버에 없음 또는 클라이언트 권한이 부족한 리소스에 접근할 때 (해당 리소스를 숨기고 싶을 때)

## 5xx (Server Error)

서버 문제로 오류 발생  
**★★★서버에 문제가 있기 때문에 문제 해결 후에 재시도하면 성공할 수도 있음 (4xx오류와의 차이점)★★★**  
**5xx오류는 서버에 있어 심각한 오류이므로 최대한 5xx에러가 발생하지 않도록 설계해야 한다!!**

- **500 Internal Server Error** - 서버 문제로 오류 발생, 애매하면 500 오류
- **503 Service Unavailable** - 서비스 이용 불가.  
  \- 서버가 일시적인 과부하 또는 예정된 작업으로 잠시 요청을 처리할 수 없음.  
  \- Retry-After 헤더 필드로 얼마 뒤에 복구되는지 보낼 수 있음.
