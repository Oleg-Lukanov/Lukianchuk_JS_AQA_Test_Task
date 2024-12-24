const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkNumber(inputNumber) {
    if (inputNumber > 7) {
        console.log("Hello");
    }
}

function checkName(inputName) {
    if (inputName === "John") {
        console.log("Hello, John");
    } else {
        console.log("There is no such name");
    }
}

function findMultiplesOfThree(inputArray) {
    const multiples = inputArray.filter(num => num % 3 === 0);
    console.log("Multiples of 3:", multiples);
}

readline.question("Enter number: ", (number) => {
    checkNumber(Number(number)); 
    
    readline.question("Enter name: ", (name) => {
        checkName(name); 
        
        readline.question("Enter an array of numbers (e.g. [1,2,3]): ", (array) => {
            try {
                const numArray = JSON.parse(array);
                if (!Array.isArray(numArray)) {
                    throw new Error("Input is not an array");
                }
                findMultiplesOfThree(numArray); 
            } catch (err) {
                console.log("Invalid array format. Please enter a valid array (e.g., [1,2,3]).");
            }
            readline.close(); 
        });
    });
});
