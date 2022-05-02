const buttons = document.querySelectorAll('button');
let numArr = [];
let opArr = [];

function add (num1, num2){
    return num1 + num2;
}

function subtract (num1, num2){
    return num1 - num2;
}

function multiply (num1, num2){
    return num1 * num2;
}

function divide (num1, num2){
    return num1/num2;
}

function buttonPress (buttonId){
    switch(buttonId){
        case '0':
            numArr.push(0);
            break;
            
        case '1':
            numArr.push(1);
            break;

        case '2':
            numArr.push(2);
            break;
                
        case '3':
            numArr.push(3);
            break;

        case '4':
            numArr.push(4);
            break;
                
        case '5':
            numArr.push(5);
            break;
    
        case '6':
            numArr.push(6);
            break;
                    
        case '7':
            numArr.push(7);
            break;
        
        case '8':
            numArr.push(8);
            break;
        
        case '9':
            numArr.push(9);
            break; 

        case '.':
            numArr.push('.');
            break;
            
        case '+':
            opArr.push('+');
            break;
        
        case '-':
            opArr.push('-');
            break;
        
        case 'X':
            opArr.push('x');
            break;
            
        case '/':
            opArr.push('/');
            break;
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        buttonPress(button.id);
    });
});
