async function postFormHandler(event) {
    event.preventDefault();
  
    const post_text = document.querySelector('textarea[name="post-text"]').value.trim();
    const title = document.querySelector('input[name="post-title"]').value.trim();

    const user_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (post_text) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_text,
            user_id          
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.post-form').addEventListener('submit', postFormHandler);
  