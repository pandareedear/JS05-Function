// บรรทัด \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร


function squareNum(num) {
  const result = num * num;
}

console.log(squareNum(2)); 


//undefined เพราะ const เปลี่ยนตัวแปลไม่ได้ ต้องใช้ 

function squareNum(num) {
    return result = num * num;
  }
  
  console.log(squareNum(2)); 