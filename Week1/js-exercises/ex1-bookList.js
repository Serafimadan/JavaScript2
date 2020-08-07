/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */

const books = [{
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    picture: 'https://productdork.com/uploads/default/original/1X/ddbda1150301e89cdf0119d84f2a7fb8930beffb.png'
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    picture: 'https://picture.graycity.net/img/brian-christian/the_most_human_human.jpg'
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    picture: 'https://www.relativisticramblings.com/wp-content/uploads/2016/06/tpp.jpg'
  }
];


function createBookList(books) {
  // your code goes in here, return the ul element
  let bookList = document.createElement('ul');
  //itarate array
  for (let i = 0; i < books.length; i++) {
    //variables which create tags
    let bookItem = books[i];
    let bookLi = document.createElement('li');
    let bookTitle = document.createElement('p');
    let bookImg = document.createElement('img');
    //put content to the tags
    let textTitleAuthor = document.createTextNode(bookItem.title + ' - ' + bookItem.author);
    let imageForBook = document.createTextNode(bookItem.picture);
    bookList.appendChild(bookLi);
    bookLi.appendChild(bookTitle);
    bookTitle.appendChild(textTitleAuthor);
    bookLi.appendChild(bookImg);
    bookImg.src = bookItem.picture;
    bookImg.appendChild(imageForBook);
    //color for have read book or not
    if (bookItem.alreadyRead == true) {
        bookLi.style.backgroundColor = 'green';
    } else {
        bookLi.style.backgroundColor = 'red';
    }
  }
  return bookList; 
}


let ulElement = createBookList(books);

document.querySelector("#bookList").appendChild(ulElement);

