<template>
  <Drawer
    v-model:visible="visible"
    position="right"
    header="Logger Settings"
    class="settings-drawer"
  >
    <h2>Log Levels</h2>

    <div class="levels">
      <div
        v-for="level in levelDisplayOrder"
        :key="level"
        class="level-row"
      >
        <div class="level-info">
          <span class="icon">{{ LOG_LEVEL_META[level].icon }}</span>
          <div class="text">
            <div class="label">{{ LOG_LEVEL_META[level].label }}</div>
            <div class="description">{{ LOG_LEVEL_META[level].description }}</div>
          </div>
        </div>

        <ToggleSwitch
          :modelValue="levels[level]"
          @update:modelValue="val => toggle(level, val)"
        />
      </div>
    </div>

    <Divider />

    <div class="hint">
      Changes are saved automatically and persist across reloads.
    </div>
  </Drawer>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import Drawer from "primevue/drawer";
import ToggleSwitch from "primevue/toggleswitch";
import Divider from "primevue/divider";

import { LOG_LEVEL_META, LogLevel } from "../classes/Logger";
import { logger } from "../utils/logger";

const visible = ref(false);

// Reactive levels from logger
const levels = reactive<Record<LogLevel, boolean>>(logger.getLevels());

// define order for UI display
const levelDisplayOrder: LogLevel[] = ["success", "error", "info", "debug"];

// Computed list of keys (typed)
const levelKeys = computed<LogLevel[]>(() => Object.keys(levels) as LogLevel[]);

// Toggle handler
function toggle(level: LogLevel, enabled: boolean) {
  logger.setLevel(level, enabled);
  levels[level] = enabled;
}

// Refresh levels when drawer opens
watch(visible, (open) => {
  if (open) {
    const current = logger.getLevels();
    Object.keys(current).forEach((lvl) => {
      levels[lvl as LogLevel] = current[lvl as LogLevel];
    });
  }
});

// Expose method to open drawer programmatically
defineExpose({
  open() {
    visible.value = true;
  },
});
</script>

<style scoped>
.settings-drawer {
  width: 320px;
}

.levels {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.level-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.level-info {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  max-width: 75%;
}

.icon {
  font-size: 1.2rem;
}

.text .label {
  font-weight: 600;
}

.text .description {
  font-size: 0.85rem;
  color: #666;
}

.hint {
  font-size: 0.8rem;
  color: #777;
}
</style>