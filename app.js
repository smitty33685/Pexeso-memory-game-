const imgArr = [
    {
        name: "iceland1",
        img: "img/blue-lagoon.jpg"
    },
    {
        name: "iceland1",
        img: "img/blue-lagoon.jpg"
    },
    {
        name: "iceland2",
        img: "img/iceland.jpg"
    },
    {
        name: "iceland2",
        img: "img/iceland.jpg"
    },
    {
        name: "iceland3",
        img: "img/light-house.jpg"
    },
    {
        name: "iceland3",
        img: "img/light-house.jpg"
    },
    {
        name: "iceland4",
        img: "img/reykjavik.jpg"
    },
    {
        name: "iceland4",
        img: "img/reykjavik.jpg"
    },
    {
        name: "iceland5",
        img: "img/view.jpg"
    },
    {
        name: "iceland5",
        img: "img/view.jpg"
    },
    {
        name: "iceland6",
        img: "img/waterfalls.jpg"
    },
    {
        name: "iceland6",
        img: "img/waterfalls.jpg"
    },
]

const grid = document.querySelector(".grid-container");
const result = document.querySelector("#result");
let imgChosen = [];
let idChosen = [];



function createPlayground() {
    for(let i = 0; i < 12; i++) {
        const div = document.createElement("div");
        div.classList = "item";
        div.setAttribute("data-id", i);
        const p = document.createElement("p");
        p.innerText = "Pexeso"
        div.appendChild(p);
        grid.appendChild(div);
        console.log(div);

        div.addEventListener("click", showCard);
    }
}

createPlayground();


function showCard(e) {
    const cardId = this.getAttribute("data-id");
    idChosen.push(cardId);
    imgChosen.push(imgArr[cardId].name);
    //  const img = document.createElement("img");
    //  img.setAttribute("src", imgArr[cardId].img);
    const inner = e.target;
    inner.innerHTML = `<img src="${imgArr[cardId].img}">`

   
  


}