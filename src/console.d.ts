/**
 * Lets you send console messages. You can see these in the "Console" tab of the "Planet Scripts" UI
 */
declare const console: Console;

declare interface Console {
  /**
   * Logs a message.
   * @param args all things to log, joined by a space. note: if an argument is not a string, it is stringified using `JSON.stringify(part)`. Otherwise, it tries `String(part)` as a fallback.
   */
  log: (...args: unknown[]) => void;
  /**
   * Logs an info message.
   * @param args all things to log, joined by a space. note: if an argument is not a string, it is stringified using `JSON.stringify(part)`. Otherwise, it tries `String(part)` as a fallback.
   */
  info: (...args: unknown[]) => void;
  /**
   * Logs a warning message.
   * @param args all things to log, joined by a space. note: if an argument is not a string, it is stringified using `JSON.stringify(part)`. Otherwise, it tries `String(part)` as a fallback.
   */
  warn: (...args: unknown[]) => void;
  /**
   * Logs an error message.
   * @param args all things to log, joined by a space. note: if an argument is not a string, it is stringified using `JSON.stringify(part)`. Otherwise, it tries `String(part)` as a fallback.
   */
  error: (...args: unknown[]) => void;
}
