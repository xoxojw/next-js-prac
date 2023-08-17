# Next.js

설치
```
yarn create next-app 프로젝트명 --typescript
```
  
실행
```
yarn run dev
```

<br>

## 📌 Library vs Framework

✅ React에서는 우리가 모든 것을 직접 생성하고 설정해 주었던 것들이 Next에서는 이미 만들어져 있다.

### 📚 Library
#### React는 JavaScript Library
- 어플리케이션을 만들 때 필요한 자원(기능: 함수)의 모임
- 응용 프로그램이 라이브러리를 **사용한다.**
- 개발자로서 사용하는 것

### 🛠️ Framework
#### Next.js는 React Framework
- 코드를 작성하는 기본 틀을 제공하여 보다 효율적으로 어플리케이션을 만들 수 있도록 하는 소프트웨어 환경
- 응용 프로그램은 프레임워크에 의해 **사용된다.**
- 개발자가 코드를 불러오는 것
- 코드를 적절한 위치에 잘 적기만 한다면 framework는 내가 쓴 코드를 불러와서 동작하게 만들어줌
- 기본적으로 지어진 집같은 개념으로, 코드를 적절하게 넣어주면서 집을 완성시키는 것이지만, 집 자체를 수정할 수는 없다(=framework 자체를 수정할 수는 없다).

<br>

## 📌 Pages
- 컴포넌트를 `export default` 해야 한다. 이 때, 컴포넌트의 이름은 중요하지 않고, 파일명이 중요한데, 파일명이 url이 되기 때문이다.
  - ex) pages/about.tsx ➡️ `localhost:3000/about`

    ```tsx
    // about.tsx
    const AboutUs = () => {
      return "About us";
    };

    export default AboutUs;
    ```
    컴포넌트 이름은 `AboutUs`이지만 파일명이 `about.ts`이므로 url은 `/about`이 됨
- 단, `index` 이름의 컴포넌트는 `/index`가 아닌 앱의 홈('/')으로 연결된다.

<br>

## 📌 CSR vs SSR
유저, 브라우저, 서버를 나누어서 생각하면 이해하기 쉽다.

### 🖥️ CSR
- **브라우저**가 유저가 보는 UI를 만드는 모든 것을 한다.

1. 유저가 브라우저를 통해 앱에 접속하면,
2. 앱은 브라우저에게 JS 정보가 들어있는 빈 html 문서를 전달한다. 즉, 브라우저에게 JS 파일을 전달한다.
3. 브라우저는 JS 파일을 다운로드하고, 동시에 유저는 빈 화면을 보게 된다(접속에 대한 응답).
4. 브라우저에서 JS 파일의 다운로드가 끝나면, 리액트 코드가 있는 JS 파일을 실행한다.
5. 브라우저에 있는 리액트 코드가 UI를 렌더링한다. (동적 렌더링)
6. 유저는 앱이 보여주고자 했던 화면을 볼 수 있게 된다.

### <img src="https://github.com/xoxojw/next-js-prac/assets/124491335/fa9237b9-e4a3-4ea9-bbb3-685f349df5c9" width="20px" style="margin-right: 3px;" /> SSR
- **서버**에서 UI를 모두 구성한 후 유저에게 응답해 화면을 보여준다.

1. 유저가 브라우저를 통해 앱에 접속하면,
2. 서버에서 리액트를 실행한다.
3. 리액트가 실행되면, 리액트는 UI를 렌더링한다.
4. 렌더링 된 결과를 통해 브라우저에게 HTML을 제공한다. 이 때 유저는 앱의 초기화면을 보게 된다(접속에 대한 응답).
5. 이후 브라우저는 리액트 코드가 있는 JS 파일을 다운받고 실행시킨다. 이 때부터는 일반적인 리액트 앱과 같이 CSR의 동작(동적 렌더링)을 하게 되고, 이 과정을 `hydration`이라고 한다.

  #### hydration
  - next.js는 react.js를 백엔드에서 동작시켜서 페이지를 미리 만들어서 컴포넌트들을 렌더링한다.
  - 렌더링이 끝나면 HTML이 되고 next.js는 그 HTML을 페이지의 소스코드에 넣어준다.
  - 그럼 유저는 JS와 react.js가 로딩되지 않았더라도 컨텐츠를 볼 수 있다.
  - 그 후에 react.js가 로딩되었을 때, 먼저 존재하는 소스코드들과 연결 되어서 일반적인 react.js 앱이 되는 것이다.

<br>

## 📌 SSR vs SSG
### getServerSideProps 추가 설명
https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props

- 언제 getServerSideProps를 사용해야 하는가?
  - request time에 반드시 데이터를 fetch해와야 하는 페이지를 pre-render해야 하는 경우에만 getServerSideProps를 사용해야 한다.
  - 데이터를 pre-render할 필요가 없다면 client side에서 데이터를 가져오는 것을 고려해야 한다.

- 클라이언트 측에서 데이터 가져오는 과정 (Fetching data on the client side)
  - 페이지에 자주 업데이트되는 데이터가 포함되어 있고 데이터를 pre-render할 필요가 없는 경우 클라이언트 측에서 데이터를 가져올 수 있다.
    - 1️⃣ 먼저 데이터가 없는 페이지를 즉시 표시한다.
    - 2️⃣ 페이지의 일부는 Static Generation을 사용해 pre-render할 수 있다.
    - 3️⃣ 없는 데이터를 위해 loading 상태를 표시할 수 있다.
    - 4️⃣ 그런 다음 클라이언트 측에서 데이터를 가져와 준비가 되면 표시한다.

- 이 접근 방식은 예를 들어 사용자 대시보드 페이지에 적합하다.
  - 왜냐하면 대시보드는 사용자별 비공개 페이지이기 때문에 SEO와는 관련이 없으며 페이지를 미리 렌더링할 필요가 없다. 또한 데이터는 자주 업데이트되므로 요청 시 데이터를 가져와야 합니다.

- getServerSideProps가 오류 페이지를 렌더링하는가?
  - getServerSideProps 내부에서 오류가 발생하면 pages/500.js 파일이 표시된다.
  - 500 page(서버 렌더링 오류 페이지)는 사용자가 커스터 마이징 할 수 있다.
  - 개발 중에는 이 파일이 사용되지 않고 대신 개발 오버레이가 표시된다.

---

### 참고 사이트

<a href="https://gyyeom.tistory.com/56" target="_blank">[NextJS] NextJS 시작하기 - 2. React.js와 Next.js의 차이점 (framework vs. library, CSR vs. SSR)</a>