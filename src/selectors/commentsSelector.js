import { createSelector } from "reselect";

export const commentsSelector = createSelector(
  state => state.get('comments'),
  comments => comments
)