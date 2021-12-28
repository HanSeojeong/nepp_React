// ./component/Jsx <- 경로
//import Jsx from "./component/Jsx";
//import MyComponent from "./component/MyComponent";
//import Counter from "./component/Counter";
// import Say from "./component/Say";
// import EventPractisce from "./component/EventPractisce";
import IterationSample from "./component/IterationSample";
//import Counter2 from "./component/Counter2";
import { useState } from "react";
// import Info from "./component/Info";
// import Counter3 from "./component/Counter3";
import Average from "./component/Average";

function App() {
  let [showInfo, setshowInfo] = useState(true);
  // < /> <= 셀프 클로징
  //const name = "React";
  //<Jsx />

  const showClick = () => {
    //setshowInfo(!showInfo);
    setshowInfo((curr) => !curr);
  };

  return (
    <>
      {/*<button onClick={showClick}>{showInfo ? "숨기기" : "보이기"}</button>
      {showInfo && <Info />}
  <Counter3 />*/}
      <Average />
      <IterationSample />
    </>
  );
}

export default App;
