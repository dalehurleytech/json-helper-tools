/* eslint-disable */ 

/**
 * Parses a valid JSON string into a JavaScript object.
 *
 * @param {string} jsonString - The JSON string to be converted to a JavaScript object.
 * @return {Object} A JavaScript object representation of the input JSON string.
 * @throws {Error} Throws an error if the input string is not valid JSON.
 *
 * @example
 * const jsonString = '{"key":"value"}';
 * const jsonObj = jsonStringToObject(jsonString); // {key: "value"}
 */
function jsonStringToObject(jsonString) {
    try {
        const jsonObject = JSON.parse(jsonString);
        return jsonObject;
    } catch (error) {
        throw new Error('Invalid JSON string');
    }
}

module.exports = {
    jsonStringToObject
};