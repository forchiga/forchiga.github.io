// Function to append a value (number or operator) to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Add the clicked value to the display
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = ''; // Clear the display
}

// Function to calculate the result of the expression in the display
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Use eval to evaluate the mathematical expression
        display.value = eval(display.value);
    } catch (error) {
        // If there's an error (e.g., invalid expression), show "Error"
        display.value = 'Error';
    }
}