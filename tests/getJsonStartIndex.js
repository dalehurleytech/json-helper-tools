/* eslint-disable */ 


        const {getJsonStartIndex} = require("../functions/getJsonStartIndex"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test for getJsonStartIndex function
 */
function testGetJsonStartIndex() {
    let numberOfTestsPassed = 0;
    let numberOfTestsFailed = 0;
    const nameOfFunction = "getJsonStartIndex";

    // Test case 1: normal JSON object
    try {
        const input = 'Hello{"key":"value"}';
        const expectedOutput = 5;
        const result = getJsonStartIndex(input);
        
        if (result === expectedOutput) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Test case 2: normal JSON array
    try {
        const input = 'First[1, 2, 3]';
        const expectedOutput = 5;
        const result = getJsonStartIndex(input);

        if (result === expectedOutput) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Test case 3: no JSON in the string
    try {
        const input = 'There is no JSON here!';
        const expectedOutput = -1;
        const result = getJsonStartIndex(input);

        if (result === expectedOutput) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Test case 4: JSON at the beginning of the string
    try {
        const input = '{"a":1}Some text';
        const expectedOutput = 0;
        const result = getJsonStartIndex(input);

        if (result === expectedOutput) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    addToReadme(generateTestBadge(nameOfFunction, numberOfTestsPassed, numberOfTestsFailed));
}

module.exports = {
    testGetJsonStartIndex
};