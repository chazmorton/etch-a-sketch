const container = document.querySelector(".container");
const gridWidth = 960;

function createGrid(length) {

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
                e.target.style.background = 'blue';
            });
        }
    }

}

createGrid(100);

