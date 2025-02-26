# Change Log

All notable changes to this project will be documented in this file.

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
