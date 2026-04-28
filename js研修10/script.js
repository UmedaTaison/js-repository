'use strict';

const button = document.querySelector('button');
console.log(button);

button.addEventListener('click', () => {
    const p = document.getElementById('target');
    p.classList.toggle('myStyle');
  });

  button.addEventListener('mouseleave', () => {
    const p = document.getElementById('target');
    p.style.fontSize = '1em';
  });

  const img = document.querySelector('img');

// img.addEventListener('click', () => {
//   img.src = 'https://github.com/ugok-girls.png';
// });

document.querySelector('img').addEventListener('click', (ev) => {
    const img = ev.currentTarget;  // 短い名前を付ける
    img.src = 'https://github.com/ugok-girls.png';
    img.width = 150;
  })

//   img.addEventListener('click', (ev) => {
//     // ブラウザー座標系でのクリック位置
//     console.log(ev.clientX, ev.clientY);
//   });

  img.addEventListener('click', (ev) => {
    const p = document.createElement('p');  // p要素を生成
  
    // 要素座標系でのクリック位置
    p.textContent = `X:${ev.offsetX} Y:${ev.offsetY}`;
  
    // 親要素はbody要素、img要素の下に挿入
    document.body.insertBefore(p, img.nextElementSibling);
  });

  window.addEventListener('resize', () => {
    const p = document.getElementById('target');
    p.style.backgroundColor = 'gold';
  });

  // a要素の生成
const a = document.createElement('a');
a.href = 'https://zenn.dev/ojk';
a.textContent = 'リンク先に飛びます';

// script要素の上に追加
const script = document.querySelector('script');
document.body.insertBefore(a, script);


const letPGold = () => {
    const p = document.getElementById('target');
    p.style.backgroundColor = 'gold';
  };

  window.addEventListener('resize', letPGold);

  button.addEventListener('click', () => {
    window.removeEventListener('resize', letPGold);
    button.disabled = true;  // disabledを有効にする
  });



button.addEventListener('click', () => {
    const p = document.getElementById('target');
    p.classList.toggle('myStyle');
  },
  { once: true }
);