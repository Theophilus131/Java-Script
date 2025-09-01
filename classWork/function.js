function getEvenNumbers(array){

    return array.filter((num)=> (num % 2 == 0))
    
}

    const createCounter = function(params){
        let counter = 0;
    
    return {
        getCount:() => {
            return counter;
        },

        increment: () => {
            counter++
        },

        decrement: () =>{
            counter--

        },

        reset: () =>{
            counter = 0
        }

        

       

    }
}

    module.exports = {getEvenNumbers, createCounter}
