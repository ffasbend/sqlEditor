import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://classic.yarnpkg.com/en/package/vite-plugin-monaco-editor
    // https://github.com/vdesjs/vite-plugin-monaco-editor/issues/21
    monacoEditorPlugin.default({
      languageWorkers: ['editorWorkerService'],
    })
  ],  
  server: {
    allowedHosts: true,
  }
})
