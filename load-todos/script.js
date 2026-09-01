document.getElementById('loadBtn').addEventListener('click', () => {
    const todoList = document.getElementById('todoList');
    
    // loading state
    // todoList.innerHTML = '<li class="list-group-item text-center text-muted py-3">Loading...</li>';

    // Fetch data from JSONPlaceholder (limiting to 6 to match the image scale)
    fetch('https://jsonplaceholder.typicode.com/todos?')
        .then(response => response.json())
        .then(todos => {
            // Clear the loading text
            todoList.innerHTML = ''; 

            todos.forEach(todo => {
                const isCompleted = todo.completed;
                
                const listItemClass = isCompleted 
                    ? 'list-group-item-success text-decoration-line-through text-muted' 
                    : '';
                
                const badgeClass = isCompleted ? 'bg-success' : 'bg-secondary';
                const statusText = isCompleted ? 'Done' : 'Pending';

                //list item element
                const li = document.createElement('li');
                li.className = `list-group-item d-flex justify-content-between align-items-center py-3 ${listItemClass}`;
                
                // Populate the inner HTML
                li.innerHTML = `
                    <span>${todo.title}</span>
                    <span class="badge ${badgeClass} rounded-pill px-3 py-2">${statusText}</span>
                `;
                
                todoList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            todoList.innerHTML = '<li class="list-group-item text-center text-danger py-3">Failed to load todos.</li>';
        });
});