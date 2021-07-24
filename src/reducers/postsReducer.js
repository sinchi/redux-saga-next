import { fromJS } from "immutable";
import { SET_POSTS } from "../actions";
import { reducerCreator } from "../utility";

export const posts = reducerCreator(null, {
  [SET_POSTS](state, {posts}) {
    console.log({posts})
    return fromJS(posts)
  }
})