import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ThemeToggle from './components/ThemeToggle';

// 본문은 privacy.html 에 정적으로 들어 있고, 테마 토글만 마운트한다.
//
// 출시 전 방침 최종 확인 사항 (privacy.html 제3·5·6조):
// - 제5조는 T20(앱 내 UMP 동의 처리·Privacy Options 진입점) 구현을 전제로 작성됨.
//   T20 구현·검증 및 앱의 실제 버튼 이름이 "Privacy Options"와 일치하는지 확인하기 전에는 이 페이지를 배포하지 말 것
// - Android 백업 설정(allowBackup / dataExtractionRules / fullBackupContent) 확인 후, 제3·6조의 백업 서술을 실제 설정에 맞게 조정
createRoot(document.getElementById('theme-toggle')).render(
  <StrictMode>
    <ThemeToggle />
  </StrictMode>
);
