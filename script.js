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
Модифицируйте предыдущую задачу так, чтобы был еще один инпут, в котором задаются символы, из которых формируется эта случайна строка. Символы задаются без всяких разделитетей, в одну строку
*/
var output = document.getElementById('result2');
var input = document.getElementById('result1');
var inputLet = document.getElementById('inputLet');
var gen = document.querySelector('.btn2');
gen.addEventListener('click', funcGen);
function funcGen() {
    var str = '';
	var symbols = inputLet.value;
	for(var i = 0; i < input.value; i++){
		str += symbols.charAt(Math.floor(Math.random() * symbols.length));
		output.value = str;
	}
}
/*
task7: Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа. Когда отсчет дойдет до нуля - он должен закончится
*/
var st = document.getElementById('inputLicz');
 function funcGo(){
    window.funcStart = window.setInterval(countdown, 1000);
}
function countdown(){
    st.value -= 1;
    if (st.value == 0) {
        stop();
    }
}
function stop() {
	window.clearInterval(window.funcStart);
}
/*
task8: Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.
*/
(function(){
    var textColor = document.querySelector('.textColor');
     window.setInterval(red, 1000);
    function red () {
        textColor.style.color = "red";
        setTimeout(yellow,1000);
    function yellow () {
        textColor.style.color = "yellow";
        setTimeout(green,1000);
    }
    function green () {
        textColor.style.color = "green";
        setTimeout(blue,1000);
    }
    function blue () {
        textColor.style.color = "lightblue";
        setTimeout(red,1000);
    }
}
})();
/*
task9: Дан абзац. Дан массив цветов ['red', 'green', 'blue']. Сделайте так, чтобы каждую секунду абзац менял свой цвет на определенное значение их массива: сначала 'red', потом 'green' и так далее. Как только цвета в массиве закончатся - все начнется сначала. Количество цветов в массиве может быть любым
*/
(function(){
    let color = document.getElementById('color');
     window.setInterval(changeColor, 1000);
     let colors = ['grey', 'yellow', 'blue', 'red', 'green', 'orange'];
    let i = 0;
     function changeColor () {
        color.style.color = colors[i];
        i++;
        if (i >= colors.length) {
            i = 0;
        }
}
})();
/*
task10: Дан абзац. Дан массив строк ['один', 'два', 'три']. Под абзацем ссылка 'следующая строка'. По заходу на страницу в абзаце должен стоять нулевой элемент этого массива, а по нажатию на ссылку - вставлятся следующий элемент.
*/
(function(){
    let outputs = document.querySelector('.zdanie');
    let zdania = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu enim ullamcorper, rutrum diam vel, dictum tortor.',
            'Integer et orci consectetur, rutrum augue id, volutpat urna.',
            'Aliquam venenatis eget dui vel condimentum.',
            'Maecenas vitae sollicitudin lacus. Aenean vestibulum enim id diam molestie, eu porttitor erat tempus.',
            'Morbi ut quam luctus, ornare augue vestibulum, euismod dolor. Suspendisse consequat non odio vitae tincidunt.',
            'Vivamus odio quam, pulvinar nec mattis at, sollicitudin posuere nulla. Nam lectus leo, sagittis non augue et, consequat egestas tortor.',
            'Praesent consequat interdum mi, quis congue lorem malesuada ac. Sed pretium, diam at posuere pretium, mi lorem vestibulum neque, vel eleifend tortor urna ac lectus.',
            'Vestibulum congue est vitae nisi euismod, ut vehicula sem luctus. Vivamus sed gravida elit.']
    let content = outputs.innerHTML = zdania[0];
    let i = 1;
    let butt = document.querySelector('.btn3');
    butt.onclick = function(){
        content = outputs.innerHTML = zdania[i];
        i+=1;
        if (i>=zdania.length) {
            i = 0;
        }
    }
})();
/*
task11: Даны инпуты с числами. Произвольное количетсво, пусть три. В первый инпут запишите 1, через секунду во второй инпут запишите 2, еще через секунду в третий инпут 3, потом через секунду в первый инпут запишите 4, во второй 5 и так далее до бесконечности
*/
(function (){
    let input = document.querySelectorAll('.input9');
     window.setInterval(func, 1000);
    var num = 1;
    var i = 0;
    function func() {
        input[i].value = num;
        num++;
        i++;
        if ( i >= input.length) {
            i = 0;
        }
    }
})();
