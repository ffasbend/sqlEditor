<!-- src/components/SqlExercise.vue -->
<template>

  <!-- Header -->
  <header class="header-style flex-container">
    <div class="header-content header-content--maximized flex-item-fixed-width">
      <!-- MOBILE Header -->
      <div class="logo">
        <div class="mobile-navbar-logo-wrapper mobile-view">
          <span class="hamburger-wrapper" @click="visibleLeft = true">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="svg-view-stroke"
                d="M3 12H21"
                stroke="#25265E"
                stroke-opacity="0.87"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                class="svg-view-stroke"
                d="M3 6H21"
                stroke="#25265E"
                stroke-opacity="0.87"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                class="svg-view-stroke"
                d="M3 18H21"
                stroke="#25265E"
                stroke-opacity="0.87"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
          <div>
            <h1 class="mobile-editor-name">1GCG Online SQL Editor</h1>
          </div>
        </div>
      </div>
      <!-- PC Header -->
      <h1 class="editor-name pc-view">1GCG Online SQL Editor</h1>
    </div>
    <!-- Select DB -->
    <div class="flex-item-fill-space">
      <div class="select-db">
        <VueSelect
          v-model="selected"
          :options="dbs"
          placeholder="Select a database"
          @option-selected="(option) => handleValueChange(option.value)"
        />
      </div>
    </div>
  </header>

  <!-- MOBILE - Table Info (left side drawer) -->
  <Drawer v-model:visible="visibleLeft" header="Table Infos">
    <TablesInfo 
          :tables="currentTablesInfo"
    />
  </Drawer>

  <!-- Body -->
  <div class="sql-content">
    <!-- PC - Table Info (left side arrow) -->
    <div id="left-side" class="table-info__wrapper pc-view">
      <div class="container">
        <TablesInfo 
          :tables="currentTablesInfo"
        />
        <!-- <br class="mobile-view" /> -->
        <!-- <div class="last-table-info"> -->
      </div>
    </div>

    <!-- Middle section -->
    <div class="sql-section">

      <!-- Editor section -->
      <div class="sql-editor__area">
        <!-- Editor topbar -->
        <div class="editor-topbar">
          <a @click="toggleTableInfo()"
            id="shrink-btn-left"
            class="shrink-btn shrink-btn--left pc-view"
            title="shrink button"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="svg-view-stroke"
                d="M6 12L10 8L6 4"
                stroke="#25265E"
                stroke-opacity="0.87"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
          <div class="input-tab">
            <h2>Input</h2>
          </div>
          <div class="editor-btn__wrapper header-bar">
            <!-- <ul class="editor-btn-list">
              <li class="editor-btn-list__item">
                <button class="editor-btn">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="svg-view-stroke"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.88889 10.3704C9.70709 10.3704 10.3704 9.70715 10.3704 8.88895C10.3704 8.07075 9.70709 7.40747 8.88889 7.40747C8.07069 7.40747 7.40741 8.07075 7.40741 8.88895C7.40741 9.70715 8.07069 10.3704 8.88889 10.3704Z"
                      stroke-opacity="0.87"
                      stroke-width="1.77778"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      class="svg-view-stroke"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.88889 4.44441C9.70709 4.44441 10.3704 3.78113 10.3704 2.96293C10.3704 2.14473 9.70709 1.48145 8.88889 1.48145C8.07069 1.48145 7.40741 2.14473 7.40741 2.96293C7.40741 3.78113 8.07069 4.44441 8.88889 4.44441Z"
                      stroke-opacity="0.87"
                      stroke-width="1.77778"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      class="svg-view-stroke"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.88889 16.2963C9.70709 16.2963 10.3704 15.6331 10.3704 14.8149C10.3704 13.9967 9.70709 13.3334 8.88889 13.3334C8.07069 13.3334 7.40741 13.9967 7.40741 14.8149C7.40741 15.6331 8.07069 16.2963 8.88889 16.2963Z"
                      stroke-opacity="0.87"
                      stroke-width="1.77778"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </li>
            </ul> -->
            <button 
              @click="runQuery"
              :disabled="syntaxError"
              class="cta-btn" style=""
            >
              Run SQL
            </button>
            <a @click="toggleAvailableTables()"
              id="shrink-btn-right"
              class="shrink-btn shrink-btn--right pc-view"
              title="shrink button"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="svg-view-stroke"
                  d="M6 12L10 8L6 4"
                  stroke="#25265E"
                  stroke-opacity="0.87"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <!-- Editor -->
        <div class="sql-editor-input__area">
          <SqlEditor
            v-model="sqlContent"
            :error="syntaxError ? 'Invalid SQL syntax' : ''"
            @change="onQueryChange"
          />
          <div v-if="feedback" :class="feedbackClass">
            {{ feedback }}
          </div>
        </div>
      </div>

      <!-- PC - Output section -->
      <div class="output-wrapper pc-view">
        <h2 class="section-table-title">Output</h2>
        <div class="output-area">
          <div class="output-area__table">
            <!-- User Query Result -->
            <div v-if="userResult && userResult.length" class="mt-4">
              <TableDisplay :result="userResult" />
            </div>
          </div>
          <p class="success-message"></p>
        </div>
      </div>

      <!-- MOBILE - Tabs -->
      <Tabs value="0" class="output__wrapper mobile-view">
        <TabList class="output-header__container">
            <Tab value="0" class="output-header">Output</Tab>
            <Tab value="1" class="output-header">Available Tables</Tab>
        </TabList>

        <TabPanels class="output-panels">
          <!-- MOBILE - User Query Result -->
          <TabPanel value="0" class="output-table">
            <div class="output-area">
              <div class="output-area__table">
                <div v-if="userResult && userResult.length" class="mt-4">
                  <TableDisplay :result="userResult" />
                </div>
              </div>
              <p class="success-message"></p>
            </div>
            </TabPanel>

            <!-- MOBILE - Available Tables Display -->
            <TabPanel value="1" class="available-tables">
              <TablesDisplay 
                :tables="currentTables"
              />
            </TabPanel>
        </TabPanels>
      </Tabs>
    </div>

    <!-- PC RIGHT SIDE - Available Tables Display -->
    <div id="right-side" class="available-table__wrapper pc-view">
      <h2 class="section-table-title header-bar">Available Tables</h2>
      <div class="available-tables">
        <TablesDisplay 
          :tables="currentTables"
        />
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { initDatabase, getDatabase } from '../utils/database';
import VueSelect from "vue3-select-component";
import TableDisplay from './TableDisplay.vue';
import TablesDisplay from './TablesDisplay.vue';
import TablesInfo from './TablesInfo.vue';
import SqlEditor from './SqlEditor.vue';
import debounce from '../utils/debounce';
import dbs from '../utils/dbs';

// PrimeVue
import Drawer from 'primevue/drawer';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';


const visibleLeft = ref(false)


// State variables
const sqlContent = ref('-- Write your SQL query here\nSELECT;');
const feedback = ref('');
const feedbackClass = ref('');
const userResult = ref(null);
let selected = ref('');     // sql to create selected db
let initialTable = [];
// var tableNames = ref([]);
const syntaxError = ref(false);

const currentTables = ref([]);
const currentTableNames = ref([]);
const currentTablesInfo = ref([]);

// Define a reactive variable to store the message from the child component
const message = ref('No db selected yet');

// Define a method to handle the emitted event
const handleValueChange = async (sql) => {
  await initDatabase(sql);
  loadInitialTables()
};

// Store the last valid result
const lastValidResult = ref(null);

// Debounced function to execute the query as the user types
const executeDebouncedQuery = debounce(() => {
  const db = getDatabase();
  if (!db) return;

  // trim spaces and comments (to end of line)
  const query = sqlContent.value.trim().replace(/--.*\n/gm, '');
  
  // only execute SELECT queries on the fly
  if (query === '' || !query.toLowerCase().startsWith('select')) {
    userResult.value = null;
    syntaxError.value = false;
    feedback.value = '';
    return;
  }

  try {
    const result = db.exec(query);
    userResult.value = result;
    lastValidResult.value = result;
    syntaxError.value = false;
    feedback.value = '';
  } catch (error) {
    syntaxError.value = true;
    feedback.value = error.message;
    console.error('SQL Syntax Error:', error);
  }
}, 500);

const onQueryChange = () => {
  feedback.value = '';
  feedbackClass.value = '';
  executeDebouncedQuery();
};

const runQuery = () => {
  const db = getDatabase();
  if (!db) {
    feedback.value = 'Database not initialized.';
    feedbackClass.value = 'alert alert-danger';
    return;
  }

  if (syntaxError.value) {
    feedback.value = '❌ Cannot run query due to syntax errors.';
    feedbackClass.value = 'alert alert-danger';
    return;
  }

  // trim spaces and comments (to end of line)
  const query = sqlContent.value.trim().replace(/--.*\n/gm, '');
  
  try {
    const result = db.exec(query);
    syntaxError.value = false;
    // check if SELECT query
    if (query !== '' && !query.toLowerCase().startsWith('select')) {
      // show number of affected rows
      feedback.value = db.getRowsModified() + " row(s) affected";
      loadInitialTables(); // reload tables if no select
    } else {
      feedback.value = '';
    }
  } catch (error) {
    syntaxError.value = true;
    feedback.value = error.message;
    // console.error('SQL Syntax Error:', error);
  }
};

const resetState = () => {
  sqlContent.value = '-- Write your SQL query here\nSELECT * FROM employees;';
  feedback.value = '';
  feedbackClass.value = '';
  userResult.value = null;
  syntaxError.value = false;
};

const loadInitialTables = () => {
  const db = getDatabase();
  if (db) {
    // const result = db.exec('SELECT * FROM employees;');
    const tables = db.exec("SELECT name FROM sqlite_master WHERE type='table';");
    currentTableNames.value = tables[0].values;

    currentTables.value = []
    currentTablesInfo.value = []
    for (name of currentTableNames.value) {
      const result = db.exec(`SELECT * FROM ${name};`);
      currentTables.value.push({label:name, value:result});
      const resultInfo = db.exec(`PRAGMA table_info(${name})`);
      currentTablesInfo.value.push({label:name, value:resultInfo[0].values});
    }
  }
};

const toggleTableInfo = () => {
  let elem = document.getElementById("shrink-btn-left");
  const leftSide = document.getElementById("left-side");
  if (elem.classList.contains("shrink-btn--left")) {
    // left-side shown, hide it
    elem.classList.remove("shrink-btn--left");
    elem.classList.add("shrink-btn--right-side");
    leftSide.classList.remove("table-info__wrapper");
    leftSide.classList.add("hide-table-info__wrapper");
  } else {
    // left side hidden, show it
    elem.classList.remove("shrink-btn--right-side");
    elem.classList.add("shrink-btn--left");
    leftSide.classList.add("table-info__wrapper");
    leftSide.classList.remove("hide-table-info__wrapper");
  }
};

const toggleAvailableTables = () => {
  let elem = document.getElementById("shrink-btn-right");
  const rightSide = document.getElementById("right-side");
  if (elem.classList.contains("shrink-btn--right")) {
    // right-side shown, hide it
    elem.classList.remove("shrink-btn--right");
    elem.classList.add("shrink-btn--left-side");
    rightSide.classList.remove("available-table__wrapper");
    rightSide.classList.add("hide-available-table__wrapper");
    // rightSide.children[0].style.display = "none";
  } else {
    // right side hidden, show it
    elem.classList.remove("shrink-btn--left-side");
    elem.classList.add("shrink-btn--right");
    rightSide.classList.add("available-table__wrapper");
    rightSide.classList.remove("hide-available-table__wrapper");
    // rightSide.children[0].style.display = "block";
  }
};


onMounted(async () => {
  // Create empty db
  await initDatabase('');
});

</script>

<style scoped>
.ml-2 {
  margin-left: 0.5rem;
}

.card{
  padding: 0;
}

#availableTables {
  overflow: auto;
    height: calc(100% - 20px);
    padding-top: 0;
    padding-bottom: 12px;
}

</style>