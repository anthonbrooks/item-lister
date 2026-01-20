const form = document.querySelector('#addItem');
const itemList = document.querySelector('.list');

// Form submit event
form.addEventListener('submit', addItem);

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
    const delButton = document.createElement('button');

    // Add classes to del button
    delButton.classList = 'btn delete';

    // Add text to del button
    delButton.appendChild(document.createTextNode('X'));

    // Add button to li
    li.appendChild(delButton);

    // Add new li to the list
    itemList.appendChild(li);

    // Delete item
    itemList.addEventListener('click', removeItem);

    // console.log(li);
}

function removeItem(e) {
    console.log(1);
}