บรรทัด \*, \*\*, ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
console.log(sayHi); // *
// undefined เพราะ ไม่ใช่การเรียกใช้ function sayHi ต้องมี parenthesis ()

console.log(sayHi(10)); // **
// alert('Hi kid') เพราะ ตัวแปร age น้อยกว่า 12
```


