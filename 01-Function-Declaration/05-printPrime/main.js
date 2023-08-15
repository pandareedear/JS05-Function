// printPrime
// ให้สร้างฟังก์ชันรับรับพารามิเตอร์เป็นตัวเลข
// แสดง Prime number ทั้งหมด โดยแสดงตั้งแต่ 2 ถึงตัวเลขที่รับมาเป็นพารามิเตอร์

// ```js
// printPrime(7); // 2, 3, 5, 7
// printPrime(13); // 2, 3, 5, 7, 11, 13
// printPrime(14); // 2, 3, 5, 7, 11, 13
// ```

// function isPrime() {
//     let number = +prompt("Enter any number: ")
//     let primebeforenumber = 0;
//     for (divider = 2; divider < number; divider++)
//         // let primebeforenumber = 0;
//         if (number % divider == 0) {
//             isPrime = false;
//         }
//         else {
//             primebeforenumber = primebeforenumber + divider + " "
//         }
//     if (isPrime) {
//         alert(primebeforenumber + number)

//     }
//     else alert(number + " " + "isn't a prime number")
// }
// isPrime()


function checkPrime(num) {
    let isPrime = true;
    for (let d = 2; d < num; d++) {
        if (num % d == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(num);
}

function printPrime(limit) {
    for (let n = 2; n <= limit; n++) {
        checkPrime(n);
    }
}
printPrime(7);
// checkPrime(2);