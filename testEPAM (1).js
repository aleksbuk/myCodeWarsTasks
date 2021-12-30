/* console.log(Array.from('foo'));
expected output: Array ["f", "o", "o"]

 --- or we can write the next function ---
  const arr = (str) => str.split('')
  console log(arr('foo');
 */



/*-- make a function which duble arr numbers

// console.log(Array.from([1, 2, 3], x => x + x));

//--- or we can make it with map method
// const dubleNum = (arr) => res = arr.map((e) => e + e);

 expected output: Array [2, 4, 6] */


/* ВИВЕСТИ НАЙБІЛЬШ ПОВТОРЮВАНЕ(повторюється) ЧИСЛО ///// Have done it!!!+++++

const arr1 = [3, "a", 2, 3, "a", 3, "a", 2, 3, 4, 9, 3, 3];

let item;

let lastMaxValue = 1;

function test(arr1, i) {
    let counter = 0;
    for (let j = 0; j < arr1.length; j++) {
        if (arr1[i] == arr1[j]) counter++;
    }
    return counter;
}

for (let i = 0; i < arr1.length; i++) {
  let counter = test(arr1, i)
    if (lastMaxValue < counter) {
        lastMaxValue = counter;
        item = arr1[i];
    }
}
console.log(`${item} : ${lastMaxValue} times`);

 */
// /////////////////////////////////////////////////////////////////////////////


/* порахувати середній вік

let array = [
    {
        name: 'Ann',
        age: 15
    },
    {
        name: 'Bob',
        age: 64
    },
    {
        name: 'Jim',
        age: 86
    },
    {
        name: 'Mary',
        age: 54
    },

];












// function averageAge(array){
// return array.reduce((total,next) => total + next.age,0) / array.length;
// }

// console.log(averageAge(array));

 */
/////////////////////////////


/* кратне 3 і 5

// for (var i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i + " FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log(i + " Fizz");
//     } else if (i % 5 === 0) {
//         console.log(i + " Buzz");
//     } else {
//         console.log(i);
//     }
// }

 */

// //////////////////////////////////////

// a = +prompt('Enter first number');
// b = +prompt('Enter second number')

// function sum(a,b) {
//   console.log(a + b)
// }
// sum(a, b);
// //////////////////////////////////////////////////////////////////////////////

// ПОВЕРНУТИ СУМУ ВСІХ ЗНАЧЕНЬ МАСИВА РЕДЮСЕРОМ
// //////////////////////////////////////////////////////////////////////////////

// let array = [1,2,3,4,1,2];

// function getArray(array) {
//   console.log(array.reduce((total, value) => total + value,0))

// }
// getArray(array);

// //////////////////////////////////////////////////////////////////////////////
// let array = [1,2,3,4,1,2];

// let val = array.reduce(function(a,b){
//   return a + b
// })

// console.log(val)

////////////////////////////////////
// фільтр
// const cities = [
//     {name: 'Kyiv', population: 12506468},
//     ...
// }

// const millionPlusCities = cities.filter(function (e) {
//     return e.population > 1000000;
// });
// console.log(millionPlusCities);

/////////////////////////////////////////////////////////////////////////////
// filter. Вивести слова за довжиною

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
// //////////////////////////////////////////////////////////////////////////////
// вивести масив унікальних значень за допомогою фільтра

// let array = [1,2,3,4,1,2];
// let unique = array.filter((value, index, self) => self.indexOf(value) === index)
// console.log(unique)

//////////////////////////////////////////////////////
// вивести більше число фільтром

// let array = [1,2,3,4,5,6,7,8,9,20,21,434]

// let filteredArray = array.filter(arr => arr < 5 )
// console.log(filteredArray)

// вивести більше число циклом
// function filteredArray(array,number){
//   for(let i=0; i < array.length; i++){
//     if (array[i] > number) {
//         console.log(array[i] + " більше ніж " + number);
//     }
//   }
//      return false;
// }
// filteredArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 21, 434],5);

///////////////////////////////////////////////////
// найбільше число циклом

// function maxElement(arr) {
//     let max = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     return max;
// }

///////////////////////////////////////
// найбільше число

// const array1 = [1, 3, 2];

// console.log(Math.max(...array1));

// //////////////////////////////////////
// вивести масив унікальних значень за допомогою Set
// var myArray = ['a', 1, 'a', 2, '1'];

// function unique(myArray){
//   return [...new Set(myArray)]
// }

// console.log(unique(myArray));

// //////////////////////////////////////////////////////////////////////////////
// вивести масив унікальних значень за допомогою циклу

// function unique(arr) {
//   let result = [];

//   for (let str of arr) {
//     if (!result.includes(str)) {
//       result.push(str);
//     }
//   }

//   return result;
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// alert( unique(strings) ); // кришна, харе, :-O

// //////////////////////////////////////////////////////////////

// Вивести  масив, в якому всі числа помножені на 2
// const array1 = [1, 4, 9, 16];

// const map1 = array1.map((x) => x * 2);

// console.log(map1);
// //////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////

// // ОБХІД МАСИВУ

// var fruits = [2,3];

// fruits.forEach(function (item, index) {
//   console.log(item, index)
// });

// ////////////////////////////////

// кількість елементів

// let array = [1, 2, 3, 4, 1, 2];
// let sum = 0;
// function getArray(array) {
//     for (i = 0; i < array.length; i++) {
//         sum++;
//     }
//     console.log(sum);
// }
// getArray(array);

// Створення масиву/////////////////////////////

// var fruits = ["Яблуко", "Банан"];

// console.log(fruits.length);
// // 2

// Доступ до елементів масиву (за індексом) ///////////////////
// var first = fruits[0];
// // Яблуко
// var last = fruits[fruits.length - 1];
// // Банан

// Обхід елементів масиву//////////////////////////////

// fruits.forEach(function (item, index, array) {
//   console.log(item, index);
// });
// // Яблуко 0
// // Банан 1

////////////////////////////////////////
// Додавання на початок
// fruits.unshift("Манго");
// // ["Полуниця", "Банан", "Манго"]

//////////////////////////////
// Додавання в кінець масиву

// var newLength = fruits.push("Апельсин");
// // ["Яблуко", "Банан", "Апельсин"]

// Видалення елемента з кінця масиву//////////////////////////

// var last = fruits.pop(); // видалити Апельсин (з кінця)
// // ["Яблуко", "Банан"];
// Видалення елемента з початку масиву

// var first = fruits.shift(); // видалити Яблуко з початку
// // ["Банан"];
// Додавання елемента до початку масиву

// var newLength = fruits.unshift("Полуниця") // додати до початку
// // ["Полуниця", "Банан"];

// Пошук індексу елемента в масиві///////////////
// var pos = fruits.indexOf("Банан");
// // 1

// Видалення елемента масиву за його індексом (позицією)

// var removedItem = fruits.splice(pos, 1); // ось, як видаляється елемент
// // ["Полуниця", "Манго"]

// Видалення елементів починаючи з певного індексу

// var vegetables = ['Капуста', 'Ріпа', 'Редька', 'Морква'];
// console.log(vegetables);
// // ["Капуста", "Ріпа", "Редька", "Морква"]

// var pos = 1, n = 2;

// var removedItems = vegetables.splice(pos, n);
// // ось так видаляються елементи, n визначає кількість елементів на видалення,
// // від цієї позиції (pos) в напрямку кінця масиву.

// console.log(vegetables);
// // ["Капуста", "Морква"] (початковий масив змінено)

// console.log(removedItems);
// // ["Ріпа", "Редька"]
// Копіювання масиву

// var shallowCopy = fruits.slice(); // ось так робиться копія
// // ["Полуниця", "Манго"]

// let a = { a:1 };
// console.log(a);
// let b = a;
// b = { d:5 };
// console.log(b);
// console.log(a);
// console.log(b);

//  повертає всі прості числа в масиві:

// let array = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

// function isPrime(num) {
//     if (num <= 1)
//         return false;
//     else if (num === 2)
//         return true;
//     else {
//         for (let i = 2; i < num; i++)
//             if (num % i === 0)
//                 return false;
//         return true;
//     }
// }

// console.log(array.filter(isPrime));   // [53, 2, 5, 7, 31, 97, 17]

//  визначення чисел Фібоначчі - рекурсія:
// function getFibonachi(n)
// {
//     if (n === 0){
//         return 0;
//     }
//     if (n === 1){
//         return 1;
//     }
//     else{
//         return getFibonachi(n - 1) + getFibonachi(n - 2);
//     }

// }
// var result = getFibonachi(7); //21
// console.log(getFibonachi(7 - 1)); //8
// console.log(getFibonachi(7 - 2)); // 5
// console.log(result); // 21
// // /////////////////////////////////

// fibonachi

// const fib = (n) => {
//     let prev = 0,
//         next = 1;
//     for (let i = 0; i < n; i++) {
//         let temp = next;
//         next = prev + next;
//         prev = temp;
//     }
//     return prev;
// };

///////////////////////////////

// Factorial  факторіал

// function getFactorial(n) {
//     if (n === 1) {
//         return 1;
//     } else {
//         return n * getFactorial(n - 1);
//     }
// }
// var result = getFactorial(4);
// console.log(result);

////////////////////////////////////
// Сортування за зростанням

// var myarray=[25, 8, 7, 41]
// let sorted = myarray.sort(function(a,b){
//   return a - b
// })
// console.log(sorted); //[7, 8, 25, 41];

// //////////////////////////////////

// var myarray=[25, 8, 7, 41]
// let sorted = myarray.sort(function(a,b){
//   return b - a
// })
// console.log(sorted); //[41, 25 ,8 ,7];

// ///////////////////////////////

// // Для об'єктів
// employees.sort(function (a, b) {
//     return a.age - b.age;
// });

// //////////////////////////////
// // сортування по Імені

// employees.sort(function (a, b) {
//     var nameA = a.name.toLowerCase(),
//         nameB = b.name.toLowerCase();
//     if (nameA < nameB)
//         //сортируем строки по возрастанию
//         return -1;
//     if (nameA > nameB) return 1;
//     return 0; // Никакой сортировки
// });

// Вивести з масиву числа, які при множенні(додаванні) дорівнюють числу

// let newArray = [];

// const findSum = (arr, val) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (i !== j && arr[i] + arr[j] === val) {
//                newArray.push(arr[i], arr[j]);
//             }
//         }
//     }
//     return false;
// };

// findSum([1,2,8,4,10,2],12);

// console.log([...new Set([...newArray])]);

// context

// function Cat(color) {
// this.color = color
// console.log('this', this);
// (() => console.log('arrow', this))()
// }
// new Cat('red')

// Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] -
// суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.

// Решение:

// var arr = [1, 2, 3, 0, 4, 5, 6];
// var answer = 0;
// var result = arr.reduce(function(sum, elem) {
// 	if (elem == 0) {
// 		answer = sum;
// 	} else {
// 		return sum + elem;
// 	}
// });
// if(answer == undefined){answer = result};
// alert(answer);

// Дан массив с числами. Оставьте в нем только отрицательные числа. Скрыть решение.
// від'ємні

// Решение:

// var arr = [1, -3, 5, 6, -7, 8, 9, -11];
// function func(elem){return elem < 0};
// var newArr = arr.filter(func);
// alert(newArr);

//  Дан массив с числами. Оставьте в нем только парні числа.

// Решение:

// var arr = [1, -3, 5, 6, -7, 8, 9, -11];
// function func(elem){return elem % 2 == 0};
// var newArr = arr.filter(func);
// alert(newArr);

//  Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы. Скрыть решение.

// Решение:

// var arr = [1, 'string', [3, 4], 5, [6, 7]];
// function func(elem){return Array.isArray(elem)};
// var newArr = arr.filter(func);
// alert(newArr);
//  Дан массив с числами. Порахуйте кількість від'ємних чисел в  масиві.

// Решение:

// var arr = [5, -3, 6, -5, 0, -7, 8, 9];
// function func(elem){return elem < 0};
// var newArr = arr.filter(func);
// alert(newArr.length);

///////////////////////////////////////

// порахувати середній вік

// let array = [
//     {
//         name: 'Ann',
//         age: 15
//     },
//     {
//         name: 'Bob',
//         age: 64
//     },
//     {
//         name: 'Jim',
//         age: 86
//     },
//     {
//         name: 'Mary',
//         age: 54
//     },

// ];

// function averageAge(array){
// return array.reduce((total,next) => total + next.age,0) / array.length;
// }

// console.log(averageAge(array));

///////////////////////////////

// let arrayAge = [];
// for (let values of array) {
//     arrayAge.push(values.age);
// }

// function getArray(arrayAge) {
//     return arrayAge.reduce((total, value) => total + value);
// }


// console.log(getArray(arrayAge)/array.length);

// середній вік з let of

// let filteredAge = 0;
// for (let values of array) {
//     filteredAge += values.age;
// }
// console.log(filteredAge/array.length);

/////////////////////////////////////////

/////////////////////////////////////////
// for(let value of array ){
// var filteredAge = [value.age];

// }
// console.log(filteredAge);
//  function result(filteredAge) {
//        console.log(filteredAge);
//        return filteredAge.reduce((total, value) => total + value);

//     };
// console.log(result(filteredAge));
// result(filteredAge);


////////////////////////////////////////////////////////////////////
// harry reduce

// var wizards = [
//     {
//         name: "Harry Potter",
//         house: "Gryfindor",
//     },
//     {
//         name: "Cedric Diggory",
//         house: "Hufflepuff",
//     },
//     {
//         name: "Tonks",
//         house: "Hufflepuff",
//     },

// ];

// var hufflepuff = wizards.reduce(function (newArr, wizard) {
//     if (wizard.house === "Hufflepuff") {
//         newArr.push(wizard.name);
//     }
//     return newArr;
// }, []);


// console.log(hufflepuff);
////////////////////////////////////////////////////////////////////



// let people = [
//     { name: "Ann", age: 15 },
//     { name: "Bob", age: 64 },
//     { name: "Jim", age: 86 },
//     { name: "Mary", age: 54 },
// ];

// for (let amount of people) {
//     console.log(amount);
// }

// Console.log(people.prototype)


// площа area

// let array = [
//     {
//         a: 1,
//         b: 2,
//     },
//     {
//         a: 3,
//         b: 4,
//     },
//     {
//         a: 5,
//         b: 6,
//     },
//     {
//         a: 7,
//         b: 8,
//     },
// ];

// function area(array) {
//     return array.reduce((total, next) => total + (next.a * next.b), 0) / 2;
// }

// console.log(averageAge(array));



// площа парків

// let array = [
//     {
//         park : {
//             a: 23,
//             b: 2,
//         },

//         garden: {
//             a: 43,
//             b: 45,
//         },

//         park: {
//             a: 43,
//             b: 1,
//         },

//         garden: {
//             a: 54,
//             b: 3,
//         },
//     },
// ];


// function area(array) {

//     console.log(array.reduce((total, next) => total + (next.park.a * next.park.b), 0) / 2)
// }

// console.log(area(array));


// знижки

// discountPrices([100, 200, 300], .5)
// Реализация:
// function discountPrices (prices, discount) {
//   var discounted = []
// for (var i = 0; i < prices.length; i++) {
//     var discountedPrice = prices[i] * (1 - discount)
//     var finalPrice = Math.round(discountedPrice * 100) / 100
//     discounted.push(finalPrice)
//   }
// return discounted
// }

///////////////////////////////////////////////////
// promise


// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // переведёт промис в состояние fulfilled с результатом "result"
//         resolve("result");
//     }, 1000);
// });

// // promise.then навешивает обработчики на успешный результат или ошибку
// promise.then(
//     (result) => {
//         // первая функция-обработчик - запустится при вызове resolve
//         alert("Fulfilled: " + result); // result - аргумент resolve
//     },
//     (error) => {
//         // вторая функция - запустится при вызове reject
//         alert("Rejected: " + error); // error - аргумент reject
//     }
// );



// class


// class Tesla extends Car {
//     constructor(model, chargetime) {
//         super("Tesla", model);
//         this.chargetime = chargetime;
//     }

//     charge() {
//         console.log("Charging...");
//     }
// }

// const tesla = new Tesla("3", 20);
// tesla.drive();
// tesla.charge();

///////////////////////////////

// function sum(a){
//   return function(b){
//     return a + b
//   }
// }
// sum(a)(b)


// замикання

// function createCalcFunctuin(n) {
//   return function() {
//     console.log(1000 * n)
//   }
// }

// const calc = createCalcFunctuin(42);

// calc()

// //////////////////////////////

// function createIncrementor(n) {
//     return function (num) {
//         return n + num
//     };
// }

// const addOne = createIncrementor(1);

// console.log(addOne(10))



// // каррирование\
// function curry(f) { // curry(f) выполняет каррирование
//   return function(a) {
//     return function(b) {
//       return f(a, b);
//     };
//   };
// }

// // використання
// function sum(a, b) {
//   return a + b;
// }

// let carriedSum = curry(sum);

// alert( carriedSum(1)(2) ); // 3



// поліфіл polyfill
// function bind(func, context) {
//     let boundedFunc = function () {
//         return func.apply(context);
//     };
//     return boundedFunc;
// }

// // MAP принцип
// function MAP(array, callback) {
//     let arr1 = [];
//     for (let i = 0; i < array.length; i++) {
//         arr1.push(callback(array[i]));
//     }
// }

// // замикання

// function makeAdder(x) {
//     return function (y) {
//         return x + y;
//     };
// }

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2));


// /////////////////////////////////
// var arr = ["Яблоко", "Апельсин", "Груша"];

// arr.forEach(function(item, i, arr) {
//   alert( i + ": " + item + " (массив:" + arr + ")" );
// });




new Promise((resolve, reject) => {
    console.log(1);
});

Promise.resolve("Success").then(
    function (value) {
        console.log(2);
    }
);

console.log(3)

 setTimeout(() => {
         console.log(4);
    }, 0);

console.log(5)




const users = [{id:1, name: "Jone Doe", location: "NYC"},{id: 659, name: "Jane Doe", location: "London"}];
const admins = [{id:5, isAdmin:true},{id:659, isAdmin:true}];

for (let user of users){
    for (let admin of admins){
        if (admin.isAdmin && user.id == admin.id && user.location == "London")
            console.log(user.name);
            break
    }
}

const users = [
    { id: 1, name: "Jone Doe", location: "NYC" },
    { id: 659, name: "Jane Doe", location: "London" },
];
const admins = [
    { id: 5, isAdmin: true },
    { id: 659, isAdmin: true },
];

for (let user of users) {
    for (let admin of admins) {
        if (admin.isAdmin && user.id == admin.id && user.location == "London") {
            console.log(user.name);
            break;
        }
    }
}

var users = [
    { id: 1, name: "Taras", location: "Chervonohrad" },
    { id: 2, name: "Roman", location: "Kalush" },
    { id: 3, name: "John", location: "London" },
    { id: 4, name: "Johns", location: "London" },
];
var isAdmin = [
    { id: 1, isAdmin: false },
    { id: 2, isAdmin: false },
    { id: 3, isAdmin: true },
    { id: 4, isAdmin: true },
];

var adminsInLondon = [];
var admins = isAdmin.filter((user) => user.isAdmin);
for (let i = 0; i < admins.length; i++) {
    var admin = users.find((user) => user.id === admins[i].id);
    if (admin.location === "London") {
        adminsInLondon.push(admin);
    }
}
console.log(
    "Admins in London: " + adminsInLondon.map((admin) => admin.name).toString()
);

