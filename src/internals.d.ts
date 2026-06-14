/** native function that seems to be broken when you call it? you probably need to pass something to it, don't know though */
declare const __host: Function;
/**
 * parses JSON
 * -> calls all handlers in json.type, reporting errors if they arise
 * -> returns result
 */
declare const __dispatchEvent: (json: string) => string;
/**
 * Fires a timer.
 * @param json just some JSON with an ID in it, has to be indexable (i.e. string, number, symbol, ...)
 */
declare const __fireTimer: (json: string) => string;
/**
 * Runs a command.
 * @param json JSON data with a sender (gets wrapped into a player). `{sender: in some format that wrapPlayer accepts, I think you need name and UUID?, args?: string[], name: string}`.
 */
declare const __runCommand: (json: string) => string;
