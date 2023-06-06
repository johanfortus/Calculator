let clearButton = document.querySelector('.clearButton')
let plusButton = document.querySelector('.plusButton')
let minusButton = document.querySelector('.minusButton')
let multiplyButton = document.querySelector('.multiplyButton')
let divideButton = document.querySelector('.divideButton')
let equalButton = document.querySelector('.equalButton')

let decimalButton = document.querySelector('.decimalButton')
let zeroButton = document.querySelector('.zeroButton')
let oneButton = document.querySelector('.oneButton')
let twoButton = document.querySelector('.twoButton')
let threeButton = document.querySelector('.threeButton')
let fourButton = document.querySelector('.fourButton')
let fiveButton = document.querySelector('.fiveButton')
let sixButton = document.querySelector('.sixButton')
let sevenButton = document.querySelector('.sevenButton')
let eightButton = document.querySelector('.eightButton')
let nineButton = document.querySelector('.nineButton')

let input = document.querySelector('input')


// Function Buttons
clearButton.addEventListener('click',function(e){
    input.value = ''
})
plusButton.addEventListener('click', function(e){
    let currentValue = input.value 
    let newValue = currentValue + '+'
    input.value = newValue
})
minusButton.addEventListener('click', function(e){
    let currentValue = input.value 
    let newValue = currentValue + '-'
    input.value = newValue
})
multiplyButton.addEventListener('click', function(e){
    let currentValue = input.value 
    let newValue = currentValue + '*'
    input.value = newValue
})
divideButton.addEventListener('click', function(e){
    let currentValue = input.value 
    let newValue = currentValue + '/'
    input.value = newValue
})
equalButton.addEventListener('click', function(e){
    let sum = input.value
    let answer = eval(sum)
    input.value = answer
})



// Number Buttons
decimalButton.addEventListener('click', function(e){
    let currentValue = input.value;
    let newValue = currentValue + '.'; 

    input.value = newValue; 
})
zeroButton.addEventListener('click', function(e){
    let currentValue = input.value;
    let newValue = currentValue + 0; 

    input.value = newValue; 
})
oneButton.addEventListener('click', function(e){
    let currentValue = input.value;
    let newValue = currentValue + 1; 

    input.value = newValue; 
})
twoButton.addEventListener('click', function(e){
    let currentValue = input.value;
    let newValue = currentValue + 2; 

    input.value = newValue; 
})
threeButton.addEventListener('click', function(e){
    let currentValue = input.value;
    let newValue = currentValue + 3; 

    input.value = newValue; 
})
fourButton.addEventListener('click', function(e){
    let currentValue = input.value;
    let newValue = currentValue + 4; 

    input.value = newValue; 
})
fiveButton.addEventListener('click', function(e){
    let currentValue = input.value;
    let newValue = currentValue + 5; 

    input.value = newValue; 
})
sixButton.addEventListener('click', function(e){
    let currentValue = input.value;
    let newValue = currentValue + 6; 

    input.value = newValue; 
})
sevenButton.addEventListener('click', function(e){
    let currentValue = input.value;
    let newValue = currentValue + 7; 

    input.value = newValue; 
})
eightButton.addEventListener('click', function(e){
    let currentValue = input.value;
    let newValue = currentValue + 8; 

    input.value = newValue; 
})
nineButton.addEventListener('click', function(e){
    let currentValue = input.value;
    let newValue = currentValue + 9; 

    input.value = newValue; 
})

