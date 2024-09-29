document.getElementById('discussion-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from the form
    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    // Create a new comment element
    const commentElement = document.createElement('li');
    commentElement.textContent = `${username}: ${comment}`;

    // Add the new comment to the comments list
    document.getElementById('comments-list').appendChild(commentElement);

    // Clear the form
    document.getElementById('discussion-form').reset();
});
