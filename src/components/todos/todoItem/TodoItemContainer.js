import { connect } from 'react-redux'
import { todosSelector } from '../../../selectors'
import { TodoItemDisplay } from './TodoitemDisplay';

const mapPropsToState = (state, {id, isActive, onItemSelected}) => {
  const todos = todosSelector(state);
  const todo = todos.find(todo => todo.get('id') === id)
  return {
    ...todo,
    fetched: todo !== undefined,
    isActive,
    onItemSelected
  }
}
export const TodoItemContainer = connect(mapPropsToState)(TodoItemDisplay)