// บรรทัด \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร


function getLongText() {
  return;
  ("Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
}

// undefined เพราะถ้าใช้ return; จะไม่สนใจค่าหลังจากนั้น ควรทำดังต่อไปนี้

function getLongText() {
  return
  ("Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
}
