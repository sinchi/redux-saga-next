import { SET_CURRENT_USER, setPostsAction } from "../actions";
import { call, put, take, delay } from 'redux-saga/effects'
import axios from "axios";

export function* fetchPostsSaga() {
  const { user } = yield take(SET_CURRENT_USER)
  const { data: posts } = yield call(axios.get, `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
  yield delay(2000)
  yield put(setPostsAction(posts))
}
