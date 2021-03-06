import { combineReducers } from 'redux'
import postReducer from './postReducer'
import counterReducer from './counterReducer'

const rootReducers = combineReducers({
	counter: counterReducer,
	posts: postReducer,
})

export default rootReducers
