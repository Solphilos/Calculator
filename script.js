
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



//calls one of the above math functions and applies them to a and b
operate = (operator) => {   // the operator works only on the first and second item in array
    
   if (operator === 'multiply') {
       multiply(intArray[0], intArray[1]);     // chain equations: find way add last item pushed to array (result of first equation) as part of the equation; i.e: 4x4=8+2=10
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


// creates a string of numbers, to be converted to integer and pushed into an array

function pressToString(thisValue) {
   displayValue += thisValue;
}

// converts string to an integer, to be pushed to an array

function stringToInt() {
   newValue = parseInt(displayValue);
   console.log(newValue);
}

function pushToArray() {
   if (intArray.length === 0) {
      intArray.push(newValue);
   }
    console.log(intArray);
    displayValue = '';
    newValue = 0;
}


let button = document.querySelectorAll('div.buttonContainer button');  // returns nodelist of buttons inside buttonContainer
   for(let i = 0; i < button.length; i++) {
   button[i].addEventListener('click', function() {                   // iterates through nodelist returning index position of buttons
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
      case 7 :
               operator = 'multiply';
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
      case 11 : 
                operator = 'subtract';
                pushToArray();

      break;
      case 12 : pressToString('0');
                stringToInt();
                popResult(newValue)
      break;
      case 13 : displayValue = '.';
                popResult(".")
      break;    
      case 14 : intArray.push(newValue)
                operate(operator)
                console.log(intArray) 
                      
                
      break;
      case 15 : operator = 'add';
                pushToArray();
               
                                


      break;
      case 16 : allClear();
      break; 
   } 
   
}); 
  }  


  
 function popResult(result) {
    document.querySelector('.result').innerHTML = result;
       // populates display with chosen number, but replaces previous numbers. 
 }                                                           // find solution that makes typing double digits possible. i.e; 22, 45, 89, 10, etc.



function allClear() {                             
    intArray.length = 0;
    popResult(0);  
    newValue = 0;     
    displayValue = '';
}

      


