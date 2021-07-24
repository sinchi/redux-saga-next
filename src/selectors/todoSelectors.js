import { createSelector } from "reselect";

export const todosSelector = createSelector(
  state => state.get('todos'),
  todos => todos
)