<!-- src/components/TablesInfo.vue -->
<template>
  <div v-if="tables && tables.length">
    <div v-for="(table, index) in tables" 
      v-bind:class="(index != Object.keys(tables).length - 1) ? 'table-info' : 'last-table-info'">
      <TableInfo 
        :label="table.tableName"
        :result="table.columns" 
      />
    </div>
  </div>
  <div v-else>
    <p>No tables defined.</p>
  </div>
</template>

<script setup>
import TableInfo from './TableInfo.vue';

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

</script>

