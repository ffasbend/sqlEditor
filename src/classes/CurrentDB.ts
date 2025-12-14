import { Table } from "./Table";
import { ForeignKey } from "./ForeignKey";
import { TableColumn } from "./TableColumn";

import { getDatabase } from "../utils/database";

/**
 * Represents the current database and provides access to tables, columns, and foreign keys.
 */
export class CurrentDB {
  /** Reference to the database connection/object returned by getDatabase() */
  db: any;

  /** Array of Table objects representing all tables in the database */
  tables: Table[];

  /** Set of all table names and column names in lowercase for quick lookup */
  allTableAndColumnNames: Set<string>;

  /**
   * Creates a new CurrentDB instance and loads the database tables and columns.
   */
  constructor(db: any = null) {
    this.db = db;
    this.tables = []; // array of Table objects
    this.allTableAndColumnNames = new Set(); // create empty Set
    this.loadCurrentDatabase();
  }

  /**
   * Adds a Table object to the database.
   * @param table - Table instance to add
   */
  addTable(table: Table) {
    this.tables.push(table);
  }

  /**
   * Checks if a given name corresponds to a table or column in the current database.
   *
   * The check is case-insensitive and uses the internal `allTableAndColumnNames` set
   * which contains all table names and column names (in lowercase) loaded from the database.
   *
   * @param name - The name to check (table name or column name)
   * @returns `true` if the name exists as a table or column, `false` otherwise
   */
  isValidTableOrColumn(name: string): boolean {
    return this.allTableAndColumnNames.has(name.toLowerCase());
  }

  /**
   * Loads the current database, all tables, and their columns.
   * Populates the tables array and allTableAndColumnNames set.
   */
  loadCurrentDatabase() {
    if (this.db) {
      // Get list of all tables
      const resultTables = this.db.exec(
        "SELECT name FROM sqlite_master WHERE type='table';"
      );

      for (let tableNameArray of resultTables[0].values) {
        // get table name
        const tableName = tableNameArray[0];
        // add tableName to allTableAndColumnNames set
        this.allTableAndColumnNames.add(tableName.toLowerCase());
        // Get definition
        // console.log(`Loading table: ${tableName}`);
        this.loadTable(tableName);
      }
    }
  }

  /**
   * Loads a single table with its columns and data.
   * @param tableName - Name of the table to load
   */
  loadTable(tableName: string) {
    // Create new table
    const table = new Table(tableName);

    // Get table column definitions
    // Result format:
    //   ['cid', 'name', 'type', 'notnull', 'dflt_value', 'pk']
    // meaning:
    //   cid = column id
    //   name = column name
    //   type = data type
    //   notnull = 1 if NOT NULL constraint exists, 0 otherwise
    //   dflt_value = default value
    //   pk > 0 if part of primary key, 0 otherwise
    //      The pk column indicates whether a column is part of the PRIMARY KEY.
    //      For composite (multi-column) primary keys, pk is not just a boolean:
    //      pk = 1 → first column in the primary key
    //      pk = 2 → second column
    //      pk = 3 → third column
    const resultColumns = this.db.exec(`PRAGMA table_info(${tableName})`);

    // Get foreign key definitions as dictionary with
    // Array of ForeignKey objects, keyed by current column name
    const foreignKeys = this.getForeignKeys(tableName);

    // Add columns to table
    for (let col of resultColumns[0].values) {
      // col = [cid, name, type, notnull, dflt_value, pk]
      let tableColumn = new TableColumn(
        col[0],
        col[1],
        col[2],
        col[3] === 1,
        col[4],
        col[5] > 0
      );

      if (col[1] in foreignKeys) {
        tableColumn.fk = foreignKeys[col[1]];
      }

      table.addColumn(tableColumn);

      this.allTableAndColumnNames.add(col[1].toLowerCase());
    }

    // Load table rows
    const resultData = this.db.exec(`SELECT * FROM ${tableName};`);
    table.addValues(resultData[0].values);
    // console.log(`+ Adding ${resultData[0].values.length} table rows`);

    this.addTable(table);

    //   currentTableAndColumnNames.value.push(tableName);
    //   // push all field names as single elements (... = spread operator)
    //   currentTableAndColumnNames.value.push(...result[0].columns);
  }

  /**
   * Retrieves foreign keys for a table.
   * @param tableName - Table to inspect
   * @returns Array of ForeignKey objects, keyed by current column name
   */
  getForeignKeys(tableName: string): ForeignKey[] {
    const foreignKeys: ForeignKey[] = [];

    // Get foreign keys for current table.
    // Result format:
    //   ['id', 'seq', 'table', 'from', 'to', 'on_update', 'on_delete', 'match']
    // meaning:
    //   id = foreign key id
    //   seq = sequence number
    //   table = referenced foreign table
    //   from = column in current table
    //   to = referenced column in foreign table
    //   on_update = action on update
    //   on_delete = action on delete
    //   match = match type (can be ignored in SQLite)
    const resultForeignKeys = this.db.exec(
      `PRAGMA foreign_key_list(${tableName})`
    );
    if (resultForeignKeys.length > 0) {
      let keys = [];

      for (let fk of resultForeignKeys[0].values) {
        // fk = [id, seq, table, from, to, on_update, on_delete, match]
        foreignKeys[fk[3]] = new ForeignKey(
          fk[3], // currentColumn
          fk[2], // referencedTable
          fk[4], // referencedColumn
          fk[5], // onUpdate
          fk[6] // onDelete
        );
        keys.push(fk[3]);
      }

      // console.log(`+ Foreign keys found for table ${tableName}: ` + keys.join(", "));
    }

    return foreignKeys;
  }
}
