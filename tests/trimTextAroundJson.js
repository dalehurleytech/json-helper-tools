/* eslint-disable */ 


        const {trimTextAroundJson} = require("../functions/trimTextAroundJson"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test for trimTextAroundJson function
 */
function testTrimTextAroundJson() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "trimTextAroundJson";

    try {
        const input = '   {"key":"value"}   ';
        const expectedResult = '{"key":"value"}';
        const result = trimTextAroundJson(input);

        if (result === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const input = '--{"key":"value"}--';
        const trimString = '-';
        const expectedResult = '{"key":"value"}';
        const result = trimTextAroundJson(input, trimString);

        if (result === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const input = 'notJson';
        const expectedResult = 'notJson';
        const result = trimTextAroundJson(input);

        if (result === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const input = '  notJson  ';
        const trimString = ' ';
        const expectedResult = 'notJson';
        const result = trimTextAroundJson(input, trimString);

        if (result === expectedResult) {
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
    testTrimTextAroundJson
};