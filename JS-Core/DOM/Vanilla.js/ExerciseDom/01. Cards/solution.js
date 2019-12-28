 function solve() {
      let cards = Array.from(document.getElementsByTagName('img'));

      cards.forEach(x => {
         x.addEventListener('click', addEvent);
      });

      function addEvent(ev) {
         let card = ev.target;
         card.src = './images/whiteCard.jpg';
         card.removeEventListener('click', addEvent);
         let parent = card.parentNode.id;

         let result = document.getElementById('result').children;
         let leftSpan = result[0];
         let rightSpan = result[2];

         if (parent === 'player1Div') {
            leftSpan.textContent = card.name;

         } else if (parent === 'player2Div') {
            rightSpan.textContent = card.name;

         } if (leftSpan.textContent && rightSpan.textContent) {
            let winner;
            let looser;

            if (+leftSpan.textContent > +rightSpan.textContent) {
               winner = document.querySelector(`#player1Div > img[name="${leftSpan.textContent}"]`);
               looser = document.querySelector(`#player2Div > img[name = "${rightSpan.textContent}"]`);
            } else if (+leftSpan.textContent < +rightSpan.textContent) {
               winner = document.querySelector(`#player2Div > img[name="${rightSpan.textContent}"]`);
               looser = document.querySelector(`#player1Div > img[name="${leftSpan.textContent}"]`);
            }

            winner.style.border = '2px solid green'
            looser.style.border = '2px solid red'

            document.getElementById('history').textContent += `[${leftSpan.textContent} vs ${rightSpan.textContent}] `;

            leftSpan.textContent = '';
            rightSpan.textContent = ''
         }
      }
   }
