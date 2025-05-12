//Random number generator

//For the range of numbers=>
let min = 1;
let max = 10;

document.getElementById('roll').onclick = function(){
    document.getElementById('line1').textContent=Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('line2').textContent=Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('line3').textContent=Math.floor(Math.random() * (max - min)) + min;
}