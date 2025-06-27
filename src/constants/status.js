export const STATUSES = {
  open: {
    label: 'Open',
    color: '#ccc',
  },
  in_progress: {
    label: 'In Progress',
    color: '#ff8ac1',
  },
  completed: {
    label: 'Completed',
    color: '#111',
  },
};

export const getStatusColor = (status) => {
  return STATUSES[status]?.color || '#ccc';
};



