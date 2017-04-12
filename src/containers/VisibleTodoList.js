/**
 * Created by khongyan on 2017/3/27.
 */
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return []
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
      console.log(id);
    }
  }
}

/**
 *  Its result must be a plain object*, and it will be merged into the component’s props
 *   If you omit it, the component will not be subscribed to the Redux store
 * @param state
 * @param [ownProps] its value will be the props passed to your component, and mapStateToProps will be additionally re-invoked whenever the component receives new props
 * @returns {{todos}} 高级用法，也可返回function,该用法参见文档
 */
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList); // Inject todos and all action creators (addTodo, completeTodo, ...) as actions

export default VisibleTodoList