import { actionCreator } from "../utility"
import { SET_TODOS } from "./todoActions"

export const FETCH_POSTS = 'FETCH_POSTS'
export const fetchPostsAction = actionCreator(FETCH_POSTS)

export const SET_POSTS = 'SET_POSTS'
export const setPostsAction = actionCreator(SET_POSTS, 'posts')