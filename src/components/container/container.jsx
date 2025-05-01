import styles from './container.module.css';
import Input from '../input/input';
import List from '../list/list';

const Container = ({ tasks, inputValue, setInputValue, addTask, deleteTask, toggleTask }) => {
  return (
    <div className={styles.container}>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onAdd={addTask}
      />
      <List
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </div>
  );
};

export default Container;