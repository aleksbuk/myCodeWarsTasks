// function generateShape(integer){
//
//     return Array(integer).fill(Array(integer+1).join('+')).join('\n')
// }
//
// console.log(generateShape(4))
// let generateShape1 = int => [...Array(int)].map(el => "+".repeat(int)).join("\n")
//
// console.log(generateShape1(10

// function friend(friends) {
//     return friends.filter(function (item) {
//         return item.length === 4
//     })
// }
// let friends = ["Ryan", "Kieran", "Mark"]
//
// console.log(+'1' +'1' +'2')
// console.log('A' - 'B' +'2')
// console.log('A' - 'B' + 2)

// const text = 'hello world'
//
// console.log(text.replace('world',''))

// const numbersArr = [1, 5, 6, 7, 8, 9]
//
//
//
// let newArr = []
// numbersArr.forEach(function (elem){
//     newArr.push(elem * elem)
// })
// console.log(newArr)
//
// let sumOfnum = [];
// numbersArr.forEach(function (a){
//     sumOfnum.push(a + a)
// })
//
// console.log(sumOfnum)

// function getCount(str) {
//     var vowelsCount = 0;
//     let  vowels = ['a', 'e', 'i', 'o', 'u']
//     let strArr = str.split('');
//     strArr.forEach((el) => {
//         for (let i = 0; i < vowels.length -1; i++) {
//             if (el === vowels[i]) {
//                 vowelsCount++
//             }
//         }
//     })
//
//     // enter your majic here
//
//     return vowelsCount;
// }
// console.log(getCount('abracadabra'))


// function absentVowel(x){
//     let  vowels = ['a', 'e', 'i', 'o', 'u']
//     let strArr = x.split('');
//     strArr.forEach((el))
// }


/* Get the Middle Character */
// function getMiddle(s) {
//     // let word = s.split('');
//     // let result = [];
//    let position;
//    let lenght;
//    if(s.length % 2 == 1) {
//        position = s.length / 2
//        lenght = 1;
//    } else {
//        position = s.length / 2 - 1;
//        lenght = 2;
//    }
//    return s.substr(position, position + lenght)
//
// }
// function getMiddle(s)
// {
//     return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }
//
// console.log(getMiddle('word'))
// function printMiddleCharacter(str)
// {
//     // Finding string length
//     let len = str.length;
//
//     // Finding middle index of string
//     let middle = parseInt(len / 2, 10);
//
//     // Print the middle character
//     // of the string
//     document.write(str[middle]);
// }
//
// // Given string str
// let str = "word";
//
// // Function Call
// // printMiddleCharacter(str);
//  console.log(printMiddleCharacter(str))


//     const toTitleCase = (str) => {
//         return str
//             .toLowerCase()
//             .split(' ')
//             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//             .join(' ');
//     };
//
//
// let str = "How can mirrors be real if our eyes aren't real";
// console.log(toTitleCase(str))

/*Disemvowel Trolls*/
// function disemvowel(str) {
//     let  strArr = str.split('');
//     for (let i = 0; i < strArr.length; i++) {
//         let char = strArr[i].toLowerCase();
//         if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
//             strArr[i] = '';
//         }
//     }
//     return strArr.join('');
// }
//
//
// const str = "This website is for losers LOL!"
//
// console.log(disemvowel(str))


/*Nickname Generator*/


// const nicknameGenerator = (name) => {
//      return name
//          .split('')
//     // let  vowels = ['a', 'e', 'i', 'o', 'u']
//          .slice(0, 3)
//          .join('')
// }

// function nicknameGenerator(name) {
//      if (name.length<4) return "Error: Name too short";
//      if (name[2].match(/[aeuio]/)) return name.slice(0,4)
//      return name.slice(0,3)
//
// }
//
// console.log(nicknameGenerator('Roobert'))


// function revrot(str, sz) {
//      let arr = str.split('')
//      let reversPart = arr.slice(0, sz)
//      let result = arr.push(reversPart)
//      return result
//          // .join('')
// }
//
// console.log(revrot("123456987654", 6))

// function solution(number){
//   let arr = []
//      for (let i = 0; i < number; i++){
//          if(i % 3 === 0) { arr.push(i)}
//          if(i % 5 === 0) { arr.push(i)}
//      }
//      return [... new Set(arr)].reduce((a,b)=> a+b,0)
// }
// console.log(solution(10))
//
//
// function solution1(number){
//     var sum = 0;
//
//     for(var i = 1;i< number; i++){
//         if(i % 3 == 0 || i % 5 == 0){
//             sum += i
//         }
//     }
//     return sum;
// }
//
// console.log(solution1(78))

// function head(arr){
//     return arr.indexOf(2)
// }
// const head = (arr) => arr.slice(0, 1).toString()
// console.log(head([5,1]))
//
// // function tail(arr) {
// //
// //     let newTail = arr.slice(1, 5)
// //     return newTail
// //
// // }
// const tail = (arr) => arr.slice(1, 5)
// console.log(tail([1,5,7,9]))
//
//
// const init = (arr) => arr.slice(0, 4)
// console.log(init([1,5,7,9]))
//
// const end = (arr) => arr.slice(-1).toString()
// console.log(end([1,2,3,4,5]))

//
// function deepCpunt(a) {
//     let count = 0;
//     for (let i = 0; i < a.length; i++) count += i in a;
//
//     return count
// }
// console.log(deepCpunt([1, 2, ,5 ,7 [3, 4, [5]]]))

// dictionary: ['code', 'wars']
// var validWord = function(dictionary, word) {
//     let wordArr = word.split('')
//     // for (let i = 0; i < dictionary.length; i++) {
//     //     if (wordArr[i] === dictionary [i]){
//     //         return true
//     //     }
//     // }
//     if( dictionary.includes(wordArr)) {
//         return true
//     }
//     return false;
// };
//
// console.log(validWord(['code', 'wars'], "codewars"))

// function multiplyAll (arr, num) {
//     res = [];
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] *= num
//         return res.push[arr[i]]
//     }
//
// }
//
//
//
//
//
//
// console.log(multiplyAll([1, 2, 3], 2))

// function foo(a, b) {
//     return a * b;
// }
//
// const bar = foo.bind(null, 2)
// console.log(bar(2))


// var name = 'John';
// var user = {
//     name: 'Peter',
//     printMessage() {
//         console.log(`Helllo, ${this.name}`);
//     }
// }
// var printMessage = user.printMessage()
// console.log(printMessage())


// let name = 'John';
// function printName() {
//     console.log(name)
// }
// console.log( setTimeout(() => {
//     let name = 'Peter';
//     printName()
// }, 1000))

// const details = {
//     name: 'John!',
// }
//
// function getMessage(message) {
//     return`${message} ${this.name}`
// }
// console.log(getMessage.apply(details, ['Hello']));


// function foo() {
//     console.log(this);
// }
// foo.call(null)
//
// function foo() {
//     return {bar: 1};
// }
// console.log(typeof foo().bar)

// for (let i = 0; i < 3; i++) {
//     setTimeout(function (){
//         console.log(i)
//     }, 1000)
// }
// 'use strict'
// function getThis() {
//     return this;
// }
// console.log(getThis())
// let a = 1, b = function  a (x) { x && a(--x);}
// console.log(a)

// const details = {
//     message: 'hello1',
// }
// function getMessage() {
//     return this.message;
// }
// console.log(getMessage.call(details))

// let f = function (a,b){
//     return a + b;
// }
//
// console.log(f(5, 6))
//
// let e = (a, b) => { a + b }
//
// console.log(e(6, 6))

// printMessage()
// function printMessage() {
//     console.log('hello!')
// }


// for(var i = 0; i < 10; i++){
//     //...
// }
//
// console.log(i) //10
//     (function (a) {
//         arguments[0] = 10;
//         return a;
//     })(5) // 10

// function getThis() {
//     return this;
// }
// console.log(getThis())// underfined


// var name = 'jon'
// function printName() {
//     console.log(name)
//     var name = 'peter'
//     console.log(name)
// }
// printName() // undefined peter

// let name = 'john'
//
// function printName() {
//     let name = 'peter'
//     console.log(name)
// }
//
// printName() //peter'

// let f = function g() {return 23;}
//
// console.log(typeof g())

// const foo = bar();
// const number = 2;
// function bar() {return number}

// console.log(message)
// var message = 'hello'
//
//
// for (var i = 0; i < 3; i++) {
//     setTimeout(function (){
//         console.log(i)
//     }, 1000)
// }


// function foo(num) {
//     console.log(Function.getArguments(this))
// }

// function foo1(num) {
//     console.log(arguments)
// }
//
// function foo3(num) {
//     console.log(foo.getArguments())
// }
//
// function foo4(num) {
//     console.log(this.arguments)
// }
//
// // foo(5)
// // foo1(5)
// // foo3(5)
// foo4(5)

// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//   if(enteredCode === correctCode && currentDate === expirationDate) {
//      return true
//  } else return false
//
// }
// console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015"))

// function myLanguages(results) {
//     let res = [];
//     results.forEach(function (res, item){
//         (item.key >= 60) && res.push(item.value);
//     })
//
//     return res
// }
//
// 1) class .container - max-width: 1440, margin: auto
// 2) class .container-fluid - max-width: 100%
//
//     console.log
//
// function sum(arr) {
//     if (arr = []) {
//         return 0
//     } else {
//         arr[i] + (sum(arr[i++]))
//     }
// }
// console.log(sum([1, 3, 4, 5]))
//
// let count =(list) => {
//     if (list == []) {
//         return 0
//     }
//     return 1 + count(list[i])
// }
// console.log(count([1, 3, 4, 5]))
//
// let arr = [1, 4, 6, 17, 23, 55, 12]
//
// let max = Math.max(...arr)
// console.log(max);

// const haveAnArr = [3, "a", 2, 3, "a", 3, "a", 2, 3, 4, 9, 3, 3];
/*
let ietm;
let maxLastValue = 1;

function findeDubplicate(haveAnArr, i) {
    let count = 0;
    for (let j = 0; j < haveAnArr.length; j++) {
        if(haveAnArr[i] == haveAnArr[j]) count++
    } return count
}

for (let i = 0; i < haveAnArr.length; i++) {
    let counter = 0;
    if (maxLastValue = findeDubplicate(haveAnArr, i)) {
        maxLastValue == counter;
        item = haveAnArr[i]
    }
}
console.log(`${item} : ${maxLastValue} times`)
*/

// let item
// let oftenMeet = 1;
//
// function findDuplecate(haveAnArr, i) {
//     let count = 0;
//     for (let j = 0; j < haveAnArr.length; j++) {
//         if( haveAnArr[i] == haveAnArr[j])
//             count++
//     } return count
// }
//
// for(let i = 0; i < haveAnArr.length; i++) {
//     let counter = 0;
//     if(oftenMeet = findDuplecate(haveAnArr, i)) {
//         oftenMeet == counter;
//         item = haveAnArr[i]
//     }
// }
// console.log(`${item} : ${oftenMeet} times`)

/*calc average age
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

function culcAvarege(array) {
   return  array.reduce((total, next) => total + next.age, 0) /array.length;
}

console.log(culcAvarege(array));

const culcAv = (array) => array.reduce((total, next) => total + next.age, 0) / array.length;

console.log(culcAv(array));*/

//////////

// multiply 3 and 5

// for (let i = 0; i <= 100; i++) {
//     if (i % 3 ===0 && i % 5 === 0) {
//         console.log( i + " multiply of three and five")
//     } else if (i % 3 === 0) {
//         console.log( i + " multiply of three ")
//     } else if (i % 5 === 0) {
//         console.log(i + " multiply of five ")
//     } else {
//         console.log("doesn't muliply of 3 and 5")
//     }
// }

/* finde a short word in a sentence
const findShort = string => (
    string
    .split(' ')
    .sort((a, b) => a.length - b.length)[0]
)

console.log(findShort('This is a largest exaompl'));


 */


/* ???????????????????? ???????????????? ??????

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


function averageAge(arr) {
    return arr.reduce((total, next) => total + next.age, 0) / arr.length

}

console.log(averageAge(array));
*/


/* ???????????? 3 ?? 5



 function multiplyThreAndFive(num) {
     if( num % 3 === 0 ) {
         return `${num} is multiply of 3`
     } else if(num % 5 === 0) {
         return  `${num} is multiply of 5`
     } else {
         return `${num} is not multiply of 3 or 5`
     }
 }

console.log( multiplyThreAndFive(11))
*/


/* make promt for sum of nombwes


let a = +prompt('Write the number')
let b = +prompt('Write tne second number')

let sum = (a, b) => a + b
// function sum(a, b) {
//     return a + b
// }

console.log(sum(a, b))

 */

/* return sum of all numbers with reduce function

const arr = [1, 2, 3, 4, 5, 6, 10, 15]


let sumOfArr = arr => arr.reduce((prev, cur) => prev + cur)
// function sumOfArr(arr) {
//     return arr.reduce((prev, cur) => prev + cur)
// }
console.log(sumOfArr(arr))
*/


/* find cities with a million
const cities = [
    {name: 'Kyiv', population: 12506468},
    {name: 'Odessa', population: 1100000},
    {name: 'Ivano-Frankivs', population: 250468},
]


const findMillionCity = cities.filter(function(el) {
    if (el.population > 1000000) {
      return name
    }



} )
 */

// function findMillionCity(arr) {
//     arr.filter(function(el) {
//         return el.population > 1000000
//     } )
//console.log(findMillionCity);
// }


/* make function for take words with 6 letters and higher

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

function wordsLength(arr) {
    return arr.filter(el => el.length>6)
}

console.log(wordsLength(words));

 */

/*return arr of unique value

let array = [1,2,3,4,1,2];

function uniqueValue(arr) {
     return arr.filter((value, index, self) => self.indexOf(value) === index)
}

console.log(uniqueValue(array));

 */

//return the biggest num in arr

// let array = [1,2,3,4,5,6,7,8,9,20,21,434]
//
// const biggerNum = (arr) => {
//      arr.filter((value, index) => value  index)
// }
//
// console.log(biggerNum(array));

// let array = [1,2,3,3, 4, 5, 4,5,6,7,8,9,20,21,434, 525]
//
// console.log(array.sort((a, b) => b % 2 - a % 2))


// function getFunc() {
//     var a = 7;
//     return function (b) {
//         alert(a+b)
//     }
// }
// var f = getFunc()
// f(5)


/* finde max num in Arr with cycle

function findMax (arr) {
    let max = -Infinity
    for(i = 0; i < arr.length; i++) {
        if( arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

console.log(findMax(array));


 */

/* finde mix with Math.max()



let finMax = (arr) => Math.max(...arr)


console.log(finMax(array));

 */


/* return array of unique  value use set



let  myArray = ['a', 1, 'a', 2, '1', 5, 5, 6, 9, 9, '9'];

function uniqueSet(arr) {
   let mySet = new Set(arr);
   return [...mySet]

}

console.log(uniqueSet(myArray));

 */

/* return array of unique values use cycle


let  myArray = ['a', 1, 'a', 2, '1', 5, 5, 6, 9, 9, '9'];

function uniqueVal(arr) {
    let res = [];
    for  (let value of arr) {
        if(!res.includes(value)) {
            res.push(value)
        }
    }
    return res
}

console.log(uniqueVal(myArray));
 */


// function isDevideBy(a, b, c){
//     if ( a % b === 0 && a % c === 0){
//         return true
//     } else return false
// }
//
// const isDivideBy = (a, b, c) =>  a % b === 0 && a % c === 0
//
//
// console.log(isDivideBy(45, 1, 6) );
// console.log(isDivideBy(45, 5, 15) );
// console.log(isDevideBy(-12, 2, 5));


// function capitalizeWord(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1)
// }
//
// console.log(capitalizeWord('help'));
//
//
// function capitalizeWord1(word) {
//     let res = word[0].toUpperCase();
//     return res;
// }
// console.log(capitalizeWord1('help'));

/* return array with multiply number by 2

const array1 = [1, 4, 9, 16];

const multiply = (arr) => arr.map(el => el * 2)

console.log(multiply(array1));
*/

/*take array value with forEach

let fruits = [ 'apple', 'banana', 'paiApple']

fruits.forEach(function (item,index){
    console.log(item, index)
})
 */

/* how many of elements of array

let array = [1, 2, 3, 4, 1, 2];
//1
function arrLength(arr) {
    let sum = 0
    for(i = 0; i < arr.length; i++) {
        sum++
    }
    return sum
}
console.log(arrLength(array));
//2
console.log(array.length)
*/


/* making an array
 let arr = ['apple', 'banana']
**/

/* assets to arrya element by index

let arr = ['apple', 'banana', 'strawberry']

console.log(arr[1])
*/

/*add element to bigining of array

let arr = ['apple', 'banana', 'strawberry']

let newFruit = arr.unshift('mango')

console.log(arr)
*/

/* add element to the end of array

let arr = ['apple', 'banana', 'strawberry']

let newFruit = arr.push('mango')

console.log(arr)
 */

/*delete element from the and of array

let arr = ['apple', 'banana', 'strawberry']

let deleteLast = arr.pop()

console.log(arr)

 */

/*delete element from start of array

let arr = ['apple', 'banana', 'strawberry']

let deletFirst = arr.shift()

console.log(arr)

 */

/* find index of element in Array
let arr = ['apple', 'banana', 'strawberry']

let indexOfElement = arr.indexOf('strawberry')
console.log(indexOfElement)

 */

/*delete element by index in array
let arr = ['apple', 'banana', 'strawberry']
let pos = arr.indexOf('apple')
let deleteElement = arr.splice(pos, 2);

console.log(arr);
*/

/*Convert a Number to a String!


function numberToString(num) {

    return num.toString();
}

function numberToString(num) {

    return Sting(num);
}
console.log(numberToString(999));

 */

/*Convert a String to a Number!

var stringToNumber = function(str){
  return parseInt(str);
}

var stringToNumber = function(str){
  // put your code here
  return Number(str);
}
 */

// let num = 15;
// let text = num.toString(2);
//
// console.log(text);
//
// // function toBinary(num){
// //     return num.toString(2);
// // }
// const toBinary = num => +num.toString(2)
// console.log(toBinary(1));

/*fake binary


function fakeBin(x){
    let str = x.toString().split('')
    let res = str.map(el => {
        if(el < 5) {
            return '0'
        } else {
            return '1'
        }
    })

   return res.join('')
}


function fakeBin2(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
console.log(fakeBin(555563656))
console.log(fakeBin2(555563656))

let fakeBin3 = x => x.split('').map(e => e < 5 ? 0 : 1).join('');

console.log(fakeBin3(555563656))
 */
//
// function areaLargestSquare(r) {
//     let a = r * r
//     return a * 2
//
// }
// const areaLargestSquare = r = (r * r) * 2

/*String ends with?
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

function solution(str, ending) {
    return str.endsWith(ending);
}
console.log(solution('abc', 'bc'));

 */

/*Simple multiplication
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

const simpleMultiplication = number => number % 2 === 0 ? number * 8 : number * 9;


console.log(simpleMultiplication(9));
console.log(simpleMultiplication(10));
console.log(simpleMultiplication(8));
console.log(simpleMultiplication(5));

 */

/*String repeat
Write a function called repeatStr which repeats the given string string exactly n times.
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
    return s.repeat(n)
}

 */

/*Student's Final Grade

//
//
// function finalGrade (exam, projects) {
//     if (exam >= 90 || projects >= 10){
//         return 100
//     } else if (exam > 75 && projects >= 5){
//         return 90
//     } else if (exam > 50 && projects >= 2) {
//         return 75
//     } else return 0
// }
//
// const finalGrade1 = (exam, projects) => {
//     if (exam > 90 || projects > 10) return 100
//     if (exam > 75 && projects >= 5) return 90
//     if (exam > 50 && projects >= 2) return 75
//
//     return 0
// }
// console.log(finalGrade(90, 0));
*/

/* Switch it Up!
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".



function switchItUp(number){
switch (number){
    case 1: return "One";
    case 2: return "Two";
    case 3: return "Three";
    case 4: return "Four";
    case 5: return "Five";
    case 6: return "Six";
    case 7: return "Seven";
    case 8: return "Eight";
    case 9: return "Nine"
  }
}

const switchItUp = number =>
    [`Zero`, `One`, `Two`, `Three`, `Four`, `Five`, `Six`, `Seven`, `Eight`, `Nine`][number];

console.log(switchItUp(1));
console.log(switchItUp(3));
console.log(switchItUp(5));

 */


/* Thinkful - Logic Drills: Traffic light
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, update_light('green') should return 'yellow'.

Note: Use "" instead of '' in C++.



function updateLight(current) {
 if (current === 'green') {
     return 'yellow'
 } else if ( current === 'yellow') {
     return 'red'
 } else if ( current === 'red') {
     return 'green'
 }
}

function updateLight1(current) {

    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

}

 */

/*Third Angle of a Triangle


function otherAngle(a, b) {
    let c = 180;
    return c - (a + b)
}

const otherAngle1 = (a, b) => 180 - a - b

 */


/*Transportation on vacation



function rentalCarCost(d) {
    let dayPrice =  40;
    if ( d >= 3 && d < 7) {
        return dayPrice * d - 20
    } else if (d >= 7) {
        return dayPrice * d - 50
    } else {
        return d * dayPrice
    }
}


const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));

// console.log(rentalCarCost(3));
// console.log(rentalCarCost(4));
// console.log(rentalCarCost(5));
// console.log(rentalCarCost(6));
console.log(rentalCarCost(7));
// console.log(rentalCarCost(8));
// console.log(rentalCarCost(9));

 */


/*Type of sum
function typeOfSum(a, b) {
    let sum = a + b
    return typeof sum();
}


const typeOfSum = (a, b) => typeof(a + b);

 */

/*Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) =>  distanceToPump / mpg <= fuelLeft ? true : false


console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));

 */


/* human-readeble-namber

function toReadable (number) {
    let  strNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let strOfNumber = number.toString()
     if(strOfNumber.length === 1) {
         switch (number){
             case 0: return "Zero"
             case 1: return "One";
             case 2: return "Two";
             case 3: return "Three";
             case 4: return "Four";
             case 5: return "Five";
             case 6: return "Six";
             case 7: return "Seven";
             case 8: return "Eight";
             case 9: return "Nine"
         }
     } else if ( 1 < strOfNumber.length < 3) {
         return `${strNum[i] }`
     }


}

console.log(toReadable(0));
console.log(toReadable(1));
console.log(toReadable(2));
console.log(toReadable(3));
console.log(toReadable(4));
console.log(toReadable(5));
console.log(toReadable(6));
console.log(toReadable(7));
console.log(toReadable(8));
console.log(toReadable(19));


 */

/* polyfill for FroEach*/


// if(!Array.prototype.forEach) {
//
//     Array.prototype.forEach = function (callbackFunction) {
//         for (let val of this) {
//             callbackFunction(val)
//         }
//     }
// }


// function theSameForEach (arr, func) {
//     for(let i = 0; i < arr.length; i++){
//         func(arr[i])
//     }
// }
//
// // theSameForEach(arr, el =>)
// // console.log(theSameForEach);
//  let newArr = []
//  array.forEach(el => newArr.push(el * 2))
// console.log(newArr)
//
// let newFunc = theSameForEach(array, function(el) {console.log(el)})
// console.log(newFunc);


/* polyfil for Filter
let newArr =  array.filter(function (el) {
    return el > 3
})
console.log(newArr);


    Array.prototype.costumFilter = function (callback) {
        let newArray = []
        for (let i = 0; i < this.length; i++){
            if(callback(this[i])) {
                newArray.push(this[i])
            }
        }
        return newArray
    }


let newArr2 = array.costumFilter(function (el) {
    return el > 3
})
console.log(newArr2)
*/

/*polyfill for Map

array.map(function(el){
    console.log(el + 1)
})
console.log('===========')

Array.prototype.myOwnMap = function (callback){
    let newArr = [];
    for(let i = 0; i < this.length; i++){
        newArr.push(callback(this[i]))
    }
    return newArr
}

array.myOwnMap(function (el){
    console.log(el)
})
*/

/* polyfill for ForEach

array.forEach(function (el){
   console.log(el + 1)
})

console.log('=======')

Array.prototype.myOwnForEach = function (callback){
    for( let i = 0; i < this.length; i++){
        callback(this[i])
    }
}

array.myOwnForEach(function (el) {
    console.log( el + 2)
})
*/

/*polyfill for Reduce

let sumOfArr = array.reduce(function (total, cur ) {
    return  total + cur
})

console.log(sumOfArr)
console.log('================')

Array.prototype.myOwnReduce = function (callback, initialValue){
    let accumulator = initialValue === undefined ? undefined : initialValue;
    for(let i = 0; i < this.length; i++) {
        if(accumulator !== undefined) {
            accumulator = callback.call(undefined, accumulator, this[i], i, this);
        } else {
            accumulator = this[i];
        }
    }
    return accumulator
}

let sumOfArr1 = array.myOwnReduce(function (total, cur ) {
    return  total + cur
})

console.log(sumOfArr1)

 */

/*sotr method
arr = [5, 3, 2, 1, 6, 9, 7, 8]

console.log(arr.sort(function (a, b){
    return a - b;
}))

 */

/*clouser


 const createPhrase = (greetings) => {
    return name => `${greetings} ${name}`
 }
 const seyHi = createPhrase('Hello')

console.log(seyHi('Aleks'))


 */


// let array = [1, 2, 3, 4, 1, 2];

/*polyfile forEach
// es 6
array.forEach(function (el) {
    console.log(el)
})
console.log('=========')
//polyfill
Array.prototype.myCraftForEach = function (callback){
    for( let i = 0; i < this.length; i++) {
        callback(this[i])
    }
}

array.myCraftForEach(function (el) {
    console.log(el)
})

 */

/*Polyfill Filter
//es6
let needNumber = array.filter(function (el){
    return el > 2;
})
console.log(needNumber);

//polyfill

Array.prototype.myCraftFilter = function (callback) {
    let newArr = [];
    for( let i = 0; i < this.length; i++) {
        if(callback(this[i])){
            newArr.push(this[i])
        }
    }
    return newArr
}
let needNumber2 = array.myCraftFilter(el => el > 2)
console.log(needNumber2);
 */

/* Polyfill for Map
//es6
array.map(function (el){
    console.log(el+ 1)
})

console.log('========')
//polyfill

Array.prototype.myCraftMap = function (callback){
    let newArr = [];
    for (let i = 0; i <this.length; i++){
        newArr.push(callback(this[i]))
    }
}
array.myCraftMap(function (el){
    console.log(el + 5)
})

 */

/*polyfill for Reduce
//es6
let sumOfArr = array.reduce(function (total, current){
    return total + current
})

console.log(sumOfArr);

//polyfill

Array.prototype.myCraftReduce = function(callback, initialValue){
    let accumulator = initialValue ===  undefined ? undefined : initialValue;
    for( let i = 0; i < this.length; i++){
        if ( accumulator !== undefined) {
            accumulator = callback.call(undefined, accumulator, this[i], i,  this)
        } else {
            accumulator = this[i]
        }
    }
    return accumulator
}
let sumOfArr2 = array.myCraftReduce(function (total, current){
    return total + current
})
console.log(sumOfArr2);

 */


// const createPhrase = (greetings) => {
//      return name => `${greetings} ${name}`
// }
// const seyHi =  createPhrase('Hello')
//
// console.log(seyHi('Aleks'))

// let first = 1; let first = 2;
// console.log(first)
//
// const first1 = 1, second = 2;
//
// console.log(first1, second)


// let i = 0; let c = 0;
// const str = 'Rolling Scopes School';
// while (i < str.length) { if (str[i] === 'o') { c++; } i++; }
// console.log(c);

// for (let i = 0; i <= 4; i++)
// {console.log(++i);}

/*
const simpleNum = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const preTenthNum = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const tenthNum = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']


let res = (number) => {
    let arr = number.toString().split('');
    let secondNum = Number(arr[1])
    console.log(secondNum)
    const oneNumbers = () => {
            switch (number) {
                case 0: return simpleNum[0];
                case 1: return simpleNum[1];
                case 2: return simpleNum[2];
                case 3: return simpleNum[3];
                case 4: return simpleNum[4];
                case 5: return simpleNum[5];
                case 6: return simpleNum[6];
                case 7: return simpleNum[7];
                case 8: return simpleNum[8];
                case 9: return simpleNum[9];
            }
        }
    const preTenthNumbers = () => {

        switch (number) {
            case 10: return preTenthNum[0];
            case 11: return preTenthNum[1];
            case 12: return preTenthNum[2];
            case 13: return preTenthNum[3];
            case 14: return preTenthNum[4];
            case 15: return preTenthNum[5];
            case 16: return preTenthNum[6];
            case 17: return preTenthNum[7];
            case 18: return preTenthNum[8];
            case 19: return preTenthNum[9];
        }
    }

    const tenthNumbers = (number) => {
        let tenthNumb = []
        let array = number.toString().split('')
        if(array[0] === '2') {
            tenthNumb.push(`twenty ${oneNumbers(secondNum)}`)
        }
        return tenthNumb


        // switch (number) {
        //     case 21: return tenthNum[0]
        //     case 23: return tenthNum[1]
        //     case 24: return tenthNum[2]
        //     case 25: return tenthNum[3]
        //     case 26: return tenthNum[4]
        //     case 27: return tenthNum[5]
        //     case 28: return tenthNum[6]
        //     case 29: return tenthNum[7]
        // }
    }
     if( arr.length === 1 ) {
         return oneNumbers()
    }
     if ( arr.length === 2 &&  arr[0] === '1') {
        return preTenthNumbers()
    }
     if ( arr.length === 2 && arr[0] === '2') {
        return tenthNumbers()
    }

}


// console.log(res(1))
// console.log(res(3))
// console.log(res(15))
console.log(res(24))
console.log(res(34))

 */

/*
arr5 = [1, 3, 5, 7, 9, 11, 12];
arr6 = [1, 2, 3, 4, 5, 10, 12];
arr1 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8, 9, 10];

function mergeArrays(arr1, arr2) {
    let res = arr1.concat(arr2).sort((a, b) => b - a).reverse()
    return Array.from(new Set(res))

}


console.log(mergeArrays(arr1, arr2));
console.log(mergeArrays(arr5, arr6));
*/
/*
function add(num1, num2) {

    let a = num1.toString().split('').reverse().join('')
    let b = num2.toString().split('').reverse().join('')
    console.log(a, b)
    if (a.length < b.length) {
        [a, b] = [b, a]
    }
    let res = ''
    for (let i = 0; i < a.length; i++) {
        let num1 = parseInt(a[i])
        let num2 = parseInt(b[i] || 0)
        res = (num1 + num2).toString() + res
    }

    return parseInt(res)
}

console.log(add(2, 11));
console.log('==============')
console.log(add(0, 1));
console.log('==============')
console.log(add(0, 0));
console.log('==============')
console.log(add(16, 18));

 */
/*
let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

 let res = questions.map(el => el.Active='false')
console.log(res);
 */

//
// function strCount(obj){
//  let count = 0
//     for(let i in obj) {
//         if (typeof obj[i] === 'string') {
//             count++
//         }
//     }
//     return count
// }
//
// let contObj = {
//     first: "1",
//     second: "2",
//     third: false,
//     fourth: ["anytime",2,3,4],
//     fifth:  null
// }
//
// console.log(strCount(contObj))

/*
let stringArray = ['??????????????', '????????????????', '????????????'];
let numericStringArray = ['80', '9', '700'];
let numberArray = [40, 1, 5, 200];
let mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
    return a - b;
}

// console.log('stringArray:', stringArray.join());
//
// console.log('sort: ', stringArray.sort())

console.log('numberArray:', numberArray.join());
console.log('sort:', numberArray.sort());
console.log('???????????????????? ?? ???????????????? compareNumbers:', numberArray.sort(compareNumbers));

 */

// function abc() {
//     console.log(this)
//     console.log(3 + 5 / 2)
//     this.style.background = 'red';
// }
//
//
//
// document.querySelector('form').onclick = abc
//
// let p = document.querySelectorAll('p');
//
// p.forEach(function (el){
//     el.onclick = abc
// })


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
    {
        name: 'Alex',
        age: 72
    },
    {
        name: 'Dino',
        age: 31
    },

];
let secondArray = [
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
    {
        name: 'Alex',
        age: 72
    },
    {
        name: 'Dino',
        age: 31
    },

];


let sortArr = array.sort((a, b) => {
    return a.age - b.age
})

let sortArrByName = secondArray.sort((a, b) => {
    if (a.name < b.name) {
        return -1
    }
    if (a.name > b.name) {
        return 1
    }
    return 0
})
console.log(sortArr)

console.log(sortArrByName);

/* clouser


let createPhrase = (greeting) => {
    return name => `${greeting} ${name}`
};

const seyHi = createPhrase('hello')
console.log(seyHi('Aleks'))

 */

let secondSortByAge = array.sort((a, b)=> {
    return a.age - b.age
})

console.log(secondSortByAge)


let sortByName = array.sort((a,b) => {
    if(a.name < b.name) {
        return -1
    } if(a.name > b.name){
        return 1
    }
    return 0
})

console.log(sortByName);
