let availableWidth = window.innerWidth;
let availableHeight = window.innerHeight;
let contentWidth = document.querySelector("form").offsetWidth;
let contentHeight = document.querySelector("form").offsetHeight;

let scale = Math.min( 
    availableWidth / contentWidth, 
    availableHeight / contentHeight 
);

if (scale > 1) {
    scale *= 0.9;
}

let form = document.querySelector("form");
form.style.transform = `scale(${scale})`;