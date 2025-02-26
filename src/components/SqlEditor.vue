<template>
  <div class="sql-editor">
    <div class="editor-header">
      
    </div>
    <div ref="editorContainer" class="editor-container"></div>
    <div v-if="error" class="invalid-feedback d-block mt-2">
      ❌ {{ error }}
    </div>
  </div>
</template>

<script setup>
//const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
import { ref, onMounted, onUnmounted, watch } from 'vue';
import * as monaco from 'monaco-editor';
// import loader from '@monaco-editor/loader';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue', 'change']);
const editorContainer = ref(null);
let editor = null;

onMounted(() => {
  // const editor = loader.init().then(monaco => {
    // monaco.editor.create(editorContainer.value, {
    editor = monaco.editor.create(editorContainer.value, {
    value: props.modelValue,
    // plugins:[new MonacoWebpackPlugin()],
    language: 'sql',
    theme: 'vs',
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    lineNumbers: 'off',
    roundedSelection: false,
    automaticLayout: true,
    fontSize: 14,
    tabSize: 2,
    folding: false, 
    autoClosingBrackets:true,
  });
// });

  editor.onDidChangeModelContent(() => {
    const value = editor.getValue();
    emit('update:modelValue', value);
    emit('change', value);
  });
});

watch(() => props.modelValue, (newValue) => {
  if (editor && editor.getValue() !== newValue) {
    editor.setValue(newValue);
  }
});

onUnmounted(() => {
  if (editor) {
    editor.dispose();
  }
});
</script>

<style scoped>
.sql-editor {
  border: 1px solid #dee2e6;
  border-top: 0px;
  border-radius: 4px;
  background: #f8f9fa;
  /* background-color: var(--secondary-background); */
}

.editor-header {
  padding: 0.1rem 1rem;
  border: 0;
  /* background: #e9ecef; */
  /* border-bottom: 1px solid #dee2e6; */
  border-radius: 4px 4px 0 0;
}

.file-name {
  font-family: monospace;
  color: #495057;
}

.editor-container {
  height: 180px;
  border-radius: 0 0 4px 4px;
}

.invalid-feedback {
  margin: 0.5rem;
}
</style>