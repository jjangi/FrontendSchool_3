let me = { age: 30 };
let you = me; // 참조카운트 : 2

me = null; // 참조카운트 : 1
you = null; // 참조카운트 : 0

let x = {
  y: {
    z: 1,
  },
};

// x가 참조하는 객체를 object1, y가 참조하고 있는 객체를 object2라고 하겠습니다.

let a = x; // object1의 참조카운트 : 2 (x, a)
x = 1; // object1의 참조카운트 : 1 (a)

let b = a.y; // object2의 참조카운트 : 2 (a.y, b)
a = 2; // object1의 참조카운트 : 0 ()
// 이렇게 불필요하게 남아있는 object1 객체가 존재하는 경우 메모리 누수(memory leak)가 발생했다고 표현합니다.

function outer() {
  let privateVal = ["test"];

  function getPrivate() {
    return privateVal;
  }

  return getPrivate;
}

const getPrivateData = outer();
const secretVal = getPrivateData();

console.log(secretVal);

// secretVal = null;
// secretVal = undefined;

// --------------------배열이나 객체를 불변하는 객체처럼 다루기--------------------

let aespa = ["카리나", "윈터", "지젤", "닝닝"];
// aespa.forEach((item, index) => {
//   aespa[index] = item + "💖";
// });
// console.log(aespa);
// 원본 배열이 변경됨

const aespa2 = aespa.map((item) => {
  return item + "💖";
});
console.log(aespa);
console.log(aespa2);
// 원본 배열이 보존되고 새로운 배열이 반환됨
