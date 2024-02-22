const blogForm = document.getElementById('blogForm');
const blogPosts = document.getElementById('blogPosts');

blogForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const imageInput = document.getElementById('imageInput');
    const file = imageInput.files[0];
    const reader = new FileReader();
    const content = document.getElementById('content').value;
    

    reader.onloadend = function() {
        const blogPost = document.createElement('div');
        blogPost.className = 'blogPost';
        blogPost.innerHTML = `
            <h2>${title}</h2>
            <img src="${reader.result}" alt="${title}">
            <p>${content}</p>
            <button class="delete" style="    color: black;
            border: 1px solid red;
            font-size: larger;
            border-radius: 8px;
            background-color: red;
            padding: 6px 10px; margin-top:12px;">Delete</button>
        `;
        blogPosts.appendChild(blogPost);

        // Add an event listener to the delete button
        const deleteButton = blogPost.querySelector('.delete');
        deleteButton.addEventListener('click', function() {
            blogPosts.removeChild(blogPost);
        });
    }

    if (file) {
        reader.readAsDataURL(file);
    }

    //reset the form fields
    document.getElementById('title').value = "";
    imageInput.value = "";
    document.getElementById('content').value = "";
    
});

