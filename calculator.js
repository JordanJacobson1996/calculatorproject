const buttons = document.querySelectorAll('button');
let numArr = [];
let opArr = [];
let valueArr = [];

function updateValue (){
    numArr = numArr.join("");
    valueArr.push(parseFloat(numArr));
}


function buttonPress (buttonId){
    switch(buttonId){
        case '0':
            numArr.push('0');
            break;
            
        case '1':
            numArr.push('1');
            break;

        case '2':
            numArr.push('2');
            break;
                
        case '3':
            numArr.push('3');
            break;

        case '4':
            numArr.push('4');
            break;
                
        case '5':
            numArr.push('5');
            break;
    
        case '6':
            numArr.push('6');
            break;
                    
        case '7':
            numArr.push('7');
            break;
        
        case '8':
            numArr.push('8');
            break;
        
        case '9':
            numArr.push('9');
            break; 

        case '.':
            numArr.push('.');
            break;
            
        case '+':
            if (valueArr.length > 0){
                opArr.push('+');
            } else {
                opArr.push('+');
                updateValue(numArr);
                numArr = [];
            }
            break;
        
        case '-':
            if (valueArr.length > 0){
                opArr.push('-');
            } else {
                opArr.push('-');
                updateValue(numArr);
                numArr = [];
            }
            break;
        
        case 'x':
            if (valueArr.length > 0){
                opArr.push('x');
            } else {
                opArr.push('x');
                updateValue(numArr);
                numArr = [];
            }
            break;
            
        case '/':
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


