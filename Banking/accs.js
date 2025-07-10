class BankAccount {
    constructor(owner, initialBalance = 0) {
        this.owner = owner;
        this.balance = initialBalance;
        this.transactions = [];
    }

    deposit(amount) {
        if (amount <= 0) {
            alert("Deposit amount must be positive.");
            return;
        }
        this.balance += amount;
        this.transactions.push({ type: "Deposit", amount, date: new Date() });
    }

    withdraw(amount) {
        if (amount <= 0) {
            alert("Withdrawal amount must be positive.");
            return;
        }
        if (amount > this.balance) {
            alert("Insufficient funds.");
            return;
        }
        this.balance -= amount;
        this.transactions.push({ type: "Withdraw", amount, date: new Date() });
    }

    getBalance() {
        return this.balance;
    }

    getTransactions() {
        return this.transactions;
    }
}

let account = null;

function createAccount() {
    const owner = document.getElementById("owner").value.trim();
    const initial = parseFloat(document.getElementById("initialBalance").value);

    if (!owner || isNaN(initial)) {
        alert("Please enter a valid name and balance.");
        return;
    }

    account = new BankAccount(owner, initial);
    document.getElementById("bankActions").style.display = "block";
    alert(`Account for ${owner} created with $${initial}.`);
}

function deposit() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }
    account.deposit(amount);
    alert(`Deposited $${amount}`);
}

function withdraw() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }
    account.withdraw(amount);
    alert(`Withdrew $${amount}`);
}

function checkBalance() {
    document.getElementById("balanceDisplay").textContent = `Current balance: $${account.getBalance()}`;
}

function showTransactions() {
    const transactions = account.getTransactions();
    const container = document.getElementById("transactions");
    container.innerHTML = "<strong>Transaction History:</strong><br/>";
    transactions.forEach((t, i) => {
        container.innerHTML += `${i + 1}. ${t.date.toLocaleString()} - ${t.type} $${t.amount}<br/>`;
    });
}

