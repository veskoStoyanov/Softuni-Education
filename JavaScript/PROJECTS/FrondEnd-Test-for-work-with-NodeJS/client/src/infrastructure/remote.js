const host = "http://localhost:9999/api/";

async function fetchItems(endpoint) {
  const res = await window.fetch(host + endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

async function fetchOne(id, endpoint) {
  const res = await window.fetch(host + endpoint + "/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

async function createProduct(data, collection) {
  const res = await window.fetch(host + collection, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

async function editItem(data, id, collection) {
  const res = await window.fetch(host + collection + "/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

async function deleteItem(id, collection) {
  const res = await window.fetch(host + collection + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export { createProduct, editItem, deleteItem, fetchItems, fetchOne };
