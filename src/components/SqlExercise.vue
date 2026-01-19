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
  <Drawer v-model:visible="visibleHelp" header="Online SQL Editor Help (v1.0.7)" position="top" style="height: auto" class="help-section">
  <a 
    href="https://github.com/ffasbend/sqlEditor"
    target="_blank"
    rel="noopener noreferrer"
  >
    View GitHub Repository
  </a>
    <h2>General Info</h2>
    <ul>
      <li>
        <strong>SELECT</strong> queries (except parameterized queries) are executed
        automatically with live updates, including error messages.
      </li>
      <li>
        All other queries (e.g. <strong>INSERT</strong>, <strong>UPDATE</strong>, <strong>DELETE</strong>, ...)
        or parameterized queries must be executed using the <strong>RUN SQL</strong> button.
      </li>
      <li>
        Decimal numbers only support dot (<code>.</code>) as decimal separators.
      </li>
      <li>
        To manually enable or disable live updates, click the status indicator (🟢).
      </li>  
      <li>
        The latest query is automatically saved and restored across page reloads using localStorage.
      </li>  
    </ul> 

    <h2>Support for MS Access</h2>
    <ul>
      <li>
        MS Access wildcards (<code>*</code> and <code>?</code>) are supported in
        pattern-matching (<strong>LIKE</strong>) queries.
      </li>
      <li>
        MS Access date literals (<code>#mm/dd/yyyy#</code>) are supported and
        automatically converted to the SQL date format.<br />
        The year may be entered with 2 or 4 digits
        (e.g. <code>#12/31/99#</code> or <code>#12/31/1999#</code>).<br />
        Two-digit years &lt; 50 are interpreted as 20xx, and years ≥ 50 as 19xx.
      </li>
      <li>
        MS Access date functions <code>YEAR()</code>, <code>MONTH()</code>, and
        <code>DAY()</code> are supported.
      </li>
      <li>
        MS Access parameter queries (<code>[...]</code>) are supported; parameter
        values are entered via a popup dialog.
      </li>
    </ul>

    <h2>Small screen support</h2>
    <ul>
      <li>
        <strong>Menu button</strong> (top left): view information about all tables,
        including column data types.
      </li>
      <li>
        <strong>Output</strong> tab: displays the results of the current query.
      </li>
      <li>
        <strong>Available Tables</strong> tab: lists all tables and their records.
      </li>
    </ul>
  </Drawer>

  <!-- Settings -->
  <SettingsDrawer ref="settingsDrawer" />

  <!-- MOBILE - Table Info (left side drawer) -->
  <Drawer v-model:visible="visibleLeft" header="Table Infos">
    <TablesInfo 
      :tables="currentDb.tables"
    />
  </Drawer>

  <!-- Body -->
  <div class="sql-content">
    <!-- PC - Table Info (left side arrow) -->
    <div id="left-side" class="table-info__wrapper pc-view">
      <div class="container">
        <TablesInfo 
          :tables="currentDb.tables"
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
            
            <!-- live indicator -->
            <div class="live-indicator-wrapper">
              <LiveIndicator 
                :isAutoDisabled="areLiveUpdatesAutoDisabled"
                :isUserDisabled="areLiveUpdatesDisabledByUser"
                @click="toggleManuallyEnabledLiveUpdates"
              />
            </div>

            <!-- Editor icons -->
            <ul class="editor-btn-list">
              <li class="editor-btn-list__item">
                <!-- Help text icons -->
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
                <!-- Settings icon -->
                <button class="editor-btn" @click="openSettings">
                  <svg 
                    width="18px" 
                    height="18px" 
                    viewBox="0 0 18 18" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;"
                      d="M 14.574219 9.730469 C 14.601562 9.492188 14.625 9.246094 14.625 9 C 14.625 8.753906 14.601562 8.507812 14.574219 8.269531 L 16.160156 7.027344 C 16.300781 6.914062 16.34375 6.710938 16.25 6.546875 L 14.75 3.949219 C 14.65625 3.789062 14.460938 3.71875 14.292969 3.789062 L 12.421875 4.542969 C 12.039062 4.246094 11.613281 3.992188 11.15625 3.800781 L 10.875 1.816406 C 10.839844 1.640625 10.6875 1.5 10.5 1.5 L 7.5 1.5 C 7.3125 1.5 7.160156 1.640625 7.128906 1.816406 L 6.847656 3.800781 C 6.390625 3.992188 5.964844 4.242188 5.578125 4.542969 L 3.710938 3.789062 C 3.542969 3.722656 3.347656 3.789062 3.253906 3.949219 L 1.753906 6.546875 C 1.660156 6.707031 1.703125 6.910156 1.84375 7.027344 L 3.425781 8.269531 C 3.398438 8.507812 3.375 8.753906 3.375 9 C 3.375 9.246094 3.398438 9.492188 3.425781 9.730469 L 1.84375 10.972656 C 1.703125 11.085938 1.660156 11.289062 1.753906 11.453125 L 3.253906 14.050781 C 3.347656 14.210938 3.542969 14.28125 3.710938 14.210938 L 5.578125 13.457031 C 5.964844 13.753906 6.390625 14.007812 6.847656 14.199219 L 7.128906 16.183594 C 7.160156 16.359375 7.3125 16.5 7.5 16.5 L 10.5 16.5 C 10.6875 16.5 10.839844 16.359375 10.871094 16.183594 L 11.152344 14.199219 C 11.609375 14.007812 12.035156 13.757812 12.421875 13.457031 L 14.289062 14.210938 C 14.457031 14.277344 14.652344 14.210938 14.746094 14.050781 L 16.246094 11.453125 C 16.339844 11.292969 16.296875 11.089844 16.15625 10.972656 Z M 9 11.625 C 7.546875 11.625 6.375 10.453125 6.375 9 C 6.375 7.546875 7.546875 6.375 9 6.375 C 10.453125 6.375 11.625 7.546875 11.625 9 C 11.625 10.453125 10.453125 11.625 9 11.625 Z M 9 11.625 "
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
              @click="() => runQuery(false)"
              :disabled="
                !areLiveUpdatesDisabledByUser 
                && (syntaxError || !areLiveUpdatesAutoDisabled)"
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

        <!-- Info Message -->
        <div class="info-message"
          :class="{ 'info-message-hidden': !message }"
        >
            {{ message }}
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
              <ResultDisplay :result="userResult" />
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
                  <ResultDisplay :result="userResult" />
                </div>
              </div>
              <p class="success-message"></p>
            </div>
            </TabPanel>

            <!-- MOBILE - Available Tables Display -->
            <TabPanel value="1" class="available-tables">
              <TablesDisplay 
                :tables="currentDb.tables"
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
          :tables="currentDb.tables"
        />
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { initDatabase, getDatabase, replaceMSAccessDateLiterals, convertAccessWildcardsToSQL, convertMSAccessDateFunctions, convertDecimalCommaToDot }
  from '../utils/database';
import VueSelect from "vue3-select-component";
import TableDisplay from './TableDisplay.vue';
import TablesDisplay from './TablesDisplay.vue';
import TablesInfo from './TablesInfo.vue';
import ResultDisplay from './ResultDisplay.vue';
import LiveIndicator from './LiveIndicator.vue';
import SqlEditor from './SqlEditor.vue';

/**
 * Settings drawer component and control
 * 
 * The reactive reference `settingsDrawer` will hold a reference to the SettingsDrawer component
 * instance once it is mounted. Initially, it is null because the component hasn’t been rendered yet.
 */
import SettingsDrawer from "./SettingsDrawer.vue";
const settingsDrawer = ref(null);

/**
 * Opens the settings drawer programmatically.
 * 
 * Uses the `settingsDrawer` component reference and calls its `open()` method.
 * The optional chaining (`?.`) ensures no error occurs if the component is not yet mounted.
 */
const openSettings = () => {
  settingsDrawer.value?.open();
};

import debounce from '../utils/debounce';
import dbs from '../utils/dbs';

// PrimeVue
import Drawer from 'primevue/drawer';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

import { logger } from '../utils/logger';

// Classes
import { CurrentDB } from "../classes/CurrentDB";

/**
 * Reactive State variables
 */
// Reactive variables to show the left side panel or the help section
const visibleLeft = ref(false)
const visibleHelp = ref(false)

// SQL Editor content
const sqlContent = ref(localStorage.getItem('sqlQuery') 
  || '-- Write your SQL query here\nSELECT ;');

// Save automatically on change
watch(sqlContent, (newVal) => {
  localStorage.setItem('sqlQuery', newVal);
});


const feedback = ref('');
const feedbackClass = ref('');
const userResult = ref(null);
let selected = ref('');     // sql to create selected db
const isDbSelected = ref(false); // has user selected a database?
const syntaxError = ref(false);
// Define a reactive variable to store the message from the child component
const message = ref('No Database selected');

// Whether live updates are auto-disabled due to parametrized or Non-SELECT queries
const areLiveUpdatesAutoDisabled = ref(false);

// Whether live updates are manually disabled by user
const areLiveUpdatesDisabledByUser = ref(false);

const currentDb = ref(new CurrentDB()); // current database object

// Store the last valid result
const lastValidResult = ref(null);


// Define a method to handle the emitted event
const handleValueChange = async (sql) => {
  await initDatabase(sql);
  isDbSelected.value = true;
  loadInitialTables();
  feedback.value = '';
};

const toggleManuallyEnabledLiveUpdates = () => {
  areLiveUpdatesDisabledByUser.value = !areLiveUpdatesDisabledByUser.value;
  if (!areLiveUpdatesDisabledByUser.value) {
    // re-execute the last valid query
    executeDebouncedQuery();
  } else {
    message.value = 'Live updates manually disabled by user. Click "Run SQL".';
  }
  logger.info('Toggle live updates requested: ' + areLiveUpdatesDisabledByUser.value);
};


const onQueryChange = () => {
  feedback.value = '';
  feedbackClass.value = '';
  logger.debug('Query changed, executing debounced query...');
  executeDebouncedQuery();
};





/**
 * Debounced function to execute the query as the user types.
 */
const executeDebouncedQuery = debounce(() => {
  runQuery(true); // live updates
}, 500);

/**
 * Executes the current SQL query safely.
 * - Handles database not initialized.
 * - Checks if live updates are allowed for SELECT queries.
 * - Catches and reports errors.
 *
 * @param {boolean} liveEnabled Whether this execution is triggered by live updates
 */
const runQuery = (liveEnabled = false) => {

  // Check for valid database connection
  const db = getDatabase();
  if (!db) {
    feedback.value = 'Database not initialized.';
    feedbackClass.value = 'alert alert-danger';
    return;
  }

  // Get query from editor
  var query = getSanitizedQuery();

  if (!liveEnabled && !query) {
    feedback.value = 'Query is empty.';
    feedbackClass.value = 'alert alert-warning';
    return;
  }

  // Live updates only support SELECT queries without parameters
  if (liveEnabled) {
    // check if query can be live executed (SELECT query without parameters)
    if (blocksLiveExecution(query)) {
      // disable live updates
      logger.debug('Live updates auto-disabled due to non-SELECT or parameter query.', query);
      areLiveUpdatesAutoDisabled.value = true;
      userResult.value = null;
      syntaxError.value = false;

      if (areLiveUpdatesDisabledByUser.value) {
        message.value = 'Live updates manually disabled by user. Click "Run SQL".';
      } else if (isParameterQuery(query)) {
        message.value = 'Live updates do not support parameter queries. Click "Run SQL".';
      } else {
        message.value = 'Live updates only support SELECT queries. Click "Run SQL".';
      }
      return;
    }

    // Before stopping (if live updates are disabled by user),
    // reset auto-enabled live updates and message
    areLiveUpdatesAutoDisabled.value = false;
    message.value = '';
    if (areLiveUpdatesDisabledByUser.value) {
      message.value = 'Live updates manually disabled by user. Click "Run SQL".';
      return;
    } else if (!isDbSelected.value) {
      message.value = 'No Database selected';
    }
  } else {
    // Not live execution
    // check for MS Access parameter query ([..])
    if (isParameterQuery(query)) {
      // ask for parameter values
      query = updateParameterQuery(query);
    }
  }

  // Convert query from MS Access format to SQL/SQLite-ready format
  query = normalizeQuery(query);

  try {
    const result = db.exec(query);
    logger.success(query);
    logger.debug("Query result", result);
    userResult.value = result;
    lastValidResult.value = result;
    syntaxError.value = false;
    // check if SELECT query
    if (!query.toLowerCase().startsWith('select')) {
      // show number of affected rows
      feedback.value = db.getRowsModified() + " row(s) affected";
      feedbackClass.value = 'alert alert-danger';
      loadInitialTables(); // reload tables if no select
    } else {
      feedback.value = '';
    }
  } catch (error) {
    syntaxError.value = true;
    feedback.value = error.message;
    logger.error(query, error);
    userResult.value = null;
  }
}

/**
 * Retrieves and sanitizes the current SQL query from the editor.
 * - Trims leading/trailing spaces.
 * - Removes single-line comments starting with `--`.
 *
 * @returns Sanitized SQL query an empty string if no query is present.
 */
const getSanitizedQuery = () => {
  // sanitize query
  // trim spaces and comments (to end of line)
  //   --.* → matches -- followed by any characters on that line
  //   (\n|$) → matches either a newline or the end of the string
  //   gm → global + multiline mode (^ and $ match start/end of each line)
  // Effect:
  // - Removes any comment from -- to the end of the line, even if there’s no
  //   newline at the end.
  // - Works for the last line of the file too.
  return sqlContent.value.replace(/--.*(\n|$)/gm, '').trim();
};

/**
 * Normalizes a SQL query for execution.
 * Convert query from MS Access format to SQL/SQLite-ready format
 * 
 * - Replaces MS Access date literals (#mm/dd/yyyy#) with standard SQL date format ('yyyy-mm-dd').
 * - Converts MS Access wildcards (*, ?) to SQL wildcards (% and _).
 * - Converts MS Access date functions (YEAR, MONTH, DAY) to SQLite equivalents.
 * - Converts decimal numbers with commas to dots.
 *
 * @param {string} query - The raw SQL query from the editor.
 * @returns {string} The normalized SQL query ready for execution.
 */
const normalizeQuery = (query) => {

  // Replace MS Access date literals
  query = replaceMSAccessDateLiterals(query);

  // Convert MS Access wildcards (* → %, ? → _)
  query = convertAccessWildcardsToSQL(query);

  // Convert MS Access date functions to SQLite functions
  query = convertMSAccessDateFunctions(query);

  // Convert decimal commas to dots
  // disabled, because it breaks INSERT statements with multiple values
  // e.g. INSERT INTO table (col1, col2) VALUES (1,5, 'more text');
  //query = convertDecimalCommaToDot(query);

  return query;
}

/**
 * Checks if a SQL query is a mutating query (INSERT, UPDATE, DELETE, ...)
 *
 * @param {string} query - The SQL query string
 * @returns {boolean} True if query is INSERT, UPDATE, DELETE, ...
 */
const blocksLiveExecution = (query) => {
  // Check if query starts with INSERT, UPDATE, or DELETE
  return /^\s*(INSERT|UPDATE|DELETE|CREATE|DROP|ALTER|REPLACE|PRAGMA|VACUUM|ATTACH|DETACH|BEGIN|COMMIT|ROLLBACK|EXPLAIN)\b/i.test(query) || isParameterQuery(query);
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
    currentDb.value = new CurrentDB(db); // reload current db
    //message.value = '';
  }

  // reevaluate query if db has changed
  executeDebouncedQuery();
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
    if (currentDb.value.allTableAndColumnNames.has(paramName.toLowerCase())) {
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
    if (currentDb.value.allTableAndColumnNames.has(paramName.toLowerCase())) {
      return match; // Leave column and table names unchanged
    }

    // Prompt the user for input
    const userInput = prompt(`Enter value for ${paramName}:`);
    
    // Regex to check for MS Access date literal: #MM/DD/YYYY#
    const reDate = /^#(0?[1-9]|1[0-2])\/(0?[1-9]|[12]\d|3[01])\/\d{2}(\d{2})?#$/;

    // Regex to check for numbers:
    // - integer: 123
    // - decimal with dot: 12.34
    // - decimal with comma: 12,34
    // - optional negative sign
    const reNumber = /^-?\d+([.,]\d+)?$/;

    if (userInput === null) {
      // console.log('null')
      return match; // If user cancels, leave the original text unchanged
    } else if (reDate.test(userInput.trim())) { // test for MS Access date literal
      // console.log('date', userInput)
      return userInput.trim(); // Valid MS Access date literal, If input is empty, replace with NULL
    } else if (reNumber.test(userInput.trim())) {
      // console.log('number', userInput);
      return userInput.trim(); // Numeric value, leave as-is (no quotes)
    } else {
      return `'${userInput}'`; // Wrap the input in single quotes for SQL compatibility
    }
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
