const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

const mainCont = document.querySelector("#main-cont");
const addButton = document.querySelector("#add-book-button");
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
const titleInput = document.querySelector("#book-title-input")
const authorInput = document.querySelector("#book-author-input")
const pagesInput = document.querySelector("#book-pages-input")
const readstatusInput = document.querySelector("#book-readstatus-input")
const submitButton = document.querySelector("#submit-button");

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

function createCard(book) {
    const newCard = document.createElement("div");
    newCard.classList.add('book');
    mainCont.appendChild(newCard);

    const bookTitle = createElement("p", book.title, {class: 'book-title-p'});
    newCard.appendChild(bookTitle);

    const authorName = createElement("p", book.author, {class: 'book-author-p'});
    newCard.appendChild(authorName);

    const pagesCount = createElement("p", book.pages, {class: 'book-pages-p'});
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


 addButton.addEventListener('click', () => {
     dialog.showModal();
 });

 submitButton.addEventListener('click', () => {
     let book = new Book(titleInput.value, authorInput.value, pagesInput.value, readstatusInput.value);
     myLibrary.push(book);
     createCard(book);

     dialog.close();
     form.reset();
 });
