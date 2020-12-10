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
let tableHeader

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
// How to run multiple functions in sequence?

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

// Hide adding form.
function hideForm() {
  addBookForm.style.display = "none";
}

// Display adding form and blur the background/body.
function showForm() {
  addBookForm.style.display = "block";
}
// When the user clicks anywhere outside of the form popup, close it.
window.onclick = function (event) {
  if (event.target == addBookForm) {
    addBookForm.style.display = "none";
  }
};

// Create a book instance of Book, add it to myLibrary, create HTML element for it and show it.
function addBooks() {
  const book = new Book();
  book.title = document.getElementById("bookTitle").value;
  book.author = document.getElementById("authorName").value;
  myLibrary.push(book);
  addToHTML(book);
  // populateHTML();
  console.table(myLibrary);
}

// Update HTML and myLibrary with books.
function addToHTML(book) {
  // Grab the table body.
  bookTableBody = document.getElementById("bookTableBody");
  // Create a tr inside the table.
  let newRow = document.createElement("tr");
  // Add class book to tr element.
  newRow.classList.add("book");
  //Loop over the keys in the object and create td for each.
  for (key in book) {
    let newCell = document.createElement("td");
    newCell.innerHTML = book[key];
    newRow.appendChild(newCell);
    // console.log(book[key]);
  }
  // Append the new row "tr" under table body.
  bookTableBody.appendChild(newRow);
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
