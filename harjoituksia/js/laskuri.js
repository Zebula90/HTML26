const counter = 
document.querySelector('#count');
let count = 0;

const plus =
document.querySelector('#plus');
plus.addEventListener('click', () => {
    count++;
    counter.textContent = count;
})

const minus =
document.querySelector('#minus');
minus.addEventListener('click', () => {
    count--;
    counter.textContent = count;
})

if (count > 0) () => {
    document.getElementById('#minus').disabled = false;
} 
else {
    console.log("toimiiko");
    document.getElementById('#minus').disabled = true;
    console.log("toimii");
} 



