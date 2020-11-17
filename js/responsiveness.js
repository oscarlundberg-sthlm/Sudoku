let padding = getComputedStyle(document.querySelector("body")).padding;
padding = parseInt(padding);
padding *= 2;

let availableWidth = document.body.clientWidth;
availableWidth -= padding;

window.onload = function() {
    let content = document.querySelector("#content");
    let contentWidth = document.querySelector("#content").offsetWidth;
    let scale = availableWidth / contentWidth;
    
    if (contentWidth > availableWidth) {
        content.style.transform = `scale(${scale})`;
        content.style.transformOrigin = "top left";
    }
};