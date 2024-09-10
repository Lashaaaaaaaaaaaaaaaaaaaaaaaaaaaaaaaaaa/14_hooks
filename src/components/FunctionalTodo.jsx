import React, { useCallback, useState } from 'react';
import TodoList from './TodoList';
import DoneTasks from './DoneTasks';

const FunctionalTodo = () => {
  const [tasks, setTasks] = useState([]); 
  const [currentTask, setCurrentTask] = useState('');  
  const [doneTasks, setDoneTasks] = useState([]); 

  const handleonChange = useCallback((event) => {
    setCurrentTask(event.target.value);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = { task: currentTask, done: false };

    if (currentTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setCurrentTask('');
    }
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleDone = (index) => {
    const updatedTasks = [...tasks];
    const completedTask = updatedTasks.splice(index, 1)[0];
    completedTask.done = true;
    setTasks(updatedTasks);
    setDoneTasks([...doneTasks, completedTask]);
  };

  const handleDoneDelete = (index) => {
    const newDoneTasks = [...doneTasks];
    newDoneTasks.splice(index, 1);
    setDoneTasks(newDoneTasks);
  };

  const handleReset = (index) => {
    const newDoneTasks = [...doneTasks];
    const resetTask = newDoneTasks.splice(index, 1)[0];
    setDoneTasks(newDoneTasks);
    setTasks([...tasks, resetTask]);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter a task"
          onChange={handleonChange}
          value={currentTask}
        />
        <button type="submit">add task</button>
      </form>

      
      <TodoList
        tasks={tasks}
        handleDelete={handleDelete}
        handleDone={handleDone}
      />

      
      <h1>done tasks</h1>

      <DoneTasks
        doneTasks={doneTasks}
        handleDoneDelete={handleDoneDelete}
        handleReset={handleReset}
      />
    </div>
  );
};

export default FunctionalTodo;
