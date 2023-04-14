
_This entire repository was created completely with **AI**, using the [hero-ai-package-creator](https://github.com/hero-page/hero-ai-package-creator), which is **open-source**, uses **GPT-4**, and is written & maintained by [**Sam Chahine**](https://hero.page/samir)_ ❣️🧞‍♀️ 



# json-helper-tools

A collection of utilities to check if a string contains JSON that can be used in JSON.parse() and removes any text before or after.

## Installation

```sh
npm install json-helper-tools
```

## Functions

### isJSON()

**Summary:** Checks if a string is a valid JSON. This function takes a string as input and returns true if the string is a valid JSON, otherwise, it returns false. For example, it would return true for '{"key": "value"}', but false for 'This is not JSON'. It does not handle extreme cases like deeply nested JSON objects or very long strings.

### getJsonStartIndex()

**Summary:** Finds the index of the first character of valid JSON in a string. This function takes a string as input and returns the index of the first character of a valid JSON object or array in the input string. It ignores any text before the start of valid JSON. For example, it would return 5 for 'Hello{"key":"value"}'. If no valid JSON is found, it returns -1.

### getJsonEndIndex()

**Summary:** Finds the index of the last character of valid JSON in a string. This function takes a string as input and returns the index of the last character of a valid JSON object or array in the input string. It ignores any text after the end of valid JSON. For example, it would return 17 for '{"key":"value"}Bye'. If no valid JSON is found, it returns -1.

### extractJSON()

**Summary:** Extracts the valid JSON from a string, if present. This function takes a string as input and returns the valid JSON substring. It removes any text before or after the JSON. For example, it would return '{"key":"value"}' for 'Hello{"key":"value"}Bye'. If no valid JSON is found, it returns an empty string.

### replaceTextBeforeJson()

**Summary:** Replaces any text before valid JSON with a specified string. This function takes two arguments, the input string, and a replacement string. It replaces any text before the start of valid JSON with the replacement string. For example, it would return 'New Text{"key":"value"}' for input string 'Hello{"key":"value"}' and replacement string 'New Text'. If no valid JSON is found, it returns the original string.

### replaceTextAfterJson()

**Summary:** Replaces any text after valid JSON with a specified string. This function takes two arguments, the input string, and a replacement string. It replaces any text after the end of valid JSON with the replacement string. For example, it would return '{"key":"value"}New Text' for input string '{"key":"value"}Bye' and replacement string 'New Text'. If no valid JSON is found, it returns the original string.

### trimTextAroundJson()

**Summary:** Trims blank spaces or any specified string around valid JSON. This function takes two arguments, the input string, and an optional trim string. It removes any blank spaces or the specified trim string around the valid JSON. For example, it would return '{"key":"value"}' for input string '   {"key":"value"}   '. If no valid JSON is found, it returns the original string.

### removeNonJsonKeys()

**Summary:** Removes any keys and their values from a JSON object if they are not valid JSON. This function takes a JSON object as input and returns a new JSON object with any invalid JSON keys removed. It handles nested JSON objects as well. For example, it would return '{"key1": "value"}' for input '{"key1": "value", "key2": "This is not JSON"}'.

### jsonStringToObject()

**Summary:** Parses a valid JSON string into a JavaScript object. This function takes a valid JSON string as input and returns a JavaScript object representation of the input string. It throws an error if the input string is not valid JSON. For example, it would return '{key: "value"}' for input '{"key":"value"}'.

### objectToJsonString()

**Summary:** Serializes a JavaScript object into a JSON string. This function takes a JavaScript object as input and returns a JSON string representation of the input object. It throws an error if the input is not a valid JSON object. For example, it would return '{"key":"value"}' for input '{key: "value"}'.

---

[Dale Hurley](https://github.com/dalehurley), at [Dale Hurley Tech](https://dalehurley.com)
                

### Tests for extractJSON

![extractJSON](https://img.shields.io/badge/extractJSON()-4%20passed%2C%200%20failed.-13b285)

### Tests for getJsonEndIndex

![getJsonEndIndex](https://img.shields.io/badge/getJsonEndIndex()-1%20passed%2C%202%20failed.-ff69b4)

### Tests for objectToJsonString

![objectToJsonString](https://img.shields.io/badge/objectToJsonString()-4%20passed%2C%200%20failed.-13b285)

### Tests for removeNonJsonKeys

![removeNonJsonKeys](https://img.shields.io/badge/removeNonJsonKeys()-0%20passed%2C%203%20failed.-ff69b4)

### Tests for replaceTextAfterJson

![replaceTextAfterJson](https://img.shields.io/badge/replaceTextAfterJson()-0%20passed%2C%203%20failed.-ff69b4)

### Tests for replaceTextBeforeJson

![replaceTextBeforeJson](https://img.shields.io/badge/replaceTextBeforeJson()-3%20passed%2C%201%20failed.-ff69b4)

### Tests for isJSON

![isJSON](https://img.shields.io/badge/isJSON()-2%20passed%2C%200%20failed.-13b285)

### Tests for jsonStringToObject

![jsonStringToObject](https://img.shields.io/badge/jsonStringToObject()-3%20passed%2C%200%20failed.-13b285)

### Tests for getJsonStartIndex

![getJsonStartIndex](https://img.shields.io/badge/getJsonStartIndex()-3%20passed%2C%201%20failed.-ff69b4)

### Tests for trimTextAroundJson

![trimTextAroundJson](https://img.shields.io/badge/trimTextAroundJson()-4%20passed%2C%200%20failed.-13b285)