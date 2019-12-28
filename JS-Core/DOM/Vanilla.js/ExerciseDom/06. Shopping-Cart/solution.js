function solve() {
   let buyButtons = Array.from(document.getElementsByClassName('add-product'));
   let products = [];
   let prices = [];
   prices[0] = 0;

   let checkoutBut = document.querySelector('.checkout');
   checkoutBut.addEventListener('click', printSum)

   buyButtons.forEach(ev => {
      ev.addEventListener('click', buySomething)
   })

   function buySomething(ev) {
      let target = ev.target;
      let parent = target.parentNode.parentNode;
      let children = parent.children;
      let product = children[1].children[0].textContent;

      let price = children[3].textContent;
      price = Number(price);
      prices[0] += price;
      price = price.toFixed(2);

      if (!products.includes(product)) {
         products.push(product);
      }

      let text = `Added ${product} for ${price} to the cart.\n`;
      let textArea = document.getElementsByTagName('textarea')[0];
      textArea.value += text;
   }

   function printSum() {
      let buyyButtons = Array.from(document.getElementsByClassName('add-product'));
      let textArea = document.getElementsByTagName('textarea')[0];

      buyyButtons.forEach(el => {
         el.setAttribute('disabled', 'disabled');
      })

      let sum = prices[0].toFixed(2);
      let textPrint = `You bought ${products.join(', ')} for ${sum}.`;
      textArea.value += textPrint;
      document.querySelector('.checkout').removeEventListener('click', printSum);
   }
}

