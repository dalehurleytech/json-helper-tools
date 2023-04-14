/* eslint-disable */ 


        const {jsonStringToObject} = require("../functions/jsonStringToObject"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test for jsonStringToObject function
 */
function testJsonStringToObject() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "jsonStringToObject";

    try {
        const jsonString = '{"key":"value"}';
        const expectedResult = { key: "value" };
        const result = jsonStringToObject(jsonString);

        if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const jsonString = '{"key1":"value1", "key2": 42, "key3": true}';
        const expectedResult = { key1: "value1", key2: 42, key3: true };
        const result = jsonStringToObject(jsonString);

        if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const jsonString = 'invalid JSON string';
        const result = jsonStringToObject(jsonString);
        number_of_tests_failed++;
    } catch (err) {
        if (err.message === "Invalid JSON string") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    }

    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testJsonStringToObject
};