let cardNumber = [3,4,0,1,2,6, 7, 8,9,4,5,2,7,8,9,5];

function AtmCardNumber(cardNumber){
let cardLength = cardNumber.length;
let cardVisa = {};
let cardMasterCard = {};
let cardDiscover = {};
let cardAmericaExpress = {};
let cardValid = {};

let cardNotValid = {
valid : false,
reason : "Invalid length"
};

if(cardLength == 15 && cardNumber[0] == 3){
cardAmericaExpress.valid = true;
cardAmericaExpress.issuer = "America Express";
return cardAmericaExpress;
}
else if(cardLength == 16 && cardNumber[0] == 4){
cardVisa.valid = true;
cardVisa.issuer = "Visa";
return cardVisa;
}
else if(cardLength == 16 && cardNumber[0] == 5){
cardMasterCard.valid = true;
cardMasterCard.issuer = "MasterCard";
return cardMasterCard;
}
else if(cardLength == 16 && cardNumber[0] == 6){
cardDiscover.valid = true;
cardDiscover.issuer = "Discover";
return cardDiscover;
}
else{
return cardNotValid;
}

}

console.log(AtmCardNumber(cardNumber));