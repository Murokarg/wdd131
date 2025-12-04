

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', function() {
    // Validates that input is not empty (ignores spaces)
    if (input.value.trim() !== '') {
        
        //Create new elements 
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        
        // Content configuration
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        
        // Add button to li
        li.append(deleteButton);
        
        // Add li to the list
        list.append(li);

        // Focus
        input.value = '';
        input.focus();
    
    } else {
        input.focus(); // focus if it's empty
    }

});

// Event delegation: Eliminate chapter
list.addEventListener('click', function(e) {
    if(e.target.tagName === 'BUTTON') {
        const li = e.target.closest('li');
        if (li) li.remove();
    }
});






