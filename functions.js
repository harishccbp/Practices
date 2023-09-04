//constructor function 
function Person (name,age,city){
    this.name = name,
    this.age = age,
    this.city = city,

    this.good = function () {
        return ("Congratulations You got GreenCard.");
    }

    this.greet = function () {
        return ("Hi!");
    }

    this.ekip = function () {
        return ("NO Vacancies Available");
    }
    

}

//create objects 
const person1 = new Person("Loki",27,"Vorginia-America");
const person2 = new Person("Harish",26,"Hyderabad-India");
const person3 = new Person("Prasad",23,"Toronto-Canada");
const person4 = new Person("Raju",23,"Washington DC - USA")
//access properties 
console.log(person1.name,person1.age,person1.city,person1.ekip());
console.log(person2.name,person2.age,person2.city,person2.good());
console.log(person3.name,person3.age,person3.city,person3.greet());
console.log(person3.name,person4.age,person4.city,person4.good());