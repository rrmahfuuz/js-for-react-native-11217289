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
