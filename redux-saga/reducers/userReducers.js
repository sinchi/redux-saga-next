import { fromJS } from "immutable";
import { GET_CURRENT_USER, SET_CURRENT_USER } from "../actions/userActions";
import { reducerCreator } from "../utility/reducerCreator";

export const setCurrentUserReducer = reducerCreator(null, {
  [GET_CURRENT_USER](state, action) {
    console.info('this time is intercepted by reducer but should taked by saga')
    return state;
  },
  [SET_CURRENT_USER](state, {user}) {
    return fromJS(user);
  }
})