/* eslint-disable */ 


        const {objectToJsonString} = require("../functions/objectToJsonString"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test for objectToJsonString function
 */
function testObjectToJsonString() {
    const name_of_function = "objectToJsonString";
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;

    // Test case 1: Valid input object
    try {
        const input1 = { key: "value" };
        const expectedOutput1 = '{"key":"value"}';
        const actualOutput1 = objectToJsonString(input1);
        if (actualOutput1 === expectedOutput1) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case 2: Invalid input (null value)
    try {
        const input2 = null;
        objectToJsonString(input2);
        number_of_tests_failed++;
    } catch (err) {
        number_of_tests_passed++;
    }

    // Test case 3: Invalid input (string value)
    try {
        const input3 = "this is not an object";
        objectToJsonString(input3);
        number_of_tests_failed++;
    } catch (err) {
        number_of_tests_passed++;
    }

    // Test case 4: Valid input with nested object
    try {
        const input4 = { key: "value", nested: { foo: "bar", num: 42 } };
        const expectedOutput4 = '{"key":"value","nested":{"foo":"bar","num":42}}';
        const actualOutput4 = objectToJsonString(input4);
        if (actualOutput4 === expectedOutput4) {
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
    testObjectToJsonString
};