import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // 배포 워크플로가 build/ 디렉터리를 S3에 동기화하므로 CRA와 같은 경로 유지
  build: { outDir: 'build' },
});
