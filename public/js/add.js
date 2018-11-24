document.addEventListener("DOMContentLoaded", function () {
    const data = document.getElementById('addNote');
    const title = document.getElementById('title').value.trim();
    const body = document.getElementById('body').value.trim();

    data.addEventListener("submit", () => {
        event.preventDefault();

        if (!title || !body ||) {
            return;
        }
        // Constructing a newPost object to hand to the database
        const newPost = {
            title: title,
            description: body
        };

        $.ajax("/api/add/", {
            type: "PUT",
            data: newPost
          }).then(
            function() {
              document.location = "/my-notes"
            }
          );

        // If we're updating a post run updatePost to update a post
        // Otherwise run submitPost to create a whole new post
        if (updating) {
            newPost.id = postId;
            updatePost(newPost);
        }
        else {
            submitPost(newPost);

        })
});
