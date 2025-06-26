import React, { useEffect, useState } from 'react';
import Column from './Column';

const API_URL = 'https://todo-backend-adol.onrender.com/tasks';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);

  // Traer tareas del backend
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(console.error);
  }, []);

  // Agregar tarea en backend y actualizar frontend
  const addTask = async ({ title, status }) => {
     console.log("Enviando status a backend:", status);
    try {
      const res = await fetch('https://todo-backend-adol.onrender.com/tasks', {
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

  // Filtrar tareas por estado
  const openTasks = tasks.filter(t => t.status === 'open');
  const inProgressTasks = tasks.filter(t => t.status === 'in_progress');
  const completedTasks = tasks.filter(t => t.status === 'completed');

  return (
    <div style={{ 
      display: 'flex', 
      padding: '20px',
      height: '100vh',
      boxSizing: 'border-box',
      backgroundColor: '#eaeaea'
    }}>
      <Column status="open" tasks={openTasks} onAddTask={addTask} />
      <Column status="in_progress" tasks={inProgressTasks} onAddTask={addTask} />
      <Column status="completed" tasks={completedTasks} onAddTask={addTask} />
    </div>
  );
}
