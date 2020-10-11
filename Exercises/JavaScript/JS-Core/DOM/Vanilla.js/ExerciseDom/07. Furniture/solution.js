function solve() {
  let btnGenerate = document.querySelector('#exercise > button');
  btnGenerate.addEventListener('click', generate);
  let btnBuy = document.querySelectorAll('button')[1];
  btnBuy.addEventListener('click', clickBuy)

  function generate() {
    let textArea = document.querySelector('#exercise > textarea');
    let obj = JSON.parse(textArea.value);
    let tbody = document.querySelector('tbody');

    for (const m of obj) {
      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      let img = document.createElement('img');
      img.src = m.img;
      td1.appendChild(img);
      tr.appendChild(td1);

      let td2 = document.createElement('td');
      let p2 = document.createElement('p');
      p2.textContent = m.name;
      td2.appendChild(p2);
      tr.appendChild(td2);

      let td3 = document.createElement('td');
      let p3 = document.createElement('p');
      p3.textContent = m.price;
      td3.appendChild(p3);
      tr.appendChild(td3);

      let td4 = document.createElement('td');
      let p4 = document.createElement('p');
      p4.textContent = m.decFactor;
      td4.appendChild(p4);
      tr.appendChild(td4);

      let td5 = document.createElement('td');
      let input = document.createElement('input');
      input.type = "checkbox";
      td5.appendChild(input);
      tr.appendChild(td5);

      tbody.appendChild(tr);
    }
  }

  function clickBuy() {
    let arrName = [];
    let arrPrice = [0, 0];
    let textArea2 = document.querySelectorAll('textarea')[1];
    let trAll = document.querySelectorAll('tbody>tr');

    for (const n of trAll) {
      let tdChild = n.children[4];
      let inputChild = tdChild.children[0];

      if (inputChild.checked) {
        arrName.push(n.children[1].children[0].textContent);
        arrPrice[0] += Number(n.children[2].children[0].textContent);
        arrPrice[1] += Number(n.children[3].children[0].textContent);
      }
    }

    textArea2.value += `Bought furniture: ${arrName.join(', ')}\n`;
    textArea2.value += `Total price: ${arrPrice[0].toFixed(2)}\n`;
    textArea2.value += `Average decoration factor: ${arrPrice[1] / arrName.length}`;
  }
}