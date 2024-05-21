// const input = document.querySelector('#favchap');

// const button = document.querySelector('button');

// const list = document.querySelector('#list');


// // Arrow Syntax
// button.addEventListener('click', () => {
//  if (input.value) {
//     // Create an li element
//     const li = document.createElement('li');

//     //Create a delete button
//     const deleteButton = document.createElement('button');

//     //Populate the li elements textContent or innerHTML with the input value
//     li.textContent = input.value;

//     //Populate the button textContent with a ❌
//     deleteButton.textContent = '❌';

//     //Append the li element with the delete button
//     li.appendChild(deleteButton);

//     //Append the li element to the unordered list in your HTML
//     list.appendChild(li);

//     //Add an event listener to the delete button that removes the li element when clicked
//     deleteButton.addEventListener('click', () => {
//         list.removeChild(li);
//         clearInput();
//     });

//     //Send the focus to the input element
//     input.focus();
//     //Change the input value to nothing or the empty string to clean up the interface for the user
//     input.value = '';

//  } else {
//     input.focus();
//  }
//  //Clear input
//  clearInput();
// });

// function clearInput() {
//        //Send the focus to the input element
//        input.focus();
//        //Change the input value to nothing or the empty string to clean up the interface for the user
//        input.value = '';
// }

// Week 3
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Step 3
let chaptersArray = getChapterList() || [];

// Step 4
chaptersArray.forEach(chapter => {

   displayList(chapter);

 });

// Step 5
 button.addEventListener('click', () => {
   if (input.value != '') { 
     displayList(input.value);
     chaptersArray.push(input.value);
     setChapterList();
     input.value = '';
     input.focus(); 
   }
 });

//  Step 7
 function displayList(item) {
   let li = document.createElement('li');
   let deletebutton = document.createElement('button');
   li.textContent = item;
   deletebutton.textContent = '❌';
   deletebutton.classList.add('delete');
   li.append(deletebutton);
   list.append(li);
   deletebutton.addEventListener('click', function () {
     list.removeChild(li);
     deleteChapter(li.textContent);
     input.focus();
   });
}


// Step 8
function setChapterList() {
   localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
 }

// Step 9
function getChapterList() {
   return JSON.parse(localStorage.getItem('myFavBOMList'));
 }

// Step 10
function deleteChapter(chapter) {
   chapter = chapter.slice(0, chapter.length - 1);
   chaptersArray = chaptersArray.filter(item => item !== chapter);
   setChapterList();
 }