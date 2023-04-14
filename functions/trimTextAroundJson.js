/* eslint-disable */ 

/**
 * Trims blank spaces or any specified string around valid JSON.
 *
 * @param {string} inputString - The input string to trim.
 * @param {string} [trimString=' '] - Optional string to trim around the JSON. Default is blank space.
 * @return {string} The trimmed string around the valid JSON. If no valid JSON is found, it returns the original string.
 *
 * @example
 * // returns '{"key":"value"}'
 * trimTextAroundJson('   {"key":"value"}   ')
 */
function trimTextAroundJson(inputString, trimString = ' ') {
    let trimmedString = inputString.trim();
    let isJson = false;
    try {
        JSON.parse(trimmedString);
        isJson = true;
    } catch (error) {
        // not valid JSON, proceed with the custom trim string
    }

    if (!isJson && trimString.length > 0) {
        while (trimmedString.startsWith(trimString) || trimmedString.endsWith(trimString)) {
            if (trimmedString.startsWith(trimString)) {
                trimmedString = trimmedString.slice(trimString.length);
            }
            if (trimmedString.endsWith(trimString)) {
                trimmedString = trimmedString.slice(0, -trimString.length);
            }
        }
    }

    return trimmedString;
}

module.exports = {
    trimTextAroundJson
};