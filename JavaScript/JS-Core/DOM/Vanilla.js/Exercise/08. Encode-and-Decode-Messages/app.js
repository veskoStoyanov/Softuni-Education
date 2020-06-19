function encodeAndDecodeMessages() {
    let firstBtn = document.querySelectorAll('#main button')[0];
    let firstTextArea = document.querySelectorAll('#main textarea')[0]

    let secBtn = document.querySelectorAll('#main button')[1];
    let secTextArea = document.querySelectorAll('#main textarea')[1]

    firstBtn.addEventListener('click', sendFirstMessage)
    secBtn.addEventListener('click', readMessage)


    function sendFirstMessage() {
        let message = '';

        for (const m of firstTextArea.value) {
            message += String.fromCharCode(m.charCodeAt(0) + 1);
        }
        secTextArea.value = message;

        firstTextArea.value = '';
    }

    function readMessage() {

        let message = '';
        for (const m of secTextArea.value) {
            message += String.fromCharCode(m.charCodeAt(0) - 1);
        }

        secTextArea.value = message;
    }
}