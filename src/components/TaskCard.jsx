import React from 'react';

export default function TaskCard({ task }) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '8px', 
      marginBottom: '8px', 
      borderRadius: '4px',
      backgroundColor: '#fff'
    }}>
      <h4>{task.title}</h4>
      <p>Status: {task.status}</p>
    </div>
  );
}
