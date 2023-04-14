/* eslint-disable */ 

/**
 * Replaces any text before valid JSON with the specified string.
 *
 * @param {string} inputString - The input string to search for valid JSON.
 * @param {string} replacement - The replacement string to use in the output.
 * @return {string} The modified input string with the replacement string before valid JSON.
 *
 * @example
 * // returns 'New Text{"key":"value"}'
 * replaceTextBeforeJson('Hello{"key":"value"}', 'New Text')
 */
function replaceTextBeforeJson(inputString, replacement) {
    const jsonStartIndex = inputString.indexOf('{');
    if (jsonStartIndex === -1) {
        return inputString;
    }
    
    try {
        JSON.parse(inputString.slice(jsonStartIndex));
        return replacement + inputString.slice(jsonStartIndex);
    } catch (e) {
        return inputString;
    }
}

module.exports = {
    replaceTextBeforeJson
};