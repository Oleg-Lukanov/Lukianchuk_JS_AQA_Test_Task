# Lukianchuk_JS_AQA_Test_Task

# Interactive Node.js Script

This project is an interactive Node.js script that performs three main tasks:
1. Checks if a number is greater than 7 and prints "Hello" if true.
2. Checks if the entered name matches "John" and prints a personalized greeting or a default message.
3. Accepts an array of numbers and outputs all elements that are multiples of 3.

## Features
- **Interactive Input**: Users are prompted to input a number, a name, an array.
- **Dynamic Processing**: The script dynamically processes inputs and provides appropriate outputs.
- **Real-Time Feedback**: Outputs results immediately after each input.

## Prerequisites
- **Node.js**: Ensure Node.js is installed on your system. You can download it from [Node.js official website](https://nodejs.org).

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/Oleg-Lukanov/Lukianchuk_JS_AQA_Test_Task.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Lukianchuk_JS_AQA_Test_Task
   ```
3. Install dependencies (if any):
   ```bash
   npm install
   ```

## Usage
1. Run the script using Node.js:
   ```bash
   node script.js
   ```

2. Follow the prompts:
   - Enter a number.
   - Enter a name.
   - Enter a list of numbers as a JSON array (e.g., `[1,2,3]`).

3. View the outputs based on your inputs.

### Example Interaction
```
Enter a number: 10
Hello
Enter a name: John
Hello, John
Enter an array of numbers (e.g., [1,2,3]): [3,6,9,10]
Multiples of 3: [ 3, 6, 9 ]
```

## How It Works
- **Number Check**: If the entered number is greater than 7, it prints "Hello."
- **Name Check**: If the name matches "John," it prints "Hello, John." Otherwise, it prints "There is no such name."
- **Array Processing**: Filters numbers that are divisible by 3 and displays them.

## Customization
You can modify the script to:
- Use different greetings or messages.
- Accept additional types of input.
- Extend functionality for other use cases.

## 2. Task
The given sequence [((())()(())]] is incorrect because the brackets are not properly balanced or nested. To fix this sequence:

Corrected sequence: [((())()(())[])]

Changes made:

Added a matching closing ] at the end to pair with the opening [.
Ensured all parentheses "(" have matching closing parentheses ")".
Now the sequence is properly nested and balanced