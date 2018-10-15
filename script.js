
/*
task1: Дана ссылка. Дан чекбокс. По нажатию на ссылку меняйте состояние чекбокса с отмеченного на неотмеченное и наоборот
*/
var klik = document.querySelector('.click');
var check = document.getElementById('scales');

klik.onclick = function(){
    if (check.checked){
        check.checked = false;
    } else {
        check.checked = true;
    }
}
