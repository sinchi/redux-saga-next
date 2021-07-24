import axios from "axios";
import { put, take } from "redux-saga/effects";
import { FETCH_TODOS, setTodosAction } from "../actions/todoActions";

export function* fetchTodosSaga() {
  yield take(FETCH_TODOS);
  const { data } = yield axios.get('https://jsonplaceholder.typicode.com/todos');
  yield put(setTodosAction(data));
}