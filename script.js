let a = 0;
let b =  0;
let operator = '';
const intArray = [];
popResult(0);


add = (a, b) => { popResult(a + b); intArray.push(a + b); };

subtract = (a, b) => { popResult(a - b); intArray.push(a - b); };

multiply = (a, b) => { popResult(a * b); intArray.push( a * b); };

divide = (a, b) => { popResult(a / b); intArray.push( a / b); };



//calls one of the above math functions and applies them to a and b
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
//stores the value generated by number buttons
let displayValue = 0;


 //function arrayToNums() {
 // let operand1 = intArray[0];
 // let operand2 = intArray[1];
//  a = operand1;
 // b = operand2;

 // console.log(a, b);
//}




let button = document.querySelectorAll('div.buttonContainer button');  // returns nodelist of buttons inside buttonContainer
   for(let i = 0; i < button.length; i++) {
   button[i].addEventListener('click', function() {                   // iterates through nodelist returning index position of buttons
      switch (i) {
      case 0 : 
            
               displayValue = 7;
               intArray.push(7)  
               popResult(7) 
                                                   // uses index position to assign a value to displayValue
      break;
      case 1 : 
               displayValue = 8;
               intArray.push(8);
               popResult(8)
               

      break;
      case 2 : displayValue = 9;
               intArray.push(9);
               popResult(9);
      break;
      case 3 : operator = 'divide';
      break;
      case 4 : displayValue = 4;
               intArray.push(4);
               popResult(4);
      break;
      case 5 : displayValue = 5;
               intArray.push(5);
               popResult(5);
      break;
      case 6 : displayValue = 6;
               intArray.push(6);
               popResult(6);
      break;
      case 7 :
               operator = 'multiply';
      break;
      case 8 : displayValue = 1;
               intArray.push(1);
               popResult(1)
      break;
      case 9 : displayValue = 2;
               intArray.push(2);
               popResult(2)
      break;
      case 10 : displayValue = 3;
                intArray.push(3);
                popResult(3)
      break;
      case 11 : 
                operator = 'subtract';

      break;
      case 12 : displayValue = 0;
                intArray.push(0);
                popResult(0)
      break;
      case 13 : displayValue = '.';
                popResults(".")
      break;
      case 14 : operate(operator)
                console.log(intArray) 
                arrayToNums()       
                
      break;
      case 15 : 
                operator = 'add';
      break;
      case 16 : allClear();
      break; 
   } 
   
}); 
  }  


  
 function popResult(result) {
    document.querySelector('.result').innerHTML = result;
 }



function allClear() {                             
    intArray.length = 0;
    popResult(0);       
   
}

      










