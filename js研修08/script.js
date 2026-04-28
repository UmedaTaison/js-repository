'use strict';

console.log('Hello World!!');

const p2 = document.querySelector('p');
console.log (p2.textContent);  // → Document Object Modelの略です。

const lis = document.querySelectorAll('li');
console.log (lis);  // → NodeList(3) [li, li, li]

console.log (lis[0].textContent);  // → D … Document
console.log (lis[1].textContent);  // → O … Object
console.log (lis[2].textContent);  // → M … Model

for (const li of lis) {
  console.log(li.textContent);  // → D … Document → ...
  li.textContent = "DOM!!";  // HTMLが書き換わる
}

console.log(lis);  // → HTMLCollection(3) [li, li, li]

const lisArray = Array.from(lis);  // 配列に変換

for (const li of lisArray) {
  console.log(li.textContent);
}

lisArray.forEach((li) => li.textContent = 'DOM!!');

const ps = document.getElementsByClassName('explain');
console.log(ps);  // → HTMLCollection(2) [p, p]

const inputs = document.getElementsByName('dom');
console.log(inputs);  // → NodeList(3) [input, input, input]

const a = document.getElementById('link'); // a要素
console.log(a);

const p = a.parentElement;  // 親要素
console.log(p);

const img = a.firstElementChild;  // 最初の子要素
console.log(img);

const ul = document.getElementById('list');  // 親要素 → ul

const li1 = ul.firstElementChild;  // 最初の子要素 → li1
console.log(li1.textContent);      // → D … Document

const li2 = li1.nextElementSibling;  // li1の次の兄弟要素 → li2
console.log(li2.textContent);        // → O … Object

const li3 = li2.nextElementSibling;  // li2の次の兄弟要素 → li3
console.log(li3.textContent);        // → M … Model
{
const ul = document.getElementById('list');

for (let li = ul.firstElementChild; li != null; li = li.nextElementSibling) {
  console.log(li.textContent);
}
}
{
const ul = document.getElementById('list');
const newLi = document.createElement('li');
newLi.textContent = 'DOM!!';

const li1 = ul.firstElementChild;  // ul要素の先頭の子要素

ul.insertBefore(newLi, li1);  // ul要素の先頭の子要素の手前に挿入
}
{
const ul = document.getElementById('list');

const li1 = ul.firstElementChild; // 1番目の要素
const li2 = li1.nextElementSibling; // 2番目の要素
const li3 = li2.nextElementSibling; // 3番目の要素

ul.appendChild(li1);  // 先頭要素が最後尾に移動する
}
{
const ul = document.getElementById('list');
const li1 = ul.firstElementChild;  // 1番目の子要素
const newLi = document.createElement('li');  // 新しいli要素
newLi.textContent = 'DOM!!';

ul.replaceChild(newLi, li1);  // 1番目の子要素と新しい要素を置換
}
{
const ul = document.getElementById('list');
const li1 = ul.firstElementChild;   // 1番目の子要素
const li2 = li1.nextElementSibling; // 2番目の子要素

ul.removeChild(li1); // 1番目の子要素を削除
li2.remove();        // 2番目の子要素を削除
}

// while (親エレメント.firstChild) {
//     親エレメント.removeChild(親エレメント.firstChild);
//   }