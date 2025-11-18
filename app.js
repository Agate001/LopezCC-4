const pageTitle = document.getElementById("page-title");
const subtitle = document.getElementById("subtitle");

const changeTitleBtn = document.getElementById("change-title-btn");
const colorBtn = document.getElementById("color-btn");
const addCardBtn = document.getElementById("add-card-btn");
const clearCardsBtn = document.getElementById("clear-cards-btn");
const addCustomCardBtn = document.getElementById("add-custom-card-btn");
const customTextInput = document.getElementById("custom-text-input");
const cardsContainer = document.getElementById("cards-container");
const storyBtn = document.getElementById("story-btn");
const storyTXT = document.getElementById("story-txt");
const uselessBTN = document.getElementById("useless-btn");
const backgroundimgBTN = document.getElementById("background-img-btn");
const RBTN = document.getElementById("R-btn");
const Rcontent = document.getElementById("R-content");
const soundBTN = document.getElementById("sound-btn");
const bgSound = new Audio("./assets/what-the-hell-speed-up.mp3");


changeTitleBtn.addEventListener("click", () => {
  if (pageTitle.innerText === "Dom manipulation Playground") {
    pageTitle.innerText = "Dom in Action!";
    subtitle.innerText = "Nice! you changed the DOM using Javascript!";
  } else {
    pageTitle.innerText = "Dom manipulation Playground";
    subtitle.innerText = "Click the button below to see the DOM in action!!";
  }
});

colorBtn.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.background = randomColor;
});

function createCard(text) {
  const card = document.createElement("div");
  card.className = "card";

  const content = document.createElement("button");
  content.innerText = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  deleteBtn.addEventListener("click", () => {
    card.remove();
  });

  card.appendChild(content);
  card.appendChild(deleteBtn);

  return card;
}

addCardBtn.addEventListener("click", () => {
  const card = createCard("I am a dynamically created card.");
  cardsContainer.appendChild(card);
});

addCustomCardBtn.addEventListener("click", () => {
  const value = customTextInput.value.trim();
  if (!value) return;

  const card = createCard(value);
  cardsContainer.appendChild(card);
  customTextInput.value = "";
});

clearCardsBtn.addEventListener("click", () => {
  cardsContainer.innerHTML = "";
});

storyBtn.addEventListener("click", () => {
  if (storyTXT.innerText === "") {
    storyTXT.innerText = 
    "Three little monkeys were jumping on the bed,\n" +
      "One fell off and bumped his head.\n" +
      "Mama called the doctor and the doctor said,\n" +
      "\"No more monkeys jumping on the bed!\"\n\n" +

      "Two little monkeys were jumping on the bed,\n" +
      "One fell off and bumped his head.\n" +
      "Mama called the doctor and the doctor said,\n" +
      "\"No more monkeys jumping on the bed!\"\n\n" +

      "One little monkey was jumping on the bed,\n" +
      "He fell off and bumped his head.\n" +
      "Mama called the doctor and the doctor said,\n" +
      "\"No more monkeys jumping on the bed!\"\n\n" +

      "Now all the monkeys are tucked in tight,\n" +
      "No more jumping—just \"Good night!\"";

  } else {
    storyTXT.innerText = "";
  }
});


uselessBTN.addEventListener("click", () => {
    if (uselessBTN.innerText === "Click Useless Button to Make Usefull"){
        uselessBTN.innerText = "Didnt Work still useless";
    } else {
    uselessBTN.innerText = "Click Useless Button to Make Usefull"}
})

backgroundimgBTN.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('./assets/Is.png')"
});

RBTN.addEventListener("click", () => {
 Rcontent.innerHTML = `
  <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/xvFZjo5PgG0?si=M4ugZZPN5HNkvNf1" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen>
  </iframe>
`;});

soundBTN.addEventListener("click", () => {
 bgSound.play();
});
