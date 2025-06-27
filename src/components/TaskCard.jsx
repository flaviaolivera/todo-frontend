import { useState } from 'react';

const API_URL = 'https://todo-backend-adol.onrender.com/tasks';

export default function TaskCard({ task, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleDelete = async () => {
    try {
      const res = await fetch(`${API_URL}/${task.id}`, {
        method: 'DELETE'
      });
      if (res.ok) onDelete(task.id);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleEdit = async () => {
    try {
      const res = await fetch(`${API_URL}/${task.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: editedTitle })
      });
      if (res.ok) {
        const updated = await res.json();
        onUpdate(updated);
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div style={{
      backgroundColor: '#fff',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '5px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={e => setEditedTitle(e.target.value)}
            style={{ width: '100%', marginBottom: '6px' }}
          />
          <button onClick={handleEdit} style={{ marginRight: '5px' }}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <p>{task.title}</p>
          <div style={{ display: 'flex', gap: '5px' }}>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}
