import { actionCreator } from "../utility";

export const FETCH_TODOS = 'FETCH_TODOS';
export const SET_TODOS = 'SET_TODOS';
export const fetchTodosAction = actionCreator(FETCH_TODOS);
export const setTodosAction = actionCreator(SET_TODOS, "todos");