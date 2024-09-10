import React from 'react';

const TodoList = React.memo(({ tasks, handleDelete, handleDone }) => (
  <ul>
    {tasks.map((task, index) => (
      <li key={index}>
        {task.task}
        <button onClick={() => handleDelete(index)}>delete</button>
        <button onClick={() => handleDone(index)}>done</button>
      </li>
    ))}
  </ul>
));

export default TodoList;
