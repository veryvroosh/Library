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
const cancelButton = document.querySelector("#cancel-button");

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

    const buttonsDiv = createElement("div", "", {class: 'book-button-div'});
    newCard.appendChild(buttonsDiv);

    const readButton = createElement("button", "", {class: 'read-button'});
    if (book.readStatus) {
        readButton.setAttribute('style', 'background-image: url(icons/eye-check-outline.svg); background-color: #9cff7f;   border: 1px solid rgba(0, 128, 0, 0.1);');
    } else {
        readButton.setAttribute('style', 'background-image: url(icons/eye-remove-outline.svg); background-color: #ff4f4f; border: 1px solid rgba(0, 0, 0, 0.1);');
    }
    buttonsDiv.appendChild(readButton);

    const deleteButton = createElement("button", "", {class: 'delete-button'});
    deleteButton.setAttribute('style', 'background-image: url(icons/trash-can-outline.svg');
    buttonsDiv.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        newCard.remove();
    });
}


 addButton.addEventListener('click', () => {
     dialog.showModal();
     dialog.classList.add("open");
     dialog.style.visibility = 'visible';
 });

 submitButton.addEventListener('click', () => {
     if (titleInput.value.trim() === '' || authorInput.value.trim() === '' || pagesInput.value.trim() === '') {
         alert('Please fill in all fields');
         return;
     }
     let book = new Book(titleInput.value, authorInput.value, pagesInput.value, readstatusInput.checked);
     myLibrary.push(book);
     createCard(book);

     dialog.style.visibility = 'hidden';
     dialog.classList.remove("open");
     dialog.close();
     form.reset();
 });

dialog.addEventListener('close', () => {
    dialog.style.visibility = 'hidden';
    dialog.classList.remove("open");
});

 cancelButton.addEventListener('click', () => {
     dialog.style.visibility = 'hidden';
     dialog.classList.remove("open");
     dialog.close();
     form.reset();
 });
