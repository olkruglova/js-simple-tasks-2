
/*
task1: Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный
*/
var num = document.querySelector('.input1');
num.addEventListener('blur', func);
function func() {
    var number = num.value;
    number = parseInt(number);
    console.log(number);
    if (number > 0 && number <= 100) {
        num.style.backgroundColor = 'green';
    } else {
        num.style.backgroundColor = 'red';
    }
}
/*
task2:Дан инпут. Выделите любой текст на странице. По окончанию выделения этот текст должен записаться в этот инпут
*/
var p = document.querySelector('.text');
p.addEventListener('mouseup', func);
var inp = document.querySelector('textarea');
function func() {
	var content = window.getSelection().toString();
	inp.value = content;
}
/*
task3: Даны абзацы с числами. По нажатию на кнопку найдите абзац, в котором хранится максимальное число, и сделайте его красного цвета
*/
var p = document.querySelectorAll('.ak');
var btn1 = document.querySelector('.btn1');
var num = [];
var largest = 0;
btn1.onclick = function () {
    for (i=0;i<p.length;i++){
        num += p[i].innerHTML + ',';
        console.log(num);
        num = num.split(',');
        console.log(num);
        largest =  Math.max.apply(Math, num);
        console.log(largest);
    }
    if (p.innerHTML == largest){
        p.style.backgroundColor = 'red';
    }
}