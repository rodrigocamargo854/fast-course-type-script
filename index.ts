



const input1 = document.getElementById('num1') as HTMLInputElement;
const input2 = document.getElementById('num2') as HTMLInputElement;

const button1 = document.getElementById('button') as HTMLButtonElement;

function sum(a: number, b: number) {
    return a+b;
}

button1.addEventListener("click",function() {
    console.log(sum(Number(input1.value),Number(input2.value)));
})
