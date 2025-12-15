// src/utils/logger.ts

/**
 * Export a singleton logger instance
 * 
 * This ensures:
 * - One shared logger instance
 * - Shared log-level state
 * - localStorage persistence works correctly
 */
import { Logger } from "../classes/Logger";

export const logger = new Logger();
