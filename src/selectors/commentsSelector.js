import { createSelector } from "reselect";

export const commentsSelector = createSelector(
 // (state, id) => state.get('comments').toJS().find(comment => Object.keys(comment)[0] == id),
  state => state.get('comments'),
  comments => comments
)