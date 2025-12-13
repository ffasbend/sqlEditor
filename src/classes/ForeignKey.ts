/**
 * Represents a foreign key constraint in a database table.
 */
export class ForeignKey {
  /** The column in the current table that references another table */
  currentColumn: string;

  /** The table being referenced by the foreign key */
  referencedTable: string;

  /** The column in the referenced table */
  referencedColumn: string;

  /** Action to perform on update (e.g., CASCADE, SET NULL, RESTRICT) */
  onUpdate: string;

  /** Action to perform on delete (e.g., CASCADE, SET NULL, RESTRICT) */
  onDelete: string;

  /**
   * Creates a new ForeignKey instance.
   * @param currentColumn - Column in the current table that is the foreign key.
   * @param referencedTable - The table being referenced.
   * @param referencedColumn - Column in the referenced table.
   * @param onUpdate - Action to perform when the referenced row is updated.
   * @param onDelete - Action to perform when the referenced row is deleted.
   */
  constructor(
    currentColumn: string,
    referencedTable: string,
    referencedColumn: string,
    onUpdate: string,
    onDelete: string
  ) {
    this.currentColumn = currentColumn;
    this.referencedTable = referencedTable;
    this.referencedColumn = referencedColumn;
    this.onUpdate = onUpdate;
    this.onDelete = onDelete;
  }
}
