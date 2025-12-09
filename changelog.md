# Change Log

All notable changes to this project will be documented in this file.

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
