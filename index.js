
// let name = 'Huayi'; //String Literal
// let age = 30; //Number Literal
// let isApproved = true; //Boolean Literal
// let firstName = undefined;
// let selectedColor = null;
// let person = {
//     name: 'Huayi',
//     age: 30
// }
// let selectedShape = ['square', 'circle'];
// selectedShape[2] = 'oval';
// //Dot Notation
// person.name = 'Kexin';

// //Bracket Notation
// person['name'] = 'Huayi';

// //Performing a task
// function greet (name) {
//     console.log('Hello ' + name);
// }

// //Calculating a value
// function square(number) {
//     return number * number;
// }

// let number = square(2);

// let x = 10;
// let y = 3;

//Arithmetic operators
// // console.log(x + y);
// // console.log(x - y);
// // console.log(x * y);
// // console.log(x / y);
// // console.log(x % y);
// // console.log(x ** y);

// //Increment (++)
// // console.log(x++);
// // console.log(x);

// //Decrement
// // console.log(--x);

//Assignment operators
// let x = 10;
// x += 5;
// x *= 3;
// console.log(x);

// let x = 1;

// //Relational operators
// console.log (x > 0);
// console.log (x >= 1);
// console.log (x < 1);
// console.log (x <= 1);

// //Equality operator
// console.log (x === 1);
// console.log (x !== 1);

// //Strict Equality (Type + Value)
// console.log(1 === 1);
// console.log('1' === 1);

// //Loose Equality (Value)
// console.log(1 == 1);
// console.log('1' == 1);
// console.log(true == 1);

//Ternary
// If a customer has more than 100 points, 
//they are a 'gold' customer, otherwise,
//they are a 'silver' customer.

// let points = 110;
// let type = points > 100 ? 'gold' : 'silver';

// console.log(type);

// Logical AND (&&)
// Returns TRUE if both operands are TRUE

// Logical OR (||)
// //Returns TRUE if one of the operands is TRUE
// let highIncome = false;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log('Eligible', eligibleForLoan);
// //Not (!)
// let applicationRefused = !eligibleForLoan;
// console.log('Application Refused', applicationRefused);

//Falsy (false)
//undefined
//null
//0
//false
//''
//NaN
//Anthing that is not Falsy -> Truthy
//Short-circuiting

// let userColor = undefined;
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;

// console.log(currentColor);

//Bitwise
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// R = 00000000

//Read, Write, Execute
// 00000100
// 00000010
// 00000001

// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;
// let myPermission = 0;
// myPermission = myPermission | readPermission | writePermission;

// let message = (myPermission & readPermission) ? 'yes' : 'no';

// console.log(message);

// let x = (2 + 3) * 4;

// let a = 'red';
// let b = 'blue';

// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);

// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

if (condition) {
    statment
} else if (anotherCondition) {
    statment
}
    