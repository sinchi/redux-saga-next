import axios from 'axios'
import { put, take } from 'redux-saga/effects'
import { fetchTodosAction, fetchPostsAction, GET_CURRENT_USER, setCurrentUserAction } from '../actions'

const userInfo = new Promise((resolve, reject) => {
  let wait = setTimeout(() => {
    const data = {
      'name': 'belghar',
      'firstName': 'ayoub',
      'age': '32'
    }
    resolve(data)
    clearTimeout(wait);
  }, 2000)
})
export function* currentUserSaga() {
  const { id } = yield take(GET_CURRENT_USER);
  console.info('find user by id', id)
  const {data} = yield axios.get('https://jsonplaceholder.typicode.com/users/'+id);
  yield put(setCurrentUserAction(data))
}