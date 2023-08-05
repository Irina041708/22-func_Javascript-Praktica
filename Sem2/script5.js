// /Создайте класс BankAccount, который представляет банковский счет.
// У него должны быть свойства accountNumber (номер счета) и balance
// (баланс), а также методы deposit(amount) для пополнения счета, 
// withdraw(amount) для снятия денег со счета и метод printBalance, 
// который отобразит в консоль текущий баланс счета. Класс должен иметь
// также статическое свойство bankName со значением "GBank", которое 
// содержит название банка.
//  ----------------
class BankAccount {
    static bankName = "GBank";
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    };
    deposit(amount) {
        const error = validateAmout(amount);
        if (error !== null) {
            console.error(error);
            return;
        }
        this.balance += amount;
    };
    withdraw(amount) {
        const error = validateAmout(amount);
        if (error !== null) {
            console.error(error);
            return;
        }
        if ((this.balance - amount) <= 0) {
            console.error(`У вас недостаточно средств`);
            return;
        }
        this.balance -= amount;
    };
    printBalance() {
        console.log(`${BankAccount.bankName} account ${this.accountNumber} balance: ${this.balance}`);
    };
}
function validateAmout(amount) {
    if (!Number.isFinite(amount)) {
        return `Wrong amount, value  must be a finite number`;
    }
    if (Math.floor(amount * 100) / 100 !== amount) {
        return `куда ты там режешь копейки`;
    }
    if (amount <= 0) {
        return `Wrong deposit amount, must be a positive number.`;
    }
    return null;
}

const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500.255);
account1.withdraw(200);

account1.withdraw(1500); // Insufficient funds in account 1234567890
account1.printBalance();//


account1.withdraw(-200); // Wrong deposit amount, must be a positive number.
account1.printBalance();//

account1.deposit(-500); // Wrong deposit amount, must be a positive number.
account1.printBalance();//

account1.deposit(Infinity); // Wrong deposit amount, must be a positive number.
account1.printBalance();//

account1.deposit("mmsdihgdljksnvb");
account1.printBalance(); // GBank account "1234567890" balance: 1300
