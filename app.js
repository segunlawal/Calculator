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
    if(b==0){return 1;}
    else{
    for(i=0; i<=b; ++i){
        exp*=a;
    }
    return exp;}
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
    topscreen.textContent = '';
}

var topscreen = document.querySelector('.top-screen');
var t;
var w;
var operator;
function getFirstInput(a){
    t = screen.textContent;
    operator = a;
    screen.textContent = '';
    topscreen.textContent = t + operator;
}
function isEqualTo(){
    w = screen.textContent;
    var ans = operate(operator, parseInt(t), parseInt(w));
    topscreen.textContent = t + operator + w  + '=';
    screen.textContent = ans;
}

