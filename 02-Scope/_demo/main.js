// // GLOBAL SCOPE

// {
// function sayHi() {
//     // FUNCTION SCOPE
//     let message = "hello";
//     console.log(`# ${message}`);
// }

// sayHi();
// console.log(message);
// }


// let Scope เดียวกัน ห้ามมีชื่อซ้ำกัน แต่ reassign ได้
// Var ไม่มีแจ้งเตือนซ้ำ ควรเลี่ยงการใช้
// variable : message = identifier
let message = "h";

// function : sayHi == identifier
function sayHi(m) {
    let message = 'a';
    console.log(m);
    
}