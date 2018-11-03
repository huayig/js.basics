
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

// let hour = 10;
// if (hour >= 6 && hour < 12)
//     console.log('Good morning!');
// else if (hour >= 12 && hour < 18)
//     console.log('Good afternoon!');
// else 
//     console.log('Good evening!');

// let role = 'guest';

// switch (role) {
//     case 'guest':
//         console.log('Guest User');
//         break;
//     case 'moderator':
//         console.log('Moderator User');
//         break;
//     default:
//         console.log('Unknow User');
// }

// if (role === 'guest') console.log('Guest');
// else if (role === 'moderator') console.log('Moderator');
// else console.log('Unknown User');

// for (let i = 0; i <= 5; i++){
//     if (i % 2 !==0) console.log(i)
// }

// let i = 9;
// while (i <= 5) {
//     if (i % 2 !==0) console.log(i)
//     i++
// }

//do-while
// let i = 9;
// do {
//     if (i % 2 !==0) console.log(i)
//     i++
// } while (i <= 5);

// let i = 0;
// while (i < 5) {
//     console.log(i);
//// i++
// }

//for 
//while
//do-while

//for-in

// const person = {
//     name: 'Huayi',
//     age: 30
// };

// for (let key in person)
//     console.log(key, person[key]);

// const colors = ['red', 'green', 'blue'];

// for (let index in colors)
//     console.log(index, colors[index]);

// // for-of
// for (let color of colors)
//     console.log(color);

// let i = 0;
// while (i <=10) {
//     // if (i === 5) break;
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++
// }

// let number = compare(10,100);
// console.log(number);

// function compare (number1, number2) {
//     return (number1 > number2) ? number1 : number2;
// }

// console.log(isLandscape(100, 200));

// function isLandscape(width, height) {
//     return (width > height);
// }

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

// const output = fizzBuzz('15');
// console.log(output);

// function fizzBuzz (input) {
//     if (input % 3 === 0 && input % 5 === 0) 
//     return 'FizzBuzz';
//     else if (input % 3 === 0 && input % 5 !== 0)
//     return 'Fizz';
//     else if (input % 5 === 0 && input % 3 !== 0)
//     return 'Buzz';
//     else if (input % 5 !== 0 && input % 3 !== 0 && input % 1 ===0)
//     return input;
//     else return 'Not a number';
// }

// function fizzBuzz(input) {
//     if (typeof input !== 'number')
//         return NaN;

//     if ((input % 3 === 0) && (input % 5 ===0))
//         return 'FizzBuzz';

//     if (input % 3 === 0)
//     return 'Fizz';

//     if (input % 5 === 0)
//     return 'Buzz';

//     return input
// }

// Speed limit = 70 km/hr
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended

// checkSpeed(130);

// function checkSpeed(speed) {
//     let points = 0;
//     points = points += Math.floor((speed - 70)/5);
//     if (points >= 12) return console.log('License suspended');
//     else if (speed <= 70) return 'Ok';
//     else return console.log(points);
// }

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;
//     if (speed < speedLimit + kmPerPoint) {
//         console.log('Ok');
//         return;
//     }
//     const points = Math.floor((speed - speedLimit) / kmPerPoint);
//     if (points >= 12)
//         console.log('License suspended');
//     else
//         console.log('Points', points);
// }

// showNumbers(10);

// function showNumbers(limit) {
//     for (let i = 0; i <= limit; i++) {
//     //     if (i % 2 === 0) console.log(i, 'EVEN');
//     //     else console.log(i, 'ODD');
//         const message = (i % 2 === 0) ? 'Even' : 'ODD'
//         console.log(i, message);
//     }
// }

// const isActive = true;
// const name = 'Huayi';
// if (name) console.log('Hello');

// Falsy
// undefined
// null
// ''
// false
// 0
// NaN

// const array = [1, 2, 3, 0, null, NaN, 5, 6];
// console.log(countTruthy(array));

// function countTruthy(array) {
//     let count = 0;
//     for (let i = 0; i <= array.length; i++) {
//         if (array[i]) count++;
//     }
//     return count;
// }

// function countTruthy(array) {
//     let count = 0;
//     for (let value of array)
//         if (value)
//             count++;
//         return count;
// }

// const movie = {
//     title: 'Brave heart',
//     releaseYea: 2000,
//     rating: 4.5,
//     director: 'Mel Gibson'
// }
// showProperties(movie);

// function showProperties(obj) {
//     for (let key in obj)
//         if (typeof obj[key] === 'string')
//             console.log(key, obj[key]);
// }

// console.log(sum(10));

// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10

// function sum(limit) {
//     let sum = 0;
//     for (let i = 0; i <= limit; i++) {
//         if (i % 3 === 0) sum += i;
//         if (i % 5 === 0) sum += i;
//     }
//     return sum;
// }

// function sum(limit) {
//     let sum = 0;

//     for (let i = 0; i <= limit; i++)
//         if (i % 3 === 0 || i % 5 === 0)
//             sum += i;

//     return sum;
// }

// const marks = [80, 80, 50];

// Average = 70
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

// console.log(calculateGrade(marks));

// function calculateGrade(marks) {
//     let average = 0;
//     let total = 0;
//     let courses = marks.length;

//     for (let mark of marks)
//         total += mark;
//     average = total / courses;

//     if (average >= 0 && average < 60) return 'F';
//     if (average >= 60  && average < 70) return 'D';
//     if (average >= 70 && average < 80) return 'C';
//     if (average >= 80 && average < 90) return 'B';
//     if (average >= 90) return 'A';
// }

// function calculateGrade(marks) {
//     const average = calculateAverage(marks);
//     if (average < 60) return 'F';
//     if (average < 70) return 'D';
//     if (average < 80) return 'C';
//     if (average < 90) return 'B';
//     return 'A';
// }

// function calculateAverage(array) {
//     let sum = 0;
//     for (let value of array)
//         sum += value;
//     return sum / array.length;
// }

// showStars(10);

// function showStars(rows) {
//     let stars = [];
//     for (let i = 0; i < rows; i++) {
//         stars += '*';
//         console.log(stars);
//     }
// }

// function showStars(rows) {
//     for (let row = 1; row <= rows; row++) {
//         let pattern = '';
//         for (let i = 0; i < row; i++)
//         pattern += '*';
//         console.log(pattern);
//     }
// }

// showPrimes(20);

// Prime (whose factors are only 1 and itself)
//Composite

// 12 = 1, 2, 3, 4, 6, 12
// Can be divided evenly by its factors

// function showPrimes(limit) {
//     for (let i = 2; i <= limit; i++) {
//         if (isPrime(i)) console.log(i);
//     }
// }

// function isPrime(value) {
//     if (value === 1) return false;
//     if (value === 2) return true;
//     if (value > 2) {
//         let count = 0;
//         for (let i = 2; i < value; i++)
//             if (value % i === 0) count++;
//         return (count > 0) ? false : true;
//     }
// }

// function showPrimes(limit) {
//     for (let number = 2; number <= limit; number++)
//         if (isPrime(number)) console.log(number);
// }

// function isPrime(number) {
//     for (let factor = 2; factor < number; factor++)
//         if (number % factor === 0)
//             return false;
//     return true;
// }