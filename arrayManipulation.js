function processArray(array) {
    // Check if the input is an array
    if (!Array.isArray(array)) {
        throw new TypeError('Input should be an array of numbers');
    }

    // Create a new array with the processed numbers
    return array.map(num => {
        if (typeof num !== 'number') {
            throw new TypeError('All elements in the array should be numbers');
        }
        return (num % 2 === 0) ? num * num : num * 3;
    });
}

const numbers = [1, 2, 3, 4, 5, 6];
const processedNumbers = processArray(numbers);
console.log(processedNumbers); // Output: [3, 4, 9, 16, 15, 36]
module.exports = { processArray };

function processArray(array) {
    // Check if the input is an array
    if (!Array.isArray(array)) {
        throw new TypeError('Input should be an array of numbers');
    }

    
    return array.map(num => {
        if (typeof num !== 'number') {
            throw new TypeError('All elements in the array should be numbers');
        }
        return (num % 2 === 0) ? num * num : num * 3;
    });
}

function formatArrayStrings(strings, numbers) {
    if (!Array.isArray(strings) || !Array.isArray(numbers)) {
        throw new TypeError('Both inputs should be arrays');
    }

    
    if (strings.length !== numbers.length) {
        throw new Error('Both arrays must have the same length');
    }

    return strings.map((str, index) => {
        if (typeof str !== 'string' || typeof numbers[index] !== 'number') {
            throw new TypeError('Elements of the first array should be strings and elements of the second array should be numbers');
        }
        return (numbers[index] % 2 === 0) ? str.toUpperCase() : str.toLowerCase();
    });
}


const numbersx = [1, 2, 3, 4, 5, 6];
const processedNumbersx = processArray(numbers);
console.log(processedNumbers); // Output: [3, 4, 9, 16, 15, 36]

const strings = ["Hello", "World", "This", "Is", "A", "Test"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings); // Output: ["hello", "WORLD", "this", "IS", "a", "TEST"]

module.exports = { processArray, formatArrayStrings };
