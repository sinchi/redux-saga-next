import { createSelector } from "reselect";

export const commentsSelector = createSelector(
  (state, postId) => state.get('comments').toJS()[postId],
  comments => comments ? Object.values(comments)[0] : undefined
)