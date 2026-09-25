// React가 필요 없는 정적 페이지(error.html, gender-reveal.html)의 스타일 진입점.
// 개발 서버에서는 <link rel="stylesheet" href="/src/index.css"> 가 JS 모듈로 내려와
// 적용되지 않으므로, 반드시 이 모듈을 통해 CSS를 불러온다.
import './index.css';
