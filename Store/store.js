import  nameReducer  from './Reducers/reducer.js'
import {createStore, combineReducers} from 'redux'


const store = createStore(nameReducer)
export default store