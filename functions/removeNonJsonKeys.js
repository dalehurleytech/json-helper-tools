/* eslint-disable */ 

/**
 * Removes any keys and their values from a JSON object if they are not valid JSON.
 *
 * @param {Object} jsonObj - JSON object to process.
 * @return {Object} A new JSON object with any invalid JSON keys removed, handles nested JSON objects as well.
 * @example
 * const input = {
 *   key1: "value",
 *   key2: "This is not JSON",
 *   key3: { nestedKey: "validValue" }
 * };
 * const result = removeNonJsonKeys(input);
 * // result is { key1: "value", key3: { nestedKey: "validValue" } }
 */
function removeNonJsonKeys(jsonObj) {
    const isValidJson = (value) => {
        if (typeof value === "object" && value !== null) {
            return JSON.stringify(value) !== undefined;
        }
        return true;
    };

    const processObject = (obj) => {
        const newObj = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = obj[key];
                if (isValidJson(value)) {
                    newObj[key] = typeof value === "object" ? processObject(value) : value;
                }
            }
        }
        return newObj;
    };

    return processObject(jsonObj);
}

module.exports = {
    removeNonJsonKeys
};
