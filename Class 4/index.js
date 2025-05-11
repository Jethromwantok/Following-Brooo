const PI = Math.PI;
console.log(PI);
let radius;
let circumference

document.getElementById("button").onclick =function () {
    
    radius = document.getElementById('radius').value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById('answer').textContent = circumference;
}