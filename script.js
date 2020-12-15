/* -------------------------------------------------------------------------- */
/*                               Initialization                               */
/* -------------------------------------------------------------------------- */

let bookID;
let newBook;
let addForm;
let addButton;
let addBookButton;
let closeButton;
let body;
let tableHeader;

// Where books as objects will be stored.
let myLibrary = [];

/* -------------------------------------------------------------------------- */
/*                          Grabbing Items from HTML                          */
/* -------------------------------------------------------------------------- */

// Grab table header row.
tableHeader = document.getElementById("tableHeader");

// Grab the body.
body = document.getElementById("body");

// Grab the Open/Add button.
addButton = document.getElementById("buttonOpenForm");

// Grab the close button.
closeButton = document.getElementById("closeX");

// Grab the addBookButton button.
addBookButton = document.getElementById("addBookButton");

/* -------------------------------------------------------------------------- */
/*                           Buttons Functionalities                          */
/* -------------------------------------------------------------------------- */

// Show the book form popup.
addButton.onclick = showForm;

// Hide book form popup.
closeButton.onclick = hideForm;

// Run the function to add the entered text as a book.
addBookButton.onclick = addBooks;

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

// Hide adding form.
function hideForm() {
  addBookForm.style.display = "none";
}

// Display adding form.
function showForm() {
  addBookForm.style.display = "block";
}
// Hide adding form when user clicks outside of adding form box.
window.onclick = function (event) {
  if (event.target == addBookForm) {
    addBookForm.style.display = "none";
  }
};

// Create a book instance of Book and add it to myLibrary array. Then hide the adding form.
function addBooks() {
  var book = new Book();
  book.title = document.getElementById("bookTitle").value;
  book.author = document.getElementById("authorName").value;
  myLibrary.push(book);
  hideForm();
  console.table(myLibrary);
  addToHTML(myLibrary);
}

// Loop over the new myLibrary array and add new elements/object to the table.

// Update HTML and myLibrary with books.
function addToHTML(array) {
  // Grab the table body.
  bookTableBody = document.getElementById("bookTableBody");

  //Loop over the the array myLibrary and create a tr for every object and a td for every title key/value.

  array.forEach((obj) => {
    // Create a tr inside the table.
    let bookRow = document.createElement("tr");
    // Add class book to tr element.
    bookRow.classList.add("book");
    // Create a td for every title and for every author.
    let bookTitle = document.createElement("td");
    let bookAuthor = document.createElement("td");
    // Add class bookTitle to tr bookTitle element.
    bookTitle.classList.add("bookTitle");
    // Add class bookAuthor to tr bookAuthor element.
    bookAuthor.classList.add("bookAuthor");
    // Append the bookTitle under bookRow.
    bookRow.appendChild(bookTitle);
    bookRow.appendChild(bookAuthor);
    // Write the title value into HTML.
    bookTitle.innerHTML = obj.title;
    bookAuthor.innerHTML = obj.author;
    // Append the bookRow under bookTableBody (the table body.)
    bookTableBody.appendChild(bookRow);

    console.log(`${obj.title} donuts cost $${obj.author} each`);
  });
  // Append the new row "tr" under table body.
}

// Generate a unique ID for each Book.
function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Populate HTML element with book information.
function populateHTML() {
  // newBook.innerHTML = book.info()
}

// Function constructor to create instances of Book.
class Book {
  constructor(id, title, author, pages, isRead) {
    this.id = uuid();
    this.title = title;
    this.author = author;
    // this.pages = pages;
    // this.isRead = true;
    // this.info = function () {
    //   return `${book.title} by ${book.author}, ${book.pages} pages, ${book.isRead}.`;
    // };
  }
}

/* -------------------------------------------------------------------------- */
/*                            Logical Checks/Tests                            */
/* -------------------------------------------------------------------------- */

const book1 = new Book("", "Harry Potter", "J.K. Rowling", 600, true);
const book2 = new Book("", "Lord of the Rings", "Tolkein", 450, true);
const book3 = new Book("", "Song of Ice & Fire", "Fatty Boy", 100, false);
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

console.table(myLibrary);
// createBooksElements()
