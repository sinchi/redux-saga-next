import { TEST_ACTION } from "../actions/testAction";
import { reducerCreator } from "../utility/reducerCreator";

export const testReducer = reducerCreator(null, {
  [TEST_ACTION](state, {test}) {
    return test;
  }
})