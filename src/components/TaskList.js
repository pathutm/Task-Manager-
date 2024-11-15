import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateTaskStatus, deleteTask, isAdmin }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask} isAdmin={isAdmin} />
      ))}
    </div>
  );
};

export default TaskList;
