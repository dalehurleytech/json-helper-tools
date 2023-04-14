/* eslint-disable */ 

/**
 * Replaces any text after valid JSON with a specified string.
 *
 * @param {string} inputString - The input string containing JSON and additional text.
 * @param {string} replacementString - The string to replace any text after valid JSON.
 * @return {string} The modified string with valid JSON and the specified text after it.
 *
 * @example
 * // returns '{"key":"value"}New Text'
 * replaceTextAfterJson('{"key":"value"}Bye', 'New Text')
 */
function replaceTextAfterJson(inputString, replacementString) {
    let jsonString = "";
    for (let i = 0; i < inputString.length; i++) {
        try {
            jsonString = inputString.slice(0, i + 1);
            JSON.parse(jsonString);
        } catch (error) {
            continue;
        }
    }

    return jsonString ? jsonString + replacementString : inputString;
}

module.exports = {
    replaceTextAfterJson
};