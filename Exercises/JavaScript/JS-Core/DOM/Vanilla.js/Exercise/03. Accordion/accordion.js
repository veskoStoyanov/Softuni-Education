function toggle() {
    let div = document.getElementById('extra');
    let button = document.getElementsByClassName('button')[0];

    if (button.textContent === 'More') {
        div.style.display = 'block';
        button.textContent = 'Less';
    }else{
        div.style.display = 'none';
        button.textContent = 'More';
    }
}