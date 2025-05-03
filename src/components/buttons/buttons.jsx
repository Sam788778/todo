import styles from './buttons.module.css';

const FilterButtons = ({ filter, setFilter }) => {
    return (
        <div className={styles.buttons}>
            <button onClick={() => setFilter('All')} className={filter === 'All' ? styles.active : ''}>All</button>
            <button onClick={() => setFilter('completed')} className={filter === 'completed' ? styles.active : ''}>Completed</button>
            <button onClick={() => setFilter('inCompleted')} className={filter === 'inCompleted' ? styles.active : ''}>inCompleted</button>
        </div>
    );
};

export default FilterButtons;