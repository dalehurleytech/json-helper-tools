/* eslint-disable */ 


        const {getJsonEndIndex} = require("../functions/getJsonEndIndex"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for getJsonEndIndex
 */
function testGetJsonEndIndex() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "getJsonEndIndex";

    const inputString1 = '{"key":"value"}Bye';
    const expectedResult1 = 17;
    try {
        const result1 = getJsonEndIndex(inputString1);
        if (result1 === expectedResult1) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    const inputString2 = '[1,2,3]{"key": "value"}';
    const expectedResult2 = 7;
    try {
        const result2 = getJsonEndIndex(inputString2);
        if (result2 === expectedResult2) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    const inputString3 = 'No JSON here!';
    const expectedResult3 = -1;
    try {
        const result3 = getJsonEndIndex(inputString3);
        if (result3 === expectedResult3) {
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
    testGetJsonEndIndex
};