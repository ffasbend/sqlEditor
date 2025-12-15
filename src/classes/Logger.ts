// src/utils/Logger.ts
export type LogLevel = "success" | "error" | "info" | "debug";

export const LOG_LEVEL_META: Record<
  LogLevel,
  {
    icon: string;
    label: string;
    description: string;
  }
> = {
  success: {
    icon: "✅", // 🟢
    label: "Successful queries",
    description: "Logs only successfully executed queries.",
  },
  error: {
    icon: "❌", // 🔴
    label: "Errors",
    description: "Logs queries that fail or produce errors (useful with live updates).",
  },
  info: {
    icon: "ℹ️", // 🟡
    label: "Info",
    description: "Logs general execution info and warnings.",
  },
  debug: {
    icon: "🐞",
    label: "Full debug",
    description: "Logs detailed debug information, including intermediate steps.",
  },
};

const LEVELS: Record<LogLevel, boolean> = {
  success: true,
  error: false,
  info: false,
  debug: false,
};

export class Logger {
  private static readonly STORAGE_KEY = "loggerLevels";

  private levels: Record<LogLevel, boolean>;
  private readonly colors: Record<LogLevel, string> = {
    success: "color: black; font-weight: normal",
    error: "color: red; font-weight: normal",
    info: "color: gray; font-weight: normal",
    debug: "color: gray; font-weight: normal",
  };

  constructor() {
    const savedLevels = localStorage.getItem(Logger.STORAGE_KEY);
    this.levels = savedLevels
      ? JSON.parse(savedLevels)
      : {
          success: true,
          error: false,
          info: false,
          debug: false,
        };
  }

  private saveLevels() {
    localStorage.setItem(Logger.STORAGE_KEY, JSON.stringify(this.levels));
  }

  private log(level: LogLevel, args: unknown[]): void {
    if (!this.levels[level]) return;

    const firstArg = args[0];

    const labelArg: string | number | null =
      typeof firstArg === "string" || typeof firstArg === "number"
        ? firstArg
        : null;

    const restArgs = labelArg !== null ? args.slice(1) : args;

    const meta = LOG_LEVEL_META[level];

    const label = `%c${meta.icon} [${level.toUpperCase()}]${
      labelArg !== null ? " " + labelArg : ""
    }`;
    const style = this.colors[level];
    
    const hasObject = restArgs.some((a) => typeof a === "object" && a !== null);

    if (restArgs.length > 0) {
      console.groupCollapsed(label, style);
      restArgs.forEach((arg) => console.log(arg));
      console.groupEnd();
    } else {
      console.log(label, style, ...restArgs);
    }
  }
 
  /* ===== Public API ===== */

  setLevel(level: LogLevel, enabled: boolean) {
    this.levels[level] = enabled;
    this.saveLevels();
  }

  getLevels(): Record<LogLevel, boolean> {
    return { ...this.levels };
  }

  debug(...args: any[]) {
    this.log("debug", args);
  }

  info(...args: any[]) {
    this.log("info", args);
  }

  success(...args: any[]) {
    this.log("success", args);
  }

  error(...args: any[]) {
    this.log("error", args);
  }
}
