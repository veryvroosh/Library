const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

const mainCont = document.querySelector("#main-cont");
const dialog = document.querySelector("#dialog")

function createCard() {
    const newCard = document.createElement("div");
    newCard.classList.add('book');
    newCard.addEventListener('click', () => showDialog(title, author));
    mainCont.appendChild(newCard);
}

createCard();
createCard();

function showDialog(title, author) {
    dialog.classList.add('modal-show');
}



function addBookToLibrary() {
    // do stuff here
}
