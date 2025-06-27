import { FiEdit, FiX } from 'react-icons/fi';

export default function TaskCard({ task, onDelete, onEdit }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'in_progress':
        return '#ff8ac1'; // rosa pastel
      case 'completed':
        return '#111'; // negro
      case 'open':
      default:
        return '#ccc'; // gris claro
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: '#ffffffcc',
        borderRadius: '12px',
        padding: '16px',
        marginBottom: '12px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease',
      }}
    >
      {/* Botones en la esquina */}
      <div
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          display: 'flex',
          gap: '6px',
        }}
      >
        <button
          onClick={onEdit}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#666',
            padding: '4px',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
          className="task-btn-edit"
        >
          <FiEdit size={16} />
        </button>
        <button
          onClick={onDelete}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#666',
            padding: '4px',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
          className="task-btn-delete"
        >
          <FiX size={16} />
        </button>
      </div>

      {/* Título con círculo de estado */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: getStatusColor(task.status),
            flexShrink: 0,
          }}
        />
        <h4
          style={{
            margin: 0,
            fontSize: '15px',
            fontWeight: 400,
            color: '#111',
          }}
        >
          {task.title}
        </h4>
      </div>

    </div>
  );
}
