import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* 기본 폰트 크기를 10px로 설정하여 rem 단위를 쉽게 사용 가능하게 함 */
  html {
    height: 100%;
    font-size: 10px;
  }

  /* 모든 요소의 기본 스타일을 초기화 (reset) */
  body, h1, h2, h3, h4, h5, h6, p, blockquote, figure, figcaption, dl, dd {
    margin: 0;
    padding: 0;
  }

  /* 기본적인 박스 크기 설정 */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* 링크의 기본 스타일 설정 */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* 리스트 기본 스타일 제거 */
  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  /* 기본 폰트 설정 */
  body {
    height: 100%;
    line-height: 1.6;
  }

  /* 기본적으로 모든 이미지는 컨테이너에 맞게 반응형으로 설정 */
  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyle;
