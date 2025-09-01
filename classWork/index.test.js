
const {getEvenNumbers, createCounter} = require ("./function")

test("that the function returns even numbers", ()=>{
    const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10]; //Arrange
    const result = getEvenNumbers(arrayOfNumbers); //ACT
    const  expected = [2,4,6,8,10];
    expect(getEvenNumbers(arrayOfNumbers),toEqual(expected)) // Assert

})

describe("createCounter", ()=>{
    test("that the initial count is 0", ()=>{
        const counter = createCounter();
        counter.increment()
        expect(counter.getCount()).toBe(0)
})



})
