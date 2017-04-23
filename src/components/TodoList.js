/**
 * Created by khongyan on 2017/3/27.
 */
import React from 'react'
import Todo from './Todo'

class TodoList extends React.PureComponent {
  render() {
    console.log('render list')
    
    const {todos, onTodoClick} = this.props;
    
    
    return (
      <ul>
        {todos.map(todo => {
            return (
              <Todo
                key={ todo.get('id') }
                id={ todo.get('id') }
                text={ todo.get('text') }
                authorName={ todo.getIn(['info', 'author', 'name']) }
                completed={ todo.get('completed') }
                onClick={() => onTodoClick(todo.get('id'))}
              />
            )
          }
        )}
      </ul>
    )
  }
}

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired,
//     info: PropTypes.object
//   }).isRequired).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// };

export default TodoList
