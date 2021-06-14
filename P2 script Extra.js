/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

/*** 
Creating two variables :
- list : a collection of the students stored in the index.html file
- numberPerPage : the number of students which will be displayed on each page (10)
***/

const list = document.getElementsByClassName ("student-item cf") ;
console.log(list) ;
const numberPerPage = 10 ;

/*** 
Creating a function expression, stored in the variable showPage : selects 10 students for each page, out of the list of all students.

Creating two variables :
- startIndex : the index of the first student displayed on each page (0, 10, 20, 30...)
- endIndex : the index of the last student displayed on each page (9, 19, 29, 39...)

Creating a for loop : goes through the list of students and displays ("block") or hides ("none") them depending on each page.
***/

const showPage = (list, page) => {
   
   const startIndex = (page * numberPerPage) - numberPerPage ;
   const endIndex = page * numberPerPage ;

   for (let i = 0 ; i < list.length ; i += 1) {
      if (i >= startIndex && i < endIndex ) {
         list[i].style.display = 'block';
      }
      else {
         list[i].style.display = 'none';
      }
    }
   }

/*** 
Creating a variable, pagesTotalNumber :
the total number of pages, calculated on the basis of the number of students and the number of students per page.

Creating DOM elements :
- newDiv, div element with the class "pagination"
- ul element

newDiv is appended to the existing div with the class "page" (named pageDiv).
ul is appended to newDiv.
***/

   const pagesTotalNumber = Math.ceil (list.length / numberPerPage);

   const newDiv = document.createElement('div');
   newDiv.className = "pagination" ;

   const pageDiv = document.querySelector('.page');
   pageDiv.appendChild(newDiv);

   const ul = document.createElement('ul');
   newDiv.appendChild(ul);

/***
Creating a function expression, stored in the variable appendPageLinks, with a for loop which creates a list :

For every page, creates two DOM elements :
- li div element : appended to ul
- a div element : appended to li

The text element of a is the number of the page.
The href attribute is set to "#".
***/

   const appendPageLinks = (pages) => {

   for (let i = 1 ; i <= pages ; i += 1) {
      const li = document.createElement('li');
      ul.appendChild(li);
      const a = document.createElement('a');
      li.appendChild(a);
      a.href = "#" ;
      const atext = i.toString();
      a.textContent = atext ;
      }

/*** 
Creating a collection called aColl, with all the a div elements.
Setting the first a div element class as active.

Creating a for loop which adds an event listener to each a div element.

When the a div element is clicked, its class is set to active and all the other a div elements class are removed.
When the a div element is clicked, the showPage function is called, displaying the 10 students corresponding to the page.
***/

   const aColl = document.querySelectorAll('a');
   aColl[0].className = "active";

   for (let i = 0 ; i < aColl.length ; i += 1) {
      aColl[i].addEventListener('click', (e) => {
         for (let j = 0 ; j < aColl.length ; j += 1) {
           aColl[j].classList.remove('active') ;
          }
         e.target.className = "active";
         showPage(list, e.target.textContent) ;
       }
     )
   }
}

/*** 
Calling the showPage function with the first page.
Calling the appendPageLinks function to have the a div elements to click and select other pages.
***/

showPage(list, 1);
appendPageLinks(pagesTotalNumber);










/*
EXTRA CREDITS - work in progress
Creating searchDiv element with class of "student-search" appended to pageHeaderDiv with class of "page header.cf".
Creating input element appended to searchDiv element.
Creating button element next to the input element.
*/

/*

const searchDiv = document.createElement('div');
searchDiv.className = "student-search" ;

const pageHeaderDiv = document.querySelector('.page-header.cf');
pageHeaderDiv.appendChild(searchDiv);

const input = document.createElement('input');
input.placeholder = "Search for students..." ;
searchDiv.appendChild(input);

const button = document.createElement('button');
button.textContent = "Search" ;
searchDiv.appendChild(button);

*/

/*
EXTRA CREDITS
Creating a searchFunc function which creates a new list of names, "searchResults", from the search matches.
- Displaying the search results if that list is not empty.
- Displaying a "no result" message if that list is empty, and no message at all if that list is not empty.
- Displaying the basic page if the search input is empty.
*/

/*

const studentsPar = document.querySelector('h2');
const nomatchPar = document.createElement('h3');
studentsPar.appendChild(nomatchPar);  

const pageLinks = document.querySelectorAll('a');
const uLinks = pageLinks[0].parentNode.parentNode;
const iLinks = uLinks.childNodes;

function searchFunc (searchInput, names) {

var searchResults = [];
var pagesSearchNumber = Math.ceil (searchResults.length / numberPerPage);

for (let i = 0 ; i < iLinks.length ; i ++ ) {
   uLinks.removeChild(iLinks[i]);
}

for (let i = 0 ; i < names.length ; i ++ ) {

  names[i].style.display = 'none';

  if (searchInput.value.length !== 0 && names[i].textContent.toLowerCase().includes(searchInput.value.toLowerCase())){
   searchResults.push(names[i]);
  }
}

  if (searchResults.length !== 0){
   console.log(searchResults);
   showPage(searchResults, 1);
   appendPageLinks(pagesSearchNumber); 
 }

 if (searchResults.length == 0 && searchInput.value.length !== 0){
   nomatchPar.textContent = "No match has been found for this search.";
  }
  else {
   nomatchPar.textContent = "";   
  }

  if (searchInput.value.length === 0) {
   showPage(list, 1);
   appendPageLinks(pagesTotalNumber);
  }
 }

 */

/*
EXTRA CREDITS
Creating events listeners for the search button and the search input.
Both events call the searchFunc.
*/

/*

button.addEventListener('click', (event) => {
  event.preventDefault();
  searchFunc (input, list);
});


input.addEventListener('keyup', () => {
  searchFunc (input, list);
});

*/