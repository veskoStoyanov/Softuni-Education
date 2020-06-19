class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }
  submitBudgetForm() {
    let value = this.budgetInput.value;
    if (value === "" || value < 0) {
      this.budgetFeedback.classList.add("showItem");
      this.budgetFeedback.innerHTML = `<p>value cannot be empty or negative</p>`;
      setTimeout(() => {
        this.budgetFeedback.classList.remove("showItem");
      }, 4000);
    } else {
      this.budgetAmount.textContent = value;
      this.budgetInput.value = "";
      this.showBalance();
    }
  }
  showBalance() {
    let expense = this.totalExpense();
    let total = parseInt(this.budgetAmount.textContent) - expense;
   
    if (total < 0) {
      this.balanceAmount.classList.remove("showGreen", "showBlack");
      this.balanceAmount.classList.add("showRed");
    } else if (total > 0) {
      this.balanceAmount.classList.remove("showRed", "showBlack");
      this.balanceAmount.classList.add("showGreen");
    }
    if (total === 0) {
      this.balanceAmount.classList.remove("showGreen", "showRed");
      this.balanceAmount.classList.add("showBlack");
    }
    this.balanceAmount.textContent = total;
  }

  totalExpense() {
    let total = 0;
    if (this.itemList.length > 0) {
      total = this.itemList.reduce((acc, current) => {
        return (acc += current.amount);
      }, 0);
    }
    this.expenseAmount.textContent = total;
    return total;
  }

  submitExpenseForm() {
    let expense = this.expenseInput.value;
    let amountOfExpense = this.amountInput.value;
    if (expense === "" || amountOfExpense === "" || amountOfExpense < 0) {
      this.expenseFeedback.classList.add("showItem");
      this.expenseFeedback.innerHTML = `<p>values cannot be empty ot negative</p>`;
      setTimeout(() => {
        this.expenseFeedback.classList.remove("showItem");
      }, 4000);
    } else {
      let amount = parseInt(amountOfExpense);
      this.expenseInput.value = "";
      this.amountInput.value = "";

      let totalExpense = {
        id: this.itemID,
        title: expense,
        amount,
      };

      this.itemID++;
      this.itemList.push(totalExpense);
      this.addExpense(totalExpense);
      this.totalExpense();
      this.showBalance();
    }
  }
  addExpense(expense) {
    let div = document.createElement("div");
    div.classList.add("expense");
    div.innerHTML = `<div class="expense-item d-flex justify-content-between align-items-baseline">

    <h6 class="expense-title mb-0 text-uppercase list-item">- ${expense.title}</h6>
    <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>

    <div class="expense-icons list-item">

     <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
      <i class="fas fa-edit" ></i>
     </a>
     <a href="#" class="delete-icon" data-id="${expense.id}" >
      <i class="fas fa-trash" ></i>
     </a>
    </div>
   </div>`;
    this.expenseList.appendChild(div);
  }

  deleteExpense(element) {  
    let id = parseInt(element.dataset.id);

    this.itemList = this.itemList.filter(x => x.id !==  id);
    element.parentElement.parentElement.parentElement.parentElement
    .removeChild(element.parentElement.parentElement.parentElement);
    this.totalExpense();
    this.showBalance();

  }

  editExpense(element) {
    let id = parseInt(element.dataset.id);
    let title = element.parentElement.parentElement.children[0].textContent.slice(2);
    let price = element.parentElement.parentElement.children[1].textContent;
    element.parentElement.parentElement.parentElement.parentElement
    .removeChild(element.parentElement.parentElement.parentElement);
    this.itemList = this.itemList.filter(x => x.id !==  id);
    this.totalExpense();
    this.expenseInput.value = title;
    this.amountInput.value = price;
    
  }
}

function eventListeners(params) {
  let budgetForm = document.getElementById("budget-form");
  let expenseForm = document.getElementById("expense-form");
  let expenseList = document.getElementById("expense-list");

  //new instnce of Ui class

  let ui = new UI();

  //budget form submit
  budgetForm.addEventListener("submit", function (event) {
    event.preventDefault();
    ui.submitBudgetForm();
  });

  //expenseForm submit
  expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();
    ui.submitExpenseForm();
  });

  //expense click
  expenseList.addEventListener("click", (event) => {  
    let element = event.target;
    if (element.classList.contains("fa-edit")) {
     
      ui.editExpense(element.parentElement);
     
     
    } else if (element.classList.contains("fa-trash")) {
      
      ui.deleteExpense(element.parentElement)
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  eventListeners();
});
