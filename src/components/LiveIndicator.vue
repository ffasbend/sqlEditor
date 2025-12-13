<template>
  <div 
    class="live-indicator"
    @click="handleClick"
    v-tooltip.bottom="
      isUserDisabled
        ? 'Click to re-enable live updates'
        : 'Click to disable live updates'
    "
  >
    <span class="live-indicator-symbol"> 
      {{ isUserDisabled ? '⚪' : isAutoDisabled ? '🔴' : '🟢' }}
    </span>
    <span class="live-indicator-content" >
      {{ isUserDisabled ? 
          'User-disabled updates': 
          isAutoDisabled ? 'Auto-disabled live updates' : 'Auto-enabled live updates' }}
    </span>
  </div>
</template>

<script setup lang="ts">
/**
 * Component props:
 *
 * @prop isAutoDisabled
 * Indicates whether live updates are automatically disabled
 * due to a parametrized query or a non-SELECT query.
 *
 * @prop isUserDisabled
 * Indicates whether live updates are manually disabled by the user.
 */
const props = defineProps({
  // Are live updates auto-disabled for unsupported query types?
  isAutoDisabled: { 
    type: Boolean,
    required: true,
  },
  // Are live updates manually disabled by the user?
  isUserDisabled: { 
    type: Boolean,
    required: false,
  },
});

// Declare emit
const emit = defineEmits(["click"]);

function handleClick() {
  emit("click");
}
</script>

<style scoped>
.live-indicator {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
}

</style>
