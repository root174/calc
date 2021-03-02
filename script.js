let lastOperand = 0;
let operation = null;
function ready()
{inputWindow.value = '0';}


const inputWindow = document.getElementById('inputWindow');

document.addEventListener("DOMContentLoaded", ready);


console.log(inputWindow);
document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value ='';    
    inputWindow.value += '1';
})
document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value ='';
    inputWindow.value += '2';
})
document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.value ='';
    inputWindow.value += '3';
})
document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value ='';
    inputWindow.value += '4';
})
document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value ='';
    inputWindow.value += '5';
})
document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value ='';
    inputWindow.value += '6';
})
document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value ='';
    inputWindow.value += '7';
})
document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value ='';
    inputWindow.value += '8';
})
document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.value ='';
    inputWindow.value += '9';
})
document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value ='';
    inputWindow.value += '0';
})
document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value='';
    //console.log(operation);
   // console.log(lastOperand);
})

document.getElementById('btn_division').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'division';
    inputWindow.value='';
    //console.log(operation);
   // console.log(lastOperand);
})
document.getElementById('btn_multiplication').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'multiplicationsum';
    inputWindow.value='';
    //console.log(operation);
   // console.log(lastOperand);
})
document.getElementById('btn_sqrt').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sqrt';
    const result = Math.sqrt(lastOperand);
            operation = null;
            lastOperand = 0;
            inputWindow.value = result;
    //console.log(operation);
   // console.log(lastOperand);
})

document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'def';
    inputWindow.value='';
    //console.log(operation);
   // console.log(lastOperand);
})

document.getElementById('btn_calc').addEventListener('click', function () {
   if (operation === 'sum')
        {const result = lastOperand + parseInt(inputWindow.value);
            operation = null;
            lastOperand = 0;
            inputWindow.value = result;
        }
    if (operation === 'def')
        {const result = lastOperand - parseInt(inputWindow.value);
            operation = null;
            lastOperand = 0;
            inputWindow.value = result;
        }
        if (operation === 'multiplicationsum')
        {const result = lastOperand * parseInt(inputWindow.value);
            operation = null;
            lastOperand = 0;
            inputWindow.value = result;
        }
        if (operation === 'division')
        {const result = lastOperand / parseInt(inputWindow.value);
            operation = null;
            lastOperand = 0;
            inputWindow.value = result;
        }
        if (operation === 'sqrt')
        {const result = Math.sqrt(lastOperand);
            operation = null;
            lastOperand = 0;
            inputWindow.value = result;
        }

})

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
})

