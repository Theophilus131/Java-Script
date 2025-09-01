  const  Person = {
    age : 30,

     greet(){
        console.log(`hello, my name is ${this.name}`);
     }

  };

  const Employee = Object.create(Person);
  Employee.jobTitle = 'soft Engineer'

  Employee.greet();