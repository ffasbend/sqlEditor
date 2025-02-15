<!-- src/components/TablesDisplay.vue -->
<template>
  <div v-if="tables && tables.length">
    <div v-for="name in tables" class="table-area">
      <h3 class="table-name">{{ name.label }}</h3>
      <div class="table-data">
        <TableDisplay :result="name.value" />
      </div>
    </div>
  </div>
  <div v-else>
    <p class="table-area">No tables to display.</p>
  </div>
</template>

<script setup>
import TableDisplay from './TableDisplay.vue';

/**
 * Props:
 * - tables: The result array returned by SQL.js exec method for all tables.
 */
const props = defineProps({
  tables: {
    type: Array,
    required: true,
  },
});

// const tables = defineModel()
</script>

<style scoped>
.table {
  margin-top: 1rem;
}

</style>

