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
    screen.value +=a;
}
function clearScreen(){
    screen.value = '';
}
function deleteOne(){
    var currentScreen = screen.value;
    var x = String(currentScreen).split('');
    var y = x.pop();    
    z = x.join('');
    screen.value = z;
}

var topscreen = document.querySelector('.top-screen');
var t=0;
var w;
var operator;
function getFirstInput(a){
    t = screen.value;
    operator = a;
    screen.value = '';
}
function isEqualTo(){
    if(screen.value==''){screen.value=''}
    else if(t==0){screen.value = screen.value}
    else{
    w = screen.value;
    var ans = operate(operator, parseInt(t), parseInt(w));
    screen.value = ans;}
}
