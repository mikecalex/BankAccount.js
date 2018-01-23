let initialBalance = 1000;
let bills = [-45, -99.95, -34.43];

class Bankaccount {
  constructor(balance) {
    this.balance = balance;
    this.transactions = [];
  }
  enterTransaction(amount){
    amount.forEach((transaction) => {
      this.transactions.push(transaction);
    });
    return this.transactions;
  }
  calculateBalance(){
    this.transactions.forEach((dollar) => {
      this.balance += dollar;
    });
    return this.balance;
  }
}

let mike = new Bankaccount(initialBalance);

console.log(mike.balance)
mike.enterTransaction(bills)
console.log(mike.calculateBalance())
