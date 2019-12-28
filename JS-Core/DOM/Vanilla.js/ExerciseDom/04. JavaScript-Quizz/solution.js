function solve() {
  let buttons = Array.from(document.getElementsByClassName('answer-text'));
  buttons[0].addEventListener('click', answerFirstQuestion);
  buttons[1].addEventListener('click', answerFirstQuestion);

  let arrAnswer = [0];
  let section = document.querySelectorAll('section');

  function answerFirstQuestion(ev) {
    let answer = ev.target.textContent;

    if (answer === 'onclick') {
      arrAnswer[0]++;
    }

    section[0].style.display = 'none';
    section[1].style.display = 'block';

    buttons[2].addEventListener('click', answerSecondQuestion);
    buttons[3].addEventListener('click', answerSecondQuestion);

    function answerSecondQuestion(ev) {
      let answer = ev.target.textContent;

      if (answer === 'JSON.stringify()') {
        arrAnswer[0]++;
      }

      section[1].style.display = 'none';
      section[2].style.display = 'block';
      buttons[4].addEventListener('click', answerThirdQuestion);
      buttons[5].addEventListener('click', answerThirdQuestion);

      function answerThirdQuestion(ev) {
        let answer = ev.target.textContent;

        if (answer === 'A programming API for HTML and XML documents') {
          arrAnswer[0]++;
        }

        section[2].style.display = 'none';
        let result = document.querySelector('#results > li > h1');
        let text = '';

        if (arrAnswer[0] > 2) {
          text = "You are recognized as top JavaScript fan!";
        } else {
          text = `You have ${arrAnswer[0]} right answers`
        }

        result.textContent = text;
        document.getElementById('results').style.display = 'block';
      }
    }
  }
}
