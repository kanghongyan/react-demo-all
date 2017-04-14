/**
 * Created by khongyan on 2017/3/27.
 */
import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={ todo.id }
        id={ todo.id }
        text={ todo.text }
        authorName={ todo.info.getIn(['author', 'name']) }
        completed={ todo.completed }
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    info: PropTypes.object
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList
