/* GLOBALS */
var value1 = "";
var value2 = "";
var math = "";
var result = "";

function show(obj) {
    var display = document.getElementById("display");
    display.innerHTML = obj;
}

function clear() {
    var display = document.getElementById("display");
    display.innerHTML = 0;
    value1 = "";
    value2 = "";
    result = "";
}

function calc(operator) {
    if (value1 != "" && result != "" && math != "" && operator === "=") {
        value2 = result;
        operator = math;
        if (operator === "+") { result = parseFloat(value1) + parseFloat(value2); }
        if (operator === "-") { result = parseFloat(value1) - parseFloat(value2); }
        if (operator === "*") { result = parseFloat(value1) * parseFloat(value2); }
        if (operator === "/") { result = parseFloat(value1) / parseFloat(value2); }
        show(result);
        value1 = "";
        result = "";
        value2 = "";
        math = "";
    }
    if (value1 === "" && result != "") {
        value1 = result;
        result = "";
        show(operator);
        math = operator;
    } else {
        if (value2 === "" && result != "") {
            value2 = result;
            if (operator === "+") { result = parseFloat(value1) + parseFloat(value2); }
            if (operator === "-") { result = parseFloat(value1) - parseFloat(value2); }
            if (operator === "*") { result = parseFloat(value1) * parseFloat(value2); }
            if (operator === "/") { result = parseFloat(value1) / parseFloat(value2); }
            show(result);
            value1 = result;
            result = "";
            value2 = "";
        }
    }    
}


window.onload = function() {
    /* NUMBERS */
    var btn0 = document.getElementById("btn0");
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var btn4 = document.getElementById("btn4");
    var btn5 = document.getElementById("btn5");
    var btn6 = document.getElementById("btn6");
    var btn7 = document.getElementById("btn7");
    var btn8 = document.getElementById("btn8");
    var btn9 = document.getElementById("btn9");
    /* FUNCTIONS */
    var btnClear = document.getElementById("btnFunctionClear");
    var btnInvert = document.getElementById("btnFunctionInvert");
    var btnPercentage = document.getElementById("btnFunctionPercentage");
    /* CALCULATIONS */
    var btnDivide = document.getElementById("btnCalcDivide");
    var btnMultiply = document.getElementById("btnCalcMultiply");
    var btnMinus = document.getElementById("btnCalcMinus");
    var btnSum = document.getElementById("btnCalcSum");
    var btnEqual = document.getElementById("btnCalcEqual");
    /* SEPARATORS */
    var btnComma = document.getElementById("btnComma");

    show(0);

    btnClear.onclick = function() { clear(); }
    btn0.onclick = function() {result += ""+0;show(result);}
    btn1.onclick = function() {result += ""+1;show(result);}
    btn2.onclick = function() {result += ""+2;show(result);}
    btn3.onclick = function() {result += ""+3;show(result);}
    btn4.onclick = function() {result += ""+4;show(result);}
    btn5.onclick = function() {result += ""+5;show(result);}
    btn6.onclick = function() {result += ""+6;show(result);}
    btn7.onclick = function() {result += ""+7;show(result);}
    btn8.onclick = function() {result += ""+8;show(result);}
    btn9.onclick = function() {result += ""+9;show(result);}
    btnComma.onclick = function() {result = result.replace(/\./g, ""); result += ""+".";show(result);}

    /* MATHS BUTTON */
    btnDivide.onclick = function()      { calc("/"); }
    btnMultiply.onclick = function()    { calc("*"); }
    btnMinus.onclick = function()       { calc("-"); }
    btnSum.onclick = function()         { calc("+"); }
    btnEqual.onclick = function()       { calc("="); }
}