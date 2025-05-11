
let btn = document.getElementById('btn');
let myH1 = document.getElementById("myh1");

// Store the original text
let originalText = myH1.textContent;
let toggled = false;

function btnFunction() {
    if (toggled) {
        myH1.textContent = originalText;
    } else {
        myH1.textContent = "I Just wanted to be a soldier";
    }
    toggled = !toggled; // Flip the toggle state
}

btn.onclick = btnFunction;



