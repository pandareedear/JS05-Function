// ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าเป็นจำนวนเฉพาะหรือไม่ในรูปแบบ Arrow Function

// function checkPrime(num) {
//     let isPrime = true;
//     for (let d = 2; d < num; d++) {
//         if (num % d == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) console.log(num);
// }

// function printPrime(limit) {
//     for (let n = 2; n <= limit; n++) {
//         checkPrime(n);
//     }
// }
// printPrime(7);



let checkPrime = (num) => {
    let isPrime = true;
    for (let d = 2; d < num; d++) {
        if (num % d == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        return console.log(num+ " is a prime num"
    )}
    else {
        return console.log(num + " not a prime num"
    )}
}
checkPrime(6);
