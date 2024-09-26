const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

const mainCont = document.querySelector("#main-cont");
const addButton = document.querySelector("#add-book-button");

 function createElement(tag, text, attributes = {}) {
    const element = document.createElement(tag);
    if (text) {
        element.textContent = text;
    }
    Object.keys(attributes).forEach((key) => {
        element.setAttribute(key, attributes[key]);
    });
    return element;
}

function createCard(title, author, pages) {
    const newCard = document.createElement("div");
    newCard.classList.add('book');
    mainCont.appendChild(newCard);

    const bookTitle = createElement("p", title, {class: 'book-title-p'});
    newCard.appendChild(bookTitle);

    const authorName = createElement("p", author, {class: 'book-author-p'});
    newCard.appendChild(authorName);

    const pagesCount = createElement("p", pages, {class: 'book-pages-p'});
    newCard.appendChild(pagesCount);

    const buttonsDiv = createElement("div", "", {class: 'book-buttons-div'});
    newCard.appendChild(buttonsDiv);

    const readButton = createElement("button", "eye", {class: 'read-button'});
    buttonsDiv.appendChild(readButton);

    const deleteButton = createElement("button", "X", {class: 'delete-button'});
    buttonsDiv.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        newCard.remove();
    })
}

createCard("1984", "Melovi", 299);


 addButton.addEventListener('click', () => {
     createCard();
 });