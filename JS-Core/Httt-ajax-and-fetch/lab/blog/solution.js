function attachEvents() {
    const URL = 'https://baas.kinvey.com/appdata/kid_ryGbe_VWH/';
    let USERNAME = 'Peter';
    let PASSWORD = 'p';
    let base_64 = btoa(USERNAME + ':' + PASSWORD);
    let AUTH = { "Authorization": "Basic " + base_64 };
    let SELECT = $('#posts');
    let TITLE = $('#post-title');
    let BODY = $('#post-body');
    let COMMENTS = $('#post-comments');

    $('#btnLoadPosts').on('click', loadPosts);
    $('#btnViewPost').on('click', viewPosts);


    function loadPosts() {
        $.ajax({
            method: "GET",
            url: URL + 'posts',
            headers: AUTH
        }).then(function (data) {

            SELECT.empty()
            for (const post of data) {
                let option = $('<option>');
                option.text(`${post['title']}`)
                option.attr('value', `${post['_id']}`)
                option.attr('body', `${post['body']}`)
                SELECT.append(option);


            }

        })
    }

    function viewPosts() {
        BODY.empty();
        let selected = SELECT.find(':selected');
        TITLE.text(selected.text())
        let postId = selected.attr('value');
        let body = selected.attr('body');
        let li = $('<li>').text(body)
        BODY.append(li)
        COMMENTS.empty()
        let endpoint = `comments/?query={"post_id":"${postId}"}`

        $.ajax({
            method: "GET",
            url: URL + endpoint,
            headers: AUTH
        })
            .then(function (dataArr) {
                
                for (const com of dataArr) {
                    let li = $('<li>').text(com['text'])
                    COMMENTS.append(li)
                }
            })
    }


}