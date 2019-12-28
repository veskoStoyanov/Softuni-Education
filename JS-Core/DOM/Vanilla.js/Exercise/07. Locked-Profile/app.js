function lockedProfile() {
    let buttons = Array.from(document.getElementsByTagName('button'));

    buttons.forEach((btn) => {
        btn.addEventListener('click', eventClickk)
    })

    function eventClickk(ev) {
        let parent = ev.target.parentNode;
        let locked = parent.children[4];
        let btn = parent.children[10]
        let info = parent.children[9];

        if (btn.textContent === 'Show more') {
            if (locked.checked) {
                btn.textContent = 'Hide it';
                info.style.display = 'block';
            }
        } else {
            if (locked.checked) {
                info.style.display = 'none';
                btn.textContent = 'Show more';
            }
        }
    }

}