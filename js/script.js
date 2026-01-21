const form = document.querySelector('#addItem');
const itemList = document.querySelector('.list');
const filter = document.querySelector('#filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete item
itemList.addEventListener('click', removeItem);

// Filter items
filter.addEventListener('keyup', filterItems);

// Add new item to list
function addItem(e) {
    e.preventDefault();

    // Get input value
    const newItem = document.querySelector('.form-add').value;

    // Create new li element
    const li = document.createElement('li');

    // Add class to li
    li.className = 'list-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button 
    const delButton = document.createElement('input');

    // Add classes to del button
    delButton.classList = 'btn delete';

    // Add attributes to del button
    delButton.setAttribute('type', 'submit');
    delButton.setAttribute('value', 'X');

    // Add text to del button
    delButton.appendChild(document.createTextNode('X'));

    // Add button to li
    li.appendChild(delButton);

    // Add new li to the list
    itemList.appendChild(li);
}

// Delete item from the list
function removeItem(e) {

    // Find delete buttons
    if (e.target.classList.contains('delete')) {

        // Get li associated with delete button clicked
        const li = e.target.parentElement;

        // Remove item from list if confirmed
        if (confirm(`Are you sure you want to delete ${li.textContent}?`)) {
            itemList.removeChild(li);
        };
    };
}

function filterItems(e) {
    //convert input text to lowercase
    const text = e.target.value.toLowerCase();

    // Get list
    const items = itemList.querySelectorAll('li');
    
    // Convert List to Array
    Array.from(items).forEach(function(item) {
        const itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}