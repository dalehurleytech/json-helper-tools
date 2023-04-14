/* eslint-disable */ 

/**
 * Extracts the valid JSON from a string, if present.
 *
 * @param {string} input - The string to extract valid JSON from.
 * @return {string} The valid JSON substring or an empty string if not found.
 * @example
 * // returns '{"key":"value"}'
 * extractJSON('Hello{"key":"value"}Bye');
 */
function extractJSON(input) {
    const jsonStringStart = input.indexOf('{');
    const jsonStringEnd = input.lastIndexOf('}');
    if (jsonStringStart !== -1 && jsonStringEnd !== -1 && jsonStringEnd > jsonStringStart) {
        const jsonString = input.slice(jsonStringStart, jsonStringEnd + 1);
        try {
            JSON.parse(jsonString);
            return jsonString;
        } catch (error) {
            return '';
        }
    }
    return '';
}

module.exports = {
    extractJSON
};