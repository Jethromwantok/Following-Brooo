//window.alert(`Hiii`);
//document.getElementsByClassName('gii')

//To print to your html page
let fullName =`Jethro`
let age = `19`
let favFood = `Gwete`
document.getElementById("p1").textContent = `His name is ${fullName}`;


// //Accepting User input
// let userName = window.prompt("Please enter your name"); //Lazy way
// document.getElementById("p2").textContent = `Hello ${userName}, welcome to my page!`;
let herName;
document.getElementById("submit").onclick = function(){//Everything withis here is going to happen when the button is clicked
    herName = document.getElementById("name").value;
    console.log(herName);
    document.getElementById("p2").textContent = `Hello ${herName}, welcome to my page!`;
    document.getElementById("name").value = "";
    document.getElementById("name").focus();
    
}
