import { useState } from 'react';
import TaskCard from './TaskCard';

export default function Column({ status, tasks, onAddTask, onDeleteTask, onUpdateTask }) {
  const [newTitle, setNewTitle] = useState('');

  const handleAdd = () => {
    if (!newTitle.trim()) return;
    onAddTask({ title: newTitle.trim(), status });
    setNewTitle('');
  };

  return (
    <div style={{
      flex: 1,
      minWidth: '300px',
      maxWidth: '400px',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f4f4f4',
      padding: '16px',
      borderRadius: '8px',
      minHeight: '100vh',
      boxSizing: 'border-box'
    }}>
      <h3 style={{ textTransform: 'capitalize', marginBottom: '12px' }}>
        {status.replace('_', ' ')}
      </h3>

      <div style={{ flexGrow: 1 }}>
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={onDeleteTask}
            onUpdate={onUpdateTask}
          />
        ))}
      </div>

      <div style={{ marginTop: '12px' }}>
        <input
          type="text"
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
          placeholder="Add a new task"
          style={{
            padding: '8px',
            width: '100%',
            boxSizing: 'border-box',
            marginBottom: '6px'
          }}
        />
        <button onClick={handleAdd} style={{ width: '100%' }}>
          Add
        </button>
      </div>
    </div>
  );
}
