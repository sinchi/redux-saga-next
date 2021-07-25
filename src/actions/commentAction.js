import { actionCreator } from "../utility";

export const FETCH_COMMENTS_BY_POST = 'FETCH_COMMENTS_BY_POST'
export const fetchCommentsAction = actionCreator(FETCH_COMMENTS_BY_POST, 'comments', 'postId')