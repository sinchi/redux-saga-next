import axios from "axios";
import { delay, put, take } from "redux-saga/effects";
import { FETCH_TODOS, setTodosAction } from "../actions";

export function* fetchTodosSaga() {
  yield take(FETCH_TODOS);
  const { data } = yield axios.get('https://jsonplaceholder.typicode.com/todos');
  yield delay(2000)
  yield put(setTodosAction(data));
}