import React from "react";

const TodoItem = ({ todo, deleteTodo }) => {
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li>
      {todo.text}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
