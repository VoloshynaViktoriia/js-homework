function getUserNumber(message) {
    return Number(prompt(message));
}

function quadraticEquation (a,b,c) {
    var d = b*b - 4 * a * c;
    var x1 = (-b + Math.sqrt(d)) / (2 * a);
    var x2 = (-b - Math.sqrt(d)) / (2 * a);
    alert(x1 + ' ' + x2);
}

var a = getUserNumber('введіть чило a \n (a не повинно дорвінюваиі 0)');
var b = getUserNumber('введіть чило b');
var c = getUserNumber('введіть чило c');

if (a===0) {
    alert('некоректне значення. \n a не повинно дорвінюваиі 0')
} else {
    quadraticEquation(a, b, c);
}
