import { FETCH_POSTS, setPostsAction } from "../actions";
import { put, take } from 'redux-saga/effects'
import axios from "axios";

export function* fetchPostsSaga() {
  yield take(FETCH_POSTS)
  const { data } = yield axios.get(`https://jsonplaceholder.typicode.com/posts`)
  yield put(setPostsAction(data))
}