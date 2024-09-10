import React from 'react';

const DoneTasks = React.memo(({ doneTasks, handleDoneDelete, handleReset }) => (
  <ul>
    {doneTasks.map((task, index) => (
      <li key={index}>
        {task.task}
        <button onClick={() => handleDoneDelete(index)}>delete</button>
        <button onClick={() => handleReset(index)}>reset</button>
      </li>
    ))}
  </ul>
));

export default DoneTasks;

