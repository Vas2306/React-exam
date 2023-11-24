
import css from './TodoList.module.css';
const TodoList = ({ todos,onDeleteTodo }) => {
  return (
    <ul className={css.list}>
      {todos.map(({ id, text }) => (
        <li key={id} className={css.item}>
          <p className={css.description}>{text}</p>
              <button onClick={() => onDeleteTodo(id)} className={css.button}>Close</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
