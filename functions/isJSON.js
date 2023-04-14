/* eslint-disable */ 

/**
 * Checks if a string is a valid JSON.
 *
 * @param {string} str - The string to check if it is a valid JSON.
 * @return {boolean} true if the string is a valid JSON, otherwise false.
 *
 * @example
 * // Returns true
 * isJSON('{"key": "value"}');
 *
 * // Returns false
 * isJSON('This is not JSON');
 */
function isJSON(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (error) {
        return false;
    }
}

module.exports = {
    isJSON
};