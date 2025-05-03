import styles from './list.module.css';

const List = ({ tasks, deleteTask, toggleTask, startEditing }) => {
  return (
    <div className={styles.tasklist}>
      {tasks.map(task => (
        <li key={task.id}>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </span>
          <button className={styles.delete} onClick={() => deleteTask(task.id)}>
            Delete
          </button>
          <button onClick={() => startEditing(task)}>Edit</button>
        </li>
      ))}
    </div>
  );
};

export default List;