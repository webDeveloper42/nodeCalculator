var rs = require('readline-sync');
// Ask the user, "What operation would you like to perform?"
// Then the user enters one of these options: "/" "*" "-" "+"
// If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
// After the user enters a valid operation, ask the user, "Please enter the first number"
// The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
// After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
// Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result
// For example, if the user entered addition "+" and the first number was 3 and the second number was 4, the result printed would be: "The result is 7"

// NOTE: Please do not use the `eval()` method - it is never recommended.

while(true){
    console.log('Operations: + - * /')
    // Ask the user, "What operation would you like to perform?"
    var operation = rs.question('Which operation would you like to perform?');
    // If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
    if(operation === '+' || operation === '-' || operation === '*' || operation === '/'){
        break;
        // If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
    }else{
        console.log('This is not a valid operation.');
    }
}
console.log(operation);

while(true){
    // After the user enters a valid operation, ask the user, "Please enter the first number"
    var firstNum = rs.question('Please enter the first number: ');
    // The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
    if(firstNum === '' || isNaN(firstNum)){
        console.log('This is not a number.')
    }else{
        break;
    }
    
}
console.log(firstNum);
while(true){
    // After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
    var secondNum = rs.question('Please enter the second number: ');
    if(secondNum === '' || isNaN(secondNum)){
        console.log('This is not a number.')
    }else{
        break;
    }
}
console.log(secondNum);
// Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result
function add(){
    var result = parseFloat(firstNum) + parseFloat(secondNum);
    console.log('The result is: ' + result);
}
function subtract(){
    var greatestNum = Math.max(firstNum , secondNum);
    var lowestNum = Math.min(firstNum , secondNum);
    var result = parseFloat(greatestNum) - parseFloat(lowestNum);
    console.log('The result from ' + parseFloat(greatestNum) + '-' + parseFloat(lowestNum) + ' is: '  + result);
}
function multiply(){
    var result = parseFloat(firstNum) * parseFloat(secondNum);
    console.log('The result from is: ' + result);
}
function divide(){
    var greatestNum = Math.max(firstNum , secondNum);
    var lowestNum = Math.min(firstNum , secondNum);
    var result = parseFloat(greatestNum) / parseFloat(lowestNum);
    var resultTwo = firstNum / secondNum;
    console.log('The result from ' + parseFloat(greatestNum) + '/' + parseFloat(lowestNum) + ' is: '  + result);
    console.log('The result from ' + firstNum + '/' + secondNum + ' is: '  + resultTwo);
}


if(operation === '+'){
    add();
}else if(operation === '-'){
    subtract();
}else if(operation === '*'){
    multiply();
}else if(operation === '/'){
    divide();
}