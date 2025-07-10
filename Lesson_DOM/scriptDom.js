// Bank Account Constructor Function (Object)
function BankAccount(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
    this.transactions = [];

    this.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            this.transactions.push({ type: "Deposit", amount });
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    };

    this.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.transactions.push({ type: "Withdraw", amount });
            console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Invalid or insufficient funds.");
        }
    };

    this.viewTransactions = function () {
        console.log(`Transaction history for ${this.owner}:`);
        if (this.transactions.length === 0) {
            console.log("No transactions yet.");
        } else {
            for (let i = 0; i < this.transactions.length; i++) {
                const t = this.transactions[i];
                console.log(`${i + 1}. ${t.type} - $${t.amount}`);
            }
        }
    };
}

// --- Simulation ---
const prompt = require('prompt-sync')(); // for input in Node.js

console.log("Welcome to JS Bank!");
const name = prompt("Enter your name: ");
const account = new BankAccount(name);

let running = true;

while (running) {
    console.log("\nChoose an option:");
    console.log("1. Deposit");
    console.log("2. Withdraw");
    console.log("3. View Balance");
    console.log("4. View Transactions");
    console.log("5. Exit");

    const choice = prompt("Enter choice: ");

    switch (choice) {
        case "1":
            const depositAmount = parseFloat(prompt("Enter amount to deposit: "));
            account.deposit(depositAmount);
            break;
        case "2":
            const withdrawAmount = parseFloat(prompt("Enter amount to withdraw: "));
            account.withdraw(withdrawAmount);
            break;
        case "3":
            console.log(`Current Balance: $${account.balance}`);
            break;
        case "4":
            account.viewTransactions();
            break;
        case "5":
            running = false;
            console.log("Thank you for banking with us!");
            break;
        default:
            console.log("Invalid choice. Please try again.");
    }
}
