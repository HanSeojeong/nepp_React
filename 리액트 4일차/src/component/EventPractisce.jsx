import { useState } from "react/cjs/react.development";

const EventPractisce = () => {
  const [form, setForm] = useState({ userName: "", message: "" });
  const { userName, message } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    //const name = e.target.name;
    //const value = e.target.value;

    // name을 키값으로 하는
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  // const [message, setMessage] = useState("");
  // const [userName, setUserName] = useState("");

  // const handleChangeMessage = (e) => {
  //   setMessage(e.target.value);
  // };

  // const handleChangeUserName = (e) => {
  //   setUserName(e.target.value);
  // };

  const handleClick = () => {
    alert(userName + ":" + message);
    setForm({ userName: "", message: "" });
    // alert(userName + ":" + message);
    // setMessage("");
    // setUserName("");
  };

  const hacdleKeyPress = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <>
      <hr />
      <h1>이벤트 연습 input</h1>

      <input
        type="text"
        name="userName"
        value={userName}
        placeholder="사용자 이름을 입력해주세요"
        onChange={handleChange}
      />

      <input
        type="text"
        name="message"
        value={message}
        placeholder="아무거나 입력해 보세요"
        onChange={handleChange}
        onKeyPress={hacdleKeyPress}
      />

      <button onClick={handleClick}>확인</button>
    </>
  );
};

export default EventPractisce;
