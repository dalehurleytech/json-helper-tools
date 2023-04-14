/* eslint-disable */ 


        const {removeNonJsonKeys} = require("../functions/removeNonJsonKeys"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}  /**
   * Tests the removeNonJsonKeys function.
   */
function testRemoveNonJsonKeys() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "removeNonJsonKeys";

    try {
        const input1 = {
            key1: "value",
            key2: "This is not JSON",
            key3: { nestedKey: "validValue" }
        };
        const expectedResult1 = { key1: "value", key3: { nestedKey: "validValue" } };
        const result1 = removeNonJsonKeys(input1);
        if (JSON.stringify(result1) === JSON.stringify(expectedResult1)) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const input2 = {
            key1: ["array", { nestedObj: true }],
            key2: { nestedKey: { nestedNestedKey: 42 } },
            key3: "Another non-JSON value"
        };
        const expectedResult2 = {
            key1: ["array", { nestedObj: true }],
            key2: { nestedKey: { nestedNestedKey: 42 } }
        };
        const result2 = removeNonJsonKeys(input2);
        if (JSON.stringify(result2) === JSON.stringify(expectedResult2)) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const input3 = {
            key1: "value",
            key2: ["Item1", "Item2"],
            key3: { nestedKey: "Another value", nestedKey2: "Yet another value" }
        };
        const expectedResult3 = {
            key1: "value",
            key2: ["Item1", "Item2"],
            key3: { nestedKey: "Another value", nestedKey2: "Yet another value" }
        };
        const result3 = removeNonJsonKeys(input3);
        if (JSON.stringify(result3) === JSON.stringify(expectedResult3)) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testRemoveNonJsonKeys
};