const grid = document.querySelector(".grid-container");
const result = document.querySelector("#result");

function createPlayground() {
    for(let i = 1; i <= 12; i++) {
        const div = document.createElement("div");
        div.classList = "item";
        const p = document.createElement("p");
        p.innerText = "Pexeso"
        div.appendChild(p);
        console.log(div);

        grid.appendChild(div);
    }

}

createPlayground();