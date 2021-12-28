const MyComponent = ({ name, name2, children }) => {
  return (
    <>
      안녕하세요, 제이름은 {name} {name2}입니다
      이것은 {children} 입니다.
    </>
  );
};

export default MyComponent;
