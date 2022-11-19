const verbs = [
    "hoppa",
    "ligga",
    "sova",
    "rida",
    "programmera",
    "forska",
    "radda liv",
    "spela badminton",
    "spela fotboll",
    "kolla pa fragesport",
    "leta skatter",
    "laosa korsord",
    "gora en mindmap",
    "losa sudoku",
    "flyga flygplan",
    "kora bil",
    "ga i skolan",
    "aka buss",
    "ga pa promenad",
    "ga ut med hunden",
    "klappa katten",
    "mata fiskarna",
    "tvatta fonster",
    "torkar disken"
]

let cards = [];

for (let i = 1; i < 25; i++) {
    cards.push(
        `<div class="card-container" data-open="false" data-index=${i}>
            <div class="card-cover">
                <h1>${i}</h1>
            </div>
            <div class="card-content">
                <p>${verbs[i - 1]}</p>
            </div>
        </div>`
    );
}

// Random card order
cards = cards.sort(() => Math.random() - 0.5);

cards.forEach((card) => {
    document.querySelector(".container").innerHTML += card;
});

const cardContainers = document.querySelectorAll(".card-container");

const today = new Date();
const currentDate = today.getDate() + (today.getMonth() + 1) * 100 + today.getFullYear() * 10000;

cardContainers.forEach(e => {
    e.addEventListener("click", event => {
        console.log(parseInt(e.dataset.index) + 2022_12_00, currentDate);
        const openCard = document.querySelector(".card-container[data-open='true']");
        if (openCard !== null) {
            cardInteract(openCard);
        }

        if (openCard !== null) {
            if (openCard !== e && currentDate >= parseInt(e.dataset.index) + 2022_12_00) {
                setTimeout(() => cardInteract(e), 750);
            }
        } else if (currentDate >= parseInt(e.dataset.index) + 2022_12_00) {
            cardInteract(e);
        }
    })
});

// Open close cards
const cardInteract = (e) => {
    e.dataset.open = e.dataset.open === "true" ? "false" : "true";
    const cover = e.querySelector(".card-cover");
    const content = e.querySelector(".card-content");
    if (e.dataset.open === "true") {
        cover.style.transitionDelay = "0ms";
        content.style.transitionDelay = "450ms";
        setTimeout(() => cover.style.zIndex="-1", 450);
    } else {
        cover.style.transitionDelay = "450ms";
        content.style.transitionDelay = "0ms";
        setTimeout(() => cover.style.zIndex="1", 450);
    }
}