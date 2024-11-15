import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import AdminToggle from './components/AdminToggle';

const initialTasks = [
  { id: '1', title: 'Complete project proposal', status: 'in-progress' },
  { id: '2', title: 'Review team submissions', status: 'pending' },
  { id: '3', title: 'Update client presentation', status: 'completed' },
];

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);

  const toggleAdminView = () => setIsAdmin(!isAdmin);

  const addTask = (title) => {
    const newTask = { id: Math.random().toString(36).substr(2, 9), title, status: 'pending' };
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const statusOrder = ['pending', 'in-progress', 'completed'];
        const currentIndex = statusOrder.indexOf(task.status);
        const newStatus = statusOrder[(currentIndex + 1) % statusOrder.length];
        return { ...task, status: newStatus };
      }
      return task;
    }));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <AdminToggle isAdmin={isAdmin} toggleAdminView={toggleAdminView} />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask} isAdmin={isAdmin} />
    </div>
  );
};

export default App;
