import React, { useState } from 'react';
import Column from './Column';

export default function TodoApp() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Buy groceries', status: 'open' },
    { id: 2, title: 'Do laundry', status: 'in_progress' },
    { id: 3, title: 'Read book', status: 'completed' },
  ]);

  const handleAddTask = (newTask) => {
    setTasks(prev => [...prev, { ...newTask, id: Date.now() }]);
  };

  const handleEditTask = (id, updatedFields) => {
    setTasks(prev => prev.map(task =>
      task.id === id ? { ...task, ...updatedFields } : task
    ));
  };

  const handleDeleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const statuses = ['open', 'in_progress', 'completed'];

  return (
    <div style={{
      display: 'flex',
      gap: '16px',
      padding: '24px',
      height: '100vh',
      backgroundColor: '#f0f0f0'
    }}>
      {statuses.map(status => (
        <Column
          key={status}
          status={status}
          tasks={tasks.filter(task => task.status === status)}
          onAddTask={handleAddTask}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
}
