// ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าหาร 7 ลงตัวหรือไม่

const Is7CanDivide = n =>  {
    if (n % 7 == 0) return `${n} can divisible by 7`
    else return `${n} can't divisible by 7` 
}

console.log(Is7CanDivide(10))