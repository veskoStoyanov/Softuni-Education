const host = 'http://localhost:9999/api/'

async function register(username, password) {
  const res = await window.fetch(host + 'user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    })
  });

  return res.json();
}

async function login(username, password) {
  const res = await window.fetch(host + 'user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password
    })
  })

  return res.json()
}



async function logout() {
  const res = await window.fetch(host + 'user/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return res.json()
}

async function fetchItems(endpoint) {
  const res = await window.fetch(host + endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return res.json()
}

async function fetchOne(id, endpoint) {
  const res = await window.fetch(host + endpoint + '/' + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })


  return res.json()
}

async function createProduct(data, collection) {
  const res = await window.fetch(host + collection, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })

  return res.json()
}

async function editItem(data, id, collection) {
  const res = await window.fetch(host + collection + '/' + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })

  return res.json()
}

async function deleteItem(id, collection) {
  const res = await window.fetch(host + collection + "/" + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return res.json()
}

export {
  register,
  login,
  logout,
  createProduct,
  editItem,
  deleteItem,
  fetchItems,
  fetchOne
}
