const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function createCard() {
    const mainCont = document.querySelector("#main-cont");
    const newCard = document.createElement("div");
    newCard.classList.add('book');
    mainCont.appendChild(newCard);
}

createCard();
createCard();




function addBookToLibrary() {
    // do stuff here
}
