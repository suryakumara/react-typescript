import React from "react";
import TextField from "./TextField";
import Todo from "./Todo";

const App: React.FC = () => {
  return (
    <div>
      <TextField
        text="Hello"
        person={{ firstName: "Surya", lastName: "Kumara" }}
        handleChange={(e) => e.target.value}
      />
      <Todo />
    </div>
  );
};

export default App;
