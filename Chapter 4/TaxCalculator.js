const prompt = require("prompt-sync")();

    	let taxRate15 = 0.15;
     	let taxRate20 = 0.2;
     	let earning = 30000;
      	let count = 1;
	let TotaltaxRate = 0;

	while(count <= 3){
  	let number =Number(prompt(" Enter number :"));

         if(number > earning){
      	TotaltaxRate= number * taxRate20 ;
           }
      	else{ TotaltaxRate = earning * taxRate15;
            }
	console.log(`The total tax earning of the citizen: $${TotaltaxRate.toFixed(2)}`);

	 count++;
	}
