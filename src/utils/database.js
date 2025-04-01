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


/**
 * Replaces MS Access date literals with SQL date format.
 * @param {string} sqlExpression - The SQL expression to update.
 * @returns {string} The updated SQL expression.
 * 
 * MS Access date literals are typically enclosed in # symbols and follow 
 * the format #MM/DD/YYYY# or #MM-DD-YYYY#. 
 */
export const replaceMSAccessDateLiterals = (sqlExpression) => {  
  // The Regex: #(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})#:
  // - #: Matches the # symbol that starts the date literal.
  // - Captures the month (\d{1,2}), day (\d{1,2}), and year (\d{4}) into groups.
  //   (month and day can be 1 or 2 digits, year is 4 digits)
  // - [\/-]: Matches either a / or - as the separator between month, day, and year.
  // - Allows for one or two digits in the month and day.
  // - Works with both / and - as separators.
  // - #: Matches the # symbol that ends the date literal.
  // - g: The global flag to find all matches in the string.
  const regex = /#(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})#/g;
  // replace() calls the callback function for each match.
  // - The match is the full matched string (e.g., #1/1/2023#).
  // - month, day, and year are the captured groups.
  const updatedSql = sqlExpression.replace(regex, (match, month, day, year) => {
    // Pad month and day with leading zeros if necessary (e.g., 1 becomes 01).    
    const paddedMonth = month.padStart(2, '0');
    const paddedDay = day.padStart(2, '0');
    // Format as SQL date: 'YYYY-MM-DD'
    return `'${year}-${paddedMonth}-${paddedDay}'`;
  }); 
  return updatedSql;
}


/**
 * Converts MS Access wildcards to SQL wildcards in a LIKE clause.
 * - Only replaces wildcards within LIKE clauses and inside apostrophes.
 * - Leaves other parts of the query unchanged.
 * - Case-Insensitive: Handles LIKE in any casing (e.g., like, Like).
 * 
 * Edge Cases to Consider:
 * - Escaped Apostrophes: If query contains escaped apostrophes (e.g., O''Reilly), the
 *   regex will still work because it only looks for non-apostrophe characters inside the
 *   quotes.
 * - Nested Quotes: If query has nested quotes (e.g., LIKE 'John''s Car*'), the regex will
 *   handle them correctly.
 * - Non-Wildcard * or ?: If * or ? appear outside LIKE clauses or outside apostrophes,
 *   they are left unchanged.
 * 
 * When migrating from Microsoft Access to a SQL-based database, one common issue is
 * that Access uses different wildcard characters in its LIKE queries compared to SQL. 
 * Specifically: 
 * - Access uses * for multiple characters and ? for a single character.
 * - SQL uses % for multiple characters and _ for a single character.
 * 
 * @param accessQuery the SQL query with Access wildcards
 * @returns the sanitized SQL query
 */
export const convertAccessWildcardsToSQL = (sqlExpression) => {
  // Regex to match LIKE clauses with apostrophes
  const regex = /(LIKE\s+')([^']*)(')/gi;
  // - (LIKE\s+'): Matches the LIKE keyword followed by one or more spaces and an apostrophe.
  // - ([^']*): Captures everything inside the apostrophes (non-apostrophe characters).
  // - ('): Matches the closing apostrophe.
  // - The gi flags ensure a global and case-insensitive match.
  // Replacement Logic:
  // - The replace method uses a callback function to process each match.
  // - p1: Captures the LIKE ' part.
  // - p2: Captures the content inside the apostrophes.
  // - p3: Captures the closing apostrophe.
  // - Wildcard replacement (* → %, ? → _) is applied only to p2.

  // Replace Access wildcards with SQL wildcards only within LIKE clauses
  const sqlQuery = sqlExpression.replace(regex, (match, p1, p2, p3) => {
      // Replace * with % and ? with _ only inside the LIKE clause's apostrophes
      const converted = p2
          .replace(/\*/g, '%')  // Replace * with %
          .replace(/\?/g, '_'); // Replace ? with _
      return `${p1}${converted}${p3}`;
  });

  return sqlQuery;
}
