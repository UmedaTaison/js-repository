'use strict';

console.log('Hello World!!');

for (let i = 0; i < 5; i += 1) {
    console.log('Hello World!!');
  }

  for (let biscuit = 1; biscuit <= 128; biscuit *= 2) {
    console.log(`ポケットを叩くとビスケットが${biscuit}つ`);
  }

  for (let a = 1; a <= 9; a += 1) {
    for (let b = 1; b <= 9; b += 1) {
      console.log(`${a} × ${b} = ${a * b}`);
    }
  }

  for (let num = 1; num <= 10; num += 1) {
    let str;
    if (num % 2 == 0) {
      str = '偶数';
    } else {
      str = '奇数';
    }
    console.log(`${num}は${str}です`);
  }

//   for (let cnt = 0; cnt < 3; cnt += 1) {
//     const msg = 'ブロック内';
//     console.log(msg);  // → ブロック内
//   }
//   console.log(msg);  // エラー： msg is not defined

  for (let num = 1; num <= 10; num += 1) {
    if (num % 5 == 0) {
      break; // → for文から抜け出す（続きは実行されない）
    }
    console.log(num); // → 1 → 2 → 3 → 4
  }
  console.log('for文から出ました');
  
  for (let a = 0; a < 5; a += 1) {
    for (let b = 0; b < 5; b += 1) {
      if (b == 4) {
        break; // ※1に抜けるだけで、一気に※2まで抜けたりしない
      }
      console.log(a + '-' + b);
    }
    // ※1
  }
  // ※2

  for (let num = 1; num <= 10; num += 1) {
    if (num % 3 == 0) {
      continue;  // breakと交互に書き換えてみる
    }
    console.log(num); // → 1 → 2 → 4 → 5 → 7 ...
  }
  console.log('for文から出ました');

  for (const data of [1, 2, 'dog!', 1, 2, 'cat!']) {
    console.log(data); // 1 → 2 → dog! → 1 → 2 → cat!
  }

  const element = document.createElement('p');
  element.textContent = 'Hello World!!';
  document.body.appendChild(element);

 

const ul = document.getElementById('list');
for (let i = 0; i < 5; i += 1) {
  const li = document.createElement('li');
  li.textContent = `子要素${i}号`;
  ul.appendChild(li);
}

