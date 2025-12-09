import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import monacoEditorEsmPlugin from 'vite-plugin-monaco-editor-esm';

// https://vite.dev/config/
export default defineConfig({
  base: '', // base URL, make path relative
  plugins: [
    vue(),
    // https://classic.yarnpkg.com/en/package/vite-plugin-monaco-editor
    // https://github.com/vdesjs/vite-plugin-monaco-editor/issues/21
    monacoEditorEsmPlugin(),
  ],  
  server: {
    allowedHosts: true,
  }
})
