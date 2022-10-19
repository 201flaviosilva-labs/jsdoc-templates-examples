/**
 * Change a given text to a Capitalize base text.
 * @see {@link https://en.wikipedia.org/wiki/Capitalization}
 * 
 * @example stringToCapitalize("beep"); // Beep
 * @example stringToCapitalize("Beep"); // Beep
 * @example stringToCapitalize("beep boop"); // Beep boop
 * @example stringToCapitalize("beep Boop"); // Beep Boop
 * 
 * @param {string} str - the text to transform
 * @returns {string}
 */
export function stringToCapitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }
