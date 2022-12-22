// // let name = "Тарас";
// // alert(name + " " + "Вітаю!"); // alert message

// // let surname = "Пиць";
// // let name = prompt("Як тебе звати?");
// // alert("Вітаю " + name + " " + surname); // promt message

// // let person = "Тарас";
// // if(confirm("Ви впевнений?")) {
// //   alert("Вітаю " + person);
// // } else 
// //   alert("Гарного дня!"); // confirm message

// // alert("Привіт!");
// // let age = prompt("Скільки тобі років?");
// // while(age === '' || age === null) {
// //       console.log(age)
// //       age = prompt("Скільки тобі років?")
// //     }
// // console.log( age >= 18 ? "Ти можеш водити автомобіль" : "Тобі варто піти на курси водія"); // alert + promt+ if/else condition

// // let age = prompt("Вкажи свій вік");
// // if (typeof age === 'number') {
// // } else {
// //     console.log(Number(age));
// //     console.log("Cast result to number data type"); //???
// // }
// // console.log (age > 18 ? "Welcome" : "Access denied"); // тернарний оператор
// // if (age<=0 || age >=150) {
// //     console.log("It is impossible age for person");
// // }
// // confirm("Does the script work as expecter?");

// // Цикли

// // debugger;
// // for (let start = 0; start < 10; start++){
// //     document.write("<h1>Hello</h1>");
// // }

// // let a = 0;
// // a += 1; // a = a + 1 , a++
// // console.log(a);

// // for (let i =0; i <= 10; i++){
// //     console.log(i);
// // } 

// // let start = 0;
// // while (start < 5) {
// //     document.write(`<h1>Hello${start}</h1>`);
// //     start++;
// // }

// // let numbers = [12, 'one', true, [11, 22, 33], {name:'olya'}];
// // for (let i=0; i < numbers.length; i++) {
// //     console.log(numbers[3]);
// // }

// // let i = 0;
// // while (i < numbers.length) {
// //     console.log(numbers[i]);
// //     i++;
// // }

// // for (let i=0; i < 3; i++) {
// //     for (let k=0; k < 5; k++) {
// //         console.log(i, k);
// //     }
// // }

// // let matrix = [[11, 22, 33], [2, 4, 6], [-1, -9]];
// // for (let i=0; i < matrix.length; i++) {
// //     for (let j = 0; j < matrix[i].length; j++) {
// //         console.log(matrix[i][j]);
// //     }
// // }

// // let arr [...];
// // for (let i = 2; i < arr.length -1; i+= 3) {

// // }
// // for (let z of arr) {
// //     console.log(z);
// // }

// // try {
// //     console.log(zzz - 1000);
// // } catch (e) {
// //     console.log(e);
// // }

// // numbers.push(100500);
// // console.log(numbers);

// // numbers.pop();
// // console.log(numbers);

// // numbers.unshift(333);
// // console.log(numbers);

// // numbers.shift();
// // console.log(numbers);

// // numbers


// // const number = ' ';

// // !!number; // true
// // Boolean(number); // true
// // console.log(!!number);

// // one === 1 //false - строге порівнювання
// // 1 == true //true - приводить до одного типу даних

// // let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// // for (let i=0; i < arr.length; i++) {
// //         console.log(arr[i]);
// //     if (arr[i] === 7) {
// //         break;
// //     }
// // }

// // let array = [1,2,3,4,5,6,7,8,9,'text'];

// // for(let elem of array) {
// //   console.log(elem);
// // }

// // let age = prompt('Text');

// // while(age === '' || age === null) {
// //   console.log(age)
// //   age = prompt('Text')
// // }

// // let a = 'alpha';
// // console.log(a -= 'a');

// // let a = 5;
// // let b = 2;
// // console.log(a >= b ? true : false);  // --------------------1----------------

// // let y = 1;
// // let z = 1;
// // console.log((typeof y === 'string') ? ('Variable Y is string data type') : (typeof z === 'boolean') ? 
// // ('Variable Z is boolean data type') : ('Y is not string & Z is not boolean'));  // ----------2----------

// // Loops ----------------------

// // for(let i=0; i<5; i++) {
// //     console.log('Loop' + i);
// //     if(i === 3) break;
// // }

// // const names = ['john', 'bob', 'mary', 'joe'];
//     // for (let i=0; i < names.length; i++) {
//     //     console.log(names[i]);
//     // }
//     // for (name of names) console.log(name);    // ----best 

//     // const user = {'firstName': 'John', 'lastName': 'Doe'}
//     // for(key in user) console.log(user[key]);

//     // let i = 0;
//     // while(i < 10) {
//     //     i++;
//     //     if (i === 5) continue;
//     //     console.log(i);
//     // }

//     // let i = 0;
//     // do {
//     //     i++;
//     //     if (i === 5) continue;
//     //     console.log(i);
//     // } while (i < 0);

//     // const animals = ['cat', 'dog', 'horse', 'sheep', 'bird'];

//     // animals.forEach(animal => {
//     //     console.log(animal);
//     // })

// //     let a = 8;
// //     a += 8;

// //     a > b
// //     b <= a
// //     a >= b;
// //     a === b
// //     a !== b

// //     a **2
// //     b++
// //     b--
// // let a = 'alpha';
// // b = a + 'bet'

// // &&

// // !true = false
// // let a = 5;
// // let result = a > 0 ? true : a < 0 ? 'A is less than zero' : '';

// // let numbers = [1, 2, 3, 4, 5, 6, 7, 20, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 8]

// // for (let i=0; i < numbers.length; i++) {
// //     if (numbers[i] === 20) {
// //         numbers[i] += 30;
// //     }
// // }
// // console.log(numbers.includes(50));

// // --------------
// // let numbers = [1, 2, 3, 4, 5, 6, 7, 20, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 8]
// // for (let i=0; i < numbers.length; i++) {
// //     while (numbers[i] === 20) {
// //         numbers[i] += 30;
// //     }  
// // }
// // console.log(numbers.includes(50));
// // let numbers = [1, 2, 3, 4, 5, 6, 7, 20, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 8]
// // for (let i=0; i < numbers.length; i++) {
// //     do {numbers[i] += 30;}
// //         while (numbers[i] === 20);
// //     }
// // console.log(numbers.includes(50));




// function abc() {
//     let a = 1
//     function ace() {
//         a += 1;
//     }
// ace();
// console.log(a);
// }
// abc();

// Number
// String
// BigInt
// Boolean
// null
// undefined
// Symbol
// Object

// function getCarColor(a, b) {  /// hoisting, this, new, arguments -ключове слово
//     console.log(arguments)
// }
//     let a = new getCarColor('a', 'b');
//     console.log(a);

// let abc = (a, b) => {
    
//     console.log(arguments)
// }
//     let d = new abc('a', 'b')


// let obj1 = {
//     name: 'Test',
//     testFunction: function () {
//         setTimeout(() => {
//             console.log(this);
//          }, 1000);
        
//     }
// }

// let obj2 = {
//     name: 'Test',
//     testFunction2: function () {
//         setTimeout(function() {
//             console.log(this);
//          }, 1000);
        
//     }
// }

// obj1.testFunction()
// obj2.testFunction2()

// var humanYearsCatYearsDogYears = function(humanYears) {
//     var catYears = 0;
//     var dogYears = 0;
    
//     if (humanYears === 1) {
//       catYears = 15;
//       dogYears = 15;
//     } else if (humanYears === 2) {
//       catYears = 24;
//       dogYears = 24;
//     } else if (humanYears > 2) {
//       catYears = 24 + (humanYears - 2) * 4;
//       dogYears = 24 + (humanYears - 2) * 5;
//     }
  
//     return [humanYears, catYears, dogYears];
//   }

//   console.log(humanYearsCatYearsDogYears(5));

// function getName(a, b){

// }

// const test = function(a, b){

// }
// test(1, 2)


// function getParametr(a){
//   let newNumber = a + 1;
//   console.log(a)
//   if(newNumber < 5) {
//     getParametr(newNumber)
//   } 
// }
// getParametr(0)

// let newNumber = a + 1;
// if(newNumber < 5) {
//   callFunction(newNumber)
// }

// function getNumber (a){
//   let newNumber = a + 1;
//   console.log(newNumber);
//   if (newNumber < 5){
//     getNumber(newNumber)
//   }
// }
// getNumber(0)

// function functionA(){
//   function functionB(){
//     console.log('Hello');
//   }
//   functionB();
// }
// functionA()

// (function

// const getCat = () => {
//   console.log('a')
// }

// getCat()