function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}
function exponent(a,b){
    var exp=1;
    for(i=0; i<=b; ++i){
        exp*=a;
    }
    return exp;
}
function sqrt(a){
    var squareroot = Math.sqrt(a);
    return squareroot;
}

function operate(operator, a, b){
    switch(operator){
        case '+': return add(a,b);
        case '-': return subtract(a,b);
        case '*': return multiply(a,b);
        case '/': return divide(a,b);
        case '^': return exponent(a,b);
    }
}

var screen = document.querySelector('.screen')
function display(a){
    screen.textContent +=a; 
}
function clearScreen(){
    screen.textContent = '';
    topscreen.textContent = '';
}
function deleteOne(){
    var currentScreen = screen.textContent;
    var x = String(currentScreen).split('');
    var y = x.pop();    
    z = x.join('');
    screen.textContent = z;
}

var topscreen = document.querySelector('.top-screen');
var t;
var operator;
function getFirstInput(a){
    t = screen.textContent;
    var operator = a;
    clearScreen();
    return t;
}
//   topscreen.textContent = (screen.textContent) + a;

// var getFirstInput = getFirstInput();
// var t = getFirstInput[0];
// var operator = getFirstInput[1];
function isEqualTo(){
    w = screen.textContent;
    // console.log(w);
    // console.log(t);
    // console.log(operator);
}
