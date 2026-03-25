// const h1 = document.getElementsByTagName('h1')[0];
// const h1 = document.querySelectorAll('h1')[0];
// const h1 = document.querySelector('h1');
const h1 = document.getElementById('result');
// const plusButton = document.querySelector('button');
// const plusButton = document.querySelector('.plusButton')[0];
const plusButton = document.querySelectorAll('.plusButton');

let count = 0;

// plusButton.addEventListener('click', () => {
//     count++;
//     h1.textContent = count;
// });

// plusButton.addEventListener('click', plus);
// function plus() {
//     count++;
//     h1.textContent = count;
// }

plusButton.addEventListener('click', () => {
    count++;
    h1.textContent = count;
});

// plusButton.onclick = () => {
//     count++;
//     h1.textContent = count;
// };