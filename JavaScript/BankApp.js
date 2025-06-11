const prompt = require("prompt-sync")();

function bankApp() {
  let balance = parseFloat(prompt("Enter your starting balance: "));
  let transactionLog = [];

  if (balance < 100) {
    console.log("Enter a higher balance to use the app.");
    return;
  }

  while (true) {
    console.log("\n>>> Semicolon Bank App >>>");
    console.log("Enter 1 for withdrawal");
    console.log("Enter 2 for transaction log");
    console.log("Enter 3 to exit");

    let userSelect = prompt("Select option: ");

    if (userSelect === '1') {
      console.log(`\nYour current balance is ₦${balance.toFixed(2)}`);
      let amount = parseFloat(prompt("Enter withdrawal amount: "));
      const withdrawalFee = 100;
      const totalWithdrawal = amount + withdrawalFee;

      if (amount <= 0) {
        console.log("Negative amount cannot be processed.");
      } else if (amount > 20000) {
        console.log("Withdrawal amount must not exceed ₦20,000.");
      } else if (amount % 500 !== 0 && amount % 1000 !== 0) {
        console.log("Amount must be a multiple of 500 or 1000.");
      } else if (totalWithdrawal > balance) {
        console.log("Insufficient balance.");
      } else {
        balance -= totalWithdrawal;
        console.log("Transaction successful!");
        console.log(`Withdrawn: ₦${amount}`);
        console.log(`Fee: ₦${withdrawalFee}`);
        console.log(`Remaining Balance: ₦${balance.toFixed(2)}`);

        transactionLog.push(
          `Withdrawal: ₦${amount} | Fee: ₦${withdrawalFee} | Balance: ₦${balance.toFixed(2)}`
        );
      }

    } else if (userSelect === '2') {
      console.log("\n=== Transaction Log ===");
      if (transactionLog.length > 0) {
        for (let log of transactionLog) {
          console.log(log);
        }
      } else {
        console.log("No transactions yet.");
      }

    } else if (userSelect === '3') {
      console.log("Exiting bank app. Goodbye!");
      break;
    } else {
      console.log("Invalid option. Try again.");
    }
  }
}

bankApp();
