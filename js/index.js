console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--

const bookTitle = "thems Coding";
const author = "Mikail Gökce";
let rating = "4,5 / 5";
let numberOfSales = "2744";

function bookOutput() {
  console.log("Title:", bookTitle);
  console.log("Author:", author);
  console.log("Rating:", rating);
  console.log("Sales:", numberOfSales);
}

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--
bookOutput();

setTimeout(function () {
  console.log("...");
  console.log("Data will be updated. Please wait a moment.");

  setTimeout(function () {
    rating = "4,7 / 5 *";
    numberOfSales = "27440 *";

    bookOutput();

    console.log("Data with '*'' was updated");
  }, 2000);
}, 3000);

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--

// --^-- write your code here --^--
