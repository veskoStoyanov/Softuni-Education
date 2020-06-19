const BASE_URL = `https://phonebook-5323d.firebaseio.com/phonebook`;
let TABLE = $('#phonebook');
let person = $('#person');
let personPhone = $('#phone');
$('#btnCreate').on('click', createContact)
$("#btnLoad").on('click', loadContact)



function loadContact() {
    $.ajax({
        method: "GET",
        url: BASE_URL + '.json'
    }).then(appendContacts)
        .catch(handleError);
}

function handleError(err) {
    console.error(err);
}

function appendContacts(contacts) {
    TABLE.empty();

    let keys = Object.keys(contacts);
    keys.sort((a, b) => contacts[a].name.localeCompare(contacts[b].name))

    for (const id of keys) {
        let li = $('<li>')
        li.text(`${contacts[id].name}: ${contacts[id].phone} `)
        let a = $('<a href="#">[Delete]</a>');
        a.on('click', function () {
            $.ajax({
                method: "DELETE",
                url: BASE_URL + '/' + id + '.json'
            }).then(function(){
              li.remove();
                
            }).catch(handleError)
        })
        a.appendTo(li);
        TABLE.append(li)
    }
}


function createContact() {
    let name = person.val();
    let phone = personPhone.val();

    if (name.trim() !== '' && phone.trim() !== '') {

        $.ajax({
            method: "POST",
            url: BASE_URL + '.json',
            data: JSON.stringify({ name, phone })
        }).then(function () {
            person.val('')
            personPhone.val('')
        }).catch(handleError);
    }
}