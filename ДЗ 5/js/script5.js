var kol = prompt('Введите количество элементов','');
function sklon(kol) {
    var y;
    var count = kol % 10;
    if (count == 1) {
        y = 'элемент';
    } else {
        if (count >= 2 && count <= 4) {
            y = 'элемента';
        } else {
            y = 'элементов';
        }
    }   
    return y;
}
var mda = ('Введите ' + kol + ' ' + sklon(kol));
var kil = prompt(mda,'');
var arr = kil.split('');
function min(arr) {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }   //или с помощью Math.min.apply(Math, arr);
    return min;
}
alert('Минимальный элемент - ' + min(arr));
function max(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }   //или с помощью Math.max.apply(Math, arr);
    return max;
}
alert('Максимальный элемент - ' + max(arr));
var ary = kil.split('');
function sum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
	sum = sum + parseInt(arr[i]);
    }
    return sum;
}
alert('Сумма элементов - ' + sum(arr));