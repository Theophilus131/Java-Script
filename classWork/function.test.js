
const { getEvenNumbers, createCounter } = require("./function");

test("that the function returns even numbers", () => {
    const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10]; // Arrange
    const result = getEvenNumbers(arrayOfNumbers); // Act
    const expected = [2,4,6,8,10];
    expect(result).toEqual(expected); // Assert
});


describe("createCounter", ()=>{
    test("that the initial count is 0", ()=>{
        const counter = createCounter();
        expect(counter.getCount()).toBe(0)
});

    test("that the counter can be increase by 1", ()=>{
        const counter = createCounter();
        counter.increment()
        expect(counter.getCount()).toBe(1)
   
    });

    test("that the counter can be increased by 2", ()=>{
        const counter = createCounter();
        counter.increment();
        counter.increment();
        expect(counter.getCount()).toBe(2)

    });
  
    test("that the counter can be decrease", ()=>{
        const counter = createCounter();
        counter.decrement();
        expect(counter.getCount()).toBe(-1)

    });

    test("that the counter can be reset",()=>{
        const counter = createCounter();
        counter.increment()
        expect(counter.getCount()).toBe(1)
        counter.reset();
        expect(counter.getCount()).toBe(0)
        
    }),


})

