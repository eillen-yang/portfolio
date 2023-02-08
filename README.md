# sample-landing

## 기획의도
### 실무에서 자주 사용되어 경험했던 기능들을 기획, 디자인, 개발해서 원페이지로 풀어낸 작업물입니다.
```
처음 만들었던 의도는 가볍게 javascript기능들을 연습하기 위해서 간단하게 원페이지로 디자인해서 작업을 하였다가
하나씩 추가 하다보니 하나의 랜딩페이지가 되어서 반응형작업까지 마무리 하게된 사연입니다.
```

### Header
```
1. 스크롤을 150px 내렸을때 Header부분이 fixed 될 때
: Header의 Background가 생기며, 글자의 Color가 바뀌는 기능.

2. 배너가 Slide될 때 배경이 흰 바탕인 배너가 나타났을 때
: Header의 글자 색이 변하도록 작업했습니다. ( swiper-slide에 data-header-theme를 이용해 light, dark로 나누어 스타일이 달라지게 작업. )

3. navigation 클릭했을 때
: 해당하는 영역으로 이동이 될 수 있도록 작업되었습니다. ( '#sec-'로 타켓을 지정하여 scrollTop값을 offset().top을 주었다. )

4. ( 모바일경우 ) 햄버거 메뉴를 클릭 했을 때
 - 우측에서 좌측으로 메뉴가 나온다. 
 - active가 되어있기 때문에 1, 2번의 경우 해당되는 스타일이 적용되지 않고 active 되었을 때의 navigation의 스타일만 적용된다.
```

### Part1. Section ( Profile )
```
간결한 정보들을 보여질 수 있도록 Tab기능을 이용해서 표현한 영역입니다.

첫번째 Tab 
나의 간단한 상세정보들을 보여주는 Tab입니다. 
ICON들을 클릭하면 연결해둔 경로로 이동이 됩니다.
1. GitHub
2. Naver에서 제공해주는 API로 쇼핑검색기능.
3. 동적인 PortFolio.
4. 기초지식이나 에러, 문제해결 상황을 기록하기위해 쓰는 블로그.

두번째 Tab
'나'를 표현할 수 있는 단어를 이용해 마인드 맵으로 이미지를 만들었습니다.
```

### Part2. Section ( Project )
```
만들었던 작업물들을 보여주는 영역입니다.
작업물을 만드는데에 상세정보를 적어두었고, 상용화가 되지 못한 웹사이트들은 `PDF이미지`로 다운받아서 볼 수 있도록 해두었습니다.
작업했던 사이트는 대부분 사라졌기 때문에 다른 프로젝트로 곧 대체하겠습니다.


기능 : section의 2개의 Swiper의 연동과 상황에 따라 액션이 달라지는 기능.

1. PC에서는 next, prev 버튼으로만 작동을 하고
태블릿부터는 버튼을 없애고 썸네일, 컨텐츠 부분이 슬라이드가 모두 되도록 작동되게 하도록 하였다. 
2. SubImg는 현재 보여지고 있는 프로젝트에만 `Active`를 반영해 두었고
태블릿부터는 `Active` 되어있지 않는 프로젝트들을 클릭해도 이동할 수 있도록 작업했습니다.
```

### Part3. Section ( Team : RandomAPI )
```
무료 API인 `RandomAPI`를 Ajax이용해 데이터들을 가지고와서 화면에 표출 시켰습니다. 
공통으로 표출시킨 부분은 이름, 메일, 전화번호 입니다. 
Designer부분은 성별은 랜덤, 인원은 4명 
FrontEnd부분은 성별은 남성, 인원은 2명 
BackEnd부분은 성별은 여성, 인원은 3명
```
[랜덤 API][gdh]
[gdh]: https://randomuser.me/api/


### Part4. Section ( Contact )
```
`e-mail` 전송 기능이 되도록 작업해 둔 영역입니다.
```

### Footer
```
프로젝트를 만들면서 제공받은 홈페이지를 작성해 두었습니다.
```

### 반응형 (Media Query)
```
PC기준 max-width로, 991, 767, 575 로 수치로 작업을 하였습니다.
제일 작은 사이즈는 375px로 맞춰서 작업을 했습니다.
```

### 작업하면서 풀리지 않아 시간을 쏟았던 곳
```
1. 모바일에서 햄버거 메뉴를 클릭 했을 때, header의 컬러의 변화가 고정되어야 한다.
결론은 간단했다. active가 되었을 때 color의 style을 주면 되었다. 멍충이.. script로만 해결 하려는 생각이 멍충이였다.

2. 반응형 작업에서 모바일 디자인은 만들지 않고 시작했던 프로젝트라서 유도리 있게 구조는 잡았지만,
폰트 사이즈나 간격에 있어서 스마트폰으로 직접 테스트를 해보면서 작업을 했기에 많은 시간이 들어갔던거 같다.

3. Part2 Swiper내부에 thumb 기능을 사용하였다가, 다시 갈아엎고 기능을 하나씩 추가했고 controller로 작업하였다.
 - thumb을 두 개의 슬라이드에 모두 주었을 경우 : 슬라이드는 망가졌다.
 - thumb을 thumbnail slide에 주었을 경우 : 썸네일 슬라이드로만 두개의 슬라이드가 작동되고
 Content slide를 슬라이딩 했을 때 thumbnail slide는 움직이지 않고 혼자만 작동하게된다.

4. Part3 Section의 무료로 랜덤 API를 가지고 와서 뿌려줬는데 이게 바로 랜덤 API인가? 싶었다.
정말 랜덤으로 에러가 뜰 때도 있고, 화면에 뿌려질 때가 있다.
ajax를 이용해 뿌려준 코드가 문제인건가 싶어서 보았는데 내 생각은 에러는 없는거 같은데 미치겠었다.
카페마감시간 까지 붙들고 있다가 다음날 카페와서 켜보니 에러없이 너무 잘 작동이 되고 있다. 뭘까 ? 
500, 520. 몇십개의 블로그를 거의 다 본거 같다. 도메인 HTTP HEAD 요청 cors error 문제인거 같다.
CORS프로토콜 HEAD를 포함하여 HTTP에 요청

알게된 결과는 랜덤 API를 제공해 주는곳에서 잠시 에러현상 or 잠시 막아둔것 이라고 하였다.
```

**API Error**
```
이러한 에러가 떴다.
Access to XMLHttpRequest at 'https://randomuser.me/api/?gender=&results=4' from origin 'http://127.0.0.1:5501' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```
