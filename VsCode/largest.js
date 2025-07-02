function LargestWord(word){

    let largest = "";
    let  currentWord= "";
    
    for(let index = 0; index < word.length; index++){
		if(word[index] === " "){
			if(currentWord.length > largest.length){
        
				largest = currentWord;
            }
            currentWord = "";
		}else{
			currentWord += word[index]
		}
	}
    if(currentWord.length > largest.length){
		largest = currentWord;
	}
    return largest;
}


let result = "Ada is going to semicolon";
console.log(LargestWord(result));

