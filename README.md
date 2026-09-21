# SubCharacters Web

부업으로 이것저것 만들면서 재미 삼아 운영하는 SubCharacters 소개 페이지입니다.

## Stack

- React 19
- Vite 7
- Tailwind CSS v4 (다크 모드 기본, `class` 기반 토글)

## Scripts

```bash
npm install
npm run dev      # 개발 서버 (http://localhost:5173)
npm run build    # build/ 에 프로덕션 빌드
npm run preview  # 빌드 결과 미리보기
```

## 구조

```
index.html              # 엔트리 HTML (테마 초기화 스크립트 포함)
src/
  main.jsx
  App.jsx               # 페이지 섹션 (Nav, Hero, Projects, About, Footer)
  components/ThemeToggle.jsx
  data/projects.js      # 프로젝트 카드 데이터
  index.css             # Tailwind 및 테마 토큰
```

## 배포

`master` 브랜치에 push하면 GitHub Actions가 빌드 후 `build/`를 S3에 동기화하고 CloudFront 캐시를 무효화합니다 (`.github/workflows/deploy.yml`).
