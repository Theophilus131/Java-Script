const prompt = require("prompt-sync")();

function bankApp(){

	let balance = console.log("enter your balance: "))
	
	if(balance < 100){
		console.log("enter higher balance : ")
			}
while (true){

	console.log("\n >>> semicolon Bank App>>>\n")
	
	console.log("enter 1 for withdrawal: ")

	console.log("enter 2 for transaction log: ")

	console.log("enter 3 to exist: ")

	user_select = console.log("select option: ")

	if user_select == '1':
	
		let amount = console.log("enter withdrawal fee: ")

		let withdrawal_fee = 100

		let total_withdrawal = amount + withdrawal_fee

		let amount = 0.9 * balance

	if (amount < 0){

		console.log("Negative amount cannot be processed: ");
			}
	else if (amount % 500 == 0)
		
			let balance = balance - amount

	console.log("tranction succesful :");

	console.log(f" your balance is {balance}");

	console.log(f" withdrawal fee is {withdrawal_fee}");

	console.log(f" amount is {amount}");

	
	#if user_select == '2':


	if user_select == '3':
		print("exist bank app")
	
		}
			}


bank_app()
	


