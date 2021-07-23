import { fromJS } from "immutable";
import { SET_CURRENT_USER } from "../actions";
import { reducerCreator } from "../utility";

export const currentUser = reducerCreator(null, {
  [SET_CURRENT_USER](state, {user}) {
    console.info({state})
    return fromJS(user)
  }
})