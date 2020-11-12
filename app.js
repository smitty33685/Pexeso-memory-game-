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
let result = document.querySelector("#results");
let imgChosen = [];
let idChosen = [];
let score = [];


//Create Playground
function createPlayground() {
    for(let i = 0; i < 12; i++) {
        const div = document.createElement("div");
        div.classList = "item";
        div.setAttribute("data-id", i);
        const p = document.createElement("p");
        p.innerText = "Pexeso"
        div.appendChild(p);
        grid.appendChild(div);
        //Listen for click
        div.addEventListener("click", showCard);
    }

    result.textContent = "0";
}

createPlayground();

//Compare Showen Cards
function compareImg() {
    const divs = document.querySelectorAll("div .item");

    const chooseOne = idChosen[0];
    const chooseTwo = idChosen[1];
    if(imgChosen[0] === imgChosen[1]){
        score.push(idChosen);
        divs[chooseOne].style.background = "#fff";
        divs[chooseTwo].style.background = "#fff";
        divs[chooseOne].innerHTML = "";
        divs[chooseTwo].innerHTML = "";
    } else {
        divs[chooseOne].innerHTML = `<p>Pexeso</p>`;
        divs[chooseTwo].innerHTML = `<p>Pexeso</p>`;
    }

     imgChosen = [];
     idChosen = [];

     result.textContent = score.length;

}






//Show Cards
function showCard(e) {
    const cardId = this.getAttribute("data-id");
    idChosen.push(cardId);
    imgChosen.push(imgArr[cardId].name);
    //  const img = document.createElement("img");
    //  img.setAttribute("src", imgArr[cardId].img);
    const inner = e.target;
    inner.innerHTML = `<img src="${imgArr[cardId].img}">`
    if(idChosen.length === 2) {
        setTimeout(compareImg,1000);
    }
}