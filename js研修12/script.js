// 'use strict';

// const p = document.getElementById('output'); // 出力用のp要素

// // ［表示］ボタンを押したら…
// document.querySelector('button').addEventListener('click', () => {
//     const text = document.getElementById('textInput');
//   p.textContent = text.value;
//   const radio = document.getElementsByName('abcRadio');
// for (const btn of radio) {
//   if (btn.checked == true) {
//     p.textContent = btn.value;
//   }
// }
// const checkbox = document.getElementsByName('abcCheck');
// const values = [];
// for (const box of checkbox) {
//   if (box.checked == true) {
//     values.push(box.value);
//     const select = document.querySelector('select');
// p.textContent = select.value;
// const multiSelect = document.querySelector('select[multiple]');
// const values = [];
// for (const opt of multiSelect.options) {
//   if (opt.selected == true) {
//     values.push(opt.value);
//   }
// }
// const text = document.getElementById('textInput');
// text.addEventListener('input', () => {
//   p.textContent = text.value;
// });
// p.textContent = values;

//   }
// }
// p.textContent = values;

// for (const box of checkbox) {
//   box.addEventListener('change', () => {
//     // チェックが付けられた場合
//     if (box.checked == true) {
//       values.push(box.value);
//     }
//     // チェックが外された場合
//     else {
//       // 配列valuesからチェックされた要素のインデックスを調べる
//       const removeIndex = values.indexOf(box.value);
//       // 配列valuesからそのインデックスの要素を削除
//       values.splice(removeIndex, 1);
//     }
//     p.textContent = values;
//   });
// }
// const form = document.querySelector('form');

// form.addEventListener('submit', (ev) => {
//   ev.preventDefault();

//   const p = form.firstElementChild; // formの最初の子要素 → p要素
//   p.textContent = form.formInput.value; // form.formInput → input要素
// });
//   // 今回のコードはここに書いていきます
//   text.value = '入力完了しました';  // フォームの書き換え
// });

// // 上記コードの続き

// const bgColor = document.getElementById('bgColor');
// const fgColor = document.getElementById('fgColor');

// const backGround = document.getElementById('background');
// const foreGround = document.getElementById('foreground');

// backGround.style.backgroundColor = bgColor.value;
// foreGround.style.color = fgColor.value;
// // 背景色は change イベント
// bgColor.addEventListener('change', () => {
//   console.log(bgColor.value);
// });

// // 前景色は input イベント
// fgColor.addEventListener('input', () => {
//   console.log(fgColor.value);
// });
