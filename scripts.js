let myLibrary = [];

function Book(title, author, pages, read) {

  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;

  this.read = function () {
      if(this.read === true){
          return "has been read";
      } else {
          return "not read yet";
      }
  }

  this.info = function () {
      return (`${title} by ${author}, ${pages} pages, ${read}`)
  }

}

function addBookToLibrary() {
  // do stuff here
}