/* eslint-disable */ 

/**
 * Finds the index of the last character of valid JSON in a string.
 *
 * @param {string} inputString - The input string to search.
 * @return {number} The index of the last character of a valid JSON object or array in the input string, or -1 if no valid JSON is found.
 * @example
 *   const index = getJsonEndIndex('{"key":"value"}Bye'); // returns 17
 */
function getJsonEndIndex(inputString) {
    let stack = [];
    let lastIndex = -1;

    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];

        if (char === "{" || char === "[") {
            stack.push(char);
        } else if ((char === "}" && stack[stack.length - 1] === "{") || (char === "]" && stack[stack.length - 1] === "[")) {
            stack.pop();
            if (stack.length === 0) {
                lastIndex = i;
            }
        }
    }

    return lastIndex;
}

module.exports = {
    getJsonEndIndex
};