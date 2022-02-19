//-Allow multiple accounts to be created
//-Each account can have many transactions
//-Allow withdrawals and deposits into accounts
//-Allow us to retrieve the transaction history of an account (all withdrawals and deposits)
//-Allow us to retrieve the current balance of the account at any time
//-Don't allow withdrawals that exceed the remaining balance of the account

//let balance = 500.00;

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    //console.log(this.isAllowed)
    if (this.isAllowed()) {
      this.time = new Date();
      this.account.addTransaction(this);
      return true;
    } else {
      console.log("Withdrawal Cancelled: Insufficient Funds.");
      return false;
    }
  }
  isAllowed() {
    if (this.account.balance + this.value < 0)
      return false;
    else
      return true;
  }
}


class Withdrawal extends Transaction {
  get value() {
    return this.amount * -1;
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}

class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
  get balance() {
    let bal = 0;
    for (let trans of this.transactions) {
      bal += trans.value;
    }
    return bal;
  }
}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
/*
const myAccount = new Account("snow-patrol");
t1 = new Withdrawal(50.25, myAccount);
console.log('commit result:', t1.commit());
//console.log('Transaction 1:', t1);

console.log('myAccount:', myAccount);

t2 = new Withdrawal(9.99, myAccount);
console.log('commit result:',t2.commit());
console.log('Transaction 2:', t2);

console.log('Balance:', myAccount.balance);

t3 = new Deposit(120.00, myAccount);
console.log('commit result:',t3.commit());
console.log('Transaction 3:', t3);

console.log('Ending Balance:', myAccount.balance);

t4 = new Withdrawal(50.25, myAccount);
console.log('commit result:',t4.commit());

console.log('Ending Balance2:', myAccount.balance);
*/
