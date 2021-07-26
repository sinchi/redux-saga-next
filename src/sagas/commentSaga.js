import axios from "axios";
import { all, call, fork, put, take } from "redux-saga/effects";
import { SET_POSTS, fetchCommentsAction } from "../actions";

export function* fetchCommentSaga() {
  const { posts } = yield take(SET_POSTS);
  yield all(posts.map(post => fork(fetchCommentByPostSaga, post)))
}

export function* fetchCommentByPostSaga(post) {
  const { id: postId } = post;
  const { data: comments } = yield call(axios.get, `https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  yield put(fetchCommentsAction(comments, postId))
}
