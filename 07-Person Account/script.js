//Create an object literal called personAccount. 
//It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo methods. 


function personAccount(firstName, lastName, incomes, expenses) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.incomes = incomes;
  this.expenses = expenses;
  this.totalIncome = function () {
    var sum = this.incomes.reduce(function(a, b){
      return a + b;
    }, 0);  
    return sum;
  };
  this.totalExpense = function () {
    var sum = this.expenses.reduce(function(a, b){
      return a + b;
    }, 0);  
    return sum;
  };
  this.addIncome = function (inc) {
    return this.incomes.push(inc);
  };
  this.addExpenses = function (inc) {
    return this.expenses.push(inc);
  };
  this.accountInfo = function () {
    let totalProfit = this.totalIncome() - this.totalExpense();
    return `${this.firstName} ${this.lastName} has ${totalProfit} dolar profit`;
  }

}
let bruceIncomes = [500, 750, 650, 350, 200, 500];
let bruceExpenses = [75, 25, 125, 425, 220];
let Bruce = new personAccount('Bruce','Astor', bruceIncomes, bruceExpenses );
Bruce.addIncome(1000);
Bruce.addExpenses(300);

console.log(Bruce.totalIncome());
console.log(Bruce.accountInfo());
