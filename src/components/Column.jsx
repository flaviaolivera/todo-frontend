import TaskCard from './TaskCard';
import { FiPlus } from 'react-icons/fi';
import { getStatusColor } from '../constants/status';

export default function Column({ status, tasks, onAddTask, onEditTask, onDeleteTask }) {
  const handleAdd = () => {
    const title = prompt(`Add new ${status.replace('_', ' ')} task`);
    if (title && title.trim() !== '') {
      onAddTask({ title: title.trim(), status });
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
        borderTop: `6px solid ${getStatusColor(status)}`,
        borderRadius: '12px',
        padding: '12px 16px',
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        <button
          onClick={handleAdd}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            color: '#1c1c1e',
          }}
          aria-label="Add Task"
        >
          <FiPlus size={18} />
        </button>
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
    </div>
  );
}
