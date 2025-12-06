

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Main array to hold chapters
let chaptersArray = getChapterList() || [];

// Display stored chapters on page load
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {  // make sure the input is not empty
        displayList(input.value); // call the function that outputs the submitted chapter
        chaptersArray.push(input.value);  // add the chapter to the array
        setChapterList(); // update the localStorage with the new array
        input.value = ''; // clear the input
        input.focus(); // set the focus back to the input
    }
});

// Functions

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
        input.focus(); // set the focus back to the input
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Function to delete chapter from array and update localStorage
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // remove the ❌ from the string
    chaptersArray = chaptersArray.filter(item => item !== chapter); // remove the chapter from the array
    setChapterList(); // update localStorage
}

// Event delegation: Eliminate chapter
// list.addEventListener('click', function(e) {
//     if(e.target.tagName === 'BUTTON') {
//         const li = e.target.closest('li');
//         if (li) li.remove();
//     }
// });


    //button.addEventListener('click', () => {
    // // Validates that input is not empty (ignores spaces)
    // if (input.value.trim() !== '') {
        
    //     //Create new elements 
    //     const li = document.createElement('li');
    //     const deleteButton = document.createElement('button');
        
    //     // Content configuration
    //     li.textContent = input.value;
    //     deleteButton.textContent = '❌';
        
    //     // Add button to li
    //     li.append(deleteButton);
        
    //     // Add li to the list
    //     list.append(li);

    //     // Focus
    //     input.value = '';
    //     input.focus();
    
    // } else {
    //     input.focus(); // focus if it's empty
    // }

