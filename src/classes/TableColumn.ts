import { ForeignKey } from "./ForeignKey";

/**
 * Represents a column in a database table.
 */
export class TableColumn {
  /** Column ID (position or index in the table) */
  cid: number;

  /** Name of the column */
  name: string;

  /** Data type of the column (e.g., INTEGER, TEXT) */
  type: string;

  /** Whether the column has a NOT NULL constraint */
  notnull: boolean;

  /** Default value of the column, if any */
  dflt_value: any;

  /** Whether this column is part of the primary key */
  pk: boolean;

  /** Foreign key reference (null if not a foreign key) */
  fk: ForeignKey | null;

  /**
   * Creates a new TableColumn instance.
   * @param cid - Column ID (index in the table)
   * @param name - Column name
   * @param type - Data type
   * @param notnull - Whether NOT NULL constraint is set
   * @param dflt_value - Default value for the column
   * @param pk - Whether this column is a primary key
   * @param fk - Optional foreign key reference
   */
  constructor(
    cid: number,
    name: string,
    type: string,
    notnull: boolean,
    dflt_value: any,
    pk: boolean,
    fk: ForeignKey | null = null
  ) {
    this.cid = cid;
    this.name = name;
    this.type = type;
    this.notnull = notnull;
    this.dflt_value = dflt_value;
    this.pk = pk;
    this.fk = fk;
  }

  /**
   * Checks if this column is a primary key.
   * @returns true if column is part of primary key, false otherwise
   */
  isPrimaryKey(): boolean {
    return this.pk;
  }

  /**
   * Checks if this column is a foreign key.
   * @returns true if column has a foreign key reference, false otherwise
   */
  isForeignKey(): boolean {
    return this.fk !== null;
  }
}
