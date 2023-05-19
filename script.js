//Show content
const showCount = document.querySelector('#show-count');
//Buttons
const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');
const reset = document.querySelector('#reset');

//Counter
let count = 0;

increase.addEventListener('click', () =>{
    count++;
    showCount.innerText = count;
});
decrease.addEventListener('click', () =>{
    count--;
    showCount.innerText = count;
});
reset.addEventListener('click', () =>{
    count = 0;
    showCount.innerText = count;
});