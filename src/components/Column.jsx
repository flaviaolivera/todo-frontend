import React, { useState } from 'react';
import TaskCard from './TaskCard';

export default function Column({ status, tasks, onAddTask }) {
  const [newTitle, setNewTitle] = useState('');

  const handleAdd = () => {
    if(newTitle.trim() === '') return;
    onAddTask({ title: newTitle.trim(), status });
    setNewTitle('');
  };

  return (
    <div style={{
      flex: 1,
      margin: '0 10px',
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderRadius: '6px',
      minHeight: '300px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <h3 style={{ textTransform: 'capitalize' }}>{status}</h3>
      <div style={{ flexGrow: 1 }}>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      <div style={{ marginTop: 'auto' }}>
        <input 
          type="text" 
          placeholder={`Add new ${status} task`} 
          value={newTitle} 
          onChange={e => setNewTitle(e.target.value)} 
          style={{ width: '100%', marginBottom: '8px', padding: '6px' }}
        />
        <button onClick={handleAdd} style={{ width: '100%' }}>Add Task</button>
      </div>
    </div>
  );
}
