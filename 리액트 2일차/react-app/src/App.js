// ./component/Jsx <- 경로
//import Jsx from "./component/Jsx";
import MyComponent from "./component/MyComponent";

function App() {
  // < /> <= 셀프 클로징
  //<Jsx />
  return (
    <MyComponent name="React" name2=".js">
      안녕하세요
    </MyComponent>
  );
}

export default App;
