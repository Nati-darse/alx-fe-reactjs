import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li 
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onDelete(todo.id);
        }}
        aria-label={`Delete ${todo.text}`}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
