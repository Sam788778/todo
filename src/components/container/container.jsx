import styles from './container.module.css';
import Input from '../input/input';
import List from '../list/list';
import FilterButtons from '../buttons/buttons';

const Container = ({
  tasks,
  addTask,
  deleteTask,
  toggleTask,
  editTaskId,
  editText,
  setEditText,
  startEditing,
  saveEdit,
  filter,
  setFilter
}) => {
  return (
    <div className={styles.container}>
      <Input
        editText={editText}
        setEditText={setEditText}
        editTaskId={editTaskId}
        addTask={addTask}
        saveEdit={saveEdit}
      />
      <FilterButtons
        filter={filter}
        setFilter={setFilter}
      />
      <List
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        startEditing={startEditing}
      />
    </div>
  );
};

export default Container;