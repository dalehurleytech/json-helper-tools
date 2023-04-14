/* eslint-disable */ 

/**
 * Serializes a JavaScript object into a JSON string.
 *
 * @param {Object} inputObject - The JavaScript object to serialize.
 * @return {string} A JSON string representation of the input object.
 * @throws {Error} If the input is not a valid JSON object.
 * 
 * @example
 * const input = { key: 'value' };
 * const output = objectToJsonString(input);
 * console.log(output); // '{"key":"value"}'
 */
function objectToJsonString(inputObject) {
    if (typeof inputObject !== 'object' || inputObject === null) {
        throw new Error('Input is not a valid JSON object');
    }

    return JSON.stringify(inputObject);
}

module.exports = {
    objectToJsonString
};