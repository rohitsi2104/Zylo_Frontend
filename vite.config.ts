import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Make sure build output is directed to 'dist'
    assetsDir: 'assets',  // Ensure assets are placed in the correct folder
  },
  base: '/',  // Adjust base if deploying to a subfolder
});
