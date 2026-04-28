'use strict';

console.log('Hello World!!');

const p = document.getElementById('p_id');
console.log(`p要素のidは ${p.id} です`);  // → p要素のidは p_id です

// a要素とimg要素のエレメントを取得
const a = document.getElementById('link');
const img = a.firstElementChild;

// 属性値を書き換えることもできる
console.log(`元のリンクURL: ${a.href}`);
a.href = 'https://loremflickr.com/320/240/dog';

// つまり、JavaScript側で画像を差し替えることもできる
console.log(`元の画像ソース: ${img.src}`);
img.src = 'https://loremflickr.com/320/240/dog';

{
// テキストノードを格納する変数（constではない）を用意
let textNode;

// a要素のtarget属性の値によってテキストノードの内容を場合分け
if (a.target == '_blank') {
  textNode = document.createTextNode('別のタブで開きます');
} else {
  textNode = document.createTextNode('同じタブで開きます');
}

// br要素を生成
const br = document.createElement('br');

// 親要素となるp要素（2つ目のp要素）を呼び出して、上記のノードを子要素として追加
const p = document.querySelectorAll('p')[1];
p.appendChild(br);
p.appendChild(textNode);  // テキストノードもappendChildできる
}
{
// class属性が設定されていない2番目のp要素を取得
const p = document.querySelectorAll('p')[1];
console.log(p.className);  // → 何も表示されない

p.className = 'new_class'; // class属性を追加
}
{
const a = document.getElementById('link');

const attrs = a.attributes; // 属性一覧を取得

// for-ofが使える
for (const attr of attrs) {
  console.log(attr);  // → id="link" → ...
}
}

{
// 普通のfor-of文
for (const attr of attrs) {
    console.log(attr.name + ':' + attr.value);  // → id:"link" → ...
  }
  
  // オブジェクトの分割代入を使ったfor-of文
  for (const { name, value } of attrs) {
    console.log(name + ':' + value);  // → id:"link" → ...
  }
}
{
// p_classを持った要素の2番目を取得
const p = document.getElementsByClassName('p_class')[1];

console.log(p.style);
}
{
const widthArray = [
    'border-top-width',
    'border-left-width',
    'border-bottom-width',
    'border-right-width'
  ];
  
  for (let i = 0; i < 4; i += 1) {
    p.style[widthArray[i]] = i * 2 + 'px';
  }
}

//{
// const p = document.getElementById('p_id');

// p.style.border = 'solid 1px navy';

// console.log(`border-style: ${p.style.borderStyle}`); // → solid
// console.log(`border-width: ${p.style.borderWidth}`); // → 1px
// console.log(`border-color: ${p.style.borderColor}`); // → navy
// }
//{
{
console.log(p.className); // → p_class

p.className = 'myStyle';  // myStyleクラスに切り替え

console.log(p.classList);
// → DOMTokenList ["p_class", value: "p_class"]

p.className = 'baseStyle'; // classNameプロパティも併用できる

const flag = window.prompt('A, B, or C');

if (flag == 'A') {
  p.classList.add('p_class'); // p_classを追加
} else if (flag == 'B') {
  p.classList.add('myStyle'); // myStyleを追加
}


const p = document.getElementById('p_id');

// baseStyleクラスがclassListに含まれていなければ追加する
if (p.classList.contains('baseStyle') == false) {
  p.classList.add('baseStyle');
}
}

{
const p = document.getElementById('p_id');

if (p.classList.contains('p_class') == true) {
  p.classList.remove('p_class'); // 削除
  p.classList.add('baseStyle', 'myStyle'); // 追加
}
}
{
const p = document.getElementById('p_id');

if (p.classList.contains('p_class') == true) {
  // p.classList.remove('p_class');
  // p.classList.add('baseStyle', 'myStyle');
  p.classList.replace('p_class', 'baseStyle myStyle');
}
}
{
const p = document.getElementById('p_id');

if (p.classList.contains('myStyle') == true) {
  p.classList.remove('myStyle');
} else {
  p.classList.add('myStyle');
}
}

if (true) {
    console.log('絶対に実行される');
  }
  
  if (false) {
    console.log('絶対に実行されない');
  }
  