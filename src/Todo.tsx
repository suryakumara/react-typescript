import React from "react";

const Todo = () => {
  const [todo, setTodo] = React.useState({
    name: "Take out laundry",
    points: 40,
  });

  React.useEffect(() => {
    console.log("You need to complete some tasks!");
  }, [todo]);

  const gainPoints = () => {
    const newPoints = Math.random() >= 0.5 ? todo.points : todo.points + 1;
    setTodo((prevTodo) => ({ ...prevTodo, points: newPoints }));
  };

  return (
    <>
      <p>Current points: {todo.points}</p>
      <button onClick={gainPoints}>Increase stakes</button>
    </>
  );
};

export default Todo;
