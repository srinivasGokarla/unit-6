//syntex

// var Promise = new Promise(resolve, reject)
// // if promise is fullfilled that time the argument rsolbve excurted
// // reject means promise was not fullfilled and
// .then()
// .catch()


// closures

// function main() {
//     let a = function inner() {
    
  
//     }
//    console.log(a)
// }
// main(
// )

//foreach

// var arr = [1,2,3,4,5]

// var numb = arr.forEach(function(el)  {
//    console.log(el*2)
// })

//map

// var items = ["rice", "chicken","apple"]

// var len = items.map(function(el) {
//     return el.length
// })
// console.log(len)

//filter

// var arr = [1,2,3,4,5]// odd numbers, even number
// var num = arr.filter(function(el) {
//     return (el% 2 == 1)
    
// })
// console.log(num)

//reduce
//  var arr = [1,2,3,4,5] // 1, 3 , 6, 10, 15

//  var num = arr.reduce(function(ac, el) {
//      console.log(ac)
//      return ac+ el
//  })
//  console.log(num)
  

// this keyword 


// const test = {
//   prop: 42,
//   func: function() {
//     return this.prop;
//   },
// };

// console.log(test.func());
// // expected output: 42


// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };
// console.log(person.firstName)

// let x = this

// console.log(x)

// function myFunction() {// global
//   return this;
// }
// console.log(myFunction())

// function constructor
// constructor function
function Person (person_name, person_age, person_gender) {

  // assigning  parameter values to the calling object
   this.name = person_name,
   this.age = person_age,
   this.gender = person_gender,

   this.greet = function () {
       return ('Hi' + ' ' + this.name);
   }
}


// // creating objects
const person1 = new Person('John', 23, 'male');
// const person2 = new Person('Sam', 25, 'female');

// // accessing properties
console.log(person1.name); // "John"
// console.log(person2.name); // "Sam"

// // using object lateral
// let person = {
//     name: 'Sam'
// }

// console.log(person.name); // Sam

// let student = person;

// // changes the property of an object
// student.name = 'John';

// // changes the origins object property
// console.log(person.name); // John


// // constructor function
// function Person () {
//   this.name = 'John',
//   this.age = 23
// }

// // creating objects
// let person1 = new Person();
// let person2 = new Person();

// // adding property to person1 object
// person1.gender = 'male';

// // adding method to person1 object
// person1.greet = function () {
//   console.log('hello');
// }

// person1.greet();   // hello

// // Error code
// // person2 doesn't have greet() method
// person2.greet();


// // hello
// // Uncaught TypeError: person2.greet is not a function