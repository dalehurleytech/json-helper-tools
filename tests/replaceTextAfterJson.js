/* eslint-disable */ 


        const {replaceTextAfterJson} = require("../functions/replaceTextAfterJson"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function to evaluate the functionality of replaceTextAfterJson function.
 */
function testReplaceTextAfterJson() {
    let numberOfTestsPassed = 0;
    let numberOfTestsFailed = 0;
    const nameOfFunction = 'replaceTextAfterJson';

    try {
        const inputString = '{"key":"value"}Bye';
        const replacementString = 'New Text';
        const expectedResult = '{"key":"value"}New Text';
        const result = replaceTextAfterJson(inputString, replacementString);
        if (result === expectedResult) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const inputString = 'Gibberish{"key":"value"}MoreGibberish';
        const replacementString = 'Extra Text';
        const expectedResult = 'Gibberish{"key":"value"}Extra Text';
        const result = replaceTextAfterJson(inputString, replacementString);
        if (result === expectedResult) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const inputString = 'No JSON here';
        const replacementString = 'And this is ignored';
        const expectedResult = 'No JSON here';
        const result = replaceTextAfterJson(inputString, replacementString);
        if (result === expectedResult) {
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
    testReplaceTextAfterJson
};