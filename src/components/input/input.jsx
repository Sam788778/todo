import styles from './input.module.css';

const Input = ({ editText, setEditText, editTaskId, addTask, saveEdit }) => {
  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder="Task to be done..."
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
      />
      <button onClick={() => {
        if (editTaskId !== null) {
          saveEdit();
        } else {
          addTask();
        }
      }}>
        {editTaskId !== null ? 'Save' : 'Add'}
      </button>
    </div>
  );
};

export default Input;