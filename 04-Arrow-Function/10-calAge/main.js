// ให้เขียนฟังก์ชันนับอายุเป็นจำนวนวันโดยนับจากปีที่เกิด 
// (ให้คิดว่าเกิดวันที่ 1 เดือน 1 ของปีนั้น)  
// ให้นับอายุจนถึงวันที่ 31 เดือน 12 ปี 2020

// INPUT : year
// Procedure : year * 365
// OUTPUT : day


const calDate = year => (year * 365) + " day";

console.log(calDate(2))