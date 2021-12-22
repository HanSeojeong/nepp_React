// ES6

// 1.const, let  => ES6
//- 블록 스코프기반 :: 블록 안에서만 사용이 가능하다. 호이스팅 불가 / TDZ 존재

// [ 예제 ] var a = undefind => undefind 출력
console.log(a);
var a = 0;
// [ 예제 ] 호이스팅이 되지 않아 에러를 출력한다.
console.log(b, c);
const b = 1;
let c = 2;


// 2. 함수 선언식 , 함수 표현식
// 함수 선언식
function a() {
  //함수에 들어갈 내용
}

// 함수 표현식(익명함수)
const d = function () {
  //함수에 들어갈 내용
};


// 3. 화살표함수
// 함수 표현식 구문에서만 사용이 가능하다. 🔼위 함수표현식과 같은 내용이다.
const d = () => {
  return; 
  // 화살표 함수에서 this를 선언시 window출력
};

//IIFE 즉시 실행함수
( async(a) => {
    const a;
    console.log("hi")
})(a);


//4. 비구조화 할당
const obj = {a: 3, b: 4} // 기본 객체 
const a = obj.a;
const b = obj.b;
// 🔼 위에 내용과 같다. react의 State에서 많이 사용
const {a, b} = obj;

// obj key = value; 생략법 
const name1 = "john";
const age = 13;
const info = {name1:name1, age:age}
const info2 = {name1, age} // 🔼 위에 내용과 같다.


// 5. default parameter
function e(a, b=2) {
    return a+b;
}

e(3); // a(3) + b(디폴트 값  2) = 5 출력
e(1,1) // a(1) + b(1) = 2 출력


// 6. 템플릿 리터럴 =? `` (백틱)
const apple = "사과";
const price = 30000;
console.log ("이 과일은" + apple + "이고 가격은" + price + "입니다.");
console.log (`이 과일은 ${apple}이고 가격은 ${price}입니다.`) // 템플릿 리터럴 사용


// 7. import from , export default
// export default이 선언되어야 다른파일로 이동이 가능하다.
// import from으로 export default된 것을 선언해 사용할 수 있게 한다.


// 8. 펼침연산자 (나머지 매개변수)
const arr = [1, 2, 3, 4, 5]
const arr2 = [0, ... arr, , 6] // [0, 1, 2, 3, 4, 5, 6] 으로 출력한다.

const obj = {a:"a", b:"b"}
const obj2 = {...obj, c:"c", a:"A"} //{a:"A", b:"b", c:"c"} 으로 출력된다.


// 9.  Promise , async&await => 서버 api 비동기 부분에서 사용하도록 하겠습니다.

// ----------------------[원시타입, 참조타입]---------------------------------

/* 원시타입: Primitive Type
- 종류 : Numbers, Strings, Booleans, null, undefined
- 값 자체를 저장 */
const a = 1 // a에 1이 담긴다.
let aaa = 3;
let bbb = aaa; // 3 => aaa가 변경되어도 bbb = 3 의 값은 변경되지 않는다.
aaa = 5 // 5

/* 참조타입: Reference Type
- 종류 : Object, Array, Function ...
- 값이 담긴 주소를 저장 */
let obj = {a:3, b:5};
let obj2 = obj;

obj.a = 4;

console.log(obj) //{a:4, b:5}; a값이 변경되었다.
console.log(obj2) //{a:4, b:5}; a값이 변경되었다.

let arr = [1, 2, 3]
let arr2 = [...arr] // arr을 수정하여도 값이 변경되지 않는다. (매우중요) => 불변객체