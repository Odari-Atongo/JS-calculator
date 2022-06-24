// The program first asks the user for a first number and stores it in a variable
// It then asks for the mathematical operation to be performed
// The program prompts the user for the second number
// If the arithmetical operation chosen is Addition (+) add the first number and the second number
// else if Substraction is chosen , substract fisrt number from second number
// else if Multiplication is chosen , multiply the first number with the second number
// else Division is chosen , Divide the second number from the first number
// It the character entered is not a number , display a warning

// Ask the user for the first number 
let firstNumber = Number(prompt("Enter first number:"));
// Ask the user for a second number 
let secondNumber = Number(prompt("Enter second number:"));
// Ask the mathematical operation to be performed by the user 
let operator = prompt("Enter arithmetic operation to be performed (+, -, /, x):");
// State the conditions which performs addition, multiplication, substraction and division according to th user input
if (operator == "+") {
    alert(firstNumber + secondNumber)
} else if (operator == "-") {
    alert(firstNumber - secondNumber)
} else if (operator == "/") {
    alert(firstNumber / secondNumber)
} else if(operator=="*"){
    alert(firstNumber * secondNumber)
} else if(typeof firstNumber != 'number') {
    alert("Your second input is not a number")
}else if(typeof secondNumber != 'number') {
    alert("Your second input is not a number")
} else {
    alert("Invalid operator")
}