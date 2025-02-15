// src/utils/database.js
import initSqlJs from 'sql.js';

let db = null;

export const initDatabase = async (sql) => {
  const SQL = await initSqlJs({
    // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
    // You can omit locateFile completely when running in node
    locateFile: (file) => `https://sql.js.org/dist/${file}`,
  });
  db = new SQL.Database();

  // db.run('PRAGMA foreign_keys = ON;'); // make sure foreign key constraints are enabled
  db.run(sql);

  return db;
};

export const getDatabase = () => db;
