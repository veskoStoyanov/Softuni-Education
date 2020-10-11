function notify(message) {
    let alert = document.getElementById('notification');
    alert.textContent = message;

    alert.style.display = 'block';
    setTimeout(setAlertTimeOff, 2000)

    function setAlertTimeOff() {
        alert.style.display = 'none';
    }
}