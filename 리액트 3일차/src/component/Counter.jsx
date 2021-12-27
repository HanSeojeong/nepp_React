import { useState } from "react";

const Counter = () => {
  let number1 = 0;
  const [number, setNumber] = useState(0);

  //const arr = [0, 1, 2];
  //const one = arr[0];
  //const two = arr[1];
  //const [one, two] = arr;
  return (
    <>
      <h1>{number1}</h1>
    {/* console.log에서는 값이 변하지만 화면상으로 변할때 새 render을 해 주어야한다.*/}
      <button
        onClick={() => {
          number1 += 1;
          console.log(number1);
        }}
      >
        ++
      </button>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
    </>
  );
};

export default Counter;
