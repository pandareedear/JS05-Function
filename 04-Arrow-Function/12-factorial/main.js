// ให้เขียนฟังก์ชันคำนวณค่า factorial


const factorial = n => {
    let output = n;
    if(n == 0 || n == 1){
        return 1
    } else {
            for (let index = n ; index > 1; index--) {              
                output *= (index -1 );
            } 
    } return output
}
console.log(factorial(5));


