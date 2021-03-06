import { actionCreator } from "../utility"

export const GET_CURRENT_USER = 'GET_CURRENT_USER'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const getCurrentUserAction = actionCreator(GET_CURRENT_USER, 'id')
export const setCurrentUserAction = actionCreator(SET_CURRENT_USER, "user")