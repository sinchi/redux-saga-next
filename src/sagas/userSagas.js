import { put, take } from 'redux-saga/effects'
import { GET_CURRENT_USER, setCurrentUserAction } from '../actions'
import axios from 'axios'

const userInfo = new Promise((resolve, reject) => {
  let wait = setTimeout(() => {
    const data = {
      'name': 'belghar',
      'firstName': 'ayoub',
      'age': '32'
    }
    resolve(data)
    clearTimeout(wait);
  }, 5000)
})
export function* currentUserSaga() {
  const { id } = yield take(GET_CURRENT_USER);
  console.info('find user by id', id)
  const data = yield userInfo;
  yield put(setCurrentUserAction(data))
}