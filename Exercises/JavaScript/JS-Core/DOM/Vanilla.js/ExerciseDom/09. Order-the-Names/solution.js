function solve() {
    let btn = document.querySelector('button');
    let input = document.querySelector('input');
    let li = document.querySelectorAll('ol>li');

    btn.addEventListener('click', addName)

    function addName() {
        let names = input.value.split(', ').filter(n => n !== '');

        for (const name of names) {
            let word = name[0].toUpperCase();
            let nameNew = word + name.slice(1).toLowerCase();
            num = word.charCodeAt(0) - 65;

            if (li[num].textContent === '') {
                li[num].textContent = nameNew;
            } else {
                li[num].textContent += ', ' + nameNew;
            }

            input.value = '';
        }
    }
}
