const root = document.querySelector(".root");
const gridWidth = 960;
var color = "blue";

function createGrid(length) {

    const container = document.createElement("div");
    container.setAttribute("class", "container");
    root.appendChild(container);

    console.log(`Create Grid with ${length}`);

    const boxWidth = gridWidth / length;
    console.log(`Box Width & Height: ${boxWidth}`);

    for(let i = 0; i < length; i++) {
        const row = document.createElement("div");
        row.setAttribute("style", "display: flex;")
        container.appendChild(row);
        for(let j = 0; j < length; j++) {
            const square = document.createElement("div");
            square.setAttribute("id", "square");
            square.setAttribute("style", `width: ${boxWidth}px; height: ${boxWidth}px; outline: 1px solid black;`);
            // square.textContent = `${i} x ${j}`;
            row.appendChild(square);
            square.addEventListener("mouseover", function (e) {
                e.target.style.background = color;
            });
        }
    }

}

createGrid(16);

function setSize() {
    let check = 0
    do {
        console.log("Checking Size Requirements");
        let p = prompt("Enter the size of the grid (max size is 100 and min size is 1): ");
        let pInt = parseInt(p);

        if(pInt < 101 && pInt > 0) {
            console.log(`PInt: ${pInt}`);

            const container = document.querySelector(".container");
            container.remove();

            createGrid(pInt);

            check = 1;
        }
    }
    while(check == 0);
}

function setColor() {
    const givenColor = prompt("Enter your desired color: ");
    color = givenColor;
}