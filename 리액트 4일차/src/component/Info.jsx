import { useState } from "react/cjs/react.development";

const Info = () => {
  const [name, setName] = useState("");
  const changeName = (e) => {
    setName(e.target.value);
  };

  const [nickName, setNickName] = useState("");

  const changeNickName = (e) => {
    setNickName(e.target.value);
  };

  return (
    <>
      <div>
        <input
          placeholder="이름을 입력해주세요"
          onChange={changeName}
          value={name}
        />
        <input
          placeholder="닉네임을 입력해주세요"
          onChange={changeNickName}
          value={nickName}
        />
      </div>
      <h2>이름 : {name}</h2>
      <h2>닉네임 : {nickName}</h2>
    </>
  );
};

export default Info;
