const input = document.querySelector('#favchap');

const button = document.querySelector('button');

const list = document.querySelector('#list');


// Arrow Syntax
button.addEventListener('click', () => {
 if (input.value) {
    // Create an li element
    const li = document.createElement('li');

    //Create a delete button
    const deleteButton = document.createElement('button');

    //Populate the li elements textContent or innerHTML with the input value
    li.textContent = input.value;

    //Populate the button textContent with a ❌
    deleteButton.textContent = '❌';

    //Append the li element with the delete button
    li.appendChild(deleteButton);

    //Append the li element to the unordered list in your HTML
    list.appendChild(li);

    //Add an event listener to the delete button that removes the li element when clicked
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        clearInput();
    });

    //Send the focus to the input element
    input.focus();
    //Change the input value to nothing or the empty string to clean up the interface for the user
    input.value = '';

 } else {
    input.focus();
 }
 //Clear input
 clearInput();
});

function clearInput() {
       //Send the focus to the input element
       input.focus();
       //Change the input value to nothing or the empty string to clean up the interface for the user
       input.value = '';
}