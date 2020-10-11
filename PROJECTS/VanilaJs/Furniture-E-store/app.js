let cartBtn = document.querySelector(".cart-btn");
let closeCartBtn = document.querySelector(".close-cart");
let clearCartBtn = document.querySelector(".clear-cart");
let cartDom = document.querySelector(".cart");
let cartOverlay = document.querySelector(".cart-overlay");
let cartItems = document.querySelector(".cart-items");
let cartTotal = document.querySelector(".cart-total");
let cartContainer = document.querySelector(".cart-container");
let productsDom = document.querySelector(".products-center");

let cart = [];
let buttonsDom = [];

class Products {
  async getProducts() {
    try {
      let result = await fetch("products.json");
      let data = await result.json();

      let products = data.items;
      products = products.map((item) => {
        let id = item.sys.id;
        let image = item.fields.image.fields.file.url;
        let { title, price } = item.fields;

        return { id, image, title, price };
      });

      return products;
    } catch (e) {
      console.log(e);
    }
  }
}

class UI {
  displayProducts(products) {
    let result = "";
    products.forEach((product) => {
      return (result += `<article class="product">
    <div class="img-container">
      <img
        src=${product.image}
        alt="product"
        class="product-img"
      />
      <button class="bag-btn" data-id="${product.id}">
        <i class="fas fa-shopping-cart"></i>
        add to bag
      </button>
    </div>
    <h3>${product.title}</h3>
    <h4>$${product.price}</h4>
  </article>`);
    });
    productsDom.innerHTML = result;
  }

  getBagButtons() {
    let btns = [...document.querySelectorAll(".bag-btn")];
    buttonsDom = btns;
    btns.forEach((btn) => {
      let id = btn.dataset.id;
      let inCart = cart.find((item) => item.id === id);
      if (inCart) {
        btn.innerText = "in Cart";
        btn.disabled = true;
      } else {
        btn.addEventListener("click", () => {
          event.target.innerText = "in Cart";
          event.target.disabled = true;

          let product = { ...Storage.getProduct(id), amount: 1 };
          cart.push(product);
          Storage.saveInCart(cart);
          this.setCartValues(cart);
          this.addCartItem(product);
          this.showCart();
        });
      }
    });
  }

  setCartValues(cart) {
    let tempTotal = 0;
    let itemTotal = 0;
    cart.map((p) => {
      tempTotal += p.amount * p.price;
      itemTotal += p.amount;
    });
    cartTotal.innerText = +tempTotal.toFixed(2);
    cartItems.innerText = itemTotal;
  }

  addCartItem(item) {
    let div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `<img src=${item.image} alt="product" />
      <div>
        <h4>${item.title}</h4>
        <h5>$${item.price}</h5>
        <span class="remove-item" data-id=${item.id}>remove</span>
      </div>
      <div>
        <i class="fas fa-chevron-up" data-id=${item.id}></i>
        <p class="item-amount">${item.amount}</p>
        <i class="fas fa-chevron-down" data-id=${item.id}></i>
      </div>`;

    cartContainer.appendChild(div);
  }

  showCart() {
    cartOverlay.classList.add("transparentBcg");
    cartDom.classList.add("showCart");
  }

  populate(cart) {
    cart.forEach((item) => this.addCartItem(item));
  }

  setupAPP() {
    cart = Storage.getCart();
    this.setCartValues(cart);
    this.populate(cart);
    cartBtn.addEventListener("click", this.showCart);
    closeCartBtn.addEventListener("click", this.hideCart);
  }

  hideCart() {
    cartOverlay.classList.remove("transparentBcg");
    cartDom.classList.remove("showCart");
  }

  cartLogic() {
    clearCartBtn.addEventListener("click", () => {
      this.clearCart();
    });

    cartContainer.addEventListener("click", (event) => {
      let element = event.target;
      let id = element.dataset.id;
      if (event.target.classList.contains("remove-item")) {
       
        this.removeItem(id);
        cartContainer.removeChild(element.parentElement.parentElement);
      } else if (event.target.classList.contains("fa-chevron-up")) {
        let element = event.target;
        let id = element.dataset.id;

        let item = cart.find((x) => x.id === id);
        item.amount = item.amount + 1;

        element.nextElementSibling.innerText = item.amount;
        this.setCartValues(cart);
        Storage.saveInCart(cart);
      } else if (event.target.classList.contains("fa-chevron-down")) {
        
        let item = cart.find((x) => x.id === id);
        item.amount = item.amount - 1;

        if(item.amount > 0) {
          element.previousElementSibling.innerText = item.amount;
          this.setCartValues(cart);
          Storage.saveInCart(cart);
        }else {
          this.removeItem(id)

          cartContainer.removeChild(element.parentElement.parentElement);
        }


        
      }
    });
  }

  clearCart() {
    let cartItems = cart.map((item) => item.id);
    cartItems.forEach((id) => this.removeItem(id));

    while (cartContainer.children.length > 0) {
      cartContainer.removeChild(cartContainer.children[0]);
    }
    this.hideCart();
  }

  removeItem(id) {
    cart = cart.filter((item) => item.id !== id);

    this.setCartValues(cart);
    Storage.saveInCart(cart);
    let button = this.getSingleButton(id);
    button.disabled = false;
    button.innerHTML = `<i class="fas fa-shopping-cart"></i>add to cart`;
  }

  getSingleButton(id) {
    return buttonsDom.find((btn) => btn.dataset.id === id);
  }
}

class Storage {
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }

  static getProduct(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    return products.find((item) => item.id === id);
  }

  static saveInCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  static getCart() {
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let ui = new UI();
  let products = new Products();
  ui.setupAPP();
  products
    .getProducts()
    .then((result) => {
      ui.displayProducts(result);
      Storage.saveProducts(result);
    })
    .then(() => {
      ui.getBagButtons();
      ui.cartLogic();
    });
});
