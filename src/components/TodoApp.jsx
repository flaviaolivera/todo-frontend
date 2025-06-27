import React, { useEffect, useState } from 'react';
import Column from './Column';

const API_URL = 'https://todo-backend-adol.onrender.com/tasks';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(console.error);
  }, []);

  const addTask = async ({ title, status }) => {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, status })
      });
      const newTask = await res.json();
      setTasks(prev => [...prev, newTask]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await fetch(`${API_URL}/${taskId}`, {
        method: 'DELETE',
      });
      setTasks(prev => prev.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      const res = await fetch(`${API_URL}/${updatedTask.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTask)
      });
      const data = await res.json();
      setTasks(prev => prev.map(task => task.id === data.id ? data : task));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const openTasks = tasks.filter(t => t.status === 'open');
  const inProgressTasks = tasks.filter(t => t.status === 'in_progress');
  const completedTasks = tasks.filter(t => t.status === 'completed');

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px',
      padding: '20px',
      boxSizing: 'border-box',
      backgroundColor: '#eaeaea',
      minHeight: '100vh'
    }}>
      <Column
        status="open"
        tasks={openTasks}
        onAddTask={addTask}
        onDeleteTask={deleteTask}
        onUpdateTask={updateTask}
      />
      <Column
        status="in_progress"
        tasks={inProgressTasks}
        onAddTask={addTask}
        onDeleteTask={deleteTask}
        onUpdateTask={updateTask}
      />
      <Column
        status="completed"
        tasks={completedTasks}
        onAddTask={addTask}
        onDeleteTask={deleteTask}
        onUpdateTask={updateTask}
      />
    </div>
  );
}
