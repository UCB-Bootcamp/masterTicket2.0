// NOT CONNECTED TO FRONT END
async function editFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length-1
    ];
    const title = document.querySelector('input[name="post-title"]').value;
    const body_content = document.querySelector('textarea[name="post-body"]').value;
    console.log(title, body_content)
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            body_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok) {
        window.location.replace('/dashboard/')
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);