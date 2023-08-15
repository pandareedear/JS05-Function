// ให้เขียนฟังก์ชันตรวจสอบปีที่เป็น leap year 
// - leap year คือปี ค.ศ. ที่หารด้วย 4 ลงตัว 
// - ยกเว้นปีที่เป็นผลคูณของ 100 เช่น 1800, 1900, 2000 จะต้องหารด้วย 400 ลงตัว

//Year % 100 !==0

//Dear
// const isLeapYear = year => {
//     if (year % 100 === 0 && year % 400 === 0) 
//         return `${year} is a leap year`
//     else if (year % 4 === 0) 
//         return `${year} is a leap year`
//     else return `${year} isn't a leap year`
// }

// console.log(isLeapYear(2000))


//AJ'V
//EX #1 ไม่ดี อ่านยาก
// const isLeapYear = year => {
//     if (year % 4 === 0 && year %100 !== 0)
//         return true;
//     else if (year % 100 === 0 && year % 400 !== 0 )
//         return false;
//     else if (year % 400 == 0) 
//         return true;
// }

// #2
// const isLeapYear = year => {
//     if (year % 400 == 0)     
//         return true;
//     else if (year % 100 == 0 )
//         return false;
//     else if (year % 4 == 0)
//         return true;
        // else return false
// };

// console.log(isLeapYear(1100))


// #####4 จำ Pattern อันนี้ละกัน
// const isLeapYear = year => {
//      if (year % 100 === 0 ) {
//         return year % 400 == 0;
//      }
//      return year % 4 === 0;
// };

// #5
// const isLeapYear = year => {
//     return year % 100 === 0 ? year % 400 == 0 : year % 4 === 0;
// }

//#6
const isLeapYear = (year) => (year % 100 === 0 ? year % 400 == 0 : year %4 === 0)

console.log(isLeapYear(2000))
