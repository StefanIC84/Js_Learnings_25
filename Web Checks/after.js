console.log("Hello from JavaScript!");
alert("JavaScript is running!");


let outputdiv = document.getElementById('output');

let sum = 0;
let resulthtml = '<ul>';

for (let i = 1; i <= 10; i++) {
    sum += i;
    resulthtml += `<li>Adding ${i}, current sum: ${sum}</li>`;
}

resulthtml += `</ul><p><strong.Total sum is: ${sum}</strong></p>`;

outputdiv.innerHTML = resulthtml;


let x = 5;
if (true) {
    let x = 10;
    console.log(x);
}

console.log(x);









