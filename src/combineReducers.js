import * as reducers from './reducers'
import { fromJS } from 'immutable'

export const combineReducers = config => {
  const defaultState = fromJS(Object.keys(config).reduce((a,key)=>{a[key] = config[key](undefined,[]); return a},{}));

  return (state = defaultState, action) => {
    return Object.keys(config).reduce((state, key) => {
      const reducer = config[key];
      const previousState = state.get(key);
      const newValue = reducer(previousState, action);
      if(newValue === undefined) {
        throw new Error(`the reducer with key ${key} return undefined`)
      }
      return state.set(key, newValue)
    }, state);
  }
   
}

export const reducer = combineReducers(reducers);
