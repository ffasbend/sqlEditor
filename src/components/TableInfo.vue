<!-- src/components/TableInfo.vue -->
<template>
  <!-- Table Info icon -->
  <div  class="table-icon">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="svg-view"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 0C1.34315 0 0 1.34315 0 3V7V15C0 16.6569 1.34314 18 3 18H21C22.6569 18 24 16.6569 24 15V7V3C24 1.34315 22.6569 0 21 0H3ZM22 6V3C22 2.44771 21.5523 2 21 2H3C2.44772 2 2 2.44772 2 3V6H22ZM2 8H7L7 16H3C2.44772 16 2 15.5523 2 15V8ZM9 16V8H15V16H9ZM17 16H21C21.5523 16 22 15.5523 22 15V8H17V16Z"
        fill-opacity="0.67"
      ></path>
    </svg>
  </div>
  
  <!-- Table Info columns -->
  <div class="table-info__content">
    <h3>{{ label }}</h3>
    <ul class="table-info__content-details">
      <li v-for="(res, index) in result" :key="index">
        <div style="display: flex; flex-wrap: wrap; gap: 2px">
          {{res[1] }}<span class="table-info__content-details--blue"
            >{{res[2]}}</span
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
/**
 * Props:
 * - result: The result array returned by SQL.js exec method.
 */
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  result: {
    type: Array,
    required: true,
  },
});
</script>


