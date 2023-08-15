// test push, feedback brach
// update solution


// function soundOfBird() {
//     console.log('เสียงงง นกกรุงหัวจุกมันริก');
//     console.log('จก');
//     for(let i = 1; i <= 11; i++){
//         console.log('กวิ้ก');
//     }
    

// }

// soundOfBird()
// soundOfBird()
// soundOfBird()
// soundOfBird()
// soundOfBird()

function isPrime(n) {
    // let n = 5
    for(let divider=2 ; divider < n;divider++) {
        if(n%divider == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(n)
}

isPrime(5);
isPrime(7);
isPrime(4);