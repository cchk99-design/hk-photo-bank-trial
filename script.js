const vocabData = {
    animal: [
        { img: "assets/animal/dog.png" },
        { img: "assets/animal/cat.png" },
        { img: "assets/animal/panda.png" }
    ],
    sports: [
        { img: "assets/sports/swimming.png" },
        { img: "assets/sports/cycling.png" },
        { img: "assets/sports/basketball.png" }
    ],
    electronic_appliances: [
        { img: "assets/elec/tv.png" },
        { img: "assets/elec/fan.png" },
        { img: "assets/elec/fridge.png" }
    ]
};

let currentCategory = "animal";
let currentIndex = 0;

const imgElement = document.getElementById('vocab-image');
const categorySelect = document.getElementById('categorySelect');
const cardElement = document.getElementById('card');

function updateCard() {
    const item = vocabData[currentCategory][currentIndex];
    imgElement.style.opacity = 0; // Fade out effect
    
    setTimeout(() => {
        imgElement.src = item.img;
        imgElement.style.opacity = 1; // Fade in effect
    }, 150);
}

function changeCategory() {
    currentCategory = categorySelect.value;
    currentIndex = 0;
    updateCard();
}

function goHome() {
    currentCategory = "animal";
    categorySelect.value = "animal";
    currentIndex = 0;
    updateCard();
}

// Swipe Setup
const mc = new Hammer(cardElement);

mc.on("swipeleft", () => {
    if (currentIndex < vocabData[currentCategory].length - 1) {
        currentIndex++;
        updateCard();
    }
});

mc.on("swiperight", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCard();
    }
});

// Start the app
updateCard();
