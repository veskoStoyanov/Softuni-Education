const host = 'http://localhost:5000/';

async function register(email, password) {
    const res = await window.fetch(host + 'user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        })
    });

    return res.json();
}

async function login(email, password, type) {

    const res = await window.fetch(host + `user/login/${type}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        })
    })

    return res.json()
}

async function loginEmail(endpoint) {

    const res = await window.fetch(host + `user/login/${endpoint}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    return res.json()
}

async function loginMagicLink(endpoint, token) {
    console.log(endpoint, token);
    

    const res = await window.fetch(host + `user/login/${endpoint}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
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

async function remove(token) {
    const res = await window.fetch(host + `user/delete`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    
    return res.json()
}

export {
    register,
    login,
    loginMagicLink,
    logout,
    loginEmail,
    remove
}