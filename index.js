var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var button1 = document.getElementById('button');
function sum(a, b) {
    return a + b;
}
button1.addEventListener("click", function () {
    console.log(sum(input1.value, input2.value));
});
