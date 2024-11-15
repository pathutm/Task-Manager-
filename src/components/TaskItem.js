import React from 'react';
import { CheckCircle, Circle, Trash2 } from 'lucide-react';

const TaskItem = ({ task, updateTaskStatus, deleteTask, isAdmin }) => {
  return (
    <div className="task-item">
      <div className="task-title">
        {task.status === 'completed' ? <CheckCircle className="text-green-500" /> : <Circle className="text-gray-500" />}
        <span>{task.title}</span>
      </div>
      {isAdmin && (
        <div className="task-actions">
          <button onClick={() => updateTaskStatus(task.id)}>Change Status</button>
          <button onClick={() => deleteTask(task.id)}><Trash2 /></button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
