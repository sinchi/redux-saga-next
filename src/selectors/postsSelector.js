import { createSelector } from "reselect";

export const postsSelector = createSelector(
  state => state.get('posts'),
  posts => posts
)