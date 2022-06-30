let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

function addBookToLibrary() {
  // do stuff here
  let title = prompt("Enter title of book");
  let author = prompt("Enter author of book");
  let pages = prompt("Enter number of pages");
  let read = "";
  let readPrompt = prompt("Has this book been read?").toLowerCase();
  if (readPrompt == "yes") {
    read = "has been read.";
  } else if ((readPrompt = "no")) {
    read = "not yet read.";
  }

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

// console.log(myLibrary[0].info());

function displayBooks(myLibrary) {}

function clearInput() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").value = "";
}

function addBookFromButton() {
  const newBook = new Book(
    document.getElementById("title").value,
    document.getElementById("author").value,
    document.getElementById("pages").value,
    document.getElementById("read").value
  );
  myLibrary.push(newBook);
  clearInput();
  console.dir(myLibrary);
}

function addOneBook() {
  let newDiv = document.createElement("div");
  newDiv.id = "x";
  document.body.append(newDiv);
  document.querySelector(".bookarraydiv").appendChild(newDiv);

  let content = `<div class="addonebook"><span class="cardtitle">The Old Man and the Sea who went to the dairy barn</span><br><span class="cardauthor">Author</span><br><span class="cardpages">Pages</span><br><button class="readbtn">Read</button></div>`;
  newDiv.innerHTML += content;
}
