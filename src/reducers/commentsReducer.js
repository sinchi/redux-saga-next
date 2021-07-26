import { fromJS } from "immutable";
import { FETCH_COMMENTS_BY_POST } from "../actions";
import { reducerCreator } from "../utility";

export const comments = reducerCreator([], {
  [FETCH_COMMENTS_BY_POST](state, {comments, postId}) {
    if(state.find(detail => detail.postId === postId)){
      return state.update(detail => detail.postId === postId, comments)
    } else {
      return state.push({[postId]: comments})
    }
  }
})