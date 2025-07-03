// -------------------------------
// Calculator functions
// -------------------------------



//scope: get input element from the HTML by its ID display and stores it in the variable display; update or read the value from the calculator screen
const display = document.getElementById('display');


//What it does: Appends the number or dot to the current display value.
//Why: When you click a number button, it adds that number to the screen.
function addNumber(num) {
    display.value += num;
}


/*First checks if the display is empty. If so, it stops the function with return to prevent invalid inputs like starting with an operator.
What it does: Gets the last character from the display input using slice(-1).
Why: To check if the last input was already an operator. We don’t want two operators in a row like 5++2.
*/
function operator(op) {
    if (display.value === '') return;
    const lastChar = display.value.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        display.value = display.value.slice(0, -1) + op;
    } else {
        display.value += op;
    }
}


//Clears the calculator display.
function clearDisplay() {
    display.value = '';
}


// Removes the last character from the display.
function deleteLast() {
    display.value = display.value.slice(0, -1);
}


/*
Uses JavaScript’s built-in eval() function to evaluate the string expression (e.g., "5+3*2" → 11).
If there’s an error (like invalid input), it catches it with a try...catch block and displays 'Error'.
*/
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}


