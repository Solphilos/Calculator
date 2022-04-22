
let a = 0;
let b =  0;
let operator = '';
const intArray = [];
let displayValue = '';
let newValue = 0;

popResult(0);




add = (a, b) => { popResult(a + b); intArray.length = 0; intArray.push( a + b ); };

subtract = (a, b) => { popResult(a - b); intArray.length = 0; intArray.push( a - b ); };

multiply = (a, b) => { popResult(a * b); intArray.length = 0; intArray.push( a * b ); };

divide = (a, b) => { popResult(a / b); intArray.length = 0; intArray.push( a / b ); };



// populates the display with given number values

function popResult(result) {
   let rounded = Math.round(result * 10000) / 10000;
   document.querySelector('.result').innerHTML = rounded;
      
}                                                           

// resets variables and empties array in order to clear display and start equations anew

function allClear() {                             
   intArray.length = 0;
   popResult(0);  
   newValue = 0;     
   displayValue = '';
}

// creates a string of numbers, to be converted to integer and pushed into an array

function pressToString(thisValue) {
   displayValue += thisValue;
}

// converts string to an integer, to be pushed to an array

function stringToInt() {
   if (Number.isInteger(newValue)) {
   newValue = parseInt(displayValue);
   }
   else {
       newValue = parseFloat(displayValue);
   
   } 
}

// rounds newValue(number) to fourth decimal place then pushes number to array. 

function pushToArray() {
   if (intArray.length === 0) {
      let rounded = Math.round(newValue * 10000) / 10000;
      intArray.push(rounded);
   }
    displayValue = '';
    newValue = 0;
}




// calls one of the above math functions and applies them to a and b

operate = (operator) => {   
    
   if (operator === 'multiply') {
       multiply(intArray[0], intArray[1]);     
    }
   else if (operator === 'add') {
      add(intArray[0], intArray[1]);
   }
   else if (operator === 'subtract') {
      subtract(intArray[0], intArray[1]);
   }
   else if (operator === 'divide') {
      divide(intArray[0], intArray[1]);
   }
 }




let button = document.querySelectorAll('div.buttonContainer button');  // returns nodelist of buttons inside buttonContainer
   for(let i = 0; i < button.length; i++) {
   button[i].addEventListener('click', function() {                   // iterates through nodelist returning index position of buttons ( case 0-16 )
      switch (i) {

      case 0 : pressToString('7');
               stringToInt();
               popResult(newValue)
      break;
      case 1 : pressToString('8');
               stringToInt();
               popResult(newValue)
      break;
      case 2 : pressToString('9');
               stringToInt();
               popResult(newValue)
      break;
      case 3 : operator = 'divide';
               pushToArray();
      break;
      case 4 : pressToString('4');
               stringToInt();
               popResult(newValue)
      break;
      case 5 : pressToString('5');
               stringToInt();
               popResult(newValue)
      break;
      case 6 : pressToString('6');
               stringToInt();
               popResult(newValue)
      break;
      case 7 : operator = 'multiply';
               pushToArray();
      break;
      case 8 : pressToString('1');
               stringToInt();
               popResult(newValue)
      break;
      case 9 : pressToString('2');
               stringToInt();
               popResult(newValue)
      break;
      case 10 : pressToString('3');
                stringToInt();
                popResult(newValue)
                
      break;
      case 11 : operator = 'subtract';
                pushToArray();
      break;
      case 12 : pressToString('0');
                stringToInt();
                popResult(newValue)
      break;
      case 13 :  pressToString('.');
                 newValue += `.`
                 popResult(newValue);
                 
      break;    
      case 14 : intArray.push(newValue);
                operate(operator);
                
      break;
      case 15 : operator = 'add';
                pushToArray();
      break;
      case 16 : allClear();
      break;
      default : popResult(0);
} }); 
 }  


  
 
      


