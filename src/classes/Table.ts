import { TableColumn } from "./TableColumn";

/**
 * Represents a database table with columns and rows.
 */
export class Table {
  /** The name of the table */
  tableName: string;

  /** Array of TableColumn objects representing the table's columns */
  columns: TableColumn[];

  /** Array of row values */
  values: any[];

  /**
   * Creates a new Table instance.
   * @param tableName - The name of the table.
   */
  constructor(tableName: string) {
    this.tableName = tableName;
    this.columns = []; // array of TableColumn objects
    this.values = []; // array of row values
  }

  /**
   * Adds a new column to the table.
   * @param column - A TableColumn object to add.
   */
  addColumn(column: TableColumn) {
    this.columns.push(column);
  }

  /**
   * Sets the table's values (rows) in bulk.
   * @param values - An array of row values.
   */
  addValues(values: any) {
    this.values = values;
  }

  /**
   * Returns an array of column names.
   * @returns Array of strings representing column names.
   */
  getColumnNames(): string[] {
    return this.columns.map((col) => col.name);
  }
}
