const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const resetButton = document.getElementById('resetButton');

// Store the original state of container1
const originalItems = container1.innerHTML;

// Add event listeners for drag and drop functionality
container1.addEventListener('dragstart', dragStart);
container2.addEventListener('dragover', dragOver);
container2.addEventListener('drop', drop);

// Reset button click event listener
resetButton.addEventListener('click', resetContainers);

// Drag start event handler
function dragStart(e) {
    e.target.classList.add('dragging');
}

// Drag over event handler
function dragOver(e) {
    e.preventDefault();
}

// Drop event handler
function drop(e) {
    e.preventDefault();
    const item = document.querySelector('.dragging');
    if (item) {
        e.target.appendChild(item);
        item.classList.remove('dragging');

        swal("Dragging successfull", "success")
    }
}

// Reset containers to their original state
function resetContainers() {
    container1.innerHTML = originalItems;
    container2.innerHTML = '';
}
