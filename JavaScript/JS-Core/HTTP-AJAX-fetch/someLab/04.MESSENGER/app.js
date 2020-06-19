function attachEvents() {
  let btnSend = document.getElementById('submit');
  let name = document.getElementById('author')
  let message = document.getElementById('content')
  let textarea = document.getElementById('messages');
  let btnRefresh = document.getElementById('refresh');
  let baseUrl = 'https://rest-messanger.firebaseio.com/messanger';

  function displayPosts() {
    let url = baseUrl + '.json';
    fetch(url)
      .then(response => response.json())
      .then(data => {

        textarea.value = '';
        let keys = Object.keys(data);

        for (let i = keys.length - 1; i >= 0; i--) {
          let author = data[keys[i]].author;
          let content = data[keys[i]].content;
          textarea.value += `${author}: ${content}\n`
        }
      })
  }

  btnSend.addEventListener('click', () => {
    let author = name.value;
    let content = message.value;
    if (author.trim() && content.trim()) {
      displayPosts
      let url = baseUrl + '.json';
      fetch(url, {
        method: "POST",
        body: JSON.stringify({ author, content })
      }).then(response => response.json())
        .then(data => {
          displayPosts();
        })

      name.value = '';
      message.value = ''
    }
  })

  btnRefresh.addEventListener('click', () => {
    displayPosts();
  })
}

attachEvents();