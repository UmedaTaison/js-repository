'use strict';

console.log('Hello World!!');

// const servants = ['犬', '猿', '雉'];

// console.log('現在の家来は：');
// for (const servant of servants) {
//   console.log(servant);
// }
// console.log(`の総勢 ${servants.length} 名です。`);

// function showServants() {
//     console.log('現在の家来は：');
//     for (const servant of servants) {
//       console.log(servant);
//     }
//     console.log(`の総勢 ${servants.length} 名です。`);
//   }

//const servants = ['犬', '猿', '雉'];

// function showServants() {
//   console.log('現在の家来は：');
//   for (const servant of servants) {
//     console.log(servant);
//   }
//   console.log(`の総勢 ${servants.length} 名です。`);
// }

// showServants();

// servants.push('鬼');
// showServants();

// servants.push('桃');
// showServants();

function appendServants(newcomer1, newcomer2) {
    servants.push(newcomer1);  // ← 受け取った変数を使って書ける
    servants.push(newcomer2);

    console.log('現在の家来は：');
    for (const servant of servants) {
      console.log(servant);
    }
    console.log(`の総勢 ${servants.length} 名です。`);
  }
  const servants = ['犬', '猿', '雉'];

  appendServants('鬼','ナマハゲ');
  appendServants('桃','団子');
  appendServants('爺','ばあちゃん');


  function swapServants(newcomer) {
    servants.push(newcomer);
    servants.shift();  // 先頭要素を削除
  
    console.log('現在の家来は：');
    for (const servant of servants) {
      console.log(servant);
    }
    console.log(`の総勢 ${servants.length} 名です。`);
  }
  swapServants('鬼');
console.log('犬さん、これまでありがとう！');

swapServants('桃');
console.log('猿さん、これまでありがとう！');

// 配列を戻り値とする関数
function getArray() {
    return ['A', 'B', 'C'];  // 配列を返す
  }
  const array = getArray();
  console.log(array[1]); // → B
  
  // オブジェクトを戻り値とする関数
  function getObject() {
    return {a: 'A', b: 'B', c: 'C'};  // オブジェクトを返す
  }
  const obj = getObject();
  console.log(obj.a); // → A

  function getObject() {
    return {a: 'A', b: 'B', c: 'C'};
  }
  
  // プロパティaとcの値だけ受け取る
  const { a: a_value, c: c_value } = getObject();
  
  console.log(a_value); // → A
  console.log(c_value); // → C

 // const 関数名 = (引数) => 式;  // 式の計算結果が戻り値になる
{
 const obj = {
    name: 'OJK',
    sayHello() {
      // 同じオブジェクト内のプロパティが使える
      console.log(`Hello ${this.name}!!`);
    },
    sayHelloTwice() {
      this.sayHello(); // 同じオブジェクト内のメソッドが使える
      this.sayHello();
    }
  };
  
  obj.sayHello(); // → Hello OJK!!
  
  obj.name = '桃太郎';
  obj.sayHelloTwice(); // → Hello 桃太郎!! Hello 桃太郎!!
}