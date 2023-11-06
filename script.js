const container = document.querySelector(".container");
const btn = document.querySelector("button");
btn.textContent = "RESET GRID";

let defaultN = 16;

document.addEventListener("load", createGrid(defaultN));

function createGrid(amount) {
    let wh = 580 / amount;

    for(i = 0; i < (amount * amount); i++) {
    let tile = document.createElement("div");
    tile.classList.add("grid");
    tile.setAttribute("style", `width: ${wh}px; height: ${wh}px; background-color: #fff;`);
    container.appendChild(tile);
    }

    hoverEffect();
}

function hoverEffect() {
let tiles = document.querySelectorAll(".grid");

tiles.forEach(tile => {
    let increaseOpacity = 0;
    tile.addEventListener("mouseover", () => {
    const color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    tile.style.backgroundColor = color;
    increaseOpacity += 10;
    tile.style.opacity = `${increaseOpacity}%`;
    })
});

    function random(number) {
        return Math.floor(Math.random() * (number + 1));
    }
}

btn.addEventListener("click", reset);

function reset() {
    let resetN = prompt("Type in the number of squares you'd like on each side:");
    if(resetN < 1 || resetN > 100) {
        alert("Number must be between 1 and 100.");
        reset();
    } else {
        container.replaceChildren();
        createGrid(resetN);
    }
}