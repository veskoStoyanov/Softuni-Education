function stopwatch() {
    let startBut = document.getElementById('startBtn');
    let stopBut = document.getElementById('stopBtn');
    startBut.addEventListener('click', start);
    stopBut.addEventListener('click', stop);
    let seconds;
    let interval;

    function start() {
        seconds = 0;
        inrement();
        startBut.disabled = true;
        stopBut.disabled = false;
        interval = setInterval(inrement, 1000)
    }

    function inrement() {
        let currentSec = seconds % 60;
        if (currentSec < 10) {
            currentSec = '0' + currentSec;
        }

        let curMin = Math.floor(seconds / 60);
        if (curMin < 10) {
            curMin = '0' + curMin;
        }

        document.getElementById('time').textContent = curMin + ':' + currentSec;
        seconds++;
    }

    function stop() {
        startBut.disabled = false;
        stopBut.disabled = true;

        clearInterval(interval);
    }
}