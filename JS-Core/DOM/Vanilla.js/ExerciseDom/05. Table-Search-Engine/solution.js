function solve() {
   let button = document.getElementById('searchBtn');
   button.addEventListener('click', searchButton)

   function searchButton() {
      let data = document.querySelectorAll('tbody > tr > td');
      let parents = document.querySelectorAll('tbody > tr');

      for (const clas of parents) {
         if (clas.classList.contains('select')) {
            clas.removeAttribute('class')
         }
      }

      let input = document.getElementById('searchField');
      let inputValue = input.value.toLowerCase();

      if (inputValue !== '') {
         for (let m of data) {
            let match = m.textContent.toLowerCase();

            if (match.includes(inputValue)) {
               if (m.className !== 'select')
                  finded(m);
            }
         }
      }

      input.value = '';

      function finded(m) {
         let parent = m.parentNode;
         parent.setAttribute('class', 'select')
      }
   }
}