# sqlEditor

SQL online editor for 1GCG

This SQL Online Editor is developed with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Inspired from:

- https://www.programiz.com/sql/online-compiler/
- https://stackblitz.com/edit/vitejs-vite-kyqqef?file=README.md

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

Test live version on: https://sqleditor-ytmg.onrender.com

# Howto

## General notes

- **First, use select box (on top) to select an existing database**.
- SELECT queries have live updates (with error messages).
- INSERT, UPDATE and DELETE queries must be executed with the button **RUN SQL**.

## On PC (wide window)

- The left side bar shows info about all tables.
- The right side bar shows all tables and records.

## On iPad or Touchpad (smaller screen)

- The **Menu button** (top left) shows info about all tables.
- The **Output** tab show the output from the current query.
- The **Available Tables** tab shows all tables and records.

## On Mobile (very small screen)

- Idem to touchpad, but limited usability.
