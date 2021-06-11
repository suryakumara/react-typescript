import React, { useState, useRef } from "react";
interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: () => void;
  obj?: {
    f1: string;
  };
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string;
}
const TextField: React.FC<Props> = ({ handleChange }) => {
  const [count, setCount] = useState<number | null | string>(5);
  const [cor, setCor] = useState<{ text: string }>({ text: "Hello" });
  const [text, setText] = useState<TextNode>({ text: "Hello" });

  const inputRef = useRef<any>(null);
  //   setCount(null);
  React.useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input
        type="text"
        placeholder="enter name"
        ref={inputRef}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextField;
