import { actionCreator } from "../utility/actionCreator"

export const TEST_ACTION = 'TEST_ACTION'
export const testAction = actionCreator(TEST_ACTION, 'test')