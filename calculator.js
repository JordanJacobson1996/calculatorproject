const buttons = document.querySelectorAll('button');
let numArr = [];
let opArr = [];
let valueArr = [];

function updateValue (){
    numArr = numArr.join("");
    valueArr.push(parseFloat(numArr));
}

function updateDisplay(buttonId){
    document.getElementById("inputDisplay").textContent += buttonId;
}


function buttonPress (buttonId){
    switch(buttonId){
        case '0':
            updateDisplay (buttonId);
            numArr.push('0');
            break;
            
        case '1':
            updateDisplay (buttonId);
            numArr.push('1');
            break;

        case '2':
            updateDisplay (buttonId)
            numArr.push('2');
            break;
                
        case '3':
            updateDisplay (buttonId)
            numArr.push('3');
            break;

        case '4':
            updateDisplay (buttonId)
            numArr.push('4');
            break;
                
        case '5':
            updateDisplay (buttonId)
            numArr.push('5');
            break;
    
        case '6':
            updateDisplay (buttonId)
            numArr.push('6');
            break;
                    
        case '7':
            updateDisplay (buttonId)
            numArr.push('7');
            break;
        
        case '8':
            updateDisplay (buttonId)
            numArr.push('8');
            break;
        
        case '9':
            updateDisplay (buttonId)
            numArr.push('9');
            break; 

        case '.':
            updateDisplay (buttonId)
            numArr.push('.');
            break;
            
        case '+':
            updateDisplay (buttonId)
            if (valueArr.length > 0){
                opArr.push('+');
            } else {
                opArr.push('+');
                updateValue(numArr);
                numArr = [];
            }
            break;
        
        case '-':
            updateDisplay (buttonId)
            if (valueArr.length > 0){
                opArr.push('-');
            } else {
                opArr.push('-');
                updateValue(numArr);
                numArr = [];
            }
            break;
        
        case 'x':
            updateDisplay (buttonId)
            if (valueArr.length > 0){
                opArr.push('x');
            } else {
                opArr.push('x');
                updateValue(numArr);
                numArr = [];
            }
            break;
            
        case '/':
            updateDisplay (buttonId)
            if (valueArr.length > 0){
                opArr.push('/');
            } else {
                opArr.push('/');
                updateValue(numArr);
                numArr = [];
            }
            break;

        case '=':
            updateValue();
            numArr = [];
            if (opArr.length >= valueArr.length){
                return "error";
            } else {
                for (let i = 0; i < opArr.length; i++){
                    if (opArr[i] === '+'){
                        valueArr.unshift(valueArr[0] + valueArr[1]);
                        valueArr.splice(1, 2);
                    } else if (opArr[i] === '-'){
                        valueArr.unshift(valueArr[0] - valueArr[1]);
                        valueArr.splice(1, 2);
                    } else if (opArr[i] === 'x'){
                        valueArr.unshift(valueArr[0] * valueArr[1]);
                        valueArr.splice(1, 2);
                    } else if (opArr[i] === '/'){
                        valueArr.unshift(valueArr[0] / valueArr[1]);
                        valueArr.splice(1, 2);
                    }
                }
            }
            opArr = [];
            console.log(valueArr);
        }
    }

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        buttonPress(button.id);
    });
});


