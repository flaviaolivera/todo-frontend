import React, { useState } from 'react';
import TaskCard from './TaskCard';

export default function Column({ status, tasks, onAddTask, onEditTask, onDeleteTask }) {
  const [newTitle, setNewTitle] = useState('');

  const handleAdd = () => {
    if (newTitle.trim() === '') return;
    onAddTask({ title: newTitle.trim(), status });
    setNewTitle('');
  };

  const getHeaderColor = (status) => {
    switch (status) {
      case 'in_progress':
        return '#ff8ac1'; // rosa
      case 'completed':
        return '#111'; // negro
      case 'open':
      default:
        return '#ccc'; // gris
    }
  };

  return (
    <div style={{
      flex: 1,
      minWidth: '280px',
      margin: '0 12px',
      padding: '16px 0',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '100%',
      backgroundColor: 'transparent',
    }}>
  
<div style={{
  backgroundColor: '#fff',
  borderTop: `6px solid ${getHeaderColor(status)}`, 
  borderRadius: '12px',                             
  padding: '12px 16px',
  marginBottom: '16px',
}}>
  <h3 style={{
    textTransform: 'capitalize',
    margin: 0,
    fontSize: '16px',
    fontWeight: '600',
    color: '#1c1c1e',
  }}>
    {status.replace('_', ' ')}
  </h3>
</div>

      <div style={{ flexGrow: 1 }}>
        {tasks.map(task => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onDelete={() => onDeleteTask(task.id)} 
            onEdit={() => {
              const newTitle = prompt("Edit task title", task.title);
              if (newTitle) {
                onEditTask(task.id, { title: newTitle });
              }
            }}
          />
        ))}
      </div>

      {/* Input + botón */}
      <div style={{ marginTop: '16px' }}>
        <input
          type="text"
          placeholder={`Add new ${status.replace('_', ' ')} task`}
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 12px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            marginBottom: '8px',
            fontSize: '14px',
            outline: 'none',
            boxSizing: 'border-box'
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '8px',
            backgroundColor: '#34c759',
            color: '#fff',
            border: 'none',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}
