const resultValue = document.getElementById('resultValue');
let value = '';

function enteredValue(num) {
    value += num;
    resultValue.value = value;
}

function equal() {
    if (resultValue.value) {
        resultValue.value = eval(value); //eval выполнить код(выражение)
        value = '';
    } value = '';
}

function erase() {
    value = '';
    resultValue.value = value;
}

