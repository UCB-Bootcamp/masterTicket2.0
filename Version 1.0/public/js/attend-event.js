async function attendClickHandler(e) {
    event.preventDefault();
    const post_id = window.location.toString().split('/')[window.location.toString().split('/').length-1];

    const response = await fetch('/api/posts/attend', {
        method: 'PUT',
        body: JSON.stringify({
            post_id: post_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(e)
    if(response.ok) {
        document.location.reload();
        
    } else {
        alert('You are already attending this event');
        var btn = $(e.target);
        btn.attr("disabled", "disabled");
    }
};

document.querySelector('.attend').addEventListener('click', attendClickHandler);