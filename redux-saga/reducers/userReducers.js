import { fromJS } from "immutable";
import { SET_CURRENT_USER } from "../actions/userActions";
import { reducerCreator } from "../utility/reducerCreator";

export const setCurrentUserReducer = reducerCreator(null, {
  [SET_CURRENT_USER](state, {user}) {
    console.info({user})
    return fromJS(user);
  }
})