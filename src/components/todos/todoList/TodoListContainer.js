import { connect } from 'react-redux'
import { todosSelector } from '../../../selectors/todoSelectors'
import { TodoListDisplay } from './TodoListDisplay';

const mapStateToProps = state => {
  const todos = todosSelector(state)
  return {
    todos,
    fetched: todos !== null
  }
}

export const TodoListContainer =  connect(mapStateToProps)(TodoListDisplay); 