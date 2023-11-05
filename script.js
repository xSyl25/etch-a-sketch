const body = document.querySelector("body");
const container = document.querySelector(".container");

let n = 16;
let wh = 580 / n - 1;

function createGrids() {
    let grids = document.createElement("div");
    grids.classList.add("grid");
    grids.setAttribute("style", `width: ${wh}px; height: ${wh}px; opacity: 50%; margin: 0.5px; background-color: #fff;`);
    container.appendChild(grids);
}

for(i = 0; i < (n * n); i++) {
    createGrids();
}

let grids = document.querySelectorAll(".grid");

grids.forEach(grid => {
    grid.addEventListener("mouseover", () => {
    const color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    grid.style.backgroundColor = color;
})});

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}