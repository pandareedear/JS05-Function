/*
#### การเขียน Funcyion มี 2 แบบหลักๆ

1. Function Declaration / Named Funcction
2. Function Expression / มักจะถูกเขียนในรูปของ Anonymous Function
*/

/*
การใช้งาน Funcyion
1. ประกาศ Function => กำหนดชื่อ , input
2. เรียกใช้งาน
*/

// 1 Define 
function sayHi(name, lastName) {
    console.log(`Hello ${name} ${lastName}`);
}

//2 Call
sayHi('John', 'Doe');
sayHi('Pavit', 'Jung');


// RETURN VALUE : ผลลัพธ์ที่ได้จากการ run function จนเสร็จ
// add(5, 6) == Return Value, FN Result

function add(x, y){
    // 0 sec
    let result = x +y;

    //5 sec
    return result;
}

// add(5, 6);
// console.log(11 === add(5, 6))

// let r = add(5 ,6) // reusable result เพราะ ตัวแปร เก็บค่าไว้
// console.log(r);
// console.log(r);

// console.log(add(5 ,6)); // one time use
// console.log(add(5 ,6)); // one time use

// function isEven(n)  {
//     if(n % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// สามารถเขียนเป็น
// function isEven(n)  {
//     if(n % 2 == 0) {
//         return true;
//     } 
//     return false;   
// }
// และสามารถเขียนเป็น
// function isEven(n)  {
//     return n % 2 == 0;
// }
// console.log(isEven(5))

// Checkpoint
// - Declare : ประกาศเป็น
// - Params : รับ Input
// - Return : เข้าใจเรื่อง Return (ไม่เขียน return = undefined)
//   (return ตามด้วย expression)
// - call : เรียกใช้งาน run function

// ### FN EXPRESSION

let a = 5 * 2 + 7;
// variable = expression
/*
expression
- single value : 7
- combine expression : 7 + 2
- FN result : add(7,2)
*/

let myFunc = add;
let z = console.log;
// FORMAT : variable = FN (FN Expression)
// FN Expression : การ assign FN ให้กับ variable

console.log(myFunc(5,2));
z('Hi'); // z = console.log;

//Anonymous FN

// SYNTAX : FN EXPRESSION
// อธิบาย : กำลัง assing Anonymous fn ให้กับ ตัวแปร sayHello
const sayHello = function (name) {
    console.log('Hi' + name);
}

sayHello('Expression');
// *FN EXPRESSION => ห้ามเรียกใช้ก่อนประกาศ เพราะเหมือนตัวแปร*

//1. function add () {}
//2A. let add =  function () {}
//2B. let add =  () => {};

// const minus = (a, b) => {
//     return a - b;
// };

const minus = (a,b) => a - b;
const minusTwo = (a) => a - 2;
const two = 2;

console.log(minusTwo(5));
console.log(two);