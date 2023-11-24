import { Component } from 'react';
import css from './TodoLogic.module.css';
import TodoList from 'components/TodoList/TodoList';
import initialTodos from '../../todos.json';
class TodoLogic extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
    return (
      <div className={css.container}>
        <h2 className={css.title}>Состояние заметок (todoList)</h2>
        <p className={css.description}>
          Общее количество заметок: {totalTodoCount}
        </p>
        <p className={css.description}>
          Количество выполненных заметок: {completedTodoCount}
        </p>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default TodoLogic;
