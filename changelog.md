# Change Log

All notable changes to this project will be documented in this file.

## [v1.0.9] - 2026-01-26

### Added

- Add support for MS Access YES/NO boolean values

### Fixed

- Remove unnecessary text in parameter query window
- Modify datatype to boolean in sql databases (BonClient and AgentGénéral)

## [v1.0.8] - 2026-01-19

### Fixed

- Disable comma -> dot conversion for numbers as it breaks INSERT statements with multiple
  number values

## [v1.0.7] - 2025-12-15

### Added

- Add notice to SettingsDrawer (logs written to browser console)

### Fixed

- Set default log levels to None
- Replace TableDisplay.vue with ResultDisplay.vue on mobile (output area was empty)
- Update css for mobile devices

## [v1.0.6] - 2025-12-15

### Added

- Added new classes to represent current db: currentDB, Table, TableColumn, ForeignKey
- Modify code to use new classes
- Add separate view to display SQL results
- Display primary keys in bold and underlined
- Display foreign keys in red and italic
- Add tooltip with destination table and column to foreign keys
- Add scrollbars to the help section (PrimeVue component: Drawer)
- Reorder rows in Employé table (move record 14 to correct position)
- Add support for decimals with dot (".") or comma (",") as separator
- Add link to github repository in help section.
- Display number of affected rows for UPDATE, INSERT and DELETE queries.
- Add status message and status indicator for live updates
- Add possibility to manually disable live updates.
- Save and restore SQL editor content across page reloads using localStorage
- Add logger class and replace console.log calls with logger
- Add vue component 'SettingsDrawer' to configure log levels

### Fixed

- Unused css file 'sql_editor.css' removed from 'index.html'
- Make db and queries case-insensitive
- Remove preceding newlines from query to ensure live updates work
- Refactor runQuery and executeDebouncedQuery functions

## [v1.0.5] - 2025-12-09

### Added

- add support for MS Access date functions: YEAR(), MONTH(), DAY(), NOW()

## [v1.0.4] - 2025-12-09

### Added

- add support for MS Access dates with 1,2 or 4-digit years

### Fixed

- allow access dates in parameter queries

### Changed

- replace old vite plugin for monaco editor with new one \
  (https://www.npmjs.com/package/vite-plugin-monaco-editor-esm)
- npm uninstall vite-plugin-monaco-editor
- npm install --save-dev vite-plugin-monaco-editor-esm

## [v1.0.3] - 2025-04-01

### Added

- Support for MS Access wildcards (\* and ?) in pattern-matching queries (LIKE queries) was added.
- Help button and help text added.

### Fixed

- Use sql.js v1.13.0 to avoid problems while loading wasm from sql server
  (file is ./node_modules/sql.js/dist/sql-wasm.wasm after installing sql.js from npm)
- Error in db data was fixed (wrong town name).
- Smaller font-size for select box on small mobile devices.

### Changed

- Use Github Pages for live site
- Change to relative website path in vite
- Change favicon

## [v1.0.2] - 2025-02-26

### Fixed

- configure monaco editor to work with vite (use vite-plugin-monaco-editor)
- remove unused node packages

## [v1.0.1] - 2025-02-25

### Added

- MS Access date literals are now also accepted (and converted to SQL date format internally).
- MS Access parameter queries are now supported (values can be entered in popup window).

### Changed

- Current query is re-evaluated when the current database is changed.

### Fixed

- Dates in sample db's have been fixed (time part of date has been deleted).
- Times in sample db's have been fixed (date part of time has been deleted).
