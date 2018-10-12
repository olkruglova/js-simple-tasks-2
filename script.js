
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