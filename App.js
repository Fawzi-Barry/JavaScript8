// 1 Write a function that takes an array of numbers and returns a new array with each number doubled. Use the for...of loop to iterate through the array.
function doubleArray(arr) {
    let doubledArray = [];
    for (let num of arr) {
        doubledArray.push(num * 2);
    }
    return doubledArray;
}

// Example
console.log(doubleArray([1, 2, 3, 4]));


// 2 Write a function that takes an object and prints its keys and values to the console. Use the for...in loop to iterate through the object properties.

function printObject(obj) {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

// Example
let exampleObj = { name: "Fawzi", age: 24, city: "Yemen" };
printObject(exampleObj);


// 3 Write a function that takes an array of strings and prints each string to the console with a delay of 1 second between each print. Use setTimeout() to achieve the delay.

function printStringsWithDelay(arr) {
    arr.forEach((str, index) => {
        setTimeout(() => {
            console.log(str);
        }, index * 1000);  // Delay increases with each string
    });
}

// Example
printStringsWithDelay(["Hello", "World", "This", "Is", "A", "Delay"]);

