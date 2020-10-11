function attachEventsListeners() {
    let daysInput = document.getElementById('days');
    let daysBtn = document.getElementById('daysBtn');

    let hoursInput = document.getElementById('hours');
    let hoursBtn = document.getElementById('hoursBtn');

    let minutesInput = document.getElementById('minutes');
    let minutesBtn = document.getElementById('minutesBtn');

    let secondsInput = document.getElementById('seconds');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', days)
    hoursBtn.addEventListener('click', hours)
    minutesBtn.addEventListener('click', minutes)
    secondsBtn.addEventListener('click', seconds)

    function days() {
        hoursInput.value = daysInput.value * 24;
        minutesInput.value = daysInput.value * 24 * 60;
        secondsInput.value = daysInput.value * 24 * 60 * 60;
    }

    function hours() {
        daysInput.value = hoursInput.value / 24;
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = hoursInput.value * 60 * 60;
    }

    function minutes() {
        daysInput.value = minutesInput.value / 60 / 24;
        hoursInput.value = minutesInput.value / 60;
        secondsInput.value = minutesInput.value * 60;
    }

    function seconds() {
        daysInput.value = secondsInput.value / 60 / 60 / 24;
        hoursInput.value = secondsInput.value / 60 / 60;
        minutesInput.value = secondsInput.value / 60;
    }
}