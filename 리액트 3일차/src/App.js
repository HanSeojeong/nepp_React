// ./component/Jsx <- 경로
//import Jsx from "./component/Jsx";
//import MyComponent from "./component/MyComponent";
import Counter from "./component/Counter";
import Say from "./component/Say";
import EventPractisce from "./component/EventPractisce";

function App() {
  // < /> <= 셀프 클로징
  //const name = "React";
  //<Jsx />
  return (
    <>
      <Counter />
      <Say />
      <EventPractisce />
    </>
  );
}

export default App;
