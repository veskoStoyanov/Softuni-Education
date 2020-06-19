function acceptance() {
	let warehouse = document.getElementById('warehouse');
	let company = document.querySelector(`#fields input[name="shippingCompany"]`);
	let product = document.querySelector(`#fields input[name="productName"]`);
	let quantity = document.querySelector(`#fields input[name="productQuantity"]`);
	let scrape = document.querySelector(`#fields input[name="productScrape"]`);

	let button = document.getElementById('acceptance');
	button.addEventListener('click', addProducts);

	function addProducts() {
		if (company.value && product.value && +quantity.value && +scrape.value) {			
			let finalQuantity = +quantity.value - +scrape.value;

			if (finalQuantity > 0) {
				let div = document.createElement('div');
				let p = document.createElement('p');
				let btn = document.createElement('button');
				
				btn.textContent = 'Out of stock';
				btn.addEventListener('click',() => div.remove());

				p.textContent = `[${company.value}] ${product.value} - ${finalQuantity} pieces`
				
				div.appendChild(p);
				div.appendChild(btn);
				warehouse.appendChild(div);

				company.value = '';
				product.value = '';
				quantity.value = '';
				scrape.value = '';
				
			}
		}
	}

}