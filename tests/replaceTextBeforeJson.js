/* eslint-disable */ 


        const {replaceTextBeforeJson} = require("../functions/replaceTextBeforeJson"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for the replaceTextBeforeJson function.
 */
function testReplaceTextBeforeJson() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "replaceTextBeforeJson";

    try {
        const result = replaceTextBeforeJson('Hello{"key":"value"}', 'New Text');
        if (result === 'New Text{"key":"value"}') {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    try {
        const result = replaceTextBeforeJson('123{"abc":1,"def":2}', 'XYZ');
        if (result === 'XYZ{"abc":1,"def":2}') {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    try {
        const result = replaceTextBeforeJson('No JSON here', 'Replacement');
        if (result === 'No JSON here') {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    try {
        const result = replaceTextBeforeJson('{"one":1,"two":2}Text after', 'Start');
        if (result === 'Start{"one":1,"two":2}') {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }
    
    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testReplaceTextBeforeJson
};