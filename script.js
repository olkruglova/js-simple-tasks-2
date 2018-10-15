
/*
task1: Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный
*/
var numb = document.querySelector('.input1');
numb.addEventListener('blur',
function func() {
    var number = numb.value;
    number = parseInt(number);
    console.log(number);
    if (number > 0 && number <= 100) {
        numb.style.backgroundColor = 'green';
    } else {
        numb.style.backgroundColor = 'red';
    }
})
/*
task2:Дан инпут. Выделите любой текст на странице. По окончанию выделения этот текст должен записаться в этот инпут
*/
var par = document.querySelector('.text');
par.addEventListener('mouseup', myFunc);
var inp = document.querySelector('textarea');
function myFunc() {
	var content = window.getSelection().toString();
	inp.value = content;
}
/*
task3: Даны абзацы с числами. По нажатию на кнопку найдите абзац, в котором хранится максимальное число, и сделайте его красного цвета
*/
var p = document.querySelectorAll('.ak');
var btn1 = document.querySelector('.btn1');
var num =[];
var largest = 0;
btn1.onclick = function () {
    for (i=0;i<p.length;i++){
        num += p[i].innerHTML + ',';
        num = num.split(',');
        }
    largest =  Math.max.apply(Math, num);
    console.log(largest);

    for (i=0;i<p.length;i++){
        if (p.innerHTML == largest){
            p.style.backgroundColor = 'red';
    }
}
}
/*
task4: Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам. 
*/
var parag = document.querySelectorAll('.akap');
var result = document.querySelector('.input3');

for (i=0;i<parag.length;i++){
    parag[i].addEventListener('click', func)
}
var numberOfClicks = 0;
function func(){
        numberOfClicks ++;
        result.value = numberOfClicks;
}

/*
task5: Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.
*/
var dano = document.getElementById('result');

function start() {
	window.setInterval(timer, 1000);
}

function timer() {
	dano.value = dano.value * dano.value;
}
/*
task6: Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.
Модифицируйте предыдущую задачу так, чтобы был еще один инпут, в котором задается длина случайной строки
*/

var output = document.getElementById('result2');
var input = document.getElementById('result1');
var gen = document.querySelector('.btn2');
gen.addEventListener('click', funcGen);

function funcGen() {
	var str = '';
	var symbols = '0123456789qwertyuiopasdfghjklzxcvbnm';
	for(var i = 0; i < input.value; i++){
		str += symbols.charAt(Math.floor(Math.random() * symbols.length));
		output.value = str;
	}
}
