// const resultH1 = document.getElementsByTagName('h1')[0];
// const resultH1 = document.querySelectorAll('h1')[0];
// const resultH1 = document.querySelector('h1');
const resultH1 = document.getElementById('result');
// const plusButton = document.querySelector('button');
// const plusButton = document.querySelector('.plusButton')[0];
// const plusButton = document.querySelectorAll('.plusButton');

let count = 0;

// plusButton.addEventListener('click', () => {
//     count++;
//     resultH1.textContent = count;
// });

// plusButton.addEventListener('click', plus);
// function plus() {
//     count++;
//     resultH1.textContent = count;
// }

// plusButton.addEventListener('click', () => {
//     count++;
//     resultH1.textContent = count;
// });

// plusButton.onclick = () => {
//     count++;
//     resultH1.textContent = count;
// };

resultH1.innerHTML = count;
function plus(number=1) {
    count += number;
    resultH1.innerHTML = count;
}