function attachEvents() {
    let btnLoad = document.getElementById('btnLoad');
    let listContacts = document.getElementById('phonebook');
    let inputPerson = document.getElementById('person');
    let inputPhone = document.getElementById('phone');
    let baseUrl = 'https://phonebook-nakov.firebaseio.com/phonebook'

    btnLoad.addEventListener('click', displayContacts);

    function displayContacts() {
        let url = baseUrl + '.json';
        fetch(url)
            .then((request) => request.json())
            .then((data) => {
                listContacts.innerHTML = '';

                if (data !== null) {
                    let keys = Object.keys(data);
                    for (const id of keys) {

                        let person = data[id].person;
                        let phone = data[id].phone;

                        let li = document.createElement('li');
                        li.textContent = `${person}: ${phone}`;

                        let btnDel = document.createElement('button');
                        btnDel.textContent = 'Delete';
                        btnDel.addEventListener('click', function () {
                            let url = baseUrl + '/' + id + '.json';
                            fetch(url, {
                                method: "DELETE"
                            })
                                .then((request) => request.json())
                                .then((function () {
                                    li.parentNode.removeChild(li);
                                }))
                                .catch(handleError)
                        })

                        li.appendChild(btnDel);
                        listContacts.appendChild(li);
                    }
                }
            })
            .catch(handleError)
    }

    let btnCreate = document.getElementById('btnCreate');
    btnCreate.addEventListener('click', addContact)

    function addContact() {
        let person = inputPerson.value;
        let phone = inputPhone.value;

        if (person.trim() && phone.trim()) {
            let url = baseUrl + '.json'
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({ person, phone })
            })
                .then((request) => request.json())
                .then((data) => data)
                .catch(handleError)

            displayContacts();
            inputPerson.value = '';
            inputPhone.value = '';
        }

    }
}

function handleError(err) {
    console.error(err);

}

attachEvents();