/* eslint-disable */ 

/**
 * Finds the index of the first character of valid JSON in a string.
 *
 * @param {string} input - The input string to search for valid JSON.
 * @return {number} The index of the first character of a valid JSON object or array in the input string, or -1 if none found.
 * @example
 * // returns 5
 * getJsonStartIndex('Hello{"key":"value"}');
 */
function getJsonStartIndex(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '{' || input[i] === '[') {
            try {
                JSON.parse(input.slice(i));
                return i;
            } catch (e) {
                // Ignoring invalid JSON error
            }
        }
    }
    return -1;
}

module.exports = {
    getJsonStartIndex
};