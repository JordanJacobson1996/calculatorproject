const buttons = document.querySelectorAll('button');

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

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        console.log(button.id);
    });
});