import { fromJS } from "immutable";
import { SET_TODOS } from "../actions/todoActions";
import { reducerCreator } from "../utility";

export const todos = reducerCreator(null, {
  [SET_TODOS](state, {todos}) {
    return fromJS(todos)
  }
})