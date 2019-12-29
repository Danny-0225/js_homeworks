var week = +prompt("введите число от 1 до 7");
var res;
switch (week) {
    case 1 : res = "понедельник"; break ;
    case 2 : res = "вторник"; break ;
    case 3 : res = "среда"; break ;
    case 4 : res = "четверг"; break ;
    case 5 : res = "пятьница"; break ;
    case 6 : res = "суббота"; break ;
    case 7 : res = "воскресенье"; break ;

}
alert (res);







 alert("Введите 3 чисел :D а я вам найду большую из них");
var x = +prompt("x");
var y = +prompt("y");
var z = +prompt("z");
var max;
   /*  max = (x == y && x > z) ? x : z;
    max = (z == y && z > x) ? z : x;
    max = (x == z && x > y) ? x : y;
    max = (x > y && x > z) ? x : y || z;
    max = (y > z && y > x) ? y : z || x;
    max = (z > x && z >) ? z : x || y; */
    if (x > y && x > z) {
        max = x;
    }else {
        if (y > z && y > x) {
            max = y;
        }else {
            max = z; 
        }
    }
alert(max);




alert("Введите 3 чисел :D а я вам найду средную из них");
var x = +prompt("x");
var y = +prompt("y");
var z = +prompt("z");
var sred;
if (x == y || y == z || z == x) {
    sred ="Средного нету";
} else {
    sred = (x > y && x < z) ? x : y || z; 
    sred = (y > z && y < x) ? y : x || z; 
    sred = (z > x && z < y) ? z : y || x; 
}
alert(sred);



var res = +prompt("Введите свой возраст :D а я вам совет дам");
if (res < 18) {
    alert("вам еще учиться и учиться");
} else {
    if (res > 18 && res < 60) {
        alert("вам еще Работать и Работать");
    } else {
        alert("вам уже на пенсию");
    }
}



 var a = +prompt('a');
 var b = +prompt('b');
 var res = a % b;
 var resabsol = a / b;
 if (res = 0) {
     alert('делится ' + resabsol);
 }else {
    alert('делится с остатком ' + resabsol);
 }
 