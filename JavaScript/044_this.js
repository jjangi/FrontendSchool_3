function a() {
  console.log(this);
}
a();

function b() {
  console.log("hello world");
}
b();
window.b();

let test = {
  one: 1,
  two: 2,
  three: function () {
    console.log(this);
  },
};

test.three();
let test2 = test.three;

// 추가 예제 //
function sayName() {
  console.log(this.name);
}

var name = "Hero";

let peter = {
  name: "Peter Parker",
  say: sayName,
};

let bruce = {
  name: "Bruce Wayne",
  say: sayName,
};

sayName();
peter.say();
bruce.say();

function a() {
  console.log(this.name);
  function b() {
    console.log(this.name);
  }
  b();
}
a();

function a() {
  console.log(this);
  function b() {
    console.log(this);
    function c() {
      console.log(this);
    }
    c();
  }
  b();
}
a();
// depth가 아무리 깊어져도 window 출력.
// 함수 안의 함수여도 호출 주체가 없으니까 window.

a.b.c.d.e.say(); //e
