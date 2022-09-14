# sample-landing

## 기획의도
### 실무에서 자주 사용되어 경험했던 기능들을 기획, 디자인, 개발해서 원페이지로 풀어낸 작업물입니다.

### 작업하면서 풀리지 않아 시간을 쏟았던 곳
```
1. 모바일에서 햄버거 메뉴를 클릭 했을 때, header의 컬러의 변화가 고정되어야 한다. 결론은 간단했다. active가 되었을 때 color의 style을 주면 되었다. 솔직히 허무하고 황당했다.. 멍충이.. script로만 해결 하려는 생각이 멍충이였다.<br/>
2. 반응형 작업에서 모바일 디자인은 만들지 않고 시작했던 프로젝트라서 유도리 있게 구조는 잡았지만, 폰트 사이즈나 간격에 있어서 스마트폰으로 직접 테스트를 해보면서 작업을 했기에 많은 시간이 들어갔던거 같습니다. <br/>
3. Part2 section의 2개의 Swiper의 연동과 반응형(모바일)에서 달라지는 기능.
(Swiper내부에 thumb 기능을 사용하였다가, 다시 갈아엎어서 controller로 작업하였다.)<br/>
4. Part3 Section의 무료로 랜덤 api를 가지고 왔는데 500, 520 뜸. 에러 안나옴. cors error문제
이러한 에러가 떴다.
Access to XMLHttpRequest at 'https://randomuser.me/api/?gender=&results=4' from origin 'http://127.0.0.1:5501' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
CORS프로토콜 HEAD를 포함하여 HTTP에 요청
```

### Header
```
Scroll을 150px 내렸을때 Header부분이 따라오고 스타일을 변할 수 있도록 작업하였습니다.<br/>
Banner부분이 Slide될 때 배경이 흰 바탕인 Banner일때 Header의 글자 색이 변하도록 작업했습니다.<br/>
Header의 nav부분을 클릭했을 때, 해당하는 영역으로 이동이 될 수 있도록 작업되었습니다.
```

### Part1. Section ( Profile )
```
간결한 정보들을 보여질 수 있도록 `Tab기능`을 이용해서 표현한 영역입니다.<br/>
첫번째 Tab<br/>
나의 간단한 상세정보들을 보여주는 Tab입니다.<br/>
`ICON`들을 클릭하면 연결해둔 경로로 이동이 됩니다.<br/>
1. `GitHub`
2. `Naver`에서 제공해주는 `API`로 쇼핑검색기능.
3. 동적인 `PortFolio`.
4. 공부했던 기초지식들을 정리한 웹 제작 `다이어리`.

<br/>
두번째 Tab<br/>
'나'를 표현할 수 있는 단어를 이용해 마인드 맵으로 이미지를 만들었습니다.
```

### Part2. Section ( Project )
```
직장에서 일했던 작업물들을 보여주는 영역입니다.<br/>
swiper를 이용해서 내가 원하는 옵션부분들을 새로 만들고 컨트롤해서 만들었습니다.<br/>
작업물을 만드는데에 상세정보를 적어두었고, 상용화가 되지 못한 웹사이트들은 `PDF이미지`로 다운받아서 볼 수 있도록 해두었습니다.<br/>
SubImg는 현재 보여지고 있는 프로젝트에만 `Active`를 반영해 두었고, 슬라이드는 다음 프로젝트만 넘겨 볼 수 있도록 만들었습니다.<br/>
( `Active` 되어있지 않는 프로젝트들을 클릭해도 이동할 수 있도록 작업했습니다. )
```

### Part3. Section ( Team : RandomAPI )
```
무료 `API`인 `RandomAPI`를 `ajax`이용해 데이터들을 가지고와서 화면에 표출 시켰습니다.<br/>
공통으로 표출시킨 부분은 이름, 메일, 전화번호 입니다.<br/>
`Designer`부분은 성별은 랜덤, 인원은 4명<br/>
`FrontEnd`부분은 성별은 남성, 인원은 2명<br/>
`BackEnd`부분은 성별은 여성, 인원은 3명<br/>
`https://randomuser.me/api/`
```

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
max-width 값으로 맞췄으며, 991, 767, 575 로 수치로 작업을 하였습니다.
제일 작은 사이즈는 375px로 맞춰서 작업을 했습니다.
```