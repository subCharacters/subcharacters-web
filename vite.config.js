import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // 배포 워크플로가 build/ 디렉터리를 S3에 동기화하므로 CRA와 같은 경로 유지
    outDir: 'build',
    // 다중 페이지: SPA rewrite 없이도 /privacy.html 로 직접 접근 가능
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        privacy: resolve(import.meta.dirname, 'privacy.html'),
      },
    },
  },
});
