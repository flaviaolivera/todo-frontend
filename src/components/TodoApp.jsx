import Column from './Column';
import { useTasks } from '../hooks/useTasks';

export default function TodoApp() {
  const {
    tasks,
    addTask,
    editTask,
    deleteTask,
  } = useTasks();

  const statuses = ['open', 'in_progress', 'completed'];

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
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
          onAddTask={addTask}
          onEditTask={editTask}
          onDeleteTask={deleteTask}
        />
      ))}
    </div>
  );
}
