'use strict';

console.log('Hello World!!');

const array = [1, 2, 'dog!', 1, 2, 'cat!'];

console.log(array[0]); // → 1
const animal = array[2];
console.log(animal); // → dog!
array[3] = 'pig!';   // arrayの“要素”は定数ではないので代入可
array[4] += array[0];
console.log(array); // → [1, 2, 'dog!', 'pig!', 3, 'cat!']

//array = [1, 2, 3, 'dah', '!!'];  // arrayそのものは定数なのでエラー

for (let i = 0; i < 5; i += 1) {
    console.log(array[i]); // → 1, 2, 3, dah, !!
    array[i] = i;  // 要素の値の書き換え
  }
  
  console.log(array); // → [0, 1, 2, 3, 4]

  console.log(array.length); // → 5

  for (let i = 0; i < array.length; i += 1) {
    console.log(array[i]);
  }
{
  const array = [1, 2, 3];
for (const el of array) {
  console.log(el);  // 1 → 2 → 3
}
}
{
const array = [0, 1, 2, 3];
array[2] = 'end';
console.log(array); // → [0, 1, 2, 3, 'end']
}
{
const array = [0, 1, 2, 3];
array[array.length] = 'end';
console.log(array); // → [0, 1, 2, 3, 'end']
}

let x;  // 初期値なしで変数宣言
console.log(x);  // → undefined

if (x == undefined) {
  console.log('xが未定義だよ');
}
{
const array = [1, 2, 3];

array.push(4);     // 末尾に追加 [1, 2, 3, 4]
array.unshift(0);  // 先頭に追加 [0, 1, 2, 3, 4]
array.pop();       // 末尾の要素を削除 [0, 1, 2, 3]
array.shift();     // 先頭の要素を削除 [1, 2, 3]
console.log(array);
}
{
const array = [1, 2, 3];

array.splice(1, 0, 'A');  // インデックス 1 に'A'を挿入 [1, 'A', 2, 3]
array.splice(2, 1);  // インデックス 2 を削除 [1, 'A', 3]
array.splice(3,3,'Z');
console.log(array);
}
{
const array = ['a', 'b', 'c'];

const index = array.indexOf('b'); // 戻り値：1
if (index != -1) {
  array.splice(index, 1);  // → ['a', 'c']
}
}
{
const array = [1, 2, 3];

const newArray = array.map((el) => el + '号');
console.log(newArray);  // → [1号, 2号, 3号]

// 同じ処理をfor-of文で描くと…
const newArray2 = [];
for (const el of array) {
  newArray2.push(el + '号');
}
}
{
const array = [1, 2, 3, 4, 5];

const newArray = array.filter((el) => el > 3);
console.log(newArray);  // → [4, 5]

// 同じ処理をfor-of文で描くと…
const newArray2 = [];
for (const el of array) {
  if (el > 3) {
    newArray2.push(el);
  }
}
}
{
const array = [1, 2, 3, 4, 5];

const newArray = array.filter((el) => el > 3).map((el) => el + '号');
console.log(newArray);  // → [4号, 5号]
}

'use strict';

const etoList = ['ネズミ', 'ウシ', 'トラ', 'ウサギ'];

const ul = document.getElementById('list'); // ul要素を呼び出す（定数ul）

for (const eto of etoList) {
    const li = document.createElement('li');// liエレメントを生成（定数li）
    li.textContent = eto;  // etoに配列要素が入っている// // liエレメントの内容を配列arrayの各要素に
    ul.appendChild(li);  // liエレメントをulエレメントの子要素にする
  }

{
  const numList = [1, 2, 3, 4, 5, 6, 7, 8];

  for (const num of numList) {
    if (num % 2 == 0) {
      const li = document.createElement('li');
      li.textContent = 'No.' + num;
      ul.appendChild(li);
    }
  }
}

{
const numList = [1, 2, 3, 4, 5, 6, 7, 8];

const evenList = numList.filter((num) => num % 2 == 0).map((even) => 'No.' + even);

for (const num of evenList) {
  const li = document.createElement('li');
  li.textContent = num;
  ul.appendChild(li);
}
}