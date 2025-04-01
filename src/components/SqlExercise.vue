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
          inputId="select-db-input"
          :options="dbs"
          placeholder="Select a database"
          @option-selected="(option) => handleValueChange(option.value)"
        />
      </div>
    </div>
  </header>
  
  <!-- Help -->
  <Drawer v-model:visible="visibleHelp" header="Online SQL Editor Help" position="top" style="height: auto" class="help-section">
    <h2>General Info</h2>
    <ul>
      <li> SELECT queries (except parameter queries) are executed on the fly (live updates, including error messages).</li>
      <li> INSERT, UPDATE and DELETE queries must be executed with the button <strong>RUN SQL</strong>.</li>
    </ul>
    <h2>Support for MS Access</h2>
    <ul>
      <li> MS Access wildcards (* and ?) in pattern-matching queries (LIKE queries) are supported.</li>
      <li> MS Access date literals (#mm/dd/yyyy#) are supported (and converted to SQL date format internally).</li>
      <li> MS Access parameter queries ([...]) are supported (values can be entered in popup window).</li>
    </ul>
    <h2>Small screen support</h2>
    <ul>
      <li> <strong>Menu button</strong> (top left): show info about all tables with data types.</li>
      <li> <strong>Output</strong> tab: show output from the current query.</li>
      <li> <strong>Available Tables</strong> tab: show all tables and records.</li>
    </ul>
  </Drawer>

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
            <!-- Editor icons -->
            <ul class="editor-btn-list">
              <li class="editor-btn-list__item">
                <!-- Help text -->
                <button class="editor-btn" @click="visibleHelp = true">
                  <svg 
                    width="18px" 
                    height="18px" 
                    viewBox="0 0 0.45 0.45" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill-rule="evenodd"
                      d="M0 0.225C0 0.101 0.101 0 0.225 0s0.225 0.101 0.225 0.225 -0.101 0.225 -0.225 0.225S0 0.349 0 0.225m0.25 0.045H0.202v-0.003c0 -0.044 0.011 -0.051 0.031 -0.063q0.003 -0.002 0.007 -0.004c0.016 -0.01 0.029 -0.023 0.029 -0.042 0 -0.021 -0.017 -0.035 -0.037 -0.035 -0.019 0 -0.037 0.009 -0.039 0.034H0.142C0.143 0.106 0.184 0.079 0.232 0.079c0.052 0 0.088 0.033 0.088 0.078 0 0.031 -0.016 0.051 -0.041 0.066l-0.005 0.003c-0.018 0.011 -0.023 0.014 -0.023 0.04V0.27zm0.004 0.068a0.03 0.03 0 0 1 -0.03 0.03 0.03 0.03 0 0 1 -0.03 -0.03 0.03 0.03 0 0 1 0.03 -0.03c0.016 0 0.03 0.013 0.03 0.03z" 
                      fill="#5C5F62"
                      />
                    </svg>                
                </button>
              </li>
              <!-- <li class="editor-btn-list__item">
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
              </li> -->
            </ul>
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
import { initDatabase, getDatabase, replaceMSAccessDateLiterals, convertAccessWildcardsToSQL }
  from '../utils/database';
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

// Reactive variables to show the left side panel or the help section
const visibleLeft = ref(false)
const visibleHelp = ref(false)


// State variables
const sqlContent = ref('-- Write your SQL query here\nSELECT;');
const feedback = ref('');
const feedbackClass = ref('');
const userResult = ref(null);
let selected = ref('');     // sql to create selected db
const syntaxError = ref(false);

const currentTables = ref([]);
const currentTableNames = ref([]);
const currentTablesInfo = ref([]);
// list of all table and column names (used in updateParameterQuery and isParameterQuery)
const currentTableAndColumnNames = ref([]); 

// Define a reactive variable to store the message from the child component
const message = ref('No db selected yet');

// Define a method to handle the emitted event
const handleValueChange = async (sql) => {
  await initDatabase(sql);
  loadInitialTables()
};

// Store the last valid result
const lastValidResult = ref(null);

/**
 * Debounced function to execute the query as the user types.
 */
const executeDebouncedQuery = debounce(() => {
  const db = getDatabase();
  if (!db) {
    feedback.value = 'Database not initialized.';
    feedbackClass.value = 'alert alert-danger';
    return;
  }

  // sanitize query
  // trim spaces and comments (to end of line)
  var query = sqlContent.value.trim().replace(/--.*\n/gm, '');  
  // Replace MS Access date literals with SQL date format
  query = replaceMSAccessDateLiterals(query);
  // Replace MS Access wildcards with SQL wildcards
  query = convertAccessWildcardsToSQL(query);

  // only execute SELECT queries on the fly
  // parameter queries can't be executed on the fly
  if (query === '' 
      || !query.toLowerCase().startsWith('select')
      || isParameterQuery(query) // check for MS Access parameter query ([..])
    ) {
    userResult.value = null;
    syntaxError.value = false;
    feedback.value = '';
    if (isParameterQuery(query)) {
      feedback.value = 'Parameter query detected, on the fly execution not supported, please click the Run SQL button to execute the query.';
    }
    return;
  }

  try {
    const result = db.exec(query);
    console.log(query)
    userResult.value = result;
    lastValidResult.value = result;
    syntaxError.value = false;
    feedback.value = '';
  } catch (error) {
    syntaxError.value = true;
    feedback.value = error.message;
    userResult.value = null;
    // console.error('SQL Syntax Error:', error);
  }
}, 500);

const onQueryChange = () => {
  feedback.value = '';
  feedbackClass.value = '';
  executeDebouncedQuery();
};

/**
 * Function to run the SQL query when button is pressed.
 */
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

  // sanitize query
  // trim spaces and comments (to end of line)
  var query = sqlContent.value.trim().replace(/--.*\n/gm, '');
  // Replace MS Access date literals with SQL date format
  query = replaceMSAccessDateLiterals(query);
  // Replace MS Access wildcards with SQL wildcards
  query = convertAccessWildcardsToSQL(query);

  // check for MS Access parameter query ([..])
  if (isParameterQuery(query)) {
    // ask for parameter values
    query = updateParameterQuery(query);
  }

  try {
    const result = db.exec(query);
    console.log(query)
    userResult.value = result;
    lastValidResult.value = result;
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
    userResult.value = null;
  }
};

const resetState = () => {
  sqlContent.value = '-- Write your SQL query here\nSELECT * FROM employees;';
  feedback.value = '';
  feedbackClass.value = '';
  userResult.value = null;
  syntaxError.value = false;
};

/**
 * Load the initial tables from the database.
 */
const loadInitialTables = () => {
  const db = getDatabase();
  if (db) {
    // const result = db.exec('SELECT * FROM employees;');
    const tables = db.exec("SELECT name FROM sqlite_master WHERE type='table';");
    currentTableNames.value = tables[0].values;

    currentTables.value = []
    currentTablesInfo.value = []
    currentTableAndColumnNames.value = [] // array of all field names
    for (let tableNameArr of currentTableNames.value) {
      const tableName = tableNameArr[0];
      const result = db.exec(`SELECT * FROM ${tableName};`);
      currentTables.value.push({label:tableName, value:result});
      currentTableAndColumnNames.value.push(tableName);
      // push all field names as single elements (... = spread operator)
      currentTableAndColumnNames.value.push(...result[0].columns);
      const resultInfo = db.exec(`PRAGMA table_info(${tableName})`);
      currentTablesInfo.value.push({label:tableName, value:resultInfo[0].values});
    }
  }
  // convert all names to lowercase
  currentTableAndColumnNames.value = currentTableAndColumnNames.value.map(
    x => x.toLowerCase()
  );
  // reevaluate query if db has changed
  onQueryChange();
};

/**
 * Hide/Show the table info section.
 */
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

/**
 * Hide/Show the available tables section.
 */
const toggleAvailableTables = () => {
  let elem = document.getElementById("shrink-btn-right");
  const rightSide = document.getElementById("right-side");
  if (elem.classList.contains("shrink-btn--right")) {
    // right-side shown, hide it
    elem.classList.remove("shrink-btn--right");
    elem.classList.add("shrink-btn--left-side");
    rightSide.classList.remove("available-table__wrapper");
    rightSide.classList.add("hide-available-table__wrapper");
  } else {
    // right side hidden, show it
    elem.classList.remove("shrink-btn--left-side");
    elem.classList.add("shrink-btn--right");
    rightSide.classList.add("available-table__wrapper");
    rightSide.classList.remove("hide-available-table__wrapper");
  }
};


/**
 * Function to check if we have an MS Access parameter query. Table and Column names
 * between brackets are excluded.
 * @param {string} sqlExpression - The SQL expression to check.
 * @returns {boolean} True if the expression contains parameter queries, false otherwise.
 */
const isParameterQuery = (sqlExpression) => {
  // Regex to match text between brackets that are not part of an AS clause
  const regex = /(?<!\bAS\s)\[([^\]]+)\]/gi;

  // count nb of parameters
  let counter = 0;
  const updatedQuery = sqlExpression.replace(regex, (match, paramName) => {
    // known table and column names are excluded from count
    if (currentTableAndColumnNames.value.includes(paramName.toLowerCase())) {
      return match; // ignore column and table names
    }
    counter++;
    return ' ';
  });
  return counter > 0;
}

/**
 * Function to replace parameter queries with user input. Table and Column names
 * between brackets are excluded.
 * @param {string} sqlExpression - The SQL expression to check.
 * @returns {string} the updated SQL expression.
 */
const updateParameterQuery = (sqlExpression) => {
  // Regex to match text between brackets that are not part of an AS clause
  const regex = /(?<!\bAS\s)\[([^\]]+)\]/gi;
  // (?<!\bAS\s): Is a negative lookbehind assertion, it ensures that the bracketed
  //    text is not preceded by the word AS (case-insensitive) followed by whitespace.
  // \b ensures that AS is a whole word (not part of another word like PASS).
  // \[([^\]]+)\]: Matches text between brackets ([...]) and captures the text inside
  //    the brackets as a group (paramName).
  // g: Global flag to match all occurrences.
  // i: Case-insensitive flag to handle AS in any case (e.g., AS, as, As).

  // Replace each match with a popup prompt
  const updatedQuery = sqlExpression.replace(regex, (match, paramName) => {
    // known table and column names are excluded from replacement
    if (currentTableAndColumnNames.value.includes(paramName.toLowerCase())) {
      return match; // Leave column and table names unchanged
    }

    // Prompt the user for input
    const userInput = prompt(`Enter value for ${paramName}:`);
    return `'${userInput}'`; // Wrap the input in single quotes for SQL compatibility
  });

  return updatedQuery;
}


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
