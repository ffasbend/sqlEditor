<!-- src/components/TableDisplay.vue -->
<template>
  <div v-if="result && result.length">
    <div v-for="(res, index) in result" :key="index">
      <table class="output-table__table">
        <thead>
          <tr>
            <th v-for="(col, colIndex) in res.columns" :key="colIndex">
              {{ col }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in res.values" :key="rowIndex">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex">
              {{ cell }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div v-else>
    <p>No results to display.</p>
  </div>
</template>

<script setup>
//import { defineProps } from 'vue';

/**
 * Props:
 * - result: The result array returned by SQL.js exec method.
 */
const props = defineProps({
  result: {
    type: Array,
    required: true,
  },
});

// const loadInitialTable = () => {
//   const db = getDatabase();
//   if (db) {
//     const result = db.exec('SELECT * FROM employees;');
//     initialTable.value = result;
//   }
// };
</script>

<style scoped>

</style>

