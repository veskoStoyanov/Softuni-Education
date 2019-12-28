let auth = (() => {
    function saveSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authtoken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
    }

    // user/login
    function login(username, password) {
        let userData = {
            username,
            password
        };

        return requester.post('user', 'login', 'basic', userData);
    }

    // user/register
    function register(username, password) {
        let userData = {
            username,
            password,

        };

        return requester.post('user', '', 'basic', userData);
    }

    // user/logout
    function logout() {
        let logoutData = {
            authtoken: sessionStorage.getItem('authtoken')
        };

        return requester.post('user', '_logout', 'kinvey', logoutData);
    }

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    function showSuccess(message) {
        let infoBox = $('#successBox');
        infoBox.text(message);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 5000);
    }

    function showError(message) {
        let errorBox = document.getElementById('errorBox')
        errorBox.textContent = message;
        errorBox.style.display = 'block';
        errorBox.addEventListener('click',function () {
            errorBox.style.display = 'none';
        });
        auth.stopLoading();
    }

    function showLoading() {
        let loadingBox = $('#loadingBox');
        loadingBox.text('Loading...');
        loadingBox.show();
    }

    function stopLoading() {
        let loadingBox = $('#loadingBox');

        loadingBox.hide();
    }






    return {
        login,
        register,
        logout,
        saveSession,
        handleError,
        showSuccess,
        showLoading,
        stopLoading,
        showError
    }
})()