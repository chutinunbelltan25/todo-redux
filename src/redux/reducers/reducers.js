import { combineReducers } from 'redux'
import notesReducer from './notesReducer'
import visibilityReducer from './visibilityReducer'
import showTagReducer from './showTagReducer'

const reducers = combineReducers({
  notes: notesReducer,
  visibility: visibilityReducer,
  showTag: showTagReducer
})



export default reducers